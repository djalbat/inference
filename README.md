# Inference

A dispatcher in a similar vein to [Redux](https://github.com/reactjs/redux).

## Why?

To go hand in hand with [Reaction](https://github.com/djalbat/Reaction). It does away with Redux's centralised state, instead passing updates directly to listeners. It generates updates by applying rules to actions and combining the results in much the same way that Redux employs reducers.

If you like Reaction and Inference you might like [Reaction with Style](https://github.com/djalbat/reaction-with-style).

## Rewiring Redux

There is a series of complementary videos:

**[Rewiring Redux](https://vimeo.com/album/4445954)**

#### Errata

- The `examples.html` file has moved to `examples/index.html`. 
- The check in Reaction's `forceUpdate()` method for the presence of an update has been made explicit.
- The `spliceChildren()` method of Reaction's `DisplayElement` class has been corrected.
- The best way to handle updates in `render()` methods is with the pattern below. Note that there is no default value of an empty object for the `update` argument. This assures that the initial JSX is rendered only once, assuming that the `render()` method is only called once with no update at all.

```js
render(update) {
  if (update) {
    // handle the update
  } else {
    return (
      // Initial JSX
    );
  }
}
```

- As of version 1.7, Reaction now has a simplified `forceUpdate()` method. The thrust of the point above still holds, however, it is worth reading about the changes nonetheless. In particular it is essential to realise that the above pattern only works if `render()` methods are passed to the dispatcher's `subscirbe()` methods in preference to `forceUpdate()` methods. Full details can be found at the foot of the Reaction readme file.
- Both of the examples now have a child `TodoListItems` class of the `TodoList` class, the latter of which is now a pure function.
- The `TodoListItems` class in the inference application example now has an `updateHandler()` mixin which follows along the lines recommended patterns and filtering updates sections at the foot of this readme file.

## Installation

With [npm](https://www.npmjs.com/):

    npm install inference

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/inference.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

```js
const inference = require('inference');

const { combineRules, createDispatcher } = inference;

...
```

## Examples

Launch the `examples/index.html` file. There is one Inference example application as well as a Redux application, for comparison.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Recommended patterns

With React and Redux, typically the `forceUpdate()` method is called whenever a listener is invoked. This will cause the component's children to be unmounted, with new children being created by way of the component's `render()` method and then mounted in place of the old ones. It is the `render()` method that typically queries the Redux state and makes use of those parts of it needed to render its children. A standard pattern is as follows:

```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState(),
          { ... } = state;

    return (

      ...

    );
  }
}
```

From this it looks as if the component will be re-rendered every time the listener is invoked. In practice, however, React ensures that, to a large extent, components are only re-rendered when necessary. This "diffing" is done under the hood and appears (at least in the author's experience) to work extremely well.

By contrast, Reaction has no diffing algorithm. This means that it is not advisable to re-render a component every time a listener is invoked. Instead, components should only change their children in some benign way on these occasions. To facilitate this, Inference passes updates to listeners when they are invoked and these can then be passed on to `render()` methods directly. A standard pattern is as follows:

```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => this.render(update));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    if (update) {
      const { ... } = update;

      // Change the children in some benign way.
    } else {
      return (

        ...

      );
    }
  }
}
```

It is important to emphasise that the `render()` method has been called directly from the listener in preference to the `forceUpdate()` method. This ensures that the component is not remounted and that the `render()` method can get away without returning any children. A benign change here means one that has does not add or remove elements from the DOM, instead only adding or removing classes, say, or changing elements' attributes. Reaction provides around a dozen methods for these kinds of changes and it is easy to add others as mixins.

Whilst the above is a perfectly workable pattern, there are times when more flexibility is needed. This is especially true as an application scales. Usually there are a few requirements:

* Components need to be remounted in response to updates instead of making benign changes to their children.

* Updates need to be processed in some way before being passed to the `render()` method.

It is recommended, therefore, that you create an `updateHandler()` mixin in order to address these kinds of requirements, invoking it in preference to either the `render()` or `forceUpdate()` methods. The above pattern then becomes the following:

```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe(this.updateHandler);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(update) {
    ...
  }
}

Object.assign(MyComponent, {
  mixins: [
    updateHandler
  ]
});

function updateHandler(update) {

  ...

}
```

Note that the simple switch on the presence or otherwise of the `render()` method's `update` argument has been removed, although there will still be times when it is best to leave it in. It all depends on the logic that results in the `render()` method being called, indirectly or otherwise, logic that should be implemented in the `updateHandler()` method. In fact several cases can be handled:

1. If the component only needs to make benign changes to its children in response to updates:

```js
function updateHandler(update) {
  this.render(update);
}
```

This is the same pattern as before, and the aforementioned switch on the presence or otherwise of the `update` argument should probably be put back into the `render()` method.

2. If the component needs to be remounted in response to updates:

```js
function updateHandler(update) {
  this.forceUpdate(update);
}
```

Note that in this case the `render()` method will be called, and passed the update, during the process of re-mounting. It should therefore return new children when it receives an update.

3. An interesting and not infrequent corner case is not returning any children *unless* an update is received:

```js
render(update) {
  if (update) {
    const { ... } = update;

    return (

      ...

    );
  }
}
```

Here the `render()` method effectively returns `undefined` when the component is first mounted. Both `undefined` and `null` return values are coerced into an empty array, however, so no harm is done.

4. The `updateHandler()` method is also the best place to filter updates before passing them to the `render()` method:

```js
function updateHandler(update) {
  const { page } = update;

  if (page) {
    this.render(update);
  }
}
```

Keeping this kind of logic out of the `render()` method keeps it simple. Note also that the `forceUpdate()` method could just as easily have been employed here, whatever is needed.

## Filtering updates

The `subscribe()` method can take any number of additional arguments specifying the names of the rules required:
For example:

```js
componentDidMount() {
  this.unsubscribe = dispatcher.subscribe(this.updateHandler, 'page', 'error');
}

componentWillUnmount() {
  this.unsubscribe();
}
```
Now the `updateHandler()` method will only be invoked if an update has a defined 'page' or 'error' property and can therefore be written accordingly:

```js
function updateHandler(update) {
  const { page, error } = update;

  if (page) {

    ...

  }

  if (error) {

    ...

  }
}
```

## Contact

- james.smith@djalbat.com
- http://djalbat.com

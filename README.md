# Inference

A dispatcher in a similar vein to [Redux](https://github.com/reactjs/redux).

## Why?

To go hand in hand with [Reaction](https://github.com/djalbat/Reaction). It does away with Redux's centralised state, instead passing updates directly to listeners. It generates updates by applying rules to actions and combining the results in much the same way that Redux employs reducers.

If you like Reaction and Inference you might like [Reaction with Style](https://github.com/djalbat/reaction-with-style).

## Installation

With [npm](https://www.npmjs.com/):

    npm install inference

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/inference.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

Both the `combineRules(...)` and `createDispatcher(...)` factory functions can be imported directly.

```
import { combineRules, createDispatcher } from "inference";

...
```
See the examples for more information.

## Examples

Launch the `examples.html` file. There is one Inference example application as well as a Redux application, for comparison.

## Recommended patterns

With React and Redux, typically the `forceUpdate()` method is called whenever a listener is invoked. This will cause the component's children to be unmounted, with new children being created by way of the component's `render()` method and then mounted in place of the old ones. It is the `render()` method that typically queries the Redux state and makes use of those parts of it needed to render its children. A standard pattern is as follows:

```
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

By contrast, Reaction has no diffing algorithm. This means that it is not advisable to re-render a component every time a listener is invoked. Instead, components should typically only change their children in some benign way on these occasions. To facilitate this, Inference passes updates to listeners when they are invoked and these can then be passed on to `render()` methods directly. A standard pattern, albeit a slightly naîve one, is as follows:

```
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

      // Make benign changes
    } else {
      return (

        ...

      );
    }
  }
}
```

It is important to emphasise that the `render()` method has been called directly from the listener instead of the `forceUpdate()` method. This ensures that the component is not remounted and that the `render()` method can get away without returning any children. A benign change here means one that has does not add or remove elements from the DOM, instead only adding or removing classes, say, or changing elements' attributes. Reaction provides around a dozen methods for these kinds of changes and it is easy to add others as mixins.

Whilst the above is a perfectly workable pattern, there are times when more flexibility is needed. This is especially true as an application scales. Usually there are a few requirements:

* Components need to be remounted in response to updates instead of just making benign changes to their children.

* Updates need to be processed in some way before being passed to the `render()` method.

It is recommended, therefore, that you create an `updateHandler()` mixin in order to address these kinds of requirements, invoking it in preference to either the `render()` or `forceUpdate()` methods. The above pattern then becomes the following:

```
class MyComponent extends Component {
  static mixins = [
    updateHandler
  ];

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

function updateHandler(update) {

  ...

}
```

Note that the simple switch on the presence or otherwise of the `render()` method's `update` argument has been removed. In fact there should now never be any need to invoke the `render()` method directly. Here are some examples:

1. If the component needs to make benign changes to its children in response to updates, do this in the `updateHandler()` mixin:

```
function updateHandler(update) {
  const { ... } = update;

  // Make benign changes
}
```

Experience has taught that this is a cleaner approach because, as already mentioned, it does away with the need for a switch on the presence or otherwise of the `render()` method's `update` argument.

2. If the component needs to be remounted in response to updates, the `forceUpdate()` method can be called directly from within the `updateHandler()` mixin:

```
function updateHandler(update) {
  this.forceUpdate(update);
}
```

Note that in this case the `render()` method will be called, and passed the update, during the process of re-mounting. It should therefore return new children when it receives an update.

3. An interesting and not infrequent corner case, and the only time it makes sense to add a switch for the presence or otherwise of the `update` argument, is when the `render()` method does not return any children *unless* an update is received:

```
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

```
function updateHandler(update) {
  const { page } = update;

  if (page) {
    update = page;  ///

    this.forceUpdate(update);
  }
}
```

Again it is worth noting that Keeping this kind of logic out of the `render()` method keeps it simple. Note also that the `update` argument has been refined before passing it on. Whether or not this is done is really just a matter of taste.

## Pre-filtering updates

The `subscribe()` method can take any number of additional arguments specifying the names of the rules required:
For example:

```
componentDidMount() {
  this.unsubscribe = dispatcher.subscribe(this.updateHandler, "page", "error");
}

componentWillUnmount() {
  this.unsubscribe();
}
```
Now the `updateHandler()` method will only be invoked if an update has a defined `page` or `error` property and can therefore be written accordingly.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

- james.smith@djalbat.com

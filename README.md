# Inference

A dispatcher in a similar vein to [Redux](https://github.com/reactjs/redux).

## Why?

To go hand in hand with [Reaction](https://github.com/djalbat/Reaction). It does away with Redux's centralised state, instead passing updates directly to listeners. It does this is by applying rules to actions and combining the results in much the same way that Redux employs reducers.

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

- As of version 1.7, Reaction now has a simplified `forceUpdate()` method. The thrust of the point above still holds, but it is worth reading about the changes nonetheless. Details can be found at the foot of the Reaction readme file.

## Installation

With [npm](https://www.npmjs.com/):

    npm install inference

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Inference.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples/index.html` file. There is one Inference example application as well as a Redux application, for comparison.

## Usage

```js
var inference = require('inference');
```

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Recommended patterns

Working with Reaction and Inference is like working with React and Redux in many ways, but different in others.

With React and Redux, typically a `forceUpdate()` method is called whenever a listener is invoked. This will appear to cause the component's children to be unmounted, with new children being created by way of the component's `render()` method and then mounted in place of the old ones. It is the `render()` method that typically queries the Redux state and makes use of those parts of it needed to render the children. A standard pattern is as follows:
```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
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

Reaction, by contrast, has no diffing algorithm. This means that it is not advisable to re-render a component every time a listener is invoked. Instead, components should only change their children in some benign way on these occasions. To facilitate this, Inference passes updates to listeners when they are invoked and these can then be passed on to `render()` methods directly. The following pattern is therefore a good place to start:
```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      this.render(update);
    });
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
It is important to emphasise that the `render()` method has been called directly from the listener in preference to the `forceUpdate()` method. This ensures that the component is not remounted and that the `render()` method can get away without returning any children. A benign change here means one that has no structural effect on the DOM, such as adding or removing classes. Reaction provides around a dozen methods for these kinds of changes and it is easy to add others as mixins.

Whilst the above is a perfectly workable pattern, there are times when more flexibility is needed. This is especially true as an application scales. Usually there are two requirements:

* Sometimes a component should be remounted in response to an update rather than just make some benign change to its children.

* Sometimes a component needs to filter updates in some way and/or pass updates down to its children.

In order ot address both of these requirements, it is recommended that you call an `updateHandler()` mixin and tailor its body to the job at hand. The above pattern therefore becomes the following:
```js
class MyComponent extends Component {
  componentDidMount() {
    this.unsubscribe = dispatcher.subscribe((update) => {
      this.updateHandler(update);
    });
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

Object.assign(MyComponent, {
  mixins: [
    updateHandler
  ]
});
```
Now several cases can be handled:

* If the component needs only to make benign changes to its children in response to updates:
```
function changeHandler(update) {
  this.render(update);
}
```

* If the component needs to be remounted in response to updates:
```
function changeHandler(update) {
  this.forceUpdate(update);
}
``
Note that in this caese the `render()` method will be called, and passed the update, in the process of re-mounting, and must provide the new children.



## Contact

- james.smith@djalbat.com
- http://djalbat.com

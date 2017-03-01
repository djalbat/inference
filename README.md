# Inference

A dispatcher in a similar vein to [Redux](https://github.com/reactjs/redux).

## Why?

To go hand in hand with [Reaction](https://github.com/djalbat/Reaction). It does away with Redux's centralised state, instead passing updates directly to listeners. It does this is by applying rules to actions and combining the results in pretty much the same way that Redux employs reducers.

## Rewiring Redux

There is now a series of complementary videos:

**[Rewiring Redux](https://vimeo.com/album/4445954)**

#### Errata

- None as yet.

## Installation

With [npm](https://www.npmjs.com/):

    npm install inference

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Inference.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples.html` file in the project's root directory. There is one Inference example application as well as a Redux application, for comparison.

## Usage

```js
var inference = require('inference');
```

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com

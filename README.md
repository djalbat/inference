# Inference

A dispatcher in a similar vein to Redux.

## Why?

To go hand in hand with [Reaction](https://github.com/djalbat/Reaction). It does away with Redux's concept of a centralised state, instead passing parameters directly to listeners. However, it does this is by combining and applying rules to actions in pretty much identical fashion to Redux's use of reducers.

## Rewiring Redux

Coming soon...

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

You will be able to launch the `examples.html` file in the project's root directory.

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

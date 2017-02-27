'use strict';

const reaction = require('reaction'),
      { React, ReactDOM } = reaction;

const TodoApp = require('./inferenceApp/component/todoApp');

const inferenceApp = () => {
  const rootDOMElement = document.getElementById('root');

  ReactDOM.render(

    <TodoApp />,
    rootDOMElement

  );
};

module.exports = inferenceApp;

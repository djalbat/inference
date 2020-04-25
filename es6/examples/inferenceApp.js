"use strict";

const reaction = require("reaction");

const TodoApp = require("./inferenceApp/component/todoApp");

const { React, ReactDOM } = reaction;

const inferenceApp = () => {
  const rootDOMElement = document.getElementById("root");

  ReactDOM.render(

      <TodoApp />

    ,
    rootDOMElement

  );
};

module.exports = inferenceApp;

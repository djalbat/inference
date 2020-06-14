"use strict";

import { React, ReactDOM } from "reaction";

import TodoApp from "./inferenceApp/component/todoApp";

const inferenceApp = () => {
  const rootDOMElement = document.getElementById("root");

  ReactDOM.render(

      <TodoApp />

    ,
    rootDOMElement

  );
};

export default inferenceApp;

"use strict";

import { React } from "reaction";

import dispatcher from "../dispatcher";

import { ADD_TODO } from "../constants";

let inputDOMElement;

const AddTodo = (props, context) => {
  return (

      <div>
        <input ref={(domElement) => {

                 inputDOMElement = domElement;

               }}
        />
        <button onClick={() => {

                  const type = ADD_TODO,
                        text = inputDOMElement.value,  ///
                        action = {
                          type,
                          text
                        };

                  dispatcher.dispatch(action);

                  inputDOMElement.value = "";

                }}
        >
          Add todo
        </button>
      </div>

  );
};

export default AddTodo;

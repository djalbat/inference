'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const constants = require('../constants');

const ADD_TODO = constants.ADD_TODO;

let id = 0;

const AddTodo = (props, context) => {
  const { store } = context;

  let inputDOMElement;

  return (

    <div>
      <input ref={(domElement) => {
               inputDOMElement = domElement;
             }}
      />
      <button onClick={() => {
                const type = ADD_TODO,
                      text = inputDOMElement.value;  ///

                store.dispatch({
                  type: type,
                  text: text,
                  id: id++  ///
                });

                inputDOMElement.value = '';
              }}
      >
        Add todo
      </button>
    </div>

  );
};

module.exports = AddTodo;

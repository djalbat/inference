'use strict';

const reaction = require('reaction');

const constants = require('../constants');

const { ADD_TODO } = constants,
      { React } = reaction;

let id = 0,
    inputDOMElement;

const AddTodo = (props, context) => {
  const { store } = context;

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
                        type: type,
                        text: text,
                        id: id++  ///
                      };

                store.dispatch(action);

                inputDOMElement.value = '';
              }}
      >
        Add todo
      </button>
    </div>

  );
};

module.exports = AddTodo;

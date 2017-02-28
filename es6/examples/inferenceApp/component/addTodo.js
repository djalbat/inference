'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const dispatcher = require('../dispatcher'),
      constants = require('../constants');

const ADD_TODO = constants.ADD_TODO;

let inputDOMElement;

const AddTodo = () => {
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
                  text: text
                };

          dispatcher.dispatch(action);

          inputDOMElement.value = '';
        }}
        >
          Add todo
        </button>
      </div>

  );
};

module.exports = AddTodo;

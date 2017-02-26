'use strict';

const reaction = require('reaction'),
      { React, ReactDOM } = reaction;

const Redux = require('./redux'),
      reducer = require('./reduxApp/reducer'),
      TodoApp = require('./reduxApp/component/todoApp'),
      Provider = require('./reduxApp/component/provider');

class ReduxApp {
  static run() {
    const { createStore } = Redux,
          store = createStore(reducer),
          rootDOMElement = document.getElementById('root');

    ReactDOM.render(

      <Provider store={store}>
        <TodoApp />
      </Provider>,
      rootDOMElement

    );
  }
}

module.exports = ReduxApp;

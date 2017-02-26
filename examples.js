(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  ReduxApp: require('../lib/examples/reduxApp')
};

},{"../lib/examples/reduxApp":3}],2:[function(require,module,exports){
'use strict';

var createStore = function createStore(reducer) {
  var state = void 0,
      listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    return function () {
      unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  dispatch();

  return { getState: getState, dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];

      nextState[key] = reducer(state[key], action);

      return nextState;
    }, {});

    return nextState;
  };
};

var redux = { createStore: createStore, combineReducers: combineReducers };

module.exports = redux;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var Redux = require('./redux'),
    reducer = require('./reduxApp/reducer'),
    TodoApp = require('./reduxApp/component/todoApp'),
    Provider = require('./reduxApp/component/provider');

var ReduxApp = function () {
  function ReduxApp() {
    _classCallCheck(this, ReduxApp);
  }

  _createClass(ReduxApp, null, [{
    key: 'run',
    value: function run() {
      var createStore = Redux.createStore,
          store = createStore(reducer),
          rootDOMElement = document.getElementById('root');


      ReactDOM.render(React.createElement(
        Provider,
        { store: store },
        React.createElement(TodoApp, null)
      ), rootDOMElement);
    }
  }]);

  return ReduxApp;
}();

module.exports = ReduxApp;

},{"./redux":2,"./reduxApp/component/provider":8,"./reduxApp/component/todoApp":9,"./reduxApp/reducer":15,"reaction":18}],4:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO;

var id = 0,
    inputDOMElement = void 0;

var AddTodo = function AddTodo(props, context) {
  var store = context.store;


  return React.createElement(
    'div',
    null,
    React.createElement('input', { ref: function ref(domElement) {
        inputDOMElement = domElement;
      }
    }),
    React.createElement(
      'button',
      { onClick: function onClick() {
          var type = ADD_TODO,
              text = inputDOMElement.value,
              ///
          action = {
            type: type,
            text: text,
            id: id++ ///
          };

          store.dispatch(action);

          inputDOMElement.value = '';
        }
      },
      'Add todo'
    )
  );
};

module.exports = AddTodo;

},{"../constants":13,"reaction":18}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var Link = require('./link'),
    constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

var FilterLink = function (_Component) {
  _inherits(FilterLink, _Component);

  function FilterLink() {
    _classCallCheck(this, FilterLink);

    return _possibleConstructorReturn(this, (FilterLink.__proto__ || Object.getPrototypeOf(FilterLink)).apply(this, arguments));
  }

  _createClass(FilterLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.context.store,
          state = store.getState(),
          visibilityFilter = state.visibilityFilter,
          _props = this.props,
          children = _props.children,
          filter = _props.filter,
          active = filter === visibilityFilter;


      return React.createElement(
        Link,
        { active: active,
          onClick: function onClick() {
            var type = SET_VISIBILITY_FILTER,
                action = {
              type: type,
              filter: filter
            };

            store.dispatch(action);
          }
        },
        children
      );
    }
  }]);

  return FilterLink;
}(Component);

module.exports = FilterLink;

},{"../constants":13,"./link":7,"reaction":18}],6:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var FilterLink = require('./filterLink'),
    constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED;

var Footer = function Footer() {

  return React.createElement(
    'p',
    null,
    'Show: ',
    React.createElement(
      FilterLink,
      { filter: SHOW_ALL },
      'All'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: SHOW_ACTIVE },
      'Active'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: SHOW_COMPLETED },
      'Completed'
    )
  );
};

module.exports = Footer;

},{"../constants":13,"./filterLink":5,"reaction":18}],7:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var Link = function Link(props) {
  var active = props.active;


  if (active) {
    return React.createElement(
      'span',
      null,
      props.children
    );
  }

  var _onClick = props.onClick;


  return React.createElement(
    'a',
    { href: '#',
      onClick: function onClick(event) {

        event.preventDefault();

        _onClick();
      }
    },
    props.children
  );
};

module.exports = Link;

},{"reaction":18}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext(context) {
      var store = this.props.store;


      return {
        store: store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children;
    }
  }]);

  return Provider;
}(Component);

module.exports = Provider;

},{"reaction":18}],9:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    VisibleTodoList = require('./visibleTodoList');

var TodoApp = function TodoApp() {

  return React.createElement(
    'div',
    null,
    React.createElement(AddTodo, null),
    React.createElement(VisibleTodoList, null),
    React.createElement(Footer, null)
  );
};

module.exports = TodoApp;

},{"./addTodo":4,"./footer":6,"./visibleTodoList":12,"reaction":18}],10:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var TodoListItem = require('./todoListItem');

var TodoList = function TodoList(props) {
  var todos = props.todos,
      onTodoClick = props.onTodoClick,
      items = todos.map(function (todo) {
    var id = todo.id,
        text = todo.text,
        completed = todo.completed;


    return React.createElement(TodoListItem, { text: text,
      completed: completed,
      onClick: function onClick() {

        onTodoClick(id);
      }
    });
  });


  return React.createElement(
    'ul',
    null,
    items
  );
};

module.exports = TodoList;

},{"./todoListItem":11,"reaction":18}],11:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var TodoListItem = function TodoListItem(props) {
  var onClick = props.onClick,
      completed = props.completed,
      text = props.text,
      textDecoration = completed ? 'line-through' : 'none',
      style = {
    textDecoration: textDecoration
  };


  return React.createElement(
    'li',
    { style: style,
      onClick: onClick
    },
    text
  );
};

module.exports = TodoListItem;

},{"reaction":18}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var TodoList = require('./todoList'),
    constants = require('../constants'),
    getVisibleTodos = require('../helper/getVisibleTodos');

var TOGGLE_TODO = constants.TOGGLE_TODO;

var VisibleTodoList = function (_Component) {
  _inherits(VisibleTodoList, _Component);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
  }

  _createClass(VisibleTodoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.context.store,
          state = store.getState(),
          todos = state.todos,
          visibilityFilter = state.visibilityFilter,
          visibleTodos = getVisibleTodos(todos, visibilityFilter);


      return React.createElement(TodoList, { todos: visibleTodos,
        onTodoClick: function onTodoClick(id) {
          var type = TOGGLE_TODO,
              action = {
            type: type,
            id: id
          };

          store.dispatch(action);
        }
      });
    }
  }]);

  return VisibleTodoList;
}(Component);

module.exports = VisibleTodoList;

},{"../constants":13,"../helper/getVisibleTodos":14,"./todoList":10,"reaction":18}],13:[function(require,module,exports){
'use strict';

var constants = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',

  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
};

module.exports = constants;

},{}],14:[function(require,module,exports){
'use strict';

var constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED;

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  var visibleTodos = void 0;

  switch (filter) {
    case SHOW_ALL:
      visibleTodos = todos;
      break;

    case SHOW_ACTIVE:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed,
            active = !completed;


        return active;
      });
      break;

    case SHOW_COMPLETED:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed;


        return completed;
      });
      break;
  }

  return visibleTodos;
};

module.exports = getVisibleTodos;

},{"../constants":13}],15:[function(require,module,exports){
'use strict';

var Redux = require('../redux'),
    combineReducers = Redux.combineReducers;


var todos = require('./reducer/todos'),
    visibilityFilter = require('./reducer/visibilityFilter');

var reducer = combineReducers({
      todos: todos,
      visibilityFilter: visibilityFilter
});

module.exports = reducer;

},{"../redux":2,"./reducer/todos":16,"./reducer/visibilityFilter":17}],16:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    TOGGLE_TODO = constants.TOGGLE_TODO;

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;


  switch (type) {
    case ADD_TODO:
      var todo = newTodo(action);

      state = [].concat(_toConsumableArray(state), [todo]);
      break;

    case TOGGLE_TODO:
      state = state.map(function (todo) {
        todo = toggleTodo(todo, action);

        return todo;
      });
      break;
  }

  return state;
};

module.exports = todos;

var newTodo = function newTodo(action) {
  var id = action.id,
      text = action.text,
      completed = false,
      todo = {
    id: id,
    text: text,
    completed: completed
  };


  return todo;
};

var toggleTodo = function toggleTodo(todo, action) {
  var id = action.id;


  if (todo.id === id) {
    var completed = todo.completed;


    completed = !completed;

    todo.completed = completed;
  }

  return todo;
};

},{"../constants":13}],17:[function(require,module,exports){
'use strict';

var constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_ALL;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;


  switch (type) {
    case SET_VISIBILITY_FILTER:
      var filter = action.filter;


      state = filter;
      break;
  }

  return state;
};

module.exports = visibilityFilter;

},{"../constants":13}],18:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":22,"./lib/reactDOM":27}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayName, props) {
    _classCallCheck(this, DisplayElement);

    var domElement = document.createElement(displayName);

    return _possibleConstructorReturn(this, (DisplayElement.__proto__ || Object.getPrototypeOf(DisplayElement)).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var propNames = Object.keys(this.props);

      propNames.forEach(function (propName) {
        var propValue = this.props[propName];

        if (false) {} else if (propName === 'ref') {
          var callback = propValue,
              domElement = this.getDOMElement();

          callback(domElement);
        } else if (propNameIsHandlerName(propName)) {
          var eventName = eventNameFromPropertyName(propName),
              handler = propValue;

          this.setHandler(eventName, handler);
        } else {
          var attributeName = propName,
              attributeValue = propValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function propNameIsHandlerName(propName) {
  return propName.match(/^on/);
}

function eventNameFromPropertyName(propName) {
  return propName.toLowerCase();
}

},{"./element":20}],20:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement, props) {
    _classCallCheck(this, Element);

    this.domElement = domElement;

    this.props = props;

    this.parent = undefined;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, reference) {
      this.parent = parent;

      if (this.domElement !== null) {
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
      }
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      if (this.domElement !== null) {
        this.domElement.parentElement.removeChild(this.domElement);
      }
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(attributeName, attributeValue) {
      if (attributeName === 'className') {
        attributeName = 'class';
      }
      if (attributeName === 'htmlFor') {
        attributeName = 'for';
      }

      if (false) {} else if (typeof attributeValue === 'string') {
        this.domElement.setAttribute(attributeName, attributeValue);
      } else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);

        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else {
        ///
      }
    }
  }, {
    key: 'setHandler',
    value: function setHandler(eventName, handler) {
      this.domElement[eventName] = handler;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      };

      return new Element(domElement, props);
    }
  }]);

  return Element;
}();

module.exports = Element;

function parentDOMElement(parent) {
  var parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;

  return referenceDOMElement;
}

},{}],21:[function(require,module,exports){
'use strict';

var helpers = {
  guaranteeArray: function guaranteeArray(arrayOrElement) {
    return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
  },

  remaining: function remaining(element, array) {
    if (element === null) {
      return array;
    }

    var index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  var index = null;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}

},{}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    DisplayElement = require('./displayElement'),
    ReactClassElement = require('./reactClassElement'),
    ReactFunctionElement = require('./reactFunctionElement'),
    ReactComponentElement = require('./reactComponentElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(object) {
      return ReactClass.fromObject(object);
    }
  }, {
    key: 'createElement',
    value: function createElement(reactObjectOrDisplayName, properties) {
      if (reactObjectOrDisplayName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromChildArguments(childArguments),
          props = Object.assign({}, properties, { children: children });

      if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
        var reactComponentConstructor = reactObjectOrDisplayName,
            reactComponent = new reactComponentConstructor();

        return new ReactComponentElement(reactComponent, props);
      } else if (reactObjectOrDisplayName instanceof ReactClass) {
        var reactClass = reactObjectOrDisplayName;

        return new ReactClassElement(reactClass, props);
      } else if (typeof reactObjectOrDisplayName === 'function') {
        var reactFunction = reactObjectOrDisplayName;

        return new ReactFunctionElement(reactFunction, props);
      } else {
        var displayName = reactObjectOrDisplayName;

        return new DisplayElement(displayName, props);
      }
    }
  }]);

  return React;
}();

module.exports = React;

React.Component = ReactComponent;

function childrenFromChildArguments(childArguments) {
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument;
  }

  return childArguments.map(function (childArgument) {
    if (childArgument instanceof Element) {
      return childArgument;
    } else {
      var text = '' + childArgument; ///

      return new TextElement(text);
    }
  });
}

function first(array) {
  return array[0];
}

},{"./displayElement":19,"./element":20,"./reactClass":23,"./reactClassElement":24,"./reactComponent":25,"./reactComponentElement":26,"./reactFunctionElement":29,"./textElement":30}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    if (render) {
      this.render = render;
    }
    if (getInitialState) {
      this.getInitialState = getInitialState;
    }
    if (getChildContext) {
      this.getChildContext = getChildContext;
    }
    if (componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
    if (componentWillUnmount) {
      this.componentWillUnmount = componentWillUnmount;
    }
  }

  _createClass(ReactClass, [{
    key: 'render',
    value: function render() {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'fromObject',
    value: function fromObject(object) {
      var render = object['render'],
          getInitialState = object['getInitialState'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];

      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.apply(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;

},{"./reactElement":28}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render() {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;

},{}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.apply(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;

},{"./reactElement":28}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parent = Element.fromDOMElement(parentDOMElement),
          reference = null,
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element":20}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('./helpers'),
    Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

},{"./element":20,"./helpers":21}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      if (this.reactFunction.getInitialState) {
        return this.reactFunction.getInitialState(this.props, this.context);
      }

      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      if (this.reactFunction.getChildContext) {
        return this.reactFunction.getChildContext(this.props, this.context);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.props, this.context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.props, this.context);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

},{"./reactElement":28}],30:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }]);

  return TextElement;
}(Element);

module.exports = TextElement;

},{"./element":20}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZm9vdGVyLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC9saW5rLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdmlzaWJsZVRvZG9MaXN0LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbnN0YW50cy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9oZWxwZXIvZ2V0VmlzaWJsZVRvZG9zLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2Rpc3BsYXlFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RDbGFzc0VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdENvbXBvbmVudEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0RE9NLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0RnVuY3Rpb25FbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi90ZXh0RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTs7QUFFQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQUMsT0FBRCxFQUFhO0FBQy9CLE1BQUksY0FBSjtBQUFBLE1BQ0ksWUFBWSxFQURoQjs7QUFHQSxNQUFNLFdBQVcsU0FBWCxRQUFXLEdBQU07QUFDckIsV0FBTyxLQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsTUFBRCxFQUFZO0FBQzNCLFlBQVEsUUFBUSxLQUFSLEVBQWUsTUFBZixDQUFSOztBQUVBLGNBQVUsT0FBVixDQUFrQixVQUFDLFFBQUQ7QUFBQSxhQUFjLFVBQWQ7QUFBQSxLQUFsQjtBQUNELEdBSkQ7O0FBTUEsTUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLFFBQUQsRUFBYztBQUM5QixjQUFVLElBQVYsQ0FBZSxRQUFmOztBQUVBLFdBQVEsWUFBTTtBQUNaLGtCQUFZLFFBQVo7QUFDRCxLQUZEO0FBR0QsR0FORDs7QUFR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bUIsb0JBQW5CLENBQXdDLEtBQUssS0FBN0MsRUFBb0QsS0FBSyxPQUF6RDtBQUNEO0FBQ0Y7Ozs7RUFyQ2dDLFk7O0FBd0NuQyxPQUFPLE9BQVAsR0FBaUIsb0JBQWpCOzs7QUM1Q0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxRQUFRLFdBQVIsQ0FBaEI7O0lBRU0sVzs7O0FBQ0osdUJBQVksSUFBWixFQUFrQjtBQUFBOztBQUNoQixRQUFNLGFBQWEsU0FBUyxjQUFULENBQXdCLElBQXhCLENBQW5CO0FBQUEsUUFDTSxXQUFXLEVBRGpCO0FBQUEsUUFFTSxRQUFRO0FBQ04sZ0JBQVU7QUFESixLQUZkOztBQURnQixxSEFPVixVQVBVLEVBT0UsS0FQRjtBQVFqQjs7OzswQkFFSyxNLEVBQVEsUyxFQUFXLE8sRUFBUztBQUNoQyxzSEFBWSxNQUFaLEVBQW9CLFNBQXBCO0FBQ0Q7Ozs0QkFFTyxPLEVBQVM7QUFDZjtBQUNEOzs7O0VBakJ1QixPOztBQW9CMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlZHV4QXBwOiByZXF1aXJlKCcuLi9saWIvZXhhbXBsZXMvcmVkdXhBcHAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCByZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvcmVkdWNlcicpLFxuICAgICAgVG9kb0FwcCA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAnKSxcbiAgICAgIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXInKTtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4LFxuICAgICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eEFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBBRERfVE9ETyA9IGNvbnN0YW50cy5BRERfVE9ETztcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCsrICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkVG9kbztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IExpbmsgPSByZXF1aXJlKCcuL2xpbmsnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSBjb25zdGFudHMuU0VUX1ZJU0lCSUxJVFlfRklMVEVSO1xuXG5jbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPExpbmsgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRDtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGEgaHJlZj0nIydcbiAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgb25DbGljaygpO1xuXG4gICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoe1xuICAgICAgc3RvcmU6IHN0b3JlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFZpc2libGVUb2RvTGlzdCA9IHJlcXVpcmUoJy4vdmlzaWJsZVRvZG9MaXN0Jyk7XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8QWRkVG9kbyAvPlxuICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9BcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcykgPT4gIHtcbiAgY29uc3QgeyB0b2Rvcywgb25Ub2RvQ2xpY2sgfSA9IHByb3BzLFxuICAgICAgICBpdGVtcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2soaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIChcblxuICAgIDx1bD5cbiAgICAgIHtpdGVtc31cbiAgICA8L3VsPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgVG9kb0xpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25DbGljaywgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdGV4dERlY29yYXRpb25cbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGxpIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBnZXRWaXNpYmxlVG9kb3MgPSByZXF1aXJlKCcuLi9oZWxwZXIvZ2V0VmlzaWJsZVRvZG9zJyk7XG5cbmNvbnN0IFRPR0dMRV9UT0RPID0gY29uc3RhbnRzLlRPR0dMRV9UT0RPO1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt2aXNpYmxlVG9kb3N9XG4gICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17KGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlzaWJsZVRvZG9MaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSB7XG4gIEFERF9UT0RPOiAnQUREX1RPRE8nLFxuICBUT0dHTEVfVE9ETzogJ1RPR0dMRV9UT0RPJyxcbiAgU0VUX1ZJU0lCSUxJVFlfRklMVEVSOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcblxuICBTSE9XX0FMTDogJ1NIT1dfQUxMJyxcbiAgU0hPV19BQ1RJVkU6ICdTSE9XX0FDVElWRScsXG4gIFNIT1dfQ09NUExFVEVEOiAnU0hPV19DT01QTEVURUQnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRDtcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWaXNpYmxlVG9kb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi4vcmVkdXgnKSxcbiAgICAgIHsgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgdG9kb3MgPSByZXF1aXJlKCcuL3JlZHVjZXIvdG9kb3MnKSxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSByZXF1aXJlKCcuL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlcicpO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3M6IHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgQUREX1RPRE8gPSBjb25zdGFudHMuQUREX1RPRE8sXG4gICAgICBUT0dHTEVfVE9ETyA9IGNvbnN0YW50cy5UT0dHTEVfVE9ETztcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETzpcbiAgICAgIGNvbnN0IHRvZG8gPSBuZXdUb2RvKGFjdGlvbik7XG5cbiAgICAgIHN0YXRlID0gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kb1xuICAgICAgXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETzpcbiAgICAgIHN0YXRlID0gc3RhdGUubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG8gPSB0b2dnbGVUb2RvKHRvZG8sIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b2RvcztcblxuY29uc3QgbmV3VG9kbyA9IChhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHJldHVybiB0b2RvO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kbyA9ICh0b2RvLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIHJldHVybiB0b2RvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gY29uc3RhbnRzLlNFVF9WSVNJQklMSVRZX0ZJTFRFUjtcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9IChzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjpcbiAgICAgIGNvbnN0IHsgZmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gZmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2liaWxpdHlGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKSxcbiAgUmVhY3RET006IHJlcXVpcmUoJy4vbGliL3JlYWN0RE9NJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICB2YXIgcHJvcE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBwcm9wTmFtZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGRvbUVsZW1lbnQpXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcE5hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgYXR0cmlidXRlTmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZVZhbHVlKTtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlVmFsdWVba2V5XTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbYXR0cmlidXRlTmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8vXG4gICAgfVxuICB9XG5cbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBjaGlsZHJlbiA9IFtdLFxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcblxuICAgIHJldHVybiBuZXcgRWxlbWVudChkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICB2YXIgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICB2YXIgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHJlZmVyZW5jZSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHtcbiAgZ3VhcmFudGVlQXJyYXk6IGZ1bmN0aW9uKGFycmF5T3JFbGVtZW50KSB7IHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xuICB9LFxuXG4gIHJlbWFpbmluZzogZnVuY3Rpb24oZWxlbWVudCwgYXJyYXkpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICB2YXIgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICAgIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gbnVsbDtcblxuICBhcnJheS5zb21lKGZ1bmN0aW9uKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50JyksXG4gICAgICBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzRWxlbWVudCcpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KTtcblxuICAgIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLFxuICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWFjdEZ1bmN0aW9uID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICB2YXIgZmlyc3RDaGlsZEFyZ3VtZW50ID0gZmlyc3QoY2hpbGRBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdENoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gZmlyc3RDaGlsZEFyZ3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgaWYgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY2hpbGRBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIGNoaWxkQXJndW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgIGlmIChyZW5kZXIpIHsgdGhpcy5yZW5kZXIgPSByZW5kZXI7IH1cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGZyb21PYmplY3Qob2JqZWN0KSB7XG4gICAgdmFyIHJlbmRlciA9IG9iamVjdFsncmVuZGVyJ10sXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IG9iamVjdFsnZ2V0SW5pdGlhbFN0YXRlJ10sXG4gICAgICAgIGdldENoaWxkQ29udGV4dCA9IG9iamVjdFsnZ2V0Q2hpbGRDb250ZXh0J10sXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gb2JqZWN0Wydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IG9iamVjdFsnY29tcG9uZW50V2lsbFVubW91bnQnXTtcbiAgIFxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3NFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8vXG4gIH1cbiAgXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICBcbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRJbml0aWFsU3RhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZDtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG51bGw7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICB2YXIgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChyZWZlcmVuY2UgPT09IG51bGwgJiYgcGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBoZWxwZXJzLnJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIHZhciByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iXX0=

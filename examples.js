(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var combineRules = function combineRules(rules) {
  return function (action) {
    var keys = Object.keys(rules),
        update = keys.reduce(function (update, key) {
      var rule = rules[key];

      update[key] = rule(action);

      return update;
    }, {});

    return update;
  };
};

module.exports = combineRules;

},{}],2:[function(require,module,exports){
'use strict';

var createDispatcher = function createDispatcher(rule) {
  var listeners = [];

  var dispatch = function dispatch(action) {
    var update = rule(action);

    listeners.forEach(function (listener) {
      return listener(update);
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

  return { dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

module.exports = createDispatcher;

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  reduxApp: require('./examples/reduxApp'),
  inferenceApp: require('./examples/inferenceApp')
};

},{"./examples/inferenceApp":4,"./examples/reduxApp":16}],4:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var TodoApp = require('./inferenceApp/component/todoApp');

var React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var inferenceApp = function inferenceApp() {
  var rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(TodoApp, null), rootDOMElement);
};

module.exports = inferenceApp;

},{"./inferenceApp/component/todoApp":8,"reaction":29}],5:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    React = reaction.React;


var inputDOMElement = void 0;

var AddTodo = function AddTodo() {
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
            text: text
          };

          dispatcher.dispatch(action);

          inputDOMElement.value = '';
        }
      },
      'Add todo'
    )
  );
};

module.exports = AddTodo;

},{"../constants":11,"../dispatcher":12,"reaction":29}],6:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER,
    React = reaction.React;


var FilterLink = function FilterLink(props) {
  var children = props.children,
      filter = props.filter,
      className = filter + ' filter',
      firstChild = first(children),
      text = firstChild.getText();


  return React.createElement(
    'div',
    { className: className },
    React.createElement(
      'a',
      { href: '#',
        onClick: function onClick(event) {

          event.preventDefault();

          var type = SET_VISIBILITY_FILTER,
              visibilityFilter = filter,
              action = {
            type: type,
            visibilityFilter: visibilityFilter
          };

          dispatcher.dispatch(action);
        }
      },
      text
    ),
    React.createElement(
      'span',
      null,
      text
    )
  );
};

module.exports = FilterLink;

var first = function first(array) {
  return array[0];
};

},{"../constants":11,"../dispatcher":12,"reaction":29}],7:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var FilterLink = require('./filterLink'),
    constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    React = reaction.React;


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

},{"../constants":11,"./filterLink":6,"reaction":29}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL,
    React = reaction.React,
    Component = React.Component;

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        _this2.forceUpdate(update);
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
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var setVisibilityFilter = update.setVisibilityFilter;


      if (setVisibilityFilter) {
        var visibilityFilter = setVisibilityFilter.visibilityFilter,
            className = visibilityFilter + ' app';


        this.setClass(className);
      } else {
        var initialVisibilityFilter = SHOW_ALL,
            _className = initialVisibilityFilter + ' app';

        return React.createElement(
          'div',
          { className: _className },
          React.createElement(AddTodo, null),
          React.createElement(TodoList, null),
          React.createElement(Footer, null)
        );
      }
    }
  }]);

  return TodoApp;
}(Component);

module.exports = TodoApp;

},{"../constants":11,"../dispatcher":12,"./addTodo":5,"./footer":7,"./todoList":9,"reaction":29}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

var React = reaction.React,
    Component = React.Component;

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        _this2.forceUpdate(update);
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
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var addTodo = update.addTodo;


      if (addTodo) {
        var text = addTodo.text;


        this.addChild(React.createElement(TodoListItem, { text: text }));
      } else {
        return React.createElement('ul', null);
      }
    }
  }]);

  return TodoList;
}(Component);

module.exports = TodoList;

},{"../dispatcher":12,"./todoListItem":10,"reaction":29}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var React = reaction.React,
    Component = React.Component;

var TodoListItem = function (_Component) {
  _inherits(TodoListItem, _Component);

  function TodoListItem() {
    _classCallCheck(this, TodoListItem);

    return _possibleConstructorReturn(this, (TodoListItem.__proto__ || Object.getPrototypeOf(TodoListItem)).apply(this, arguments));
  }

  _createClass(TodoListItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var text = this.props.text,
          className = '';


      return React.createElement(
        'li',
        { className: className,
          onClick: function onClick() {
            _this2.toggleClass('completed');
          } },
        text
      );
    }
  }]);

  return TodoListItem;
}(Component);

module.exports = TodoListItem;

},{"reaction":29}],11:[function(require,module,exports){
'use strict';

var constants = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',

  SHOW_ALL: 'showAll',
  SHOW_ACTIVE: 'showActive',
  SHOW_COMPLETED: 'showCompleted'
};

module.exports = constants;

},{}],12:[function(require,module,exports){
'use strict';

var createDispatcher = require('../../createDispatcher');

var rule = require('./rule');

var dispatcher = createDispatcher(rule);

module.exports = dispatcher;

},{"../../createDispatcher":2,"./rule":13}],13:[function(require,module,exports){
'use strict';

var combineRules = require('../../combineRules');

var addTodo = require('./rule/addTodo'),
    setVisibilityFilter = require('./rule/setVisibilityFilter');

var rule = combineRules({
  addTodo: addTodo,
  setVisibilityFilter: setVisibilityFilter
});

module.exports = rule;

},{"../../combineRules":1,"./rule/addTodo":14,"./rule/setVisibilityFilter":15}],14:[function(require,module,exports){
'use strict';

var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO;


var addTodo = function addTodo() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = action.type;


  var update = void 0;

  switch (type) {
    case ADD_TODO:
      var text = action.text;


      update = {
        text: text
      };
      break;
  }

  return update;
};

module.exports = addTodo;

},{"../constants":11}],15:[function(require,module,exports){
'use strict';

var constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;


var setVisibilityFilter = function setVisibilityFilter() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = action.type;


  var update = void 0;

  switch (type) {
    case SET_VISIBILITY_FILTER:
      var visibilityFilter = action.visibilityFilter;


      update = {
        visibilityFilter: visibilityFilter
      };
      break;
  }

  return update;
};

module.exports = setVisibilityFilter;

},{"../constants":11}],16:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var Redux = require('./reduxApp/redux'),
    reducer = require('./reduxApp/reducer'),
    TodoApp = require('./reduxApp/component/todoApp'),
    Provider = require('./reduxApp/component/provider');

var React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var reduxApp = function reduxApp() {
  var createStore = Redux.createStore,
      store = createStore(reducer),
      rootDOMElement = document.getElementById('root');


  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;

},{"./reduxApp/component/provider":20,"./reduxApp/component/todoApp":21,"./reduxApp/reducer":25,"./reduxApp/redux":28,"reaction":29}],17:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    React = reaction.React;


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

},{"../constants":24,"reaction":29}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER,
    React = reaction.React,
    Component = React.Component;

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


      if (active) {
        return React.createElement(
          'span',
          null,
          children
        );
      }

      return React.createElement(
        'a',
        { href: '#',
          className: 'filter',
          onClick: function onClick(event) {

            event.preventDefault();

            var type = SET_VISIBILITY_FILTER,
                visibilityFilter = filter,
                action = {
              type: type,
              visibilityFilter: visibilityFilter
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

},{"../constants":24,"reaction":29}],19:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var FilterLink = require('./filterLink'),
    constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    React = reaction.React;


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

},{"../constants":24,"./filterLink":18,"reaction":29}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var React = reaction.React,
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
      var store = this.props.store,
          childContext = {
        store: store
      };


      return childContext;
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

},{"reaction":29}],21:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList');

var React = reaction.React;


var TodoApp = function TodoApp() {
  return React.createElement(
    'div',
    null,
    React.createElement(AddTodo, null),
    React.createElement(TodoList, null),
    React.createElement(Footer, null)
  );
};

module.exports = TodoApp;

},{"./addTodo":17,"./footer":19,"./todoList":22,"reaction":29}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var constants = require('../constants'),
    TodoListItem = require('./todoListItem');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO,
    React = reaction.React,
    Component = React.Component;

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
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
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map(function (visibleTodo) {
        var id = visibleTodo.id,
            text = visibleTodo.text,
            completed = visibleTodo.completed;


        return React.createElement(TodoListItem, { text: text,
          completed: completed,
          clickHandler: function clickHandler() {
            var type = TOGGLE_TODO,
                action = {
              type: type,
              id: id
            };

            store.dispatch(action);
          }
        });
      });


      return React.createElement(
        'ul',
        null,
        items
      );
    }
  }]);

  return TodoList;
}(Component);

module.exports = TodoList;

var getVisibleTodos = function getVisibleTodos(todos, visibilityFilter) {
  var visibleTodos = void 0;

  switch (visibilityFilter) {
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

},{"../constants":24,"./todoListItem":23,"reaction":29}],23:[function(require,module,exports){
'use strict';

var reaction = require('reaction');

var React = reaction.React;


var TodoListItem = function TodoListItem(props) {
  var clickHandler = props.clickHandler,
      completed = props.completed,
      text = props.text,
      textDecoration = completed ? 'line-through' : 'none',
      style = {
    textDecoration: textDecoration
  };


  return React.createElement(
    'li',
    { style: style,
      onClick: clickHandler
    },
    text
  );
};

module.exports = TodoListItem;

},{"reaction":29}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
'use strict';

var Redux = require('./redux');

var todos = require('./reducer/todos'),
    visibilityFilter = require('./reducer/visibilityFilter');

var combineReducers = Redux.combineReducers;


var reducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

module.exports = reducer;

},{"./reducer/todos":26,"./reducer/visibilityFilter":27,"./redux":28}],26:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    TOGGLE_TODO = constants.TOGGLE_TODO;


var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;


  var todos = state;

  switch (type) {
    case ADD_TODO:
      todos = addTodoToTodos(todos, action);
      break;

    case TOGGLE_TODO:
      todos = toggleTodos(todos, action);
      break;
  }

  state = todos;

  return state;
};

module.exports = todos;

var addTodoToTodos = function addTodoToTodos(todos, action) {
  var id = action.id,
      text = action.text,
      completed = false,
      todo = {
    id: id,
    text: text,
    completed: completed
  };


  todos = [].concat(_toConsumableArray(todos), [todo]);

  return todos;
};

var toggleTodos = function toggleTodos(todos, action) {
  var id = action.id;


  todos = todos.map(function (todo) {
    if (todo.id === id) {
      var completed = todo.completed;


      completed = !completed;

      todo.completed = completed;
    }

    return todo;
  });

  return todos;
};

},{"../constants":24}],27:[function(require,module,exports){
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
      var _visibilityFilter = action.visibilityFilter;


      state = _visibilityFilter;
      break;
  }

  return state;
};

module.exports = visibilityFilter;

},{"../constants":24}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":33,"./lib/reactDOM":38}],30:[function(require,module,exports){
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
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
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var removedChildren = this.children.splice(start, removeCount, addedChildren);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removeCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removeCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removeCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removeCount, addedChildren, context);
      }
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

},{"./element":31}],31:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
    value: function setAttribute(name, value) {
      if (name === 'className') {
        name = 'class';
      }
      if (name === 'htmlFor') {
        name = 'for';
      }

      if (false) {} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        var keys = Object.keys(value);

        keys.forEach(function (key) {
          this.domElement[name][key] = value[key];
        }.bind(this));
      } else if (typeof value === 'boolean') {
        if (value) {
          value = name; ///

          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
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
      },
          element = new Element(domElement, props);

      return element;
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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
    value: function createElement(firstArgument, properties) {
      var element = undefined;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var children = childrenFromChildArguments(childArguments),
            props = Object.assign({}, properties, {
          children: children
        });

        if (firstArgument.prototype instanceof ReactComponent) {
          var reactComponentConstructor = firstArgument,
              ///
          reactComponent = new reactComponentConstructor();

          element = new ReactComponentElement(reactComponent, props);
        } else if (firstArgument instanceof ReactClass) {
          var reactClass = firstArgument; ///

          element = new ReactClassElement(reactClass, props);
        } else if (typeof firstArgument === 'function') {
          var reactFunction = firstArgument; ///

          element = new ReactFunctionElement(reactFunction, props);
        } else {
          var displayName = firstArgument; ///

          element = new DisplayElement(displayName, props);
        }
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var children = childArguments.map(function (childArgument) {
    var child = childArgument instanceof Element ? childArgument : ///
    new TextElement(childArgument); ///

    return child;
  });

  return children;
}

},{"./displayElement":30,"./element":31,"./reactClass":34,"./reactClassElement":35,"./reactComponent":36,"./reactComponentElement":37,"./reactFunctionElement":40,"./textElement":41}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClassElement).call(this, props));

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

},{"./reactElement":39}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactComponentElement).call(this, props));

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

},{"./reactElement":39}],38:[function(require,module,exports){
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

},{"./element":31}],39:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactElement).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
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
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren) {
      var context = arguments.length <= 3 || arguments[3] === undefined ? this.context : arguments[3];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.removeChild(child, childContext);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      var firstChild = first(this.children);

      return firstChild.setAttribute(name, value);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      var firstChild = first(this.children);

      return firstChild.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      var firstChild = first(this.children);

      firstChild.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      var firstChild = first(this.children);

      firstChild.setClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      var firstChild = first(this.children);

      firstChild.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      var firstChild = first(this.children);

      firstChild.removeClass(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      var firstChild = first(this.children);

      firstChild.toggleClass(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
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

function first(array) {
  return array[0];
}

},{"./element":31,"./helpers":32}],40:[function(require,module,exports){
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, props));

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

},{"./reactElement":39}],41:[function(require,module,exports){
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getText',
    value: function getText() {
      var domElement = this.getDOMElement(),
          text = domElement.nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var domElement = this.getDOMElement();

      domElement.nodeValue = text;
    }
  }]);

  return TextElement;
}(Element);

module.exports = TextElement;

},{"./element":31}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY29tYmluZVJ1bGVzLmpzIiwiZXM2L2NyZWF0ZURpc3BhdGNoZXIuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbnN0YW50cy5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS9hZGRUb2RvLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2Rpc3BsYXlFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RDbGFzc0VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdENvbXBvbmVudEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0RE9NLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0RnVuY3Rpb25FbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi90ZXh0RWxlbWVudC5qcyJdLCJuYW1l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QUFtQixpQkFBbkIsRUFBc0M7QUFDeEMsYUFBSyxhQUFMLENBQW1CLGlCQUFuQixDQUFxQyxLQUFLLEtBQUwsRUFBWSxLQUFLLE9BQUwsQ0FBakQsQ0FEd0M7T0FBMUM7Ozs7MkNBS3FCO0FBQ3JCLFVBQUksS0FBSyxhQUFMLENBQW1CLG9CQUFuQixFQUF5QztBQUMzQyxhQUFLLGFBQUwsQ0FBbUIsb0JBQW5CLENBQXdDLEtBQUssS0FBTCxFQUFZLEtBQUssT0FBTCxDQUFwRCxDQUQyQztPQUE3Qzs7OztTQWxDRTtFQUE2Qjs7QUF3Q25DLE9BQU8sT0FBUCxHQUFpQixvQkFBakI7OztBQzVDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVBOzs7QUFDSixXQURJLFdBQ0osQ0FBWSxJQUFaLEVBQWtCOzBCQURkLGFBQ2M7O0FBQ2hCLFFBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBYjtRQUNBLFdBQVcsRUFBWDtRQUNBLFFBQVE7QUFDTixnQkFBVSxRQUFWO0tBREYsQ0FIVTs7a0VBRGQsd0JBUUksWUFBWSxRQVBGO0dBQWxCOztlQURJOzswQkFXRSxRQUFRLFdBQVcsU0FBUztBQUNoQyxpQ0FaRSxrREFZVSxRQUFRLFVBQXBCLENBRGdDOzs7OzRCQUkxQixTQUFTO0FBQ2YsaUNBaEJFLG1EQWdCRixDQURlOzs7OzhCQUlQO0FBQ1IsVUFBTSxhQUFhLEtBQUssYUFBTCxFQUFiO1VBQ0EsT0FBTyxXQUFXLFNBQVg7O0FBRkwsYUFJRCxJQUFQLENBSlE7Ozs7NEJBT0YsTUFBTTtBQUNaLFVBQU0sYUFBYSxLQUFLLGFBQUwsRUFBYixDQURNOztBQUdaLGlCQUFXLFNBQVgsR0FBdUIsSUFBdkIsQ0FIWTs7OztTQTFCVjtFQUFvQjs7QUFpQzFCLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJ1bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIodXBkYXRlKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4geyByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTsgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlZHV4QXBwOiByZXF1aXJlKCcuL2V4YW1wbGVzL3JlZHV4QXBwJyksXG4gIGluZmVyZW5jZUFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9pbmZlcmVuY2VBcHAnKVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IFRvZG9BcHAgPSByZXF1aXJlKCcuL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcCcpO1xuXG5jb25zdCB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IGluZmVyZW5jZUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxUb2RvQXBwIC8+LFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5mZXJlbmNlQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBBRERfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICBpbnB1dERPTUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkVG9kbztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBmaXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlckxpbms7XG5cbmNvbnN0IGZpcnN0ID0gYXJyYXkgPT4gYXJyYXlbMF07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7J1Nob3c6ICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUgPSB7fSkge1xuICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc2V0VmlzaWJpbGl0eUZpbHRlcixcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh1cGRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICBpZiAoYWRkVG9kbykge1xuICAgICAgY29uc3QgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICB0aGlzLmFkZENoaWxkKFxuXG4gICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8dWw+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgIH19PlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBBRERfVE9ETzogJ0FERF9UT0RPJyxcbiAgU0VUX1ZJU0lCSUxJVFlfRklMVEVSOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcblxuICBTSE9XX0FMTDogJ3Nob3dBbGwnLFxuICBTSE9XX0FDVElWRTogJ3Nob3dBY3RpdmUnLFxuICBTSE9XX0NPTVBMRVRFRDogJ3Nob3dDb21wbGV0ZWQnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uLy4uL2NyZWF0ZURpc3BhdGNoZXInKTtcblxuY29uc3QgcnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcihydWxlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaXNwYXRjaGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb21iaW5lUnVsZXMgPSByZXF1aXJlKCcuLi8uLi9jb21iaW5lUnVsZXMnKTtcblxuY29uc3QgYWRkVG9kbyA9IHJlcXVpcmUoJy4vcnVsZS9hZGRUb2RvJyksXG4gICAgICBzZXRWaXNpYmlsaXR5RmlsdGVyID0gcmVxdWlyZSgnLi9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXInKTtcblxuY29uc3QgcnVsZSA9IGNvbWJpbmVSdWxlcyh7XG4gIGFkZFRvZG86IGFkZFRvZG8sXG4gIHNldFZpc2liaWxpdHlGaWx0ZXI6IHNldFZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IGFkZFRvZG8gPSAoYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHRleHQ6IHRleHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBzZXRWaXNpYmlsaXR5RmlsdGVyID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VmlzaWJpbGl0eUZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvcmVkdXgnKSxcbiAgICAgIHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHVjZXInKSxcbiAgICAgIFRvZG9BcHAgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwJyksXG4gICAgICBQcm92aWRlciA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyJyk7XG5cbmNvbnN0IHsgUmVhY3QsIFJlYWN0RE9NIH0gPSByZWFjdGlvbjtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4LFxuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8gfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5sZXQgaWQgPSAwLFxuICAgIGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkKysgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSByZXF1aXJlKCcuL2ZpbHRlckxpbmsnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxwPlxuICAgICAgeydTaG93OiAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICAgIDwvcD5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlOiBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0Jyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246IHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBBRERfVE9ETzogJ0FERF9UT0RPJyxcbiAgVE9HR0xFX1RPRE86ICdUT0dHTEVfVE9ETycsXG4gIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG5cbiAgU0hPV19BTEw6ICdTSE9XX0FMTCcsXG4gIFNIT1dfQUNUSVZFOiAnU0hPV19BQ1RJVkUnLFxuICBTSE9XX0NPTVBMRVRFRDogJ1NIT1dfQ09NUExFVEVEJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpO1xuXG5jb25zdCB0b2RvcyA9IHJlcXVpcmUoJy4vcmVkdWNlci90b2RvcycpLFxuICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHsgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zOiB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB0b2RvcyA9IHN0YXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgdG9kb3MgPSBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9kb3M7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaWJpbGl0eUZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCByZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUmVhY3Q6IHJlcXVpcmUoJy4vbGliL3JlYWN0JyksXG4gIFJlYWN0RE9NOiByZXF1aXJlKCcuL2xpYi9yZWFjdERPTScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRpc3BsYXlOYW1lKTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgcHJvcE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBwcm9wTmFtZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wTmFtZSkge1xuICAgICAgY29uc3QgcHJvcFZhbHVlID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHByb3BWYWx1ZSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICAgIGNhbGxiYWNrKGRvbUVsZW1lbnQpXG4gICAgICB9IGVsc2UgaWYgKHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkpIHtcbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSksXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBwcm9wVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcHJvcE5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgYWRkZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGFkZGVkQ2hpbGQpIHtcbiAgICAgIGFkZGVkQ2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtb3ZlZENoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5zcGxpY2Uoc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuKTtcblxuICAgIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBJbmZpbml0eSxcbiAgICAgICAgICByZW1vdmVDb3VudCA9IDAsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgcmVtb3ZlQ291bnQgPSAxLFxuICAgICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgcHJvcHMpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgICB9XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgICAgbmFtZSA9ICdmb3InO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIHNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5kb21FbGVtZW50W2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnQoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gcmVmZXJlbmNlICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHtcbiAgZ3VhcmFudGVlQXJyYXk6IGZ1bmN0aW9uKGFycmF5T3JFbGVtZW50KSB7IHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xuICB9LFxuXG4gIHJlbWFpbmluZzogZnVuY3Rpb24oZWxlbWVudCwgYXJyYXkpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpIHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgICB9KTtcblxuICAgICAgIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICBjb25zdCByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgY29uc3QgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJndW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgaWYgKHJlbmRlcikgeyB0aGlzLnJlbmRlciA9IHJlbmRlcjsgfVxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICBjb25zdCByZW5kZXIgPSBvYmplY3RbJ3JlbmRlciddLFxuICAgICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IG9iamVjdFsnZ2V0SW5pdGlhbFN0YXRlJ10sXG4gICAgICAgICAgZ2V0Q2hpbGRDb250ZXh0ID0gb2JqZWN0WydnZXRDaGlsZENvbnRleHQnXSxcbiAgICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IG9iamVjdFsnY29tcG9uZW50RGlkTW91bnQnXSxcbiAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IG9iamVjdFsnY29tcG9uZW50V2lsbFVubW91bnQnXTtcbiAgIFxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzKTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLy9cbiAgfVxuICBcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IFxuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KSB8fCB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gICAgXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLmFkZENoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgdGV4dCA9IGRvbUVsZW1lbnQubm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5ub2RlVmFsdWUgPSB0ZXh0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iXX0=

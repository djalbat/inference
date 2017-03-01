(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  reduxApp: require('../lib/examples/reduxApp'),
  inferenceApp: require('../lib/examples/inferenceApp')
};


},{"../lib/examples/inferenceApp":4,"../lib/examples/reduxApp":16}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var TodoApp = require('./inferenceApp/component/todoApp');

var inferenceApp = function inferenceApp() {
  var rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(TodoApp, null), rootDOMElement);
};

module.exports = inferenceApp;

},{"./inferenceApp/component/todoApp":8,"reaction":29}],5:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var dispatcher = require('../dispatcher'),
    constants = require('../constants');

var ADD_TODO = constants.ADD_TODO;

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

var reaction = require('reaction'),
    React = reaction.React;


var constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

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

},{"../constants":11,"./filterLink":6,"reaction":29}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL;

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
        var setVisibilityFilter = update.setVisibilityFilter;


        if (setVisibilityFilter) {
          var visibilityFilter = setVisibilityFilter.visibilityFilter,
              className = visibilityFilter + ' app';


          _this2.setClass(className);
        }
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
      var initialVisibilityFilter = SHOW_ALL,
          className = initialVisibilityFilter + ' app';

      return React.createElement(
        'div',
        { className: className },
        React.createElement(AddTodo, null),
        React.createElement(TodoList, null),
        React.createElement(Footer, null)
      );
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

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

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
        var addTodo = update.addTodo;


        if (addTodo) {
          var text = addTodo.text;


          _this2.addChild(React.createElement(TodoListItem, { text: text }));
        }
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
      return React.createElement('ul', null);
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

var reaction = require('reaction'),
    React = reaction.React,
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

},{"../../createDispatcher":3,"./rule":13}],13:[function(require,module,exports){
'use strict';

var combineRules = require('../../combineRules');

var addTodo = require('./rule/addTodo'),
    setVisibilityFilter = require('./rule/setVisibilityFilter');

var rule = combineRules({
  addTodo: addTodo,
  setVisibilityFilter: setVisibilityFilter
});

module.exports = rule;

},{"../../combineRules":2,"./rule/addTodo":14,"./rule/setVisibilityFilter":15}],14:[function(require,module,exports){
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

var reaction = require('reaction'),
    React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var Redux = require('./reduxApp/redux'),
    reducer = require('./reduxApp/reducer'),
    TodoApp = require('./reduxApp/component/todoApp'),
    Provider = require('./reduxApp/component/provider');

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

},{"../constants":24,"reaction":29}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var constants = require('../constants');

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

},{"../constants":24,"./filterLink":18,"reaction":29}],20:[function(require,module,exports){
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

var reaction = require('reaction'),
    React = reaction.React;


var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList');

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

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var constants = require('../constants'),
    TodoListItem = require('./todoListItem');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO;

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

var reaction = require('reaction'),
    React = reaction.React;


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

var Redux = require('./redux'),
    combineReducers = Redux.combineReducers;


var todos = require('./reducer/todos'),
    visibilityFilter = require('./reducer/visibilityFilter');

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
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
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
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren) {
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

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
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
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

},{"./element":31}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImVzNi9jb21iaW5lUnVsZXMuanMiLCJlczYvY3JlYXRlRGlzcGF0Y2hlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdC5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29uc3RhbnRzLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9kaXNwYXRjaGVyLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZm9vdGVyLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb25zdGFudHMuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3RvZG9zLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1eC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZGlzcGxheUVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2hlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdENsYXNzLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdENsYXNzRWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RDb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RET00uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3RleHRFbGVtZW50LmpzIl0sIm5h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TyxJQUFQO0FBQ0Q7Ozs0QkFFTyxJLEVBQU07QUFDWixVQUFNLGFBQWEsS0FBSyxhQUFMLEVBQW5COztBQUVBLGlCQUFXLFNBQVgsR0FBdUIsSUFBdkI7QUFDRDs7OztFQTlCdUIsTzs7QUFpQzFCLE9BQU8sT0FBUCxHQUFpQixXQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWR1eEFwcDogcmVxdWlyZSgnLi4vbGliL2V4YW1wbGVzL3JlZHV4QXBwJyksXG4gIGluZmVyZW5jZUFwcDogcmVxdWlyZSgnLi4vbGliL2V4YW1wbGVzL2luZmVyZW5jZUFwcCcpXG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJ1bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIodXBkYXRlKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4geyByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTsgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCwgUmVhY3RET00gfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvQXBwID0gcmVxdWlyZSgnLi9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAnKTtcblxuY29uc3QgaW5mZXJlbmNlQXBwID0gKCkgPT4ge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFRvZG9BcHAgLz4sXG4gICAgcm9vdERPTUVsZW1lbnRcblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmZlcmVuY2VBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEFERF9UT0RPID0gY29uc3RhbnRzLkFERF9UT0RPO1xuXG5sZXQgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IGNvbnN0YW50cy5TRVRfVklTSUJJTElUWV9GSUxURVI7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSBwcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7ZmlsdGVyfSBmaWx0ZXJgLFxuICAgICAgICBmaXJzdENoaWxkID0gZmlyc3QoY2hpbGRyZW4pLFxuICAgICAgICB0ZXh0ID0gZmlyc3RDaGlsZC5nZXRUZXh0KCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9hPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuXG5jb25zdCBmaXJzdCA9IGFycmF5ID0+IGFycmF5WzBdO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRDtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpO1xuXG5jb25zdCBTSE9XX0FMTCA9IGNvbnN0YW50cy5TSE9XX0FMTDtcblxuY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICBjb25zdCB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDx1bD5cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHtcbiAgQUREX1RPRE86ICdBRERfVE9ETycsXG4gIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG5cbiAgU0hPV19BTEw6ICdzaG93QWxsJyxcbiAgU0hPV19BQ1RJVkU6ICdzaG93QWN0aXZlJyxcbiAgU0hPV19DT01QTEVURUQ6ICdzaG93Q29tcGxldGVkJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZURpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi8uLi9jcmVhdGVEaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIocnVsZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29tYmluZVJ1bGVzID0gcmVxdWlyZSgnLi4vLi4vY29tYmluZVJ1bGVzJyk7XG5cbmNvbnN0IGFkZFRvZG8gPSByZXF1aXJlKCcuL3J1bGUvYWRkVG9kbycpLFxuICAgICAgc2V0VmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvOiBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyOiBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBydWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgQUREX1RPRE8gPSBjb25zdGFudHMuQUREX1RPRE87XG5cbmNvbnN0IGFkZFRvZG8gPSAoYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHRleHQ6IHRleHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSBjb25zdGFudHMuU0VUX1ZJU0lCSUxJVFlfRklMVEVSO1xuXG5jb25zdCBzZXRWaXNpYmlsaXR5RmlsdGVyID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VmlzaWJpbGl0eUZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCwgUmVhY3RET00gfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvcmVkdXgnKSxcbiAgICAgIHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHVjZXInKSxcbiAgICAgIFRvZG9BcHAgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwJyksXG4gICAgICBQcm92aWRlciA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyJyk7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eCxcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IEFERF9UT0RPID0gY29uc3RhbnRzLkFERF9UT0RPO1xuXG5sZXQgaWQgPSAwLFxuICAgIGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkKysgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IGNvbnN0YW50cy5TRVRfVklTSUJJTElUWV9GSUxURVI7XG5cbmNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRDtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmU6IHN0b3JlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpO1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCBTSE9XX0FMTCA9IGNvbnN0YW50cy5TSE9XX0FMTCxcbiAgICAgIFNIT1dfQUNUSVZFID0gY29uc3RhbnRzLlNIT1dfQUNUSVZFLFxuICAgICAgU0hPV19DT01QTEVURUQgPSBjb25zdGFudHMuU0hPV19DT01QTEVURUQsXG4gICAgICBUT0dHTEVfVE9ETyA9IGNvbnN0YW50cy5UT0dHTEVfVE9ETztcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246IHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBBRERfVE9ETzogJ0FERF9UT0RPJyxcbiAgVE9HR0xFX1RPRE86ICdUT0dHTEVfVE9ETycsXG4gIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG5cbiAgU0hPV19BTEw6ICdTSE9XX0FMTCcsXG4gIFNIT1dfQUNUSVZFOiAnU0hPV19BQ1RJVkUnLFxuICBTSE9XX0NPTVBMRVRFRDogJ1NIT1dfQ09NUExFVEVEJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCB0b2RvcyA9IHJlcXVpcmUoJy4vcmVkdWNlci90b2RvcycpLFxuICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvczogdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBBRERfVE9ETyA9IGNvbnN0YW50cy5BRERfVE9ETyxcbiAgICAgIFRPR0dMRV9UT0RPID0gY29uc3RhbnRzLlRPR0dMRV9UT0RPO1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvZG9zO1xuXG5jb25zdCBhZGRUb2RvVG9Ub2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kb3MgPSAodG9kb3MsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBTSE9XX0FMTCA9IGNvbnN0YW50cy5TSE9XX0FMTCxcbiAgICAgIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IGNvbnN0YW50cy5TRVRfVklTSUJJTElUWV9GSUxURVI7XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gdmlzaWJpbGl0eUZpbHRlcjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpYmlsaXR5RmlsdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goKTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKSxcbiAgUmVhY3RET006IHJlcXVpcmUoJy4vbGliL3JlYWN0RE9NJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWUpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3BOYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVmFsdWUgPSB0aGlzLnByb3BzW3Byb3BOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcHJvcFZhbHVlLFxuICAgICAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSkge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSxcbiAgICAgICAgICAgICAgaGFuZGxlciA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wTmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wVmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW1vdmVkQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLnNwbGljZShzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4pO1xuXG4gICAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgICByZW1vdmVkQ2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICAgIHJlbW92ZUNvdW50ID0gMCxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW2NoaWxkXTtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVDb3VudCA9IDEsXG4gICAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gcHJvcE5hbWVJc0hhbmRsZXJOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50LCBwcm9wcykge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjsgIC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuICAgIH1cbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIG5hbWUgPSAnY2xhc3MnO1xuICAgIH1cbiAgICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgICBuYW1lID0gJ2Zvcic7XG4gICAgfVxuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIH1cblxuICBjbGVhckNsYXNzZXMoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVsZW1lbnQgPSBuZXcgRWxlbWVudChkb21FbGVtZW50LCBwcm9wcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSByZWZlcmVuY2UgIT09IG51bGwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICBndWFyYW50ZWVBcnJheTogZnVuY3Rpb24oYXJyYXlPckVsZW1lbnQpIHsgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG4gIH0sXG5cbiAgcmVtYWluaW5nOiBmdW5jdGlvbihlbGVtZW50LCBhcnJheSkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZShmdW5jdGlvbihjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gICAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BzKTtcbiAgICAgICB9XG4gICAgIH1cblxuICAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZCA9IChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgY2hpbGRBcmd1bWVudCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dEVsZW1lbnQoY2hpbGRBcmd1bWVudCk7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICBpZiAocmVuZGVyKSB7IHRoaXMucmVuZGVyID0gcmVuZGVyOyB9XG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGNvbnN0IHJlbmRlciA9IG9iamVjdFsncmVuZGVyJ10sXG4gICAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gb2JqZWN0WydnZXRJbml0aWFsU3RhdGUnXSxcbiAgICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBvYmplY3RbJ2dldENoaWxkQ29udGV4dCddLFxuICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gb2JqZWN0Wydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gb2JqZWN0Wydjb21wb25lbnRXaWxsVW5tb3VudCddO1xuICAgXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmFwcGx5KHRoaXMpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vL1xuICB9XG4gIFxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQ7XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBudWxsO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgXG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgICBcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQuYWRkQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgZmlyc3RDaGlsZC5yZW1vdmVDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG4gIH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpcztcblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBoZWxwZXJzLnJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB0ZXh0ID0gZG9tRWxlbWVudC5ub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50Lm5vZGVWYWx1ZSA9IHRleHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiJdfQ==

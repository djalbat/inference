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

},{"./inferenceApp/component/todoApp":8,"reaction":35}],5:[function(require,module,exports){
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

},{"../constants":11,"../dispatcher":12,"reaction":35}],6:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    necessary = require('necessary');

var constants = require('../constants'),
    dispatcher = require('../dispatcher');

var React = reaction.React,
    array = necessary.array,
    SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;


var FilterLink = function FilterLink(props) {
  var children = props.children,
      filter = props.filter,
      className = filter + ' filter',
      firstChild = array.first(children),
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

},{"../constants":11,"../dispatcher":12,"necessary":30,"reaction":35}],7:[function(require,module,exports){
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

},{"../constants":11,"./filterLink":6,"reaction":35}],8:[function(require,module,exports){
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

},{"../constants":11,"../dispatcher":12,"./addTodo":5,"./footer":7,"./todoList":9,"reaction":35}],9:[function(require,module,exports){
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

},{"../dispatcher":12,"./todoListItem":10,"reaction":35}],10:[function(require,module,exports){
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

},{"reaction":35}],11:[function(require,module,exports){
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

},{"./reduxApp/component/provider":20,"./reduxApp/component/todoApp":21,"./reduxApp/reducer":25,"./reduxApp/redux":28,"reaction":35}],17:[function(require,module,exports){
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

},{"../constants":24,"reaction":35}],18:[function(require,module,exports){
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

},{"../constants":24,"reaction":35}],19:[function(require,module,exports){
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

},{"../constants":24,"./filterLink":18,"reaction":35}],20:[function(require,module,exports){
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

},{"reaction":35}],21:[function(require,module,exports){
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

},{"./addTodo":17,"./footer":19,"./todoList":22,"reaction":35}],22:[function(require,module,exports){
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

},{"../constants":24,"./todoListItem":23,"reaction":35}],23:[function(require,module,exports){
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

},{"reaction":35}],24:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
'use strict';

module.exports = {
  path: require('./lib/path'),
  array: require('./lib/array'),
  async: require('./lib/async'),
  fileSystem: require('./lib/fileSystem')
};

},{"./lib/array":31,"./lib/async":32,"./lib/fileSystem":33,"./lib/path":34}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = function () {
  function array() {
    _classCallCheck(this, array);
  }

  _createClass(array, null, [{
    key: 'first',
    value: function first(array) {
      return array[0];
    }
  }, {
    key: 'second',
    value: function second(array) {
      return array[1];
    }
  }, {
    key: 'last',
    value: function last(array) {
      return array[array.length - 1];
    }
  }, {
    key: 'tail',
    value: function tail(array) {
      return array.slice(1);
    }
  }, {
    key: 'push',
    value: function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
  }, {
    key: 'unshift',
    value: function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
  }, {
    key: 'splice',
    value: function splice(array, start, deleteCount) {
      var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
          deletedItemsArray = Array.prototype.splice.apply(array, args);

      return deletedItemsArray;
    }
  }, {
    key: 'combine',
    value: function combine(array1) {
      var array2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var test = arguments[2];

      array1 = array2.reduce(function (array1, element, index) {
        var passed = test(element, index);

        if (passed) {
          array1.push(element);
        }

        return array1;
      }, array1);

      return array1;
    }
  }]);

  return array;
}();

module.exports = array;

},{}],32:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var async = function () {
  function async() {
    _classCallCheck(this, async);
  }

  _createClass(async, null, [{
    key: 'forEach',
    value: function forEach(array, callback, done) {
      var arrayLength = array.length;

      var index = -1;

      var next = function next() {
        index++;

        if (index === arrayLength) {
          if (done) {
            done();
          }
        } else {
          var element = array[index];

          callback(element, next);
        }
      };

      next();
    }
  }, {
    key: 'whilst',
    value: function whilst(test, callback, done) {
      var next = function next() {
        if (test()) {
          callback(next);
        } else {
          done();
        }
      };

      next();
    }
  }]);

  return async;
}();

module.exports = async;

},{}],33:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var fileSystem = function () {
  function fileSystem() {
    _classCallCheck(this, fileSystem);
  }

  _createClass(fileSystem, null, [{
    key: 'readFile',
    value: function readFile(filePath) {
      var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

      var options = {
        encoding: encoding
      },
          content = fs.readFileSync(filePath, options);

      return content;
    }
  }, {
    key: 'readDirectory',
    value: function readDirectory(directoryPath) {
      var entryNames = fs.readdirSync(directoryPath);

      return entryNames;
    }
  }, {
    key: 'fileExists',
    value: function fileExists(filePath) {
      return fs.existsSync(filePath);
    }
  }]);

  return fileSystem;
}();

module.exports = fileSystem;

},{"fs":29}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var array = require('./array');

var pathUtil = function () {
  function pathUtil() {
    _classCallCheck(this, pathUtil);
  }

  _createClass(pathUtil, null, [{
    key: 'isPathTopmostDirectoryName',
    value: function isPathTopmostDirectoryName(path) {
      var topmostDirectoryName = pathUtil.topmostDirectoryNameFromPath(path),
          pathTopmostDirectoryName = topmostDirectoryName === null; ///

      return pathTopmostDirectoryName;
    }
  }, {
    key: 'bottommostNameFromPath',
    value: function bottommostNameFromPath(path) {
      var bottommostName = null;

      var matches = path.match(/^.*\/([^\/]*$)/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        bottommostName = secondMatch; ///
      }

      return bottommostName;
    }
  }, {
    key: 'topmostDirectoryNameFromPath',
    value: function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;

      var matches = path.match(/^([^\/]*)\//);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        topmostDirectoryName = secondMatch; ///
      }

      return topmostDirectoryName;
    }
  }, {
    key: 'pathWithoutBottommostNameFromPath',
    value: function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;

      var matches = path.match(/(^.*)\/[^\/]*$/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        pathWithoutBottommostName = secondMatch; ///
      }

      return pathWithoutBottommostName;
    }
  }, {
    key: 'pathWithoutTopmostDirectoryNameFromPath',
    value: function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;

      var matches = path.match(/^[^\/]*\/(.*$)/);

      if (matches !== null) {
        var secondMatch = array.second(matches);

        pathWithoutTopmostDirectoryName = secondMatch;
      }

      return pathWithoutTopmostDirectoryName;
    }
  }]);

  return pathUtil;
}();

module.exports = pathUtil;

},{"./array":31}],35:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":47,"./lib/reactDOM":50}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(props) {
    _classCallCheck(this, Element);

    this.props = props;

    this.parent = null;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parent) {
      this.parent = parent;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.parent = null;
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
  }]);

  return Element;
}();

module.exports = Element;

},{}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('../helpers'),
    Element = require('../element'),
    inferenceMixin = require('./react/inferenceMixin');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent);

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
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      if (update !== undefined) {
        this.render(update);
      } else {
        this.remount();
      }
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

Object.assign(ReactElement.prototype, inferenceMixin);

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

},{"../element":36,"../helpers":46,"./react/inferenceMixin":41}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactClass.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;

},{"../react":37}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactComponent.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return this.reactComponent.getChildContext.call(this, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.call(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;

},{"../react":37}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('../react');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    var initialState = _this.getInitialState();

    _this.setInitialState(initialState);
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
      return undefined;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return undefined;
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

},{"../react":37}],41:[function(require,module,exports){
'use strict';

function spliceChildren(start, removeCount, addedChildren) {
  var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
}

function addChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.addChild(child, childContext);
}

function removeChild(child) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

  var firstChild = first(this.children),
      childContext = this.getChildContext(context) || context;

  firstChild.removeChild(child, childContext);
}

function setAttribute(name, value) {
  var firstChild = first(this.children);

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  var firstChild = first(this.children);

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  var firstChild = first(this.children);

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) {
  var firstChild = first(this.children);

  firstChild.setClassaddAttribute(name, value);
}

function removeAttribute(name) {
  var firstChild = first(this.children);

  firstChild.removeAttribute(name);
}

function setClass(className) {
  var firstChild = first(this.children);

  firstChild.setClass(className);
}

function addClass(className) {
  var firstChild = first(this.children);

  firstChild.addClass(className);
}

function removeClass(className) {
  var firstChild = first(this.children);

  firstChild.removeClass(className);
}

function toggleClass(className) {
  var firstChild = first(this.children);

  firstChild.toggleClass(className);
}

function hasClass(className) {
  var firstChild = first(this.children);

  return firstChild.hasClass(className);
}

function clearClasses() {
  var firstChild = first(this.children);

  firstChild.clearClasses();
}

function getTagName() {
  return null;
}

var inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;

function first(array) {
  return array[0];
}

},{}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var VirtualDOMNode = function (_Element) {
  _inherits(VirtualDOMNode, _Element);

  function VirtualDOMNode(props, domElement) {
    _classCallCheck(this, VirtualDOMNode);

    var _this = _possibleConstructorReturn(this, (VirtualDOMNode.__proto__ || Object.getPrototypeOf(VirtualDOMNode)).call(this, props));

    _this.domElement = domElement;
    return _this;
  }

  _createClass(VirtualDOMNode, [{
    key: 'mount',
    value: function mount(parent, reference) {
      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'mount', this).call(this, parent);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      },
          virtualDOMNode = new VirtualDOMNode(props, domElement);

      return virtualDOMNode;
    }
  }]);

  return VirtualDOMNode;
}(Element);

module.exports = VirtualDOMNode;

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

},{"../element":36}],43:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    inferenceMixin = require('./inferenceMixin');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement(tagName, props) {
    _classCallCheck(this, VirtualDOMElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (false) {} else if (isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (isAttributeName(name)) {
          this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(this.domElement);
        }
      }.bind(this));
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, inferenceMixin);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{"../virtualDOMNode":42,"./inferenceMixin":44}],44:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function spliceChildren(start, removedChildrenCount, addedChildren, context) {
  var childParent = this,
      childReference = null,
      childContext = context;

  addedChildren.forEach(function (addedChild) {
    addedChild.mount(childParent, childReference, childContext);
  });

  var args = [start, removedChildrenCount].concat(addedChildren),
      removedChildren = Array.prototype.splice.apply(this.children, args);

  removedChildren.forEach(function (removedChild) {
    removedChild.unmount(childContext);
  });
}

function addChild(child, context) {
  var start = Infinity,
      removedChildrenCount = 0,
      addedChildren = [child];

  this.spliceChildren(start, removedChildrenCount, addedChildren, context);
}

function removeChild(child, context) {
  var index = this.children.indexOf(child);

  if (index > -1) {
    var start = index,
        removedChildrenCount = 1,
        addedChildren = [];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }
}

function setAttribute(name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
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

function getAttribute(name) {
  return this.domElement.getAttribute(name);
}

function clearAttribute(name) {
  this.domElement.removeAttribute(name);
}

function addAttribute(name, value) {
  this.setAttribute(name, value);
}

function removeAttribute(name) {
  this.clearAttribute(name);
}

function setClass(className) {
  this.domElement.className = className;
}

function addClass(className) {
  this.domElement.classList.add(className);
}

function removeClass(className) {
  this.domElement.classList.remove(className);
}

function toggleClass(className) {
  this.domElement.classList.toggle(className);
}

function hasClass(className) {
  return this.domElement.classList.contains(className);
}

function clearClasses() {
  this.domElement.className = '';
}

function getTagName() {
  return this.domElement.tagName;
}

var inferenceMixin = {
  spliceChildren: spliceChildren,
  addChild: addChild,
  removeChild: removeChild,
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  clearClasses: clearClasses,
  getTagName: getTagName
};

module.exports = inferenceMixin;

},{}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode');

var VirtualDOMTextElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMTextElement, _VirtualDOMNode);

  function VirtualDOMTextElement(text) {
    _classCallCheck(this, VirtualDOMTextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, (VirtualDOMTextElement.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMTextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(VirtualDOMTextElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMTextElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getTagName',
    value: function getTagName() {
      return undefined;
    }
  }, {
    key: 'getText',
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }]);

  return VirtualDOMTextElement;
}(VirtualDOMNode);

module.exports = VirtualDOMTextElement;

},{"../virtualDOMNode":42}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
'use strict';

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMElement = require('./element/virtualDOMNode/element'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement');

function createClass(object) {
  return ReactClass.fromObject(object);
}

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      childArguments[_key - 2] = arguments[_key];
    }

    var children = childrenFromChildArguments(childArguments),
        props = Object.assign({}, properties, {
      children: children
    });

    if (false) {} else if (typeof firstArgument === 'string') {
      var tagName = firstArgument,
          ///
      virtualDOMElement = new VirtualDOMElement(tagName, props);

      element = virtualDOMElement;
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument,
          ///
      reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement;
    } else if (isTypeOf(firstArgument, ReactComponent)) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement;
    }
  }

  return element;
}

var Component = ReactComponent,
    ///
React = {
  Component: Component,
  createClass: createClass,
  createElement: createElement
};

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var children = childArguments.map(function (childArgument) {
    var child = void 0;

    if (childArgument instanceof Element) {
      child = childArgument; ///
    } else {
      var text = childArgument,
          ///
      virtualDOMTextElement = new VirtualDOMTextElement(text);

      child = virtualDOMTextElement;
    }

    return child;
  });

  return children;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":36,"./element/react/class":38,"./element/react/component":39,"./element/react/function":40,"./element/virtualDOMNode/element":43,"./element/virtualDOMNode/textElement":45,"./reactClass":48,"./reactComponent":49}],48:[function(require,module,exports){
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
    value: function getChildContext(context) {
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

},{}],49:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render(update) {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
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

},{}],50:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VirtualDOMNode = require('./element/virtualDOMNode');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parent = VirtualDOMNode.fromDOMElement(parentDOMElement),
          ///
      reference = null,
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element/virtualDOMNode":42}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY29tYmluZVJ1bGVzLmpzIiwiZXM2L2NyZWF0ZURpc3BhdGNoZXIuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbnN0YW50cy5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS9hZGRUb2RvLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvYXN5bmMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvcGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvcmVhY3QvaW5mZXJlbmNlTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9pbmZlcmVuY2VNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q2xhc3MuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxLQUFELEVBQVc7QUFDOUIsU0FBTyxVQUFDLE1BQUQsRUFBWTtBQUNqQixRQUFNLE9BQU8sT0FBTyxJQUFQLENBQVksS0FBWixDQUFiO0FBQUEsUUFDTSxTQUFTLEtBQUssTUFBTCxDQUFZLFVBQUMsTUFBRCxFQUFTLEdBQVQsRUFBaUI7QUFDcEMsVUFBTSxPQUFPLE1BQU0sR0FBTixDQUFiOztBQUVBLGFBQU8sR0FBUCxJQUFjLEtBQUssTUFBTCxDQUFkOztBQUVBLGFBQU8sTUFBUDtBQUNELEtBTlEsRUFNTixFQU5NLENBRGY7O0FBU0EsV0FBTyxNQUFQO0FBQ0QsR0FYRDtBQVlELENBYkQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLFlBQWpCOzs7QUNqQkE7O0FBRUEsSUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsSUFBRCxFQUFVO0FBQ2pDLE1BQUksWUFBWSxFQUFoQjs7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Q0FFbkI7OzsyQ0FFc0IsQ0FFdEI7OzsrQkFFaUIsTSxFQUFRO0FBQ3hCLFVBQU0sU0FBUyxPQUFPLFFBQVAsQ0FBZjtBQUFBLFVBQ00sa0JBQWtCLE9BQU8saUJBQVAsQ0FEeEI7QUFBQSxVQUVNLGtCQUFrQixPQUFPLGlCQUFQLENBRnhCO0FBQUEsVUFHTSxvQkFBb0IsT0FBTyxtQkFBUCxDQUgxQjtBQUFBLFVBSU0sdUJBQXVCLE9BQU8sc0JBQVAsQ0FKN0I7O0FBTUEsYUFBTyxJQUFJLFVBQUosQ0FBZSxNQUFmLEVBQXVCLGVBQXZCLEVBQXdDLGVBQXhDLEVBQXlELGlCQUF6RCxFQUE0RSxvQkFBNUUsQ0FBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsVUFBakI7OztBQzFDQTs7Ozs7O0lBRU0sYztBQUNKLDRCQUFjO0FBQUE7QUFFYjs7OzsyQkFFTSxNLEVBQVE7QUFDYjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sRUFBUDtBQUNEOzs7b0NBRWUsTyxFQUFTO0FBQ3ZCLGFBQU8sU0FBUDtBQUNEOzs7d0NBRW1CLENBRW5COzs7MkNBRXNCLENBRXRCOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsY0FBakI7OztBQzVCQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUIsUUFBUSwwQkFBUixDQUF2Qjs7SUFFTSxROzs7Ozs7OzJCQUNVLE8sRUFBUyxnQixFQUFrQjtBQUN2QyxVQUFNLFNBQVMsZUFBZSxjQUFmLENBQThCLGdCQUE5QixDQUFmO0FBQUEsVUFBZ0U7QUFDMUQsa0JBQVksSUFEbEI7QUFBQSxVQUVNLFVBQVUsU0FGaEI7O0FBSUEsY0FBUSxLQUFSLENBQWMsTUFBZCxFQUFzQixTQUF0QixFQUFpQyxPQUFqQztBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb21iaW5lUnVsZXMgPSAocnVsZXMpID0+IHtcbiAgcmV0dXJuIChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocnVsZXMpLFxuICAgICAgICAgIHVwZGF0ZSA9IGtleXMucmVkdWNlKCh1cGRhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW2tleV07XG5cbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gcnVsZShhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbWJpbmVSdWxlcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IChydWxlKSA9PiB7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1cGRhdGUgPSBydWxlKGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKHVwZGF0ZSkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHsgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7IH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURpc3BhdGNoZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWR1eEFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9yZWR1eEFwcCcpLFxuICBpbmZlcmVuY2VBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvaW5mZXJlbmNlQXBwJylcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBUb2RvQXBwID0gcmVxdWlyZSgnLi9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAnKTtcblxuY29uc3QgeyBSZWFjdCwgUmVhY3RET00gfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBpbmZlcmVuY2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8VG9kb0FwcCAvPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZmVyZW5jZUFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8gfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5sZXQgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBhcnJheSB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cztcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBhcnJheS5maXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlckxpbms7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgRmlsdGVyTGluayA9IHJlcXVpcmUoJy4vZmlsdGVyTGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7J1Nob3c6ICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUgPSB7fSkge1xuICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc2V0VmlzaWJpbGl0eUZpbHRlcixcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh1cGRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICBpZiAoYWRkVG9kbykge1xuICAgICAgY29uc3QgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICB0aGlzLmFkZENoaWxkKFxuXG4gICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8dWw+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgIH19PlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBBRERfVE9ETzogJ0FERF9UT0RPJyxcbiAgU0VUX1ZJU0lCSUxJVFlfRklMVEVSOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcblxuICBTSE9XX0FMTDogJ3Nob3dBbGwnLFxuICBTSE9XX0FDVElWRTogJ3Nob3dBY3RpdmUnLFxuICBTSE9XX0NPTVBMRVRFRDogJ3Nob3dDb21wbGV0ZWQnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uLy4uL2NyZWF0ZURpc3BhdGNoZXInKTtcblxuY29uc3QgcnVsZSA9IHJlcXVpcmUoJy4vcnVsZScpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcihydWxlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaXNwYXRjaGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb21iaW5lUnVsZXMgPSByZXF1aXJlKCcuLi8uLi9jb21iaW5lUnVsZXMnKTtcblxuY29uc3QgYWRkVG9kbyA9IHJlcXVpcmUoJy4vcnVsZS9hZGRUb2RvJyksXG4gICAgICBzZXRWaXNpYmlsaXR5RmlsdGVyID0gcmVxdWlyZSgnLi9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXInKTtcblxuY29uc3QgcnVsZSA9IGNvbWJpbmVSdWxlcyh7XG4gIGFkZFRvZG86IGFkZFRvZG8sXG4gIHNldFZpc2liaWxpdHlGaWx0ZXI6IHNldFZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IGFkZFRvZG8gPSAoYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHRleHQ6IHRleHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBzZXRWaXNpYmlsaXR5RmlsdGVyID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VmlzaWJpbGl0eUZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvcmVkdXgnKSxcbiAgICAgIHJlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHVjZXInKSxcbiAgICAgIFRvZG9BcHAgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwJyksXG4gICAgICBQcm92aWRlciA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyJyk7XG5cbmNvbnN0IHsgUmVhY3QsIFJlYWN0RE9NIH0gPSByZWFjdGlvbjtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4LFxuICAgICAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8gfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5sZXQgaWQgPSAwLFxuICAgIGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkKysgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSByZXF1aXJlKCcuL2ZpbHRlckxpbmsnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxwPlxuICAgICAgeydTaG93OiAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICAgIDwvcD5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlOiBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm92aWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0Jyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdub25lJyxcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb246IHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0ge1xuICBBRERfVE9ETzogJ0FERF9UT0RPJyxcbiAgVE9HR0xFX1RPRE86ICdUT0dHTEVfVE9ETycsXG4gIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG5cbiAgU0hPV19BTEw6ICdTSE9XX0FMTCcsXG4gIFNIT1dfQUNUSVZFOiAnU0hPV19BQ1RJVkUnLFxuICBTSE9XX0NPTVBMRVRFRDogJ1NIT1dfQ09NUExFVEVEJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpO1xuXG5jb25zdCB0b2RvcyA9IHJlcXVpcmUoJy4vcmVkdWNlci90b2RvcycpLFxuICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHsgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zOiB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB0b2RvcyA9IHN0YXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgdG9kb3MgPSBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdG9kb3M7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaWJpbGl0eUZpbHRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCByZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4O1xuIiwiIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGF0aDogcmVxdWlyZSgnLi9saWIvcGF0aCcpLFxuICBhcnJheTogcmVxdWlyZSgnLi9saWIvYXJyYXknKSxcbiAgYXN5bmM6IHJlcXVpcmUoJy4vbGliL2FzeW5jJyksXG4gIGZpbGVTeXN0ZW06IHJlcXVpcmUoJy4vbGliL2ZpbGVTeXN0ZW0nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgYXJyYXkge1xuICBzdGF0aWMgZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbiAgc3RhdGljIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cblxuICBzdGF0aWMgbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuICBzdGF0aWMgdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuICBzdGF0aWMgcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuICBzdGF0aWMgdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuICBzdGF0aWMgc3BsaWNlKGFycmF5LCBzdGFydCwgZGVsZXRlQ291bnQsIGl0ZW1zQXJyYXkgPSBbXSkge1xuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5pdGVtc0FycmF5XSxcbiAgICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuXG4gICAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbmUoYXJyYXkxLCBhcnJheTIgPSBbXSwgdGVzdCkge1xuICAgIGFycmF5MSA9IGFycmF5Mi5yZWR1Y2UoZnVuY3Rpb24oYXJyYXkxLCBlbGVtZW50LCBpbmRleCkge1xuICAgICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJheTE7XG4gICAgfSwgYXJyYXkxKTtcblxuICAgIHJldHVybiBhcnJheTE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIGFzeW5jIHtcclxuICBzdGF0aWMgZm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUpIHtcclxuICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gICAgXHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGluZGV4Kys7XHJcblxyXG4gICAgICBpZiAoaW5kZXggPT09IGFycmF5TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKGRvbmUpIHtcclxuICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHdoaWxzdCh0ZXN0LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gICAgY29uc3QgbmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGVzdCgpKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV4dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYXN5bmM7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5jbGFzcyBmaWxlU3lzdGVtIHtcbiAgc3RhdGljIHJlYWRGaWxlKGZpbGVQYXRoLCBlbmNvZGluZyA9ICd1dGY4Jykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgcmVhZERpcmVjdG9yeShkaXJlY3RvcnlQYXRoKSB7XG4gICAgY29uc3QgZW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeVBhdGgpO1xuXG4gICAgcmV0dXJuIGVudHJ5TmFtZXM7XG4gIH1cblxuICBzdGF0aWMgZmlsZUV4aXN0cyhmaWxlUGF0aCkge1xuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGZpbGVQYXRoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVTeXN0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFycmF5ID0gcmVxdWlyZSgnLi9hcnJheScpO1xuXG5jbGFzcyBwYXRoVXRpbCB7XG4gIHN0YXRpYyBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZShwYXRoKSB7XG4gICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBwYXRoVXRpbC50b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpLFxuICAgICAgICAgIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSA9ICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCk7IC8vL1xuXG4gICAgcmV0dXJuIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBib3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dKiQpLyk7XG4gICAgXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuICAgICAgXG4gICAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdHRvbW1vc3ROYW1lO1xuICB9XG5cbiAgc3RhdGljIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG4gICAgXG4gICAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKilcXC8vKTtcblxuICAgIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzZWNvbmRNYXRjaCA9IGFycmF5LnNlY29uZChtYXRjaGVzKTtcblxuICAgICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICAgIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvKF4uKilcXC9bXlxcL10qJC8pO1xuXG4gICAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xuICB9XG5cbiAgc3RhdGljIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gICAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dKlxcLyguKiQpLyk7XG5cbiAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBhcnJheS5zZWNvbmQobWF0Y2hlcyk7XG5cbiAgICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUmVhY3Q6IHJlcXVpcmUoJy4vbGliL3JlYWN0JyksXG4gIFJlYWN0RE9NOiByZXF1aXJlKCcuL2xpYi9yZWFjdERPTScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi4vaGVscGVycycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGluZmVyZW5jZU1peGluID0gcmVxdWlyZSgnLi9yZWFjdC9pbmZlcmVuY2VNaXhpbicpO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2UsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpOyBcbiAgfVxuXG4gIHJlbW91bnQoKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICAgIFxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW5kZXIodXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgaW5mZXJlbmNlTWl4aW4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSBoZWxwZXJzLnJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7XG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3NFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgZmlyc3RDaGlsZC5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNoaWxkQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICBmaXJzdENoaWxkLmFkZENoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgaW5mZXJlbmNlTWl4aW4gPSB7XG4gIHNwbGljZUNoaWxkcmVuOiBzcGxpY2VDaGlsZHJlbixcbiAgYWRkQ2hpbGQ6IGFkZENoaWxkLFxuICByZW1vdmVDaGlsZDogcmVtb3ZlQ2hpbGQsXG4gIHNldEF0dHJpYnV0ZTogc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGU6IGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGU6IGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGU6IGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlOiByZW1vdmVBdHRyaWJ1dGUsXG4gIHNldENsYXNzOiBzZXRDbGFzcyxcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3M6IGhhc0NsYXNzLFxuICBjbGVhckNsYXNzZXM6IGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZTogZ2V0VGFnTmFtZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmZlcmVuY2VNaXhpbjtcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFZpcnR1YWxET01Ob2RlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTU5vZGU7XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKSxcbiAgICAgIGluZmVyZW5jZU1peGluID0gcmVxdWlyZSgnLi9pbmZlcmVuY2VNaXhpbicpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KSB7XG4gIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgYWRkZWRDaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50XS5jb25jYXQoYWRkZWRDaGlsZHJlbiksXG4gICAgICAgIHJlbW92ZWRDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkodGhpcy5jaGlsZHJlbiwgYXJncyk7XG5cbiAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMCxcbiAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMSxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmNvbnN0IGluZmVyZW5jZU1peGluID0ge1xuICBzcGxpY2VDaGlsZHJlbjogc3BsaWNlQ2hpbGRyZW4sXG4gIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlOiBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlOiBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlOiBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuICBzZXRDbGFzczogc2V0Q2xhc3MsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgY2xlYXJDbGFzc2VzOiBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWU6IGdldFRhZ05hbWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5mZXJlbmNlTWl4aW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgVmlydHVhbERPTVRleHRFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9O1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG4gIH1cbiAgXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldFRhZ05hbWUoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTVRleHRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICBndWFyYW50ZWVBcnJheTogZnVuY3Rpb24oYXJyYXlPckVsZW1lbnQpIHsgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG4gIH0sXG5cbiAgcmVtYWluaW5nOiBmdW5jdGlvbihlbGVtZW50LCBhcnJheSkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZShmdW5jdGlvbihjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NsYXNzJyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9mdW5jdGlvbicpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudCcpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudCcpLFxuICAgICAgVmlydHVhbERPTVRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gbmV3IFZpcnR1YWxET01FbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChpc1R5cGVPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50RWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3M6IGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZDtcblxuICAgIGlmIChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgICAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgIGlmIChyZW5kZXIpIHsgdGhpcy5yZW5kZXIgPSByZW5kZXI7IH1cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGNvbnN0IHJlbmRlciA9IG9iamVjdFsncmVuZGVyJ10sXG4gICAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gb2JqZWN0WydnZXRJbml0aWFsU3RhdGUnXSxcbiAgICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBvYmplY3RbJ2dldENoaWxkQ29udGV4dCddLFxuICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gb2JqZWN0Wydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gb2JqZWN0Wydjb21wb25lbnRXaWxsVW5tb3VudCddO1xuICAgXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgLy8vXG4gIH1cbiAgXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQ7XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIl19

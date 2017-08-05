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
    first = array.first,
    SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;


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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function last(array) {
  return array[array.length - 1];
}

function tail(array) {
  return array.slice(1);
}

function push(array1, array2) {
  Array.prototype.push.apply(array1, array2);
}

function unshift(array1, array2) {
  Array.prototype.unshift.apply(array1, array2);
}

function splice(array, start, deleteCount) {
  var itemsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(itemsArray)),
      deletedItemsArray = Array.prototype.splice.apply(array, args);

  return deletedItemsArray;
}

function combine(array1) {
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

function forwardsForEach(array, callback) {
  array.forEach(function (element, index) {
    callback(element, index);
  });
}

function backwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index];

    callback(element, index);
  }
}

module.exports = {
  first: first,
  second: second,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  splice: splice,
  combine: combine,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],32:[function(require,module,exports){
'use strict';

function forEach(array, callback, done) {
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

      callback(element, index, next);
    }
  };

  next();
}

function whilst(test, callback, done) {
  var next = function next() {
    if (test()) {
      callback(next);
    } else {
      done();
    }
  };

  next();
}

module.exports = {
  forEach: forEach,
  whilst: whilst
};

},{}],33:[function(require,module,exports){
'use strict';

var fs = require('fs');

function readFile(filePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(filePath, options);

  return content;
}

function readDirectory(directoryPath) {
  var entryNames = fs.readdirSync(directoryPath);

  return entryNames;
}

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

module.exports = {
  readFile: readFile,
  readDirectory: readDirectory,
  fileExists: fileExists
};

},{"fs":29}],34:[function(require,module,exports){
'use strict';

var array = require('./array');

function isPathTopmostDirectoryName(path) {
  var topmostDirectoryName = pathUtil.topmostDirectoryNameFromPath(path),
      pathTopmostDirectoryName = topmostDirectoryName === null; ///

  return pathTopmostDirectoryName;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;

  var matches = path.match(/^.*\/([^\/]*$)/);

  if (matches !== null) {
    var secondMatch = array.second(matches);

    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;

  var matches = path.match(/^([^\/]*)\//);

  if (matches !== null) {
    var secondMatch = array.second(matches);

    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;

  var matches = path.match(/(^.*)\/[^\/]*$/);

  if (matches !== null) {
    var secondMatch = array.second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;

  var matches = path.match(/^[^\/]*\/(.*$)/);

  if (matches !== null) {
    var secondMatch = array.second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY29tYmluZVJ1bGVzLmpzIiwiZXM2L2NyZWF0ZURpc3BhdGNoZXIuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbnN0YW50cy5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS9hZGRUb2RvLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvYXN5bmMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi9maWxlU3lzdGVtLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvcGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvcmVhY3QvaW5mZXJlbmNlTWl4aW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9pbmZlcmVuY2VNaXhpbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q2xhc3MuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdERPTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxLQUFELEVBQVc7QUFDOUIsU0FBTyxVQUFDLE1BQUQsRUFBWTtBQUNqQixRQUFNLE9BQU8sT0FBTyxJQUFQLENBQVksS0FBWixDQUFiO0FBQUEsUUFDTSxTQUFTLEtBQUssTUFBTCxDQUFZLFVBQUMsTUFBRCxFQUFTLEdBQVQsRUFBaUI7QUFDcEMsVUFBTSxPQUFPLE1BQU0sR0FBTixDQUFiOztBQUVBLGFBQU8sR0FBUCxJQUFjLEtBQUssTUFBTCxDQUFkOztBQUVBLGFBQU8sTUFBUDtBQUNELEtBTlEsRUFNTixFQU5NLENBRGY7O0FBU0EsV0FBTyxNQUFQO0FBQ0QsR0FYRDtBQVlELENBYkQ7O0FBZUEsT0FBTyxPQUFQLEdBQWlCLFlBQWpCOzs7QUNqQkE7O0FBRUEsSUFBTSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsSUFBRCxFQUFVO0FBQ2pDLE1BQUksWUFBWSxFQUFoQjs7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LCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJ1bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIodXBkYXRlKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4geyByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTsgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlZHV4QXBwOiByZXF1aXJlKCcuL2V4YW1wbGVzL3JlZHV4QXBwJyksXG4gIGluZmVyZW5jZUFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9pbmZlcmVuY2VBcHAnKVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IFRvZG9BcHAgPSByZXF1aXJlKCcuL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcCcpO1xuXG5jb25zdCB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IGluZmVyZW5jZUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxUb2RvQXBwIC8+LFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5mZXJlbmNlQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBBRERfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICBpbnB1dERPTUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkVG9kbztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IGFycmF5IH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheSxcbiAgICAgIHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSBwcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7ZmlsdGVyfSBmaWx0ZXJgLFxuICAgICAgICBmaXJzdENoaWxkID0gZmlyc3QoY2hpbGRyZW4pLFxuICAgICAgICB0ZXh0ID0gZmlyc3RDaGlsZC5nZXRUZXh0KCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9hPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSByZXF1aXJlKCcuL2ZpbHRlckxpbmsnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxwPlxuICAgICAgeydTaG93OiAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICAgIDwvcD5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpO1xuXG5jb25zdCB7IFNIT1dfQUxMIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlID0ge30pIHtcbiAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgIGlmIChzZXRWaXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHNldFZpc2liaWxpdHlGaWx0ZXIsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICB0aGlzLnNldENsYXNzKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluaXRpYWxWaXNpYmlsaXR5RmlsdGVyID0gU0hPV19BTEwsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtpbml0aWFsVmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0FwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUgPSB7fSkge1xuICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKGFkZFRvZG8pIHtcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWRkVG9kbztcblxuICAgICAgdGhpcy5hZGRDaGlsZChcblxuICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPHVsPlxuICAgICAgICA8L3VsPlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICB9fT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHtcbiAgQUREX1RPRE86ICdBRERfVE9ETycsXG4gIFNFVF9WSVNJQklMSVRZX0ZJTFRFUjogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG5cbiAgU0hPV19BTEw6ICdzaG93QWxsJyxcbiAgU0hPV19BQ1RJVkU6ICdzaG93QWN0aXZlJyxcbiAgU0hPV19DT01QTEVURUQ6ICdzaG93Q29tcGxldGVkJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZURpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi8uLi9jcmVhdGVEaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIocnVsZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29tYmluZVJ1bGVzID0gcmVxdWlyZSgnLi4vLi4vY29tYmluZVJ1bGVzJyk7XG5cbmNvbnN0IGFkZFRvZG8gPSByZXF1aXJlKCcuL3J1bGUvYWRkVG9kbycpLFxuICAgICAgc2V0VmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvOiBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyOiBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBydWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBBRERfVE9ETyB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBhZGRUb2RvID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cztcblxuY29uc3Qgc2V0VmlzaWJpbGl0eUZpbHRlciA9IChhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFZpc2liaWxpdHlGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHV4JyksXG4gICAgICByZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9yZWR1Y2VyJyksXG4gICAgICBUb2RvQXBwID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcCcpLFxuICAgICAgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlcicpO1xuXG5jb25zdCB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eCxcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCsrICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWRkVG9kbztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gcmVxdWlyZSgnLi9maWx0ZXJMaW5rJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZTogc3RvcmVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvdmlkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8QWRkVG9kbyAvPlxuICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0FwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC91bD5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdDtcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgVG9kb0xpc3RJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xpY2tIYW5kbGVyLCBjb21wbGV0ZWQsIHRleHQgfSA9IHByb3BzLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbm9uZScsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHtcbiAgQUREX1RPRE86ICdBRERfVE9ETycsXG4gIFRPR0dMRV9UT0RPOiAnVE9HR0xFX1RPRE8nLFxuICBTRVRfVklTSUJJTElUWV9GSUxURVI6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuXG4gIFNIT1dfQUxMOiAnU0hPV19BTEwnLFxuICBTSE9XX0FDVElWRTogJ1NIT1dfQUNUSVZFJyxcbiAgU0hPV19DT01QTEVURUQ6ICdTSE9XX0NPTVBMRVRFRCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKTtcblxuY29uc3QgdG9kb3MgPSByZXF1aXJlKCcuL3JlZHVjZXIvdG9kb3MnKSxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSByZXF1aXJlKCcuL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlcicpO1xuXG5jb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvczogdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRvZG9zO1xuXG5jb25zdCBhZGRUb2RvVG9Ub2RvcyA9ICh0b2RvcywgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcblxuY29uc3QgdG9nZ2xlVG9kb3MgPSAodG9kb3MsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cztcblxuY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9IChzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2liaWxpdHlGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCgpO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcblxuY29uc3QgcmVkdXggPSB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eDtcbiIsIiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhdGg6IHJlcXVpcmUoJy4vbGliL3BhdGgnKSxcbiAgYXJyYXk6IHJlcXVpcmUoJy4vbGliL2FycmF5JyksXG4gIGFzeW5jOiByZXF1aXJlKCcuL2xpYi9hc3luYycpLFxuICBmaWxlU3lzdGVtOiByZXF1aXJlKCcuL2xpYi9maWxlU3lzdGVtJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBpdGVtc0FycmF5ID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLml0ZW1zQXJyYXldLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXksIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gY29tYmluZShhcnJheTEsIGFycmF5MiA9IFtdLCB0ZXN0KSB7XG4gIGFycmF5MSA9IGFycmF5Mi5yZWR1Y2UoZnVuY3Rpb24oYXJyYXkxLCBlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5MTtcbiAgfSwgYXJyYXkxKTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZpcnN0OiBmaXJzdCxcbiAgc2Vjb25kOiBzZWNvbmQsXG4gIGxhc3Q6IGxhc3QsXG4gIHRhaWw6IHRhaWwsXG4gIHB1c2g6IHB1c2gsXG4gIHVuc2hpZnQ6IHVuc2hpZnQsXG4gIHNwbGljZTogc3BsaWNlLFxuICBjb21iaW5lOiBjb21iaW5lLFxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lKSB7XHJcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcbiAgXHJcbiAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgIGluZGV4Kys7XHJcblxyXG4gICAgaWYgKGluZGV4ID09PSBhcnJheUxlbmd0aCkge1xyXG4gICAgICBpZiAoZG9uZSkge1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4LCBuZXh0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdoaWxzdCh0ZXN0LCBjYWxsYmFjaywgZG9uZSkge1xyXG4gIGNvbnN0IG5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh0ZXN0KCkpIHtcclxuICAgICAgY2FsbGJhY2sobmV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHdoaWxzdDogd2hpbHN0XHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5mdW5jdGlvbiByZWFkRmlsZShmaWxlUGF0aCwgZW5jb2RpbmcgPSAndXRmOCcpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBlbmNvZGluZzogZW5jb2RpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHJlYWREaXJlY3RvcnkoZGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBlbnRyeU5hbWVzID0gZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIGVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIGZpbGVFeGlzdHMoZmlsZVBhdGgpIHtcbiAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVhZEZpbGU6IHJlYWRGaWxlLFxuICByZWFkRGlyZWN0b3J5OiByZWFkRGlyZWN0b3J5LFxuICBmaWxlRXhpc3RzOiBmaWxlRXhpc3RzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBhcnJheSA9IHJlcXVpcmUoJy4vYXJyYXknKTtcblxuZnVuY3Rpb24gaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUocGF0aCkge1xuICBjb25zdCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHBhdGhVdGlsLnRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZSA9ICh0b3Btb3N0RGlyZWN0b3J5TmFtZSA9PT0gbnVsbCk7IC8vL1xuXG4gIHJldHVybiBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dKiQpLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IGFycmF5LnNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZnVuY3Rpb24gdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oW15cXC9dKilcXC8vKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goLyheLiopXFwvW15cXC9dKiQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL15bXlxcL10qXFwvKC4qJCkvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gYXJyYXkuc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhdGhUb3Btb3N0RGlyZWN0b3J5TmFtZTogaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGg6IGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGg6IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpLFxuICBSZWFjdERPTTogcmVxdWlyZSgnLi9saWIvcmVhY3RET00nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBpbmZlcmVuY2VNaXhpbiA9IHJlcXVpcmUoJy4vcmVhY3QvaW5mZXJlbmNlTWl4aW4nKTtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgXG4gIH1cblxuICByZW1vdW50KCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpIHx8IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGhlbHBlcnMuZ3VhcmFudGVlQXJyYXkodGhpcy5yZW5kZXIoKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgICBcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKHVwZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi4vcmVhY3QnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gIGZpcnN0Q2hpbGQuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjaGlsZENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgY29udGV4dCA9IHRoaXMuY29udGV4dCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgZmlyc3RDaGlsZC5hZGRDaGlsZChjaGlsZCwgY2hpbGRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IFxuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzc2FkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IFxuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IGluZmVyZW5jZU1peGluID0ge1xuICBzcGxpY2VDaGlsZHJlbjogc3BsaWNlQ2hpbGRyZW4sXG4gIGFkZENoaWxkOiBhZGRDaGlsZCxcbiAgcmVtb3ZlQ2hpbGQ6IHJlbW92ZUNoaWxkLFxuICBzZXRBdHRyaWJ1dGU6IHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlOiBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlOiBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlOiBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cmlidXRlLFxuICBzZXRDbGFzczogc2V0Q2xhc3MsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgY2xlYXJDbGFzc2VzOiBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWU6IGdldFRhZ05hbWVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW5mZXJlbmNlTWl4aW47XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IFZpcnR1YWxET01Ob2RlKHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01Ob2RlO1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyksXG4gICAgICBpbmZlcmVuY2VNaXhpbiA9IHJlcXVpcmUoJy4vaW5mZXJlbmNlTWl4aW4nKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAoaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCBpbmZlcmVuY2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICBhZGRlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYWRkZWRDaGlsZCkge1xuICAgIGFkZGVkQ2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICB9KTtcblxuICBjb25zdCBhcmdzID0gW3N0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudF0uY29uY2F0KGFkZGVkQ2hpbGRyZW4pLFxuICAgICAgICByZW1vdmVkQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIGFyZ3MpO1xuXG4gIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDAsXG4gICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDEsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5jb25zdCBpbmZlcmVuY2VNaXhpbiA9IHtcbiAgc3BsaWNlQ2hpbGRyZW46IHNwbGljZUNoaWxkcmVuLFxuICBhZGRDaGlsZDogYWRkQ2hpbGQsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgc2V0QXR0cmlidXRlOiBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZTogZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZTogY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZTogYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHJpYnV0ZSxcbiAgc2V0Q2xhc3M6IHNldENsYXNzLFxuICBhZGRDbGFzczogYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIGNsZWFyQ2xhc3NlczogY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lOiBnZXRUYWdOYW1lXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZmVyZW5jZU1peGluO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyk7XG5cbmNsYXNzIFZpcnR1YWxET01UZXh0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHtcbiAgZ3VhcmFudGVlQXJyYXk6IGZ1bmN0aW9uKGFycmF5T3JFbGVtZW50KSB7IHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xuICB9LFxuXG4gIHJlbWFpbmluZzogZnVuY3Rpb24oZWxlbWVudCwgYXJyYXkpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpIHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jbGFzcycpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24nKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jb21wb25lbnQnKSxcbiAgICAgIFZpcnR1YWxET01FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQnKSxcbiAgICAgIFZpcnR1YWxET01UZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NRWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSB2aXJ0dWFsRE9NRWxlbWVudFxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCksXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudEVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzOiBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7ICAgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICBpZiAocmVuZGVyKSB7IHRoaXMucmVuZGVyID0gcmVuZGVyOyB9XG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICBjb25zdCByZW5kZXIgPSBvYmplY3RbJ3JlbmRlciddLFxuICAgICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IG9iamVjdFsnZ2V0SW5pdGlhbFN0YXRlJ10sXG4gICAgICAgICAgZ2V0Q2hpbGRDb250ZXh0ID0gb2JqZWN0WydnZXRDaGlsZENvbnRleHQnXSxcbiAgICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IG9iamVjdFsnY29tcG9uZW50RGlkTW91bnQnXSxcbiAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IG9iamVjdFsnY29tcG9uZW50V2lsbFVubW91bnQnXTtcbiAgIFxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIC8vL1xuICB9XG4gIFxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBWaXJ0dWFsRE9NTm9kZS5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiJdfQ==

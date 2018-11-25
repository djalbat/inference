(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
			var ruleNames = listener.ruleNames;


			if (ruleNames.length === 0 || ruleNames.some(function (ruleName) {
				return update[ruleName] !== undefined;
			})) {
				listener(update);
			}
		});
	};

	var subscribe = function subscribe(listener) {
		for (var _len = arguments.length, ruleNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			ruleNames[_key - 1] = arguments[_key];
		}

		Object.assign(listener, {
			ruleNames: ruleNames
		});

		listeners.push(listener);

		return function () {
			return unsubscribe(listener);
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

},{"./inferenceApp/component/todoApp":8,"reaction":38}],5:[function(require,module,exports){
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

},{"../constants":11,"../dispatcher":12,"reaction":38}],6:[function(require,module,exports){
'use strict';

var reaction = require('reaction'),
    necessary = require('necessary');

var constants = require('../constants'),
    dispatcher = require('../dispatcher');

var React = reaction.React,
    arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
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

},{"../constants":11,"../dispatcher":12,"necessary":30,"reaction":38}],7:[function(require,module,exports){
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

},{"../constants":11,"./filterLink":6,"reaction":38}],8:[function(require,module,exports){
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

},{"../constants":11,"../dispatcher":12,"./addTodo":5,"./footer":7,"./todoList":9,"reaction":38}],9:[function(require,module,exports){
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

},{"../dispatcher":12,"./todoListItem":10,"reaction":38}],10:[function(require,module,exports){
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

},{"reaction":38}],11:[function(require,module,exports){
'use strict';

var ADD_TODO = 'ADD_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
    SHOW_ALL = 'showAll',
    SHOW_ACTIVE = 'showActive',
    SHOW_COMPLETED = 'showCompleted';

module.exports = {
	ADD_TODO: ADD_TODO,
	SET_VISIBILITY_FILTER: SET_VISIBILITY_FILTER,
	SHOW_ALL: SHOW_ALL,
	SHOW_ACTIVE: SHOW_ACTIVE,
	SHOW_COMPLETED: SHOW_COMPLETED
};

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

},{"./reduxApp/component/provider":20,"./reduxApp/component/todoApp":21,"./reduxApp/reducer":25,"./reduxApp/redux":28,"reaction":38}],17:[function(require,module,exports){
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
            id: id
          };

          id++;

          store.dispatch(action);

          inputDOMElement.value = '';
        }
      },
      'Add todo'
    )
  );
};

module.exports = AddTodo;

},{"../constants":24,"reaction":38}],18:[function(require,module,exports){
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

},{"../constants":24,"reaction":38}],19:[function(require,module,exports){
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

},{"../constants":24,"./filterLink":18,"reaction":38}],20:[function(require,module,exports){
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

},{"reaction":38}],21:[function(require,module,exports){
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

},{"./addTodo":17,"./footer":19,"./todoList":22,"reaction":38}],22:[function(require,module,exports){
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

},{"../constants":24,"./todoListItem":23,"reaction":38}],23:[function(require,module,exports){
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

},{"reaction":38}],24:[function(require,module,exports){
'use strict';

var ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
    SHOW_ALL = 'SHOW_ALL',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_COMPLETED = 'SHOW_COMPLETED';

module.exports = {
	ADD_TODO: ADD_TODO,
	TOGGLE_TODO: TOGGLE_TODO,
	SET_VISIBILITY_FILTER: SET_VISIBILITY_FILTER,
	SHOW_ALL: SHOW_ALL,
	SHOW_ACTIVE: SHOW_ACTIVE,
	SHOW_COMPLETED: SHOW_COMPLETED
};

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
  pathUtilities: require('./lib/utilities/path'),
  arrayUtilities: require('./lib/utilities/array'),
  templateUtilities: require('./lib/utilities/template'),
  fileSystemUtilities: require('./lib/utilities/fileSystem'),
  asynchronousUtilities: require('./lib/utilities/asynchronous'),
  miscellaneousUtilities: require('./lib/utilities/miscellaneous')
};

},{"./lib/utilities/array":31,"./lib/utilities/asynchronous":32,"./lib/utilities/fileSystem":33,"./lib/utilities/miscellaneous":34,"./lib/utilities/path":35,"./lib/utilities/template":36}],31:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function first(array) {
  return array[0];
}

function second(array) {
  return array[1];
}

function third(array) {
  return array[2];
}

function fourth(array) {
  return array[3];
}

function fifth(array) {
  return array[4];
}

function fifthLast(array) {
  return array[array.length - 5];
}

function fourthLast(array) {
  return array[array.length - 4];
}

function thirdLast(array) {
  return array[array.length - 3];
}

function secondLast(array) {
  return array[array.length - 2];
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

function clear(array) {
  var start = 0;

  return array.splice(start);
}

function copy(array1, array2) {
  var start = 0,
      deleteCount = array2.length; ///

  splice(array1, start, deleteCount, array2);
}

function merge(array1, array2) {
  var start = array2.length,
      ///
  deleteCount = 0;

  splice(array1, start, deleteCount, array2);
}

function splice(array1, start, deleteCount) {
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);

  return deletedItemsArray;
}

function replace(array, element, test) {
  var start = -1;

  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      start = index; ///

      return true;
    }
  });

  if (found) {
    var deleteCount = 1;

    array.splice(start, deleteCount, element);
  }

  return found;
}

function filter(array, test) {
  var filteredElements = [];

  backwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (!passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      filteredElements.unshift(firstDeletedElement); ///
    }
  });

  return filteredElements;
}

function find(array, test) {
  var elements = [];

  forwardsForEach(array, function (element, index) {
    var passed = test(element, index);

    if (passed) {
      elements.push(element);
    }
  });

  return elements;
}

function prune(array, test) {
  var prunedElement = undefined;

  array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      var start = index,
          ///
      deleteCount = 1,
          deletedElements = array.splice(start, deleteCount),
          firstDeletedElement = first(deletedElements);

      prunedElement = firstDeletedElement; ///

      return true;
    }
  });

  return prunedElement;
}

function patch(array, element, test) {
  var found = array.some(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      return true;
    }
  });

  if (found) {
    array.push(element);
  }

  return found;
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

function separate(array, array1, array2, test) {
  array.forEach(function (element, index) {
    var passed = test(element, index);

    passed ? array1.push(element) : array2.push(element);
  });
}

function forwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, callback) {
  var arrayLength = array.length;

  for (var index = arrayLength - 1; index >= 0; index--) {
    var element = array[index],
        result = callback(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function forwardsForEach(array, callback) {
  var arrayLength = array.length;

  for (var index = 0; index < arrayLength; index++) {
    var element = array[index];

    callback(element, index);
  }
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
  third: third,
  fourth: fourth,
  fifth: fifth,
  fifthLast: fifthLast,
  fourthLast: fourthLast,
  thirdLast: thirdLast,
  secondLast: secondLast,
  last: last,
  tail: tail,
  push: push,
  unshift: unshift,
  clear: clear,
  copy: copy,
  merge: merge,
  splice: splice,
  replace: replace,
  filter: filter,
  find: find,
  prune: prune,
  patch: patch,
  augment: augment,
  separate: separate,
  forwardsSome: forwardsSome,
  backwardsSome: backwardsSome,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],32:[function(require,module,exports){
'use strict';

function whilst(callback, done, context) {
  var count = -1;

  function next() {
    count++;

    var index = count,
        ///
    terminate = callback(next, done, context, index);

    if (terminate) {
      done();
    }
  }

  next();
}

function forEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function sequence(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      callback = callbacks[index];

      callback(next, done, context, index);
    }
  }

  next();
}

function eventually(callbacks, done, context) {
  var length = callbacks.length; ///

  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  callbacks.forEach(function (callback, index) {
    callback(next, done, context, index);
  });
}

function repeatedly(callback, length, done, context) {
  var count = 0;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    }
  }

  for (var index = 0; index < length; index++) {
    callback(next, done, context, index);
  }
}

function forwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = -1;

  function next() {
    count++;

    var terminate = count === length;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

function backwardsForEach(array, callback, done, context) {
  var length = array.length; ///

  var count = length;

  function next() {
    count--;

    var terminate = count === -1;

    if (terminate) {
      done();
    } else {
      var index = count,
          ///
      element = array[index];

      callback(element, next, done, context, index);
    }
  }

  next();
}

module.exports = {
  whilst: whilst,
  forEach: forEach,
  sequence: sequence,
  eventually: eventually,
  repeatedly: repeatedly,
  forwardsForEach: forwardsForEach,
  backwardsForEach: backwardsForEach
};

},{}],33:[function(require,module,exports){
'use strict';

var fs = require('fs');

function entryExists(absolutePath) {
  return fs.existsSync(absolutePath);
}

function fileExists(absoluteFilePath) {
  var fileExists = false;

  var absolutePath = absoluteFilePath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryFile = isEntryFile(absolutePath);

    if (entryFile) {
      fileExists = true;
    }
  }

  return fileExists;
}

function isEntryFile(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory(),
      entryFile = !entryDirectory;

  return entryFile;
}

function directoryExists(absoluteDirectoryPath) {
  var directoryExists = false;

  var absolutePath = absoluteDirectoryPath,
      ///
  entryExists = entryExists(absolutePath);

  if (entryExists) {
    var entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directoryExists = true;
    }
  }

  return directoryExists;
}

function isEntryDirectory(absolutePath) {
  var stat = fs.statSync(absolutePath),
      entryDirectory = stat.isDirectory();

  return entryDirectory;
}

function isDirectoryEmpty(absoluteDirectoryPath) {
  var subEntryNames = readDirectory(absoluteDirectoryPath),
      subEntryNamesLength = subEntryNames.length,
      directoryEmpty = subEntryNamesLength === 0;

  return directoryEmpty;
}

function readDirectory(absoluteDirectoryPath) {
  var subEntryNames = fs.readdirSync(absoluteDirectoryPath);

  return subEntryNames;
}

function readFile(absoluteFilePath) {
  var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

  var options = {
    encoding: encoding
  },
      content = fs.readFileSync(absoluteFilePath, options);

  return content;
}

function writeFile(absoluteFilePath, content) {
  fs.writeFileSync(absoluteFilePath, content);
}

module.exports = {
  entryExists: entryExists,
  fileExists: fileExists,
  isEntryFile: isEntryFile,
  directoryExists: directoryExists,
  isEntryDirectory: isEntryDirectory,
  isDirectoryEmpty: isDirectoryEmpty,
  readDirectory: readDirectory,
  readFile: readFile,
  writeFile: writeFile
};

},{"fs":29}],34:[function(require,module,exports){
(function (process){
'use strict';

var GET_METHOD = 'GET',
    POST_METHOD = 'POST',
    ETX_CHARACTER = '\x03';

function get(host, uri, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  var method = GET_METHOD,
      body = undefined;

  request(host, uri, parameters, method, body, callback);
}

function post(host, uri, json, parameters, callback) {
  if (callback === undefined) {
    callback = parameters; ///
    parameters = {};
  }

  var method = POST_METHOD,
      body = JSON.stringify(json);

  request(host, uri, parameters, method, body, callback);
}

function onETX(handler) {
  var _process = process,
      stdin = _process.stdin,
      setRawMode = stdin.setRawMode;


  if (setRawMode) {
    var rawMode = true,
        encoding = 'utf8';

    stdin.setRawMode(rawMode);
    stdin.setEncoding(encoding);

    stdin.resume();

    stdin.addListener('data', dataHandler);

    return offExt;
  }

  function offExt() {
    stdin.removeListener('data', dataHandler);
  }

  function dataHandler(character) {
    if (character === ETX_CHARACTER) {
      handler();
    }
  }
}

module.exports = {
  get: get,
  post: post,
  onETX: onETX
};

function request(host, uri, parameters, method, body, callback) {
  var url = urlFromHostURIAndParameters(host, uri, parameters),
      xmlHttpRequest = new XMLHttpRequest();

  xmlHttpRequest.onreadystatechange = function () {
    var readyState = xmlHttpRequest.readyState,
        status = xmlHttpRequest.status,
        responseText = xmlHttpRequest.responseText;


    if (readyState == 4) {
      if (status == 200) {
        var jsonString = responseText,
            ///
        json = JSON.parse(jsonString);

        callback(json);
      } else {
        callback(null);
      }
    }
  };

  xmlHttpRequest.open(method, url, true);

  xmlHttpRequest.send(body);
}

function urlFromHostURIAndParameters(host, uri, parameters) {
  var queryString = queryStringFromParameters(parameters),
      url = queryString === '' ? host + '/' + uri : host + '/' + uri + '?' + queryString;

  return url;
}

function queryStringFromParameters(parameters) {
  var names = Object.keys(parameters),
      namesLength = names.length,
      lastIndex = namesLength - 1,
      queryString = names.reduce(function (queryString, name, index) {
    var value = parameters[name],
        encodedName = encodeURIComponent(name),
        encodedValue = encodeURIComponent(value),
        ampersandOrNothing = index !== lastIndex ? '&' : '';

    queryString += encodedName + '=' + encodedValue + ampersandOrNothing;

    return queryString;
  }, '');

  return queryString;
}

}).call(this,require('_process'))

},{"_process":37}],35:[function(require,module,exports){
'use strict';

var array = require('./array');

var first = array.first,
    second = array.second,
    last = array.last;


function isPathRelativePath(path) {
  var position = path.search(/^\.{1,2}\//),
      pathRelativePath = position !== -1;

  return pathRelativePath;
}

function isPathAbsolutePath(path) {
  var pathRelativePath = isPathRelativePath(path),
      pathAbsolutePath = !pathRelativePath; ///

  return pathAbsolutePath;
}

function isPathTopmostDirectoryName(path) {
  var position = path.search(/^[^\/]+\/?$/),
      pathTopmostDirectoryName = position !== -1;

  return pathTopmostDirectoryName;
}

function isTopmostDirectoryNameContainedInPath(topmostDirectoryName, path) {
  topmostDirectoryName = topmostDirectoryName.replace(/\/$/, ''); ///

  var regExp = new RegExp('^' + topmostDirectoryName + '(?:\\/.+)?$'),
      position = path.search(regExp),
      topmostDirectoryNameContainedInFilePath = position !== -1;

  return topmostDirectoryNameContainedInFilePath;
}

function combinePaths(directoryPath, relativePath) {
  var absolutePath = null;

  var directoryPathSubEntryNames = directoryPath.split('/'),
      relativeFilePathSubEntryNames = relativePath.split('/');

  var firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames),
      lastDirectoryPathSubEntryName = void 0;

  if (firstRelativeFilePathSubEntryName === '.') {
    relativeFilePathSubEntryNames.shift();
  }

  firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
  lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);

  while (firstRelativeFilePathSubEntryName === '..' && lastDirectoryPathSubEntryName !== undefined) {
    relativeFilePathSubEntryNames.shift();
    directoryPathSubEntryNames.pop();

    firstRelativeFilePathSubEntryName = first(relativeFilePathSubEntryNames);
    lastDirectoryPathSubEntryName = last(directoryPathSubEntryNames);
  }

  if (lastDirectoryPathSubEntryName !== undefined) {
    var absoluteFilePathSubEntryNames = [].concat(directoryPathSubEntryNames).concat(relativeFilePathSubEntryNames);

    absolutePath = absoluteFilePathSubEntryNames.join('/');
  }

  return absolutePath;
}

function concatenatePaths(path1, path2) {
  path1 = path1.replace(/\/$/, ''); ///

  var combinedPath = path1 + '/' + path2;

  return combinedPath;
}

function bottommostNameFromPath(path) {
  var bottommostName = null;

  var matches = path.match(/^.+\/([^\/]+\/?)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    bottommostName = secondMatch; ///
  }

  return bottommostName;
}

function topmostDirectoryPathFromPath(path) {
  var matches = path.match(/^(.+)\/[^\/]+\/?$/),
      secondMatch = second(matches),
      directoryPath = secondMatch; ///

  return directoryPath;
}

function topmostDirectoryNameFromPath(path) {
  var topmostDirectoryName = null;

  var matches = path.match(/^([^\/]+)\/.+$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    topmostDirectoryName = secondMatch; ///
  }

  return topmostDirectoryName;
}

function pathWithoutBottommostNameFromPath(path) {
  var pathWithoutBottommostName = null;

  var matches = path.match(/(^.+)\/[^\/]+\/?$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutBottommostName = secondMatch; ///
  }

  return pathWithoutBottommostName;
}

function pathWithoutTopmostDirectoryNameFromPath(path) {
  var pathWithoutTopmostDirectoryName = null;

  var matches = path.match(/^[^\/]+\/(.+)$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pathWithoutTopmostDirectoryName = secondMatch;
  }

  return pathWithoutTopmostDirectoryName;
}

module.exports = {
  isPathRelativePath: isPathRelativePath,
  isPathAbsolutePath: isPathAbsolutePath,
  isPathTopmostDirectoryName: isPathTopmostDirectoryName,
  isTopmostDirectoryNameContainedInPath: isTopmostDirectoryNameContainedInPath,
  combinePaths: combinePaths,
  concatenatePaths: concatenatePaths,
  bottommostNameFromPath: bottommostNameFromPath,
  topmostDirectoryPathFromPath: topmostDirectoryPathFromPath,
  topmostDirectoryNameFromPath: topmostDirectoryNameFromPath,
  pathWithoutBottommostNameFromPath: pathWithoutBottommostNameFromPath,
  pathWithoutTopmostDirectoryNameFromPath: pathWithoutTopmostDirectoryNameFromPath
};

},{"./array":31}],36:[function(require,module,exports){
'use strict';

var fileSystemUtilities = require('../utilities/fileSystem');

var readFile = fileSystemUtilities.readFile;


function parseFile(filePath, args) {
  var content = readFile(filePath),
      parsedContent = parseContent(content, args);

  return parsedContent;
}

function parseContent(content, args) {
  var lines = content.split('\n'),
      parsedLines = parseLines(lines, args),
      parsedContent = parsedLines.join('\n');

  return parsedContent;
}

function parseLine(line, args) {
  var parsedLine = line.replace(/\$\{(.+?)\}/g, function (match, token) {
    var parsedToken = parseToken(token, args);

    return parsedToken;
  });

  return parsedLine;
}

module.exports = {
  parseFile: parseFile,
  parseContent: parseContent,
  parseLine: parseLine
};

function parseLines(lines, args) {
  var parsedLines = lines.map(function (line) {
    var parsedLine = parseLine(line, args);

    return parsedLine;
  });

  return parsedLines;
}

function parseToken(token, args) {
  var parsedToken = '';

  if (args.hasOwnProperty(token)) {
    parsedToken = args[token];
  }

  return parsedToken;
}

},{"../utilities/fileSystem":33}],37:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],38:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":51,"./lib/reactDOM":54}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var arrayUtilities = require('./utilities/array');

var first = arrayUtilities.first;

var Element = function () {
  function Element(props) {
    _classCallCheck(this, Element);

    this.props = props;

    this.parent = null;

    this.children = props.children; ///
  }

  _createClass(Element, [{
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
    key: 'getFirstChild',
    value: function getFirstChild() {
      var firstChild = first(this.children) || null;

      return firstChild;
    }
  }, {
    key: 'mount',
    value: function mount(parent, children) {
      this.parent = parent;

      this.children = children;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.parent = null;

      this.children = null;
    }
  }]);

  return Element;
}();

module.exports = Element;

},{"./utilities/array":55}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    reactElementMixins = require('../mixins/reactElement');

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined; ///
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = this,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      }.bind(this));

      this.componentDidMount();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context),
          children = this.getChildren();

      children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'remount',
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
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
    key: 'updateState',
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, reactElementMixins);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent; ///

    parent = parent.getParent();

    reference = findReference(parent, child);

    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild; ///
      } else {
        child = null;

        parent = remainingChild; ///

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

},{"../element":39,"../mixins/reactElement":49,"../utilities/array":55}],41:[function(require,module,exports){
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

},{"../react":40}],42:[function(require,module,exports){
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

},{"../react":40}],43:[function(require,module,exports){
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

    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactFunction(this.props, this.context, this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      ///
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

},{"../react":40}],44:[function(require,module,exports){
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
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'mount',
    value: function mount(parent, reference) {
      var children = this.getChildren();

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'mount', this).call(this, parent, children);

      parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.domElement.parentElement.removeChild(this.domElement);

      _get(VirtualDOMNode.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMNode.prototype), 'unmount', this).call(this);
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

},{"../element":39}],45:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement() {
    _classCallCheck(this, VirtualDOMElement);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).apply(this, arguments));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
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

        if (false) {} else if (this.isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (this.isAttributeName(name)) {
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
  }, {
    key: 'isHandlerName',
    value: function isHandlerName(name) {
      return name.match(/^on/);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

module.exports = VirtualDOMElement;

},{"../../mixins/virtualDOMElement":50,"../virtualDOMNode":44}],46:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nameUtilities = require('../../../utilities/name'),
    VirtualDOMElement = require('../element');

var isHTMLAttributeName = nameUtilities.isHTMLAttributeName;

var VirtualDOMHTMLElement = function (_VirtualDOMElement) {
	_inherits(VirtualDOMHTMLElement, _VirtualDOMElement);

	function VirtualDOMHTMLElement(tagName, props) {
		_classCallCheck(this, VirtualDOMHTMLElement);

		var domElement = document.createElement(tagName);

		return _possibleConstructorReturn(this, (VirtualDOMHTMLElement.__proto__ || Object.getPrototypeOf(VirtualDOMHTMLElement)).call(this, props, domElement));
	}

	_createClass(VirtualDOMHTMLElement, [{
		key: 'isAttributeName',
		value: function isAttributeName(name) {
			return isHTMLAttributeName(name);
		}
	}]);

	return VirtualDOMHTMLElement;
}(VirtualDOMElement);

module.exports = VirtualDOMHTMLElement;

},{"../../../utilities/name":56,"../element":45}],47:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nameUtilities = require('../../../utilities/name'),
    VirtualDOMElement = require('../element');

var isSVGAttributeName = nameUtilities.isSVGAttributeName;

var VirtualDOMSVGElement = function (_VirtualDOMElement) {
	_inherits(VirtualDOMSVGElement, _VirtualDOMElement);

	function VirtualDOMSVGElement(tagName, props) {
		_classCallCheck(this, VirtualDOMSVGElement);

		var domElement = document.createElementNS('http://www.w3.org/2000/svg', tagName);

		return _possibleConstructorReturn(this, (VirtualDOMSVGElement.__proto__ || Object.getPrototypeOf(VirtualDOMSVGElement)).call(this, props, domElement));
	}

	_createClass(VirtualDOMSVGElement, [{
		key: 'isAttributeName',
		value: function isAttributeName(name) {
			return isSVGAttributeName(name);
		}
	}]);

	return VirtualDOMSVGElement;
}(VirtualDOMElement);

module.exports = VirtualDOMSVGElement;

},{"../../../utilities/name":56,"../element":45}],48:[function(require,module,exports){
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

},{"../virtualDOMNode":44}],49:[function(require,module,exports){
'use strict';

function setAttribute(name, value) {
  var firstChild = this.getFirstChild();

  return firstChild.setAttribute(name, value);
}

function getAttribute(name) {
  var firstChild = this.getFirstChild();

  return firstChild.getAttribute(name);
}

function clearAttribute(name) {
  var firstChild = this.getFirstChild();

  firstChild.clearAttribute(name);
}

function addAttribute(name, value) {
  var firstChild = this.getFirstChild();

  firstChild.addAttribute(name, value);
}

function removeAttribute(name) {
  var firstChild = this.getFirstChild();

  firstChild.removeAttribute(name);
}

function hasAttribute(name) {
  var firstChild = this.getFirstChild();

  return firstChild.hasAttribute(name);
}

function setClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.setClass(className);
}

function addClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.addClass(className);
}

function removeClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.removeClass(className);
}

function toggleClass(className) {
  var firstChild = this.getFirstChild();

  firstChild.toggleClass(className);
}

function hasClass(className) {
  var firstChild = this.getFirstChild();

  return firstChild.hasClass(className);
}

function hasClasses(classNames) {
  var firstChild = this.getFirstChild();

  return firstChild.hasClasses(classNames);
}

function clearClasses() {
  var firstChild = this.getFirstChild();

  firstChild.clearClasses();
}

function getTagName() {
  return null; ///
}

function setStyle(name, value) {
  var firstChild = this.getFirstChild();

  firstChild.setStyle(name, value);
}

module.exports = {
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  hasAttribute: hasAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName,
  setStyle: setStyle
};

},{}],50:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  this.domElement.removeAttribute(name);
}

function hasAttribute(name) {
  return this.domElement.hasAttribute(name);
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

function hasClasses(classNames) {
  return classNames.every(function (className) {
    return this.hasClass(className);
  }.bind(this));
}

function clearClasses() {
  this.domElement.className = '';
}

function getTagName() {
  return this.domElement.tagName;
}

function setStyle(name, value) {
  this.domElement.style[name] = value;
}

module.exports = {
  setAttribute: setAttribute,
  getAttribute: getAttribute,
  clearAttribute: clearAttribute,
  addAttribute: addAttribute,
  removeAttribute: removeAttribute,
  hasAttribute: hasAttribute,
  setClass: setClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  hasClass: hasClass,
  hasClasses: hasClasses,
  clearClasses: clearClasses,
  getTagName: getTagName,
  setStyle: setStyle
};

},{}],51:[function(require,module,exports){
'use strict';

var Element = require('./element'),
    ReactClass = require('./reactClass'),
    nameUtilities = require('./utilities/name'),
    arrayUtilities = require('./utilities/array'),
    ReactComponent = require('./reactComponent'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
    VirtualDOMHTMLElement = require('./element/virtualDOMNode/element/html'),
    VirtualDOMSVGElement = require('./element/virtualDOMNode/element/svg');

var flatten = arrayUtilities.flatten,
    isSVGTagName = nameUtilities.isSVGTagName;


function createClass(object) {
  return ReactClass.create(object);
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

    if (false) {
      ///
    } else if (typeof firstArgument === 'string') {
      var tagName = firstArgument,
          ///
      virtualDOMElement = isSVGTagName(tagName) ? new VirtualDOMSVGElement(tagName, props) : new VirtualDOMHTMLElement(tagName, props);

      element = virtualDOMElement; ///
    } else if (firstArgument instanceof ReactClass) {
      var reactClass = firstArgument,
          ///
      reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement; ///

      var mixins = reactClass.mixins;


      assignMixins(mixins, element);
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement; ///

      assignReactComponentMixins(_ReactComponent, element);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement; ///
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
  childArguments = flatten(childArguments); ///

  var children = childArguments.map(function (childArgument) {
    var child = void 0;

    if (isSubclassOf(childArgument.constructor, Element)) {
      ///
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

function assignReactComponentMixins(reactComponent, element) {
  var _reactComponent = reactComponent,
      mixins = _reactComponent.mixins;


  reactComponent = Object.getPrototypeOf(reactComponent); ///

  if (reactComponent !== ReactComponent) {
    assignReactComponentMixins(reactComponent, element);
  }

  assignMixins(mixins, element);
}

function assignMixins(mixins, element) {
  if (mixins) {
    mixins.forEach(function (mixin) {
      var name = mixin.name;


      element[name] = mixin.bind(element);
    });
  }
}

function isSubclassOf(argument, Class) {
  var subclass = false;

  if (argument.name === Class.name) {
    ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}

},{"./element":39,"./element/react/class":41,"./element/react/component":42,"./element/react/function":43,"./element/virtualDOMNode/element/html":46,"./element/virtualDOMNode/element/svg":47,"./element/virtualDOMNode/textElement":48,"./reactClass":52,"./reactComponent":53,"./utilities/array":55,"./utilities/name":56}],52:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
    _classCallCheck(this, ReactClass);

    this.render = render;

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

    this.mixins = mixins;
  }

  _createClass(ReactClass, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'create',
    value: function create(object) {
      var render = object.render,
          getInitialState = object.getInitialState,
          getChildContext = object.getChildContext,
          componentDidMount = object.componentDidMount,
          componentWillUnmount = object.componentWillUnmount,
          mixins = object.mixins;


      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
      return context;
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

},{}],54:[function(require,module,exports){
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
          reference = null,
          context = {};

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element/virtualDOMNode":44}],55:[function(require,module,exports){
'use strict';

function first(array) {
  return array[0];
}

function flatten(array) {
  return array.reduce(function (array, element) {
    array = array.concat(element); ///

    return array;
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

function remaining(element, array) {
  if (element === null) {
    return array;
  }

  var index = indexOf(element, array);

  return array.slice(index + 1);
}

module.exports = {
  first: first,
  flatten: flatten,
  guarantee: guarantee,
  remaining: remaining
};

function indexOf(element, array) {
  var index = null;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    }
  });

  return index;
}

},{}],56:[function(require,module,exports){
'use strict';

function isSVGTagName(tagName) {
	return svgTagNames.includes(tagName);
}

function isSVGAttributeName(tagName) {
	return svgAttributeNames.includes(tagName);
}

function isHTMLAttributeName(tagName) {
	return htmlAttributeNames.includes(tagName);
}

module.exports = {
	isSVGTagName: isSVGTagName,
	isSVGAttributeName: isSVGAttributeName,
	isHTMLAttributeName: isHTMLAttributeName
};

var svgTagNames = ['altGlyph', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'animation', 'audio', 'canvas', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'discard', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'handler', 'hatch', 'hatchpath', 'hkern', 'iframe', 'image', 'line', 'linearGradient', 'listener', 'marker', 'mask', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'prefetch', 'radialGradient', 'rect', 'script', 'set', 'solidcolor', 'stop', 'style', 'svg', 'switch', 'symbol', 'tbreak', 'text', 'textArea', 'textPath', 'title', 'tref', 'tspan', 'unknown', 'use', 'video', 'view', 'vkern'],
    svgAttributeNames = ['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'alphabetic', 'amplitude', 'arabic-form', 'ascent', 'attributeName', 'attributeType', 'azimuth', 'bandwidth', 'baseFrequency', 'baseProfile', 'baseline-shift', 'bbox', 'begin', 'bias', 'by', 'calcMode', 'cap-height', 'clip', 'clip-path', 'clip-rule', 'clipPathUnits', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'contentScriptType', 'contentStyleType', 'crossorigin', 'cursor', 'cx', 'cy', 'd', 'defaultAction', 'descent', 'diffuseConstant', 'direction', 'display', 'divisor', 'dominant-baseline', 'download', 'dur', 'dx', 'dy', 'edgeMode', 'editable', 'elevation', 'enable-background', 'end', 'event', 'exponent', 'externalResourcesRequired', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterRes', 'filterUnits', 'flood-color', 'flood-opacity', 'focusHighlight', 'focusable', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'format', 'fr', 'from', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'glyphRef', 'gradientTransform', 'gradientUnits', 'handler', 'hanging', 'hatchContentUnits', 'hatchUnits', 'height', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'href', 'hreflang', 'ideographic', 'image-rendering', 'in', 'in2', 'initialVisibility', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kernelMatrix', 'kernelUnitLength', 'kerning', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'letter-spacing', 'lighting-color', 'limitingConeAngle', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerHeight', 'markerUnits', 'markerWidth', 'mask', 'maskContentUnits', 'maskUnits', 'mathematical', 'max', 'media', 'mediaCharacterEncoding', 'mediaContentEncodings', 'mediaSize', 'mediaTime', 'method', 'min', 'mode', 'name', 'nav-down', 'nav-down-left', 'nav-down-right', 'nav-left', 'nav-next', 'nav-prev', 'nav-right', 'nav-up', 'nav-up-left', 'nav-up-right', 'numOctaves', 'observer', 'offset', 'opacity', 'operator', 'order', 'orient', 'orientation', 'origin', 'overflow', 'overlay', 'overline-position', 'overline-thickness', 'panose-1', 'path', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'phase', 'pitch', 'playbackOrder', 'playbackorder', 'pointer-events', 'points', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'propagate', 'r', 'radius', 'refX', 'refY', 'rendering-intent', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'requiredFonts', 'requiredFormats', 'restart', 'result', 'rotate', 'rx', 'ry', 'scale', 'seed', 'shape-rendering', 'side', 'slope', 'snapshotTime', 'spacing', 'specularConstant', 'specularExponent', 'spreadMethod', 'startOffset', 'stdDeviation', 'stemh', 'stemv', 'stitchTiles', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'string', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'style', 'surfaceScale', 'syncBehavior', 'syncBehaviorDefault', 'syncMaster', 'syncTolerance', 'syncToleranceDefault', 'systemLanguage', 'tableValues', 'target', 'targetX', 'targetY', 'text-anchor', 'text-decoration', 'text-rendering', 'textLength', 'timelineBegin', 'timelinebegin', 'title', 'to', 'transform', 'transformBehavior', 'type', 'u1', 'u2', 'underline-position', 'underline-thickness', 'unicode', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'values', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'viewBox', 'viewTarget', 'visibility', 'width', 'widths', 'word-spacing', 'writing-mode', 'x', 'x-height', 'x1', 'x2', 'xChannelSelector', 'y', 'y1', 'y2', 'yChannelSelector', 'z', 'zoomAndPan'],
    htmlAttributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{}]},{},[3])(3)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvY29tYmluZVJ1bGVzLmpzIiwiZXM2L2NyZWF0ZURpc3BhdGNoZXIuanMiLCJlczYvZXhhbXBsZXMuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvaW5mZXJlbmNlQXBwL2NvbnN0YW50cy5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsImVzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvcnVsZS9hZGRUb2RvLmpzIiwiZXM2L2V4YW1wbGVzL2luZmVyZW5jZUFwcC9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwL3JlZHVjZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsImVzNi9leGFtcGxlcy9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCJlczYvZXhhbXBsZXMvcmVkdXhBcHAvcmVkdXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvZmlsZVN5c3RlbS5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvbGliL3V0aWxpdGllcy9ub2RlX21vZHVsZXMvbmVjZXNzYXJ5L2VzNi91dGlsaXRpZXMvbWlzY2VsbGFuZW91cy5qcyIsIm5vZGVfbW9kdWxlcy9uZWNlc3NhcnkvZXM2L3V0aWxpdGllcy9wYXRoLmpzIiwibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9lczYvdXRpbGl0aWVzL3RlbXBsYXRlLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC9yZWFjdC9jb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L2h0bWwuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmcuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L21peGlucy9yZWFjdEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L21peGlucy92aXJ0dWFsRE9NRWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvcmVhY3QuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q2xhc3MuanMiLCJub2RlX21vZHVsZXMvcmVhY3Rpb24vZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi9yZWFjdERPTS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9lczYvdXRpbGl0aWVzL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2VzNi91dGlsaXRpZXMvbmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQU0sZUFBZSxTQUFmLFlB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixRQUFRLG1CQUFSLENBQXZCOztJQUVRLEssR0FBVSxjLENBQVYsSzs7SUFFRixPO0FBQ0osbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEtBQUwsR0FBYSxLQUFiOztBQUVBLFNBQUssTUFB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Z0JSLFFBaEJRLEVBZ0JFLE9BaEJGLEVBZ0JXLE1BaEJYLEVBaUJwQixRQWpCb0IsRUFrQnBCLE9BbEJvQixFQW1CcEIsT0FuQm9CLEVBb0JwQixPQXBCb0IsRUFxQnBCLE1BckJvQixDQTVDeEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYmluZVJ1bGVzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcblx0bGV0IGxpc3RlbmVycyA9IFtdO1xuXG5cdGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuXHRcdGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuXHRcdGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0Y29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG5cdFx0XHRpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG5cdFx0XHRcdGxpc3RlbmVyKHVwZGF0ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcblx0XHRPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG5cdFx0XHRydWxlTmFtZXNcblx0XHR9KTtcblxuXHRcdGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuXHRcdHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcblx0fTtcblxuXHRjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG5cdFx0bGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuXHR9O1xuXG5cdHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURpc3BhdGNoZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWR1eEFwcDogcmVxdWlyZSgnLi9leGFtcGxlcy9yZWR1eEFwcCcpLFxuICBpbmZlcmVuY2VBcHA6IHJlcXVpcmUoJy4vZXhhbXBsZXMvaW5mZXJlbmNlQXBwJylcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBUb2RvQXBwID0gcmVxdWlyZSgnLi9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAnKTtcblxuY29uc3QgeyBSZWFjdCwgUmVhY3RET00gfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBpbmZlcmVuY2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8VG9kb0FwcCAvPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluZmVyZW5jZUFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgQUREX1RPRE8gfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5sZXQgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkZFRvZG87XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gcmVxdWlyZSgnLi9maWx0ZXJMaW5rJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJyksXG4gICAgICBBZGRUb2RvID0gcmVxdWlyZSgnLi9hZGRUb2RvJyksXG4gICAgICBUb2RvTGlzdCA9IHJlcXVpcmUoJy4vdG9kb0xpc3QnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKTtcblxuY29uc3QgeyBTSE9XX0FMTCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9BcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh1cGRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgeyBzZXRWaXNpYmlsaXR5RmlsdGVyIH0gPSB1cGRhdGU7XG5cbiAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7dmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgICAgdGhpcy5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7aW5pdGlhbFZpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9BcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlID0ge30pIHtcbiAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZTtcblxuICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIHRoaXMuYWRkQ2hpbGQoXG5cbiAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fSAvPlxuXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgPC91bD5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gJyc7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVDbGFzcygnY29tcGxldGVkJyk7XG4gICAgICAgICAgfX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBBRERfVE9ETyA9ICdBRERfVE9ETycsXG5cdFx0XHRTRVRfVklTSUJJTElUWV9GSUxURVIgPSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcblx0XHRcdFNIT1dfQUxMID0gJ3Nob3dBbGwnLFxuXHRcdFx0U0hPV19BQ1RJVkUgPSAnc2hvd0FjdGl2ZScsXG5cdFx0XHRTSE9XX0NPTVBMRVRFRCA9ICdzaG93Q29tcGxldGVkJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFERF9UT0RPLFxuXHRTRVRfVklTSUJJTElUWV9GSUxURVIsXG5cdFNIT1dfQUxMLFxuXHRTSE9XX0FDVElWRSxcblx0U0hPV19DT01QTEVURURcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZURpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi8uLi9jcmVhdGVEaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSByZXF1aXJlKCcuL3J1bGUnKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIocnVsZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGlzcGF0Y2hlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29tYmluZVJ1bGVzID0gcmVxdWlyZSgnLi4vLi4vY29tYmluZVJ1bGVzJyk7XG5cbmNvbnN0IGFkZFRvZG8gPSByZXF1aXJlKCcuL3J1bGUvYWRkVG9kbycpLFxuICAgICAgc2V0VmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBydWxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBBRERfVE9ETyB9ID0gY29uc3RhbnRzO1xuXG5jb25zdCBhZGRUb2RvID0gKGFjdGlvbiA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cztcblxuY29uc3Qgc2V0VmlzaWJpbGl0eUZpbHRlciA9IChhY3Rpb24gPSB7fSkgPT4ge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFZpc2liaWxpdHlGaWx0ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHV4JyksXG4gICAgICByZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9yZWR1Y2VyJyksXG4gICAgICBUb2RvQXBwID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcCcpLFxuICAgICAgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlcicpO1xuXG5jb25zdCB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eCxcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb2RvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSByZXF1aXJlKCcuL2ZpbHRlckxpbmsnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcblxuICAgIDxwPlxuICAgICAgeydTaG93OiAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgICAgeycgLSAnfVxuICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICAgIDwvcD5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJyksXG4gICAgICBBZGRUb2RvID0gcmVxdWlyZSgnLi9hZGRUb2RvJyksXG4gICAgICBUb2RvTGlzdCA9IHJlcXVpcmUoJy4vdG9kb0xpc3QnKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9BcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9XG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEFERF9UT0RPID0nQUREX1RPRE8nLFxuXHRcdFx0VE9HR0xFX1RPRE8gPSdUT0dHTEVfVE9ETycsXG5cdFx0XHRTRVRfVklTSUJJTElUWV9GSUxURVIgPSdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuXHRcdFx0U0hPV19BTEwgPSdTSE9XX0FMTCcsXG5cdFx0XHRTSE9XX0FDVElWRSA9J1NIT1dfQUNUSVZFJyxcblx0XHRcdFNIT1dfQ09NUExFVEVEID0nU0hPV19DT01QTEVURUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0QUREX1RPRE8sXG5cdFRPR0dMRV9UT0RPLFxuXHRTRVRfVklTSUJJTElUWV9GSUxURVIsXG5cdFNIT1dfQUxMLFxuXHRTSE9XX0FDVElWRSxcblx0U0hPV19DT01QTEVURURcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpO1xuXG5jb25zdCB0b2RvcyA9IHJlcXVpcmUoJy4vcmVkdWNlci90b2RvcycpLFxuICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IHJlcXVpcmUoJy4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyJyk7XG5cbmNvbnN0IHsgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBBRERfVE9ETywgVE9HR0xFX1RPRE8gfSA9IGNvbnN0YW50cztcblxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0b2RvcztcblxuY29uc3QgYWRkVG9kb1RvVG9kb3MgPSAodG9kb3MsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmNvbnN0IHRvZ2dsZVRvZG9zID0gKHRvZG9zLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIHRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICBsZXQgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgIHRvZG8uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvO1xuICB9KTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gPSBjb25zdGFudHM7XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pID0+IHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gdmlzaWJpbGl0eUZpbHRlcjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpYmlsaXR5RmlsdGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goKTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IHJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXg7XG4iLCIiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXRoVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvcGF0aCcpLFxuICBhcnJheVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2FycmF5JyksXG4gIHRlbXBsYXRlVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvdGVtcGxhdGUnKSxcbiAgZmlsZVN5c3RlbVV0aWxpdGllczogcmVxdWlyZSgnLi9saWIvdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKSxcbiAgYXN5bmNocm9ub3VzVXRpbGl0aWVzOiByZXF1aXJlKCcuL2xpYi91dGlsaXRpZXMvYXN5bmNocm9ub3VzJyksXG4gIG1pc2NlbGxhbmVvdXNVdGlsaXRpZXM6IHJlcXVpcmUoJy4vbGliL3V0aWxpdGllcy9taXNjZWxsYW5lb3VzJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkKGFycmF5KSB7IHJldHVybiBhcnJheVsyXTsgfVxuXG5mdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5mdW5jdGlvbiBmaWZ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDVdOyB9XG5cbmZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZnVuY3Rpb24gc2Vjb25kTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMl07IH1cblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSBhcnJheTIubGVuZ3RoLCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMDtcblxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgIGRlbGV0ZWRJdGVtc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShhcnJheTEsIGFyZ3MpO1xuXG4gIHJldHVybiBkZWxldGVkSXRlbXNBcnJheTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZmluZChhcnJheSwgdGVzdCkge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZShmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cblxuICBpZiAoZm91bmQpIHtcbiAgICBhcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlyc3Q6IGZpcnN0LFxuICBzZWNvbmQ6IHNlY29uZCxcbiAgdGhpcmQ6IHRoaXJkLFxuICBmb3VydGg6IGZvdXJ0aCxcbiAgZmlmdGg6IGZpZnRoLFxuICBmaWZ0aExhc3Q6IGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdDogZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0OiB0aGlyZExhc3QsXG4gIHNlY29uZExhc3Q6IHNlY29uZExhc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIHRhaWw6IHRhaWwsXG4gIHB1c2g6IHB1c2gsXG4gIHVuc2hpZnQ6IHVuc2hpZnQsXG4gIGNsZWFyOiBjbGVhcixcbiAgY29weTogY29weSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzcGxpY2U6IHNwbGljZSxcbiAgcmVwbGFjZTogcmVwbGFjZSxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGZpbmQ6IGZpbmQsXG4gIHBydW5lOiBwcnVuZSxcbiAgcGF0Y2g6IHBhdGNoLFxuICBhdWdtZW50OiBhdWdtZW50LFxuICBzZXBhcmF0ZTogc2VwYXJhdGUsXG4gIGZvcndhcmRzU29tZTogZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lOiBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0ZvckVhY2g6IGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaDogYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHdoaWxzdChjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcXVlbmNlKGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFja3NbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2sobmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBldmVudHVhbGx5KGNhbGxiYWNrcywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhbGxiYWNrcy5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2ssIGluZGV4KSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGVhdGVkbHkoY2FsbGJhY2ssIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgd2hpbHN0OiB3aGlsc3QsXHJcbiAgZm9yRWFjaDogZm9yRWFjaCxcclxuICBzZXF1ZW5jZTogc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseTogZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5OiByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaDogZm9yd2FyZHNGb3JFYWNoLFxyXG4gIGJhY2t3YXJkc0ZvckVhY2g6IGJhY2t3YXJkc0ZvckVhY2hcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmZ1bmN0aW9uIGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCkge1xuICByZXR1cm4gZnMuZXhpc3RzU3luYyhhYnNvbHV0ZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBmaWxlRXhpc3RzKGFic29sdXRlRmlsZVBhdGgpIHtcbiAgbGV0IGZpbGVFeGlzdHMgPSBmYWxzZTtcbiAgXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRmlsZVBhdGgsIC8vL1xuICAgICAgICBlbnRyeUV4aXN0cyA9IGVudHJ5RXhpc3RzKGFic29sdXRlUGF0aCk7XG4gIFxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeUZpbGUgPSBpc0VudHJ5RmlsZShhYnNvbHV0ZVBhdGgpO1xuICAgIFxuICAgIGlmIChlbnRyeUZpbGUpIHtcbiAgICAgIGZpbGVFeGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIGZpbGVFeGlzdHM7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnlGaWxlKGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgIGVudHJ5RGlyZWN0b3J5ID0gc3RhdC5pc0RpcmVjdG9yeSgpLFxuICAgICAgZW50cnlGaWxlID0gIWVudHJ5RGlyZWN0b3J5O1xuXG4gIHJldHVybiBlbnRyeUZpbGU7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdG9yeUV4aXN0cyhhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgbGV0IGRpcmVjdG9yeUV4aXN0cyA9IGZhbHNlO1xuXG4gIGNvbnN0IGFic29sdXRlUGF0aCA9IGFic29sdXRlRGlyZWN0b3J5UGF0aCwgLy8vXG4gICAgICAgIGVudHJ5RXhpc3RzID0gZW50cnlFeGlzdHMoYWJzb2x1dGVQYXRoKTtcblxuICBpZiAoZW50cnlFeGlzdHMpIHtcbiAgICBjb25zdCBlbnRyeURpcmVjdG9yeSA9IGlzRW50cnlEaXJlY3RvcnkoYWJzb2x1dGVQYXRoKTtcblxuICAgIGlmIChlbnRyeURpcmVjdG9yeSkge1xuICAgICAgZGlyZWN0b3J5RXhpc3RzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlyZWN0b3J5RXhpc3RzO1xufVxuXG5mdW5jdGlvbiBpc0VudHJ5RGlyZWN0b3J5KGFic29sdXRlUGF0aCkge1xuICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoYWJzb2x1dGVQYXRoKSxcbiAgICAgICAgZW50cnlEaXJlY3RvcnkgPSBzdGF0LmlzRGlyZWN0b3J5KCk7XG5cbiAgcmV0dXJuIGVudHJ5RGlyZWN0b3J5O1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yeUVtcHR5KGFic29sdXRlRGlyZWN0b3J5UGF0aCkge1xuICBjb25zdCBzdWJFbnRyeU5hbWVzID0gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpLFxuICAgICAgICBzdWJFbnRyeU5hbWVzTGVuZ3RoID0gc3ViRW50cnlOYW1lcy5sZW5ndGgsXG4gICAgICAgIGRpcmVjdG9yeUVtcHR5ID0gKHN1YkVudHJ5TmFtZXNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBkaXJlY3RvcnlFbXB0eTtcbn1cblxuZnVuY3Rpb24gcmVhZERpcmVjdG9yeShhYnNvbHV0ZURpcmVjdG9yeVBhdGgpIHtcbiAgY29uc3Qgc3ViRW50cnlOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKGFic29sdXRlRGlyZWN0b3J5UGF0aCk7XG5cbiAgcmV0dXJuIHN1YkVudHJ5TmFtZXM7XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlKGFic29sdXRlRmlsZVBhdGgsIGVuY29kaW5nID0gJ3V0ZjgnKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgZW5jb2Rpbmc6IGVuY29kaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmlsZShhYnNvbHV0ZUZpbGVQYXRoLCBjb250ZW50KSB7XG4gIGZzLndyaXRlRmlsZVN5bmMoYWJzb2x1dGVGaWxlUGF0aCwgY29udGVudCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeUV4aXN0czogZW50cnlFeGlzdHMsXG4gIGZpbGVFeGlzdHM6IGZpbGVFeGlzdHMsXG4gIGlzRW50cnlGaWxlOiBpc0VudHJ5RmlsZSxcbiAgZGlyZWN0b3J5RXhpc3RzOiBkaXJlY3RvcnlFeGlzdHMsXG4gIGlzRW50cnlEaXJlY3Rvcnk6IGlzRW50cnlEaXJlY3RvcnksXG4gIGlzRGlyZWN0b3J5RW1wdHk6IGlzRGlyZWN0b3J5RW1wdHksXG4gIHJlYWREaXJlY3Rvcnk6IHJlYWREaXJlY3RvcnksXG4gIHJlYWRGaWxlOiByZWFkRmlsZSxcbiAgd3JpdGVGaWxlOiB3cml0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEdFVF9NRVRIT0QgPSAnR0VUJyxcbiAgICAgIFBPU1RfTUVUSE9EID0gJ1BPU1QnLFxuICAgICAgRVRYX0NIQVJBQ1RFUiA9ICdcXHUwMDAzJztcblxuZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSB1bmRlZmluZWQ7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBwb3N0KGhvc3QsIHVyaSwganNvbiwgcGFyYW1ldGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtZXRlcnM7IC8vL1xuICAgIHBhcmFtZXRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IFBPU1RfTUVUSE9ELFxuICAgICAgICBib2R5ID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBvbkVUWChoYW5kbGVyKSB7XG4gIGNvbnN0IHsgc3RkaW4gfSA9IHByb2Nlc3MsXG4gICAgICAgIHsgc2V0UmF3TW9kZSB9ID0gc3RkaW47XG5cbiAgaWYgKHNldFJhd01vZGUpIHtcbiAgICBjb25zdCByYXdNb2RlID0gdHJ1ZSxcbiAgICAgICAgICBlbmNvZGluZyA9ICd1dGY4JztcblxuICAgIHN0ZGluLnNldFJhd01vZGUocmF3TW9kZSk7XG4gICAgc3RkaW4uc2V0RW5jb2RpbmcoZW5jb2RpbmcpO1xuXG4gICAgc3RkaW4ucmVzdW1lKCk7XG5cbiAgICBzdGRpbi5hZGRMaXN0ZW5lcignZGF0YScsIGRhdGFIYW5kbGVyKTtcblxuICAgIHJldHVybiBvZmZFeHQ7XG4gIH1cblxuICBmdW5jdGlvbiBvZmZFeHQoKSB7XG4gICAgc3RkaW4ucmVtb3ZlTGlzdGVuZXIoJ2RhdGEnLCBkYXRhSGFuZGxlcik7XG4gIH1cblxuICBmdW5jdGlvbiBkYXRhSGFuZGxlcihjaGFyYWN0ZXIpIHtcbiAgICBpZiAoY2hhcmFjdGVyID09PSBFVFhfQ0hBUkFDVEVSKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6IGdldCxcbiAgcG9zdDogcG9zdCxcbiAgb25FVFg6IG9uRVRYXG59O1xuXG5mdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2VUZXh0IH0gPSB4bWxIdHRwUmVxdWVzdDtcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGlmIChzdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSByZXNwb25zZVRleHQsIC8vL1xuICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICBjYWxsYmFjayhqc29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB4bWxIdHRwUmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcblxuICB4bWxIdHRwUmVxdWVzdC5zZW5kKGJvZHkpO1xufVxuXG5mdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSAnJykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9LyR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0vJHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoZnVuY3Rpb24ocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbWV0ZXJzW25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID8gJyYnIDogJyc7XG5cbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgJycpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXkgPSByZXF1aXJlKCcuL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9ID0gYXJyYXk7XG5cbmZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gcGF0aC5zZWFyY2goL15cXC57MSwyfVxcLy8pLFxuICAgICAgICBwYXRoUmVsYXRpdmVQYXRoID0gKHBvc2l0aW9uICE9PSAtMSk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSBpc1BhdGhSZWxhdGl2ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSAhcGF0aFJlbGF0aXZlUGF0aDsgLy8vXG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lKHBhdGgpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBwYXRoLnNlYXJjaCgvXlteXFwvXStcXC8/JC8pLFxuICAgICAgICBwYXRoVG9wbW9zdERpcmVjdG9yeU5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5mdW5jdGlvbiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwYXRoKSB7XG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTsgLy8vXG5cbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7dG9wbW9zdERpcmVjdG9yeU5hbWV9KD86XFxcXC8uKyk/JGApLFxuICAgICAgICBwb3NpdGlvbiA9IHBhdGguc2VhcmNoKHJlZ0V4cCksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5GaWxlUGF0aCA9IChwb3NpdGlvbiAhPT0gLTEpO1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZUNvbnRhaW5lZEluRmlsZVBhdGg7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVQYXRocyhkaXJlY3RvcnlQYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGFic29sdXRlUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMgPSBkaXJlY3RvcnlQYXRoLnNwbGl0KCcvJyksXG4gICAgICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KCcvJyk7XG5cbiAgbGV0IGZpcnN0UmVsYXRpdmVGaWxlUGF0aFN1YkVudHJ5TmFtZSA9IGZpcnN0KHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzKSxcbiAgICAgIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuJykge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gIGxhc3REaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lID0gbGFzdChkaXJlY3RvcnlQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgd2hpbGUgKChmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPT09ICcuLicpICYmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWVzLnNoaWZ0KCk7XG4gICAgZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlRmlsZVBhdGhTdWJFbnRyeU5hbWUgPSBmaXJzdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG4gICAgbGFzdERpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWUgPSBsYXN0KGRpcmVjdG9yeVBhdGhTdWJFbnRyeU5hbWVzKTtcbiAgfVxuXG4gIGlmIChsYXN0RGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgYWJzb2x1dGVGaWxlUGF0aFN1YkVudHJ5TmFtZXMgPSBbXS5jb25jYXQoZGlyZWN0b3J5UGF0aFN1YkVudHJ5TmFtZXMpLmNvbmNhdChyZWxhdGl2ZUZpbGVQYXRoU3ViRW50cnlOYW1lcyk7XG5cbiAgICBhYnNvbHV0ZVBhdGggPSBhYnNvbHV0ZUZpbGVQYXRoU3ViRW50cnlOYW1lcy5qb2luKCcvJyk7XG4gIH1cblxuICByZXR1cm4gYWJzb2x1dGVQYXRoO1xufVxuXG5mdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgxLCBwYXRoMikge1xuICBwYXRoMSA9IHBhdGgxLnJlcGxhY2UoL1xcLyQvLCAnJyk7ICAvLy9cblxuICBjb25zdCBjb21iaW5lZFBhdGggPSBgJHtwYXRoMX0vJHtwYXRoMn1gO1xuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLitcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGRpcmVjdG9yeVBhdGggPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGRpcmVjdG9yeVBhdGg7XG59XG5cbmZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZnVuY3Rpb24gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC8oXi4rKVxcL1teXFwvXStcXC8/JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWU7XG59XG5cbmZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzUGF0aFJlbGF0aXZlUGF0aDogaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGg6IGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNQYXRoVG9wbW9zdERpcmVjdG9yeU5hbWU6IGlzUGF0aFRvcG1vc3REaXJlY3RvcnlOYW1lLFxuICBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoOiBpc1RvcG1vc3REaXJlY3RvcnlOYW1lQ29udGFpbmVkSW5QYXRoLFxuICBjb21iaW5lUGF0aHM6IGNvbWJpbmVQYXRocyxcbiAgY29uY2F0ZW5hdGVQYXRoczogY29uY2F0ZW5hdGVQYXRocyxcbiAgYm90dG9tbW9zdE5hbWVGcm9tUGF0aDogYm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeVBhdGhGcm9tUGF0aCxcbiAgdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogdG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZUZyb21QYXRoOiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aDogcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxlU3lzdGVtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZpbGVTeXN0ZW0nKTtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZnVuY3Rpb24gcGFyc2VGaWxlKGZpbGVQYXRoLCBhcmdzKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZUNvbnRlbnQoY29udGVudCwgYXJncyk7XG5cbiAgcmV0dXJuIHBhcnNlZENvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQ29udGVudChjb250ZW50LCBhcmdzKSB7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyksXG4gICAgICAgIHBhcnNlZExpbmVzID0gcGFyc2VMaW5lcyhsaW5lcywgYXJncyksXG4gICAgICAgIHBhcnNlZENvbnRlbnQgPSBwYXJzZWRMaW5lcy5qb2luKCdcXG4nKTtcblxuICByZXR1cm4gcGFyc2VkQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpIHtcbiAgY29uc3QgcGFyc2VkTGluZSA9IGxpbmUucmVwbGFjZSgvXFwkXFx7KC4rPylcXH0vZywgZnVuY3Rpb24obWF0Y2gsIHRva2VuKSB7XG4gICAgY29uc3QgcGFyc2VkVG9rZW4gPSBwYXJzZVRva2VuKHRva2VuLCBhcmdzKTtcblxuICAgIHJldHVybiBwYXJzZWRUb2tlbjtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZExpbmU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYXJzZUZpbGU6IHBhcnNlRmlsZSxcbiAgcGFyc2VDb250ZW50OiBwYXJzZUNvbnRlbnQsXG4gIHBhcnNlTGluZTogcGFyc2VMaW5lXG59O1xuXG5mdW5jdGlvbiBwYXJzZUxpbmVzKGxpbmVzLCBhcmdzKSB7XG4gIGNvbnN0IHBhcnNlZExpbmVzID0gbGluZXMubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICBjb25zdCBwYXJzZWRMaW5lID0gcGFyc2VMaW5lKGxpbmUsIGFyZ3MpO1xuXG4gICAgcmV0dXJuIHBhcnNlZExpbmU7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWRMaW5lcztcbn1cblxuZnVuY3Rpb24gcGFyc2VUb2tlbih0b2tlbiwgYXJncykge1xuICBsZXQgcGFyc2VkVG9rZW4gPSAnJztcblxuICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICBwYXJzZWRUb2tlbiA9IGFyZ3NbdG9rZW5dO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFRva2VuO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpLFxuICBSZWFjdERPTTogcmVxdWlyZSgnLi9saWIvcmVhY3RET00nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZpcnN0Q2hpbGQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICByZWFjdEVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi9taXhpbnMvcmVhY3RFbGVtZW50Jyk7XG5cbmNvbnN0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoZnVuY3Rpb24ocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4uL3JlYWN0Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuLi9yZWFjdCcpO1xuXG5jbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcblxuXG5cblxuICB9XG4gXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBWaXJ0dWFsRE9NTm9kZShwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NTm9kZTtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpLFxuICAgICAgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cblxuXHRpc0hhbmRsZXJOYW1lKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG5cdH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIHZpcnR1YWxET01FbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbGl0aWVzL25hbWUnKSxcblx0XHRcdFZpcnR1YWxET01FbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jb25zdCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUgfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpcnR1YWxET01IVE1MRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcblx0Y29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcblx0XHRjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuXHRcdHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcblx0fVxuXG5cdGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3V0aWxpdGllcy9uYW1lJyksXG5cdFx0XHRWaXJ0dWFsRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIFZpcnR1YWxET01TVkdFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuXHRjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuXHRcdGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XG5cblx0XHRzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG5cdH1cblxuXHRpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuXHRcdHJldHVybiBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NU1ZHRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01UZXh0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzZXMoY2xhc3NOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7XG4gIHJldHVybiBudWxsOyAgLy8vXG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldFN0eWxlKG5hbWUsIHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIHNldFN0eWxlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgbmFtZSA9ICdjbGFzcyc7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgbmFtZSA9ICdmb3InO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgc2V0U3R5bGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcblx0XHRcdG5hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9uYW1lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG5cdFx0XHRSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NsYXNzJyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9mdW5jdGlvbicpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudCcpLFxuICAgICAgVmlydHVhbERPTVRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50JyksXG4gICAgICBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9odG1sJyksXG5cdFx0XHRWaXJ0dWFsRE9NU1ZHRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L3N2ZycpO1xuXG5jb25zdCB7IGZsYXR0ZW4gfSA9IGFycmF5VXRpbGl0aWVzLFxuXHRcdFx0eyBpc1NWR1RhZ05hbWUgfSA9IG5hbWVVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpLFxuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3IFZpcnR1YWxET01TVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuZXcgVmlydHVhbERPTUhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50IC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50RWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50RWxlbWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudCwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gZmxhdHRlbihjaGlsZEFyZ3VtZW50cyk7IC8vL1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIEVsZW1lbnQpKSB7IC8vL1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgcmVhY3RDb21wb25lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhY3RDb21wb25lbnQpOyAvLy9cblxuICBpZiAocmVhY3RDb21wb25lbnQgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcblxuXG5cblxuXG5cblxuXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG5cblxuXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZScpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihhcnJheSwgZWxlbWVudCkge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5mdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmlyc3QsXG4gIGZsYXR0ZW4sXG4gIGd1YXJhbnRlZSxcbiAgcmVtYWluaW5nXG59O1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZShmdW5jdGlvbihjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcblx0cmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5mdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUodGFnTmFtZSkge1xuXHRyZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUodGFnTmFtZSkge1xuXHRyZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNTVkdUYWdOYW1lLFxuXHRpc1NWR0F0dHJpYnV0ZU5hbWUsXG5cdGlzSFRNTEF0dHJpYnV0ZU5hbWVcbn07XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuXHRcdFx0XHQnYWx0R2x5cGgnLCAnYW5pbWF0ZScsICdhbmltYXRlQ29sb3InLCAnYW5pbWF0ZU1vdGlvbicsICdhbmltYXRlVHJhbnNmb3JtJywgJ2FuaW1hdGlvbicsICdhdWRpbycsXG5cdFx0XHRcdCdjYW52YXMnLCAnY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2NvbG9yLXByb2ZpbGUnLCAnY3Vyc29yJyxcblx0XHRcdFx0J2RlZnMnLCAnZGVzYycsICdkaXNjYXJkJyxcblx0XHRcdFx0J2VsbGlwc2UnLFxuXHRcdFx0XHQnZmVCbGVuZCcsICdmZUNvbG9yTWF0cml4JywgJ2ZlQ29tcG9uZW50VHJhbnNmZXInLCAnZmVDb21wb3NpdGUnLCAnZmVDb252b2x2ZU1hdHJpeCcsICdmZURpZmZ1c2VMaWdodGluZycsICdmZURpc3BsYWNlbWVudE1hcCcsICdmZURpc3RhbnRMaWdodCcsICdmZURyb3BTaGFkb3cnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJywgJ2ZpbHRlcicsICdmb250JywgJ2ZvbnQtZmFjZScsICdmb250LWZhY2UtZm9ybWF0JywgJ2ZvbnQtZmFjZS1uYW1lJywgJ2ZvbnQtZmFjZS11cmknLCAnZm9yZWlnbk9iamVjdCcsXG5cdFx0XHRcdCdnJywgJ2dseXBoJywgJ2dseXBoUmVmJyxcblx0XHRcdFx0J2hhbmRsZXInLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ2hrZXJuJyxcblx0XHRcdFx0J2lmcmFtZScsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50Jyxcblx0XHRcdFx0J2xpc3RlbmVyJyxcblx0XHRcdFx0J21hcmtlcicsICdtYXNrJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21ldGFkYXRhJywgJ21pc3NpbmctZ2x5cGgnLCAnbXBhdGgnLFxuXHRcdFx0XHQncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncHJlZmV0Y2gnLFxuXHRcdFx0XHQncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsXG5cdFx0XHRcdCdzY3JpcHQnLCAnc2V0JywgJ3NvbGlkY29sb3InLCAnc3RvcCcsICdzdHlsZScsICdzdmcnLCAnc3dpdGNoJywgJ3N5bWJvbCcsXG5cdFx0XHRcdCd0YnJlYWsnLCAndGV4dCcsICd0ZXh0QXJlYScsICd0ZXh0UGF0aCcsICd0aXRsZScsICd0cmVmJywgJ3RzcGFuJyxcblx0XHRcdFx0J3Vua25vd24nLCAndXNlJyxcblx0XHRcdFx0J3ZpZGVvJywgJ3ZpZXcnLCAndmtlcm4nXG5cdFx0XHRdLFxuXHRcdFx0c3ZnQXR0cmlidXRlTmFtZXMgPSBbXG5cdFx0XHRcdCdhY2NlbnQtaGVpZ2h0JywgJ2FjY3VtdWxhdGUnLCAnYWRkaXRpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FscGhhYmV0aWMnLCAnYW1wbGl0dWRlJywgJ2FyYWJpYy1mb3JtJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVOYW1lJywgJ2F0dHJpYnV0ZVR5cGUnLCAnYXppbXV0aCcsXG5cdFx0XHRcdCdiYW5kd2lkdGgnLCAnYmFzZUZyZXF1ZW5jeScsICdiYXNlUHJvZmlsZScsICdiYXNlbGluZS1zaGlmdCcsICdiYm94JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLFxuXHRcdFx0XHQnY2FsY01vZGUnLCAnY2FwLWhlaWdodCcsICdjbGlwJywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY2xpcFBhdGhVbml0cycsICdjb2xvcicsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdjb250ZW50U2NyaXB0VHlwZScsICdjb250ZW50U3R5bGVUeXBlJywgJ2Nyb3Nzb3JpZ2luJywgJ2N1cnNvcicsICdjeCcsICdjeScsXG5cdFx0XHRcdCdkJywgJ2RlZmF1bHRBY3Rpb24nLCAnZGVzY2VudCcsICdkaWZmdXNlQ29uc3RhbnQnLCAnZGlyZWN0aW9uJywgJ2Rpc3BsYXknLCAnZGl2aXNvcicsICdkb21pbmFudC1iYXNlbGluZScsICdkb3dubG9hZCcsICdkdXInLCAnZHgnLCAnZHknLFxuXHRcdFx0XHQnZWRnZU1vZGUnLCAnZWRpdGFibGUnLCAnZWxldmF0aW9uJywgJ2VuYWJsZS1iYWNrZ3JvdW5kJywgJ2VuZCcsICdldmVudCcsICdleHBvbmVudCcsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJyxcblx0XHRcdFx0J2ZpbGwnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmaWx0ZXInLCAnZmlsdGVyUmVzJywgJ2ZpbHRlclVuaXRzJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9jdXNIaWdobGlnaHQnLCAnZm9jdXNhYmxlJywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdmb3JtYXQnLCAnZnInLCAnZnJvbScsICdmeCcsICdmeScsXG5cdFx0XHRcdCdnMScsICdnMicsICdnbHlwaC1uYW1lJywgJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLCAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLCAnZ2x5cGhSZWYnLCAnZ3JhZGllbnRUcmFuc2Zvcm0nLCAnZ3JhZGllbnRVbml0cycsXG5cdFx0XHRcdCdoYW5kbGVyJywgJ2hhbmdpbmcnLCAnaGF0Y2hDb250ZW50VW5pdHMnLCAnaGF0Y2hVbml0cycsICdoZWlnaHQnLCAnaG9yaXotYWR2LXgnLCAnaG9yaXotb3JpZ2luLXgnLCAnaG9yaXotb3JpZ2luLXknLCAnaHJlZicsICdocmVmbGFuZycsXG5cdFx0XHRcdCdpZGVvZ3JhcGhpYycsICdpbWFnZS1yZW5kZXJpbmcnLCAnaW4nLCAnaW4yJywgJ2luaXRpYWxWaXNpYmlsaXR5JywgJ2ludGVyY2VwdCcsXG5cdFx0XHRcdCdrJywgJ2sxJywgJ2syJywgJ2szJywgJ2s0JywgJ2tlcm5lbE1hdHJpeCcsICdrZXJuZWxVbml0TGVuZ3RoJywgJ2tlcm5pbmcnLCAna2V5UG9pbnRzJywgJ2tleVNwbGluZXMnLCAna2V5VGltZXMnLFxuXHRcdFx0XHQnbGVuZ3RoQWRqdXN0JywgJ2xldHRlci1zcGFjaW5nJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ2xpbWl0aW5nQ29uZUFuZ2xlJywgJ2xvY2FsJyxcblx0XHRcdFx0J21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnbWFya2VySGVpZ2h0JywgJ21hcmtlclVuaXRzJywgJ21hcmtlcldpZHRoJywgJ21hc2snLCAnbWFza0NvbnRlbnRVbml0cycsICdtYXNrVW5pdHMnLCAnbWF0aGVtYXRpY2FsJywgJ21heCcsICdtZWRpYScsICdtZWRpYUNoYXJhY3RlckVuY29kaW5nJywgJ21lZGlhQ29udGVudEVuY29kaW5ncycsICdtZWRpYVNpemUnLCAnbWVkaWFUaW1lJywgJ21ldGhvZCcsICdtaW4nLCAnbW9kZScsXG5cdFx0XHRcdCduYW1lJywgJ25hdi1kb3duJywgJ25hdi1kb3duLWxlZnQnLCAnbmF2LWRvd24tcmlnaHQnLCAnbmF2LWxlZnQnLCAnbmF2LW5leHQnLCAnbmF2LXByZXYnLCAnbmF2LXJpZ2h0JywgJ25hdi11cCcsICduYXYtdXAtbGVmdCcsICduYXYtdXAtcmlnaHQnLCAnbnVtT2N0YXZlcycsXG5cdFx0XHRcdCdvYnNlcnZlcicsICdvZmZzZXQnLCAnb3BhY2l0eScsICdvcGVyYXRvcicsICdvcmRlcicsICdvcmllbnQnLCAnb3JpZW50YXRpb24nLCAnb3JpZ2luJywgJ292ZXJmbG93JywgJ292ZXJsYXknLCAnb3ZlcmxpbmUtcG9zaXRpb24nLCAnb3ZlcmxpbmUtdGhpY2tuZXNzJyxcblx0XHRcdFx0J3Bhbm9zZS0xJywgJ3BhdGgnLCAncGF0aExlbmd0aCcsICdwYXR0ZXJuQ29udGVudFVuaXRzJywgJ3BhdHRlcm5UcmFuc2Zvcm0nLCAncGF0dGVyblVuaXRzJywgJ3BoYXNlJywgJ3BpdGNoJywgJ3BsYXliYWNrT3JkZXInLCAncGxheWJhY2tvcmRlcicsICdwb2ludGVyLWV2ZW50cycsICdwb2ludHMnLCAncG9pbnRzQXRYJywgJ3BvaW50c0F0WScsICdwb2ludHNBdFonLCAncHJlc2VydmVBbHBoYScsICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3ByaW1pdGl2ZVVuaXRzJywgJ3Byb3BhZ2F0ZScsXG5cdFx0XHRcdCdyJywgJ3JhZGl1cycsICdyZWZYJywgJ3JlZlknLCAncmVuZGVyaW5nLWludGVudCcsICdyZXBlYXRDb3VudCcsICdyZXBlYXREdXInLCAncmVxdWlyZWRFeHRlbnNpb25zJywgJ3JlcXVpcmVkRmVhdHVyZXMnLCAncmVxdWlyZWRGb250cycsICdyZXF1aXJlZEZvcm1hdHMnLCAncmVzdGFydCcsICdyZXN1bHQnLCAncm90YXRlJywgJ3J4JywgJ3J5Jyxcblx0XHRcdFx0J3NjYWxlJywgJ3NlZWQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3NpZGUnLCAnc2xvcGUnLCAnc25hcHNob3RUaW1lJywgJ3NwYWNpbmcnLCAnc3BlY3VsYXJDb25zdGFudCcsICdzcGVjdWxhckV4cG9uZW50JywgJ3NwcmVhZE1ldGhvZCcsICdzdGFydE9mZnNldCcsICdzdGREZXZpYXRpb24nLCAnc3RlbWgnLCAnc3RlbXYnLCAnc3RpdGNoVGlsZXMnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsICdzdHJpbmcnLCAnc3Ryb2tlJywgJ3N0cm9rZS1kYXNoYXJyYXknLCAnc3Ryb2tlLWRhc2hvZmZzZXQnLCAnc3Ryb2tlLWxpbmVjYXAnLCAnc3Ryb2tlLWxpbmVqb2luJywgJ3N0cm9rZS1taXRlcmxpbWl0JywgJ3N0cm9rZS1vcGFjaXR5JywgJ3N0cm9rZS13aWR0aCcsICdzdHlsZScsICdzdXJmYWNlU2NhbGUnLCAnc3luY0JlaGF2aW9yJywgJ3N5bmNCZWhhdmlvckRlZmF1bHQnLCAnc3luY01hc3RlcicsICdzeW5jVG9sZXJhbmNlJywgJ3N5bmNUb2xlcmFuY2VEZWZhdWx0JywgJ3N5c3RlbUxhbmd1YWdlJyxcblx0XHRcdFx0J3RhYmxlVmFsdWVzJywgJ3RhcmdldCcsICd0YXJnZXRYJywgJ3RhcmdldFknLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRMZW5ndGgnLCAndGltZWxpbmVCZWdpbicsICd0aW1lbGluZWJlZ2luJywgJ3RpdGxlJywgJ3RvJywgJ3RyYW5zZm9ybScsICd0cmFuc2Zvcm1CZWhhdmlvcicsICd0eXBlJyxcblx0XHRcdFx0J3UxJywgJ3UyJywgJ3VuZGVybGluZS1wb3NpdGlvbicsICd1bmRlcmxpbmUtdGhpY2tuZXNzJywgJ3VuaWNvZGUnLCAndW5pY29kZS1iaWRpJywgJ3VuaWNvZGUtcmFuZ2UnLCAndW5pdHMtcGVyLWVtJyxcblx0XHRcdFx0J3YtYWxwaGFiZXRpYycsICd2LWhhbmdpbmcnLCAndi1pZGVvZ3JhcGhpYycsICd2LW1hdGhlbWF0aWNhbCcsICd2YWx1ZXMnLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd2aWV3Qm94JywgJ3ZpZXdUYXJnZXQnLCAndmlzaWJpbGl0eScsXG5cdFx0XHRcdCd3aWR0aCcsICd3aWR0aHMnLCAnd29yZC1zcGFjaW5nJywgJ3dyaXRpbmctbW9kZScsXG5cdFx0XHRcdCd4JywgJ3gtaGVpZ2h0JywgJ3gxJywgJ3gyJywgJ3hDaGFubmVsU2VsZWN0b3InLFxuXHRcdFx0XHQneScsICd5MScsICd5MicsICd5Q2hhbm5lbFNlbGVjdG9yJyxcblx0XHRcdFx0J3onLCAnem9vbUFuZFBhbidcblx0XHRcdF0sXG5cdFx0XHRodG1sQXR0cmlidXRlTmFtZXMgPSBbXG5cdFx0XHRcdCdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG5cdFx0XHRcdCdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcblx0XHRcdFx0J2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcblx0XHRcdFx0J2VuY1R5cGUnLFxuXHRcdFx0XHQnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG5cdFx0XHRcdCdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2Jyxcblx0XHRcdFx0J2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG5cdFx0XHRcdCdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcblx0XHRcdFx0J2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG5cdFx0XHRcdCdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcblx0XHRcdFx0J25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG5cdFx0XHRcdCdvcGVuJywgJ29wdGltdW0nLFxuXHRcdFx0XHQncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcblx0XHRcdFx0J3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcblx0XHRcdFx0J3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG5cdFx0XHRcdCd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG5cdFx0XHRcdCd1c2VNYXAnLFxuXHRcdFx0XHQndmFsdWUnLFxuXHRcdFx0XHQnd2lkdGgnLFxuXHRcdFx0XHQnd21vZGUnLFxuXHRcdFx0XHQnd3JhcCdcblx0XHRcdF07XG4iXX0=

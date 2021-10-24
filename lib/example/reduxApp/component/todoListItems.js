"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _todoListItem = _interopRequireDefault(require("./todoListItem"));
var _constants = require("../constants");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Component1 = _reaction.React.Component;
var TodoListItems = /*#__PURE__*/ function(Component) {
    _inherits(TodoListItems, Component);
    function TodoListItems() {
        _classCallCheck(this, TodoListItems);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems).apply(this, arguments));
    }
    _createClass(TodoListItems, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var _context = this.context, store = _context.store;
                this.unsubscribe = store.subscribe(function() {
                    return _this.forceUpdate();
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unsubscribe();
            }
        },
        {
            key: "render",
            value: function render() {
                var _context = this.context, store = _context.store, state = store.getState(), todos = state.todos, visibilityFilter = state.visibilityFilter, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map(function(visibleTodo) {
                    var id = visibleTodo.id, text = visibleTodo.text, completed = visibleTodo.completed;
                    return(/*#__PURE__*/ _reaction.React.createElement(_todoListItem.default, {
                        text: text,
                        completed: completed,
                        clickHandler: function() {
                            var type = _constants.TOGGLE_TODO, action = {
                                type: type,
                                id: id
                            };
                            store.dispatch(action);
                        }
                    }));
                });
                return items;
            }
        }
    ]);
    return TodoListItems;
}(Component1);
exports.default = TodoListItems;
var getVisibleTodos = function(todos, visibilityFilter) {
    var visibleTodos;
    switch(visibilityFilter){
        case _constants.SHOW_ALL:
            visibleTodos = todos;
            break;
        case _constants.SHOW_ACTIVE:
            visibleTodos = todos.filter(function(todo) {
                var completed = todo.completed, active = !completed;
                return active;
            });
            break;
        case _constants.SHOW_COMPLETED:
            visibleTodos = todos.filter(function(todo) {
                var completed = todo.completed;
                return completed;
            });
            break;
    }
    return visibleTodos;
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJUb2RvTGlzdEl0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZXh0Iiwic3RvcmUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiZ2V0VmlzaWJsZVRvZG9zIiwiaXRlbXMiLCJtYXAiLCJ2aXNpYmxlVG9kbyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImNsaWNrSGFuZGxlciIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFUCxHQUFnQixDQUFoQixhQUFnQjtBQUUwQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLEdBQUssQ0FBR0EsVUFBUyxHQU5LLFNBQVUsT0FNeEJBLFNBQVM7SUFFSUMsYUFBYSxpQkFBbkIsUUFBUTtjQUFGQSxhQUFhO2FBQWJBLGFBQWE7OEJBQWJBLGFBQWE7Z0VBQWJBLGFBQWE7O2lCQUFiQSxhQUFhOztZQUNoQ0MsR0FBaUIsRUFBakJBLENB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
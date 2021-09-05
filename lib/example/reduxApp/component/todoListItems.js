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
var Component = _reaction.React.Component;
var TodoListItems = /*#__PURE__*/ function(Component1) {
    _inherits(TodoListItems, Component1);
    function TodoListItems() {
        _classCallCheck(this, TodoListItems);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems).apply(this, arguments));
    }
    _createClass(TodoListItems, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _context = this.context, store = _context.store;
                this.unsubscribe = store.subscribe((function() {
                    return this.forceUpdate();
                }).bind(this));
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
}(Component);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRVAsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFMEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRixHQUFLLENBQUcsU0FBUyxHQU5LLFNBQVUsT0FNeEIsU0FBUztJQUVJLGFBQWE7Y0FBYixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2hDLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFhLFFBQVksUUFBUCxPQUFPLEVBQXRCLEtBQUssR0FBSyxRQUFZLENBQXRCLEtBQUs7cUJBRVIsV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTO2dDQUFZLFdBQVc7O1lBQzNELENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CLEdBQUcsQ0FBQztxQkFDakIsV0FBVztZQUNsQixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQWEsUUFBWSxRQUFQLE9BQU8sRUFBdEIsS0FBSyxHQUFLLFFBQVksQ0FBdEIsS0FBSyxFQUNQLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxJQUNwQixLQUFLLEdBQXVCLEtBQUssQ0FBakMsS0FBSyxFQUFFLGdCQUFnQixHQUFLLEtBQUssQ0FBMUIsZ0JBQWdCLEVBQ3pCLFlBQVksR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLGdCQUFnQixHQUN0RCxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsVUFBRSxXQUFXLEVBQUssQ0FBQztvQkFDekMsR0FBSyxDQUFHLEVBQUUsR0FBc0IsV0FBVyxDQUFuQyxFQUFFLEVBQUUsSUFBSSxHQUFnQixXQUFXLENBQS9CLElBQUksRUFBRSxTQUFTLEdBQUssV0FBVyxDQUF6QixTQUFTO3lDQXpCakIsU0FBVSxxQkFFUCxhQUFnQjt3QkEyQmIsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFlBQVksYUFBUSxDQUFDOzRCQUVuQixHQUFLLENBQUMsSUFBSSxHQTdCMkIsVUFBYyxjQThCN0MsTUFBTTtnQ0FDSixJQUFJLEVBQUosSUFBSTtnQ0FDSixFQUFFLEVBQUYsRUFBRTs7NEJBR1YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNO3dCQUV2QixDQUFDOztnQkFJbkIsQ0FBQzt1QkFFQSxLQUFLO1lBQ2QsQ0FBQzs7O1dBeENrQixhQUFhO0VBQVMsU0FBUztrQkFBL0IsYUFBYTtBQTJDbEMsR0FBSyxDQUFDLGVBQWUsWUFBSSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUssQ0FBQztJQUNwRCxHQUFHLENBQUMsWUFBWTtXQUVSLGdCQUFnQjthQWxEeUMsVUFBYztZQW9EM0UsWUFBWSxHQUFHLEtBQUs7O2FBcER5QyxVQUFjO1lBd0QzRSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sVUFBRSxJQUFJLEVBQUssQ0FBQztnQkFDckMsR0FBSyxDQUFHLFNBQVMsR0FBSyxJQUFJLENBQWxCLFNBQVMsRUFDYixNQUFNLElBQUksU0FBUzt1QkFFaEIsTUFBTTtZQUNmLENBQUM7O2FBN0Q0RCxVQUFjO1lBaUUzRSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sVUFBRSxJQUFJLEVBQUssQ0FBQztnQkFDckMsR0FBSyxDQUFHLFNBQVMsR0FBSyxJQUFJLENBQWxCLFNBQVM7dUJBRVYsU0FBUztZQUNsQixDQUFDOzs7V0FJRSxZQUFZO0FBQ3JCLENBQUMifQ==
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVG9kb0xpc3RJdGVtIiwiU0hPV19BTEwiLCJTSE9XX0FDVElWRSIsIlNIT1dfQ09NUExFVEVEIiwiVE9HR0xFX1RPRE8iLCJDb21wb25lbnQiLCJUb2RvTGlzdEl0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiZ2V0VmlzaWJsZVRvZG9zIiwiaXRlbXMiLCJtYXAiLCJ2aXNpYmxlVG9kbyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsImNsaWNrSGFuZGxlciIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFUCxHQUFnQixDQUFoQixhQUFnQjtBQUUwQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLEdBQUssQ0FBRyxTQUFTLEdBTkssU0FBVSxPQU14QixTQUFTO0lBRUksYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFDaEMsR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFhLFFBQVksR0FBWixJQUFJLENBQUMsT0FBTyxFQUF0QixLQUFLLEdBQUssUUFBWSxDQUF0QixLQUFLO2dCQUViLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBQyxRQUFRO29CQUFGLE1BQU0sQ0FBTixJQUFJLENBQUMsV0FBVzs7WUFDM0QsQ0FBQzs7O1lBRUQsR0FBb0IsR0FBcEIsb0JBQW9CO21CQUFwQixRQUFRLENBQVIsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVc7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBYSxRQUFZLEdBQVosSUFBSSxDQUFDLE9BQU8sRUFBdEIsS0FBSyxHQUFLLFFBQVksQ0FBdEIsS0FBSyxFQUNQLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxJQUNwQixLQUFLLEdBQXVCLEtBQUssQ0FBakMsS0FBSyxFQUFFLGdCQUFnQixHQUFLLEtBQUssQ0FBMUIsZ0JBQWdCLEVBQ3pCLFlBQVksR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLGdCQUFnQixHQUN0RCxLQUFLLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQVAsV0FBVyxFQUFLLENBQUM7b0JBQ3pDLEdBQUssQ0FBRyxFQUFFLEdBQXNCLFdBQVcsQ0FBbkMsRUFBRSxFQUFFLElBQUksR0FBZ0IsV0FBVyxDQUEvQixJQUFJLEVBQUUsU0FBUyxHQUFLLFdBQVcsQ0FBekIsU0FBUztvQkFFM0IsTUFBTSxlQTNCSSxTQUFVLHFCQUVQLGFBQWdCO3dCQTJCYixJQUFJLEVBQUUsSUFBSTt3QkFDVixTQUFTLEVBQUUsU0FBUzt3QkFDcEIsWUFBWSxFQUFFLFFBQzFDLEdBRGdELENBQUM7NEJBRW5CLEdBQUssQ0FBQyxJQUFJLEdBN0IyQixVQUFjLGNBOEI3QyxNQUFNLEdBQUcsQ0FBQztnQ0FDUixJQUFJLEVBQUosSUFBSTtnQ0FDSixFQUFFLEVBQUYsRUFBRTs0QkFDSixDQUFDOzRCQUVQLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTt3QkFFdkIsQ0FBQzs7Z0JBSW5CLENBQUM7Z0JBRVAsTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDOzs7V0F4Q2tCLGFBQWE7RUFBUyxTQUFTO2tCQUEvQixhQUFhO0FBMkNsQyxHQUFLLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBUCxLQUFLLEVBQUUsZ0JBQWdCLEVBQUssQ0FBQztJQUNwRCxHQUFHLENBQUMsWUFBWTtJQUVoQixNQUFNLENBQUUsZ0JBQWdCO1FBQ3RCLElBQUksQ0FuRDJELFVBQWM7WUFvRDNFLFlBQVksR0FBRyxLQUFLO1lBQ3BCLEtBQUs7UUFFUCxJQUFJLENBdkQyRCxVQUFjO1lBd0QzRSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7Z0JBQ3JDLEdBQUssQ0FBRyxTQUFTLEdBQUssSUFBSSxDQUFsQixTQUFTLEVBQ2IsTUFBTSxJQUFJLFNBQVM7Z0JBRXZCLE1BQU0sQ0FBQyxNQUFNO1lBQ2YsQ0FBQztZQUNELEtBQUs7UUFFUCxJQUFJLENBaEUyRCxVQUFjO1lBaUUzRSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7Z0JBQ3JDLEdBQUssQ0FBRyxTQUFTLEdBQUssSUFBSSxDQUFsQixTQUFTO2dCQUVqQixNQUFNLENBQUMsU0FBUztZQUNsQixDQUFDO1lBQ0QsS0FBSzs7SUFHVCxNQUFNLENBQUMsWUFBWTtBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIl19
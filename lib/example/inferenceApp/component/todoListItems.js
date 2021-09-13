"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _dispatcher = _interopRequireDefault(require("../dispatcher"));
var _todoListItem = _interopRequireDefault(require("./todoListItem"));
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
                this.unsubscribe = _dispatcher.default.subscribe((function(update) {
                    return this.updateHandler(update);
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
            value: function render(update) {
                if (update) {
                    var children = this.getChildren();
                    var addTodo = update.addTodo, text = addTodo.text;
                    children = _toConsumableArray(children).concat([
                        /*#__PURE__*/ _reaction.React.createElement(_todoListItem.default, {
                            text: text
                        })
                    ]);
                    return children;
                }
                return [];
            }
        }
    ]);
    return TodoListItems;
}(Component);
_defineProperty(TodoListItems, "mixins", [
    updateHandler
]);
exports.default = TodoListItems;
function updateHandler(update) {
    if (update) {
        var addTodo = update.addTodo;
        if (addTodo) {
            this.forceUpdate(update);
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImRpc3BhdGNoZXIiLCJUb2RvTGlzdEl0ZW0iLCJDb21wb25lbnQiLCJUb2RvTGlzdEl0ZW1zIiwibWl4aW5zIiwidXBkYXRlSGFuZGxlciIsImNvbXBvbmVudERpZE1vdW50IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJhZGRUb2RvIiwidGV4dCIsImZvcmNlVXBkYXRlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRVQsR0FBZSxDQUFmLFdBQWU7QUFDYixHQUFnQixDQUFoQixhQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLEdBQUssQ0FBRyxTQUFTLEdBTEssU0FBVSxPQUt4QixTQUFTO0lBRUksYUFBYSxpQkFBbkIsUUFBUTtjQUFGLGFBQWE7YUFBYixhQUFhOzhCQUFiLGFBQWE7Z0VBQWIsYUFBYTs7aUJBQWIsYUFBYTs7WUFLaEMsR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsR0FYRyxXQUFlLFNBV0osU0FBUyxFQUFDLFFBQVEsQ0FBUCxNQUFNO29CQUFLLE1BQU0sQ0FBTixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU07O1lBQy9FLENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXO1lBQ2xCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUNYLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVc7b0JBRS9CLEdBQUssQ0FBRyxPQUFPLEdBQUssTUFBTSxDQUFsQixPQUFPLEVBQ1AsSUFBSSxHQUFLLE9BQU8sQ0FBaEIsSUFBSTtvQkFFWixRQUFRLHNCQUNILFFBQVEsU0FERixDQUFDO3NDQTNCSSxTQUFVLHFCQUdQLGFBQWdCOzRCQTJCakIsSUFBSSxFQUFFLElBQUk7O29CQUU1QixDQUFDO29CQUVELE1BQU0sQ0FBQyxRQUFRO2dCQUNqQixDQUFDO2dCQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDOzs7V0EvQmtCLGFBQWE7RUFBUyxTQUFTO2dCQUEvQixhQUFhLEdBQ3pCLE1BQU0sR0FBRyxDQUFDO0lBQ2YsYUFBYTtBQUNmLENBQUM7a0JBSGtCLGFBQWE7U0FrQ3pCLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDWCxHQUFLLENBQUcsT0FBTyxHQUFLLE1BQU0sQ0FBbEIsT0FBTztRQUVmLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUN6QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgdXBkYXRlSGFuZGxlclxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnVwZGF0ZUhhbmRsZXIodXBkYXRlKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZSxcbiAgICAgICAgICAgIHsgdGV4dCB9ID0gYWRkVG9kbztcblxuICAgICAgY2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLmNoaWxkcmVuLFxuXG4gICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fSAvPlxuXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gIGlmICh1cGRhdGUpIHtcbiAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZTtcblxuICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
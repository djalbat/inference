"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _dispatcher = _interopRequireDefault(require("../dispatcher"));
var _todoListItem = _interopRequireDefault(require("./todoListItem"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var Component = _reaction.React.Component;
var TodoListItems = /*#__PURE__*/ function(Component1) {
    _inherits(TodoListItems, Component1);
    var _super = _createSuper(TodoListItems);
    function TodoListItems() {
        _classCallCheck(this, TodoListItems);
        return _super.apply(this, arguments);
    }
    _createClass(TodoListItems, [
        {
            key: "updateHandler",
            value: function updateHandler(update) {
                if (update) {
                    var addTodo = update.addTodo;
                    if (addTodo) {
                        this.forceUpdate(update);
                    }
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this.unsubscribe = _dispatcher.default.subscribe(function(update) {
                    return _this.updateHandler(update);
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
exports.default = TodoListItems;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlRvZG9MaXN0SXRlbXMiLCJ1cGRhdGVIYW5kbGVyIiwidXBkYXRlIiwiYWRkVG9kbyIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInRleHQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFVCxHQUFlLENBQWYsV0FBZTtBQUNiLEdBQWdCLENBQWhCLGFBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxHQUFLLENBQUdBLFNBQVMsR0FMSyxTQUFVLE9BS3hCQSxTQUFTO0lBRUlDLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTs4QkFBYkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhOzs7aUJBQWJBLGFBQWE7O1lBQ2hDQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsRUFBRSxFQUFFQSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxHQUFLLENBQUdDLE9BQU8sR0FBS0QsTUFBTSxDQUFsQkMsT0FBTztvQkFFZixFQUFFLEVBQUVBLE9BQU8sRUFBRSxDQUFDO3dCQUNaLElBQUksQ0FBQ0MsV0FBVyxDQUFDRixNQUFNO29CQUN6QixDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDOzs7WUFFREcsR0FBaUIsRUFBakJBLENBQWlCO21CQUFqQkEsUUFBUSxDQUFSQSxpQkFBaUIsR0FBRyxDQUFDOztnQkFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBakJHLFdBQWUsU0FpQkpDLFNBQVMsQ0FBQyxRQUFRLENBQVBMLE1BQU07b0JBQUssTUFBTSxPQUFERCxhQUFhLENBQUNDLE1BQU07O1lBQy9FLENBQUM7OztZQUVETSxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0YsV0FBVztZQUNsQixDQUFDOzs7WUFFREcsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ1AsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsRUFBRSxFQUFFQSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxHQUFHLENBQUNRLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVc7b0JBRS9CLEdBQUssQ0FBR1IsT0FBTyxHQUFLRCxNQUFNLENBQWxCQyxPQUFPLEVBQ1BTLElBQUksR0FBS1QsT0FBTyxDQUFoQlMsSUFBSTtvQkFFWkYsUUFBUSxzQkFDSEEsUUFBUSxTQURGLENBQUM7c0NBakNJLFNBQVUscUJBR1AsYUFBZ0I7NEJBaUNqQkUsSUFBSSxFQUFFQSxJQUFJOztvQkFFNUIsQ0FBQztvQkFFRCxNQUFNLENBQUNGLFFBQVE7Z0JBQ2pCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7OztXQXJDa0JWLGFBQWE7RUFBU0QsU0FBUztrQkFBL0JDLGFBQWEifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _footer = _interopRequireDefault(require("./footer"));
var _addTodo = _interopRequireDefault(require("./addTodo"));
var _todoList = _interopRequireDefault(require("./todoList"));
var _dispatcher = _interopRequireDefault(require("../dispatcher"));
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
var TodoApp = function(Component) {
    _inherits(TodoApp, Component);
    function TodoApp() {
        _classCallCheck(this, TodoApp);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).apply(this, arguments));
    }
    _createClass(TodoApp, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.unsubscribe = _dispatcher.default.subscribe((function(update) {
                    return this.render(update);
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
                    var setVisibilityFilter = update.setVisibilityFilter;
                    if (setVisibilityFilter) {
                        var visibilityFilter = setVisibilityFilter.visibilityFilter, className = "".concat(visibilityFilter, " app");
                        this.setClass(className);
                    }
                } else {
                    var initialVisibilityFilter = _constants.SHOW_ALL, className = "".concat(initialVisibilityFilter, " app");
                    return _reaction.React.createElement("div", {
                        className: className
                    }, _reaction.React.createElement(_addTodo.default, null), _reaction.React.createElement(_todoList.default, null), _reaction.React.createElement(_footer.default, null));
                }
            }
        }
    ]);
    return TodoApp;
}(Component);
exports.default = TodoApp;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFNBQUE7SUFFQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBRUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsU0FBQSxHQVRBLFNBQUEsT0FTQSxTQUFBO0lBRUEsT0FBQSxZQUFBLFNBQUE7Y0FBQSxPQUFBLEVBQUEsU0FBQTthQUFBLE9BQUE7OEJBQUEsT0FBQTtnRUFBQSxPQUFBOztpQkFBQSxPQUFBOztBQUNBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQTtxQkFDQSxXQUFBLEdBUkEsV0FBQSxTQVFBLFNBQUEsV0FBQSxNQUFBO2dDQUFBLE1BQUEsQ0FBQSxNQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxvQkFBQTs0QkFBQSxvQkFBQTtxQkFDQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE1BQUE7NEJBQUEsTUFBQSxDQUFBLE1BQUE7b0JBQ0EsTUFBQTt3QkFDQSxtQkFBQSxHQUFBLE1BQUEsQ0FBQSxtQkFBQTt3QkFFQSxtQkFBQTs0QkFDQSxnQkFBQSxHQUFBLG1CQUFBLENBQUEsZ0JBQUEsRUFDQSxTQUFBLE1BQUEsTUFBQSxDQUFBLGdCQUFBLEdBQUEsSUFBQTs2QkFFQSxRQUFBLENBQUEsU0FBQTs7O3dCQUdBLHVCQUFBLEdBeEJBLFVBQUEsV0F5QkEsU0FBQSxNQUFBLE1BQUEsQ0FBQSx1QkFBQSxHQUFBLElBQUE7MkJBaENBLFNBQUEsc0JBb0NBLEdBQUE7QUFBQSxpQ0FBQSxFQUFBLFNBQUE7dUJBcENBLFNBQUEscUJBR0EsUUFBQSxpQkFIQSxTQUFBLHFCQUlBLFNBQUEsaUJBSkEsU0FBQSxxQkFFQSxPQUFBOzs7OztXQVNBLE9BQUE7RUFBQSxTQUFBO2tCQUFBLE9BQUEifQ==
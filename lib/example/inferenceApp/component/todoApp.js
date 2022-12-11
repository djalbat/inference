"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoApp;
    }
});
var _reaction = require("reaction");
var _footer = /*#__PURE__*/ _interopRequireDefault(require("./footer"));
var _addTodo = /*#__PURE__*/ _interopRequireDefault(require("./addTodo"));
var _todoList = /*#__PURE__*/ _interopRequireDefault(require("./todoList"));
var _dispatcher = /*#__PURE__*/ _interopRequireDefault(require("../dispatcher"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
var TodoApp = /*#__PURE__*/ function(Component) {
    _inherits(TodoApp, Component);
    var _super = _createSuper(TodoApp);
    function TodoApp() {
        _classCallCheck(this, TodoApp);
        return _super.apply(this, arguments);
    }
    _createClass(TodoApp, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                this.unsubscribe = _dispatcher.default.subscribe(function(update) {
                    return _this.render(update);
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
                    var setVisibilityFilter = update.setVisibilityFilter;
                    if (setVisibilityFilter) {
                        var visibilityFilter = setVisibilityFilter.visibilityFilter, className = "".concat(visibilityFilter, " app");
                        this.setClass(className);
                    }
                } else {
                    var initialVisibilityFilter = _constants.SHOW_ALL, className1 = "".concat(initialVisibilityFilter, " app");
                    return /*#__PURE__*/ _reaction.React.createElement("div", {
                        className: className1
                    }, /*#__PURE__*/ _reaction.React.createElement(_addTodo.default, null), /*#__PURE__*/ _reaction.React.createElement(_todoList.default, null), /*#__PURE__*/ _reaction.React.createElement(_footer.default, null));
                }
            }
        }
    ]);
    return TodoApp;
}(Component);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVG9kb0FwcCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiY29tcG9uZW50RGlkTW91bnQiLCJ1bnN1YnNjcmliZSIsImRpc3BhdGNoZXIiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInNldFZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiY2xhc3NOYW1lIiwic2V0Q2xhc3MiLCJpbml0aWFsVmlzaWJpbGl0eUZpbHRlciIsIlNIT1dfQUxMIiwiZGl2IiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiRm9vdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7Ozt3QkFYQzsyREFFSDs0REFDQzs2REFDQzsrREFDRTt5QkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNLEFBQUVDLFlBQWNDLGVBQUssQ0FBbkJEO0FBRU8sSUFBQSxBQUFNRCx3QkFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjs7Z0JBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxtQkFBVSxDQUFDQyxTQUFTLENBQUMsU0FBQ0M7MkJBQVcsTUFBS0MsTUFBTSxDQUFDRDs7WUFDbEU7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFJLENBQUNMLFdBQVc7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0QsTUFBTSxFQUFFO2dCQUNiLElBQUlBLFFBQVE7b0JBQ1YsSUFBTSxBQUFFRyxzQkFBd0JILE9BQXhCRztvQkFFUixJQUFJQSxxQkFBcUI7d0JBQ3ZCLElBQU0sQUFBRUMsbUJBQXFCRCxvQkFBckJDLGtCQUNGQyxZQUFZLEFBQUMsR0FBbUIsT0FBakJELGtCQUFpQjt3QkFFdEMsSUFBSSxDQUFDRSxRQUFRLENBQUNEO29CQUNoQixDQUFDO2dCQUNILE9BQU87b0JBQ0wsSUFBTUUsMEJBQTBCQyxtQkFBUSxFQUNsQ0gsYUFBWSxBQUFDLEdBQTBCLE9BQXhCRSx5QkFBd0I7b0JBRTdDLHFCQUVFLDhCQUFDRTt3QkFBSUosV0FBV0E7cUNBQ2QsOEJBQUNLLGdCQUFPLHVCQUNSLDhCQUFDQyxpQkFBUSx1QkFDVCw4QkFBQ0MsZUFBTTtnQkFJYixDQUFDO1lBQ0g7OztXQWpDbUJuQjtFQUFnQkMifQ==
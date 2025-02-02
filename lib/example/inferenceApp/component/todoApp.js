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
var _footer = /*#__PURE__*/ _interop_require_default(require("./footer"));
var _addTodo = /*#__PURE__*/ _interop_require_default(require("./addTodo"));
var _todoList = /*#__PURE__*/ _interop_require_default(require("./todoList"));
var _dispatcher = /*#__PURE__*/ _interop_require_default(require("../dispatcher"));
var _constants = require("../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Component = _reaction.React.Component;
var TodoApp = /*#__PURE__*/ function(Component) {
    _inherits(TodoApp, Component);
    function TodoApp() {
        _class_call_check(this, TodoApp);
        return _call_super(this, TodoApp, arguments);
    }
    _create_class(TodoApp, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvQXBwIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInVuc3Vic2NyaWJlIiwiZGlzcGF0Y2hlciIsInN1YnNjcmliZSIsInVwZGF0ZSIsInJlbmRlciIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic2V0VmlzaWJpbGl0eUZpbHRlciIsInZpc2liaWxpdHlGaWx0ZXIiLCJjbGFzc05hbWUiLCJzZXRDbGFzcyIsImluaXRpYWxWaXNpYmlsaXR5RmlsdGVyIiwiU0hPV19BTEwiLCJkaXYiLCJBZGRUb2RvIiwiVG9kb0xpc3QiLCJGb290ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O3dCQVhDOzZEQUVIOzhEQUNDOytEQUNDO2lFQUNFO3lCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsWUFBY0MsZUFBSyxDQUFuQkQ7QUFFTyxJQUFBLEFBQU1ELHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFJLENBQUNDLFdBQVcsR0FBR0MsbUJBQVUsQ0FBQ0MsU0FBUyxDQUFDLFNBQUNDOzJCQUFXLE1BQUtDLE1BQU0sQ0FBQ0Q7O1lBQ2xFOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksQ0FBQ0wsV0FBVztZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPRCxNQUFNO2dCQUNYLElBQUlBLFFBQVE7b0JBQ1YsSUFBTSxBQUFFRyxzQkFBd0JILE9BQXhCRztvQkFFUixJQUFJQSxxQkFBcUI7d0JBQ3ZCLElBQU0sQUFBRUMsbUJBQXFCRCxvQkFBckJDLGtCQUNGQyxZQUFZLEFBQUMsR0FBbUIsT0FBakJELGtCQUFpQjt3QkFFdEMsSUFBSSxDQUFDRSxRQUFRLENBQUNEO29CQUNoQjtnQkFDRixPQUFPO29CQUNMLElBQU1FLDBCQUEwQkMsbUJBQVEsRUFDbENILGFBQVksQUFBQyxHQUEwQixPQUF4QkUseUJBQXdCO29CQUU3QyxxQkFFRSw4QkFBQ0U7d0JBQUlKLFdBQVdBO3FDQUNkLDhCQUFDSyxnQkFBTyx1QkFDUiw4QkFBQ0MsaUJBQVEsdUJBQ1QsOEJBQUNDLGVBQU07Z0JBSWI7WUFDRjs7O1dBakNtQm5CO0VBQWdCQyJ9
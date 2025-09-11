"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoListItems;
    }
});
var _reaction = require("reaction");
var _dispatcher = /*#__PURE__*/ _interop_require_default(require("../dispatcher"));
var _todoListItem = /*#__PURE__*/ _interop_require_default(require("./todoListItem"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var TodoListItems = /*#__PURE__*/ function(Component) {
    _inherits(TodoListItems, Component);
    function TodoListItems() {
        _class_call_check(this, TodoListItems);
        return _call_super(this, TodoListItems, arguments);
    }
    _create_class(TodoListItems, [
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
                    children = _to_consumable_array(children).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvZG9MaXN0SXRlbXMiLCJDb21wb25lbnQiLCJSZWFjdCIsInVwZGF0ZUhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRUb2RvIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInVuc3Vic2NyaWJlIiwiZGlzcGF0Y2hlciIsInN1YnNjcmliZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInRleHQiLCJUb2RvTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3dCQVBDO2lFQUVDO21FQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNLEFBQUVDLFlBQWNDLGVBQUssQ0FBbkJEO0FBRU8sSUFBQSxBQUFNRCw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE1BQU07Z0JBQ2xCLElBQUlBLFFBQVE7b0JBQ1YsSUFBTSxBQUFFQyxVQUFZRCxPQUFaQztvQkFFUixJQUFJQSxTQUFTO3dCQUNYLElBQUksQ0FBQ0MsV0FBVyxDQUFDRjtvQkFDbkI7Z0JBQ0Y7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLG1CQUFVLENBQUNDLFNBQVMsQ0FBQyxTQUFDTjsyQkFBVyxNQUFLRCxhQUFhLENBQUNDOztZQUN6RTs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNILFdBQVc7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1IsTUFBTTtnQkFDWCxJQUFJQSxRQUFRO29CQUNWLElBQUlTLFdBQVcsSUFBSSxDQUFDQyxXQUFXO29CQUUvQixJQUFNLEFBQUVULFVBQVlELE9BQVpDLFNBQ0YsQUFBRVUsT0FBU1YsUUFBVFU7b0JBRVJGLFdBQVcsQUFDVCxxQkFBR0EsaUJBRE07c0NBR1AsOEJBQUNHLHFCQUFZOzRCQUFDRCxNQUFNQTs7cUJBRXZCO29CQUVELE9BQU9GO2dCQUNUO2dCQUVBLE9BQU8sRUFBRTtZQUNYOzs7V0FyQ21CYjtFQUFzQkMifQ==
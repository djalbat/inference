"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
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
var FilterLink = /*#__PURE__*/ function(Component1) {
    _inherits(FilterLink, Component1);
    var _super = _createSuper(FilterLink);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        return _super.apply(this, arguments);
    }
    _createClass(FilterLink, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var store = this.context.store;
                this.unsubscribe = store.subscribe(function() {
                    return _this.updateHandler();
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
                var store = this.context.store, state = store.getState(), visibilityFilter1 = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter1;
                if (active) {
                    return(/*#__PURE__*/ _reaction.React.createElement("span", null, children));
                }
                return(/*#__PURE__*/ _reaction.React.createElement("a", {
                    href: "#",
                    className: "filter",
                    onClick: function(event) {
                        event.preventDefault();
                        var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                            type: type,
                            visibilityFilter: visibilityFilter
                        };
                        store.dispatch(action);
                    }
                }, children));
            }
        }
    ]);
    return FilterLink;
}(Component);
_defineProperty(FilterLink, "mixins", [
    updateHandler
]);
exports.default = FilterLink;
function updateHandler() {
    this.forceUpdate();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgdXBkYXRlSGFuZGxlclxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIoKSB7XG4gIHRoaXMuZm9yY2VVcGRhdGUoKTtcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJGaWx0ZXJMaW5rIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVwZGF0ZUhhbmRsZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsInNwYW4iLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsImFjdGlvbiIsImRpc3BhdGNoIiwibWl4aW5zIiwiZm9yY2VVcGRhdGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFTSxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBR0EsU0FBUyxHQUpLLFNBQVUsT0FJeEJBLFNBQVM7SUFFSUMsVUFBVSxpQkFBaEIsUUFBUTtjQUFGQSxVQUFVOzhCQUFWQSxVQUFVO2FBQVZBLFVBQVU7OEJBQVZBLFVBQVU7OztpQkFBVkEsVUFBVTs7WUFLN0JDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQzs7Z0JBQ25CLEdBQUssQ0FBR0MsS0FBSyxHQUFLLElBQUksQ0FBQ0MsT0FBTyxDQUF0QkQsS0FBSztnQkFFYixJQUFJLENBQUNFLFdBQVcsR0FBR0YsS0FBSyxDQUFDRyxTQUFTLENBQUMsUUFBUTtvQkFBRixNQUFNLE9BQURDLGFBQWE7O1lBQzdELENBQUM7OztZQUVEQyxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0gsV0FBVztZQUNsQixDQUFDOzs7WUFFREksR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBR04sS0FBSyxHQUFLLElBQUksQ0FBQ0MsT0FBTyxDQUF0QkQsS0FBSyxFQUNQTyxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxJQUNwQkMsaUJBQWdCLEdBQUtGLEtBQUssQ0FBMUJFLGdCQUFnQixFQUNLLE1BQVUsR0FBVixJQUFJLENBQUNDLEtBQUssRUFBL0JDLFFBQVEsR0FBYSxNQUFVLENBQS9CQSxRQUFRLEVBQUVDLE1BQU0sR0FBSyxNQUFVLENBQXJCQSxNQUFNLEVBQ2xCQyxNQUFNLEdBQUlELE1BQU0sS0FBS0gsaUJBQWdCO2dCQUUzQyxFQUFFLEVBQUVJLE1BQU0sRUFBRSxDQUFDO29CQUNYLE1BQU0sZUE3QlUsU0FBVSxxQkErQnZCQyxDQUFJLGFBQUVILFFBQVE7Z0JBR25CLENBQUM7Z0JBRUQsTUFBTSxlQXBDWSxTQUFVLHFCQXNDekJJLENBQUM7b0JBQUNDLElBQUksRUFBQyxDQUFHO29CQUNSQyxTQUFTLEVBQUMsQ0FBUTtvQkFDbEJDLE9BQU8sRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO3dCQUVuQkEsS0FBSyxDQUFDQyxjQUFjO3dCQUVwQixHQUFLLENBQUNDLElBQUksR0ExQ2lCLFVBQWMsd0JBMkNuQ1osZ0JBQWdCLEdBQUdHLE1BQU0sRUFDekJVLE1BQU0sR0FBRyxDQUFDOzRCQUNSRCxJQUFJLEVBQUpBLElBQUk7NEJBQ0paLGdCQUFnQixFQUFoQkEsZ0JBQWdCO3dCQUNsQixDQUFDO3dCQUVQVCxLQUFLLENBQUN1QixRQUFRLENBQUNELE1BQU07b0JBRXZCLENBQUM7bUJBRURYLFFBQVE7WUFHZixDQUFDOzs7V0FwRGtCYixVQUFVO0VBQVNELFNBQVM7Z0JBQTVCQyxVQUFVLEVBQ3RCMEIsQ0FBTSxTQUFHLENBQUM7SUFDZnBCLGFBQWE7QUFDZixDQUFDO2tCQUhrQk4sVUFBVTtTQXVEdEJNLGFBQWEsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ3FCLFdBQVc7QUFDbEIsQ0FBQyJ9
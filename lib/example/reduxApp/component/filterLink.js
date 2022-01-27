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
exports.default = FilterLink;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkZpbHRlckxpbmsiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsInNwYW4iLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsImFjdGlvbiIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRU0sR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELEdBQUssQ0FBR0EsU0FBUyxHQUpLLFNBQVUsT0FJeEJBLFNBQVM7SUFFSUMsVUFBVSxpQkFBaEIsUUFBUTs7O2FBQUZBLFVBQVU7Ozs7OztZQUM3QkMsR0FBaUIsRUFBakJBLENBQWlCO21CQUFqQkEsUUFBUSxDQUFSQSxpQkFBaUIsR0FBRyxDQUFDOztnQkFDbkIsR0FBSyxDQUFHQyxLQUFLLEdBQUssSUFBSSxDQUFDQyxPQUFPLENBQXRCRCxLQUFLO2dCQUViLElBQUksQ0FBQ0UsV0FBVyxHQUFHRixLQUFLLENBQUNHLFNBQVMsQ0FBQyxRQUFRO29CQUFGLE1BQU0sT0FBREMsV0FBVzs7WUFDM0QsQ0FBQzs7O1lBRURDLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxDQUFDSCxXQUFXO1lBQ2xCLENBQUM7OztZQUVESSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFHTixLQUFLLEdBQUssSUFBSSxDQUFDQyxPQUFPLENBQXRCRCxLQUFLLEVBQ1BPLEtBQUssR0FBR1AsS0FBSyxDQUFDUSxRQUFRLElBQ3BCQyxpQkFBZ0IsR0FBS0YsS0FBSyxDQUExQkUsZ0JBQWdCLEVBQ0ssTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxFQUEvQkMsUUFBUSxHQUFhLE1BQVUsQ0FBL0JBLFFBQVEsRUFBRUMsTUFBTSxHQUFLLE1BQVUsQ0FBckJBLE1BQU0sRUFDbEJDLE1BQU0sR0FBSUQsTUFBTSxLQUFLSCxpQkFBZ0I7Z0JBRTNDLEVBQUUsRUFBRUksTUFBTSxFQUFFLENBQUM7b0JBQ1gsTUFBTSxlQXpCVSxTQUFVLHFCQTJCdkJDLENBQUksYUFBRUgsUUFBUTtnQkFHbkIsQ0FBQztnQkFFRCxNQUFNLGVBaENZLFNBQVUscUJBa0N6QkksQ0FBQztvQkFBQ0MsSUFBSSxFQUFDLENBQUc7b0JBQ1JDLFNBQVMsRUFBQyxDQUFRO29CQUNsQkMsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7d0JBRW5CQSxLQUFLLENBQUNDLGNBQWM7d0JBRXBCLEdBQUssQ0FBQ0MsSUFBSSxHQXRDaUIsVUFBYyx3QkF1Q25DWixnQkFBZ0IsR0FBR0csTUFBTSxFQUN6QlUsTUFBTSxHQUFHLENBQUM7NEJBQ1JELElBQUksRUFBSkEsSUFBSTs0QkFDSlosZ0JBQWdCLEVBQWhCQSxnQkFBZ0I7d0JBQ2xCLENBQUM7d0JBRVBULEtBQUssQ0FBQ3VCLFFBQVEsQ0FBQ0QsTUFBTTtvQkFFdkIsQ0FBQzttQkFFRFgsUUFBUTtZQUdmLENBQUM7Ozs7RUFoRHFDZCxTQUFTO2tCQUE1QkMsVUFBVSJ9
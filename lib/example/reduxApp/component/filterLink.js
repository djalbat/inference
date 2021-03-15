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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Component = _reaction.React.Component;
var FilterLink = function(Component) {
    _inherits(FilterLink, Component);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink).apply(this, arguments));
    }
    _createClass(FilterLink, [
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
                var _context = this.context, store = _context.store, state = store.getState(), visibilityFilter = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter;
                if (active) {
                    return _reaction.React.createElement("span", null, children);
                }
                return _reaction.React.createElement("a", {
                    href: "#",
                    className: "filter",
                    onClick: function(event) {
                        event.preventDefault();
                        var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter1 = filter, action = {
                            type: type,
                            visibilityFilter: visibilityFilter1
                        };
                        store.dispatch(action);
                    }
                }, children);
            }
        }
    ]);
    return FilterLink;
}(Component);
exports.default = FilterLink;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTtJQUVBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxTQUFBLEdBSkEsU0FBQSxPQUlBLFNBQUE7SUFFQSxVQUFBLFlBQUEsU0FBQTtjQUFBLFVBQUEsRUFBQSxTQUFBO2FBQUEsVUFBQTs4QkFBQSxVQUFBO2dFQUFBLFVBQUE7O2lCQUFBLFVBQUE7O0FBQ0EsZUFBQSxHQUFBLGlCQUFBOzRCQUFBLGlCQUFBO29CQUNBLFFBQUEsUUFBQSxPQUFBLEVBQUEsS0FBQSxHQUFBLFFBQUEsQ0FBQSxLQUFBO3FCQUVBLFdBQUEsR0FBQSxLQUFBLENBQUEsU0FBQTtnQ0FBQSxXQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxvQkFBQTs0QkFBQSxvQkFBQTtxQkFDQSxXQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE1BQUE7NEJBQUEsTUFBQTtvQkFDQSxRQUFBLFFBQUEsT0FBQSxFQUFBLEtBQUEsR0FBQSxRQUFBLENBQUEsS0FBQSxFQUNBLEtBQUEsR0FBQSxLQUFBLENBQUEsUUFBQSxJQUNBLGdCQUFBLEdBQUEsS0FBQSxDQUFBLGdCQUFBLEVBQ0EsTUFBQSxRQUFBLEtBQUEsRUFBQSxRQUFBLEdBQUEsTUFBQSxDQUFBLFFBQUEsRUFBQSxNQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsRUFDQSxNQUFBLEdBQUEsTUFBQSxLQUFBLGdCQUFBO29CQUVBLE1BQUE7MkJBeEJBLFNBQUEsc0JBMkJBLElBQUEsU0FBQSxRQUFBOzt1QkEzQkEsU0FBQSxzQkFrQ0EsQ0FBQTtBQUFBLHdCQUFBLEdBQUEsQ0FBQTtBQUNBLDZCQUFBLEdBQUEsTUFBQTtBQUNBLDJCQUFBLFdBQUEsS0FBQTtBQUVBLDZCQUFBLENBQUEsY0FBQTs0QkFFQSxJQUFBLEdBdENBLFVBQUEsd0JBdUNBLGlCQUFBLEdBQUEsTUFBQSxFQUNBLE1BQUE7QUFDQSxnQ0FBQSxFQUFBLElBQUE7QUFDQSw0Q0FBQSxFQUFBLGlCQUFBOztBQUdBLDZCQUFBLENBQUEsUUFBQSxDQUFBLE1BQUE7O21CQUlBLFFBQUE7Ozs7V0E3Q0EsVUFBQTtFQUFBLFNBQUE7a0JBQUEsVUFBQSJ9
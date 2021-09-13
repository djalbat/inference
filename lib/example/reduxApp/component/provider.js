"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
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
var Provider = /*#__PURE__*/ function(Component) {
    _inherits(Provider, Component);
    function Provider() {
        _classCallCheck(this, Provider);
        return _possibleConstructorReturn(this, _getPrototypeOf(Provider).apply(this, arguments));
    }
    _createClass(Provider, [
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                var _props = this.props, store = _props.store, childContext = {
                    store: store
                };
                return childContext;
            }
        },
        {
            key: "render",
            value: function render() {
                var _props = this.props, children = _props.children;
                return children;
            }
        }
    ]);
    return Provider;
}(Component);
exports.default = Provider;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3ZpZGVyIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY29udGV4dCIsInN0b3JlIiwicHJvcHMiLCJjaGlsZENvbnRleHQiLCJyZW5kZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFVLENBQVYsU0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUcsU0FBUyxHQUZLLFNBQVUsT0FFeEIsU0FBUztJQUVJLFFBQVEsaUJBQWQsUUFBUTtjQUFGLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7Z0VBQVIsUUFBUTs7aUJBQVIsUUFBUTs7WUFDM0IsR0FBZSxHQUFmLGVBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsR0FBSyxDQUFhLE1BQVUsR0FBVixJQUFJLENBQUMsS0FBSyxFQUFwQixLQUFLLEdBQUssTUFBVSxDQUFwQixLQUFLLEVBQ1AsWUFBWSxHQUFHLENBQUM7b0JBQ2QsS0FBSyxFQUFMLEtBQUs7Z0JBQ1AsQ0FBQztnQkFFUCxNQUFNLENBQUMsWUFBWTtZQUNyQixDQUFDOzs7WUFFRCxHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFnQixNQUFVLEdBQVYsSUFBSSxDQUFDLEtBQUssRUFBdkIsUUFBUSxHQUFLLE1BQVUsQ0FBdkIsUUFBUTtnQkFFaEIsTUFBTSxDQUFDLFFBQVE7WUFDakIsQ0FBQzs7O1dBZGtCLFFBQVE7RUFBUyxTQUFTO2tCQUExQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iXX0=
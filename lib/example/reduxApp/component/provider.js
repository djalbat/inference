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
var Component1 = _reaction.React.Component;
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
}(Component1);
exports.default = Provider;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm92aWRlciIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJwcm9wcyIsInN0b3JlIiwiY2hpbGRDb250ZXh0IiwicmVuZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFHQSxVQUFTLEdBRkssU0FBVSxPQUV4QkEsU0FBUztJQUVJQyxRQUFRLGlCQUFkLFFBQVE7Y0FBRkEsUUFBUTthQUFSQSxRQUFROzhCQUFSQSxRQUFRO2dFQUFSQSxRQUFROztpQkFBUkEsUUFBUTs7WUFDM0JDLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkEsUUFBUSxDQUFSQSxlQUFlLENBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixHQUFLLENBQWEsTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxFQUFwQkMsS0FBSyxHQUFLLE1BQVUsQ0FBcEJBLEtBQUssRUFDUEMsWUFBWSxHQUFHLENBQUM7b0JBQ2RELEtBQUssRUFBTEEsS0FBSztnQkFDUCxDQUFDO2dCQUVQLE1BQU0sQ0FBQ0MsWUFBWTtZQUNyQixDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBZ0IsTUFBVSxHQUFWLElBQUksQ0FBQ0gsS0FBSyxFQUF2QkksUUFBUSxHQUFLLE1BQVUsQ0FBdkJBLFFBQVE7Z0JBRWhCLE1BQU0sQ0FBQ0EsUUFBUTtZQUNqQixDQUFDOzs7V0Fka0JQLFFBQVE7RUFBU0QsVUFBUztrQkFBMUJDLFFBQVEifQ==
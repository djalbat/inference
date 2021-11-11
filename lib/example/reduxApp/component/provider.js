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
var Component1 = _reaction.React.Component;
var Provider = /*#__PURE__*/ function(Component) {
    _inherits(Provider, Component);
    var _super = _createSuper(Provider);
    function Provider() {
        _classCallCheck(this, Provider);
        return _super.apply(this, arguments);
    }
    _createClass(Provider, [
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                var store = this.props.store, childContext = {
                    store: store
                };
                return childContext;
            }
        },
        {
            key: "render",
            value: function render() {
                var children = this.props.children;
                return children;
            }
        }
    ]);
    return Provider;
}(Component1);
exports.default = Provider;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJQcm92aWRlciIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJzdG9yZSIsInByb3BzIiwiY2hpbGRDb250ZXh0IiwicmVuZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEdBQUssQ0FBR0EsVUFBUyxHQUZLLFNBQVUsT0FFeEJBLFNBQVM7SUFFSUMsUUFBUSxpQkFBZCxRQUFRO2NBQUZBLFFBQVE7OEJBQVJBLFFBQVE7YUFBUkEsUUFBUTs4QkFBUkEsUUFBUTs7O2lCQUFSQSxRQUFROztZQUMzQkMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBR0MsS0FBSyxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUFwQkQsS0FBSyxFQUNQRSxZQUFZLEdBQUcsQ0FBQztvQkFDZEYsS0FBSyxFQUFMQSxLQUFLO2dCQUNQLENBQUM7Z0JBRVAsTUFBTSxDQUFDRSxZQUFZO1lBQ3JCLENBQUM7OztZQUVEQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ1IsR0FBSyxDQUFHQyxRQUFRLEdBQUssSUFBSSxDQUFDSCxLQUFLLENBQXZCRyxRQUFRO2dCQUVoQixNQUFNLENBQUNBLFFBQVE7WUFDakIsQ0FBQzs7O1dBZGtCUCxRQUFRO0VBQVNELFVBQVM7a0JBQTFCQyxRQUFRIn0=
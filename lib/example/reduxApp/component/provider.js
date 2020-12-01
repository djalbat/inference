"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Component = _reaction.React.Component;

var Provider = /*#__PURE__*/function (_Component) {
  _inherits(Provider, _Component);

  var _super = _createSuper(Provider);

  function Provider() {
    _classCallCheck(this, Provider);

    return _super.apply(this, arguments);
  }

  _createClass(Provider, [{
    key: "getChildContext",
    value: function getChildContext(context) {
      var store = this.props.store,
          childContext = {
        store: store
      };
      return childContext;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return Provider;
}(Component);

exports["default"] = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiUHJvdmlkZXIiLCJjb250ZXh0Iiwic3RvcmUiLCJwcm9wcyIsImNoaWxkQ29udGV4dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFFYUUsUTs7Ozs7Ozs7Ozs7OztvQ0FDSEMsTyxFQUFTO0FBQ2pCLFVBQUVDLEtBQUYsR0FBWSxLQUFLQyxLQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUUsWUFEQSxHQUNlO0FBQ2JGLFFBQUFBLEtBQUssRUFBTEE7QUFEYSxPQURmO0FBS04sYUFBT0UsWUFBUDtBQUNEOzs7NkJBRVE7QUFBQSxVQUNDQyxRQURELEdBQ2MsS0FBS0YsS0FEbkIsQ0FDQ0UsUUFERDtBQUdQLGFBQU9BLFFBQVA7QUFDRDs7OztFQWRtQ1AsUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIl19
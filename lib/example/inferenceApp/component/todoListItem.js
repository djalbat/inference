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

var TodoListItem = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItem, _Component);

  var _super = _createSuper(TodoListItem);

  function TodoListItem() {
    _classCallCheck(this, TodoListItem);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var text = this.props.text,
          className = "";
      return _reaction.React.createElement("li", {
        className: className,
        onClick: function onClick() {
          _this.toggleClass("completed");
        }
      }, text);
    }
  }]);

  return TodoListItem;
}(Component);

exports["default"] = TodoListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlRvZG9MaXN0SXRlbSIsInRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFFYUUsWTs7Ozs7Ozs7Ozs7Ozs2QkFDVDtBQUFBOztBQUNGLFVBQUVDLElBQUYsR0FBVyxLQUFLQyxLQUFoQixDQUFFRCxJQUFGO0FBQUEsVUFDQUUsU0FEQSxHQUNZLEVBRFo7QUFHTixhQUVFO0FBQUksUUFBQSxTQUFTLEVBQUVBLFNBQWY7QUFDSSxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUViLFVBQUEsS0FBSSxDQUFDQyxXQUFMLENBQWlCLFdBQWpCO0FBRUQ7QUFMTCxTQU9HSCxJQVBILENBRkY7QUFZRDs7OztFQWpCdUNILFMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyhcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG4iXX0=
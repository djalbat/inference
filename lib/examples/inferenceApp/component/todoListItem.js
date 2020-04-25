"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var reaction = require("reaction");

var React = reaction.React,
    Component = React.Component;

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
      return /*#__PURE__*/React.createElement("li", {
        className: className,
        onClick: function onClick() {
          _this.toggleClass("completed");
        }
      }, text);
    }
  }]);

  return TodoListItem;
}(Component);

module.exports = TodoListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0SXRlbSIsInRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRvZ2dsZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixRQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ2dCRCxLQURoQixDQUNFQyxTQURGOztJQUdBQyxZOzs7Ozs7Ozs7Ozs7OzZCQUNNO0FBQUE7O0FBQ0YsVUFBRUMsSUFBRixHQUFXLEtBQUtDLEtBQWhCLENBQUVELElBQUY7QUFBQSxVQUNBRSxTQURBLEdBQ1ksRUFEWjtBQUdOLDBCQUVFO0FBQUksUUFBQSxTQUFTLEVBQUVBLFNBQWY7QUFDSSxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUViLFVBQUEsS0FBSSxDQUFDQyxXQUFMLENBQWlCLFdBQWpCO0FBRUQ7QUFMTCxTQU1HSCxJQU5ILENBRkY7QUFXRDs7OztFQWhCd0JGLFM7O0FBbUIzQk0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCTixZQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoXCJyZWFjdGlvblwiKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgICAgfX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtO1xuIl19
"use strict";

var _reaction = require("reaction");

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _todoListItem = _interopRequireDefault(require("./todoListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Component = _reaction.React.Component;

var TodoListItems = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItems, _Component);

  var _super = _createSuper(TodoListItems);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _super.apply(this, arguments);
  }

  _createClass(TodoListItems, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.unsubscribe = _dispatcher["default"].subscribe(function (update) {
        return _this.updateHandler(update);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render(update) {
      if (update) {
        var children = this.getChildren();
        var addTodo = update.addTodo,
            text = addTodo.text;
        children = [].concat(_toConsumableArray(children), [/*#__PURE__*/_reaction.React.createElement(_todoListItem["default"], {
          text: text
        })]);
        return children;
      }

      return [];
    }
  }]);

  return TodoListItems;
}(Component);

var mixins = [updateHandler];
Object.assign(TodoListItems, {
  mixins: mixins
});
module.exports = TodoListItems;

function updateHandler(update) {
  if (update) {
    var addTodo = update.addTodo;

    if (addTodo) {
      this.forceUpdate(update);
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUb2RvTGlzdEl0ZW1zIiwidW5zdWJzY3JpYmUiLCJkaXNwYXRjaGVyIiwic3Vic2NyaWJlIiwidXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJhZGRUb2RvIiwidGV4dCIsIm1peGlucyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JjZVVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVGRSxhOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUNsQixXQUFLQyxXQUFMLEdBQW1CQyx1QkFBV0MsU0FBWCxDQUFxQixVQUFDQyxNQUFEO0FBQUEsZUFBWSxLQUFJLENBQUNDLGFBQUwsQ0FBbUJELE1BQW5CLENBQVo7QUFBQSxPQUFyQixDQUFuQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtILFdBQUw7QUFDRDs7OzJCQUVNRyxNLEVBQVE7QUFDYixVQUFJQSxNQUFKLEVBQVk7QUFDVixZQUFJRSxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFmO0FBRU0sWUFBRUMsT0FBRixHQUFjSixNQUFkLENBQUVJLE9BQUY7QUFBQSxZQUNFQyxJQURGLEdBQ1dELE9BRFgsQ0FDRUMsSUFERjtBQUdOSCxRQUFBQSxRQUFRLGdDQUNIQSxRQURHLGlCQUdKLDhCQUFDLHdCQUFEO0FBQWMsVUFBQSxJQUFJLEVBQUVHO0FBQXBCLFVBSEksRUFBUjtBQU9BLGVBQU9ILFFBQVA7QUFDRDs7QUFFRCxhQUFPLEVBQVA7QUFDRDs7OztFQTNCeUJSLFM7O0FBOEI1QixJQUFNWSxNQUFNLEdBQUcsQ0FDYkwsYUFEYSxDQUFmO0FBSUFNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWixhQUFkLEVBQTZCO0FBQzNCVSxFQUFBQSxNQUFNLEVBQU5BO0FBRDJCLENBQTdCO0FBSUFHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsYUFBakI7O0FBRUEsU0FBU0ssYUFBVCxDQUF1QkQsTUFBdkIsRUFBK0I7QUFDN0IsTUFBSUEsTUFBSixFQUFZO0FBQUEsUUFDRkksT0FERSxHQUNVSixNQURWLENBQ0ZJLE9BREU7O0FBR1YsUUFBSUEsT0FBSixFQUFhO0FBQ1gsV0FBS08sV0FBTCxDQUFpQlgsTUFBakI7QUFDRDtBQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnVwZGF0ZUhhbmRsZXIodXBkYXRlKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZSxcbiAgICAgICAgICAgIHsgdGV4dCB9ID0gYWRkVG9kbztcblxuICAgICAgY2hpbGRyZW4gPSBbXG4gICAgICAgIC4uLmNoaWxkcmVuLFxuXG4gICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fSAvPlxuXG4gICAgICBdO1xuXG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmNvbnN0IG1peGlucyA9IFtcbiAgdXBkYXRlSGFuZGxlclxuXTtcblxuT2JqZWN0LmFzc2lnbihUb2RvTGlzdEl0ZW1zLCB7XG4gIG1peGluc1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtcztcblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcih1cGRhdGUpIHtcbiAgaWYgKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKGFkZFRvZG8pIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
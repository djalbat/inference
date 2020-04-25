"use strict";

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

var reaction = require("reaction");

var dispatcher = require("../dispatcher"),
    TodoListItem = require("./todoListItem");

var React = reaction.React,
    Component = React.Component;

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

      this.unsubscribe = dispatcher.subscribe(function (update) {
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
        children = [].concat(_toConsumableArray(children), [/*#__PURE__*/React.createElement(TodoListItem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVG9kb0xpc3RJdGVtcyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJhZGRUb2RvIiwidGV4dCIsIm1peGlucyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JjZVVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjtBQUFBLElBQ01FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBRDVCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosUUFBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUNnQkQsS0FEaEIsQ0FDRUMsU0FERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQkwsVUFBVSxDQUFDTSxTQUFYLENBQXFCLFVBQUNDLE1BQUQ7QUFBQSxlQUFZLEtBQUksQ0FBQ0MsYUFBTCxDQUFtQkQsTUFBbkIsQ0FBWjtBQUFBLE9BQXJCLENBQW5CO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7MkJBRU1FLE0sRUFBUTtBQUNiLFVBQUlBLE1BQUosRUFBWTtBQUNWLFlBQUlFLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWY7QUFFTSxZQUFFQyxPQUFGLEdBQWNKLE1BQWQsQ0FBRUksT0FBRjtBQUFBLFlBQ0VDLElBREYsR0FDV0QsT0FEWCxDQUNFQyxJQURGO0FBR05ILFFBQUFBLFFBQVEsZ0NBQ0hBLFFBREcsaUJBR0osb0JBQUMsWUFBRDtBQUFjLFVBQUEsSUFBSSxFQUFFRztBQUFwQixVQUhJLEVBQVI7QUFPQSxlQUFPSCxRQUFQO0FBQ0Q7O0FBRUQsYUFBTyxFQUFQO0FBQ0Q7Ozs7RUEzQnlCTixTOztBQThCNUIsSUFBTVUsTUFBTSxHQUFHLENBQ2JMLGFBRGEsQ0FBZjtBQUlBTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsYUFBZCxFQUE2QjtBQUMzQlMsRUFBQUEsTUFBTSxFQUFOQTtBQUQyQixDQUE3QjtBQUlBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLGFBQWpCOztBQUVBLFNBQVNJLGFBQVQsQ0FBdUJELE1BQXZCLEVBQStCO0FBQzdCLE1BQUlBLE1BQUosRUFBWTtBQUFBLFFBQ0ZJLE9BREUsR0FDVUosTUFEVixDQUNGSSxPQURFOztBQUdWLFFBQUlBLE9BQUosRUFBYTtBQUNYLFdBQUtPLFdBQUwsQ0FBaUJYLE1BQWpCO0FBQ0Q7QUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZShcInJlYWN0aW9uXCIpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL2Rpc3BhdGNoZXJcIiksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKFwiLi90b2RvTGlzdEl0ZW1cIik7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlLFxuICAgICAgICAgICAgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICBjaGlsZHJlbiA9IFtcbiAgICAgICAgLi4uY2hpbGRyZW4sXG5cbiAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuY29uc3QgbWl4aW5zID0gW1xuICB1cGRhdGVIYW5kbGVyXG5dO1xuXG5PYmplY3QuYXNzaWduKFRvZG9MaXN0SXRlbXMsIHtcbiAgbWl4aW5zXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW1zO1xuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKHVwZGF0ZSkge1xuICBpZiAodXBkYXRlKSB7XG4gICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICBpZiAoYWRkVG9kbykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh1cGRhdGUpO1xuICAgIH1cbiAgfVxufVxuIl19
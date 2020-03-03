'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

var React = reaction.React,
    Component = React.Component;

var TodoListItems = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItems, _Component);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems).apply(this, arguments));
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
        children = [].concat(_toConsumableArray(children), [React.createElement(TodoListItem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVG9kb0xpc3RJdGVtcyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJhZGRUb2RvIiwidGV4dCIsIm1peGlucyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JjZVVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUVBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7QUFBQSxJQUNNRSxZQUFZLEdBQUdGLE9BQU8sQ0FBQyxnQkFBRCxDQUQ1Qjs7QUFHTSxJQUFFRyxLQUFGLEdBQVlKLFFBQVosQ0FBRUksS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JELEtBRGhCLENBQ0VDLFNBREY7O0lBR0FDLGE7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUNsQixXQUFLQyxXQUFMLEdBQW1CTCxVQUFVLENBQUNNLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRDtBQUFBLGVBQVksS0FBSSxDQUFDQyxhQUFMLENBQW1CRCxNQUFuQixDQUFaO0FBQUEsT0FBckIsQ0FBbkI7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7OzsyQkFFTUUsTSxFQUFRO0FBQ2IsVUFBSUEsTUFBSixFQUFZO0FBQ1YsWUFBSUUsUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFBZjtBQUVNLFlBQUVDLE9BQUYsR0FBY0osTUFBZCxDQUFFSSxPQUFGO0FBQUEsWUFDRUMsSUFERixHQUNXRCxPQURYLENBQ0VDLElBREY7QUFHTkgsUUFBQUEsUUFBUSxnQ0FDSEEsUUFERyxJQUdKLG9CQUFDLFlBQUQ7QUFBYyxVQUFBLElBQUksRUFBRUc7QUFBcEIsVUFISSxFQUFSO0FBT0EsZUFBT0gsUUFBUDtBQUNEOztBQUVELGFBQU8sRUFBUDtBQUNEOzs7O0VBM0J5Qk4sUzs7QUE4QjVCLElBQU1VLE1BQU0sR0FBRyxDQUNiTCxhQURhLENBQWY7QUFJQU0sTUFBTSxDQUFDQyxNQUFQLENBQWNYLGFBQWQsRUFBNkI7QUFDM0JTLEVBQUFBLE1BQU0sRUFBTkE7QUFEMkIsQ0FBN0I7QUFJQUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCYixhQUFqQjs7QUFFQSxTQUFTSSxhQUFULENBQXVCRCxNQUF2QixFQUErQjtBQUM3QixNQUFJQSxNQUFKLEVBQVk7QUFBQSxRQUNGSSxPQURFLEdBQ1VKLE1BRFYsQ0FDRkksT0FERTs7QUFHVixRQUFJQSxPQUFKLEVBQWE7QUFDWCxXQUFLTyxXQUFMLENBQWlCWCxNQUFqQjtBQUNEO0FBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5jb25zdCBtaXhpbnMgPSBbXG4gIHVwZGF0ZUhhbmRsZXJcbl07XG5cbk9iamVjdC5hc3NpZ24oVG9kb0xpc3RJdGVtcywge1xuICBtaXhpbnNcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbXM7XG5cbmZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gIGlmICh1cGRhdGUpIHtcbiAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZTtcblxuICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
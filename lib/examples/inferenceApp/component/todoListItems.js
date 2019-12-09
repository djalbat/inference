'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

var React = reaction.React,
    Component = React.Component;

var TodoListItems = function (_Component) {
  _inherits(TodoListItems, _Component);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _possibleConstructorReturn(this, (TodoListItems.__proto__ || Object.getPrototypeOf(TodoListItems)).apply(this, arguments));
  }

  _createClass(TodoListItems, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        return _this2.updateHandler(update);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render(update) {
      if (update) {
        var children = this.getChildren();

        var addTodo = update.addTodo,
            text = addTodo.text;


        children = [].concat(_toConsumableArray(children), [React.createElement(TodoListItem, { text: text })]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVG9kb0xpc3RJdGVtcyIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJhZGRUb2RvIiwidGV4dCIsIm1peGlucyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3JjZVVwZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLGdCQUFSLENBRHJCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosUUFBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUNnQkQsS0FEaEIsQ0FDRUMsU0FERjs7SUFHQUMsYTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJMLFdBQVdNLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRDtBQUFBLGVBQVksT0FBS0MsYUFBTCxDQUFtQkQsTUFBbkIsQ0FBWjtBQUFBLE9BQXJCLENBQW5CO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7MkJBRU1FLE0sRUFBUTtBQUNiLFVBQUlBLE1BQUosRUFBWTtBQUNWLFlBQUlFLFdBQVcsS0FBS0MsV0FBTCxFQUFmOztBQUVNLFlBQUVDLE9BQUYsR0FBY0osTUFBZCxDQUFFSSxPQUFGO0FBQUEsWUFDRUMsSUFERixHQUNXRCxPQURYLENBQ0VDLElBREY7OztBQUdOSCxnREFDS0EsUUFETCxJQUdJLG9CQUFDLFlBQUQsSUFBYyxNQUFNRyxJQUFwQixHQUhKOztBQU9BLGVBQU9ILFFBQVA7QUFDRDs7QUFFRCxhQUFPLEVBQVA7QUFDRDs7OztFQTNCeUJOLFM7O0FBOEI1QixJQUFNVSxTQUFTLENBQ2JMLGFBRGEsQ0FBZjs7QUFJQU0sT0FBT0MsTUFBUCxDQUFjWCxhQUFkLEVBQTZCO0FBQzNCUztBQUQyQixDQUE3Qjs7QUFJQUcsT0FBT0MsT0FBUCxHQUFpQmIsYUFBakI7O0FBRUEsU0FBU0ksYUFBVCxDQUF1QkQsTUFBdkIsRUFBK0I7QUFDN0IsTUFBSUEsTUFBSixFQUFZO0FBQUEsUUFDRkksT0FERSxHQUNVSixNQURWLENBQ0ZJLE9BREU7OztBQUdWLFFBQUlBLE9BQUosRUFBYTtBQUNYLFdBQUtPLFdBQUwsQ0FBaUJYLE1BQWpCO0FBQ0Q7QUFDRjtBQUNGIiwiZmlsZSI6InRvZG9MaXN0SXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlLFxuICAgICAgICAgICAgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICBjaGlsZHJlbiA9IFtcbiAgICAgICAgLi4uY2hpbGRyZW4sXG5cbiAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuY29uc3QgbWl4aW5zID0gW1xuICB1cGRhdGVIYW5kbGVyXG5dO1xuXG5PYmplY3QuYXNzaWduKFRvZG9MaXN0SXRlbXMsIHtcbiAgbWl4aW5zXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW1zO1xuXG5mdW5jdGlvbiB1cGRhdGVIYW5kbGVyKHVwZGF0ZSkge1xuICBpZiAodXBkYXRlKSB7XG4gICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICBpZiAoYWRkVG9kbykge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSh1cGRhdGUpO1xuICAgIH1cbiAgfVxufVxuIl19
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

var React = reaction.React,
    Component = React.Component;

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        _this2.forceUpdate(update);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var addTodo = update.addTodo;


      if (addTodo) {
        var text = addTodo.text;


        this.addChild(React.createElement(TodoListItem, { text: text }));
      } else {
        return React.createElement('ul', null);
      }
    }
  }]);

  return TodoList;
}(Component);

module.exports = TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlYWN0aW9uIiwicmVxdWlyZSIsImRpc3BhdGNoZXIiLCJUb2RvTGlzdEl0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZFRvZG8iLCJ0ZXh0IiwiYWRkQ2hpbGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLGdCQUFSLENBRHJCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosUUFBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUNnQkQsS0FEaEIsQ0FDRUMsU0FERjs7SUFHQUMsUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJMLFdBQVdNLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xELGVBQUtDLFdBQUwsQ0FBaUJELE1BQWpCO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFbUI7QUFBQSxVQUFiRSxNQUFhLHVFQUFKLEVBQUk7QUFBQSxVQUNWRSxPQURVLEdBQ0VGLE1BREYsQ0FDVkUsT0FEVTs7O0FBR2xCLFVBQUlBLE9BQUosRUFBYTtBQUFBLFlBQ0hDLElBREcsR0FDTUQsT0FETixDQUNIQyxJQURHOzs7QUFHWCxhQUFLQyxRQUFMLENBRUUsb0JBQUMsWUFBRCxJQUFjLE1BQU1ELElBQXBCLEdBRkY7QUFLRCxPQVJELE1BUU87QUFDTCxlQUVFLCtCQUZGO0FBTUQ7QUFDRjs7OztFQTlCb0JQLFM7O0FBaUN2QlMsT0FBT0MsT0FBUCxHQUFpQlQsUUFBakIiLCJmaWxlIjoidG9kb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlID0ge30pIHtcbiAgICBjb25zdCB7IGFkZFRvZG8gfSA9IHVwZGF0ZTtcblxuICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIHRoaXMuYWRkQ2hpbGQoXG5cbiAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fSAvPlxuXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgPC91bD5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdDtcbiJdfQ==
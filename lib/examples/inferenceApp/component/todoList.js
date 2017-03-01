'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem');

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
        var addTodo = update.addTodo;


        if (addTodo) {
          var text = addTodo.text;


          _this2.addChild(React.createElement(TodoListItem, { text: text }));
        }
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
      return React.createElement('ul', null);
    }
  }]);

  return TodoList;
}(Component);

module.exports = TodoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlRvZG9MaXN0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJhZGRUb2RvIiwidGV4dCIsImFkZENoaWxkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGO0FBQUEsSUFFRUUsU0FGRixHQUVnQkYsS0FGaEIsQ0FFRUUsU0FGRjs7O0FBSU4sSUFBTUMsYUFBYUosUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUssZUFBZUwsUUFBUSxnQkFBUixDQURyQjs7SUFHTU0sUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJILFdBQVdJLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsWUFDMUNDLE9BRDBDLEdBQzlCRCxNQUQ4QixDQUMxQ0MsT0FEMEM7OztBQUdsRCxZQUFJQSxPQUFKLEVBQWE7QUFBQSxjQUNIQyxJQURHLEdBQ01ELE9BRE4sQ0FDSEMsSUFERzs7O0FBR1gsaUJBQUtDLFFBQUwsQ0FFRSxvQkFBQyxZQUFELElBQWMsTUFBTUQsSUFBcEIsR0FGRjtBQUtEO0FBQ0YsT0Faa0IsQ0FBbkI7QUFhRDs7OzJDQUVzQjtBQUNyQixXQUFLSixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBRUUsK0JBRkY7QUFNRDs7OztFQTVCb0JKLFM7O0FBK0J2QlUsT0FBT0MsT0FBUCxHQUFpQlIsUUFBakIiLCJmaWxlIjoidG9kb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jb25zdCBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4ge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWRkVG9kbztcblxuICAgICAgICB0aGlzLmFkZENoaWxkKFxuXG4gICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fSAvPlxuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgPC91bD5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdDtcbiJdfQ==
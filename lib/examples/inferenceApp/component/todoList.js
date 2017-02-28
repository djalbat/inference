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
          var _update = addTodo,
              text = _update.text,
              completed = false;


          _this2.addChild(React.createElement(TodoListItem, { text: text, completed: completed }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlRvZG9MaXN0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJhZGRUb2RvIiwidGV4dCIsImNvbXBsZXRlZCIsImFkZENoaWxkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGO0FBQUEsSUFFRUUsU0FGRixHQUVnQkYsS0FGaEIsQ0FFRUUsU0FGRjs7O0FBSU4sSUFBTUMsYUFBYUosUUFBUSxlQUFSLENBQW5CO0FBQUEsSUFDTUssZUFBZUwsUUFBUSxnQkFBUixDQURyQjs7SUFHTU0sUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJILFdBQVdJLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsWUFDMUNDLE9BRDBDLEdBQzlCRCxNQUQ4QixDQUMxQ0MsT0FEMEM7OztBQUdsRCxZQUFJQSxPQUFKLEVBQWE7QUFDTCx3QkFBU0EsT0FBVDtBQUFBLGNBQ0VDLElBREYsR0FDV0YsT0FEWCxDQUNFRSxJQURGO0FBQUEsY0FFQUMsU0FGQSxHQUVZLEtBRlo7OztBQUlOLGlCQUFLQyxRQUFMLENBRUUsb0JBQUMsWUFBRCxJQUFjLE1BQU1GLElBQXBCLEVBQTBCLFdBQVdDLFNBQXJDLEdBRkY7QUFLRDtBQUNGLE9BZGtCLENBQW5CO0FBZUQ7OzsyQ0FFc0I7QUFDckIsV0FBS0wsV0FBTDtBQUNEOzs7NkJBRVE7QUFDUCxhQUVFLCtCQUZGO0FBTUQ7Ozs7RUE5Qm9CSixTOztBQWlDdkJXLE9BQU9DLE9BQVAsR0FBaUJULFFBQWpCIiwiZmlsZSI6InRvZG9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIFRvZG9MaXN0SXRlbSA9IHJlcXVpcmUoJy4vdG9kb0xpc3RJdGVtJyk7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSBhZGRUb2RvLFxuICAgICAgICAgICAgICB7IHRleHQgfSA9IHVwZGF0ZSxcbiAgICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gY29tcGxldGVkPXtjb21wbGV0ZWR9IC8+XG5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuIl19
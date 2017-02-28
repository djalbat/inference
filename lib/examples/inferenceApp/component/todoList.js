'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
    key: 'getInitialState',
    value: function getInitialState() {
      var todos = [],
          initialState = {
        todos: todos
      };

      return initialState;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        var _update = update,
            addTodo = _update.addTodo;


        if (addTodo) {
          var todos = _this2.state.todos;


          update = addTodo;

          todos = addTodoToTodos(todos, update);

          _this2.state = Object.assign(_this2.state, {
            todos: todos
          });
        }
        if (addTodo) {
          _this2.forceUpdate();
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
      var todos = this.state.todos,
          items = todos.map(function (todo) {
        var text = todo.text,
            completed = todo.completed;


        return React.createElement(TodoListItem, { text: text, completed: completed });
      });


      return React.createElement(
        'ul',
        null,
        items
      );
    }
  }]);

  return TodoList;
}(Component);

module.exports = TodoList;

var addTodoToTodos = function addTodoToTodos(todos, update) {
  var id = update.id,
      text = update.text,
      completed = false,
      todo = {
    id: id,
    text: text,
    completed: completed
  };


  todos = [].concat(_toConsumableArray(todos), [todo]);

  return todos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsIlRvZG9MaXN0IiwidG9kb3MiLCJpbml0aWFsU3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVwZGF0ZSIsImFkZFRvZG8iLCJzdGF0ZSIsImFkZFRvZG9Ub1RvZG9zIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yY2VVcGRhdGUiLCJpdGVtcyIsIm1hcCIsInRvZG8iLCJ0ZXh0IiwiY29tcGxldGVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLGFBQWFKLFFBQVEsZUFBUixDQUFuQjtBQUFBLElBQ01LLGVBQWVMLFFBQVEsZ0JBQVIsQ0FEckI7O0lBR01NLFE7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCLFVBQU1DLFFBQVEsRUFBZDtBQUFBLFVBQ01DLGVBQWU7QUFDYkQsZUFBT0E7QUFETSxPQURyQjs7QUFLQSxhQUFPQyxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQkwsV0FBV00sU0FBWCxDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFBQSxzQkFDOUJBLE1BRDhCO0FBQUEsWUFDMUNDLE9BRDBDLFdBQzFDQSxPQUQwQzs7O0FBR2xELFlBQUlBLE9BQUosRUFBYTtBQUFBLGNBQ0xMLEtBREssR0FDSyxPQUFLTSxLQURWLENBQ0xOLEtBREs7OztBQUdYSSxtQkFBU0MsT0FBVDs7QUFFQUwsa0JBQVFPLGVBQWVQLEtBQWYsRUFBc0JJLE1BQXRCLENBQVI7O0FBRUEsaUJBQUtFLEtBQUwsR0FBYUUsT0FBT0MsTUFBUCxDQUFjLE9BQUtILEtBQW5CLEVBQTBCO0FBQ3JDTixtQkFBT0E7QUFEOEIsV0FBMUIsQ0FBYjtBQUdEO0FBQ0QsWUFBSUssT0FBSixFQUFhO0FBQ1gsaUJBQUtLLFdBQUw7QUFDRDtBQUNGLE9BakJrQixDQUFuQjtBQWtCRDs7OzJDQUVzQjtBQUNyQixXQUFLUixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLTSxLQUFqQixDQUFFTixLQUFGO0FBQUEsVUFDQVcsS0FEQSxHQUNRWCxNQUFNWSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsWUFDbEJDLElBRGtCLEdBQ0VELElBREYsQ0FDbEJDLElBRGtCO0FBQUEsWUFDWkMsU0FEWSxHQUNFRixJQURGLENBQ1pFLFNBRFk7OztBQUcxQixlQUVFLG9CQUFDLFlBQUQsSUFBYyxNQUFNRCxJQUFwQixFQUEwQixXQUFXQyxTQUFyQyxHQUZGO0FBS0QsT0FSTyxDQURSOzs7QUFXTixhQUVFO0FBQUE7QUFBQTtBQUNHSjtBQURILE9BRkY7QUFPRDs7OztFQXREb0JmLFM7O0FBeUR2Qm9CLE9BQU9DLE9BQVAsR0FBaUJsQixRQUFqQjs7QUFFQSxJQUFNUSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNQLEtBQUQsRUFBUUksTUFBUixFQUFtQjtBQUFBLE1BQ2hDYyxFQURnQyxHQUNuQmQsTUFEbUIsQ0FDaENjLEVBRGdDO0FBQUEsTUFDNUJKLElBRDRCLEdBQ25CVixNQURtQixDQUM1QlUsSUFENEI7QUFBQSxNQUVsQ0MsU0FGa0MsR0FFdEIsS0FGc0I7QUFBQSxNQUdsQ0YsSUFIa0MsR0FHM0I7QUFDTEssUUFBSUEsRUFEQztBQUVMSixVQUFNQSxJQUZEO0FBR0xDLGVBQVdBO0FBSE4sR0FIMkI7OztBQVN4Q2YsdUNBQ0tBLEtBREwsSUFFRWEsSUFGRjs7QUFLQSxTQUFPYixLQUFQO0FBQ0QsQ0FmRCIsImZpbGUiOiJ0b2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b2RvcyA9IFtdLFxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgIHRvZG9zOiB0b2Rvc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICBsZXQgeyB0b2RvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB1cGRhdGUgPSBhZGRUb2RvO1xuXG4gICAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIHVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwge1xuICAgICAgICAgIHRvZG9zOiB0b2Rvc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvZG9zIH0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGl0ZW1zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHRleHQsIGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IGNvbXBsZXRlZD17Y29tcGxldGVkfSAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuXG5jb25zdCBhZGRUb2RvVG9Ub2RvcyA9ICh0b2RvcywgdXBkYXRlKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IHVwZGF0ZSxcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiJdfQ==
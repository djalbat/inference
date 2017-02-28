'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var constants = require('../constants'),
    TodoListItem = require('./todoListItem');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO;

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

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        _this2.forceUpdate();
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
      var store = this.context.store,
          state = store.getState(),
          todos = state.todos,
          visibilityFilter = state.visibilityFilter,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map(function (visibleTodo) {
        var id = visibleTodo.id,
            text = visibleTodo.text,
            completed = visibleTodo.completed;


        return React.createElement(TodoListItem, { text: text,
          completed: completed,
          clickHandler: function clickHandler() {
            var type = TOGGLE_TODO,
                action = {
              type: type,
              id: id
            };

            store.dispatch(action);
          }
        });
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

var getVisibleTodos = function getVisibleTodos(todos, visibilityFilter) {
  var visibleTodos = void 0;

  switch (visibilityFilter) {
    case SHOW_ALL:
      visibleTodos = todos;
      break;

    case SHOW_ACTIVE:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed,
            active = !completed;


        return active;
      });
      break;

    case SHOW_COMPLETED:
      visibleTodos = todos.filter(function (todo) {
        var completed = todo.completed;


        return completed;
      });
      break;
  }

  return visibleTodos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlYWN0IiwicmVhY3Rpb24iLCJDb21wb25lbnQiLCJjb25zdGFudHMiLCJUb2RvTGlzdEl0ZW0iLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiLCJUT0dHTEVfVE9ETyIsIlRvZG9MaXN0Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidHlwZSIsImFjdGlvbiIsImRpc3BhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLFlBQVlKLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01LLGVBQWVMLFFBQVEsZ0JBQVIsQ0FEckI7O0FBR0EsSUFBTU0sV0FBV0YsVUFBVUUsUUFBM0I7QUFBQSxJQUNNQyxjQUFjSCxVQUFVRyxXQUQ5QjtBQUFBLElBRU1DLGlCQUFpQkosVUFBVUksY0FGakM7QUFBQSxJQUdNQyxjQUFjTCxVQUFVSyxXQUg5Qjs7SUFLTUMsUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTs7O0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLE1BQU1HLFNBQU4sQ0FBZ0IsWUFBTTtBQUN2QyxlQUFLQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxNQUFNTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxLQUZGLEdBRThCRixLQUY5QixDQUVFRSxLQUZGO0FBQUEsVUFFU0MsZ0JBRlQsR0FFOEJILEtBRjlCLENBRVNHLGdCQUZUO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxnQkFBZ0JILEtBQWhCLEVBQXVCQyxnQkFBdkIsQ0FIZjtBQUFBLFVBSUFHLEtBSkEsR0FJUUYsYUFBYUcsR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQUEsWUFDaENDLEVBRGdDLEdBQ1JELFdBRFEsQ0FDaENDLEVBRGdDO0FBQUEsWUFDNUJDLElBRDRCLEdBQ1JGLFdBRFEsQ0FDNUJFLElBRDRCO0FBQUEsWUFDdEJDLFNBRHNCLEdBQ1JILFdBRFEsQ0FDdEJHLFNBRHNCOzs7QUFHeEMsZUFFRSxvQkFBQyxZQUFELElBQWMsTUFBTUQsSUFBcEI7QUFDYyxxQkFBV0MsU0FEekI7QUFFYyx3QkFBYyx3QkFBTTtBQUNsQixnQkFBTUMsT0FBT25CLFdBQWI7QUFBQSxnQkFDTW9CLFNBQVM7QUFDUEQsb0JBQU1BLElBREM7QUFFUEgsa0JBQUlBO0FBRkcsYUFEZjs7QUFNQWQsa0JBQU1tQixRQUFOLENBQWVELE1BQWY7QUFDRDtBQVZmLFVBRkY7QUFnQkQsT0FuQk8sQ0FKUjs7O0FBeUJOLGFBRUU7QUFBQTtBQUFBO0FBQ0dQO0FBREgsT0FGRjtBQU9EOzs7O0VBOUNvQm5CLFM7O0FBaUR2QjRCLE9BQU9DLE9BQVAsR0FBaUJ0QixRQUFqQjs7QUFFQSxJQUFNVyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsRUFBNkI7QUFDbkQsTUFBSUMscUJBQUo7O0FBRUEsVUFBUUQsZ0JBQVI7QUFDRSxTQUFLYixRQUFMO0FBQ0VjLHFCQUFlRixLQUFmO0FBQ0E7O0FBRUYsU0FBS1gsV0FBTDtBQUNFYSxxQkFBZUYsTUFBTWUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFUCxTQUFGLEdBQWdCTyxJQUFoQixDQUFFUCxTQUFGO0FBQUEsWUFDRlEsTUFERSxHQUNPLENBQUNSLFNBRFI7OztBQUdOLGVBQU9RLE1BQVA7QUFDRCxPQUxjLENBQWY7QUFNQTs7QUFFRixTQUFLM0IsY0FBTDtBQUNFWSxxQkFBZUYsTUFBTWUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUFBLFlBQzVCUCxTQUQ0QixHQUNkTyxJQURjLENBQzVCUCxTQUQ0Qjs7O0FBR3BDLGVBQU9BLFNBQVA7QUFDRCxPQUpjLENBQWY7QUFLQTtBQXBCSjs7QUF1QkEsU0FBT1AsWUFBUDtBQUNELENBM0JEIiwiZmlsZSI6InRvZG9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCBTSE9XX0FMTCA9IGNvbnN0YW50cy5TSE9XX0FMTCxcbiAgICAgIFNIT1dfQUNUSVZFID0gY29uc3RhbnRzLlNIT1dfQUNUSVZFLFxuICAgICAgU0hPV19DT01QTEVURUQgPSBjb25zdGFudHMuU0hPV19DT01QTEVURUQsXG4gICAgICBUT0dHTEVfVE9ETyA9IGNvbnN0YW50cy5UT0dHTEVfVE9ETztcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iXX0=
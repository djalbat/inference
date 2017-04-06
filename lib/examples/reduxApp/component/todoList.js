'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var constants = require('../constants'),
    TodoListItem = require('./todoListItem');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO,
    React = reaction.React,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiVG9kb0xpc3RJdGVtIiwiU0hPV19BTEwiLCJTSE9XX0FDVElWRSIsIlNIT1dfQ09NUExFVEVEIiwiVE9HR0xFX1RPRE8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidHlwZSIsImFjdGlvbiIsImRpc3BhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsZ0JBQVIsQ0FEckI7O0lBR1FHLFEsR0FBdURGLFMsQ0FBdkRFLFE7SUFBVUMsVyxHQUE2Q0gsUyxDQUE3Q0csVztJQUFhQyxjLEdBQWdDSixTLENBQWhDSSxjO0lBQWdCQyxXLEdBQWdCTCxTLENBQWhCSyxXO0lBQ3ZDQyxLLEdBQVVSLFEsQ0FBVlEsSztJQUNBQyxTLEdBQWNELEssQ0FBZEMsUzs7SUFFRkMsUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTs7O0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLE1BQU1HLFNBQU4sQ0FBZ0IsWUFBTTtBQUN2QyxlQUFLQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxNQUFNTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxLQUZGLEdBRThCRixLQUY5QixDQUVFRSxLQUZGO0FBQUEsVUFFU0MsZ0JBRlQsR0FFOEJILEtBRjlCLENBRVNHLGdCQUZUO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxnQkFBZ0JILEtBQWhCLEVBQXVCQyxnQkFBdkIsQ0FIZjtBQUFBLFVBSUFHLEtBSkEsR0FJUUYsYUFBYUcsR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQUEsWUFDaENDLEVBRGdDLEdBQ1JELFdBRFEsQ0FDaENDLEVBRGdDO0FBQUEsWUFDNUJDLElBRDRCLEdBQ1JGLFdBRFEsQ0FDNUJFLElBRDRCO0FBQUEsWUFDdEJDLFNBRHNCLEdBQ1JILFdBRFEsQ0FDdEJHLFNBRHNCOzs7QUFHeEMsZUFFRSxvQkFBQyxZQUFELElBQWMsTUFBTUQsSUFBcEI7QUFDYyxxQkFBV0MsU0FEekI7QUFFYyx3QkFBYyx3QkFBTTtBQUNsQixnQkFBTUMsT0FBT3JCLFdBQWI7QUFBQSxnQkFDTXNCLFNBQVM7QUFDUEQsb0JBQU1BLElBREM7QUFFUEgsa0JBQUlBO0FBRkcsYUFEZjs7QUFNQWQsa0JBQU1tQixRQUFOLENBQWVELE1BQWY7QUFDRDtBQVZmLFVBRkY7QUFnQkQsT0FuQk8sQ0FKUjs7O0FBeUJOLGFBRUU7QUFBQTtBQUFBO0FBQ0dQO0FBREgsT0FGRjtBQU9EOzs7O0VBOUNvQmIsUzs7QUFpRHZCc0IsT0FBT0MsT0FBUCxHQUFpQnRCLFFBQWpCOztBQUVBLElBQU1XLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0gsS0FBRCxFQUFRQyxnQkFBUixFQUE2QjtBQUNuRCxNQUFJQyxxQkFBSjs7QUFFQSxVQUFRRCxnQkFBUjtBQUNFLFNBQUtmLFFBQUw7QUFDRWdCLHFCQUFlRixLQUFmO0FBQ0E7O0FBRUYsU0FBS2IsV0FBTDtBQUNFZSxxQkFBZUYsTUFBTWUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFUCxTQUFGLEdBQWdCTyxJQUFoQixDQUFFUCxTQUFGO0FBQUEsWUFDRlEsTUFERSxHQUNPLENBQUNSLFNBRFI7OztBQUdOLGVBQU9RLE1BQVA7QUFDRCxPQUxjLENBQWY7QUFNQTs7QUFFRixTQUFLN0IsY0FBTDtBQUNFYyxxQkFBZUYsTUFBTWUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUFBLFlBQzVCUCxTQUQ0QixHQUNkTyxJQURjLENBQzVCUCxTQUQ0Qjs7O0FBR3BDLGVBQU9BLFNBQVA7QUFDRCxPQUpjLENBQWY7QUFLQTtBQXBCSjs7QUF1QkEsU0FBT1AsWUFBUDtBQUNELENBM0JEIiwiZmlsZSI6InRvZG9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7aXRlbXN9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0O1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIl19
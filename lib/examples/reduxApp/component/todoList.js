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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiVG9kb0xpc3RJdGVtIiwiU0hPV19BTEwiLCJTSE9XX0FDVElWRSIsIlNIT1dfQ09NUExFVEVEIiwiVE9HR0xFX1RPRE8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidHlwZSIsImFjdGlvbiIsImRpc3BhdGNoIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbHRlciIsInRvZG8iLCJhY3RpdmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01FLGVBQWVGLFFBQVEsZ0JBQVIsQ0FEckI7O0lBR1FHLFEsR0FBdURGLFMsQ0FBdkRFLFE7SUFBVUMsVyxHQUE2Q0gsUyxDQUE3Q0csVztJQUFhQyxjLEdBQWdDSixTLENBQWhDSSxjO0lBQWdCQyxXLEdBQWdCTCxTLENBQWhCSyxXO0lBQ3ZDQyxLLEdBQVVSLFEsQ0FBVlEsSztJQUNBQyxTLEdBQWNELEssQ0FBZEMsUzs7SUFFRkMsUTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTs7O0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLE1BQU1HLFNBQU4sQ0FBZ0IsWUFBTTtBQUN2QyxlQUFLQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxNQUFNTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxLQUZGLEdBRThCRixLQUY5QixDQUVFRSxLQUZGO0FBQUEsVUFFU0MsZ0JBRlQsR0FFOEJILEtBRjlCLENBRVNHLGdCQUZUO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxnQkFBZ0JILEtBQWhCLEVBQXVCQyxnQkFBdkIsQ0FIZjtBQUFBLFVBSUFHLEtBSkEsR0FJUUYsYUFBYUcsR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQUEsWUFDaENDLEVBRGdDLEdBQ1JELFdBRFEsQ0FDaENDLEVBRGdDO0FBQUEsWUFDNUJDLElBRDRCLEdBQ1JGLFdBRFEsQ0FDNUJFLElBRDRCO0FBQUEsWUFDdEJDLFNBRHNCLEdBQ1JILFdBRFEsQ0FDdEJHLFNBRHNCOzs7QUFHeEMsZUFFRSxvQkFBQyxZQUFELElBQWMsTUFBTUQsSUFBcEI7QUFDYyxxQkFBV0MsU0FEekI7QUFFYyx3QkFBYyx3QkFBTTtBQUNsQixnQkFBTUMsT0FBT3JCLFdBQWI7QUFBQSxnQkFDTXNCLFNBQVM7QUFDUEQsd0JBRE87QUFFUEg7QUFGTyxhQURmOztBQU1BZCxrQkFBTW1CLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBVmYsVUFGRjtBQWdCRCxPQW5CTyxDQUpSOzs7QUF5Qk4sYUFFRTtBQUFBO0FBQUE7QUFDR1A7QUFESCxPQUZGO0FBT0Q7Ozs7RUE5Q29CYixTOztBQWlEdkJzQixPQUFPQyxPQUFQLEdBQWlCdEIsUUFBakI7O0FBRUEsSUFBTVcsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDSCxLQUFELEVBQVFDLGdCQUFSLEVBQTZCO0FBQ25ELE1BQUlDLHFCQUFKOztBQUVBLFVBQVFELGdCQUFSO0FBQ0UsU0FBS2YsUUFBTDtBQUNFZ0IscUJBQWVGLEtBQWY7QUFDQTs7QUFFRixTQUFLYixXQUFMO0FBQ0VlLHFCQUFlRixNQUFNZSxNQUFOLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLFlBQUVQLFNBQUYsR0FBZ0JPLElBQWhCLENBQUVQLFNBQUY7QUFBQSxZQUNGUSxNQURFLEdBQ08sQ0FBQ1IsU0FEUjs7O0FBR04sZUFBT1EsTUFBUDtBQUNELE9BTGMsQ0FBZjtBQU1BOztBQUVGLFNBQUs3QixjQUFMO0FBQ0VjLHFCQUFlRixNQUFNZSxNQUFOLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQUEsWUFDNUJQLFNBRDRCLEdBQ2RPLElBRGMsQ0FDNUJQLFNBRDRCOzs7QUFHcEMsZUFBT0EsU0FBUDtBQUNELE9BSmMsQ0FBZjtBQUtBO0FBcEJKOztBQXVCQSxTQUFPUCxZQUFQO0FBQ0QsQ0EzQkQiLCJmaWxlIjoidG9kb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iXX0=
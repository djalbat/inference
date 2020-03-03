'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var reaction = require('reaction');

var constants = require('../constants'),
    TodoListItem = require('./todoListItem');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO,
    React = reaction.React,
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

      var store = this.context.store;
      this.unsubscribe = store.subscribe(function () {
        _this.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
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
        return React.createElement(TodoListItem, {
          text: text,
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
      return items;
    }
  }]);

  return TodoListItems;
}(Component);

module.exports = TodoListItems;

var getVisibleTodos = function getVisibleTodos(todos, visibilityFilter) {
  var visibleTodos;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiVG9kb0xpc3RJdGVtIiwiU0hPV19BTEwiLCJTSE9XX0FDVElWRSIsIlNIT1dfQ09NUExFVEVEIiwiVE9HR0xFX1RPRE8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0SXRlbXMiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInRvZG9zIiwidmlzaWJpbGl0eUZpbHRlciIsInZpc2libGVUb2RvcyIsImdldFZpc2libGVUb2RvcyIsIml0ZW1zIiwibWFwIiwidmlzaWJsZVRvZG8iLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxjQUFELENBQXpCO0FBQUEsSUFDTUUsWUFBWSxHQUFHRixPQUFPLENBQUMsZ0JBQUQsQ0FENUI7O0lBR1FHLFEsR0FBdURGLFMsQ0FBdkRFLFE7SUFBVUMsVyxHQUE2Q0gsUyxDQUE3Q0csVztJQUFhQyxjLEdBQWdDSixTLENBQWhDSSxjO0lBQWdCQyxXLEdBQWdCTCxTLENBQWhCSyxXO0lBQ3ZDQyxLLEdBQVVSLFEsQ0FBVlEsSztJQUNBQyxTLEdBQWNELEssQ0FBZEMsUzs7SUFFRkMsYTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTtBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0IsWUFBTTtBQUN2QyxRQUFBLEtBQUksQ0FBQ0MsV0FBTDtBQUNELE9BRmtCLENBQW5CO0FBR0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsS0FBSyxDQUFDTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxLQUZGLEdBRThCRixLQUY5QixDQUVFRSxLQUZGO0FBQUEsVUFFU0MsZ0JBRlQsR0FFOEJILEtBRjlCLENBRVNHLGdCQUZUO0FBQUEsVUFHQUMsWUFIQSxHQUdlQyxlQUFlLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsQ0FIOUI7QUFBQSxVQUlBRyxLQUpBLEdBSVFGLFlBQVksQ0FBQ0csR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQUEsWUFDaENDLEVBRGdDLEdBQ1JELFdBRFEsQ0FDaENDLEVBRGdDO0FBQUEsWUFDNUJDLElBRDRCLEdBQ1JGLFdBRFEsQ0FDNUJFLElBRDRCO0FBQUEsWUFDdEJDLFNBRHNCLEdBQ1JILFdBRFEsQ0FDdEJHLFNBRHNCO0FBR3hDLGVBRUUsb0JBQUMsWUFBRDtBQUFjLFVBQUEsSUFBSSxFQUFFRCxJQUFwQjtBQUNjLFVBQUEsU0FBUyxFQUFFQyxTQUR6QjtBQUVjLFVBQUEsWUFBWSxFQUFFLHdCQUFNO0FBQ2xCLGdCQUFNQyxJQUFJLEdBQUdyQixXQUFiO0FBQUEsZ0JBQ01zQixNQUFNLEdBQUc7QUFDUEQsY0FBQUEsSUFBSSxFQUFKQSxJQURPO0FBRVBILGNBQUFBLEVBQUUsRUFBRkE7QUFGTyxhQURmO0FBTUFkLFlBQUFBLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBVmYsVUFGRjtBQWdCRCxPQW5CTyxDQUpSO0FBeUJOLGFBQU9QLEtBQVA7QUFDRDs7OztFQXhDeUJiLFM7O0FBMkM1QnNCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRCLGFBQWpCOztBQUVBLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0gsS0FBRCxFQUFRQyxnQkFBUixFQUE2QjtBQUNuRCxNQUFJQyxZQUFKOztBQUVBLFVBQVFELGdCQUFSO0FBQ0UsU0FBS2YsUUFBTDtBQUNFZ0IsTUFBQUEsWUFBWSxHQUFHRixLQUFmO0FBQ0E7O0FBRUYsU0FBS2IsV0FBTDtBQUNFZSxNQUFBQSxZQUFZLEdBQUdGLEtBQUssQ0FBQ2UsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFUCxTQUFGLEdBQWdCTyxJQUFoQixDQUFFUCxTQUFGO0FBQUEsWUFDRlEsTUFERSxHQUNPLENBQUNSLFNBRFI7QUFHTixlQUFPUSxNQUFQO0FBQ0QsT0FMYyxDQUFmO0FBTUE7O0FBRUYsU0FBSzdCLGNBQUw7QUFDRWMsTUFBQUEsWUFBWSxHQUFHRixLQUFLLENBQUNlLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFBQSxZQUM1QlAsU0FENEIsR0FDZE8sSUFEYyxDQUM1QlAsU0FENEI7QUFHcEMsZUFBT0EsU0FBUDtBQUNELE9BSmMsQ0FBZjtBQUtBO0FBcEJKOztBQXVCQSxTQUFPUCxZQUFQO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKCcuL3RvZG9MaXN0SXRlbScpO1xuXG5jb25zdCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbXM7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iXX0=
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var TodoList = require('./todoList'),
    constants = require('../constants');

var SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO;

var VisibleTodoList = function (_Component) {
  _inherits(VisibleTodoList, _Component);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
  }

  _createClass(VisibleTodoList, [{
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
          visibleTodos = getVisibleTodos(todos, visibilityFilter);


      return React.createElement(TodoList, { todos: visibleTodos,
        todoClickHandler: function todoClickHandler(id) {
          var type = TOGGLE_TODO,
              action = {
            type: type,
            id: id
          };

          store.dispatch(action);
        }
      });
    }
  }]);

  return VisibleTodoList;
}(Component);

module.exports = VisibleTodoList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdmlzaWJsZVRvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiVG9kb0xpc3QiLCJjb25zdGFudHMiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiLCJUT0dHTEVfVE9ETyIsIlZpc2libGVUb2RvTGlzdCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiZ2V0VmlzaWJsZVRvZG9zIiwiaWQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlsdGVyIiwidG9kbyIsImNvbXBsZXRlZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGO0FBQUEsSUFFRUUsU0FGRixHQUVnQkYsS0FGaEIsQ0FFRUUsU0FGRjs7O0FBSU4sSUFBTUMsV0FBV0osUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUssWUFBWUwsUUFBUSxjQUFSLENBRGxCOztBQUdBLElBQU1NLFdBQVdELFVBQVVDLFFBQTNCO0FBQUEsSUFDTUMsY0FBY0YsVUFBVUUsV0FEOUI7QUFBQSxJQUVNQyxpQkFBaUJILFVBQVVHLGNBRmpDO0FBQUEsSUFHTUMsY0FBY0osVUFBVUksV0FIOUI7O0lBS01DLGU7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUFBLFVBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCLFlBQU07QUFDdkMsZUFBS0MsV0FBTDtBQUNELE9BRmtCLENBQW5CO0FBR0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsTUFBTU0sUUFBTixFQURSO0FBQUEsVUFFRUMsS0FGRixHQUU4QkYsS0FGOUIsQ0FFRUUsS0FGRjtBQUFBLFVBRVNDLGdCQUZULEdBRThCSCxLQUY5QixDQUVTRyxnQkFGVDtBQUFBLFVBR0FDLFlBSEEsR0FHZUMsZ0JBQWdCSCxLQUFoQixFQUF1QkMsZ0JBQXZCLENBSGY7OztBQUtOLGFBRUksb0JBQUMsUUFBRCxJQUFVLE9BQU9DLFlBQWpCO0FBQ1UsMEJBQWtCLDBCQUFDRSxFQUFELEVBQVE7QUFDeEIsY0FBTUMsT0FBT2QsV0FBYjtBQUFBLGNBQ01lLFNBQVM7QUFDUEQsa0JBQU1BLElBREM7QUFFUEQsZ0JBQUlBO0FBRkcsV0FEZjs7QUFNQVgsZ0JBQU1jLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBVFgsUUFGSjtBQWVEOzs7O0VBbEMyQnJCLFM7O0FBcUM5QnVCLE9BQU9DLE9BQVAsR0FBaUJqQixlQUFqQjs7QUFFQSxJQUFNVyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsRUFBNkI7QUFDbkQsTUFBSUMscUJBQUo7O0FBRUEsVUFBUUQsZ0JBQVI7QUFDRSxTQUFLYixRQUFMO0FBQ0VjLHFCQUFlRixLQUFmO0FBQ0E7O0FBRUYsU0FBS1gsV0FBTDtBQUNFYSxxQkFBZUYsTUFBTVUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFQyxTQUFGLEdBQWdCRCxJQUFoQixDQUFFQyxTQUFGO0FBQUEsWUFDRkMsTUFERSxHQUNPLENBQUNELFNBRFI7OztBQUdOLGVBQU9DLE1BQVA7QUFDRCxPQUxjLENBQWY7QUFNQTs7QUFFRixTQUFLdkIsY0FBTDtBQUNFWSxxQkFBZUYsTUFBTVUsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUFBLFlBQzVCQyxTQUQ0QixHQUNkRCxJQURjLENBQzVCQyxTQUQ0Qjs7O0FBR3BDLGVBQU9BLFNBQVA7QUFDRCxPQUpjLENBQWY7QUFLQTtBQXBCSjs7QUF1QkEsU0FBT1YsWUFBUDtBQUNELENBM0JEIiwiZmlsZSI6InZpc2libGVUb2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0hPV19BQ1RJVkUgPSBjb25zdGFudHMuU0hPV19BQ1RJVkUsXG4gICAgICBTSE9XX0NPTVBMRVRFRCA9IGNvbnN0YW50cy5TSE9XX0NPTVBMRVRFRCxcbiAgICAgIFRPR0dMRV9UT0RPID0gY29uc3RhbnRzLlRPR0dMRV9UT0RPO1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt2aXNpYmxlVG9kb3N9XG4gICAgICAgICAgICAgICAgICB0b2RvQ2xpY2tIYW5kbGVyPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXNpYmxlVG9kb0xpc3Q7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iXX0=
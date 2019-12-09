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


      return items;
    }
  }]);

  return TodoListItems;
}(Component);

module.exports = TodoListItems;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJjb25zdGFudHMiLCJUb2RvTGlzdEl0ZW0iLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiLCJUT0dHTEVfVE9ETyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVG9kb0xpc3RJdGVtcyIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiZ2V0VmlzaWJsZVRvZG9zIiwiaXRlbXMiLCJtYXAiLCJ2aXNpYmxlVG9kbyIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaWx0ZXIiLCJ0b2RvIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLGdCQUFSLENBRHJCOztJQUdRRyxRLEdBQXVERixTLENBQXZERSxRO0lBQVVDLFcsR0FBNkNILFMsQ0FBN0NHLFc7SUFBYUMsYyxHQUFnQ0osUyxDQUFoQ0ksYztJQUFnQkMsVyxHQUFnQkwsUyxDQUFoQkssVztJQUN2Q0MsSyxHQUFVUixRLENBQVZRLEs7SUFDQUMsUyxHQUFjRCxLLENBQWRDLFM7O0lBRUZDLGE7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUFBLFVBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCLFlBQU07QUFDdkMsZUFBS0MsV0FBTDtBQUNELE9BRmtCLENBQW5CO0FBR0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsTUFBTU0sUUFBTixFQURSO0FBQUEsVUFFRUMsS0FGRixHQUU4QkYsS0FGOUIsQ0FFRUUsS0FGRjtBQUFBLFVBRVNDLGdCQUZULEdBRThCSCxLQUY5QixDQUVTRyxnQkFGVDtBQUFBLFVBR0FDLFlBSEEsR0FHZUMsZ0JBQWdCSCxLQUFoQixFQUF1QkMsZ0JBQXZCLENBSGY7QUFBQSxVQUlBRyxLQUpBLEdBSVFGLGFBQWFHLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUFBLFlBQ2hDQyxFQURnQyxHQUNSRCxXQURRLENBQ2hDQyxFQURnQztBQUFBLFlBQzVCQyxJQUQ0QixHQUNSRixXQURRLENBQzVCRSxJQUQ0QjtBQUFBLFlBQ3RCQyxTQURzQixHQUNSSCxXQURRLENBQ3RCRyxTQURzQjs7O0FBR3hDLGVBRUUsb0JBQUMsWUFBRCxJQUFjLE1BQU1ELElBQXBCO0FBQ2MscUJBQVdDLFNBRHpCO0FBRWMsd0JBQWMsd0JBQU07QUFDbEIsZ0JBQU1DLE9BQU9yQixXQUFiO0FBQUEsZ0JBQ01zQixTQUFTO0FBQ1BELHdCQURPO0FBRVBIO0FBRk8sYUFEZjs7QUFNQWQsa0JBQU1tQixRQUFOLENBQWVELE1BQWY7QUFDRDtBQVZmLFVBRkY7QUFnQkQsT0FuQk8sQ0FKUjs7O0FBeUJOLGFBQU9QLEtBQVA7QUFDRDs7OztFQXhDeUJiLFM7O0FBMkM1QnNCLE9BQU9DLE9BQVAsR0FBaUJ0QixhQUFqQjs7QUFFQSxJQUFNVyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsRUFBNkI7QUFDbkQsTUFBSUMscUJBQUo7O0FBRUEsVUFBUUQsZ0JBQVI7QUFDRSxTQUFLZixRQUFMO0FBQ0VnQixxQkFBZUYsS0FBZjtBQUNBOztBQUVGLFNBQUtiLFdBQUw7QUFDRWUscUJBQWVGLE1BQU1lLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDOUIsWUFBRVAsU0FBRixHQUFnQk8sSUFBaEIsQ0FBRVAsU0FBRjtBQUFBLFlBQ0ZRLE1BREUsR0FDTyxDQUFDUixTQURSOzs7QUFHTixlQUFPUSxNQUFQO0FBQ0QsT0FMYyxDQUFmO0FBTUE7O0FBRUYsU0FBSzdCLGNBQUw7QUFDRWMscUJBQWVGLE1BQU1lLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFBQSxZQUM1QlAsU0FENEIsR0FDZE8sSUFEYyxDQUM1QlAsU0FENEI7OztBQUdwQyxlQUFPQSxTQUFQO0FBQ0QsT0FKYyxDQUFmO0FBS0E7QUFwQko7O0FBdUJBLFNBQU9QLFlBQVA7QUFDRCxDQTNCRCIsImZpbGUiOiJ0b2RvTGlzdEl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKTtcblxuY29uc3QgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvTGlzdEl0ZW1zO1xuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIl19
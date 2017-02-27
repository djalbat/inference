'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var constants = require('../constants'),
    dispatcher = require('../dispatcher'),
    TodoListItem = require('./todoListItem'),
    getVisibleTodos = require('../helper/getVisibleTodos');

var SHOW_ALL = constants.SHOW_ALL,
    TOGGLE_TODO = constants.TOGGLE_TODO;

var TodoList = function (_Component) {
  _inherits(TodoList, _Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'getInitialState',
    value: function getInitialState() {
      var visibilityFilter = SHOW_ALL,
          todos = [],
          initialState = {
        todos: todos,
        visibilityFilter: visibilityFilter
      };

      return initialState;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        var _update = update,
            addTodo = _update.addTodo,
            toggleTodo = _update.toggleTodo,
            setVisibilityFilter = _update.setVisibilityFilter;


        if (addTodo) {
          var todos = _this2.state.todos;


          update = addTodo;

          todos = addTodoToTodos(todos, update);

          _this2.state = Object.assign(_this2.state, {
            todos: todos
          });
        }

        if (toggleTodo) {
          var _todos = _this2.state.todos;


          update = toggleTodo;

          _todos = toggleTodos(_todos, update);

          _this2.state = Object.assign(_this2.state, {
            todos: _todos
          });
        }

        if (setVisibilityFilter) {
          update = setVisibilityFilter;

          var _update2 = update,
              visibilityFilter = _update2.visibilityFilter;


          _this2.state = Object.assign(_this2.state, {
            visibilityFilter: visibilityFilter
          });
        }

        if (addTodo || toggleTodo || setVisibilityFilter) {
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
      var _state = this.state,
          todos = _state.todos,
          visibilityFilter = _state.visibilityFilter,
          visibleTodos = getVisibleTodos(todos, visibilityFilter),
          items = visibleTodos.map(function (visibleTodo) {
        var text = visibleTodo.text,
            completed = visibleTodo.completed,
            id = visibleTodo.id,
            item = React.createElement(TodoListItem, { text: text,
          completed: completed,
          clickHandler: function clickHandler() {
            var type = TOGGLE_TODO,
                action = {
              type: type,
              id: id
            };

            dispatcher.dispatch(action);
          }
        });


        return item;
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

var toggleTodos = function toggleTodos(todos, update) {
  var id = update.id;


  todos = todos.map(function (todo) {
    if (todo.id === id) {
      var completed = todo.completed;


      completed = !completed;

      todo.completed = completed;
    }

    return todo;
  });

  return todos;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlRvZG9MaXN0SXRlbSIsImdldFZpc2libGVUb2RvcyIsIlNIT1dfQUxMIiwiVE9HR0xFX1RPRE8iLCJUb2RvTGlzdCIsInZpc2liaWxpdHlGaWx0ZXIiLCJ0b2RvcyIsImluaXRpYWxTdGF0ZSIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwidXBkYXRlIiwiYWRkVG9kbyIsInRvZ2dsZVRvZG8iLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwic3RhdGUiLCJhZGRUb2RvVG9Ub2RvcyIsIk9iamVjdCIsImFzc2lnbiIsInRvZ2dsZVRvZG9zIiwiZm9yY2VVcGRhdGUiLCJ2aXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwidGV4dCIsImNvbXBsZXRlZCIsImlkIiwiaXRlbSIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0b2RvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLFlBQVlKLFFBQVEsY0FBUixDQUFsQjtBQUFBLElBQ01LLGFBQWFMLFFBQVEsZUFBUixDQURuQjtBQUFBLElBRU1NLGVBQWVOLFFBQVEsZ0JBQVIsQ0FGckI7QUFBQSxJQUdNTyxrQkFBa0JQLFFBQVEsMkJBQVIsQ0FIeEI7O0FBS0EsSUFBTVEsV0FBV0osVUFBVUksUUFBM0I7QUFBQSxJQUNNQyxjQUFjTCxVQUFVSyxXQUQ5Qjs7SUFHTUMsUTs7Ozs7Ozs7Ozs7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RUFBbUI7QUFBQSxNQUNoQ2dCLEVBRGdDLEdBQ25CaEIsTUFEbUIsQ0FDaENnQixFQURnQztBQUFBLE1BQzVCRixJQUQ0QixHQUNuQmQsTUFEbUIsQ0FDNUJjLElBRDRCO0FBQUEsTUFFbENDLFNBRmtDLEdBRXRCLEtBRnNCO0FBQUEsTUFHbENRLElBSGtDLEdBRzNCO0FBQ0xQLFFBQUlBLEVBREM7QUFFTEYsVUFBTUEsSUFGRDtBQUdMQyxlQUFXQTtBQUhOLEdBSDJCOzs7QUFTeENuQix1Q0FDS0EsS0FETCxJQUVFMkIsSUFGRjs7QUFLQSxTQUFPM0IsS0FBUDtBQUNELENBZkQ7O0FBaUJBLElBQU1ZLGNBQWMsU0FBZEEsV0FBYyxDQUFDWixLQUFELEVBQVFJLE1BQVIsRUFBbUI7QUFBQSxNQUM3QmdCLEVBRDZCLEdBQ3RCaEIsTUFEc0IsQ0FDN0JnQixFQUQ2Qjs7O0FBR3JDcEIsVUFBUUEsTUFBTWdCLEdBQU4sQ0FBVSxVQUFDVyxJQUFELEVBQVU7QUFDMUIsUUFBSUEsS0FBS1AsRUFBTCxLQUFZQSxFQUFoQixFQUFvQjtBQUFBLFVBQ1pELFNBRFksR0FDRVEsSUFERixDQUNaUixTQURZOzs7QUFHbEJBLGtCQUFZLENBQUNBLFNBQWI7O0FBRUFRLFdBQUtSLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQsV0FBT1EsSUFBUDtBQUNELEdBVk8sQ0FBUjs7QUFZQSxTQUFPM0IsS0FBUDtBQUNELENBaEJEIiwiZmlsZSI6InRvZG9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpLFxuICAgICAgVG9kb0xpc3RJdGVtID0gcmVxdWlyZSgnLi90b2RvTGlzdEl0ZW0nKSxcbiAgICAgIGdldFZpc2libGVUb2RvcyA9IHJlcXVpcmUoJy4uL2hlbHBlci9nZXRWaXNpYmxlVG9kb3MnKTtcblxuY29uc3QgU0hPV19BTEwgPSBjb25zdGFudHMuU0hPV19BTEwsXG4gICAgICBUT0dHTEVfVE9ETyA9IGNvbnN0YW50cy5UT0dHTEVfVE9ETztcblxuY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgIHRvZG9zID0gW10sXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgdG9kb3M6IHRvZG9zLFxuICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbywgdG9nZ2xlVG9kbywgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICBsZXQgeyB0b2RvcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICB1cGRhdGUgPSBhZGRUb2RvO1xuXG4gICAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIHVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwge1xuICAgICAgICAgIHRvZG9zOiB0b2Rvc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvZ2dsZVRvZG8pIHtcbiAgICAgICAgbGV0IHsgdG9kb3MgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgdXBkYXRlID0gdG9nZ2xlVG9kbztcblxuICAgICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCB1cGRhdGUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHtcbiAgICAgICAgICB0b2RvczogdG9kb3NcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXRWaXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgICAgIHVwZGF0ZSA9IHNldFZpc2liaWxpdHlGaWx0ZXI7XG5cbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSB1cGRhdGU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwge1xuICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRUb2RvIHx8IHRvZ2dsZVRvZG8gfHwgc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB0ZXh0LCBjb21wbGV0ZWQsIGlkIH0gPSB2aXNpYmxlVG9kbyxcbiAgICAgICAgICAgICAgICAgIGl0ZW0gPSAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPjtcblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHtpdGVtc31cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3Q7XG5cbmNvbnN0IGFkZFRvZG9Ub1RvZG9zID0gKHRvZG9zLCB1cGRhdGUpID0+IHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gdXBkYXRlLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgdGV4dDogdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59O1xuXG5jb25zdCB0b2dnbGVUb2RvcyA9ICh0b2RvcywgdXBkYXRlKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHVwZGF0ZTtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufTtcbiJdfQ==
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var TodoList = require('./todoList'),
    constants = require('../constants'),
    getVisibleTodos = require('../helper/getVisibleTodos');

var TOGGLE_TODO = constants.TOGGLE_TODO;

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
        onTodoClick: function onTodoClick(id) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvdmlzaWJsZVRvZG9MaXN0LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsInJlYWN0aW9uIiwiQ29tcG9uZW50IiwiVG9kb0xpc3QiLCJjb25zdGFudHMiLCJnZXRWaXNpYmxlVG9kb3MiLCJUT0dHTEVfVE9ETyIsIlZpc2libGVUb2RvTGlzdCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJzdGF0ZSIsImdldFN0YXRlIiwidG9kb3MiLCJ2aXNpYmlsaXR5RmlsdGVyIiwidmlzaWJsZVRvZG9zIiwiaWQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVNLGVBQVdBLFFBQVEsVUFBUixDQUFYO0FBQUEsSUFDRUMsS0FERixHQUNZQyxRQURaLENBQ0VELEtBREY7QUFBQSxJQUVFRSxTQUZGLEdBRWdCRixLQUZoQixDQUVFRSxTQUZGOzs7QUFJTixJQUFNQyxXQUFXSixRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNSyxZQUFZTCxRQUFRLGNBQVIsQ0FEbEI7QUFBQSxJQUVNTSxrQkFBa0JOLFFBQVEsMkJBQVIsQ0FGeEI7O0FBSUEsSUFBTU8sY0FBY0YsVUFBVUUsV0FBOUI7O0lBRU1DLGU7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUFBLFVBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCLFlBQU07QUFDdkMsZUFBS0MsV0FBTDtBQUNELE9BRmtCLENBQW5CO0FBR0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsTUFBTU0sUUFBTixFQURSO0FBQUEsVUFFRUMsS0FGRixHQUU4QkYsS0FGOUIsQ0FFRUUsS0FGRjtBQUFBLFVBRVNDLGdCQUZULEdBRThCSCxLQUY5QixDQUVTRyxnQkFGVDtBQUFBLFVBR0FDLFlBSEEsR0FHZVosZ0JBQWdCVSxLQUFoQixFQUF1QkMsZ0JBQXZCLENBSGY7OztBQUtOLGFBRUksb0JBQUMsUUFBRCxJQUFVLE9BQU9DLFlBQWpCO0FBQ1UscUJBQWEscUJBQUNDLEVBQUQsRUFBUTtBQUNuQixjQUFNQyxPQUFPYixXQUFiO0FBQUEsY0FDTWMsU0FBUztBQUNQRCxrQkFBTUEsSUFEQztBQUVQRCxnQkFBSUE7QUFGRyxXQURmOztBQU1BVixnQkFBTWEsUUFBTixDQUFlRCxNQUFmO0FBQ0Q7QUFUWCxRQUZKO0FBZUQ7Ozs7RUFsQzJCbEIsUzs7QUFxQzlCb0IsT0FBT0MsT0FBUCxHQUFpQmhCLGVBQWpCIiwiZmlsZSI6InZpc2libGVUb2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBnZXRWaXNpYmxlVG9kb3MgPSByZXF1aXJlKCcuLi9oZWxwZXIvZ2V0VmlzaWJsZVRvZG9zJyk7XG5cbmNvbnN0IFRPR0dMRV9UT0RPID0gY29uc3RhbnRzLlRPR0dMRV9UT0RPO1xuXG5jbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt2aXNpYmxlVG9kb3N9XG4gICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17KGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlzaWJsZVRvZG9MaXN0O1xuIl19
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var reaction = require("reaction");

var constants = require("../constants"),
    TodoListItem = require("./todoListItem");

var React = reaction.React,
    Component = React.Component,
    SHOW_ALL = constants.SHOW_ALL,
    SHOW_ACTIVE = constants.SHOW_ACTIVE,
    SHOW_COMPLETED = constants.SHOW_COMPLETED,
    TOGGLE_TODO = constants.TOGGLE_TODO;

var TodoListItems = /*#__PURE__*/function (_Component) {
  _inherits(TodoListItems, _Component);

  var _super = _createSuper(TodoListItems);

  function TodoListItems() {
    _classCallCheck(this, TodoListItems);

    return _super.apply(this, arguments);
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
        return /*#__PURE__*/React.createElement(TodoListItem, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbXMuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiVG9kb0xpc3RJdGVtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiLCJUT0dHTEVfVE9ETyIsIlRvZG9MaXN0SXRlbXMiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInRvZG9zIiwidmlzaWJpbGl0eUZpbHRlciIsInZpc2libGVUb2RvcyIsImdldFZpc2libGVUb2RvcyIsIml0ZW1zIiwibWFwIiwidmlzaWJsZVRvZG8iLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsY0FBRCxDQUF6QjtBQUFBLElBQ01FLFlBQVksR0FBR0YsT0FBTyxDQUFDLGdCQUFELENBRDVCOztBQUdNLElBQUVHLEtBQUYsR0FBWUosUUFBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUNnQkQsS0FEaEIsQ0FDRUMsU0FERjtBQUFBLElBRUVDLFFBRkYsR0FFeURKLFNBRnpELENBRUVJLFFBRkY7QUFBQSxJQUVZQyxXQUZaLEdBRXlETCxTQUZ6RCxDQUVZSyxXQUZaO0FBQUEsSUFFeUJDLGNBRnpCLEdBRXlETixTQUZ6RCxDQUV5Qk0sY0FGekI7QUFBQSxJQUV5Q0MsV0FGekMsR0FFeURQLFNBRnpELENBRXlDTyxXQUZ6Qzs7SUFJQUMsYTs7Ozs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFBQSxVQUNWQyxLQURVLEdBQ0EsS0FBS0MsT0FETCxDQUNWRCxLQURVO0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixZQUFNO0FBQ3ZDLFFBQUEsS0FBSSxDQUFDQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxLQUFLLENBQUNNLFFBQU4sRUFEUjtBQUFBLFVBRUVDLEtBRkYsR0FFOEJGLEtBRjlCLENBRUVFLEtBRkY7QUFBQSxVQUVTQyxnQkFGVCxHQUU4QkgsS0FGOUIsQ0FFU0csZ0JBRlQ7QUFBQSxVQUdBQyxZQUhBLEdBR2VDLGVBQWUsQ0FBQ0gsS0FBRCxFQUFRQyxnQkFBUixDQUg5QjtBQUFBLFVBSUFHLEtBSkEsR0FJUUYsWUFBWSxDQUFDRyxHQUFiLENBQWlCLFVBQUNDLFdBQUQsRUFBaUI7QUFBQSxZQUNoQ0MsRUFEZ0MsR0FDUkQsV0FEUSxDQUNoQ0MsRUFEZ0M7QUFBQSxZQUM1QkMsSUFENEIsR0FDUkYsV0FEUSxDQUM1QkUsSUFENEI7QUFBQSxZQUN0QkMsU0FEc0IsR0FDUkgsV0FEUSxDQUN0QkcsU0FEc0I7QUFHeEMsNEJBRUUsb0JBQUMsWUFBRDtBQUFjLFVBQUEsSUFBSSxFQUFFRCxJQUFwQjtBQUNjLFVBQUEsU0FBUyxFQUFFQyxTQUR6QjtBQUVjLFVBQUEsWUFBWSxFQUFFLHdCQUFNO0FBQ2xCLGdCQUFNQyxJQUFJLEdBQUduQixXQUFiO0FBQUEsZ0JBQ01vQixNQUFNLEdBQUc7QUFDUEQsY0FBQUEsSUFBSSxFQUFKQSxJQURPO0FBRVBILGNBQUFBLEVBQUUsRUFBRkE7QUFGTyxhQURmO0FBTUFkLFlBQUFBLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBVmYsVUFGRjtBQWdCRCxPQW5CTyxDQUpSO0FBeUJOLGFBQU9QLEtBQVA7QUFDRDs7OztFQXhDeUJqQixTOztBQTJDNUIwQixNQUFNLENBQUNDLE9BQVAsR0FBaUJ0QixhQUFqQjs7QUFFQSxJQUFNVyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNILEtBQUQsRUFBUUMsZ0JBQVIsRUFBNkI7QUFDbkQsTUFBSUMsWUFBSjs7QUFFQSxVQUFRRCxnQkFBUjtBQUNFLFNBQUtiLFFBQUw7QUFDRWMsTUFBQUEsWUFBWSxHQUFHRixLQUFmO0FBQ0E7O0FBRUYsU0FBS1gsV0FBTDtBQUNFYSxNQUFBQSxZQUFZLEdBQUdGLEtBQUssQ0FBQ2UsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUM5QixZQUFFUCxTQUFGLEdBQWdCTyxJQUFoQixDQUFFUCxTQUFGO0FBQUEsWUFDRlEsTUFERSxHQUNPLENBQUNSLFNBRFI7QUFHTixlQUFPUSxNQUFQO0FBQ0QsT0FMYyxDQUFmO0FBTUE7O0FBRUYsU0FBSzNCLGNBQUw7QUFDRVksTUFBQUEsWUFBWSxHQUFHRixLQUFLLENBQUNlLE1BQU4sQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFBQSxZQUM1QlAsU0FENEIsR0FDZE8sSUFEYyxDQUM1QlAsU0FENEI7QUFHcEMsZUFBT0EsU0FBUDtBQUNELE9BSmMsQ0FBZjtBQUtBO0FBcEJKOztBQXVCQSxTQUFPUCxZQUFQO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKFwicmVhY3Rpb25cIik7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIiksXG4gICAgICBUb2RvTGlzdEl0ZW0gPSByZXF1aXJlKFwiLi90b2RvTGlzdEl0ZW1cIik7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0LFxuICAgICAgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9ID0gY29uc3RhbnRzO1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtcztcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdfQ==
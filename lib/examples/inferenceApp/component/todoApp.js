'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL,
    React = reaction.React,
    Component = React.Component;

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        return _this2.render(update);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render(update) {
      if (update) {
        var setVisibilityFilter = update.setVisibilityFilter;


        if (setVisibilityFilter) {
          var visibilityFilter = setVisibilityFilter.visibilityFilter,
              className = visibilityFilter + ' app';


          this.setClass(className);
        }
      } else {
        var initialVisibilityFilter = SHOW_ALL,
            _className = initialVisibilityFilter + ' app';

        return React.createElement(
          'div',
          { className: _className },
          React.createElement(AddTodo, null),
          React.createElement(TodoList, null),
          React.createElement(Footer, null)
        );
      }
    }
  }]);

  return TodoApp;
}(Component);

module.exports = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiRm9vdGVyIiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlNIT1dfQUxMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwidmlzaWJpbGl0eUZpbHRlciIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01FLFVBQVVGLFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1HLFdBQVdILFFBQVEsWUFBUixDQUZqQjtBQUFBLElBR01JLFlBQVlKLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU1LLGFBQWFMLFFBQVEsZUFBUixDQUpuQjs7QUFNTSxJQUFFTSxRQUFGLEdBQWVGLFNBQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDWVIsUUFEWixDQUNFUSxLQURGO0FBQUEsSUFFRUMsU0FGRixHQUVnQkQsS0FGaEIsQ0FFRUMsU0FGRjs7SUFJQUMsTzs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJMLFdBQVdNLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRDtBQUFBLGVBQVksT0FBS0MsTUFBTCxDQUFZRCxNQUFaLENBQVo7QUFBQSxPQUFyQixDQUFuQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzJCQUVNRSxNLEVBQVE7QUFDYixVQUFJQSxNQUFKLEVBQVk7QUFBQSxZQUNGRSxtQkFERSxHQUNzQkYsTUFEdEIsQ0FDRkUsbUJBREU7OztBQUdWLFlBQUlBLG1CQUFKLEVBQXlCO0FBQ2pCLGNBQUVDLGdCQUFGLEdBQXVCRCxtQkFBdkIsQ0FBRUMsZ0JBQUY7QUFBQSxjQUNBQyxTQURBLEdBQ2VELGdCQURmOzs7QUFHTixlQUFLRSxRQUFMLENBQWNELFNBQWQ7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNMLFlBQU1FLDBCQUEwQlosUUFBaEM7QUFBQSxZQUNNVSxhQUFlRSx1QkFBZixTQUROOztBQUdBLGVBRUU7QUFBQTtBQUFBLFlBQUssV0FBV0YsVUFBaEI7QUFDRSw4QkFBQyxPQUFELE9BREY7QUFFRSw4QkFBQyxRQUFELE9BRkY7QUFHRSw4QkFBQyxNQUFEO0FBSEYsU0FGRjtBQVNEO0FBQ0Y7Ozs7RUFqQ21CUixTOztBQW9DdEJXLE9BQU9DLE9BQVAsR0FBaUJYLE9BQWpCIiwiZmlsZSI6InRvZG9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpO1xuXG5jb25zdCB7IFNIT1dfQUxMIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIl19
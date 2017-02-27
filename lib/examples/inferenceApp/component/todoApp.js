'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL;

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
        var setVisibilityFilter = update.setVisibilityFilter;


        if (setVisibilityFilter) {
          var _update = setVisibilityFilter,
              visibilityFilter = _update.visibilityFilter,
              className = visibilityFilter + ' app';


          _this2.setClass(className);
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
      var initialVisibilityFilter = SHOW_ALL,
          className = initialVisibilityFilter + ' app';

      return React.createElement(
        'div',
        { className: className },
        React.createElement(AddTodo, null),
        React.createElement(TodoList, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return TodoApp;
}(Component);

module.exports = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlYWN0IiwicmVhY3Rpb24iLCJDb21wb25lbnQiLCJGb290ZXIiLCJBZGRUb2RvIiwiVG9kb0xpc3QiLCJjb25zdGFudHMiLCJkaXNwYXRjaGVyIiwiU0hPV19BTEwiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwidmlzaWJpbGl0eUZpbHRlciIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVNLGVBQVdBLFFBQVEsVUFBUixDQUFYO0FBQUEsSUFDRUMsS0FERixHQUNZQyxRQURaLENBQ0VELEtBREY7QUFBQSxJQUVFRSxTQUZGLEdBRWdCRixLQUZoQixDQUVFRSxTQUZGOzs7QUFJTixJQUFNQyxTQUFTSixRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01LLFVBQVVMLFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1NLFdBQVdOLFFBQVEsWUFBUixDQUZqQjtBQUFBLElBR01PLFlBQVlQLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU1RLGFBQWFSLFFBQVEsZUFBUixDQUpuQjs7QUFNQSxJQUFNUyxXQUFXRixVQUFVRSxRQUEzQjs7SUFFTUMsTzs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJILFdBQVdJLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsWUFDMUNDLG1CQUQwQyxHQUNsQkQsTUFEa0IsQ0FDMUNDLG1CQUQwQzs7O0FBR2xELFlBQUlBLG1CQUFKLEVBQXlCO0FBQ2pCLHdCQUFTQSxtQkFBVDtBQUFBLGNBQ0VDLGdCQURGLEdBQ3VCRixPQUR2QixDQUNFRSxnQkFERjtBQUFBLGNBRUFDLFNBRkEsR0FFZUQsZ0JBRmY7OztBQUlOLGlCQUFLRSxRQUFMLENBQWNELFNBQWQ7QUFDRDtBQUNGLE9BVmtCLENBQW5CO0FBV0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0wsV0FBTDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNTywwQkFBMEJULFFBQWhDO0FBQUEsVUFDTU8sWUFBZUUsdUJBQWYsU0FETjs7QUFHQSxhQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVdGLFNBQWhCO0FBQ0UsNEJBQUMsT0FBRCxPQURGO0FBRUUsNEJBQUMsUUFBRCxPQUZGO0FBR0UsNEJBQUMsTUFBRDtBQUhGLE9BRkY7QUFTRDs7OztFQWhDbUJiLFM7O0FBbUN0QmdCLE9BQU9DLE9BQVAsR0FBaUJWLE9BQWpCIiwiZmlsZSI6InRvZG9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMO1xuXG5jbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7dmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgICAgICB0aGlzLnNldENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBgJHtpbml0aWFsVmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0FwcDtcbiJdfQ==
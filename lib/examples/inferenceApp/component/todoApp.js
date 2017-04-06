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
        _this2.forceUpdate(update);
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
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var setVisibilityFilter = update.setVisibilityFilter;


      if (setVisibilityFilter) {
        var visibilityFilter = setVisibilityFilter.visibilityFilter,
            className = visibilityFilter + ' app';


        this.setClass(className);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiRm9vdGVyIiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlNIT1dfQUxMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJmb3JjZVVwZGF0ZSIsInNldFZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiY2xhc3NOYW1lIiwic2V0Q2xhc3MiLCJpbml0aWFsVmlzaWJpbGl0eUZpbHRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFNBQVNELFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUUsVUFBVUYsUUFBUSxXQUFSLENBRGhCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxZQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1NLElBQUVNLFFBQUYsR0FBZUYsU0FBZixDQUFFRSxRQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZUixRQURaLENBQ0VRLEtBREY7QUFBQSxJQUVFQyxTQUZGLEdBRWdCRCxLQUZoQixDQUVFQyxTQUZGOztJQUlBQyxPOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQkwsV0FBV00sU0FBWCxDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFDbEQsZUFBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDRCxPQUZrQixDQUFuQjtBQUdEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzZCQUVtQjtBQUFBLFVBQWJFLE1BQWEsdUVBQUosRUFBSTtBQUFBLFVBQ1ZFLG1CQURVLEdBQ2NGLE1BRGQsQ0FDVkUsbUJBRFU7OztBQUdsQixVQUFJQSxtQkFBSixFQUF5QjtBQUNqQixZQUFFQyxnQkFBRixHQUF1QkQsbUJBQXZCLENBQUVDLGdCQUFGO0FBQUEsWUFDQUMsU0FEQSxHQUNlRCxnQkFEZjs7O0FBR04sYUFBS0UsUUFBTCxDQUFjRCxTQUFkO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsWUFBTUUsMEJBQTBCWixRQUFoQztBQUFBLFlBQ01VLGFBQWVFLHVCQUFmLFNBRE47O0FBR0EsZUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFXRixVQUFoQjtBQUNFLDhCQUFDLE9BQUQsT0FERjtBQUVFLDhCQUFDLFFBQUQsT0FGRjtBQUdFLDhCQUFDLE1BQUQ7QUFIRixTQUZGO0FBU0Q7QUFDRjs7OztFQWpDbUJSLFM7O0FBb0N0QlcsT0FBT0MsT0FBUCxHQUFpQlgsT0FBakIiLCJmaWxlIjoidG9kb0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2Zvb3RlcicpLFxuICAgICAgQWRkVG9kbyA9IHJlcXVpcmUoJy4vYWRkVG9kbycpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKCcuL3RvZG9MaXN0JyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IHsgU0hPV19BTEwgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUgPSB7fSkge1xuICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc2V0VmlzaWJpbGl0eUZpbHRlcixcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIl19
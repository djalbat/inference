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

var Footer = require('./footer'),
    AddTodo = require('./addTodo'),
    TodoList = require('./todoList'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL,
    React = reaction.React,
    Component = React.Component;

var TodoApp = /*#__PURE__*/function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoApp).apply(this, arguments));
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        return _this.render(update);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render(update) {
      if (update) {
        var setVisibilityFilter = update.setVisibilityFilter;

        if (setVisibilityFilter) {
          var visibilityFilter = setVisibilityFilter.visibilityFilter,
              className = "".concat(visibilityFilter, " app");
          this.setClass(className);
        }
      } else {
        var initialVisibilityFilter = SHOW_ALL,
            _className = "".concat(initialVisibilityFilter, " app");

        return React.createElement("div", {
          className: _className
        }, React.createElement(AddTodo, null), React.createElement(TodoList, null), React.createElement(Footer, null));
      }
    }
  }]);

  return TodoApp;
}(Component);

module.exports = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9BcHAuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiRm9vdGVyIiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlNIT1dfQUxMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwidmlzaWJpbGl0eUZpbHRlciIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUVBLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDLFVBQUQsQ0FBdEI7QUFBQSxJQUNNRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBRHZCO0FBQUEsSUFFTUcsUUFBUSxHQUFHSCxPQUFPLENBQUMsWUFBRCxDQUZ4QjtBQUFBLElBR01JLFNBQVMsR0FBR0osT0FBTyxDQUFDLGNBQUQsQ0FIekI7QUFBQSxJQUlNSyxVQUFVLEdBQUdMLE9BQU8sQ0FBQyxlQUFELENBSjFCOztBQU1NLElBQUVNLFFBQUYsR0FBZUYsU0FBZixDQUFFRSxRQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZUixRQURaLENBQ0VRLEtBREY7QUFBQSxJQUVFQyxTQUZGLEdBRWdCRCxLQUZoQixDQUVFQyxTQUZGOztJQUlBQyxPOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQkwsVUFBVSxDQUFDTSxTQUFYLENBQXFCLFVBQUNDLE1BQUQ7QUFBQSxlQUFZLEtBQUksQ0FBQ0MsTUFBTCxDQUFZRCxNQUFaLENBQVo7QUFBQSxPQUFyQixDQUFuQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzJCQUVNRSxNLEVBQVE7QUFDYixVQUFJQSxNQUFKLEVBQVk7QUFBQSxZQUNGRSxtQkFERSxHQUNzQkYsTUFEdEIsQ0FDRkUsbUJBREU7O0FBR1YsWUFBSUEsbUJBQUosRUFBeUI7QUFDakIsY0FBRUMsZ0JBQUYsR0FBdUJELG1CQUF2QixDQUFFQyxnQkFBRjtBQUFBLGNBQ0FDLFNBREEsYUFDZUQsZ0JBRGY7QUFHTixlQUFLRSxRQUFMLENBQWNELFNBQWQ7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNMLFlBQU1FLHVCQUF1QixHQUFHWixRQUFoQztBQUFBLFlBQ01VLFVBQVMsYUFBTUUsdUJBQU4sU0FEZjs7QUFHQSxlQUVFO0FBQUssVUFBQSxTQUFTLEVBQUVGO0FBQWhCLFdBQ0Usb0JBQUMsT0FBRCxPQURGLEVBRUUsb0JBQUMsUUFBRCxPQUZGLEVBR0Usb0JBQUMsTUFBRCxPQUhGLENBRkY7QUFTRDtBQUNGOzs7O0VBakNtQlIsUzs7QUFvQ3RCVyxNQUFNLENBQUNDLE9BQVAsR0FBaUJYLE9BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IEZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJyksXG4gICAgICBBZGRUb2RvID0gcmVxdWlyZSgnLi9hZGRUb2RvJyksXG4gICAgICBUb2RvTGlzdCA9IHJlcXVpcmUoJy4vdG9kb0xpc3QnKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpLFxuICAgICAgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKTtcblxuY29uc3QgeyBTSE9XX0FMTCB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRvZG9BcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy5yZW5kZXIodXBkYXRlKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBzZXRWaXNpYmlsaXR5RmlsdGVyIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChzZXRWaXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc2V0VmlzaWJpbGl0eUZpbHRlcixcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7dmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgICAgICB0aGlzLnNldENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluaXRpYWxWaXNpYmlsaXR5RmlsdGVyID0gU0hPV19BTEwsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtpbml0aWFsVmlzaWJpbGl0eUZpbHRlcn0gYXBwYDtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0FwcDtcbiJdfQ==
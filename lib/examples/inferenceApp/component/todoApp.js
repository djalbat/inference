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

var Footer = require("./footer"),
    AddTodo = require("./addTodo"),
    TodoList = require("./todoList"),
    constants = require("../constants"),
    dispatcher = require("../dispatcher");

var SHOW_ALL = constants.SHOW_ALL,
    React = reaction.React,
    Component = React.Component;

var TodoApp = /*#__PURE__*/function (_Component) {
  _inherits(TodoApp, _Component);

  var _super = _createSuper(TodoApp);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    return _super.apply(this, arguments);
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

        return /*#__PURE__*/React.createElement("div", {
          className: _className
        }, /*#__PURE__*/React.createElement(AddTodo, null), /*#__PURE__*/React.createElement(TodoList, null), /*#__PURE__*/React.createElement(Footer, null));
      }
    }
  }]);

  return TodoApp;
}(Component);

module.exports = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9BcHAuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiRm9vdGVyIiwiQWRkVG9kbyIsIlRvZG9MaXN0IiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlNIT1dfQUxMIiwiUmVhY3QiLCJDb21wb25lbnQiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJyZW5kZXIiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwidmlzaWJpbGl0eUZpbHRlciIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFFQSxJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQyxVQUFELENBQXRCO0FBQUEsSUFDTUUsT0FBTyxHQUFHRixPQUFPLENBQUMsV0FBRCxDQUR2QjtBQUFBLElBRU1HLFFBQVEsR0FBR0gsT0FBTyxDQUFDLFlBQUQsQ0FGeEI7QUFBQSxJQUdNSSxTQUFTLEdBQUdKLE9BQU8sQ0FBQyxjQUFELENBSHpCO0FBQUEsSUFJTUssVUFBVSxHQUFHTCxPQUFPLENBQUMsZUFBRCxDQUoxQjs7QUFNTSxJQUFFTSxRQUFGLEdBQWVGLFNBQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0VDLEtBREYsR0FDWVIsUUFEWixDQUNFUSxLQURGO0FBQUEsSUFFRUMsU0FGRixHQUVnQkQsS0FGaEIsQ0FFRUMsU0FGRjs7SUFJQUMsTzs7Ozs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQkwsVUFBVSxDQUFDTSxTQUFYLENBQXFCLFVBQUNDLE1BQUQ7QUFBQSxlQUFZLEtBQUksQ0FBQ0MsTUFBTCxDQUFZRCxNQUFaLENBQVo7QUFBQSxPQUFyQixDQUFuQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzJCQUVNRSxNLEVBQVE7QUFDYixVQUFJQSxNQUFKLEVBQVk7QUFBQSxZQUNGRSxtQkFERSxHQUNzQkYsTUFEdEIsQ0FDRkUsbUJBREU7O0FBR1YsWUFBSUEsbUJBQUosRUFBeUI7QUFDakIsY0FBRUMsZ0JBQUYsR0FBdUJELG1CQUF2QixDQUFFQyxnQkFBRjtBQUFBLGNBQ0FDLFNBREEsYUFDZUQsZ0JBRGY7QUFHTixlQUFLRSxRQUFMLENBQWNELFNBQWQ7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNMLFlBQU1FLHVCQUF1QixHQUFHWixRQUFoQztBQUFBLFlBQ01VLFVBQVMsYUFBTUUsdUJBQU4sU0FEZjs7QUFHQSw0QkFFRTtBQUFLLFVBQUEsU0FBUyxFQUFFRjtBQUFoQix3QkFDRSxvQkFBQyxPQUFELE9BREYsZUFFRSxvQkFBQyxRQUFELE9BRkYsZUFHRSxvQkFBQyxNQUFELE9BSEYsQ0FGRjtBQVNEO0FBQ0Y7Ozs7RUFqQ21CUixTOztBQW9DdEJXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsT0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKFwicmVhY3Rpb25cIik7XG5cbmNvbnN0IEZvb3RlciA9IHJlcXVpcmUoXCIuL2Zvb3RlclwiKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKFwiLi9hZGRUb2RvXCIpLFxuICAgICAgVG9kb0xpc3QgPSByZXF1aXJlKFwiLi90b2RvTGlzdFwiKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIiksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZShcIi4uL2Rpc3BhdGNoZXJcIik7XG5cbmNvbnN0IHsgU0hPV19BTEwgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHNldFZpc2liaWxpdHlGaWx0ZXIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7aW5pdGlhbFZpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9BcHA7XG4iXX0=
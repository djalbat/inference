"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _footer = _interopRequireDefault(require("./footer"));

var _addTodo = _interopRequireDefault(require("./addTodo"));

var _todoList = _interopRequireDefault(require("./todoList"));

var _dispatcher = _interopRequireDefault(require("../dispatcher"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Component = _reaction.React.Component;

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

      this.unsubscribe = _dispatcher["default"].subscribe(function (update) {
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
        var initialVisibilityFilter = _constants.SHOW_ALL,
            _className = "".concat(initialVisibilityFilter, " app");

        return /*#__PURE__*/_reaction.React.createElement("div", {
          className: _className
        }, /*#__PURE__*/_reaction.React.createElement(_addTodo["default"], null), /*#__PURE__*/_reaction.React.createElement(_todoList["default"], null), /*#__PURE__*/_reaction.React.createElement(_footer["default"], null));
      }
    }
  }]);

  return TodoApp;
}(Component);

exports["default"] = TodoApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9BcHAuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJkaXNwYXRjaGVyIiwic3Vic2NyaWJlIiwidXBkYXRlIiwicmVuZGVyIiwic2V0VmlzaWJpbGl0eUZpbHRlciIsInZpc2liaWxpdHlGaWx0ZXIiLCJjbGFzc05hbWUiLCJzZXRDbGFzcyIsImluaXRpYWxWaXNpYmlsaXR5RmlsdGVyIiwiU0hPV19BTEwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVhRSxPOzs7Ozs7Ozs7Ozs7O3dDQUNDO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJDLHVCQUFXQyxTQUFYLENBQXFCLFVBQUNDLE1BQUQ7QUFBQSxlQUFZLEtBQUksQ0FBQ0MsTUFBTCxDQUFZRCxNQUFaLENBQVo7QUFBQSxPQUFyQixDQUFuQjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFdBQUtILFdBQUw7QUFDRDs7OzJCQUVNRyxNLEVBQVE7QUFDYixVQUFJQSxNQUFKLEVBQVk7QUFBQSxZQUNGRSxtQkFERSxHQUNzQkYsTUFEdEIsQ0FDRkUsbUJBREU7O0FBR1YsWUFBSUEsbUJBQUosRUFBeUI7QUFDakIsY0FBRUMsZ0JBQUYsR0FBdUJELG1CQUF2QixDQUFFQyxnQkFBRjtBQUFBLGNBQ0FDLFNBREEsYUFDZUQsZ0JBRGY7QUFHTixlQUFLRSxRQUFMLENBQWNELFNBQWQ7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNMLFlBQU1FLHVCQUF1QixHQUFHQyxtQkFBaEM7QUFBQSxZQUNNSCxVQUFTLGFBQU1FLHVCQUFOLFNBRGY7O0FBR0EsNEJBRUU7QUFBSyxVQUFBLFNBQVMsRUFBRUY7QUFBaEIsd0JBQ0UsOEJBQUMsbUJBQUQsT0FERixlQUVFLDhCQUFDLG9CQUFELE9BRkYsZUFHRSw4QkFBQyxrQkFBRCxPQUhGLENBRkY7QUFTRDtBQUNGOzs7O0VBakNrQ1YsUyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHNldFZpc2liaWxpdHlGaWx0ZXIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7aW5pdGlhbFZpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
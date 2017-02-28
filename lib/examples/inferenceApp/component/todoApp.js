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
          var visibilityFilter = setVisibilityFilter.visibilityFilter,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9BcHAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlYWN0IiwicmVhY3Rpb24iLCJDb21wb25lbnQiLCJGb290ZXIiLCJBZGRUb2RvIiwiVG9kb0xpc3QiLCJjb25zdGFudHMiLCJkaXNwYXRjaGVyIiwiU0hPV19BTEwiLCJUb2RvQXBwIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJ1cGRhdGUiLCJzZXRWaXNpYmlsaXR5RmlsdGVyIiwidmlzaWJpbGl0eUZpbHRlciIsImNsYXNzTmFtZSIsInNldENsYXNzIiwiaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVNLGVBQVdBLFFBQVEsVUFBUixDQUFYO0FBQUEsSUFDRUMsS0FERixHQUNZQyxRQURaLENBQ0VELEtBREY7QUFBQSxJQUVFRSxTQUZGLEdBRWdCRixLQUZoQixDQUVFRSxTQUZGOzs7QUFJTixJQUFNQyxTQUFTSixRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01LLFVBQVVMLFFBQVEsV0FBUixDQURoQjtBQUFBLElBRU1NLFdBQVdOLFFBQVEsWUFBUixDQUZqQjtBQUFBLElBR01PLFlBQVlQLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU1RLGFBQWFSLFFBQVEsZUFBUixDQUpuQjs7QUFNQSxJQUFNUyxXQUFXRixVQUFVRSxRQUEzQjs7SUFFTUMsTzs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUJILFdBQVdJLFNBQVgsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQUEsWUFDMUNDLG1CQUQwQyxHQUNsQkQsTUFEa0IsQ0FDMUNDLG1CQUQwQzs7O0FBR2xELFlBQUlBLG1CQUFKLEVBQXlCO0FBQ2pCLGNBQUVDLGdCQUFGLEdBQXVCRCxtQkFBdkIsQ0FBRUMsZ0JBQUY7QUFBQSxjQUNBQyxTQURBLEdBQ2VELGdCQURmOzs7QUFHTixpQkFBS0UsUUFBTCxDQUFjRCxTQUFkO0FBQ0Q7QUFDRixPQVRrQixDQUFuQjtBQVVEOzs7MkNBRXNCO0FBQ3JCLFdBQUtMLFdBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTU8sMEJBQTBCVCxRQUFoQztBQUFBLFVBQ01PLFlBQWVFLHVCQUFmLFNBRE47O0FBR0EsYUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFXRixTQUFoQjtBQUNFLDRCQUFDLE9BQUQsT0FERjtBQUVFLDRCQUFDLFFBQUQsT0FGRjtBQUdFLDRCQUFDLE1BQUQ7QUFIRixPQUZGO0FBU0Q7Ozs7RUEvQm1CYixTOztBQWtDdEJnQixPQUFPQyxPQUFQLEdBQWlCVixPQUFqQiIsImZpbGUiOiJ0b2RvQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9mb290ZXInKSxcbiAgICAgIEFkZFRvZG8gPSByZXF1aXJlKCcuL2FkZFRvZG8nKSxcbiAgICAgIFRvZG9MaXN0ID0gcmVxdWlyZSgnLi90b2RvTGlzdCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyksXG4gICAgICBkaXNwYXRjaGVyID0gcmVxdWlyZSgnLi4vZGlzcGF0Y2hlcicpO1xuXG5jb25zdCBTSE9XX0FMTCA9IGNvbnN0YW50cy5TSE9XX0FMTDtcblxuY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2RvQXBwO1xuIl19
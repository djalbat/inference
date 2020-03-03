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

var constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER,
    React = reaction.React,
    Component = React.Component;

var FilterLink = /*#__PURE__*/function (_Component) {
  _inherits(FilterLink, _Component);

  function FilterLink() {
    _classCallCheck(this, FilterLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink).apply(this, arguments));
  }

  _createClass(FilterLink, [{
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
          visibilityFilter = state.visibilityFilter,
          _this$props = this.props,
          children = _this$props.children,
          filter = _this$props.filter,
          active = filter === visibilityFilter;

      if (active) {
        return React.createElement("span", null, children);
      }

      return React.createElement("a", {
        href: "#",
        className: "filter",
        onClick: function onClick(event) {
          event.preventDefault();
          var type = SET_VISIBILITY_FILTER,
              visibilityFilter = filter,
              action = {
            type: type,
            visibilityFilter: visibilityFilter
          };
          store.dispatch(action);
        }
      }, children);
    }
  }]);

  return FilterLink;
}(Component);

module.exports = FilterLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGaWx0ZXJMaW5rIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUVBLElBQU1DLFNBQVMsR0FBR0QsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBRU0sSUFBRUUscUJBQUYsR0FBNEJELFNBQTVCLENBQUVDLHFCQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZSixRQURaLENBQ0VJLEtBREY7QUFBQSxJQUVFQyxTQUZGLEdBRWdCRCxLQUZoQixDQUVFQyxTQUZGOztJQUlBQyxVOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFBQSxVQUNWQyxLQURVLEdBQ0EsS0FBS0MsT0FETCxDQUNWRCxLQURVO0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixZQUFNO0FBQ3ZDLFFBQUEsS0FBSSxDQUFDQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxLQUFLLENBQUNNLFFBQU4sRUFEUjtBQUFBLFVBRUVDLGdCQUZGLEdBRXVCRixLQUZ2QixDQUVFRSxnQkFGRjtBQUFBLHdCQUd1QixLQUFLQyxLQUg1QjtBQUFBLFVBR0VDLFFBSEYsZUFHRUEsUUFIRjtBQUFBLFVBR1lDLE1BSFosZUFHWUEsTUFIWjtBQUFBLFVBSUFDLE1BSkEsR0FJVUQsTUFBTSxLQUFLSCxnQkFKckI7O0FBTU4sVUFBSUksTUFBSixFQUFZO0FBQ1YsZUFFRSxrQ0FBT0YsUUFBUCxDQUZGO0FBS0Q7O0FBRUQsYUFFRTtBQUFHLFFBQUEsSUFBSSxFQUFDLEdBQVI7QUFDRyxRQUFBLFNBQVMsRUFBQyxRQURiO0FBRUcsUUFBQSxPQUFPLEVBQUUsaUJBQUNHLEtBQUQsRUFBVztBQUVsQkEsVUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUEsY0FBTUMsSUFBSSxHQUFHbEIscUJBQWI7QUFBQSxjQUNNVyxnQkFBZ0IsR0FBR0csTUFEekI7QUFBQSxjQUVNSyxNQUFNLEdBQUc7QUFDUEQsWUFBQUEsSUFBSSxFQUFKQSxJQURPO0FBRVBQLFlBQUFBLGdCQUFnQixFQUFoQkE7QUFGTyxXQUZmO0FBT0FQLFVBQUFBLEtBQUssQ0FBQ2dCLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBZEosU0FnQkdOLFFBaEJILENBRkY7QUFxQkQ7Ozs7RUFqRHNCWCxTOztBQW9EekJtQixNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixVQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiJdfQ==
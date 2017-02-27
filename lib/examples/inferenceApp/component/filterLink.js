'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var Link = require('./link'),
    constants = require('../constants'),
    dispatcher = require('../dispatcher');

var SHOW_ALL = constants.SHOW_ALL,
    SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

var FilterLink = function (_Component) {
  _inherits(FilterLink, _Component);

  function FilterLink() {
    _classCallCheck(this, FilterLink);

    return _possibleConstructorReturn(this, (FilterLink.__proto__ || Object.getPrototypeOf(FilterLink)).apply(this, arguments));
  }

  _createClass(FilterLink, [{
    key: 'getInitialState',
    value: function getInitialState() {
      var visibilityFilter = SHOW_ALL,
          initialState = {
        visibilityFilter: visibilityFilter
      };

      return initialState;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = dispatcher.subscribe(function (update) {
        var setVisibilityFilter = update.setVisibilityFilter;


        if (setVisibilityFilter) {
          var visibilityFilter = update.visibilityFilter;


          _this2.state = Object.assign(_this2.state, {
            visibilityFilter: visibilityFilter
          });

          _this2.forceUpdate();
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
      var visibilityFilter = this.state.visibilityFilter,
          _props = this.props,
          children = _props.children,
          filter = _props.filter,
          active = filter === visibilityFilter;


      return React.createElement(
        Link,
        { active: active,
          clickHandler: function clickHandler() {
            var type = SET_VISIBILITY_FILTER,
                visibilityFilter = filter,
                action = {
              type: type,
              visibilityFilter: visibilityFilter
            };

            dispatcher.dispatch(action);
          }
        },
        children
      );
    }
  }]);

  return FilterLink;
}(Component);

module.exports = FilterLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlYWN0IiwicmVhY3Rpb24iLCJDb21wb25lbnQiLCJMaW5rIiwiY29uc3RhbnRzIiwiZGlzcGF0Y2hlciIsIlNIT1dfQUxMIiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwiRmlsdGVyTGluayIsInZpc2liaWxpdHlGaWx0ZXIiLCJpbml0aWFsU3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInVwZGF0ZSIsInNldFZpc2liaWxpdHlGaWx0ZXIiLCJzdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImZvcmNlVXBkYXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLE9BQU9KLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUssWUFBWUwsUUFBUSxjQUFSLENBRGxCO0FBQUEsSUFFTU0sYUFBYU4sUUFBUSxlQUFSLENBRm5COztBQUlBLElBQU1PLFdBQVdGLFVBQVVFLFFBQTNCO0FBQUEsSUFDTUMsd0JBQXdCSCxVQUFVRyxxQkFEeEM7O0lBR01DLFU7Ozs7Ozs7Ozs7O3NDQUNjO0FBQ2hCLFVBQU1DLG1CQUFtQkgsUUFBekI7QUFBQSxVQUNNSSxlQUFlO0FBQ2JELDBCQUFrQkE7QUFETCxPQURyQjs7QUFLQSxhQUFPQyxZQUFQO0FBQ0Q7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsV0FBS0MsV0FBTCxHQUFtQk4sV0FBV08sU0FBWCxDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFBQSxZQUMxQ0MsbUJBRDBDLEdBQ2xCRCxNQURrQixDQUMxQ0MsbUJBRDBDOzs7QUFHbEQsWUFBSUEsbUJBQUosRUFBeUI7QUFBQSxjQUNmTCxnQkFEZSxHQUNNSSxNQUROLENBQ2ZKLGdCQURlOzs7QUFHdkIsaUJBQUtNLEtBQUwsR0FBYUMsT0FBT0MsTUFBUCxDQUFjLE9BQUtGLEtBQW5CLEVBQTBCO0FBQ3JDTiw4QkFBa0JBO0FBRG1CLFdBQTFCLENBQWI7O0FBSUEsaUJBQUtTLFdBQUw7QUFDRDtBQUNGLE9BWmtCLENBQW5CO0FBYUQ7OzsyQ0FFc0I7QUFDckIsV0FBS1AsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixnQkFBRixHQUF1QixLQUFLTSxLQUE1QixDQUFFTixnQkFBRjtBQUFBLG1CQUN1QixLQUFLVSxLQUQ1QjtBQUFBLFVBQ0VDLFFBREYsVUFDRUEsUUFERjtBQUFBLFVBQ1lDLE1BRFosVUFDWUEsTUFEWjtBQUFBLFVBRUFDLE1BRkEsR0FFVUQsV0FBV1osZ0JBRnJCOzs7QUFJTixhQUVFO0FBQUMsWUFBRDtBQUFBLFVBQU0sUUFBUWEsTUFBZDtBQUNNLHdCQUFjLHdCQUFNO0FBQ2xCLGdCQUFNQyxPQUFPaEIscUJBQWI7QUFBQSxnQkFDTUUsbUJBQW1CWSxNQUR6QjtBQUFBLGdCQUVNRyxTQUFTO0FBQ1BELG9CQUFNQSxJQURDO0FBRVBkLGdDQUFrQkE7QUFGWCxhQUZmOztBQU9BSix1QkFBV29CLFFBQVgsQ0FBb0JELE1BQXBCO0FBQ0Q7QUFWUDtBQVlHSjtBQVpILE9BRkY7QUFrQkQ7Ozs7RUFyRHNCbEIsUzs7QUF3RHpCd0IsT0FBT0MsT0FBUCxHQUFpQm5CLFVBQWpCIiwiZmlsZSI6ImZpbHRlckxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jb25zdCBMaW5rID0gcmVxdWlyZSgnLi9saW5rJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKSxcbiAgICAgIGRpc3BhdGNoZXIgPSByZXF1aXJlKCcuLi9kaXNwYXRjaGVyJyk7XG5cbmNvbnN0IFNIT1dfQUxMID0gY29uc3RhbnRzLlNIT1dfQUxMLFxuICAgICAgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gY29uc3RhbnRzLlNFVF9WSVNJQklMSVRZX0ZJTFRFUjtcblxuY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gU0hPV19BTEwsXG4gICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB7XG4gICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPExpbmsgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIl19
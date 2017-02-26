'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var Link = require('./link'),
    constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER;

var FilterLink = function (_Component) {
  _inherits(FilterLink, _Component);

  function FilterLink() {
    _classCallCheck(this, FilterLink);

    return _possibleConstructorReturn(this, (FilterLink.__proto__ || Object.getPrototypeOf(FilterLink)).apply(this, arguments));
  }

  _createClass(FilterLink, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        _this2.forceUpdate();
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
      var store = this.context.store,
          state = store.getState(),
          visibilityFilter = state.visibilityFilter,
          _props = this.props,
          children = _props.children,
          filter = _props.filter,
          active = filter === visibilityFilter;


      return React.createElement(
        Link,
        { active: active,
          onClick: function onClick() {
            var type = SET_VISIBILITY_FILTER,
                action = {
              type: type,
              filter: filter
            };

            store.dispatch(action);
          }
        },
        children
      );
    }
  }]);

  return FilterLink;
}(Component);

module.exports = FilterLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkNvbXBvbmVudCIsIkxpbmsiLCJjb25zdGFudHMiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJGaWx0ZXJMaW5rIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLE9BQU9KLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUssWUFBWUwsUUFBUSxjQUFSLENBRGxCOztBQUdBLElBQU1NLHdCQUF3QkQsVUFBVUMscUJBQXhDOztJQUVNQyxVOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFBQSxVQUNWQyxLQURVLEdBQ0EsS0FBS0MsT0FETCxDQUNWRCxLQURVOzs7QUFHbEIsV0FBS0UsV0FBTCxHQUFtQkYsTUFBTUcsU0FBTixDQUFnQixZQUFNO0FBQ3ZDLGVBQUtDLFdBQUw7QUFDRCxPQUZrQixDQUFuQjtBQUdEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUYsS0FBRixHQUFZLEtBQUtDLE9BQWpCLENBQUVELEtBQUY7QUFBQSxVQUNBSyxLQURBLEdBQ1FMLE1BQU1NLFFBQU4sRUFEUjtBQUFBLFVBRUVDLGdCQUZGLEdBRXVCRixLQUZ2QixDQUVFRSxnQkFGRjtBQUFBLG1CQUd1QixLQUFLQyxLQUg1QjtBQUFBLFVBR0VDLFFBSEYsVUFHRUEsUUFIRjtBQUFBLFVBR1lDLE1BSFosVUFHWUEsTUFIWjtBQUFBLFVBSUFDLE1BSkEsR0FJVUQsV0FBV0gsZ0JBSnJCOzs7QUFNTixhQUVFO0FBQUMsWUFBRDtBQUFBLFVBQU0sUUFBUUksTUFBZDtBQUNNLG1CQUFTLG1CQUFNO0FBQ2IsZ0JBQU1DLE9BQU9kLHFCQUFiO0FBQUEsZ0JBQ01lLFNBQVM7QUFDUEQsb0JBQU1BLElBREM7QUFFUEYsc0JBQVFBO0FBRkQsYUFEZjs7QUFNQVYsa0JBQU1jLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBVFA7QUFXR0o7QUFYSCxPQUZGO0FBaUJEOzs7O0VBckNzQmQsUzs7QUF3Q3pCb0IsT0FBT0MsT0FBUCxHQUFpQmpCLFVBQWpCIiwiZmlsZSI6ImZpbHRlckxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jb25zdCBMaW5rID0gcmVxdWlyZSgnLi9saW5rJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxuY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gY29uc3RhbnRzLlNFVF9WSVNJQklMSVRZX0ZJTFRFUjtcblxuY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmUgPSAoZmlsdGVyID09PSB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGZpbHRlclxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiJdfQ==
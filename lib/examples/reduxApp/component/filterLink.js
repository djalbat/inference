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
          clickHandler: function clickHandler() {
            var type = SET_VISIBILITY_FILTER,
                visibilityFilter = filter,
                action = {
              type: type,
              visibilityFilter: visibilityFilter
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkNvbXBvbmVudCIsIkxpbmsiLCJjb25zdGFudHMiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJGaWx0ZXJMaW5rIiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImZpbHRlciIsImFjdGl2ZSIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLE9BQU9KLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUssWUFBWUwsUUFBUSxjQUFSLENBRGxCOztBQUdBLElBQU1NLHdCQUF3QkQsVUFBVUMscUJBQXhDOztJQUVNQyxVOzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQTs7QUFBQSxVQUNWQyxLQURVLEdBQ0EsS0FBS0MsT0FETCxDQUNWRCxLQURVOzs7QUFHbEIsV0FBS0UsV0FBTCxHQUFtQkYsTUFBTUcsU0FBTixDQUFnQixZQUFNO0FBQ3ZDLGVBQUtDLFdBQUw7QUFDRCxPQUZrQixDQUFuQjtBQUdEOzs7MkNBRXNCO0FBQ3JCLFdBQUtGLFdBQUw7QUFDRDs7OzZCQUVRO0FBQ0QsVUFBRUYsS0FBRixHQUFZLEtBQUtDLE9BQWpCLENBQUVELEtBQUY7QUFBQSxVQUNBSyxLQURBLEdBQ1FMLE1BQU1NLFFBQU4sRUFEUjtBQUFBLFVBRUVDLGdCQUZGLEdBRXVCRixLQUZ2QixDQUVFRSxnQkFGRjtBQUFBLG1CQUd1QixLQUFLQyxLQUg1QjtBQUFBLFVBR0VDLFFBSEYsVUFHRUEsUUFIRjtBQUFBLFVBR1lDLE1BSFosVUFHWUEsTUFIWjtBQUFBLFVBSUFDLE1BSkEsR0FJVUQsV0FBV0gsZ0JBSnJCOzs7QUFNTixhQUVFO0FBQUMsWUFBRDtBQUFBLFVBQU0sUUFBUUksTUFBZDtBQUNNLHdCQUFjLHdCQUFNO0FBQ2xCLGdCQUFNQyxPQUFPZCxxQkFBYjtBQUFBLGdCQUNNUyxtQkFBbUJHLE1BRHpCO0FBQUEsZ0JBRU1HLFNBQVM7QUFDUEQsb0JBQU1BLElBREM7QUFFUEwsZ0NBQWtCQTtBQUZYLGFBRmY7O0FBT0FQLGtCQUFNYyxRQUFOLENBQWVELE1BQWY7QUFDRDtBQVZQO0FBWUdKO0FBWkgsT0FGRjtBQWtCRDs7OztFQXRDc0JkLFM7O0FBeUN6Qm9CLE9BQU9DLE9BQVAsR0FBaUJqQixVQUFqQiIsImZpbGUiOiJmaWx0ZXJMaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY29uc3QgTGluayA9IHJlcXVpcmUoJy4vbGluaycpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IGNvbnN0YW50cy5TRVRfVklTSUJJTElUWV9GSUxURVI7XG5cbmNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8TGluayBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJMaW5rO1xuIl19
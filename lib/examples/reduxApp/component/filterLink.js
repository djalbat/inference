'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;


var constants = require('../constants');

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


      if (active) {
        return React.createElement(
          'span',
          null,
          children
        );
      }

      return React.createElement(
        'a',
        { href: '#',
          className: 'filter',
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
        },
        children
      );
    }
  }]);

  return FilterLink;
}(Component);

module.exports = FilterLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkNvbXBvbmVudCIsImNvbnN0YW50cyIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsIkZpbHRlckxpbmsiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInZpc2liaWxpdHlGaWx0ZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYWN0aXZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sZUFBV0EsUUFBUSxVQUFSLENBQVg7QUFBQSxJQUNFQyxLQURGLEdBQ1lDLFFBRFosQ0FDRUQsS0FERjtBQUFBLElBRUVFLFNBRkYsR0FFZ0JGLEtBRmhCLENBRUVFLFNBRkY7OztBQUlOLElBQU1DLFlBQVlKLFFBQVEsY0FBUixDQUFsQjs7QUFFQSxJQUFNSyx3QkFBd0JELFVBQVVDLHFCQUF4Qzs7SUFFTUMsVTs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQUE7O0FBQUEsVUFDVkMsS0FEVSxHQUNBLEtBQUtDLE9BREwsQ0FDVkQsS0FEVTs7O0FBR2xCLFdBQUtFLFdBQUwsR0FBbUJGLE1BQU1HLFNBQU4sQ0FBZ0IsWUFBTTtBQUN2QyxlQUFLQyxXQUFMO0FBQ0QsT0FGa0IsQ0FBbkI7QUFHRDs7OzJDQUVzQjtBQUNyQixXQUFLRixXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNELFVBQUVGLEtBQUYsR0FBWSxLQUFLQyxPQUFqQixDQUFFRCxLQUFGO0FBQUEsVUFDQUssS0FEQSxHQUNRTCxNQUFNTSxRQUFOLEVBRFI7QUFBQSxVQUVFQyxnQkFGRixHQUV1QkYsS0FGdkIsQ0FFRUUsZ0JBRkY7QUFBQSxtQkFHdUIsS0FBS0MsS0FINUI7QUFBQSxVQUdFQyxRQUhGLFVBR0VBLFFBSEY7QUFBQSxVQUdZQyxNQUhaLFVBR1lBLE1BSFo7QUFBQSxVQUlBQyxNQUpBLEdBSVVELFdBQVdILGdCQUpyQjs7O0FBTU4sVUFBSUksTUFBSixFQUFZO0FBQ1YsZUFFRTtBQUFBO0FBQUE7QUFBT0Y7QUFBUCxTQUZGO0FBS0Q7O0FBRUQsYUFFRTtBQUFBO0FBQUEsVUFBRyxNQUFLLEdBQVI7QUFDRyxxQkFBVSxRQURiO0FBRUcsbUJBQVMsaUJBQUNHLEtBQUQsRUFBVzs7QUFFbEJBLGtCQUFNQyxjQUFOOztBQUVBLGdCQUFNQyxPQUFPaEIscUJBQWI7QUFBQSxnQkFDTVMsbUJBQW1CRyxNQUR6QjtBQUFBLGdCQUVNSyxTQUFTO0FBQ1BELG9CQUFNQSxJQURDO0FBRVBQLGdDQUFrQkE7QUFGWCxhQUZmOztBQU9BUCxrQkFBTWdCLFFBQU4sQ0FBZUQsTUFBZjtBQUNEO0FBZEo7QUFnQkdOO0FBaEJILE9BRkY7QUFxQkQ7Ozs7RUFqRHNCYixTOztBQW9EekJxQixPQUFPQyxPQUFQLEdBQWlCbkIsVUFBakIiLCJmaWxlIjoiZmlsdGVyTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSBjb25zdGFudHMuU0VUX1ZJU0lCSUxJVFlfRklMVEVSO1xuXG5jbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyTGluaztcbiJdfQ==
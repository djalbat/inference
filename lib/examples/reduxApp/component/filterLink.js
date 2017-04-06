'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var constants = require('../constants');

var SET_VISIBILITY_FILTER = constants.SET_VISIBILITY_FILTER,
    React = reaction.React,
    Component = React.Component;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJjb25zdGFudHMiLCJTRVRfVklTSUJJTElUWV9GSUxURVIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZpbHRlckxpbmsiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwic3RhdGUiLCJnZXRTdGF0ZSIsInZpc2liaWxpdHlGaWx0ZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYWN0aXZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInR5cGUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFlBQVlELFFBQVEsY0FBUixDQUFsQjs7QUFFTSxJQUFFRSxxQkFBRixHQUE0QkQsU0FBNUIsQ0FBRUMscUJBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lKLFFBRFosQ0FDRUksS0FERjtBQUFBLElBRUVDLFNBRkYsR0FFZ0JELEtBRmhCLENBRUVDLFNBRkY7O0lBSUFDLFU7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUFBOztBQUFBLFVBQ1ZDLEtBRFUsR0FDQSxLQUFLQyxPQURMLENBQ1ZELEtBRFU7OztBQUdsQixXQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxTQUFOLENBQWdCLFlBQU07QUFDdkMsZUFBS0MsV0FBTDtBQUNELE9BRmtCLENBQW5CO0FBR0Q7OzsyQ0FFc0I7QUFDckIsV0FBS0YsV0FBTDtBQUNEOzs7NkJBRVE7QUFDRCxVQUFFRixLQUFGLEdBQVksS0FBS0MsT0FBakIsQ0FBRUQsS0FBRjtBQUFBLFVBQ0FLLEtBREEsR0FDUUwsTUFBTU0sUUFBTixFQURSO0FBQUEsVUFFRUMsZ0JBRkYsR0FFdUJGLEtBRnZCLENBRUVFLGdCQUZGO0FBQUEsbUJBR3VCLEtBQUtDLEtBSDVCO0FBQUEsVUFHRUMsUUFIRixVQUdFQSxRQUhGO0FBQUEsVUFHWUMsTUFIWixVQUdZQSxNQUhaO0FBQUEsVUFJQUMsTUFKQSxHQUlVRCxXQUFXSCxnQkFKckI7OztBQU1OLFVBQUlJLE1BQUosRUFBWTtBQUNWLGVBRUU7QUFBQTtBQUFBO0FBQU9GO0FBQVAsU0FGRjtBQUtEOztBQUVELGFBRUU7QUFBQTtBQUFBLFVBQUcsTUFBSyxHQUFSO0FBQ0cscUJBQVUsUUFEYjtBQUVHLG1CQUFTLGlCQUFDRyxLQUFELEVBQVc7O0FBRWxCQSxrQkFBTUMsY0FBTjs7QUFFQSxnQkFBTUMsT0FBT2xCLHFCQUFiO0FBQUEsZ0JBQ01XLG1CQUFtQkcsTUFEekI7QUFBQSxnQkFFTUssU0FBUztBQUNQRCxvQkFBTUEsSUFEQztBQUVQUCxnQ0FBa0JBO0FBRlgsYUFGZjs7QUFPQVAsa0JBQU1nQixRQUFOLENBQWVELE1BQWY7QUFDRDtBQWRKO0FBZ0JHTjtBQWhCSCxPQUZGO0FBcUJEOzs7O0VBakRzQlgsUzs7QUFvRHpCbUIsT0FBT0MsT0FBUCxHQUFpQm5CLFVBQWpCIiwiZmlsZSI6ImZpbHRlckxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmUgPSAoZmlsdGVyID09PSB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlckxpbms7XG4iXX0=
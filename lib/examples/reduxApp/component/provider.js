'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var React = reaction.React,
    Component = React.Component;

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext(context) {
      var store = this.props.store,
          childContext = {
        store: store
      };


      return childContext;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children;
    }
  }]);

  return Provider;
}(Component);

module.exports = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm92aWRlciIsImNvbnRleHQiLCJzdG9yZSIsInByb3BzIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFTSxJQUFFQyxLQUFGLEdBQVlGLFFBQVosQ0FBRUUsS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JELEtBRGhCLENBQ0VDLFNBREY7O0lBR0FDLFE7Ozs7Ozs7Ozs7O29DQUNZQyxPLEVBQVM7QUFDakIsVUFBRUMsS0FBRixHQUFZLEtBQUtDLEtBQWpCLENBQUVELEtBQUY7QUFBQSxVQUNBRSxZQURBLEdBQ2U7QUFDYkY7QUFEYSxPQURmOzs7QUFLTixhQUFPRSxZQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0NDLFFBREQsR0FDYyxLQUFLRixLQURuQixDQUNDRSxRQUREOzs7QUFHUCxhQUFPQSxRQUFQO0FBQ0Q7Ozs7RUFkb0JOLFM7O0FBaUJ2Qk8sT0FBT0MsT0FBUCxHQUFpQlAsUUFBakIiLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3ZpZGVyO1xuIl19
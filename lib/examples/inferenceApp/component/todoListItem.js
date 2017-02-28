'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    React = reaction.React,
    Component = React.Component;

var TodoListItem = function (_Component) {
  _inherits(TodoListItem, _Component);

  function TodoListItem() {
    _classCallCheck(this, TodoListItem);

    return _possibleConstructorReturn(this, (TodoListItem.__proto__ || Object.getPrototypeOf(TodoListItem)).apply(this, arguments));
  }

  _createClass(TodoListItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          text = _props.text,
          completed = _props.completed,
          className = completed ? 'completed' : '';


      return React.createElement(
        'li',
        { className: className,
          onClick: function onClick() {
            _this2.toggleClass('completed');
          } },
        text
      );
    }
  }]);

  return TodoListItem;
}(Component);

module.exports = TodoListItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkNvbXBvbmVudCIsIlRvZG9MaXN0SXRlbSIsInByb3BzIiwidGV4dCIsImNvbXBsZXRlZCIsImNsYXNzTmFtZSIsInRvZ2dsZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGO0FBQUEsSUFFRUUsU0FGRixHQUVnQkYsS0FGaEIsQ0FFRUUsU0FGRjs7SUFJQUMsWTs7Ozs7Ozs7Ozs7NkJBQ007QUFBQTs7QUFBQSxtQkFDb0IsS0FBS0MsS0FEekI7QUFBQSxVQUNBQyxJQURBLFVBQ0FBLElBREE7QUFBQSxVQUNNQyxTQUROLFVBQ01BLFNBRE47QUFBQSxVQUVGQyxTQUZFLEdBRVVELFlBQ0UsV0FERixHQUVJLEVBSmQ7OztBQU1SLGFBRUU7QUFBQTtBQUFBLFVBQUksV0FBV0MsU0FBZjtBQUNJLG1CQUFTLG1CQUFNO0FBQ2IsbUJBQUtDLFdBQUwsQ0FBaUIsV0FBakI7QUFDRCxXQUhMO0FBSUdIO0FBSkgsT0FGRjtBQVNEOzs7O0VBaEJ3QkgsUzs7QUFtQjNCTyxPQUFPQyxPQUFQLEdBQWlCUCxZQUFqQiIsImZpbGUiOiJ0b2RvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCwgY29tcGxldGVkIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29tcGxldGVkJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICcnO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgIH19PlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRvZG9MaXN0SXRlbTtcbiJdfQ==
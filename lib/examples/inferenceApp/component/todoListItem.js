'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var React = reaction.React,
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

      var text = this.props.text,
          className = '';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlRvZG9MaXN0SXRlbSIsInRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRvZ2dsZUNsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7O0FBRU0sSUFBRUMsS0FBRixHQUFZRixRQUFaLENBQUVFLEtBQUY7QUFBQSxJQUNFQyxTQURGLEdBQ2dCRCxLQURoQixDQUNFQyxTQURGOztJQUdBQyxZOzs7Ozs7Ozs7Ozs2QkFDTTtBQUFBOztBQUNGLFVBQUVDLElBQUYsR0FBVyxLQUFLQyxLQUFoQixDQUFFRCxJQUFGO0FBQUEsVUFDQUUsU0FEQSxHQUNZLEVBRFo7OztBQUdOLGFBRUU7QUFBQTtBQUFBLFVBQUksV0FBV0EsU0FBZjtBQUNJLG1CQUFTLG1CQUFNOztBQUViLG1CQUFLQyxXQUFMLENBQWlCLFdBQWpCO0FBRUQsV0FMTDtBQU1HSDtBQU5ILE9BRkY7QUFXRDs7OztFQWhCd0JGLFM7O0FBbUIzQk0sT0FBT0MsT0FBUCxHQUFpQk4sWUFBakIiLCJmaWxlIjoidG9kb0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSAnJztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuXG4gICAgICAgICAgfX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVG9kb0xpc3RJdGVtO1xuIl19
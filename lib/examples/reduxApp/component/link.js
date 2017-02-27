'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var Link = function Link(props) {
  var active = props.active,
      clickHandler = props.clickHandler;


  if (active) {
    return React.createElement(
      'span',
      null,
      props.children
    );
  }

  return React.createElement(
    'a',
    { href: '#',
      onClick: function onClick(event) {

        event.preventDefault();

        clickHandler();
      }
    },
    props.children
  );
};

module.exports = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkxpbmsiLCJwcm9wcyIsImFjdGl2ZSIsImNsaWNrSGFuZGxlciIsImNoaWxkcmVuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVNLGVBQVdBLFFBQVEsVUFBUixDQUFYO0FBQUEsSUFDRUMsS0FERixHQUNZQyxRQURaLENBQ0VELEtBREY7OztBQUdOLElBQU1FLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNkQyxNQURjLEdBQ1dELEtBRFgsQ0FDZEMsTUFEYztBQUFBLE1BQ05DLFlBRE0sR0FDV0YsS0FEWCxDQUNORSxZQURNOzs7QUFHdEIsTUFBSUQsTUFBSixFQUFZO0FBQ1YsV0FFRTtBQUFBO0FBQUE7QUFBT0QsWUFBTUc7QUFBYixLQUZGO0FBS0Q7O0FBRUQsU0FFRTtBQUFBO0FBQUEsTUFBRyxNQUFLLEdBQVI7QUFDRyxlQUFTLGlCQUFDQyxLQUFELEVBQVc7O0FBRWxCQSxjQUFNQyxjQUFOOztBQUVBSDtBQUVEO0FBUEo7QUFTR0YsVUFBTUc7QUFUVCxHQUZGO0FBZUQsQ0ExQkQ7O0FBNEJBRyxPQUFPQyxPQUFQLEdBQWlCUixJQUFqQiIsImZpbGUiOiJsaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgY2xpY2tIYW5kbGVyIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cblxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGEgaHJlZj0nIydcbiAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgY2xpY2tIYW5kbGVyKCk7XG5cbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiJdfQ==
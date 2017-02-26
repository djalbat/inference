'use strict';

var reaction = require('reaction'),
    React = reaction.React;


var Link = function Link(props) {
  var active = props.active;


  if (active) {
    return React.createElement(
      'span',
      null,
      props.children
    );
  }

  var _onClick = props.onClick;


  return React.createElement(
    'a',
    { href: '#',
      onClick: function onClick(event) {

        event.preventDefault();

        _onClick();
      }
    },
    props.children
  );
};

module.exports = Link;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC9jb21wb25lbnQvbGluay5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIkxpbmsiLCJwcm9wcyIsImFjdGl2ZSIsImNoaWxkcmVuIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGOzs7QUFHTixJQUFNRSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsTUFEYyxHQUNIRCxLQURHLENBQ2RDLE1BRGM7OztBQUd0QixNQUFJQSxNQUFKLEVBQVk7QUFDVixXQUVFO0FBQUE7QUFBQTtBQUFPRCxZQUFNRTtBQUFiLEtBRkY7QUFLRDs7QUFUcUIsTUFXZEMsUUFYYyxHQVdGSCxLQVhFLENBV2RHLE9BWGM7OztBQWF0QixTQUVFO0FBQUE7QUFBQSxNQUFHLE1BQUssR0FBUjtBQUNHLGVBQVMsaUJBQUNDLEtBQUQsRUFBVzs7QUFFbEJBLGNBQU1DLGNBQU47O0FBRUFGO0FBRUQ7QUFQSjtBQVNHSCxVQUFNRTtBQVRULEdBRkY7QUFlRCxDQTVCRDs7QUE4QkFJLE9BQU9DLE9BQVAsR0FBaUJSLElBQWpCIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHsgUmVhY3QgfSA9IHJlYWN0aW9uO1xuXG5jb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj5cblxuICAgICk7XG4gIH1cblxuICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8YSBocmVmPScjJ1xuICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICBvbkNsaWNrKCk7XG5cbiAgICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluaztcbiJdfQ==
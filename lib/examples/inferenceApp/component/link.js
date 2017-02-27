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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2xpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlJlYWN0IiwicmVhY3Rpb24iLCJMaW5rIiwicHJvcHMiLCJhY3RpdmUiLCJjbGlja0hhbmRsZXIiLCJjaGlsZHJlbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFTSxlQUFXQSxRQUFRLFVBQVIsQ0FBWDtBQUFBLElBQ0VDLEtBREYsR0FDWUMsUUFEWixDQUNFRCxLQURGOzs7QUFHTixJQUFNRSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDZEMsTUFEYyxHQUNXRCxLQURYLENBQ2RDLE1BRGM7QUFBQSxNQUNOQyxZQURNLEdBQ1dGLEtBRFgsQ0FDTkUsWUFETTs7O0FBR3RCLE1BQUlELE1BQUosRUFBWTtBQUNWLFdBRUU7QUFBQTtBQUFBO0FBQU9ELFlBQU1HO0FBQWIsS0FGRjtBQUtEOztBQUVELFNBRUU7QUFBQTtBQUFBLE1BQUcsTUFBSyxHQUFSO0FBQ0csZUFBUyxpQkFBQ0MsS0FBRCxFQUFXOztBQUVsQkEsY0FBTUMsY0FBTjs7QUFFQUg7QUFFRDtBQVBKO0FBU0dGLFVBQU1HO0FBVFQsR0FGRjtBQWVELENBMUJEOztBQTRCQUcsT0FBT0MsT0FBUCxHQUFpQlIsSUFBakIiLCJmaWxlIjoibGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgICAgeyBSZWFjdCB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUsIGNsaWNrSGFuZGxlciB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+XG5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxhIGhyZWY9JyMnXG4gICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgIGNsaWNrSGFuZGxlcigpO1xuXG4gICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpbms7XG4iXX0=
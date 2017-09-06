'use strict';

var reaction = require('reaction');

var Redux = require('./reduxApp/redux'),
    reducer = require('./reduxApp/reducer'),
    TodoApp = require('./reduxApp/component/todoApp'),
    Provider = require('./reduxApp/component/provider');

var React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var reduxApp = function reduxApp() {
  var createStore = Redux.createStore,
      store = createStore(reducer),
      rootDOMElement = document.getElementById('root');


  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJSZWR1eCIsInJlZHVjZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJSZWFjdCIsIlJlYWN0RE9NIiwicmVkdXhBcHAiLCJjcmVhdGVTdG9yZSIsInN0b3JlIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFFBQVFELFFBQVEsa0JBQVIsQ0FBZDtBQUFBLElBQ01FLFVBQVVGLFFBQVEsb0JBQVIsQ0FEaEI7QUFBQSxJQUVNRyxVQUFVSCxRQUFRLDhCQUFSLENBRmhCO0FBQUEsSUFHTUksV0FBV0osUUFBUSwrQkFBUixDQUhqQjs7SUFLUUssSyxHQUFvQk4sUSxDQUFwQk0sSztJQUFPQyxRLEdBQWFQLFEsQ0FBYk8sUTs7O0FBRWYsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDZixNQUFFQyxXQUFGLEdBQWtCUCxLQUFsQixDQUFFTyxXQUFGO0FBQUEsTUFDQUMsS0FEQSxHQUNRRCxZQUFZTixPQUFaLENBRFI7QUFBQSxNQUVBUSxjQUZBLEdBRWlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRmpCOzs7QUFJTk4sV0FBU08sTUFBVCxDQUVFO0FBQUMsWUFBRDtBQUFBLE1BQVUsT0FBT0osS0FBakI7QUFDRSx3QkFBQyxPQUFEO0FBREYsR0FGRixFQUtFQyxjQUxGO0FBUUQsQ0FiRDs7QUFlQUksT0FBT0MsT0FBUCxHQUFpQlIsUUFBakIiLCJmaWxlIjoicmVkdXhBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4QXBwL3JlZHV4JyksXG4gICAgICByZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9yZWR1Y2VyJyksXG4gICAgICBUb2RvQXBwID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcCcpLFxuICAgICAgUHJvdmlkZXIgPSByZXF1aXJlKCcuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlcicpO1xuXG5jb25zdCB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSBSZWR1eCxcbiAgICAgICAgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19
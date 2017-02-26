'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    React = reaction.React,
    ReactDOM = reaction.ReactDOM;


var Redux = require('./redux'),
    reducer = require('./reduxApp/reducer'),
    TodoApp = require('./reduxApp/component/todoApp'),
    Provider = require('./reduxApp/component/provider');

var ReduxApp = function () {
  function ReduxApp() {
    _classCallCheck(this, ReduxApp);
  }

  _createClass(ReduxApp, null, [{
    key: 'run',
    value: function run() {
      var createStore = Redux.createStore,
          store = createStore(reducer),
          rootDOMElement = document.getElementById('root');


      ReactDOM.render(React.createElement(
        Provider,
        { store: store },
        React.createElement(TodoApp, null)
      ), rootDOMElement);
    }
  }]);

  return ReduxApp;
}();

module.exports = ReduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiUmVhY3QiLCJyZWFjdGlvbiIsIlJlYWN0RE9NIiwiUmVkdXgiLCJyZWR1Y2VyIiwiVG9kb0FwcCIsIlByb3ZpZGVyIiwiUmVkdXhBcHAiLCJjcmVhdGVTdG9yZSIsInN0b3JlIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVNLGVBQVdBLFFBQVEsVUFBUixDQUFYO0FBQUEsSUFDRUMsS0FERixHQUNzQkMsUUFEdEIsQ0FDRUQsS0FERjtBQUFBLElBQ1NFLFFBRFQsR0FDc0JELFFBRHRCLENBQ1NDLFFBRFQ7OztBQUdOLElBQU1DLFFBQVFKLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUssVUFBVUwsUUFBUSxvQkFBUixDQURoQjtBQUFBLElBRU1NLFVBQVVOLFFBQVEsOEJBQVIsQ0FGaEI7QUFBQSxJQUdNTyxXQUFXUCxRQUFRLCtCQUFSLENBSGpCOztJQUtNUSxROzs7Ozs7OzBCQUNTO0FBQ0wsVUFBRUMsV0FBRixHQUFrQkwsS0FBbEIsQ0FBRUssV0FBRjtBQUFBLFVBQ0FDLEtBREEsR0FDUUQsWUFBWUosT0FBWixDQURSO0FBQUEsVUFFQU0sY0FGQSxHQUVpQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZqQjs7O0FBSU5WLGVBQVNXLE1BQVQsQ0FFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxPQUFPSixLQUFqQjtBQUNFLDRCQUFDLE9BQUQ7QUFERixPQUZGLEVBS0VDLGNBTEY7QUFRRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJSLFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgICB7IFJlYWN0LCBSZWFjdERPTSB9ID0gcmVhY3Rpb247XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgcmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvcmVkdWNlcicpLFxuICAgICAgVG9kb0FwcCA9IHJlcXVpcmUoJy4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHAnKSxcbiAgICAgIFByb3ZpZGVyID0gcmVxdWlyZSgnLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXInKTtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4LFxuICAgICAgICAgIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eEFwcDtcbiJdfQ==
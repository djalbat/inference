'use strict';

var reaction = require('reaction');

var dispatcher = require('../dispatcher'),
    constants = require('../constants');

var ADD_TODO = constants.ADD_TODO,
    React = reaction.React;


var inputDOMElement = void 0;

var AddTodo = function AddTodo() {
  return React.createElement(
    'div',
    null,
    React.createElement('input', { ref: function ref(domElement) {
        inputDOMElement = domElement;
      }
    }),
    React.createElement(
      'button',
      { onClick: function onClick() {
          var type = ADD_TODO,
              text = inputDOMElement.value,
              ///
          action = {
            type: type,
            text: text
          };

          dispatcher.dispatch(action);

          inputDOMElement.value = '';
        }
      },
      'Add todo'
    )
  );
};

module.exports = AddTodo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwiZGlzcGF0Y2hlciIsImNvbnN0YW50cyIsIkFERF9UT0RPIiwiUmVhY3QiLCJpbnB1dERPTUVsZW1lbnQiLCJBZGRUb2RvIiwiZG9tRWxlbWVudCIsInR5cGUiLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxZQUFZRixRQUFRLGNBQVIsQ0FEbEI7O0FBR00sSUFBRUcsUUFBRixHQUFlRCxTQUFmLENBQUVDLFFBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLFFBRFosQ0FDRUssS0FERjs7O0FBR04sSUFBSUMsd0JBQUo7O0FBRUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEIsU0FFSTtBQUFBO0FBQUE7QUFDRSxtQ0FBTyxLQUFLLGFBQUNDLFVBQUQsRUFBZ0I7QUFDMUJGLDBCQUFrQkUsVUFBbEI7QUFDRDtBQUZELE1BREY7QUFLRTtBQUFBO0FBQUEsUUFBUSxTQUFTLG1CQUFNO0FBQ3JCLGNBQU1DLE9BQU9MLFFBQWI7QUFBQSxjQUNNTSxPQUFPSixnQkFBZ0JLLEtBRDdCO0FBQUEsY0FDcUM7QUFDL0JDLG1CQUFTO0FBQ1BILGtCQUFNQSxJQURDO0FBRVBDLGtCQUFNQTtBQUZDLFdBRmY7O0FBT0FSLHFCQUFXVyxRQUFYLENBQW9CRCxNQUFwQjs7QUFFQU4sMEJBQWdCSyxLQUFoQixHQUF3QixFQUF4QjtBQUNEO0FBWEQ7QUFBQTtBQUFBO0FBTEYsR0FGSjtBQXlCRCxDQTFCRDs7QUE0QkFHLE9BQU9DLE9BQVAsR0FBaUJSLE9BQWpCIiwiZmlsZSI6ImFkZFRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgZGlzcGF0Y2hlciA9IHJlcXVpcmUoJy4uL2Rpc3BhdGNoZXInKSxcbiAgICAgIGNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5jb25zdCB7IEFERF9UT0RPIH0gPSBjb25zdGFudHMsXG4gICAgICB7IFJlYWN0IH0gPSByZWFjdGlvbjtcblxubGV0IGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZGRUb2RvO1xuIl19
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reduxApp;
var _reaction = require("reaction");
var _redux = require("./reduxApp/redux");
var _reducer = _interopRequireDefault(require("./reduxApp/reducer"));
var _todoApp = _interopRequireDefault(require("./reduxApp/component/todoApp"));
var _provider = _interopRequireDefault(require("./reduxApp/component/provider"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    var store = (0, _redux).createStore(_reducer.default), rootDOMElement = document.getElementById("root");
    _reaction.ReactDOM.render(/*#__PURE__*/ _reaction.React.createElement(_provider.default, {
        store: store
    }, /*#__PURE__*/ _reaction.React.createElement(_todoApp.default, null)), rootDOMElement);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJyZWR1eEFwcCIsInN0b3JlIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQVVZLFFBQVE7QUFSQSxHQUFVLENBQVYsU0FBVTtBQUVkLEdBQWtCLENBQWxCLE1BQWtCO0FBRTFCLEdBQW9CLENBQXBCLFFBQW9CO0FBQ3BCLEdBQThCLENBQTlCLFFBQThCO0FBQzdCLEdBQStCLENBQS9CLFNBQStCOzs7Ozs7U0FFNUIsUUFBUSxHQUFHLENBQUM7SUFDbEMsR0FBSyxDQUFDLEtBQUssT0FQZSxNQUFrQixjQUUxQixRQUFvQixXQU1oQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBQyxJQUFNO0lBVnZCLFNBQVUsVUFZL0IsTUFBTSxlQVplLFNBQVUscUJBTXJCLFNBQStCO1FBUXBDLEtBQUssRUFBRSxLQUFLO3FCQWRJLFNBQVUscUJBS3RCLFFBQThCLGtCQWM5QyxjQUFjO0FBR2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reduxApp;
    }
});
const _reaction = require("reaction");
const _redux = require("./reduxApp/redux");
const _reducer = /*#__PURE__*/ _interop_require_default(require("./reduxApp/reducer"));
const _todoApp = /*#__PURE__*/ _interop_require_default(require("./reduxApp/component/todoApp"));
const _provider = /*#__PURE__*/ _interop_require_default(require("./reduxApp/component/provider"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function reduxApp() {
    const store = (0, _redux.createStore)(_reducer.default), rootDOMElement = document.getElementById("root");
    _reaction.ReactDOM.render(/*#__PURE__*/ _reaction.React.createElement(_provider.default, {
        store: store
    }, /*#__PURE__*/ _reaction.React.createElement(_todoApp.default, null)), rootDOMElement);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1eFwiO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1Y2VyXCI7XG5pbXBvcnQgVG9kb0FwcCBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcblxuICApO1xufVxuIl0sIm5hbWVzIjpbInJlZHV4QXBwIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsIlByb3ZpZGVyIiwiVG9kb0FwcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzswQkFSUTt1QkFFSjtnRUFFUjtnRUFDQTtpRUFDQzs7Ozs7O0FBRU4sU0FBU0E7SUFDdEIsTUFBTUMsUUFBUUMsSUFBQUEsa0JBQVcsRUFBQ0MsZ0JBQU8sR0FDM0JDLGlCQUFpQkMsU0FBU0MsY0FBYyxDQUFDO0lBRS9DQyxrQkFBUSxDQUFDQyxNQUFNLGVBRVgsOEJBQUNDLGlCQUFRO1FBQUNSLE9BQU9BO3FCQUNmLDhCQUFDUyxnQkFBTyxVQUlaTjtBQUdKIn0=
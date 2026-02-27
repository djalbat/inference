"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoApp;
    }
});
const _reaction = require("reaction");
const _footer = /*#__PURE__*/ _interop_require_default(require("./footer"));
const _addTodo = /*#__PURE__*/ _interop_require_default(require("./addTodo"));
const _todoList = /*#__PURE__*/ _interop_require_default(require("./todoList"));
const _dispatcher = /*#__PURE__*/ _interop_require_default(require("../dispatcher"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class TodoApp extends Component {
    componentDidMount() {
        this.unsubscribe = _dispatcher.default.subscribe((update)=>this.render(update));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render(update) {
        if (update) {
            const { setVisibilityFilter } = update;
            if (setVisibilityFilter) {
                const { visibilityFilter } = setVisibilityFilter, className = `${visibilityFilter} app`;
                this.setClass(className);
            }
        } else {
            const initialVisibilityFilter = _constants.SHOW_ALL, className = `${initialVisibilityFilter} app`;
            return /*#__PURE__*/ _reaction.React.createElement("div", {
                className: className
            }, /*#__PURE__*/ _reaction.React.createElement(_addTodo.default, null), /*#__PURE__*/ _reaction.React.createElement(_todoList.default, null), /*#__PURE__*/ _reaction.React.createElement(_footer.default, null));
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb2RvQXBwIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInVuc3Vic2NyaWJlIiwiZGlzcGF0Y2hlciIsInN1YnNjcmliZSIsInVwZGF0ZSIsInJlbmRlciIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic2V0VmlzaWJpbGl0eUZpbHRlciIsInZpc2liaWxpdHlGaWx0ZXIiLCJjbGFzc05hbWUiLCJzZXRDbGFzcyIsImluaXRpYWxWaXNpYmlsaXR5RmlsdGVyIiwiU0hPV19BTEwiLCJkaXYiLCJBZGRUb2RvIiwiVG9kb0xpc3QiLCJGb290ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBcUJBOzs7MEJBWEM7K0RBRUg7Z0VBQ0M7aUVBQ0M7bUVBQ0U7MkJBRUU7Ozs7OztBQUV6QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxlQUFLO0FBRVosTUFBTUYsZ0JBQWdCQztJQUNuQ0Usb0JBQW9CO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxtQkFBVSxDQUFDQyxTQUFTLENBQUMsQ0FBQ0MsU0FBVyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0Q7SUFDbEU7SUFFQUUsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQ0wsV0FBVztJQUNsQjtJQUVBSSxPQUFPRCxNQUFNLEVBQUU7UUFDYixJQUFJQSxRQUFRO1lBQ1YsTUFBTSxFQUFFRyxtQkFBbUIsRUFBRSxHQUFHSDtZQUVoQyxJQUFJRyxxQkFBcUI7Z0JBQ3ZCLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0QscUJBQ3ZCRSxZQUFZLEdBQUdELGlCQUFpQixJQUFJLENBQUM7Z0JBRTNDLElBQUksQ0FBQ0UsUUFBUSxDQUFDRDtZQUNoQjtRQUNGLE9BQU87WUFDTCxNQUFNRSwwQkFBMEJDLG1CQUFRLEVBQ2xDSCxZQUFZLEdBQUdFLHdCQUF3QixJQUFJLENBQUM7WUFFbEQscUJBRUUsOEJBQUNFO2dCQUFJSixXQUFXQTs2QkFDZCw4QkFBQ0ssZ0JBQU8sdUJBQ1IsOEJBQUNDLGlCQUFRLHVCQUNULDhCQUFDQyxlQUFNO1FBSWI7SUFDRjtBQUNGIn0=
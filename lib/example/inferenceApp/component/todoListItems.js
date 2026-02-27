"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoListItems;
    }
});
const _reaction = require("reaction");
const _dispatcher = /*#__PURE__*/ _interop_require_default(require("../dispatcher"));
const _todoListItem = /*#__PURE__*/ _interop_require_default(require("./todoListItem"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class TodoListItems extends Component {
    updateHandler(update) {
        if (update) {
            const { addTodo } = update;
            if (addTodo) {
                this.forceUpdate(update);
            }
        }
    }
    componentDidMount() {
        this.unsubscribe = _dispatcher.default.subscribe((update)=>this.updateHandler(update));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render(update) {
        if (update) {
            let children = this.getChildren();
            const { addTodo } = update, { text } = addTodo;
            children = [
                ...children,
                /*#__PURE__*/ _reaction.React.createElement(_todoListItem.default, {
                    text: text
                })
            ];
            return children;
        }
        return [];
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvZG9MaXN0SXRlbXMiLCJDb21wb25lbnQiLCJSZWFjdCIsInVwZGF0ZUhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRUb2RvIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInVuc3Vic2NyaWJlIiwiZGlzcGF0Y2hlciIsInN1YnNjcmliZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInRleHQiLCJUb2RvTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBcUJBOzs7MEJBUEM7bUVBRUM7cUVBQ0U7Ozs7OztBQUV6QixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxlQUFLO0FBRVosTUFBTUYsc0JBQXNCQztJQUN6Q0UsY0FBY0MsTUFBTSxFQUFFO1FBQ3BCLElBQUlBLFFBQVE7WUFDVixNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRDtZQUVwQixJQUFJQyxTQUFTO2dCQUNYLElBQUksQ0FBQ0MsV0FBVyxDQUFDRjtZQUNuQjtRQUNGO0lBQ0Y7SUFFQUcsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQyxtQkFBVSxDQUFDQyxTQUFTLENBQUMsQ0FBQ04sU0FBVyxJQUFJLENBQUNELGFBQWEsQ0FBQ0M7SUFDekU7SUFFQU8sdUJBQXVCO1FBQ3JCLElBQUksQ0FBQ0gsV0FBVztJQUNsQjtJQUVBSSxPQUFPUixNQUFNLEVBQUU7UUFDYixJQUFJQSxRQUFRO1lBQ1YsSUFBSVMsV0FBVyxJQUFJLENBQUNDLFdBQVc7WUFFL0IsTUFBTSxFQUFFVCxPQUFPLEVBQUUsR0FBR0QsUUFDZCxFQUFFVyxJQUFJLEVBQUUsR0FBR1Y7WUFFakJRLFdBQVc7bUJBQ05BOzhCQUVELDhCQUFDRyxxQkFBWTtvQkFBQ0QsTUFBTUE7O2FBRXZCO1lBRUQsT0FBT0Y7UUFDVDtRQUVBLE9BQU8sRUFBRTtJQUNYO0FBQ0YifQ==
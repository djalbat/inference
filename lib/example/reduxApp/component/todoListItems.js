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
const _todoListItem = /*#__PURE__*/ _interop_require_default(require("./todoListItem"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class TodoListItems extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(()=>this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context, state = store.getState(), { todos, visibilityFilter } = state, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map((visibleTodo)=>{
            const { id, text, completed } = visibleTodo;
            return /*#__PURE__*/ _reaction.React.createElement(_todoListItem.default, {
                text: text,
                completed: completed,
                clickHandler: ()=>{
                    const type = _constants.TOGGLE_TODO, action = {
                        type,
                        id
                    };
                    store.dispatch(action);
                }
            });
        });
        return items;
    }
}
const getVisibleTodos = (todos, visibilityFilter)=>{
    let visibleTodos;
    switch(visibilityFilter){
        case _constants.SHOW_ALL:
            visibleTodos = todos;
            break;
        case _constants.SHOW_ACTIVE:
            visibleTodos = todos.filter((todo)=>{
                const { completed } = todo, active = !completed;
                return active;
            });
            break;
        case _constants.SHOW_COMPLETED:
            visibleTodos = todos.filter((todo)=>{
                const { completed } = todo;
                return completed;
            });
            break;
    }
    return visibleTodos;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW1zIiwiQ29tcG9uZW50IiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsInN0b3JlIiwiY29udGV4dCIsInVuc3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9yY2VVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ0b2RvcyIsInZpc2liaWxpdHlGaWx0ZXIiLCJ2aXNpYmxlVG9kb3MiLCJnZXRWaXNpYmxlVG9kb3MiLCJpdGVtcyIsIm1hcCIsInZpc2libGVUb2RvIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiVG9kb0xpc3RJdGVtIiwiY2xpY2tIYW5kbGVyIiwidHlwZSIsIlRPR0dMRV9UT0RPIiwiYWN0aW9uIiwiZGlzcGF0Y2giLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiZmlsdGVyIiwidG9kbyIsImFjdGl2ZSIsIlNIT1dfQ09NUExFVEVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXFCQTs7OzBCQVJDO3FFQUVHOzJCQUUwQzs7Ozs7O0FBRW5FLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLGVBQUs7QUFFWixNQUFNRixzQkFBc0JDO0lBQ3pDRSxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUNDLE9BQU87UUFFOUIsSUFBSSxDQUFDQyxXQUFXLEdBQUdGLE1BQU1HLFNBQVMsQ0FBQyxJQUFNLElBQUksQ0FBQ0MsV0FBVztJQUMzRDtJQUVBQyx1QkFBdUI7UUFDckIsSUFBSSxDQUFDSCxXQUFXO0lBQ2xCO0lBRUFJLFNBQVM7UUFDUCxNQUFNLEVBQUVOLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUN4Qk0sUUFBUVAsTUFBTVEsUUFBUSxJQUN0QixFQUFFQyxLQUFLLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdILE9BQzlCSSxlQUFlQyxnQkFBZ0JILE9BQU9DLG1CQUN0Q0csUUFBUUYsYUFBYUcsR0FBRyxDQUFDLENBQUNDO1lBQ3hCLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRSxHQUFHSDtZQUVoQyxxQkFFRSw4QkFBQ0kscUJBQVk7Z0JBQUNGLE1BQU1BO2dCQUNOQyxXQUFXQTtnQkFDWEUsY0FBYztvQkFFWixNQUFNQyxPQUFPQyxzQkFBVyxFQUNsQkMsU0FBUzt3QkFDUEY7d0JBQ0FMO29CQUNGO29CQUVOaEIsTUFBTXdCLFFBQVEsQ0FBQ0Q7Z0JBRWpCOztRQUlsQjtRQUVOLE9BQU9WO0lBQ1Q7QUFDRjtBQUVBLE1BQU1ELGtCQUFrQixDQUFDSCxPQUFPQztJQUM5QixJQUFJQztJQUVKLE9BQVFEO1FBQ04sS0FBS2UsbUJBQVE7WUFDWGQsZUFBZUY7WUFDZjtRQUVGLEtBQUtpQixzQkFBVztZQUNkZixlQUFlRixNQUFNa0IsTUFBTSxDQUFDLENBQUNDO2dCQUMzQixNQUFNLEVBQUVWLFNBQVMsRUFBRSxHQUFHVSxNQUNsQkMsU0FBUyxDQUFDWDtnQkFFZCxPQUFPVztZQUNUO1lBQ0E7UUFFRixLQUFLQyx5QkFBYztZQUNqQm5CLGVBQWVGLE1BQU1rQixNQUFNLENBQUMsQ0FBQ0M7Z0JBQzNCLE1BQU0sRUFBRVYsU0FBUyxFQUFFLEdBQUdVO2dCQUV0QixPQUFPVjtZQUNUO1lBQ0E7SUFDSjtJQUVBLE9BQU9QO0FBQ1QifQ==
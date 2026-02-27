"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return todos;
    }
});
const _constants = require("../constants");
function todos(state = [], action = {}) {
    const { type } = action;
    let todos1 = state;
    switch(type){
        case _constants.ADD_TODO:
            todos1 = addTodoToTodos(todos1, action);
            break;
        case _constants.TOGGLE_TODO:
            todos1 = toggleTodos(todos1, action);
            break;
    }
    state = todos1;
    return state;
}
function addTodoToTodos(todos, action) {
    const { id, text } = action, completed = false, todo = {
        id,
        text,
        completed
    };
    todos = [
        ...todos,
        todo
    ];
    return todos;
}
function toggleTodos(todos, action) {
    const { id } = action;
    todos = todos.map((todo)=>{
        if (todo.id === id) {
            let { completed } = todo;
            completed = !completed;
            todo.completed = completed;
        }
        return todo;
    });
    return todos;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7OzJCQUZjO0FBRXZCLFNBQVNBLE1BQU1DLFFBQVEsRUFBRSxFQUFFQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHRDtJQUVqQixJQUFJRixTQUFRQztJQUVaLE9BQVFFO1FBQ04sS0FBS0MsbUJBQVE7WUFDWEosU0FBUUssZUFBZUwsUUFBT0U7WUFDOUI7UUFFRixLQUFLSSxzQkFBVztZQUNkTixTQUFRTyxZQUFZUCxRQUFPRTtZQUMzQjtJQUNKO0lBRUFELFFBQVFEO0lBRVIsT0FBT0M7QUFDVDtBQUVBLFNBQVNJLGVBQWVMLEtBQUssRUFBRUUsTUFBTTtJQUNuQyxNQUFNLEVBQUVNLEVBQUUsRUFBRUMsSUFBSSxFQUFFLEdBQUdQLFFBQ2ZRLFlBQVksT0FDWkMsT0FBTztRQUNMSDtRQUNBQztRQUNBQztJQUNGO0lBRU5WLFFBQVE7V0FDSEE7UUFDSFc7S0FDRDtJQUVELE9BQU9YO0FBQ1Q7QUFFQSxTQUFTTyxZQUFZUCxLQUFLLEVBQUVFLE1BQU07SUFDaEMsTUFBTSxFQUFFTSxFQUFFLEVBQUUsR0FBR047SUFFZkYsUUFBUUEsTUFBTVksR0FBRyxDQUFDLENBQUNEO1FBQ2pCLElBQUlBLEtBQUtILEVBQUUsS0FBS0EsSUFBSTtZQUNsQixJQUFJLEVBQUVFLFNBQVMsRUFBRSxHQUFHQztZQUVwQkQsWUFBWSxDQUFDQTtZQUViQyxLQUFLRCxTQUFTLEdBQUdBO1FBQ25CO1FBRUEsT0FBT0M7SUFDVDtJQUVBLE9BQU9YO0FBQ1QifQ==
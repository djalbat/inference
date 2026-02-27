"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get combineReducers () {
        return combineReducers;
    },
    get createStore () {
        return createStore;
    }
});
const createStore = (reducer)=>{
    let state, listeners = [];
    const getState = ()=>{
        return state;
    };
    const dispatch = (action)=>{
        state = reducer(state, action);
        listeners.forEach((listener)=>listener());
    };
    const subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>{
            unsubscribe(listener);
        };
    };
    const unsubscribe = (l)=>{
        listeners = listeners.filter((listener)=>{
            return listener !== l;
        });
    };
    dispatch();
    return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
    };
};
const combineReducers = (reducers)=>{
    return (state = {}, action)=>{
        const keys = Object.keys(reducers), nextState = keys.reduce((nextState, key)=>{
            const reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
            return nextState;
        }, {});
        return nextState;
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdGF0ZSIsImxpc3RlbmVycyIsImdldFN0YXRlIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJzdWJzY3JpYmUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIiwicmVkdWNlcnMiLCJrZXlzIiwiT2JqZWN0IiwibmV4dFN0YXRlIiwicmVkdWNlIiwia2V5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFtQ2FBO2VBQUFBOztRQWpDQUM7ZUFBQUE7OztBQUFOLE1BQU1BLGNBQWMsQ0FBQ0M7SUFDMUIsSUFBSUMsT0FDQUMsWUFBWSxFQUFFO0lBRWxCLE1BQU1DLFdBQVc7UUFDZixPQUFPRjtJQUNUO0lBRUEsTUFBTUcsV0FBVyxDQUFDQztRQUNoQkosUUFBUUQsUUFBUUMsT0FBT0k7UUFFdkJILFVBQVVJLE9BQU8sQ0FBQyxDQUFDQyxXQUFhQTtJQUNsQztJQUVBLE1BQU1DLFlBQVksQ0FBQ0Q7UUFDakJMLFVBQVVPLElBQUksQ0FBQ0Y7UUFFZixPQUFRO1lBQ05HLFlBQVlIO1FBQ2Q7SUFDRjtJQUVBLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDbkJULFlBQVlBLFVBQVVVLE1BQU0sQ0FBQyxDQUFDTDtZQUM1QixPQUFRQSxhQUFhSTtRQUN2QjtJQUNGO0lBRUFQO0lBRUEsT0FBTztRQUFFRDtRQUFVQztRQUFVSTtRQUFXRTtJQUFZO0FBQ3REO0FBRU8sTUFBTVosa0JBQWtCLENBQUNlO0lBQzlCLE9BQU8sQ0FBQ1osUUFBUSxDQUFDLENBQUMsRUFBRUk7UUFDbEIsTUFBTVMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRCxXQUNuQkcsWUFBWUYsS0FBS0csTUFBTSxDQUFDLENBQUNELFdBQVdFO1lBQ2xDLE1BQU1sQixVQUFVYSxRQUFRLENBQUNLLElBQUk7WUFFN0JGLFNBQVMsQ0FBQ0UsSUFBSSxHQUFHbEIsUUFBUUMsS0FBSyxDQUFDaUIsSUFBSSxFQUFFYjtZQUVyQyxPQUFPVztRQUNULEdBQUcsQ0FBQztRQUVWLE9BQU9BO0lBQ1Q7QUFDRiJ9
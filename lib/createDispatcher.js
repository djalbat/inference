"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const createDispatcher = (rule)=>{
    let listeners = [];
    const dispatch = (action)=>{
        const update = rule(action);
        listeners.forEach((listener)=>{
            const { ruleNames } = listener;
            if (ruleNames.length === 0 || ruleNames.some((ruleName)=>update[ruleName] !== undefined)) {
                listener(update);
            }
        });
    };
    const subscribe = (listener, ...ruleNames)=>{
        Object.assign(listener, {
            ruleNames
        });
        listeners.push(listener);
        return ()=>unsubscribe(listener);
    };
    const unsubscribe = (l)=>{
        listeners = listeners.filter((listener)=>listener !== l);
    };
    return {
        dispatch,
        subscribe,
        unsubscribe
    };
};
const _default = createDispatcher;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZURpc3BhdGNoZXIiLCJydWxlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJzb21lIiwicnVsZU5hbWUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQ0E7OztlQUFBOzs7QUFoQ0EsTUFBTUEsbUJBQW1CLENBQUNDO0lBQ3hCLElBQUlDLFlBQVksRUFBRTtJQUVsQixNQUFNQyxXQUFXLENBQUNDO1FBQ2hCLE1BQU1DLFNBQVNKLEtBQUtHO1FBRXBCRixVQUFVSSxPQUFPLENBQUMsQ0FBQ0M7WUFDakIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Q7WUFFdEIsSUFBSSxBQUFDQyxVQUFVQyxNQUFNLEtBQUssS0FBTUQsVUFBVUUsSUFBSSxDQUFDLENBQUNDLFdBQWNOLE1BQU0sQ0FBQ00sU0FBUyxLQUFLQyxZQUFhO2dCQUM5RkwsU0FBU0Y7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxNQUFNUSxZQUFZLENBQUNOLFVBQVUsR0FBR0M7UUFDOUJNLE9BQU9DLE1BQU0sQ0FBQ1IsVUFBVTtZQUN0QkM7UUFDRjtRQUVBTixVQUFVYyxJQUFJLENBQUNUO1FBRWYsT0FBUSxJQUFNVSxZQUFZVjtJQUM1QjtJQUVBLE1BQU1VLGNBQWMsQ0FBQ0M7UUFDbkJoQixZQUFZQSxVQUFVaUIsTUFBTSxDQUFDLENBQUNaLFdBQWNBLGFBQWFXO0lBQzNEO0lBRUEsT0FBTztRQUFFZjtRQUFVVTtRQUFXSTtJQUFZO0FBQzVDO01BRUEsV0FBZWpCIn0=
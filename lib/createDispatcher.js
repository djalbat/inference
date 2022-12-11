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
var createDispatcher = function(rule) {
    var listeners = [];
    var dispatch = function(action) {
        var update = rule(action);
        listeners.forEach(function(listener) {
            var ruleNames = listener.ruleNames;
            if (ruleNames.length === 0 || ruleNames.some(function(ruleName) {
                return update[ruleName] !== undefined;
            })) {
                listener(update);
            }
        });
    };
    var subscribe = function(listener) {
        for(var _len = arguments.length, ruleNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            ruleNames[_key - 1] = arguments[_key];
        }
        Object.assign(listener, {
            ruleNames: ruleNames
        });
        listeners.push(listener);
        return function() {
            return unsubscribe(listener);
        };
    };
    var unsubscribe = function(l) {
        listeners = listeners.filter(function(listener) {
            return listener !== l;
        });
    };
    return {
        dispatch: dispatch,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
};
var _default = createDispatcher;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZURpc3BhdGNoZXIiLCJydWxlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJzb21lIiwicnVsZU5hbWUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQ0E7OztlQUFBOzs7QUFoQ0EsSUFBTUEsbUJBQW1CLFNBQUNDLE1BQVM7SUFDakMsSUFBSUMsWUFBWSxFQUFFO0lBRWxCLElBQU1DLFdBQVcsU0FBQ0MsUUFBVztRQUMzQixJQUFNQyxTQUFTSixLQUFLRztRQUVwQkYsVUFBVUksT0FBTyxDQUFDLFNBQUNDLFVBQWE7WUFDOUIsSUFBTSxBQUFFQyxZQUFjRCxTQUFkQztZQUVSLElBQUksQUFBQ0EsVUFBVUMsTUFBTSxLQUFLLEtBQU1ELFVBQVVFLElBQUksQ0FBQyxTQUFDQzt1QkFBY04sTUFBTSxDQUFDTSxTQUFTLEtBQUtDO2dCQUFhO2dCQUM5RkwsU0FBU0Y7WUFDWCxDQUFDO1FBQ0g7SUFDRjtJQUVBLElBQU1RLFlBQVksU0FBQ04sVUFBMkI7eUNBQWRDO1lBQUFBOztRQUM5Qk0sT0FBT0MsTUFBTSxDQUFDUixVQUFVO1lBQ3RCQyxXQUFBQTtRQUNGO1FBRUFOLFVBQVVjLElBQUksQ0FBQ1Q7UUFFZixPQUFRO21CQUFNVSxZQUFZVjs7SUFDNUI7SUFFQSxJQUFNVSxjQUFjLFNBQUNDLEdBQU07UUFDekJoQixZQUFZQSxVQUFVaUIsTUFBTSxDQUFDLFNBQUNaO21CQUFjQSxhQUFhVzs7SUFDM0Q7SUFFQSxPQUFPO1FBQUVmLFVBQUFBO1FBQVVVLFdBQUFBO1FBQVdJLGFBQUFBO0lBQVk7QUFDNUM7SUFFQSxXQUFlakIifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVosR0FBSyxDQUFDLGdCQUFnQixZQUFJLElBQUksRUFBSyxDQUFDO0lBQ2xDLEdBQUcsQ0FBQyxTQUFTO0lBRWIsR0FBSyxDQUFDLFFBQVEsWUFBSSxNQUFNLEVBQUssQ0FBQztRQUM1QixHQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRTFCLFNBQVMsQ0FBQyxPQUFPLFVBQUUsUUFBUSxFQUFLLENBQUM7WUFDL0IsR0FBSyxDQUFHLFNBQVMsR0FBSyxRQUFRLENBQXRCLFNBQVM7WUFFakIsRUFBRSxFQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFLLFNBQVMsQ0FBQyxJQUFJLFVBQUUsUUFBUTt1QkFBTSxNQUFNLENBQUMsUUFBUSxNQUFNLFNBQVM7Z0JBQUksQ0FBQztnQkFDL0YsUUFBUSxDQUFDLE1BQU07WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDLFNBQVMsWUFBSSxRQUFRLEVBQW1CLENBQUM7eUNBQWYsU0FBUztZQUFULFNBQVM7O1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUNwQixTQUFTLEVBQVQsU0FBUzs7UUFHWCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7O21CQUVULFdBQVcsQ0FBQyxRQUFROztJQUNwQyxDQUFDO0lBRUQsR0FBSyxDQUFDLFdBQVcsWUFBSSxDQUFDLEVBQUssQ0FBQztRQUMxQixTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sVUFBRSxRQUFRO21CQUFNLFFBQVEsS0FBSyxDQUFDOztJQUM1RCxDQUFDOztRQUVRLFFBQVEsRUFBUixRQUFRO1FBQUUsU0FBUyxFQUFULFNBQVM7UUFBRSxXQUFXLEVBQVgsV0FBVzs7QUFDM0MsQ0FBQztlQUVjLGdCQUFnQiJ9
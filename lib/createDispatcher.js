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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZURpc3BhdGNoZXIiLCJydWxlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJzb21lIiwicnVsZU5hbWUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBa0NiLFNBQWdDOzs7ZUFBaEMsUUFBZ0M7OztBQWhDaEMsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBQ0MsSUFBSSxFQUFLO0lBQ2pDLElBQUlDLFNBQVMsR0FBRyxFQUFFLEFBQUM7SUFFbkIsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLE1BQU0sRUFBSztRQUMzQixJQUFNQyxNQUFNLEdBQUdKLElBQUksQ0FBQ0csTUFBTSxDQUFDLEFBQUM7UUFFNUJGLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUM5QixJQUFNLEFBQUVDLFNBQVMsR0FBS0QsUUFBUSxDQUF0QkMsU0FBUyxBQUFhLEFBQUM7WUFFL0IsSUFBSSxBQUFDQSxTQUFTLENBQUNDLE1BQU0sS0FBSyxDQUFDLElBQUtELFNBQVMsQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLFFBQVE7dUJBQU1OLE1BQU0sQ0FBQ00sUUFBUSxDQUFDLEtBQUtDLFNBQVM7YUFBQyxDQUFDLEVBQUU7Z0JBQzlGTCxRQUFRLENBQUNGLE1BQU0sQ0FBQyxDQUFDO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQUFBQztJQUVGLElBQU1RLFNBQVMsR0FBRyxTQUFDTixRQUFRLEVBQW1CO3lDQUFkQyxTQUFTO1lBQVRBLFNBQVM7O1FBQ3ZDTSxNQUFNLENBQUNDLE1BQU0sQ0FBQ1IsUUFBUSxFQUFFO1lBQ3RCQyxTQUFTLEVBQVRBLFNBQVM7U0FDVixDQUFDLENBQUM7UUFFSE4sU0FBUyxDQUFDYyxJQUFJLENBQUNULFFBQVEsQ0FBQyxDQUFDO1FBRXpCLE9BQVE7bUJBQU1VLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO1NBQUEsQ0FBRTtLQUN0QyxBQUFDO0lBRUYsSUFBTVUsV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN6QmhCLFNBQVMsR0FBR0EsU0FBUyxDQUFDaUIsTUFBTSxDQUFDLFNBQUNaLFFBQVE7bUJBQU1BLFFBQVEsS0FBS1csQ0FBQztTQUFDLENBQUMsQ0FBQztLQUM5RCxBQUFDO0lBRUYsT0FBTztRQUFFZixRQUFRLEVBQVJBLFFBQVE7UUFBRVUsU0FBUyxFQUFUQSxTQUFTO1FBQUVJLFdBQVcsRUFBWEEsV0FBVztLQUFFLENBQUM7Q0FDN0MsQUFBQztJQUVGLFFBQWdDLEdBQWpCakIsZ0JBQWdCIn0=
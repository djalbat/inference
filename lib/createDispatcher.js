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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZURpc3BhdGNoZXIiLCJydWxlIiwibGlzdGVuZXJzIiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJ1cGRhdGUiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJydWxlTmFtZXMiLCJsZW5ndGgiLCJzb21lIiwicnVsZU5hbWUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQVAsSUFBSSxFQUFLLENBQUM7SUFDbEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFFbEIsR0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQVAsTUFBTSxFQUFLLENBQUM7UUFDNUIsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtRQUUxQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxRQUFRLEVBQUssQ0FBQztZQUMvQixHQUFLLENBQUcsU0FBUyxHQUFLLFFBQVEsQ0FBdEIsU0FBUztZQUVqQixFQUFFLEVBQUcsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUssU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQVAsUUFBUTtnQkFBSyxNQUFNLENBQUwsTUFBTSxDQUFDLFFBQVEsTUFBTSxTQUFTO2dCQUFJLENBQUM7Z0JBQy9GLFFBQVEsQ0FBQyxNQUFNO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFQLFFBQVEsRUFBbUIsQ0FBQzt5Q0FBZixTQUFTO1lBQVQsU0FBUzs7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QixTQUFTLEVBQVQsU0FBUztRQUNYLENBQUM7UUFFRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVE7UUFFdkIsTUFBTSxDQUFFLFFBQVE7WUFBRixNQUFNLENBQU4sV0FBVyxDQUFDLFFBQVE7O0lBQ3BDLENBQUM7SUFFRCxHQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBUCxDQUFDLEVBQUssQ0FBQztRQUMxQixTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsUUFBUTtZQUFLLE1BQU0sQ0FBTCxRQUFRLEtBQUssQ0FBQzs7SUFDNUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQUMsUUFBUSxFQUFSLFFBQVE7UUFBRSxTQUFTLEVBQVQsU0FBUztRQUFFLFdBQVcsRUFBWCxXQUFXO0lBQUMsQ0FBQztBQUM3QyxDQUFDO2VBRWMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNyZWF0ZURpc3BhdGNoZXIgPSAocnVsZSkgPT4ge1xuICBsZXQgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlID0gcnVsZShhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IHJ1bGVOYW1lcyB9ID0gbGlzdGVuZXI7XG5cbiAgICAgIGlmICgocnVsZU5hbWVzLmxlbmd0aCA9PT0gMCkgfHwgcnVsZU5hbWVzLnNvbWUoKHJ1bGVOYW1lKSA9PiAodXBkYXRlW3J1bGVOYW1lXSAhPT0gdW5kZWZpbmVkKSkpIHtcbiAgICAgICAgbGlzdGVuZXIodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIsIC4uLnJ1bGVOYW1lcykgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24obGlzdGVuZXIsIHtcbiAgICAgIHJ1bGVOYW1lc1xuICAgIH0pO1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB1bnN1YnNjcmliZShsaXN0ZW5lcikpO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4gKGxpc3RlbmVyICE9PSBsKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpc3BhdGNoZXI7XG4iXX0=
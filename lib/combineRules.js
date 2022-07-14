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
var combineRules = function(rules) {
    return function(action) {
        var keys = Object.keys(rules), update = keys.reduce(function(update, key) {
            var rule = rules[key];
            update[key] = rule(action);
            return update;
        }, {});
        return update;
    };
};
var _default = combineRules;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiJdLCJuYW1lcyI6WyJjb21iaW5lUnVsZXMiLCJydWxlcyIsImFjdGlvbiIsImtleXMiLCJPYmplY3QiLCJ1cGRhdGUiLCJyZWR1Y2UiLCJrZXkiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBaUJiLFNBQTRCOzs7ZUFBNUIsUUFBNEI7OztBQWY1QixJQUFNQSxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQzlCLE9BQU8sU0FBQ0MsTUFBTSxFQUFLO1FBQ2pCLElBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFJLENBQUNGLEtBQUssQ0FBQyxFQUN6QkksTUFBTSxHQUFHRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxTQUFDRCxNQUFNLEVBQUVFLEdBQUcsRUFBSztZQUNwQyxJQUFNQyxJQUFJLEdBQUdQLEtBQUssQ0FBQ00sR0FBRyxDQUFDLEFBQUM7WUFFeEJGLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLEdBQUdDLElBQUksQ0FBQ04sTUFBTSxDQUFDLENBQUM7WUFFM0IsT0FBT0csTUFBTSxDQUFDO1NBQ2YsRUFBRSxFQUFFLENBQUMsQUFBQztRQUViLE9BQU9BLE1BQU0sQ0FBQztLQUNmLENBQUM7Q0FDSCxBQUFDO0lBRUYsUUFBNEIsR0FBYkwsWUFBWSJ9
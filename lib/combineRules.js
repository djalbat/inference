"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var combineRules = function(rules) {
    return function(action) {
        var keys = Object.keys(rules), update = keys.reduce(function(update1, key) {
            var rule = rules[key];
            update1[key] = rule(action);
            return update1;
        }, {
        });
        return update;
    };
};
var _default = combineRules;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVaLEdBQUssQ0FBQyxZQUFZLFlBQUksS0FBSyxFQUFLLENBQUM7b0JBQ3ZCLE1BQU0sRUFBSyxDQUFDO1FBQ2xCLEdBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxVQUFFLE9BQU0sRUFBRSxHQUFHLEVBQUssQ0FBQztZQUNyQyxHQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHO1lBRXRCLE9BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU07bUJBRWxCLE9BQU07UUFDZixDQUFDOztlQUVBLE1BQU07SUFDZixDQUFDO0FBQ0gsQ0FBQztlQUVjLFlBQVkifQ==
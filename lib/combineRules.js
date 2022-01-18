"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var combineRules = function(rules) {
    return function(action) {
        var keys = Object.keys(rules), update1 = keys.reduce(function(update, key) {
            var rule = rules[key];
            update[key] = rule(action);
            return update;
        }, {});
        return update1;
    };
};
var _default = combineRules;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiJdLCJuYW1lcyI6WyJjb21iaW5lUnVsZXMiLCJydWxlcyIsImFjdGlvbiIsImtleXMiLCJPYmplY3QiLCJ1cGRhdGUiLCJyZWR1Y2UiLCJrZXkiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVaLEdBQUssQ0FBQ0EsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDL0IsTUFBTSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFLLENBQUM7UUFDbEIsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRixLQUFLLEdBQ3hCSSxPQUFNLEdBQUdGLElBQUksQ0FBQ0csTUFBTSxDQUFDLFFBQVEsQ0FBUEQsTUFBTSxFQUFFRSxHQUFHLEVBQUssQ0FBQztZQUNyQyxHQUFLLENBQUNDLElBQUksR0FBR1AsS0FBSyxDQUFDTSxHQUFHO1lBRXRCRixNQUFNLENBQUNFLEdBQUcsSUFBSUMsSUFBSSxDQUFDTixNQUFNO1lBRXpCLE1BQU0sQ0FBQ0csTUFBTTtRQUNmLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFWCxNQUFNLENBQUNBLE9BQU07SUFDZixDQUFDO0FBQ0gsQ0FBQztlQUVjTCxZQUFZIn0=
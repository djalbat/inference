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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFlBQUEsWUFBQSxLQUFBO29CQUNBLE1BQUE7WUFDQSxJQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLEdBQ0EsTUFBQSxHQUFBLElBQUEsQ0FBQSxNQUFBLFVBQUEsT0FBQSxFQUFBLEdBQUE7Z0JBQ0EsSUFBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBO0FBRUEsbUJBQUEsQ0FBQSxHQUFBLElBQUEsSUFBQSxDQUFBLE1BQUE7bUJBRUEsT0FBQTs7O2VBR0EsTUFBQTs7O2VBSUEsWUFBQSJ9
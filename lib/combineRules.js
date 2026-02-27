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
const combineRules = (rules)=>{
    return (action)=>{
        const keys = Object.keys(rules), update = keys.reduce((update, key)=>{
            const rule = rules[key];
            update[key] = rule(action);
            return update;
        }, {});
        return update;
    };
};
const _default = combineRules;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiJdLCJuYW1lcyI6WyJjb21iaW5lUnVsZXMiLCJydWxlcyIsImFjdGlvbiIsImtleXMiLCJPYmplY3QiLCJ1cGRhdGUiLCJyZWR1Y2UiLCJrZXkiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7QUFmQSxNQUFNQSxlQUFlLENBQUNDO0lBQ3BCLE9BQU8sQ0FBQ0M7UUFDTixNQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNGLFFBQ25CSSxTQUFTRixLQUFLRyxNQUFNLENBQUMsQ0FBQ0QsUUFBUUU7WUFDNUIsTUFBTUMsT0FBT1AsS0FBSyxDQUFDTSxJQUFJO1lBRXZCRixNQUFNLENBQUNFLElBQUksR0FBR0MsS0FBS047WUFFbkIsT0FBT0c7UUFDVCxHQUFHLENBQUM7UUFFVixPQUFPQTtJQUNUO0FBQ0Y7TUFFQSxXQUFlTCJ9
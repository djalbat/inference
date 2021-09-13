"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var combineRules = function(rules) {
    return function(action) {
        var keys = Object.keys(rules), update = keys.reduce(function(update, key) {
            var rule = rules[key];
            update[key] = rule(action);
            return update;
        }, {
        });
        return update;
    };
};
var _default = combineRules;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5lUnVsZXMuanMiXSwibmFtZXMiOlsiY29tYmluZVJ1bGVzIiwicnVsZXMiLCJhY3Rpb24iLCJrZXlzIiwiT2JqZWN0IiwidXBkYXRlIiwicmVkdWNlIiwia2V5IiwicnVsZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFWixHQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBUCxLQUFLLEVBQUssQ0FBQztJQUMvQixNQUFNLENBQUMsUUFBUSxDQUFQLE1BQU0sRUFBSyxDQUFDO1FBQ2xCLEdBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxNQUFNLEVBQUUsR0FBRyxFQUFLLENBQUM7WUFDckMsR0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRztZQUV0QixNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNO1lBRXpCLE1BQU0sQ0FBQyxNQUFNO1FBQ2YsQ0FBQyxFQUFFLENBQUM7UUFBQSxDQUFDO1FBRVgsTUFBTSxDQUFDLE1BQU07SUFDZixDQUFDO0FBQ0gsQ0FBQztlQUVjLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29tYmluZVJ1bGVzID0gKHJ1bGVzKSA9PiB7XG4gIHJldHVybiAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGVzKSxcbiAgICAgICAgICB1cGRhdGUgPSBrZXlzLnJlZHVjZSgodXBkYXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1trZXldO1xuXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJ1bGVzO1xuIl19
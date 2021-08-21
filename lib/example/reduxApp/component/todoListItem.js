"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var TodoListItem = function(props, context) {
    var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? "line-through" : "none", style = {
        textDecoration: textDecoration
    };
    return(/*#__PURE__*/ _reaction.React.createElement("li", {
        style: style,
        onClick: clickHandler
    }, text));
};
var _default = TodoListItem;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vbmVcIixcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb25cbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0SXRlbTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRWhDLEdBQUssQ0FBQyxZQUFZLFlBQUksS0FBSyxFQUFFLE9BQU8sRUFBSyxDQUFDO0lBQ3hDLEdBQUssQ0FBRyxZQUFZLEdBQXNCLEtBQUssQ0FBdkMsWUFBWSxFQUFFLFNBQVMsR0FBVyxLQUFLLENBQXpCLFNBQVMsRUFBRSxJQUFJLEdBQUssS0FBSyxDQUFkLElBQUksRUFDL0IsY0FBYyxHQUFHLFNBQVMsSUFDUixZQUFjLEtBQ1osSUFBTSxHQUMxQixLQUFLO1FBQ0gsY0FBYyxFQUFkLGNBQWM7O3lCQVJGLFNBQVUsc0JBYTNCLEVBQUU7UUFBQyxLQUFLLEVBQUUsS0FBSztRQUFFLE9BQU8sRUFBRSxZQUFZO09BQ3BDLElBQUk7QUFJWCxDQUFDO2VBRWMsWUFBWSJ9
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
var _reaction = require("reaction");
var TodoListItem = function(props, context) {
    var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? "line-through" : "none", style = {
        textDecoration: textDecoration
    };
    return /*#__PURE__*/ _reaction.React.createElement("li", {
        style: style,
        onClick: clickHandler
    }, text);
};
var _default = TodoListItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vbmVcIixcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb25cbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0SXRlbTtcbiJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJwcm9wcyIsImNvbnRleHQiLCJjbGlja0hhbmRsZXIiLCJjb21wbGV0ZWQiLCJ0ZXh0IiwidGV4dERlY29yYXRpb24iLCJzdHlsZSIsImxpIiwib25DbGljayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXNCYixTQUE0Qjs7O2VBQTVCLFFBQTRCOzs7d0JBcEJOLFVBQVU7QUFFaEMsSUFBTUEsWUFBWSxHQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO0lBQ3ZDLElBQVFDLFlBQVksR0FBc0JGLEtBQUssQ0FBdkNFLFlBQVksRUFBRUMsU0FBUyxHQUFXSCxLQUFLLENBQXpCRyxTQUFTLEVBQUVDLElBQUksR0FBS0osS0FBSyxDQUFkSSxJQUFJLEVBQy9CQyxjQUFjLEdBQUdGLFNBQVMsR0FDUixjQUFjLEdBQ1osTUFBTSxFQUMxQkcsS0FBSyxHQUFHO1FBQ05ELGNBQWMsRUFBZEEsY0FBYztLQUNmLEFBQUM7SUFFUixxQkFFRSw4QkFBQ0UsSUFBRTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7UUFBRUUsT0FBTyxFQUFFTixZQUFZO09BQ3BDRSxJQUFJLENBQ0YsQ0FDTDtDQUVILEFBQUM7SUFFRixRQUE0QixHQUFiTCxZQUFZIn0=
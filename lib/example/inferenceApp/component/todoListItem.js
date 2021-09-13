"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var Component = _reaction.React.Component;
var TodoListItem = /*#__PURE__*/ function(Component) {
    _inherits(TodoListItem, Component);
    function TodoListItem() {
        _classCallCheck(this, TodoListItem);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItem).apply(this, arguments));
    }
    _createClass(TodoListItem, [
        {
            key: "render",
            value: function render() {
                var _props = this.props, text = _props.text, className = "";
                return(/*#__PURE__*/ _reaction.React.createElement("li", {
                    className: className,
                    onClick: (function() {
                        this.toggleClass("completed");
                    }).bind(this)
                }, text));
            }
        }
    ]);
    return TodoListItem;
}(Component);
exports.default = TodoListItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVG9kb0xpc3RJdGVtIiwicmVuZGVyIiwidGV4dCIsInByb3BzIiwiY2xhc3NOYW1lIiwibGkiLCJvbkNsaWNrIiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFHLFNBQVMsR0FGSyxTQUFVLE9BRXhCLFNBQVM7SUFFSSxZQUFZLGlCQUFsQixRQUFRO2NBQUYsWUFBWTthQUFaLFlBQVk7OEJBQVosWUFBWTtnRUFBWixZQUFZOztpQkFBWixZQUFZOztZQUMvQixHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxHQUFJLENBQUM7Z0JBQ1QsR0FBSyxDQUFZLE1BQVUsR0FBVixJQUFJLENBQUMsS0FBSyxFQUFuQixJQUFJLEdBQUssTUFBVSxDQUFuQixJQUFJLEVBQ04sU0FBUztnQkFFZixNQUFNLGVBVFksU0FBVSxzQkFXekIsRUFBRTtvQkFBQyxTQUFTLEVBQUUsU0FBUztvQkFDcEIsT0FBTyxHQUFFLFFBQ25CLEdBRHlCLENBQUM7d0JBRWQsSUFBSSxDQUFDLFdBQVcsRUFBQyxTQUFXO29CQUU5QixDQUFDO21CQUVGLElBQUk7WUFHWCxDQUFDOzs7V0FqQmtCLFlBQVk7RUFBUyxTQUFTO2tCQUE5QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuIl19
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
var Component1 = _reaction.React.Component;
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
                var _this = this;
                var text = this.props.text, className = "";
                return(/*#__PURE__*/ _reaction.React.createElement("li", {
                    className: className,
                    onClick: function() {
                        _this.toggleClass("completed");
                    }
                }, text));
            }
        }
    ]);
    return TodoListItem;
}(Component1);
exports.default = TodoListItem;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJUb2RvTGlzdEl0ZW0iLCJyZW5kZXIiLCJ0ZXh0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJsaSIsIm9uQ2xpY2siLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFVLENBQVYsU0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUdBLFVBQVMsR0FGSyxTQUFVLE9BRXhCQSxTQUFTO0lBRUlDLFlBQVksaUJBQWxCLFFBQVE7Y0FBRkEsWUFBWTthQUFaQSxZQUFZOzhCQUFaQSxZQUFZO2dFQUFaQSxZQUFZOztpQkFBWkEsWUFBWTs7WUFDL0JDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLEdBQUksQ0FBQzs7Z0JBQ1QsR0FBSyxDQUFHQyxJQUFJLEdBQUssSUFBSSxDQUFDQyxLQUFLLENBQW5CRCxJQUFJLEVBQ05FLFNBQVMsR0FBRyxDQUFFO2dCQUVwQixNQUFNLGVBVFksU0FBVSxxQkFXekJDLENBQUU7b0JBQUNELFNBQVMsRUFBRUEsU0FBUztvQkFDcEJFLE9BQU8sRUFBRSxRQUNuQixHQUR5QixDQUFDOzhCQUVUQyxXQUFXLENBQUMsQ0FBVztvQkFFOUIsQ0FBQzttQkFFRkwsSUFBSTtZQUdYLENBQUM7OztXQWpCa0JGLFlBQVk7RUFBU0QsVUFBUztrQkFBOUJDLFlBQVkifQ==
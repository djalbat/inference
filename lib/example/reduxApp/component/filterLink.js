"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _constants = require("../constants");
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
var FilterLink = /*#__PURE__*/ function(Component) {
    _inherits(FilterLink, Component);
    function FilterLink() {
        _classCallCheck(this, FilterLink);
        return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink).apply(this, arguments));
    }
    _createClass(FilterLink, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _context = this.context, store = _context.store;
                this.unsubscribe = store.subscribe((function() {
                    return this.forceUpdate();
                }).bind(this));
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.unsubscribe();
            }
        },
        {
            key: "render",
            value: function render() {
                var _context = this.context, store = _context.store, state = store.getState(), visibilityFilter = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter;
                if (active) {
                    return(/*#__PURE__*/ _reaction.React.createElement("span", null, children));
                }
                return(/*#__PURE__*/ _reaction.React.createElement("a", {
                    href: "#",
                    className: "filter",
                    onClick: function(event) {
                        event.preventDefault();
                        var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                            type: type,
                            visibilityFilter: visibilityFilter
                        };
                        store.dispatch(action);
                    }
                }, children));
            }
        }
    ]);
    return FilterLink;
}(Component);
exports.default = FilterLink;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSIiwiQ29tcG9uZW50IiwiRmlsdGVyTGluayIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwic3RhdGUiLCJnZXRTdGF0ZSIsInZpc2liaWxpdHlGaWx0ZXIiLCJjaGlsZHJlbiIsImZpbHRlciIsInByb3BzIiwiYWN0aXZlIiwic3BhbiIsImEiLCJocmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiYWN0aW9uIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFTSxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxHQUFLLENBQUcsU0FBUyxHQUpLLFNBQVUsT0FJeEIsU0FBUztJQUVJLFVBQVUsaUJBQWhCLFFBQVE7Y0FBRixVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVO2dFQUFWLFVBQVU7O2lCQUFWLFVBQVU7O1lBQzdCLEdBQWlCLEdBQWpCLGlCQUFpQjttQkFBakIsUUFBUSxDQUFSLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBYSxRQUFZLEdBQVosSUFBSSxDQUFDLE9BQU8sRUFBdEIsS0FBSyxHQUFLLFFBQVksQ0FBdEIsS0FBSztnQkFFYixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUMsUUFBUTtvQkFBRixNQUFNLENBQU4sSUFBSSxDQUFDLFdBQVc7O1lBQzNELENBQUM7OztZQUVELEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXO1lBQ2xCLENBQUM7OztZQUVELEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLEdBQUcsQ0FBQztnQkFDUixHQUFLLENBQWEsUUFBWSxHQUFaLElBQUksQ0FBQyxPQUFPLEVBQXRCLEtBQUssR0FBSyxRQUFZLENBQXRCLEtBQUssRUFDUCxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFDcEIsZ0JBQWdCLEdBQUssS0FBSyxDQUExQixnQkFBZ0IsRUFDSyxNQUFVLEdBQVYsSUFBSSxDQUFDLEtBQUssRUFBL0IsUUFBUSxHQUFhLE1BQVUsQ0FBL0IsUUFBUSxFQUFFLE1BQU0sR0FBSyxNQUFVLENBQXJCLE1BQU0sRUFDbEIsTUFBTSxHQUFJLE1BQU0sS0FBSyxnQkFBZ0I7Z0JBRTNDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxNQUFNLGVBekJVLFNBQVUsc0JBMkJ2QixJQUFJLFNBQUUsUUFBUTtnQkFHbkIsQ0FBQztnQkFFRCxNQUFNLGVBaENZLFNBQVUsc0JBa0N6QixDQUFDO29CQUFDLElBQUksR0FBQyxDQUFHO29CQUNSLFNBQVMsR0FBQyxNQUFRO29CQUNsQixPQUFPLEVBQUUsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO3dCQUVuQixLQUFLLENBQUMsY0FBYzt3QkFFcEIsR0FBSyxDQUFDLElBQUksR0F0Q2lCLFVBQWMsd0JBdUNuQyxnQkFBZ0IsR0FBRyxNQUFNLEVBQ3pCLE1BQU0sR0FBRyxDQUFDOzRCQUNSLElBQUksRUFBSixJQUFJOzRCQUNKLGdCQUFnQixFQUFoQixnQkFBZ0I7d0JBQ2xCLENBQUM7d0JBRVAsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNO29CQUV2QixDQUFDO21CQUVELFFBQVE7WUFHZixDQUFDOzs7V0FoRGtCLFVBQVU7RUFBUyxTQUFTO2tCQUE1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iXX0=
(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // node_modules/reaction/lib/reactClass.js
  var require_reactClass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClass;
      }
    });
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ReactClass = /* @__PURE__ */ function() {
      function ReactClass2(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        _classCallCheck(this, ReactClass2);
        this.render = render;
        if (getInitialState) {
          this.getInitialState = getInitialState;
        }
        if (getChildContext) {
          this.getChildContext = getChildContext;
        }
        if (componentDidMount) {
          this.componentDidMount = componentDidMount;
        }
        if (componentWillUnmount) {
          this.componentWillUnmount = componentWillUnmount;
        }
        this.mixins = mixins;
      }
      _createClass(ReactClass2, [
        {
          key: "getInitialState",
          value: function getInitialState() {
            return {};
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ], [
        {
          key: "create",
          value: function create(object) {
            var render = object.render, getInitialState = object.getInitialState, getChildContext = object.getChildContext, componentDidMount = object.componentDidMount, componentWillUnmount = object.componentWillUnmount, mixins = object.mixins;
            return new ReactClass2(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
          }
        }
      ]);
      return ReactClass2;
    }();
  });

  // node_modules/reaction/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      first: function() {
        return first;
      },
      flatten: function() {
        return flatten;
      },
      guarantee: function() {
        return guarantee;
      },
      remaining: function() {
        return remaining;
      }
    });
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function first(array) {
      return array[0];
    }
    function flatten(array) {
      return array.reduce(function(array2, element) {
        array2 = array2.concat(element);
        return array2;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
    function remaining(element, array) {
      if (element === null) {
        return array;
      }
      var index = indexOf(element, array);
      return array.slice(index + 1);
    }
    function indexOf(element, array) {
      var index = null;
      array.some(function(currentElement, currentElementIndex) {
        if (currentElement === element) {
          index = currentElementIndex;
          return true;
        }
      });
      return index;
    }
  });

  // node_modules/reaction/lib/virtualDOMElement.js
  var require_virtualDOMElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return VirtualDOMElement;
      }
    });
    var _array = require_array();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var VirtualDOMElement = /* @__PURE__ */ function() {
      function VirtualDOMElement2(props) {
        _classCallCheck(this, VirtualDOMElement2);
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      _createClass(VirtualDOMElement2, [
        {
          key: "getParent",
          value: function getParent() {
            return this.parent;
          }
        },
        {
          key: "getChildren",
          value: function getChildren() {
            return this.children;
          }
        },
        {
          key: "getFirstChild",
          value: function getFirstChild() {
            var firstChild = (0, _array.first)(this.children) || null;
            return firstChild;
          }
        },
        {
          key: "mount",
          value: function mount(parent, children) {
            this.parent = parent;
            this.children = children;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.parent = null;
            this.children = null;
          }
        }
      ]);
      return VirtualDOMElement2;
    }();
  });

  // node_modules/reaction/lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
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
    function setAttribute(name, value) {
      var firstChild = this.getFirstChild();
      return firstChild.setAttribute(name, value);
    }
    function getAttribute(name) {
      var firstChild = this.getFirstChild();
      return firstChild.getAttribute(name);
    }
    function clearAttribute(name) {
      var firstChild = this.getFirstChild();
      firstChild.clearAttribute(name);
    }
    function addAttribute(name, value) {
      var firstChild = this.getFirstChild();
      firstChild.addAttribute(name, value);
    }
    function removeAttribute(name) {
      var firstChild = this.getFirstChild();
      firstChild.removeAttribute(name);
    }
    function hasAttribute(name) {
      var firstChild = this.getFirstChild();
      return firstChild.hasAttribute(name);
    }
    function setClass(className) {
      var firstChild = this.getFirstChild();
      firstChild.setClass(className);
    }
    function addClass(className) {
      var firstChild = this.getFirstChild();
      firstChild.addClass(className);
    }
    function removeClass(className) {
      var firstChild = this.getFirstChild();
      firstChild.removeClass(className);
    }
    function toggleClass(className) {
      var firstChild = this.getFirstChild();
      firstChild.toggleClass(className);
    }
    function hasClass(className) {
      var firstChild = this.getFirstChild();
      return firstChild.hasClass(className);
    }
    function hasClasses(classNames) {
      var firstChild = this.getFirstChild();
      return firstChild.hasClasses(classNames);
    }
    function clearClasses() {
      var firstChild = this.getFirstChild();
      firstChild.clearClasses();
    }
    function getTagName() {
      return null;
    }
    function getStyle(name) {
      var firstChild = this.getFirstChild();
      return firstChild.getStyle(name);
    }
    function setStyle(name, value) {
      var firstChild = this.getFirstChild();
      firstChild.setStyle(name, value);
    }
    var _default = {
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // node_modules/reaction/lib/virtualDOM/react.js
  var require_react = __commonJS((exports) => {
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
    var _virtualDOMElement = /* @__PURE__ */ _interopRequireDefault(require_virtualDOMElement());
    var _reactElement = /* @__PURE__ */ _interopRequireDefault(require_reactElement());
    var _array = require_array();
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ReactElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ReactElement2, VirtualDOMElement);
      var _super = _createSuper(ReactElement2);
      function ReactElement2(props) {
        _classCallCheck(this, ReactElement2);
        var _this;
        _this = _super.call(this, props);
        _this.state = void 0;
        _this.context = void 0;
        return _this;
      }
      _createClass(ReactElement2, [
        {
          key: "mount",
          value: function mount(parent, reference2, context) {
            var _this = this;
            this.context = context;
            var childContext = this.getChildContext(context), children = (0, _array.guarantee)(this.render());
            _get(_getPrototypeOf(ReactElement2.prototype), "mount", this).call(this, parent, children);
            children.forEach(function(child) {
              var childParent = _this, childReference = reference2;
              child.mount(childParent, childReference, childContext);
            });
            this.componentDidMount();
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            this.context = context;
            this.componentWillUnmount();
            var childContext = this.getChildContext(context), children = this.getChildren();
            children.forEach(function(child) {
              return child.unmount(childContext);
            });
            _get(_getPrototypeOf(ReactElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "remount",
          value: function remount(update) {
            var childParent = this, childReference = this.getChildReference(), childContext = this.getChildContext(this.context);
            this.children.forEach(function(child) {
              return child.unmount(childContext);
            });
            this.children = (0, _array.guarantee)(this.render(update));
            this.children.forEach(function(child) {
              return child.mount(childParent, childReference, childContext);
            });
          }
        },
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return null;
          }
        },
        {
          key: "getState",
          value: function getState() {
            return this.state;
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState(initialState) {
            this.state = initialState;
          }
        },
        {
          key: "setState",
          value: function setState(state) {
            this.state = state;
            this.remount();
          }
        },
        {
          key: "updateState",
          value: function updateState(newState) {
            var oldState = this.state;
            this.state = Object.assign(oldState, newState);
            this.remount();
          }
        },
        {
          key: "forceUpdate",
          value: function forceUpdate(update) {
            this.remount(update);
          }
        },
        {
          key: "getChildReference",
          value: function getChildReference() {
            var parent = this.getParent(), child = this;
            return reference(parent, child);
          }
        }
      ]);
      return ReactElement2;
    }(_virtualDOMElement.default);
    Object.assign(ReactElement.prototype, _reactElement.default);
    var _default = ReactElement;
    function reference(parent, child) {
      var reference2 = findReference(parent, child), parentDOMElement = parent.getDOMElement();
      while (reference2 === null && parentDOMElement === null) {
        child = parent;
        parent = parent.getParent();
        reference2 = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
      }
      return reference2;
    }
    function findReference(parent, child) {
      var children = parent.getChildren(), remainingChildren = (0, _array.remaining)(child, children);
      return remainingChildren.reduce(function(reference2, remainingChild) {
        if (reference2 === null) {
          var remainingChildDOMElement = remainingChild.getDOMElement();
          if (remainingChildDOMElement !== null) {
            reference2 = remainingChild;
          } else {
            child = null;
            parent = remainingChild;
            reference2 = findReference(parent, child);
          }
        }
        return reference2;
      }, null);
    }
  });

  // node_modules/reaction/lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactComponent;
      }
    });
    var _react = /* @__PURE__ */ _interopRequireDefault(require_react());
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ReactComponent = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactComponent2, ReactElement);
      var _super = _createSuper(ReactComponent2);
      function ReactComponent2(props) {
        _classCallCheck(this, ReactComponent2);
        var _this;
        _this = _super.call(this, props);
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _createClass(ReactComponent2, [
        {
          key: "getInitialState",
          value: function getInitialState() {
            return {};
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ]);
      return ReactComponent2;
    }(_react.default);
  });

  // node_modules/reaction/lib/virtualDOM/container.js
  var require_container = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ContainerElement;
      }
    });
    var _virtualDOMElement = /* @__PURE__ */ _interopRequireDefault(require_virtualDOMElement());
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ContainerElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ContainerElement2, VirtualDOMElement);
      var _super = _createSuper(ContainerElement2);
      function ContainerElement2(props, domElement) {
        _classCallCheck(this, ContainerElement2);
        var _this;
        _this = _super.call(this, props);
        _this.domElement = domElement;
        return _this;
      }
      _createClass(ContainerElement2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "mount",
          value: function mount(parent, reference) {
            var children = this.getChildren();
            _get(_getPrototypeOf(ContainerElement2.prototype), "mount", this).call(this, parent, children);
            parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
            return this.domElement;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.domElement.parentElement.removeChild(this.domElement);
            _get(_getPrototypeOf(ContainerElement2.prototype), "unmount", this).call(this);
          }
        }
      ], [
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var children = [], props = {
              children
            }, virtualDOMNode = new ContainerElement2(props, domElement);
            return virtualDOMNode;
          }
        }
      ]);
      return ContainerElement2;
    }(_virtualDOMElement.default);
    function parentDOMElement(parent) {
      var parentDOMElement2 = parent.getDOMElement();
      while (parentDOMElement2 === null) {
        parent = parent.getParent();
        parentDOMElement2 = parent.getDOMElement();
      }
      return parentDOMElement2;
    }
    function referenceDOMElement(reference) {
      var referenceDOMElement2 = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement2;
    }
  });

  // node_modules/reaction/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      FOR: function() {
        return FOR;
      },
      REF: function() {
        return REF;
      },
      CLASS: function() {
        return CLASS;
      },
      STRING: function() {
        return STRING;
      },
      OBJECT: function() {
        return OBJECT;
      },
      BOOLEAN: function() {
        return BOOLEAN;
      },
      FUNCTION: function() {
        return FUNCTION;
      },
      HTML_FOR: function() {
        return HTML_FOR;
      },
      CLASS_NAME: function() {
        return CLASS_NAME;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      HTTP_WWW_W3_ORG_2000_SVG: function() {
        return HTTP_WWW_W3_ORG_2000_SVG;
      }
    });
    var FOR = "for";
    var REF = "ref";
    var CLASS = "class";
    var STRING = "string";
    var OBJECT = "object";
    var BOOLEAN = "boolean";
    var FUNCTION = "function";
    var HTML_FOR = "htmlFor";
    var CLASS_NAME = "className";
    var EMPTY_STRING = "";
    var HTTP_WWW_W3_ORG_2000_SVG = "http://www.w3.org/2000/svg";
  });

  // node_modules/reaction/lib/mixins/containerElement.js
  var require_containerElement = __commonJS((exports) => {
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
    var _constants = require_constants();
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function setAttribute(name, value) {
      var _this = this;
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          _this.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
    function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
    function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
    function removeAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
    function setClass(className) {
      this.domElement.className = className;
    }
    function addClass(className) {
      this.domElement.classList.add(className);
    }
    function removeClass(className) {
      this.domElement.classList.remove(className);
    }
    function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
    function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
    function hasClasses(classNames) {
      var _this = this;
      return classNames.every(function(className) {
        return _this.hasClass(className);
      });
    }
    function clearClasses() {
      this.domElement.className = _constants.EMPTY_STRING;
    }
    function getTagName() {
      return this.domElement.tagName;
    }
    function getStyle(name) {
      return this.domElement.style[name];
    }
    function setStyle(name, value) {
      this.domElement.style[name] = value;
    }
    var _default = {
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // node_modules/reaction/lib/virtualDOM/container/element.js
  var require_element = __commonJS((exports) => {
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
    var _container = /* @__PURE__ */ _interopRequireDefault(require_container());
    var _containerElement = /* @__PURE__ */ _interopRequireDefault(require_containerElement());
    var _constants = require_constants();
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Element = /* @__PURE__ */ function(ContainerElement) {
      _inherits(Element2, ContainerElement);
      var _super = _createSuper(Element2);
      function Element2() {
        _classCallCheck(this, Element2);
        return _super.apply(this, arguments);
      }
      _createClass(Element2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(Element2.prototype), "mount", this).call(this, parent, reference);
            var childParent = this, childReference = null, childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              return child.mount(childParent, childReference, childContext);
            });
            this.applyProps();
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            var childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              return child.unmount(childContext);
            });
            _get(_getPrototypeOf(Element2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "applyProps",
          value: function applyProps() {
            var _this = this;
            var names = Object.keys(this.props);
            names.forEach(function(name) {
              var value = _this.props[name];
              if (false) {
              } else if (_this.isHandlerName(name)) {
                _this.setHandler(name, value);
              } else if (_this.isAttributeName(name)) {
                _this.setAttribute(name, value);
              } else if (name === _constants.REF) {
                var callback = value;
                callback(_this.domElement);
              }
            });
          }
        },
        {
          key: "setHandler",
          value: function setHandler(name, value) {
            var eventType = name.substr(2).toLowerCase(), handler = value;
            this.domElement.addEventListener(eventType, handler);
          }
        },
        {
          key: "isHandlerName",
          value: function isHandlerName(name) {
            return /^on/.test(name);
          }
        }
      ]);
      return Element2;
    }(_container.default);
    Object.assign(Element.prototype, _containerElement.default);
    var _default = Element;
  });

  // node_modules/reaction/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      isSVGTagName: function() {
        return isSVGTagName;
      },
      isSVGAttributeName: function() {
        return isSVGAttributeName;
      },
      isHTMLAttributeName: function() {
        return isHTMLAttributeName;
      }
    });
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // node_modules/reaction/lib/virtualDOM/container/element/svg.js
  var require_svg = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SVGElement;
      }
    });
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element());
    var _name = require_name();
    var _constants = require_constants();
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
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var SVGElement = /* @__PURE__ */ function(Element) {
      _inherits(SVGElement2, Element);
      var _super = _createSuper(SVGElement2);
      function SVGElement2(tagName, props) {
        _classCallCheck(this, SVGElement2);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _super.call(this, props, domElement);
      }
      _createClass(SVGElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name.isSVGAttributeName)(name);
          }
        }
      ]);
      return SVGElement2;
    }(_wrapNativeSuper(_element.default));
  });

  // node_modules/reaction/lib/virtualDOM/container/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return HTMLElement;
      }
    });
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element());
    var _name = require_name();
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
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var HTMLElement = /* @__PURE__ */ function(Element) {
      _inherits(HTMLElement2, Element);
      var _super = _createSuper(HTMLElement2);
      function HTMLElement2(tagName, props) {
        _classCallCheck(this, HTMLElement2);
        var domElement = document.createElement(tagName);
        return _super.call(this, props, domElement);
      }
      _createClass(HTMLElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name.isHTMLAttributeName)(name);
          }
        }
      ]);
      return HTMLElement2;
    }(_wrapNativeSuper(_element.default));
  });

  // node_modules/reaction/lib/virtualDOM/react/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClassElement;
      }
    });
    var _react = /* @__PURE__ */ _interopRequireDefault(require_react());
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ReactClassElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactClassElement2, ReactElement);
      var _super = _createSuper(ReactClassElement2);
      function ReactClassElement2(reactClass, props) {
        _classCallCheck(this, ReactClassElement2);
        var _this;
        _this = _super.call(this, props);
        _this.reactClass = reactClass;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _createClass(ReactClassElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactClass.render.call(this, update);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
            return this.reactClass.getInitialState.call(this);
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return this.reactClass.getChildContext.call(this, context);
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.reactClass.componentDidMount.call(this);
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.reactClass.componentWillUnmount.call(this);
          }
        }
      ]);
      return ReactClassElement2;
    }(_react.default);
  });

  // node_modules/reaction/lib/virtualDOM/react/function.js
  var require_function = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactFunctionElement;
      }
    });
    var _react = /* @__PURE__ */ _interopRequireDefault(require_react());
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ReactFunctionElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactFunctionElement2, ReactElement);
      var _super = _createSuper(ReactFunctionElement2);
      function ReactFunctionElement2(reactFunction, props) {
        _classCallCheck(this, ReactFunctionElement2);
        var _this;
        _this = _super.call(this, props);
        _this.reactFunction = reactFunction;
        return _this;
      }
      _createClass(ReactFunctionElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactFunction(this.props, this.context, this);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return context;
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
          }
        }
      ]);
      return ReactFunctionElement2;
    }(_react.default);
  });

  // node_modules/reaction/lib/virtualDOM/container/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TextElement;
      }
    });
    var _container = /* @__PURE__ */ _interopRequireDefault(require_container());
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
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var TextElement = /* @__PURE__ */ function(ContainerElement) {
      _inherits(TextElement2, ContainerElement);
      var _super = _createSuper(TextElement2);
      function TextElement2(text) {
        _classCallCheck(this, TextElement2);
        var domElement = document.createTextNode(text), children = [], props = {
          children
        };
        return _super.call(this, props, domElement);
      }
      _createClass(TextElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(TextElement2.prototype), "mount", this).call(this, parent, reference);
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            _get(_getPrototypeOf(TextElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        }
      ]);
      return TextElement2;
    }(_container.default);
  });

  // node_modules/reaction/lib/utilities/sanitiise.js
  var require_sanitiise = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      removeFalseyChildren: function() {
        return removeFalseyChildren;
      },
      replaceStringsWithTextChildren: function() {
        return replaceStringsWithTextChildren;
      }
    });
    var _textElement = /* @__PURE__ */ _interopRequireDefault(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyChildren(children) {
      children = children.reduce(function(children2, child) {
        if (child) {
          children2.push(child);
        }
        return children2;
      }, []);
      return children;
    }
    function replaceStringsWithTextChildren(children) {
      children = children.map(function(child) {
        if ((typeof child === "undefined" ? "undefined" : _typeof(child)) === _constants.STRING) {
          var text = child, textElement = new _textElement.default(text);
          child = textElement;
        }
        return child;
      });
      return children;
    }
  });

  // node_modules/reaction/lib/react.js
  var require_react2 = __commonJS((exports) => {
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
    var _reactClass = /* @__PURE__ */ _interopRequireDefault(require_reactClass());
    var _reactComponent = /* @__PURE__ */ _interopRequireDefault(require_reactComponent());
    var _svg = /* @__PURE__ */ _interopRequireDefault(require_svg());
    var _html = /* @__PURE__ */ _interopRequireDefault(require_html());
    var _class = /* @__PURE__ */ _interopRequireDefault(require_class());
    var _function = /* @__PURE__ */ _interopRequireDefault(require_function());
    var _array = require_array();
    var _name = require_name();
    var _constants = require_constants();
    var _sanitiise = require_sanitiise();
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        children = sanitiseChildren(children);
        var props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = (0, _name.isSVGTagName)(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
        } else if (_instanceof(firstArgument, _reactClass.default)) {
          var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
          element = reactClassElement;
          var mixins = reactClass.mixins;
          assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
          var ReactComponentSubClass = firstArgument, reactComponent = new ReactComponentSubClass(props);
          element = reactComponent;
          assignReactComponentMixins(ReactComponentSubClass, element);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
          element = reactFunctionElement;
        }
      }
      return element;
    }
    var Component = _reactComponent.default;
    var React = {
      Component,
      createClass,
      createElement
    };
    var _default = React;
    function sanitiseChildren(children) {
      children = (0, _array.flatten)(children);
      children = (0, _sanitiise.removeFalseyChildren)(children);
      children = (0, _sanitiise.replaceStringsWithTextChildren)(children);
      return children;
    }
    function assignReactComponentMixins(ReactComponentSubClass, element) {
      var mixins = ReactComponentSubClass.mixins;
      var ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass);
      if (ReactComponentSubClassPrototype !== _reactComponent.default) {
        ReactComponentSubClass = ReactComponentSubClassPrototype;
        assignReactComponentMixins(ReactComponentSubClass, element);
      }
      assignMixins(mixins, element);
    }
    function assignMixins(mixins, element) {
      if (mixins) {
        mixins.forEach(function(mixin) {
          var name = mixin.name;
          element[name] = mixin.bind(element);
        });
      }
    }
    function isSubclassOf(argument, Class) {
      var subclassOf = _instanceof(argument.prototype, Class);
      return subclassOf;
    }
  });

  // node_modules/reaction/lib/reactDOM.js
  var require_reactDOM = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactDOM;
      }
    });
    var _container = /* @__PURE__ */ _interopRequireDefault(require_container());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactDOM = /* @__PURE__ */ function() {
      function ReactDOM2() {
        _classCallCheck(this, ReactDOM2);
      }
      _createClass(ReactDOM2, null, [
        {
          key: "render",
          value: function render(element, parentDOMElement) {
            var parent = _container.default.fromDOMElement(parentDOMElement), reference = null, context = {};
            element.mount(parent, reference, context);
          }
        }
      ]);
      return ReactDOM2;
    }();
  });

  // node_modules/reaction/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      React: function() {
        return _react.default;
      },
      ReactDOM: function() {
        return _reactDOM.default;
      }
    });
    var _react = /* @__PURE__ */ _interopRequireDefault(require_react2());
    var _reactDOM = /* @__PURE__ */ _interopRequireDefault(require_reactDOM());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/reduxApp/redux.js
  var require_redux = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      createStore: function() {
        return createStore;
      },
      combineReducers: function() {
        return combineReducers;
      }
    });
    var createStore = function(reducer) {
      var state, listeners = [];
      var getState = function() {
        return state;
      };
      var dispatch = function(action) {
        state = reducer(state, action);
        listeners.forEach(function(listener) {
          return listener();
        });
      };
      var subscribe = function(listener) {
        listeners.push(listener);
        return function() {
          unsubscribe(listener);
        };
      };
      var unsubscribe = function(l) {
        listeners = listeners.filter(function(listener) {
          return listener !== l;
        });
      };
      dispatch();
      return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
      };
    };
    var combineReducers = function(reducers) {
      return function() {
        var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;
        var keys = Object.keys(reducers), nextState = keys.reduce(function(nextState2, key) {
          var reducer = reducers[key];
          nextState2[key] = reducer(state[key], action);
          return nextState2;
        }, {});
        return nextState;
      };
    };
  });

  // lib/example/reduxApp/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ADD_TODO: function() {
        return ADD_TODO;
      },
      SHOW_ALL: function() {
        return SHOW_ALL;
      },
      SHOW_ACTIVE: function() {
        return SHOW_ACTIVE;
      },
      TOGGLE_TODO: function() {
        return TOGGLE_TODO;
      },
      SHOW_COMPLETED: function() {
        return SHOW_COMPLETED;
      },
      SET_VISIBILITY_FILTER: function() {
        return SET_VISIBILITY_FILTER;
      }
    });
    var ADD_TODO = "ADD_TODO";
    var SHOW_ALL = "SHOW_ALL";
    var SHOW_ACTIVE = "SHOW_ACTIVE";
    var TOGGLE_TODO = "TOGGLE_TODO";
    var SHOW_COMPLETED = "SHOW_COMPLETED";
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
  });

  // lib/example/reduxApp/reducer/todos.js
  var require_todos = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return todos;
      }
    });
    var _constants = require_constants2();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function todos() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var type = action.type;
      var todos2 = state;
      switch (type) {
        case _constants.ADD_TODO:
          todos2 = addTodoToTodos(todos2, action);
          break;
        case _constants.TOGGLE_TODO:
          todos2 = toggleTodos(todos2, action);
          break;
      }
      state = todos2;
      return state;
    }
    function addTodoToTodos(todos2, action) {
      var id = action.id, text = action.text, completed = false, todo = {
        id,
        text,
        completed
      };
      todos2 = _to_consumable_array(todos2).concat([
        todo
      ]);
      return todos2;
    }
    function toggleTodos(todos2, action) {
      var id = action.id;
      todos2 = todos2.map(function(todo) {
        if (todo.id === id) {
          var completed = todo.completed;
          completed = !completed;
          todo.completed = completed;
        }
        return todo;
      });
      return todos2;
    }
  });

  // lib/example/reduxApp/reducer/visibilityFilter.js
  var require_visibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return visibilityFilter;
      }
    });
    var _constants = require_constants2();
    function visibilityFilter() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.SHOW_ALL, action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var type = action.type;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          var visibilityFilter2 = action.visibilityFilter;
          state = visibilityFilter2;
          break;
      }
      return state;
    }
  });

  // lib/example/reduxApp/reducer.js
  var require_reducer = __commonJS((exports) => {
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
    var _redux = require_redux();
    var _todos = /* @__PURE__ */ _interop_require_default(require_todos());
    var _visibilityFilter = /* @__PURE__ */ _interop_require_default(require_visibilityFilter());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var reducer = (0, _redux.combineReducers)({
      todos: _todos.default,
      visibilityFilter: _visibilityFilter.default
    });
    var _default = reducer;
  });

  // lib/example/reduxApp/component/filterLink.js
  var require_filterLink = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return FilterLink;
      }
    });
    var _reaction = require_lib();
    var _constants = require_constants2();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var FilterLink = /* @__PURE__ */ function(Component2) {
      _inherits(FilterLink2, Component2);
      var _super = _create_super(FilterLink2);
      function FilterLink2() {
        _class_call_check(this, FilterLink2);
        return _super.apply(this, arguments);
      }
      _create_class(FilterLink2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var store = this.context.store;
            this.unsubscribe = store.subscribe(function() {
              return _this.forceUpdate();
            });
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
            var store = this.context.store, state = store.getState(), visibilityFilter = state.visibilityFilter, _this_props = this.props, children = _this_props.children, filter = _this_props.filter, active = filter === visibilityFilter;
            if (active) {
              return /* @__PURE__ */ _reaction.React.createElement("span", null, children);
            }
            return /* @__PURE__ */ _reaction.React.createElement("a", {
              href: "#",
              className: "filter",
              onClick: function(event) {
                event.preventDefault();
                var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter2 = filter, action = {
                  type,
                  visibilityFilter: visibilityFilter2
                };
                store.dispatch(action);
              }
            }, children);
          }
        }
      ]);
      return FilterLink2;
    }(Component);
  });

  // lib/example/reduxApp/component/footer.js
  var require_footer = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _filterLink = /* @__PURE__ */ _interop_require_default(require_filterLink());
    var _constants = require_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("p", null, "Show: ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
      }, "All"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
      }, "Active"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
      }, "Completed"));
    };
    var _default = Footer;
  });

  // lib/example/reduxApp/component/addTodo.js
  var require_addTodo = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _constants = require_constants2();
    var id = 0;
    var inputDOMElement;
    var AddTodo = function(props, context) {
      var store = context.store;
      return /* @__PURE__ */ _reaction.React.createElement("div", null, /* @__PURE__ */ _reaction.React.createElement("input", {
        ref: function(domElement) {
          inputDOMElement = domElement;
        }
      }), /* @__PURE__ */ _reaction.React.createElement("button", {
        onClick: function() {
          var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
            type,
            text,
            id
          };
          id++;
          store.dispatch(action);
          inputDOMElement.value = "";
        }
      }, "Add todo"));
    };
    var _default = AddTodo;
  });

  // lib/example/reduxApp/component/todoListItem.js
  var require_todoListItem = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var TodoListItem = function(props, context) {
      var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? "line-through" : "none", style = {
        textDecoration
      };
      return /* @__PURE__ */ _reaction.React.createElement("li", {
        style,
        onClick: clickHandler
      }, text);
    };
    var _default = TodoListItem;
  });

  // lib/example/reduxApp/component/todoListItems.js
  var require_todoListItems = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TodoListItems;
      }
    });
    var _reaction = require_lib();
    var _todoListItem = /* @__PURE__ */ _interop_require_default(require_todoListItem());
    var _constants = require_constants2();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItems2, Component2);
      var _super = _create_super(TodoListItems2);
      function TodoListItems2() {
        _class_call_check(this, TodoListItems2);
        return _super.apply(this, arguments);
      }
      _create_class(TodoListItems2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var store = this.context.store;
            this.unsubscribe = store.subscribe(function() {
              return _this.forceUpdate();
            });
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
            var store = this.context.store, state = store.getState(), todos = state.todos, visibilityFilter = state.visibilityFilter, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map(function(visibleTodo) {
              var id = visibleTodo.id, text = visibleTodo.text, completed = visibleTodo.completed;
              return /* @__PURE__ */ _reaction.React.createElement(_todoListItem.default, {
                text,
                completed,
                clickHandler: function() {
                  var type = _constants.TOGGLE_TODO, action = {
                    type,
                    id
                  };
                  store.dispatch(action);
                }
              });
            });
            return items;
          }
        }
      ]);
      return TodoListItems2;
    }(Component);
    var getVisibleTodos = function(todos, visibilityFilter) {
      var visibleTodos;
      switch (visibilityFilter) {
        case _constants.SHOW_ALL:
          visibleTodos = todos;
          break;
        case _constants.SHOW_ACTIVE:
          visibleTodos = todos.filter(function(todo) {
            var completed = todo.completed, active = !completed;
            return active;
          });
          break;
        case _constants.SHOW_COMPLETED:
          visibleTodos = todos.filter(function(todo) {
            var completed = todo.completed;
            return completed;
          });
          break;
      }
      return visibleTodos;
    };
  });

  // lib/example/reduxApp/component/todoList.js
  var require_todoList = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _todoListItems = /* @__PURE__ */ _interop_require_default(require_todoListItems());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("ul", null, /* @__PURE__ */ _reaction.React.createElement(_todoListItems.default, null));
    };
    var _default = TodoList;
  });

  // lib/example/reduxApp/component/todoApp.js
  var require_todoApp = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _footer = /* @__PURE__ */ _interop_require_default(require_footer());
    var _addTodo = /* @__PURE__ */ _interop_require_default(require_addTodo());
    var _todoList = /* @__PURE__ */ _interop_require_default(require_todoList());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoApp = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("div", null, /* @__PURE__ */ _reaction.React.createElement(_addTodo.default, null), /* @__PURE__ */ _reaction.React.createElement(_todoList.default, null), /* @__PURE__ */ _reaction.React.createElement(_footer.default, null));
    };
    var _default = TodoApp;
  });

  // lib/example/reduxApp/component/provider.js
  var require_provider = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Provider;
      }
    });
    var _reaction = require_lib();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var Provider = /* @__PURE__ */ function(Component2) {
      _inherits(Provider2, Component2);
      var _super = _create_super(Provider2);
      function Provider2() {
        _class_call_check(this, Provider2);
        return _super.apply(this, arguments);
      }
      _create_class(Provider2, [
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            var store = this.props.store, childContext = {
              store
            };
            return childContext;
          }
        },
        {
          key: "render",
          value: function render() {
            var children = this.props.children;
            return children;
          }
        }
      ]);
      return Provider2;
    }(Component);
  });

  // lib/example/reduxApp.js
  var require_reduxApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return reduxApp;
      }
    });
    var _reaction = require_lib();
    var _redux = require_redux();
    var _reducer = /* @__PURE__ */ _interop_require_default(require_reducer());
    var _todoApp = /* @__PURE__ */ _interop_require_default(require_todoApp());
    var _provider = /* @__PURE__ */ _interop_require_default(require_provider());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function reduxApp() {
      var store = (0, _redux.createStore)(_reducer.default), rootDOMElement = document.getElementById("root");
      _reaction.ReactDOM.render(/* @__PURE__ */ _reaction.React.createElement(_provider.default, {
        store
      }, /* @__PURE__ */ _reaction.React.createElement(_todoApp.default, null)), rootDOMElement);
    }
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      TRACE_LEVEL: function() {
        return TRACE_LEVEL;
      },
      DEBUG_LEVEL: function() {
        return DEBUG_LEVEL;
      },
      INFO_LEVEL: function() {
        return INFO_LEVEL;
      },
      WARNING_LEVEL: function() {
        return WARNING_LEVEL;
      },
      ERROR_LEVEL: function() {
        return ERROR_LEVEL;
      },
      FATAL_LEVEL: function() {
        return FATAL_LEVEL;
      },
      default: function() {
        return _default;
      }
    });
    var TRACE_LEVEL = "trace";
    var DEBUG_LEVEL = "debug";
    var INFO_LEVEL = "info";
    var WARNING_LEVEL = "warning";
    var ERROR_LEVEL = "error";
    var FATAL_LEVEL = "fatal";
    var _default = {
      TRACE_LEVEL,
      DEBUG_LEVEL,
      INFO_LEVEL,
      WARNING_LEVEL,
      ERROR_LEVEL,
      FATAL_LEVEL
    };
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      GET_METHOD: function() {
        return GET_METHOD;
      },
      POST_METHOD: function() {
        return POST_METHOD;
      },
      PATCH_METHOD: function() {
        return PATCH_METHOD;
      },
      DELETE_METHOD: function() {
        return DELETE_METHOD;
      },
      OPTIONS_METHOD: function() {
        return OPTIONS_METHOD;
      },
      default: function() {
        return _default;
      }
    });
    var GET_METHOD = "GET";
    var POST_METHOD = "POST";
    var PATCH_METHOD = "PATCH";
    var DELETE_METHOD = "DELETE";
    var OPTIONS_METHOD = "OPTIONS";
    var _default = {
      GET_METHOD,
      POST_METHOD,
      PATCH_METHOD,
      DELETE_METHOD,
      OPTIONS_METHOD
    };
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      PRAGMA_HEADER: function() {
        return PRAGMA_HEADER;
      },
      ACCEPT_HEADER: function() {
        return ACCEPT_HEADER;
      },
      LOCATION_HEADER: function() {
        return LOCATION_HEADER;
      },
      USER_AGENT_HEADER: function() {
        return USER_AGENT_HEADER;
      },
      CONTENT_TYPE_HEADER: function() {
        return CONTENT_TYPE_HEADER;
      },
      AUTHORIZATION_HEADER: function() {
        return AUTHORIZATION_HEADER;
      },
      CACHE_CONTROL_HEADER: function() {
        return CACHE_CONTROL_HEADER;
      },
      CONTENT_LENGTH_HEADER: function() {
        return CONTENT_LENGTH_HEADER;
      },
      TRANSFER_ENCODING_HEADER: function() {
        return TRANSFER_ENCODING_HEADER;
      },
      CONTENT_DISPOSITION_HEADER: function() {
        return CONTENT_DISPOSITION_HEADER;
      },
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      ACCESS_CONTROL_ALLOW_METHODS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      ACCESS_CONTROL_REQUEST_METHOD_HEADER: function() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      default: function() {
        return _default;
      }
    });
    var PRAGMA_HEADER = "pragma";
    var ACCEPT_HEADER = "accept";
    var LOCATION_HEADER = "location";
    var USER_AGENT_HEADER = "user-agent";
    var CONTENT_TYPE_HEADER = "content-type";
    var AUTHORIZATION_HEADER = "authorization";
    var CACHE_CONTROL_HEADER = "cache-control";
    var CONTENT_LENGTH_HEADER = "content-length";
    var TRANSFER_ENCODING_HEADER = "transfer-encoding";
    var CONTENT_DISPOSITION_HEADER = "content-disposition";
    var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
    var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
    var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
    var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
    var _default = {
      PRAGMA_HEADER,
      ACCEPT_HEADER,
      LOCATION_HEADER,
      USER_AGENT_HEADER,
      CONTENT_TYPE_HEADER,
      AUTHORIZATION_HEADER,
      CACHE_CONTROL_HEADER,
      CONTENT_LENGTH_HEADER,
      TRANSFER_ENCODING_HEADER,
      CONTENT_DISPOSITION_HEADER,
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
      ACCESS_CONTROL_ALLOW_METHODS_HEADER,
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
      ACCESS_CONTROL_REQUEST_METHOD_HEADER
    };
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      TAB_KEY_CODE: function() {
        return TAB_KEY_CODE;
      },
      SHIFT_KEY_CODE: function() {
        return SHIFT_KEY_CODE;
      },
      ENTER_KEY_CODE: function() {
        return ENTER_KEY_CODE;
      },
      ESCAPE_KEY_CODE: function() {
        return ESCAPE_KEY_CODE;
      },
      DELETE_KEY_CODE: function() {
        return DELETE_KEY_CODE;
      },
      BACKSPACE_KEY_CODE: function() {
        return BACKSPACE_KEY_CODE;
      },
      ARROW_UP_KEY_CODE: function() {
        return ARROW_UP_KEY_CODE;
      },
      ARROW_DOWN_KEY_CODE: function() {
        return ARROW_DOWN_KEY_CODE;
      },
      ARROW_LEFT_KEY_CODE: function() {
        return ARROW_LEFT_KEY_CODE;
      },
      ARROW_RIGHT_KEY_CODE: function() {
        return ARROW_RIGHT_KEY_CODE;
      },
      default: function() {
        return _default;
      }
    });
    var TAB_KEY_CODE = 9;
    var SHIFT_KEY_CODE = 16;
    var ENTER_KEY_CODE = 13;
    var ESCAPE_KEY_CODE = 27;
    var DELETE_KEY_CODE = 46;
    var BACKSPACE_KEY_CODE = 8;
    var ARROW_UP_KEY_CODE = 38;
    var ARROW_DOWN_KEY_CODE = 40;
    var ARROW_LEFT_KEY_CODE = 37;
    var ARROW_RIGHT_KEY_CODE = 39;
    var _default = {
      TAB_KEY_CODE,
      SHIFT_KEY_CODE,
      ENTER_KEY_CODE,
      ESCAPE_KEY_CODE,
      DELETE_KEY_CODE,
      BACKSPACE_KEY_CODE,
      ARROW_UP_KEY_CODE,
      ARROW_DOWN_KEY_CODE,
      ARROW_LEFT_KEY_CODE,
      ARROW_RIGHT_KEY_CODE
    };
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      UTF8_ENCODING: function() {
        return UTF8_ENCODING;
      },
      UTF_8_ENCODING: function() {
        return UTF_8_ENCODING;
      },
      BASE64_ENCODING: function() {
        return BASE64_ENCODING;
      },
      default: function() {
        return _default;
      }
    });
    var UTF8_ENCODING = "utf8";
    var UTF_8_ENCODING = "utf-8";
    var BASE64_ENCODING = "base64";
    var _default = {
      UTF8_ENCODING,
      UTF_8_ENCODING,
      BASE64_ENCODING
    };
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      UP_CHARACTER: function() {
        return UP_CHARACTER;
      },
      ETX_CHARACTER: function() {
        return ETX_CHARACTER;
      },
      BAR_CHARACTER: function() {
        return BAR_CHARACTER;
      },
      DASH_CHARACTER: function() {
        return DASH_CHARACTER;
      },
      DOWN_CHARACTER: function() {
        return DOWN_CHARACTER;
      },
      LEFT_CHARACTER: function() {
        return LEFT_CHARACTER;
      },
      RIGHT_CHARACTER: function() {
        return RIGHT_CHARACTER;
      },
      SPACE_CHARACTER: function() {
        return SPACE_CHARACTER;
      },
      COMMA_CHARACTER: function() {
        return COMMA_CHARACTER;
      },
      COLON_CHARACTER: function() {
        return COLON_CHARACTER;
      },
      PERIOD_CHARACTER: function() {
        return PERIOD_CHARACTER;
      },
      CTRL_C_CHARACTER: function() {
        return CTRL_C_CHARACTER;
      },
      WILDCARD_CHARACTER: function() {
        return WILDCARD_CHARACTER;
      },
      BACKTICK_DELIMITER: function() {
        return BACKTICK_DELIMITER;
      },
      NEW_LINE_CHARACTER: function() {
        return NEW_LINE_CHARACTER;
      },
      BACKSPACE_CHARACTER: function() {
        return BACKSPACE_CHARACTER;
      },
      AMPERSAND_CHARACTER: function() {
        return AMPERSAND_CHARACTER;
      },
      LESS_THAN_CHARACTER: function() {
        return LESS_THAN_CHARACTER;
      },
      GREATER_THAN_CHARACTER: function() {
        return GREATER_THAN_CHARACTER;
      },
      FORWARD_SLASH_CHARACTER: function() {
        return FORWARD_SLASH_CHARACTER;
      },
      CARRIAGE_RETURN_CHARACTER: function() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      EXCLAMATION_MARK_CHARACTER: function() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      default: function() {
        return _default;
      }
    });
    var UP_CHARACTER = "[A";
    var ETX_CHARACTER = "";
    var BAR_CHARACTER = "|";
    var DASH_CHARACTER = "-";
    var DOWN_CHARACTER = "[B";
    var LEFT_CHARACTER = "[D";
    var RIGHT_CHARACTER = "[C";
    var SPACE_CHARACTER = " ";
    var COMMA_CHARACTER = ",";
    var COLON_CHARACTER = ":";
    var PERIOD_CHARACTER = ".";
    var CTRL_C_CHARACTER = "^C";
    var WILDCARD_CHARACTER = "*";
    var BACKTICK_DELIMITER = "`";
    var NEW_LINE_CHARACTER = "\n";
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    var AMPERSAND_CHARACTER = "&";
    var LESS_THAN_CHARACTER = "&lt;";
    var GREATER_THAN_CHARACTER = "&gt;";
    var FORWARD_SLASH_CHARACTER = "/";
    var CARRIAGE_RETURN_CHARACTER = "\r";
    var EXCLAMATION_MARK_CHARACTER = "!";
    var _default = {
      UP_CHARACTER,
      ETX_CHARACTER,
      BAR_CHARACTER,
      DASH_CHARACTER,
      DOWN_CHARACTER,
      LEFT_CHARACTER,
      RIGHT_CHARACTER,
      SPACE_CHARACTER,
      COMMA_CHARACTER,
      COLON_CHARACTER,
      PERIOD_CHARACTER,
      CTRL_C_CHARACTER,
      WILDCARD_CHARACTER,
      BACKTICK_DELIMITER,
      NEW_LINE_CHARACTER,
      AMPERSAND_CHARACTER,
      BACKSPACE_CHARACTER,
      LESS_THAN_CHARACTER,
      GREATER_THAN_CHARACTER,
      FORWARD_SLASH_CHARACTER,
      CARRIAGE_RETURN_CHARACTER,
      EXCLAMATION_MARK_CHARACTER
    };
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ZERO_0_STATUS_CODE: function() {
        return ZERO_0_STATUS_CODE;
      },
      OK_200_STATUS_CODE: function() {
        return OK_200_STATUS_CODE;
      },
      FOUND_302_STATUS_CODE: function() {
        return FOUND_302_STATUS_CODE;
      },
      CREATED_201_STATUS_CODE: function() {
        return CREATED_201_STATUS_CODE;
      },
      SEE_OTHER_303_STATUS_CODE: function() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      FORBIDDEN_403_STATUS_CODE: function() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      NOT_FOUND_404_STATUS_CODE: function() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      NO_CONTENT_204_STATUS_CODE: function() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      BAD_GATEWAY_502_STATUS_CODE: function() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      BAD_REQUEST_400_STATUS_CODE: function() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      UNAUTHORIZED_401_STATUS_CODE: function() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      REQUEST_TIMEOUT_408_STATUS_CODE: function() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      TOO_MANY_REQUESTS_429_STATUS_CODE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_CODE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_CODE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      default: function() {
        return _default;
      }
    });
    var ZERO_0_STATUS_CODE = 0;
    var OK_200_STATUS_CODE = 200;
    var FOUND_302_STATUS_CODE = 302;
    var CREATED_201_STATUS_CODE = 201;
    var SEE_OTHER_303_STATUS_CODE = 303;
    var FORBIDDEN_403_STATUS_CODE = 403;
    var NOT_FOUND_404_STATUS_CODE = 404;
    var NO_CONTENT_204_STATUS_CODE = 204;
    var BAD_GATEWAY_502_STATUS_CODE = 502;
    var BAD_REQUEST_400_STATUS_CODE = 400;
    var UNAUTHORIZED_401_STATUS_CODE = 401;
    var REQUEST_TIMEOUT_408_STATUS_CODE = 408;
    var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
    var SERVICE_UNAVAILABLE_503_STATUS_CODE = 503;
    var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
    var _default = {
      ZERO_0_STATUS_CODE,
      OK_200_STATUS_CODE,
      FOUND_302_STATUS_CODE,
      CREATED_201_STATUS_CODE,
      SEE_OTHER_303_STATUS_CODE,
      FORBIDDEN_403_STATUS_CODE,
      NOT_FOUND_404_STATUS_CODE,
      NO_CONTENT_204_STATUS_CODE,
      BAD_GATEWAY_502_STATUS_CODE,
      BAD_REQUEST_400_STATUS_CODE,
      UNAUTHORIZED_401_STATUS_CODE,
      REQUEST_TIMEOUT_408_STATUS_CODE,
      TOO_MANY_REQUESTS_429_STATUS_CODE,
      SERVICE_UNAVAILABLE_503_STATUS_CODE,
      INTERNAL_SERVER_ERROR_500_STATUS_CODE
    };
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      TEXT_HTML_CONTENT_TYPE: function() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      TEXT_PLAIN_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      APPLICATION_JSON_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      APPLICATION_OCTET_STREAM_CONTENT_TYPE: function() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    var APPLICATION_OCTET_STREAM_CONTENT_TYPE = "application/octet-stream";
    var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
    var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
    var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
    var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
    var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
    var _default = {
      TEXT_HTML_CONTENT_TYPE,
      TEXT_PLAIN_CONTENT_TYPE,
      APPLICATION_JSON_CONTENT_TYPE,
      APPLICATION_OCTET_STREAM_CONTENT_TYPE,
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
    };
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ZERO_0_STATUS_MESSAGE: function() {
        return ZERO_0_STATUS_MESSAGE;
      },
      OK_200_STATUS_MESSAGE: function() {
        return OK_200_STATUS_MESSAGE;
      },
      FOUND_302_STATUS_MESSAGE: function() {
        return FOUND_302_STATUS_MESSAGE;
      },
      CREATED_201_STATUS_MESSAGE: function() {
        return CREATED_201_STATUS_MESSAGE;
      },
      SEE_OTHER_303_STATUS_MESSAGE: function() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      FORBIDDEN_403_STATUS_MESSAGE: function() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      NOT_FOUND_404_STATUS_MESSAGE: function() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      NO_CONTENT_204_STATUS_MESSAGE: function() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      BAD_GATEWAY_502_STATUS_MESSAGE: function() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      BAD_REQUEST_400_STATUS_MESSAGE: function() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      UNAUTHORIZED_401_STATUS_MESSAGE: function() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      REQUEST_TIMEOUT_408_STATUS_MESSAGE: function() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      default: function() {
        return _default;
      }
    });
    var ZERO_0_STATUS_MESSAGE = "";
    var OK_200_STATUS_MESSAGE = "OK";
    var FOUND_302_STATUS_MESSAGE = "Found";
    var CREATED_201_STATUS_MESSAGE = "Created";
    var SEE_OTHER_303_STATUS_MESSAGE = "See other";
    var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
    var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
    var NO_CONTENT_204_STATUS_MESSAGE = "No content";
    var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
    var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
    var UNAUTHORIZED_401_STATUS_MESSAGE = "Unauthorized";
    var REQUEST_TIMEOUT_408_STATUS_MESSAGE = "Request timeout";
    var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
    var SERVICE_UNAVAILABLE_503_STATUS_MESSAGE = "Service unavailable";
    var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
    var _default = {
      ZERO_0_STATUS_MESSAGE,
      OK_200_STATUS_MESSAGE,
      FOUND_302_STATUS_MESSAGE,
      CREATED_201_STATUS_MESSAGE,
      SEE_OTHER_303_STATUS_MESSAGE,
      FORBIDDEN_403_STATUS_MESSAGE,
      NOT_FOUND_404_STATUS_MESSAGE,
      NO_CONTENT_204_STATUS_MESSAGE,
      BAD_GATEWAY_502_STATUS_MESSAGE,
      BAD_REQUEST_400_STATUS_MESSAGE,
      UNAUTHORIZED_401_STATUS_MESSAGE,
      REQUEST_TIMEOUT_408_STATUS_MESSAGE,
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE,
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
    };
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      first: function() {
        return first;
      },
      second: function() {
        return second;
      },
      third: function() {
        return third;
      },
      fourth: function() {
        return fourth;
      },
      fifth: function() {
        return fifth;
      },
      fifthLast: function() {
        return fifthLast;
      },
      fourthLast: function() {
        return fourthLast;
      },
      thirdLast: function() {
        return thirdLast;
      },
      secondLast: function() {
        return secondLast;
      },
      firstLast: function() {
        return firstLast;
      },
      last: function() {
        return last;
      },
      head: function() {
        return head;
      },
      tail: function() {
        return tail;
      },
      back: function() {
        return back;
      },
      front: function() {
        return front;
      },
      push: function() {
        return push;
      },
      unshift: function() {
        return unshift;
      },
      concat: function() {
        return concat;
      },
      clear: function() {
        return clear;
      },
      copy: function() {
        return copy;
      },
      merge: function() {
        return merge;
      },
      splice: function() {
        return splice;
      },
      replace: function() {
        return replace;
      },
      filter: function() {
        return filter;
      },
      find: function() {
        return find;
      },
      prune: function() {
        return prune;
      },
      patch: function() {
        return patch;
      },
      compress: function() {
        return compress;
      },
      combine: function() {
        return combine;
      },
      augment: function() {
        return augment;
      },
      separate: function() {
        return separate;
      },
      forwardsFind: function() {
        return forwardsFind;
      },
      backwardsFind: function() {
        return backwardsFind;
      },
      forwardsSome: function() {
        return forwardsSome;
      },
      backwardsSome: function() {
        return backwardsSome;
      },
      forwardsEvery: function() {
        return forwardsEvery;
      },
      backwardsEvery: function() {
        return backwardsEvery;
      },
      forwardsReduce: function() {
        return forwardsReduce;
      },
      backwardsReduce: function() {
        return backwardsReduce;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      backwardsForEach: function() {
        return backwardsForEach;
      },
      default: function() {
        return _default;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function second(array) {
      return array[1];
    }
    function third(array) {
      return array[2];
    }
    function fourth(array) {
      return array[3];
    }
    function fifth(array) {
      return array[4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function firstLast(array) {
      return array[array.length - 1];
    }
    function last(array) {
      return array[array.length - 1];
    }
    function head(array) {
      return array.slice(0, 1);
    }
    function tail(array) {
      return array.slice(1);
    }
    function back(array) {
      return array.slice(array.length - 1);
    }
    function front(array) {
      return array.slice(0, Math.max(1, array.length - 1));
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
    function concat(array1, elementOrArray2) {
      var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(array1, array2);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(array1, array2) {
      var start = 0, deleteCount = array2.length;
      splice(array1, start, deleteCount, array2);
    }
    function merge(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function splice(array1, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var args = [
        start,
        deleteCount
      ].concat(_to_consumable_array(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element, callback) {
      var start;
      var found = array.some(function(element2, index) {
        var passed = callback(element2, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function filter(array, callback) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, callback) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, callback) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element, callback) {
      var found = array.some(function(element2, index) {
        var passed = callback(element2, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
      }
      return found;
    }
    function compress(array, callback) {
      var index1 = 0, length = array.length;
      while (index1 < length) {
        var element1 = array[index1];
        for (var index2 = length - 1; index2 > index1; index2--) {
          var element2 = array[index2], passed = callback(element2, element1);
          if (passed) {
            var start = index2, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        index1++;
        length = array.length;
      }
    }
    function combine(array1, array2, callback) {
      var array = _to_consumable_array(array1).concat(_to_consumable_array(array2));
      compress(array, callback);
      return array;
    }
    function augment(array1, array2, callback) {
      array2.forEach(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, callback) {
      array.forEach(function(element, index) {
        var passed = callback(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsFind(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function backwardsFind(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return element;
        }
      }
      return false;
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (!passed) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        value = callback(value, element, index);
      }
      return value;
    }
    function forwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        callback(element, index);
      }
    }
    var _default = {
      first,
      second,
      third,
      fourth,
      fifth,
      fifthLast,
      fourthLast,
      thirdLast,
      secondLast,
      firstLast,
      last,
      head,
      tail,
      back,
      front,
      push,
      unshift,
      concat,
      clear,
      copy,
      merge,
      splice,
      replace,
      filter,
      find,
      prune,
      patch,
      compress,
      combine,
      augment,
      separate,
      forwardsFind,
      backwardsFind,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
  });

  // node_modules/necessary/lib/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ZERO: function() {
        return ZERO;
      },
      DATA: function() {
        return DATA;
      },
      ERROR: function() {
        return ERROR;
      },
      STRING: function() {
        return STRING;
      },
      NUMBER: function() {
        return NUMBER;
      },
      BOOLEAN: function() {
        return BOOLEAN;
      },
      DEFAULT: function() {
        return DEFAULT;
      },
      ENVIRONMENT: function() {
        return ENVIRONMENT;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      }
    });
    var ZERO = "0";
    var DATA = "data";
    var ERROR = "error";
    var STRING = "string";
    var NUMBER = "number";
    var BOOLEAN = "boolean";
    var DEFAULT = "default";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      overwrite: function() {
        return overwrite;
      },
      underwrite: function() {
        return underwrite;
      },
      portFromHost: function() {
        return portFromHost;
      },
      secureFromHost: function() {
        return secureFromHost;
      },
      hostnameFromHost: function() {
        return hostnameFromHost;
      },
      queryStringFromQuery: function() {
        return queryStringFromQuery;
      },
      urlFromHostURIAndQuery: function() {
        return urlFromHostURIAndQuery;
      },
      default: function() {
        return _default;
      }
    });
    var _array = require_array2();
    var _constants = require_constants3();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
        var existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName !== null) {
        headers[existingName] = value;
      }
    }
    function underwrite(headers, name, value) {
      var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName = existingNames.find(function(existingName2) {
        var existingLowerCaseName = existingName2.toLowerCase();
        if (existingLowerCaseName === lowerCaseName) {
          return true;
        }
      }) || null;
      if (existingName === null) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array.second)(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
      if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      var secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array.second)(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString2;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndQuery(host, uri, query) {
      var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromQuery,
      urlFromHostURIAndQuery
    };
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      get: function() {
        return get;
      },
      post: function() {
        return post;
      },
      request: function() {
        return request;
      },
      default: function() {
        return _default;
      }
    });
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _headers = require_headers();
    var _http = require_http();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, headers, content, callback);
    }
    function post(host, uri, query, headers, content, callback) {
      if (callback === void 0) {
        callback = content;
        content = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, headers, content, callback);
    }
    function request(host, uri, query, method, headers, content, callback) {
      var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
        if (readyState == 4) {
          var _$content = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = _$content, json2 = JSON.parse(jsonString2);
              _$content = json2;
            } catch (error) {
              _$content = null;
            }
          }
          callback(_$content, statusCode);
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
      }
      content !== null ? xmlHttpRequest.send(content) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    function underwriteAcceptHeader(headers, accept) {
      var name = _headers.ACCEPT_HEADER, value = accept;
      (0, _http.underwrite)(headers, name, value);
    }
    function underwriteContentTypeHeader(headers, contentTYpe) {
      var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
      (0, _http.underwrite)(headers, name, value);
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      isPathName: function() {
        return isPathName;
      },
      isPathTopmostName: function() {
        return isPathTopmostName;
      },
      isPathRelativePath: function() {
        return isPathRelativePath;
      },
      isPathAbsolutePath: function() {
        return isPathAbsolutePath;
      },
      isTopmostNameInAbsolutePath: function() {
        return isTopmostNameInAbsolutePath;
      },
      combinePaths: function() {
        return combinePaths;
      },
      concatenatePaths: function() {
        return concatenatePaths;
      },
      bottommostNameFromPath: function() {
        return bottommostNameFromPath;
      },
      topmostDirectoryPathFromPath: function() {
        return topmostDirectoryPathFromPath;
      },
      topmostDirectoryNameFromPath: function() {
        return topmostDirectoryNameFromPath;
      },
      pathWithoutBottommostNameFromPath: function() {
        return pathWithoutBottommostNameFromPath;
      },
      pathWithoutTopmostDirectoryNameFromPath: function() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      default: function() {
        return _default;
      }
    });
    var _constants = require_constants3();
    var _array = require_array2();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      var pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      var pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      var pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      var combinedPath = null;
      var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      var lastPathName, firstRelativePathName = (0, _array.first)(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array.first)(relativePathNames);
      lastPathName = (0, _array.last)(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array.first)(relativePathNames);
        lastPathName = (0, _array.last)(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array.second)(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array.second)(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
      }
      return pathWithoutTopmostDirectoryName;
    }
    var _default = {
      isPathName,
      isPathTopmostName,
      isPathRelativePath,
      isPathAbsolutePath,
      isTopmostNameInAbsolutePath,
      combinePaths,
      concatenatePaths,
      bottommostNameFromPath,
      topmostDirectoryPathFromPath,
      topmostDirectoryNameFromPath,
      pathWithoutBottommostNameFromPath,
      pathWithoutTopmostDirectoryNameFromPath
    };
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      whilst: function() {
        return whilst;
      },
      forEach: function() {
        return forEach;
      },
      sequence: function() {
        return sequence;
      },
      eventually: function() {
        return eventually;
      },
      repeatedly: function() {
        return repeatedly;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      backwardsForEach: function() {
        return backwardsForEach;
      },
      default: function() {
        return _default;
      }
    });
    function whilst(operation, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = operation(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(operations, done, context) {
      var length = operations.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, operation = operations[index];
          operation(next, done, context, index);
        }
      }
      next();
    }
    function eventually(operations, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = operations.length;
      var count = 0;
      operations.forEach(function(operation, index) {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        operation(next, done, context, index);
      }
    }
    function forwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, operation, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
    var _default = {
      whilst,
      forEach,
      sequence,
      eventually,
      repeatedly,
      forwardsForEach,
      backwardsForEach
    };
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      levels: function() {
        return _levels.default;
      },
      methods: function() {
        return _methods.default;
      },
      headers: function() {
        return _headers.default;
      },
      keyCodes: function() {
        return _keyCodes.default;
      },
      encodings: function() {
        return _encodings.default;
      },
      characters: function() {
        return _characters.default;
      },
      statusCodes: function() {
        return _statusCodes.default;
      },
      contentTypes: function() {
        return _contentTypes.default;
      },
      statusMessages: function() {
        return _statusMessages.default;
      },
      ajaxUtilities: function() {
        return _ajax.default;
      },
      pathUtilities: function() {
        return _path.default;
      },
      httpUtilities: function() {
        return _http.default;
      },
      arrayUtilities: function() {
        return _array.default;
      },
      asynchronousUtilities: function() {
        return _asynchronous.default;
      }
    });
    var _levels = /* @__PURE__ */ _interop_require_default(require_levels());
    var _methods = /* @__PURE__ */ _interop_require_default(require_methods());
    var _headers = /* @__PURE__ */ _interop_require_default(require_headers());
    var _keyCodes = /* @__PURE__ */ _interop_require_default(require_keyCodes());
    var _encodings = /* @__PURE__ */ _interop_require_default(require_encodings());
    var _characters = /* @__PURE__ */ _interop_require_default(require_characters());
    var _statusCodes = /* @__PURE__ */ _interop_require_default(require_statusCodes());
    var _contentTypes = /* @__PURE__ */ _interop_require_default(require_contentTypes());
    var _statusMessages = /* @__PURE__ */ _interop_require_default(require_statusMessages());
    var _ajax = /* @__PURE__ */ _interop_require_default(require_ajax());
    var _path = /* @__PURE__ */ _interop_require_default(require_path());
    var _http = /* @__PURE__ */ _interop_require_default(require_http());
    var _array = /* @__PURE__ */ _interop_require_default(require_array2());
    var _asynchronous = /* @__PURE__ */ _interop_require_default(require_asynchronous());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/combineRules.js
  var require_combineRules = __commonJS((exports) => {
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
    var combineRules = function(rules) {
      return function(action) {
        var keys = Object.keys(rules), update = keys.reduce(function(update2, key) {
          var rule = rules[key];
          update2[key] = rule(action);
          return update2;
        }, {});
        return update;
      };
    };
    var _default = combineRules;
  });

  // lib/createDispatcher.js
  var require_createDispatcher = __commonJS((exports) => {
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
    var createDispatcher = function(rule) {
      var listeners = [];
      var dispatch = function(action) {
        var update = rule(action);
        listeners.forEach(function(listener) {
          var ruleNames = listener.ruleNames;
          if (ruleNames.length === 0 || ruleNames.some(function(ruleName) {
            return update[ruleName] !== void 0;
          })) {
            listener(update);
          }
        });
      };
      var subscribe = function(listener) {
        for (var _len = arguments.length, ruleNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          ruleNames[_key - 1] = arguments[_key];
        }
        Object.assign(listener, {
          ruleNames
        });
        listeners.push(listener);
        return function() {
          return unsubscribe(listener);
        };
      };
      var unsubscribe = function(l) {
        listeners = listeners.filter(function(listener) {
          return listener !== l;
        });
      };
      return {
        dispatch,
        subscribe,
        unsubscribe
      };
    };
    var _default = createDispatcher;
  });

  // lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      combineRules: function() {
        return _combineRules.default;
      },
      createDispatcher: function() {
        return _createDispatcher.default;
      }
    });
    var _combineRules = /* @__PURE__ */ _interop_require_default(require_combineRules());
    var _createDispatcher = /* @__PURE__ */ _interop_require_default(require_createDispatcher());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/inferenceApp/constants.js
  var require_constants4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ADD_TODO: function() {
        return ADD_TODO;
      },
      SHOW_ALL: function() {
        return SHOW_ALL;
      },
      SHOW_ACTIVE: function() {
        return SHOW_ACTIVE;
      },
      SHOW_COMPLETED: function() {
        return SHOW_COMPLETED;
      },
      SET_VISIBILITY_FILTER: function() {
        return SET_VISIBILITY_FILTER;
      }
    });
    var ADD_TODO = "ADD_TODO";
    var SHOW_ALL = "show-all";
    var SHOW_ACTIVE = "show-active";
    var SHOW_COMPLETED = "show-completed";
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
  });

  // lib/example/inferenceApp/rule/addTodo.js
  var require_addTodo2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return addTodo;
      }
    });
    var _constants = require_constants4();
    function addTodo() {
      var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var type = action.type;
      var update;
      switch (type) {
        case _constants.ADD_TODO:
          var text = action.text;
          update = {
            text
          };
          break;
      }
      return update;
    }
  });

  // lib/example/inferenceApp/rule/setVisibilityFilter.js
  var require_setVisibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return setVisibilityFilter;
      }
    });
    var _constants = require_constants4();
    function setVisibilityFilter() {
      var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var type = action.type;
      var update;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          var visibilityFilter = action.visibilityFilter;
          update = {
            visibilityFilter
          };
          break;
      }
      return update;
    }
  });

  // lib/example/inferenceApp/rule.js
  var require_rule = __commonJS((exports) => {
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
    var _index = require_lib2();
    var _addTodo = /* @__PURE__ */ _interop_require_default(require_addTodo2());
    var _setVisibilityFilter = /* @__PURE__ */ _interop_require_default(require_setVisibilityFilter());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var rule = (0, _index.combineRules)({
      addTodo: _addTodo.default,
      setVisibilityFilter: _setVisibilityFilter.default
    });
    var _default = rule;
  });

  // lib/example/inferenceApp/dispatcher.js
  var require_dispatcher = __commonJS((exports) => {
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
    var _index = require_lib2();
    var _rule = /* @__PURE__ */ _interop_require_default(require_rule());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var dispatcher = (0, _index.createDispatcher)(_rule.default);
    var _default = dispatcher;
  });

  // lib/example/inferenceApp/component/filterLink.js
  var require_filterLink2 = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _necessary = require_browser();
    var _dispatcher = /* @__PURE__ */ _interop_require_default(require_dispatcher());
    var _constants = require_constants4();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var first = _necessary.arrayUtilities.first;
    var FilterLink = function(props, context) {
      var children = props.children, filter = props.filter, className = "".concat(filter, " filter"), firstChild = first(children), text = firstChild.getText();
      return /* @__PURE__ */ _reaction.React.createElement("div", {
        className
      }, /* @__PURE__ */ _reaction.React.createElement("a", {
        href: "#",
        onClick: function(event) {
          event.preventDefault();
          var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
            type,
            visibilityFilter
          };
          _dispatcher.default.dispatch(action);
        }
      }, text), /* @__PURE__ */ _reaction.React.createElement("span", null, text));
    };
    var _default = FilterLink;
  });

  // lib/example/inferenceApp/component/footer.js
  var require_footer2 = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _filterLink = /* @__PURE__ */ _interop_require_default(require_filterLink2());
    var _constants = require_constants4();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("p", null, "Show: ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
      }, "All"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
      }, "Active"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
      }, "Completed"));
    };
    var _default = Footer;
  });

  // lib/example/inferenceApp/component/addTodo.js
  var require_addTodo3 = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _dispatcher = /* @__PURE__ */ _interop_require_default(require_dispatcher());
    var _constants = require_constants4();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var inputDOMElement;
    var AddTodo = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("div", null, /* @__PURE__ */ _reaction.React.createElement("input", {
        ref: function(domElement) {
          inputDOMElement = domElement;
        }
      }), /* @__PURE__ */ _reaction.React.createElement("button", {
        onClick: function() {
          var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
            type,
            text
          };
          _dispatcher.default.dispatch(action);
          inputDOMElement.value = "";
        }
      }, "Add todo"));
    };
    var _default = AddTodo;
  });

  // lib/example/inferenceApp/component/todoListItem.js
  var require_todoListItem2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TodoListItem;
      }
    });
    var _reaction = require_lib();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var TodoListItem = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItem2, Component2);
      var _super = _create_super(TodoListItem2);
      function TodoListItem2() {
        _class_call_check(this, TodoListItem2);
        return _super.apply(this, arguments);
      }
      _create_class(TodoListItem2, [
        {
          key: "render",
          value: function render() {
            var _this = this;
            var text = this.props.text, className = "";
            return /* @__PURE__ */ _reaction.React.createElement("li", {
              className,
              onClick: function() {
                _this.toggleClass("completed");
              }
            }, text);
          }
        }
      ]);
      return TodoListItem2;
    }(Component);
  });

  // lib/example/inferenceApp/component/todoListItems.js
  var require_todoListItems2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TodoListItems;
      }
    });
    var _reaction = require_lib();
    var _dispatcher = /* @__PURE__ */ _interop_require_default(require_dispatcher());
    var _todoListItem = /* @__PURE__ */ _interop_require_default(require_todoListItem2());
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItems2, Component2);
      var _super = _create_super(TodoListItems2);
      function TodoListItems2() {
        _class_call_check(this, TodoListItems2);
        return _super.apply(this, arguments);
      }
      _create_class(TodoListItems2, [
        {
          key: "updateHandler",
          value: function updateHandler(update) {
            if (update) {
              var addTodo = update.addTodo;
              if (addTodo) {
                this.forceUpdate(update);
              }
            }
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            this.unsubscribe = _dispatcher.default.subscribe(function(update) {
              return _this.updateHandler(update);
            });
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
          value: function render(update) {
            if (update) {
              var children = this.getChildren();
              var addTodo = update.addTodo, text = addTodo.text;
              children = _to_consumable_array(children).concat([
                /* @__PURE__ */ _reaction.React.createElement(_todoListItem.default, {
                  text
                })
              ]);
              return children;
            }
            return [];
          }
        }
      ]);
      return TodoListItems2;
    }(Component);
  });

  // lib/example/inferenceApp/component/todoList.js
  var require_todoList2 = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _todoListItems = /* @__PURE__ */ _interop_require_default(require_todoListItems2());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = function(props, context) {
      return /* @__PURE__ */ _reaction.React.createElement("ul", null, /* @__PURE__ */ _reaction.React.createElement(_todoListItems.default, null));
    };
    var _default = TodoList;
  });

  // lib/example/inferenceApp/component/todoApp.js
  var require_todoApp2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TodoApp;
      }
    });
    var _reaction = require_lib();
    var _footer = /* @__PURE__ */ _interop_require_default(require_footer2());
    var _addTodo = /* @__PURE__ */ _interop_require_default(require_addTodo3());
    var _todoList = /* @__PURE__ */ _interop_require_default(require_todoList2());
    var _dispatcher = /* @__PURE__ */ _interop_require_default(require_dispatcher());
    var _constants = require_constants4();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
      if (superClass)
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Component = _reaction.React.Component;
    var TodoApp = /* @__PURE__ */ function(Component2) {
      _inherits(TodoApp2, Component2);
      var _super = _create_super(TodoApp2);
      function TodoApp2() {
        _class_call_check(this, TodoApp2);
        return _super.apply(this, arguments);
      }
      _create_class(TodoApp2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            this.unsubscribe = _dispatcher.default.subscribe(function(update) {
              return _this.render(update);
            });
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
          value: function render(update) {
            if (update) {
              var setVisibilityFilter = update.setVisibilityFilter;
              if (setVisibilityFilter) {
                var visibilityFilter = setVisibilityFilter.visibilityFilter, className = "".concat(visibilityFilter, " app");
                this.setClass(className);
              }
            } else {
              var initialVisibilityFilter = _constants.SHOW_ALL, className1 = "".concat(initialVisibilityFilter, " app");
              return /* @__PURE__ */ _reaction.React.createElement("div", {
                className: className1
              }, /* @__PURE__ */ _reaction.React.createElement(_addTodo.default, null), /* @__PURE__ */ _reaction.React.createElement(_todoList.default, null), /* @__PURE__ */ _reaction.React.createElement(_footer.default, null));
            }
          }
        }
      ]);
      return TodoApp2;
    }(Component);
  });

  // lib/example/inferenceApp.js
  var require_inferenceApp = __commonJS((exports) => {
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
    var _reaction = require_lib();
    var _todoApp = /* @__PURE__ */ _interop_require_default(require_todoApp2());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var inferenceApp = function() {
      var rootDOMElement = document.getElementById("root");
      _reaction.ReactDOM.render(/* @__PURE__ */ _reaction.React.createElement(_todoApp.default, null), rootDOMElement);
    };
    var _default = inferenceApp;
  });

  // lib/examples.js
  var require_examples = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _reduxApp = /* @__PURE__ */ _interop_require_default(require_reduxApp());
    var _inferenceApp = /* @__PURE__ */ _interop_require_default(require_inferenceApp());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.assign(window, {
      reduxApp: _reduxApp.default,
      inferenceApp: _inferenceApp.default
    });
  });
  require_examples();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdENsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9saWIvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2xpYi88PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9saWIvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9saWIvdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC88PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWwuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2xpYi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50Lzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vcmVhY3QvY2xhc3MuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2xpYi92aXJ0dWFsRE9NL3JlYWN0Lzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2xpYi92aXJ0dWFsRE9NL3JlYWN0Lzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9saWIvdmlydHVhbERPTS9jb250YWluZXIvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL3Nhbml0aWlzZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvcmVhY3RET00uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL2xpYi88PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1eC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZm9vdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbXMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvY29tYmluZVJ1bGVzLmpzIiwgInNyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAuanMiLCAic3JjL2V4YW1wbGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0U3R5bGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldFN0eWxlKG5hbWUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vdmlydHVhbERPTUVsZW1lbnRcIjtcbmltcG9ydCByZWFjdEVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9yZWFjdEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKChyZWZlcmVuY2UsIHJlbWFpbmluZ0NoaWxkKSA9PiB7XG4gICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtYWluaW5nQ2hpbGRET01FbGVtZW50ID0gcmVtYWluaW5nQ2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgICBpZiAocmVtYWluaW5nQ2hpbGRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IHJlbWFpbmluZ0NoaWxkOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gbnVsbDtcblxuICAgICAgICBwYXJlbnQgPSByZW1haW5pbmdDaGlsZDsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENvbXBvbmVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lckVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBkb21FbGVtZW50KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIFxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG5cbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZpcnR1YWxET01Ob2RlID0gbmV3IENvbnRhaW5lckVsZW1lbnQocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IFJFRiA9IFwicmVmXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEJPT0xFQU4sIENMQVNTX05BTUUsIEhUTUxfRk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykgeyByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeSgoY2xhc3NOYW1lKSA9PiB0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gUkVGKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIC9eb24vLnRlc3QobmFtZSk7XG5cdH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY29udGFpbmVyRWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgIFwiYWx0R2x5cGhcIiwgXCJhbmltYXRlXCIsIFwiYW5pbWF0ZUNvbG9yXCIsIFwiYW5pbWF0ZU1vdGlvblwiLCBcImFuaW1hdGVUcmFuc2Zvcm1cIiwgXCJhbmltYXRpb25cIiwgXCJhdWRpb1wiLFxuICAgICAgICBcImNpcmNsZVwiLCBcImNsaXBQYXRoXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImN1cnNvclwiLFxuICAgICAgICBcImRlZnNcIiwgXCJkZXNjXCIsIFwiZGlzY2FyZFwiLFxuICAgICAgICBcImVsbGlwc2VcIixcbiAgICAgICAgXCJmZUJsZW5kXCIsIFwiZmVDb2xvck1hdHJpeFwiLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgXCJmZUNvbXBvc2l0ZVwiLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIFwiZmVEaXN0YW50TGlnaHRcIiwgXCJmZURyb3BTaGFkb3dcIiwgXCJmZUZsb29kXCIsIFwiZmVGdW5jQVwiLCBcImZlRnVuY0JcIiwgXCJmZUZ1bmNHXCIsIFwiZmVGdW5jUlwiLCBcImZlR2F1c3NpYW5CbHVyXCIsIFwiZmVJbWFnZVwiLCBcImZlTWVyZ2VcIiwgXCJmZU1lcmdlTm9kZVwiLCBcImZlTW9ycGhvbG9neVwiLCBcImZlT2Zmc2V0XCIsIFwiZmVQb2ludExpZ2h0XCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIFwiZmVTcG90TGlnaHRcIiwgXCJmZVRpbGVcIiwgXCJmZVR1cmJ1bGVuY2VcIiwgXCJmaWx0ZXJcIiwgXCJmb250XCIsIFwiZm9udC1mYWNlXCIsIFwiZm9udC1mYWNlLWZvcm1hdFwiLCBcImZvbnQtZmFjZS1uYW1lXCIsIFwiZm9udC1mYWNlLXVyaVwiLCBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgXCJnXCIsIFwiZ2x5cGhcIiwgXCJnbHlwaFJlZlwiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYXRjaFwiLCBcImhhdGNocGF0aFwiLCBcImhrZXJuXCIsXG4gICAgICAgIFwiaW1hZ2VcIiwgXCJsaW5lXCIsIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgXCJsaXN0ZW5lclwiLFxuICAgICAgICBcIm1hcmtlclwiLCBcIm1hc2tcIiwgXCJtZXNoXCIsIFwibWVzaGdyYWRpZW50XCIsIFwibWVzaHBhdGNoXCIsIFwibWVzaHJvd1wiLCBcIm1ldGFkYXRhXCIsIFwibWlzc2luZy1nbHlwaFwiLCBcIm1wYXRoXCIsXG4gICAgICAgIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwb2x5Z29uXCIsIFwicG9seWxpbmVcIiwgXCJwcmVmZXRjaFwiLFxuICAgICAgICBcInJhZGlhbEdyYWRpZW50XCIsIFwicmVjdFwiLFxuICAgICAgICBcInNjcmlwdFwiLCBcInNldFwiLCBcInNvbGlkY29sb3JcIiwgXCJzdG9wXCIsIFwic3R5bGVcIiwgXCJzdmdcIiwgXCJzd2l0Y2hcIiwgXCJzeW1ib2xcIixcbiAgICAgICAgXCJ0YnJlYWtcIiwgXCJ0ZXh0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0UGF0aFwiLCBcInRpdGxlXCIsIFwidHJlZlwiLCBcInRzcGFuXCIsXG4gICAgICAgIFwidW5rbm93blwiLCBcInVzZVwiLFxuICAgICAgICBcInZpZGVvXCIsIFwidmlld1wiLCBcInZrZXJuXCJcbiAgICAgIF0sXG4gICAgICBzdmdBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlbnQtaGVpZ2h0XCIsIFwiYWNjdW11bGF0ZVwiLCBcImFkZGl0aXZlXCIsIFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiYWxwaGFiZXRpY1wiLCBcImFtcGxpdHVkZVwiLCBcImFyYWJpYy1mb3JtXCIsIFwiYXNjZW50XCIsIFwiYXR0cmlidXRlTmFtZVwiLCBcImF0dHJpYnV0ZVR5cGVcIiwgXCJhemltdXRoXCIsXG4gICAgICAgIFwiYmFuZHdpZHRoXCIsIFwiYmFzZUZyZXF1ZW5jeVwiLCBcImJhc2VQcm9maWxlXCIsIFwiYmFzZWxpbmUtc2hpZnRcIiwgXCJiYm94XCIsIFwiYmVnaW5cIiwgXCJiaWFzXCIsIFwiYnlcIixcbiAgICAgICAgXCJjYWxjTW9kZVwiLCBcImNhcC1oZWlnaHRcIiwgXCJjbGlwXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xpcC1wYXRoXCIsIFwiY2xpcC1ydWxlXCIsIFwiY2xpcFBhdGhVbml0c1wiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiLCBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjb2xvci1yZW5kZXJpbmdcIiwgXCJjb250ZW50U2NyaXB0VHlwZVwiLCBcImNvbnRlbnRTdHlsZVR5cGVcIiwgXCJjcm9zc29yaWdpblwiLCBcImN1cnNvclwiLCBcImN4XCIsIFwiY3lcIixcbiAgICAgICAgXCJkXCIsIFwiZGVmYXVsdEFjdGlvblwiLCBcImRlc2NlbnRcIiwgXCJkaWZmdXNlQ29uc3RhbnRcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXNwbGF5XCIsIFwiZGl2aXNvclwiLCBcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiZG93bmxvYWRcIiwgXCJkdXJcIiwgXCJkeFwiLCBcImR5XCIsXG4gICAgICAgIFwiZWRnZU1vZGVcIiwgXCJlZGl0YWJsZVwiLCBcImVsZXZhdGlvblwiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZW5kXCIsIFwiZXZlbnRcIiwgXCJleHBvbmVudFwiLCBcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcbiAgICAgICAgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmlsdGVyUmVzXCIsIFwiZmlsdGVyVW5pdHNcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb2N1c0hpZ2hsaWdodFwiLCBcImZvY3VzYWJsZVwiLCBcImZvbnQtZmFtaWx5XCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXZhcmlhbnRcIiwgXCJmb250LXdlaWdodFwiLCBcImZvcm1hdFwiLCBcImZyXCIsIFwiZnJvbVwiLCBcImZ4XCIsIFwiZnlcIixcbiAgICAgICAgXCJnMVwiLCBcImcyXCIsIFwiZ2x5cGgtbmFtZVwiLCBcImdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWxcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbFwiLCBcImdseXBoUmVmXCIsIFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiwgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhbmdpbmdcIiwgXCJoYXRjaENvbnRlbnRVbml0c1wiLCBcImhhdGNoVW5pdHNcIiwgXCJoZWlnaHRcIiwgXCJob3Jpei1hZHYteFwiLCBcImhvcml6LW9yaWdpbi14XCIsIFwiaG9yaXotb3JpZ2luLXlcIiwgXCJocmVmXCIsIFwiaHJlZmxhbmdcIixcbiAgICAgICAgXCJpZFwiLCBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcsIHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuXG5pbXBvcnQgU1ZHRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L3N2Z1wiO1xuaW1wb3J0IEhUTUxFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlDaGlsZHJlbiwgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Nhbml0aWlzZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZHJlbiA9IHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgbmV3IFNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRTdWJDbGFzcyhwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudDsgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBDb250YWluZXJFbGVtZW50LmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0RE9NIH0gZnJvbSBcIi4vcmVhY3RET01cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCgpO1xuXG4gIHJldHVybiB7IGdldFN0YXRlLCBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9IFwiQUREX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FMTCA9IFwiU0hPV19BTExcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDVElWRSA9IFwiU0hPV19BQ1RJVkVcIjtcbmV4cG9ydCBjb25zdCBUT0dHTEVfVE9ETyA9IFwiVE9HR0xFX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTVBMRVRFRCA9IFwiU0hPV19DT01QTEVURURcIjtcbmV4cG9ydCBjb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSBcIlNFVF9WSVNJQklMSVRZX0ZJTFRFUlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETywgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zKHN0YXRlID0gW10sIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB0b2RvcyA9IHN0YXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgdG9kb3MgPSBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUT0dHTEVfVE9ETyA6XG4gICAgICB0b2RvcyA9IHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZSA9IHRvZG9zO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlLFxuICAgICAgICB0b2RvID0ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG5cbiAgdG9kb3MgPSBbXG4gICAgLi4udG9kb3MsXG4gICAgdG9kb1xuICBdO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbikge1xuICBjb25zdCB7IGlkIH0gPSBhY3Rpb247XG5cbiAgdG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgY29tcGxldGVkID0gIWNvbXBsZXRlZDtcblxuICAgICAgdG9kby5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvZG87XG4gIH0pO1xuXG4gIHJldHVybiB0b2Rvcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlzaWJpbGl0eUZpbHRlcihzdGF0ZSA9IFNIT1dfQUxMLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgc3RhdGUgPSB2aXNpYmlsaXR5RmlsdGVyO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCIuL3JlZHV4XCI7XG5cbmltcG9ydCB0b2RvcyBmcm9tIFwiLi9yZWR1Y2VyL3RvZG9zXCI7XG5pbXBvcnQgdmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3RpdmUgPSAoZmlsdGVyID09PSB2aXNpYmlsaXR5RmlsdGVyKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cblxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHA+XG4gICAge1wiU2hvdzogXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gIDwvcD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5sZXQgaWQgPSAwLFxuICAgIGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWQrKztcblxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgVG9kb0xpc3RJdGVtID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2xpY2tIYW5kbGVyLCBjb21wbGV0ZWQsIHRleHQgfSA9IHByb3BzLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RJdGVtO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVELCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQUNUSVZFOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvLFxuICAgICAgICAgICAgYWN0aXZlID0gIWNvbXBsZXRlZDtcblxuICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdmlzaWJsZVRvZG9zO1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbXMgZnJvbSBcIi4vdG9kb0xpc3RJdGVtc1wiO1xuXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8dWw+XG4gICAgPFRvZG9MaXN0SXRlbXMgLz5cbiAgPC91bD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuXG5jb25zdCBUb2RvQXBwID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxkaXY+XG4gICAgPEFkZFRvZG8gLz5cbiAgICA8VG9kb0xpc3QgLz5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvZGl2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9BcHA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCIuL3JlZHV4QXBwL3JlZHV4XCI7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHV4QXBwL3JlZHVjZXJcIjtcbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHV4QXBwKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUUkFDRV9MRVZFTCA9IFwidHJhY2VcIjtcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IFwiZGVidWdcIjtcbmV4cG9ydCBjb25zdCBJTkZPX0xFVkVMID0gXCJpbmZvXCI7XG5leHBvcnQgY29uc3QgV0FSTklOR19MRVZFTCA9IFwid2FybmluZ1wiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0xFVkVMID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IEZBVEFMX0xFVkVMID0gXCJmYXRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRSQUNFX0xFVkVMLFxuICBERUJVR19MRVZFTCxcbiAgSU5GT19MRVZFTCxcbiAgV0FSTklOR19MRVZFTCxcbiAgRVJST1JfTEVWRUwsXG4gIEZBVEFMX0xFVkVMXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX01FVEhPRCA9IFwiR0VUXCI7XG5leHBvcnQgY29uc3QgUE9TVF9NRVRIT0QgPSBcIlBPU1RcIjtcbmV4cG9ydCBjb25zdCBQQVRDSF9NRVRIT0QgPSBcIlBBVENIXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX01FVEhPRCA9IFwiREVMRVRFXCI7XG5leHBvcnQgY29uc3QgT1BUSU9OU19NRVRIT0QgPSBcIk9QVElPTlNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBHRVRfTUVUSE9ELFxuICBQT1NUX01FVEhPRCxcbiAgUEFUQ0hfTUVUSE9ELFxuICBERUxFVEVfTUVUSE9ELFxuICBPUFRJT05TX01FVEhPRFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFBSQUdNQV9IRUFERVIgPSBcInByYWdtYVwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVF9IRUFERVIgPSBcImFjY2VwdFwiO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0hFQURFUiA9IFwibG9jYXRpb25cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0FHRU5UX0hFQURFUiA9IFwidXNlci1hZ2VudFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9IRUFERVIgPSBcImNvbnRlbnQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSID0gXCJhdXRob3JpemF0aW9uXCI7XG5leHBvcnQgY29uc3QgQ0FDSEVfQ09OVFJPTF9IRUFERVIgPSBcImNhY2hlLWNvbnRyb2xcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0xFTkdUSF9IRUFERVIgPSBcImNvbnRlbnQtbGVuZ3RoXCI7XG5leHBvcnQgY29uc3QgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSID0gXCJ0cmFuc2Zlci1lbmNvZGluZ1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gXCJjb250ZW50LWRpc3Bvc2l0aW9uXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBQUkFHTUFfSEVBREVSLFxuICBBQ0NFUFRfSEVBREVSLFxuICBMT0NBVElPTl9IRUFERVIsXG4gIFVTRVJfQUdFTlRfSEVBREVSLFxuICBDT05URU5UX1RZUEVfSEVBREVSLFxuICBBVVRIT1JJWkFUSU9OX0hFQURFUixcbiAgQ0FDSEVfQ09OVFJPTF9IRUFERVIsXG4gIENPTlRFTlRfTEVOR1RIX0hFQURFUixcbiAgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVJcbn07IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEFCX0tFWV9DT0RFID0gOTtcbmV4cG9ydCBjb25zdCBTSElGVF9LRVlfQ09ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IEVOVEVSX0tFWV9DT0RFID0gMTM7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG5leHBvcnQgY29uc3QgREVMRVRFX0tFWV9DT0RFID0gNDY7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0tFWV9DT0RFID0gODtcbmV4cG9ydCBjb25zdCBBUlJPV19VUF9LRVlfQ09ERSA9IDM4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX0RPV05fS0VZX0NPREUgPSA0MDtcbmV4cG9ydCBjb25zdCBBUlJPV19MRUZUX0tFWV9DT0RFID0gMzc7XG5leHBvcnQgY29uc3QgQVJST1dfUklHSFRfS0VZX0NPREUgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBUQUJfS0VZX0NPREUsXG4gIFNISUZUX0tFWV9DT0RFLFxuICBFTlRFUl9LRVlfQ09ERSxcbiAgRVNDQVBFX0tFWV9DT0RFLFxuICBERUxFVEVfS0VZX0NPREUsXG4gIEJBQ0tTUEFDRV9LRVlfQ09ERSxcbiAgQVJST1dfVVBfS0VZX0NPREUsXG4gIEFSUk9XX0RPV05fS0VZX0NPREUsXG4gIEFSUk9XX0xFRlRfS0VZX0NPREUsXG4gIEFSUk9XX1JJR0hUX0tFWV9DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVRGOF9FTkNPRElORyA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IFVURl84X0VOQ09ESU5HID0gXCJ1dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEJBU0U2NF9FTkNPRElORyA9IFwiYmFzZTY0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVRGOF9FTkNPRElORyxcbiAgVVRGXzhfRU5DT0RJTkcsXG4gIEJBU0U2NF9FTkNPRElOR1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVQX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0FcIjtcbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFSX0NIQVJBQ1RFUiA9IFwifFwiO1xuZXhwb3J0IGNvbnN0IERBU0hfQ0hBUkFDVEVSID0gXCItXCI7XG5leHBvcnQgY29uc3QgRE9XTl9DSEFSQUNURVIgPSBcIlx1MDAxYltCXCI7XG5leHBvcnQgY29uc3QgTEVGVF9DSEFSQUNURVIgPSBcIlx1MDAxYltEXCI7XG5leHBvcnQgY29uc3QgUklHSFRfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQ1wiO1xuZXhwb3J0IGNvbnN0IFNQQUNFX0NIQVJBQ1RFUiA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENPTU1BX0NIQVJBQ1RFUiA9IFwiLFwiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IFBFUklPRF9DSEFSQUNURVIgPSBcIi5cIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEX0NIQVJBQ1RFUiA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEJBQ0tUSUNLX0RFTElNSVRFUiA9IFwiYFwiO1xuZXhwb3J0IGNvbnN0IE5FV19MSU5FX0NIQVJBQ1RFUiA9IFwiXFxuXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkRfQ0hBUkFDVEVSID0gXCImXCI7XG5leHBvcnQgY29uc3QgTEVTU19USEFOX0NIQVJBQ1RFUiA9IFwiJmx0O1wiO1xuZXhwb3J0IGNvbnN0IEdSRUFURVJfVEhBTl9DSEFSQUNURVIgPSBcIiZndDtcIjtcbmV4cG9ydCBjb25zdCBGT1JXQVJEX1NMQVNIX0NIQVJBQ1RFUiA9IFwiL1wiO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuZXhwb3J0IGNvbnN0IEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSID0gXCIhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVVBfQ0hBUkFDVEVSLFxuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgRE9XTl9DSEFSQUNURVIsXG4gIExFRlRfQ0hBUkFDVEVSLFxuICBSSUdIVF9DSEFSQUNURVIsXG4gIFNQQUNFX0NIQVJBQ1RFUixcbiAgQ09NTUFfQ0hBUkFDVEVSLFxuICBDT0xPTl9DSEFSQUNURVIsXG4gIFBFUklPRF9DSEFSQUNURVIsXG4gIENUUkxfQ19DSEFSQUNURVIsXG4gIFdJTERDQVJEX0NIQVJBQ1RFUixcbiAgQkFDS1RJQ0tfREVMSU1JVEVSLFxuICBORVdfTElORV9DSEFSQUNURVIsXG4gIEFNUEVSU0FORF9DSEFSQUNURVIsXG4gIEJBQ0tTUEFDRV9DSEFSQUNURVIsXG4gIExFU1NfVEhBTl9DSEFSQUNURVIsXG4gIEdSRUFURVJfVEhBTl9DSEFSQUNURVIsXG4gIEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSLFxuICBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSLFxuICBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfQ09ERSA9IDA7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19DT0RFID0gMjAwO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfQ09ERSA9IDMwMjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSA9IDIwMTtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFID0gMzAzO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUgPSA0MDM7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSA9IDQwNDtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSA9IDIwNDtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUgPSA1MDI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFID0gNDAwO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUgPSA0MDE7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSA9IDQwODtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUgPSA1MDM7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW5cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD11dGYtOFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRFWFRfSFRNTF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX01FU1NBR0UgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3JpemVkXCI7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSA9IFwiUmVxdWVzdCB0aW1lb3V0XCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFID0gXCJTZXJ2aWNlIHVuYXZhaWxhYmxlXCI7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRSA9IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19NRVNTQUdFLFxuICBPS18yMDBfU1RBVFVTX01FU1NBR0UsXG4gIEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfTUVTU0FHRSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfTUVTU0FHRSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfTUVTU0FHRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIE1hdGgubWF4KDEsIGFycmF5Lmxlbmd0aCAtIDEpKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbIGVsZW1lbnRPckFycmF5MiBdO1xuICBcbiAgcHVzaChhcnJheTEsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgc3RhcnQgPSBpbmRleDsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKGZvdW5kKSB7XG4gICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBlbGVtZW50cyA9IFtdO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIHBydW5lZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gcHJ1bmVkRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoKGFycmF5LCBlbGVtZW50LCBjYWxsYmFjaykge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGluZGV4MSA9IDAsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4MSA8IGxlbmd0aCkge1xuICAgIGNvbnN0IGVsZW1lbnQxID0gYXJyYXlbaW5kZXgxXTtcblxuICAgIGZvciAobGV0IGluZGV4MiA9IGxlbmd0aCAtIDE7IGluZGV4MiA+IGluZGV4MTsgaW5kZXgyLS0pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQyID0gYXJyYXlbaW5kZXgyXSxcbiAgICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQyLCBlbGVtZW50MSk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5MSxcbiAgICAuLi5hcnJheTJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXkxLCBhcnJheTIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgZmlyc3RMYXN0LFxuICBsYXN0LFxuICBoZWFkLFxuICB0YWlsLFxuICBiYWNrLFxuICBmcm9udCxcbiAgcHVzaCxcbiAgdW5zaGlmdCxcbiAgY29uY2F0LFxuICBjbGVhcixcbiAgY29weSxcbiAgbWVyZ2UsXG4gIHNwbGljZSxcbiAgcmVwbGFjZSxcbiAgZmlsdGVyLFxuICBmaW5kLFxuICBwcnVuZSxcbiAgcGF0Y2gsXG4gIGNvbXByZXNzLFxuICBjb21iaW5lLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNGaW5kLFxuICBiYWNrd2FyZHNGaW5kLFxuICBmb3J3YXJkc1NvbWUsXG4gIGJhY2t3YXJkc1NvbWUsXG4gIGZvcndhcmRzRXZlcnksXG4gIGJhY2t3YXJkc0V2ZXJ5LFxuICBmb3J3YXJkc1JlZHVjZSxcbiAgYmFja3dhcmRzUmVkdWNlLFxuICBmb3J3YXJkc0ZvckVhY2gsXG4gIGJhY2t3YXJkc0ZvckVhY2hcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPID0gXCIwXCI7XG5leHBvcnQgY29uc3QgREFUQSA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVCA9IFwiZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UID0gXCJFTlZJUk9OTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGNvbnRlbnQ7XG4gICAgY29udGVudCA9IGhlYWRlcnM7XG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29tYmluZVJ1bGVzID0gKHJ1bGVzKSA9PiB7XG4gIHJldHVybiAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGVzKSxcbiAgICAgICAgICB1cGRhdGUgPSBrZXlzLnJlZHVjZSgodXBkYXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1trZXldO1xuXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJ1bGVzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWJpbmVSdWxlcyB9IGZyb20gXCIuL2NvbWJpbmVSdWxlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVEaXNwYXRjaGVyIH0gZnJvbSBcIi4vY3JlYXRlRGlzcGF0Y2hlclwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBcIkFERF9UT0RPXCI7XG5leHBvcnQgY29uc3QgU0hPV19BTEwgPSBcInNob3ctYWxsXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ1RJVkUgPSBcInNob3ctYWN0aXZlXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01QTEVURUQgPSBcInNob3ctY29tcGxldGVkXCI7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG8oYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHRleHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSdWxlcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vcnVsZS9hZGRUb2RvXCI7XG5pbXBvcnQgc2V0VmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcnVsZSA9IGNvbWJpbmVSdWxlcyh7XG4gIGFkZFRvZG8sXG4gIHNldFZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBydWxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVEaXNwYXRjaGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgcnVsZSBmcm9tIFwiLi9ydWxlXCI7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKHJ1bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSBwcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7ZmlsdGVyfSBmaWx0ZXJgLFxuICAgICAgICBmaXJzdENoaWxkID0gZmlyc3QoY2hpbGRyZW4pLFxuICAgICAgICB0ZXh0ID0gZmlyc3RDaGlsZC5nZXRUZXh0KCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckxpbms7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGaWx0ZXJMaW5rIGZyb20gXCIuL2ZpbHRlckxpbmtcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxwPlxuICAgIHtcIlNob3c6IFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcyAvPlxuICA8L3VsPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHNldFZpc2liaWxpdHlGaWx0ZXIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7aW5pdGlhbFZpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5cbmNvbnN0IGluZmVyZW5jZUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8VG9kb0FwcCAvPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZmVyZW5jZUFwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlZHV4QXBwIGZyb20gXCIuL2V4YW1wbGUvcmVkdXhBcHBcIjtcbmltcG9ydCBpbmZlcmVuY2VBcHAgZnJvbSBcIi4vZXhhbXBsZS9pbmZlcmVuY2VBcHBcIjtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgcmVkdXhBcHAsXG4gIGluZmVyZW5jZUFwcFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sUUFBTSxhQUFOLDJCQUFBOzJCQUNELFFBQVEsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLFFBQU07OEJBRGxGO0FBRWpCLGFBQUssU0FBUztBQUVkLFlBQUksaUJBQWlCO0FBQUUsZUFBSyxrQkFBa0I7O0FBQzlDLFlBQUksaUJBQWlCO0FBQUUsZUFBSyxrQkFBa0I7O0FBQzlDLFlBQUksbUJBQW1CO0FBQUUsZUFBSyxvQkFBb0I7O0FBQ2xELFlBQUksc0JBQXNCO0FBQUUsZUFBSyx1QkFBdUI7O0FBRXhELGFBQUssU0FBUzs7bUJBVEcsYUFBQTs7VUFZbkIsS0FBQTtpQkFBQSwyQkFBa0I7QUFDaEIsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHlCQUFnQixTQUFTO0FBQ3ZCLG1CQUFPOzs7O1VBR1QsS0FBQTtpQkFBQSw2QkFBb0I7Ozs7VUFJcEIsS0FBQTtpQkFBQSxnQ0FBdUI7Ozs7O1VBSWhCLEtBQUE7aUJBQVAsZ0JBQWMsUUFBUTtBQUNwQixnQkFBUSxTQUE4RixPQUE5RixRQUFRLGtCQUFzRixPQUF0RixpQkFBaUIsa0JBQXFFLE9BQXJFLGlCQUFpQixvQkFBb0QsT0FBcEQsbUJBQW1CLHVCQUFpQyxPQUFqQyxzQkFBc0IsU0FBVyxPQUFYO0FBRTNGLG1CQUFPLElBL0JVLFlBK0JLLFFBQVEsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCOzs7O2FBL0J4Rjs7Ozs7QUVGckI7Ozs7Ozs7Ozs7Ozs7TUFFZ0IsT0FBSyxXQUFBO2VBQUw7O01BRUEsU0FBTyxXQUFBO2VBQVA7O01BUUEsV0FBUyxXQUFBO2VBQVQ7O01BUUEsV0FBUyxXQUFB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O01BQXNCOzs7O0FDVDNDOzs7OzttQ0FjQSxXQUFBOzs7ZUFBQTs7Ozs7Ozs7OztBQVJBLFFBQU0sV0FBVyxTQUFDLE9BQU8sU0FBQTthQUV2QiwwQkFBQSxNQUFBLGNBQUMsTUFBQSxNQUNDLDBCQUFBLE1BQUEsY0FBQyxlQUFBLFNBQWE7O1FBS2xCLFdBQWU7Ozs7QUNkZjs7Ozs7Ozs7ZUFhcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRnJCLFFBQVEsWUFBYyxVQUFBLE1BQWQ7QUFFTyxRQUFNLFVBQU4seUJBQUEsWUFBQTtnQkFBTSxVQUFBO2lDQUFBOzBCQUFBO2dDQUFBOzs7b0JBQUEsVUFBQTs7VUFDbkIsS0FBQTtpQkFBQSw2QkFBQTs7QUFDRSxpQkFBSyxjQUFjLFlBQUEsUUFBVyxVQUFVLFNBQUMsUUFBQTtxQkFBVyxNQUFLLE9BQU87Ozs7O1VBR2xFLEtBQUE7aUJBQUEsZ0NBQUE7QUFDRSxpQkFBSzs7OztVQUdQLEtBQUE7aUJBQUEsZ0JBQU8sUUFBTTtBQUNYLGdCQUFJLFFBQVE7QUFDVixrQkFBUSxzQkFBd0IsT0FBeEI7QUFFUixrQkFBSSxxQkFBcUI7QUFDdkIsb0JBQVEsbUJBQXFCLG9CQUFyQixrQkFDRixZQUFhLEdBQW1CLE9BQWpCLGtCQUFpQjtBQUV0QyxxQkFBSyxTQUFTOzttQkFFWDtBQUNMLGtCQUFNLDBCQUEwQixXQUFBLFVBQzFCLGFBQWEsR0FBMEIsT0FBeEIseUJBQXdCO0FBRTdDLHFCQUVFLDBCQUFBLE1BQUEsY0FBQyxPQUFBO2dCQUFJLFdBQVc7aUJBQ2QsMEJBQUEsTUFBQSxjQUFDLFNBQUEsU0FBTyxPQUNSLDBCQUFBLE1BQUEsY0FBQyxVQUFBLFNBQVEsT0FDVCwwQkFBQSxNQUFBLGNBQUMsUUFBQSxTQUFNOzs7OzthQTVCSTtNQUFnQjs7OztBQ2JyQzs7Ozs7bUNBbUJBLFdBQUE7OztlQUFBOzs7Ozs7Ozs7O0FBYkEsUUFBTSxlQUFlLFdBQUE7QUFDbkIsVUFBTSxpQkFBaUIsU0FBUyxlQUFlO0FBRS9DLGdCQUFBLFNBQVMsT0FFTCwwQkFBQSxNQUFBLGNBQUMsU0FBQSxTQUFPLE9BR1Y7O1FBS0osV0FBZTs7OztBQ25CZjs7Ozs7Ozs7Ozs7O0FBS0EsV0FBTyxPQUFPLFFBQVE7TUFDcEIsVUFBQSxVQUFBO01BQ0EsY0FBQSxjQUFBOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==

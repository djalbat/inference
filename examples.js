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
    exports.default = void 0;
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
    exports.default = ReactClass;
  });

  // node_modules/reaction/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    exports.remaining = remaining;
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function first(array) {
      return array[0];
    }
    function flatten(array1) {
      return array1.reduce(function(array, element) {
        array = array.concat(element);
        return array;
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
    exports.default = void 0;
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
            var firstChild = (0, _array).first(this.children) || null;
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
    exports.default = VirtualDOMElement;
  });

  // node_modules/reaction/lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
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
    exports.default = _default;
  });

  // node_modules/reaction/lib/virtualDOM/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMElement = _interopRequireDefault2(require_virtualDOMElement());
    var _reactElement = _interopRequireDefault2(require_reactElement());
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
    function _interopRequireDefault2(obj) {
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
          value: function mount(parent, reference1, context) {
            var _this = this;
            this.context = context;
            var childContext = this.getChildContext(context), children = (0, _array).guarantee(this.render());
            _get(_getPrototypeOf(ReactElement2.prototype), "mount", this).call(this, parent, children);
            children.forEach(function(child) {
              var childParent = _this, childReference = reference1;
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
            this.children = (0, _array).guarantee(this.render(update));
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
    exports.default = _default;
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
      var children = parent.getChildren(), remainingChildren = (0, _array).remaining(child, children);
      return remainingChildren.reduce(function(reference3, remainingChild) {
        if (reference3 === null) {
          var remainingChildDOMElement = remainingChild.getDOMElement();
          if (remainingChildDOMElement !== null) {
            reference3 = remainingChild;
          } else {
            child = null;
            parent = remainingChild;
            reference3 = findReference(parent, child);
          }
        }
        return reference3;
      }, null);
    }
  });

  // node_modules/reaction/lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = ReactComponent;
  });

  // node_modules/reaction/lib/virtualDOM/container.js
  var require_container = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMElement = _interopRequireDefault2(require_virtualDOMElement());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = ContainerElement;
    function parentDOMElement(parent) {
      var parentDOMElement1 = parent.getDOMElement();
      while (parentDOMElement1 === null) {
        parent = parent.getParent();
        parentDOMElement1 = parent.getDOMElement();
      }
      return parentDOMElement1;
    }
    function referenceDOMElement(reference) {
      var referenceDOMElement1 = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement1;
    }
  });

  // node_modules/reaction/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HTTP_WWW_W3_ORG_2000_SVG = exports.EMPTY_STRING = exports.CLASS_NAME = exports.HTML_FOR = exports.FUNCTION = exports.BOOLEAN = exports.OBJECT = exports.STRING = exports.CLASS = exports.REF = exports.FOR = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var REF = "ref";
    exports.REF = REF;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var STRING = "string";
    exports.STRING = STRING;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var HTTP_WWW_W3_ORG_2000_SVG = "http://www.w3.org/2000/svg";
    exports.HTTP_WWW_W3_ORG_2000_SVG = HTTP_WWW_W3_ORG_2000_SVG;
  });

  // node_modules/reaction/lib/mixins/containerElement.js
  var require_containerElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function setAttribute(name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var _this = this;
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
    exports.default = _default;
  });

  // node_modules/reaction/lib/virtualDOM/container/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _container = _interopRequireDefault2(require_container());
    var _containerElement = _interopRequireDefault2(require_containerElement());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = _default;
  });

  // node_modules/reaction/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSVGTagName = isSVGTagName;
    exports.isSVGAttributeName = isSVGAttributeName;
    exports.isHTMLAttributeName = isHTMLAttributeName;
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
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    function _interopRequireDefault2(obj) {
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
            return (0, _name).isSVGAttributeName(name);
          }
        }
      ]);
      return SVGElement2;
    }(_wrapNativeSuper(_element.default));
    exports.default = SVGElement;
  });

  // node_modules/reaction/lib/virtualDOM/container/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _container = _interopRequireDefault2(require_container());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = TextElement;
  });

  // node_modules/reaction/lib/virtualDOM/container/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    function _interopRequireDefault2(obj) {
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
            return (0, _name).isHTMLAttributeName(name);
          }
        }
      ]);
      return HTMLElement2;
    }(_wrapNativeSuper(_element.default));
    exports.default = HTMLElement;
  });

  // node_modules/reaction/lib/virtualDOM/react/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = ReactClassElement;
  });

  // node_modules/reaction/lib/virtualDOM/react/function.js
  var require_function = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault2(require_react());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = ReactFunctionElement;
  });

  // node_modules/reaction/lib/react.js
  var require_react2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reactClass = _interopRequireDefault2(require_reactClass());
    var _reactComponent = _interopRequireDefault2(require_reactComponent());
    var _virtualDOMElement = _interopRequireDefault2(require_virtualDOMElement());
    var _svg = _interopRequireDefault2(require_svg());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _html = _interopRequireDefault2(require_html());
    var _class = _interopRequireDefault2(require_class());
    var _function = _interopRequireDefault2(require_function());
    var _array = require_array();
    var _name = require_name();
    var _constants = require_constants();
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        var children = childrenFromRemainingArguments(remainingArguments), props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = (0, _name).isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
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
    exports.default = _default;
    function childrenFromRemainingArguments(remainingArguments) {
      remainingArguments = (0, _array).flatten(remainingArguments);
      var children = [];
      remainingArguments.forEach(function(childArgument) {
        var child;
        if (childArgument) {
          if (isSubclassOf(childArgument.constructor, _virtualDOMElement.default)) {
            child = childArgument;
          } else {
            var text = childArgument, textElement = new _textElement.default(text);
            child = textElement;
          }
          children.push(child);
        }
      });
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
      var subclass = false;
      if (argument.name === Class.name) {
        subclass = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument !== null) {
          subclass = isSubclassOf(argument, Class);
        }
      }
      return subclass;
    }
  });

  // node_modules/reaction/lib/reactDOM.js
  var require_reactDOM = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _container = _interopRequireDefault2(require_container());
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
    function _interopRequireDefault2(obj) {
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
    exports.default = ReactDOM;
  });

  // node_modules/reaction/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
    Object.defineProperty(exports, "ReactDOM", {
      enumerable: true,
      get: function() {
        return _reactDOM.default;
      }
    });
    var _react = _interopRequireDefault2(require_react2());
    var _reactDOM = _interopRequireDefault2(require_reactDOM());
    function _interopRequireDefault2(obj) {
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
    exports.combineReducers = exports.createStore = void 0;
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
    exports.createStore = createStore;
    var combineReducers = function(reducers) {
      return function() {
        var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, action = arguments.length > 1 ? arguments[1] : void 0;
        var keys = Object.keys(reducers), nextState1 = keys.reduce(function(nextState, key) {
          var reducer = reducers[key];
          nextState[key] = reducer(state[key], action);
          return nextState;
        }, {});
        return nextState1;
      };
    };
    exports.combineReducers = combineReducers;
  });

  // lib/example/reduxApp/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SET_VISIBILITY_FILTER = exports.SHOW_COMPLETED = exports.TOGGLE_TODO = exports.SHOW_ACTIVE = exports.SHOW_ALL = exports.ADD_TODO = void 0;
    var ADD_TODO = "ADD_TODO";
    exports.ADD_TODO = ADD_TODO;
    var SHOW_ALL = "SHOW_ALL";
    exports.SHOW_ALL = SHOW_ALL;
    var SHOW_ACTIVE = "SHOW_ACTIVE";
    exports.SHOW_ACTIVE = SHOW_ACTIVE;
    var TOGGLE_TODO = "TOGGLE_TODO";
    exports.TOGGLE_TODO = TOGGLE_TODO;
    var SHOW_COMPLETED = "SHOW_COMPLETED";
    exports.SHOW_COMPLETED = SHOW_COMPLETED;
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
    exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
  });

  // lib/example/reduxApp/reducer/todos.js
  var require_todos = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = todos;
    var _constants = require_constants2();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function todos() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var type = action.type;
      var todos1 = state;
      switch (type) {
        case _constants.ADD_TODO:
          todos1 = addTodoToTodos(todos1, action);
          break;
        case _constants.TOGGLE_TODO:
          todos1 = toggleTodos(todos1, action);
          break;
      }
      state = todos1;
      return state;
    }
    function addTodoToTodos(todos2, action) {
      var id = action.id, text = action.text, completed = false, todo = {
        id,
        text,
        completed
      };
      todos2 = _toConsumableArray(todos2).concat([
        todo
      ]);
      return todos2;
    }
    function toggleTodos(todos3, action) {
      var id = action.id;
      todos3 = todos3.map(function(todo) {
        if (todo.id === id) {
          var completed = todo.completed;
          completed = !completed;
          todo.completed = completed;
        }
        return todo;
      });
      return todos3;
    }
  });

  // lib/example/reduxApp/reducer/visibilityFilter.js
  var require_visibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = visibilityFilter;
    var _constants = require_constants2();
    function visibilityFilter() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.SHOW_ALL, action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var type = action.type;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          var visibilityFilter1 = action.visibilityFilter;
          state = visibilityFilter1;
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
    exports.default = void 0;
    var _redux = require_redux();
    var _todos = _interopRequireDefault2(require_todos());
    var _visibilityFilter = _interopRequireDefault2(require_visibilityFilter());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var reducer = (0, _redux).combineReducers({
      todos: _todos.default,
      visibilityFilter: _visibilityFilter.default
    });
    var _default = reducer;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/filterLink.js
  var require_filterLink = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _constants = require_constants2();
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
    var Component = _reaction.React.Component;
    var FilterLink = /* @__PURE__ */ function(Component1) {
      _inherits(FilterLink2, Component1);
      var _super = _createSuper(FilterLink2);
      function FilterLink2() {
        _classCallCheck(this, FilterLink2);
        return _super.apply(this, arguments);
      }
      _createClass(FilterLink2, [
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
            var store = this.context.store, state = store.getState(), visibilityFilter1 = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter1;
            if (active) {
              return /* @__PURE__ */ _reaction.React.createElement("span", null, children);
            }
            return /* @__PURE__ */ _reaction.React.createElement("a", {
              href: "#",
              className: "filter",
              onClick: function(event) {
                event.preventDefault();
                var type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                  type,
                  visibilityFilter
                };
                store.dispatch(action);
              }
            }, children);
          }
        }
      ]);
      return FilterLink2;
    }(Component);
    exports.default = FilterLink;
  });

  // lib/example/reduxApp/component/footer.js
  var require_footer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _filterLink = _interopRequireDefault2(require_filterLink());
    var _constants = require_constants2();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = function(props, context) {
      return _reaction.React.createElement("p", null, "Show: ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
      }, "All"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
      }, "Active"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
      }, "Completed"));
    };
    var _default = Footer;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/addTodo.js
  var require_addTodo = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
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
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoListItem.js
  var require_todoListItem = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
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
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoListItems.js
  var require_todoListItems = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _todoListItem = _interopRequireDefault2(require_todoListItem());
    var _constants = require_constants2();
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
    function _interopRequireDefault2(obj) {
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
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component1) {
      _inherits(TodoListItems2, Component1);
      var _super = _createSuper(TodoListItems2);
      function TodoListItems2() {
        _classCallCheck(this, TodoListItems2);
        return _super.apply(this, arguments);
      }
      _createClass(TodoListItems2, [
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
    exports.default = TodoListItems;
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
    exports.default = void 0;
    var _reaction = require_lib();
    var _todoListItems = _interopRequireDefault2(require_todoListItems());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = function(props, context) {
      return _reaction.React.createElement("ul", null, /* @__PURE__ */ _reaction.React.createElement(_todoListItems.default, null));
    };
    var _default = TodoList;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/todoApp.js
  var require_todoApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _footer = _interopRequireDefault2(require_footer());
    var _addTodo = _interopRequireDefault2(require_addTodo());
    var _todoList = _interopRequireDefault2(require_todoList());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoApp = function(props, context) {
      return _reaction.React.createElement("div", null, /* @__PURE__ */ _reaction.React.createElement(_addTodo.default, null), /* @__PURE__ */ _reaction.React.createElement(_todoList.default, null), /* @__PURE__ */ _reaction.React.createElement(_footer.default, null));
    };
    var _default = TodoApp;
    exports.default = _default;
  });

  // lib/example/reduxApp/component/provider.js
  var require_provider = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
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
    var Component = _reaction.React.Component;
    var Provider = /* @__PURE__ */ function(Component1) {
      _inherits(Provider2, Component1);
      var _super = _createSuper(Provider2);
      function Provider2() {
        _classCallCheck(this, Provider2);
        return _super.apply(this, arguments);
      }
      _createClass(Provider2, [
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
    exports.default = Provider;
  });

  // lib/example/reduxApp.js
  var require_reduxApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = reduxApp;
    var _reaction = require_lib();
    var _redux = require_redux();
    var _reducer = _interopRequireDefault2(require_reducer());
    var _todoApp = _interopRequireDefault2(require_todoApp());
    var _provider = _interopRequireDefault2(require_provider());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function reduxApp() {
      var store = (0, _redux).createStore(_reducer.default), rootDOMElement = document.getElementById("root");
      _reaction.ReactDOM.render(/* @__PURE__ */ _reaction.React.createElement(_provider.default, {
        store
      }, /* @__PURE__ */ _reaction.React.createElement(_todoApp.default, null)), rootDOMElement);
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CONTENT_TYPE = exports.EMPTY_STRING = exports.ACCEPT = exports.CTRL_C = exports.ERROR = exports.UTF8 = void 0;
    var UTF8 = "utf8";
    exports.UTF8 = UTF8;
    var ERROR = "error";
    exports.ERROR = ERROR;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    exports.fifthLast = fifthLast;
    exports.fourthLast = fourthLast;
    exports.thirdLast = thirdLast;
    exports.secondLast = secondLast;
    exports.firstLast = firstLast;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.back = back;
    exports.front = front;
    exports.push = push;
    exports.unshift = unshift;
    exports.concat = concat;
    exports.clear = clear;
    exports.copy = copy;
    exports.merge = merge;
    exports.splice = splice;
    exports.replace = replace;
    exports.filter = filter;
    exports.find = find;
    exports.prune = prune;
    exports.patch = patch;
    exports.augment = augment;
    exports.separate = separate;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    exports.forwardsEvery = forwardsEvery;
    exports.backwardsEvery = backwardsEvery;
    exports.forwardsReduce = forwardsReduce;
    exports.backwardsReduce = backwardsReduce;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
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
      return array.slice(0, array.length - 1);
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
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element1, test) {
      var start;
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element1);
      }
      return found;
    }
    function filter(array, test) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, test) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, test) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element2, test) {
      var found = array.some(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element2);
      }
      return found;
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, test) {
      array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
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
      augment,
      separate,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPathName = isPathName;
    exports.isPathTopmostName = isPathTopmostName;
    exports.isPathRelativePath = isPathRelativePath;
    exports.isPathAbsolutePath = isPathAbsolutePath;
    exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
    exports.combinePaths = combinePaths;
    exports.concatenatePaths = concatenatePaths;
    exports.bottommostNameFromPath = bottommostNameFromPath;
    exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
    exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
    exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
    exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
    exports.default = void 0;
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
      var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array).first(relativePathNames);
      lastPathName = (0, _array).last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
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
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
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
    exports.default = _default;
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CARRIAGE_RETURN_CHARACTER = exports.BACKSPACE_CHARACTER = exports.LINE_FEED_CHARACTER = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = exports.ETX_CHARACTER = void 0;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var COLON_CHARACTER = ":";
    exports.COLON_CHARACTER = COLON_CHARACTER;
    var AMPERSAND_CHARACTER = "&";
    exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.overwrite = overwrite;
    exports.underwrite = underwrite;
    exports.portFromHost = portFromHost;
    exports.secureFromHost = secureFromHost;
    exports.hostnameFromHost = hostnameFromHost;
    exports.queryStringFromQuery = queryStringFromQuery;
    exports.urlFromHostURIAndQuery = urlFromHostURIAndQuery;
    exports.default = void 0;
    var _array = require_array2();
    var _constants = require_constants3();
    var _characters = require_characters();
    function overwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
          headers[ownPropertyName] = value;
          return true;
        }
      });
      if (!overwritten) {
        headers[name] = value;
      }
    }
    function underwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
      }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
      if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
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
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromQuery(query) {
      var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString1 = names.reduce(function(queryString, name, index) {
        var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString;
      }, _constants.EMPTY_STRING);
      return queryString1;
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
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whilst = whilst;
    exports.forEach = forEach;
    exports.sequence = sequence;
    exports.eventually = eventually;
    exports.repeatedly = repeatedly;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
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
    exports.default = _default;
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.POST_METHOD = exports.GET_METHOD = void 0;
    var GET_METHOD = "GET";
    exports.GET_METHOD = GET_METHOD;
    var POST_METHOD = "POST";
    exports.POST_METHOD = POST_METHOD;
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.APPLICATION_JSON_CONTENT_TYPE = void 0;
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _constants = require_constants3();
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _http = require_http();
    function get(host, uri, query, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAccept(headers, accept);
      request(host, uri, query, method, headers, content, callback);
    }
    function post(host, uri, query, headers, content, callback) {
      if (callback === void 0) {
        callback = content;
        content = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAccept(headers, accept);
      underwriteContentType(headers, contentType);
      request(host, uri, query, method, headers, content, callback);
    }
    function request(host, uri, query, method, headers, content1, callback) {
      var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content1, jsonString = JSON.stringify(json);
        content1 = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
        if (readyState == 4) {
          var content = response;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = content, json2 = JSON.parse(jsonString2);
              content = json2;
            } catch (error) {
              content = null;
            }
          }
          callback(content, statusCode);
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
      }
      content1 !== null ? xmlHttpRequest.send(content1) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAccept(headers, accept) {
      var name = _constants.ACCEPT, value = accept;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentType(headers, contentTYpe) {
      var name = _constants.CONTENT_TYPE, value = contentTYpe;
      (0, _http).underwrite(headers, name, value);
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "httpUtilities", {
      enumerable: true,
      get: function() {
        return _http.default;
      }
    });
    Object.defineProperty(exports, "arrayUtilities", {
      enumerable: true,
      get: function() {
        return _array.default;
      }
    });
    Object.defineProperty(exports, "asynchronousUtilities", {
      enumerable: true,
      get: function() {
        return _asynchronous.default;
      }
    });
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
    var _path = _interopRequireDefault2(require_path());
    var _http = _interopRequireDefault2(require_http());
    var _array = _interopRequireDefault2(require_array2());
    var _asynchronous = _interopRequireDefault2(require_asynchronous());
    var _ajax = _interopRequireDefault2(require_ajax());
    function _interopRequireDefault2(obj) {
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
  });

  // lib/createDispatcher.js
  var require_createDispatcher = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
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
    exports.default = _default;
  });

  // lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "combineRules", {
      enumerable: true,
      get: function() {
        return _combineRules.default;
      }
    });
    Object.defineProperty(exports, "createDispatcher", {
      enumerable: true,
      get: function() {
        return _createDispatcher.default;
      }
    });
    var _combineRules = _interopRequireDefault2(require_combineRules());
    var _createDispatcher = _interopRequireDefault2(require_createDispatcher());
    function _interopRequireDefault2(obj) {
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
    exports.SET_VISIBILITY_FILTER = exports.SHOW_COMPLETED = exports.SHOW_ACTIVE = exports.SHOW_ALL = exports.ADD_TODO = void 0;
    var ADD_TODO = "ADD_TODO";
    exports.ADD_TODO = ADD_TODO;
    var SHOW_ALL = "show-all";
    exports.SHOW_ALL = SHOW_ALL;
    var SHOW_ACTIVE = "show-active";
    exports.SHOW_ACTIVE = SHOW_ACTIVE;
    var SHOW_COMPLETED = "show-completed";
    exports.SHOW_COMPLETED = SHOW_COMPLETED;
    var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
    exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
  });

  // lib/example/inferenceApp/rule/addTodo.js
  var require_addTodo2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addTodo;
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
    exports.default = setVisibilityFilter;
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
    exports.default = void 0;
    var _index = require_lib2();
    var _addTodo = _interopRequireDefault2(require_addTodo2());
    var _setVisibilityFilter = _interopRequireDefault2(require_setVisibilityFilter());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var rule = (0, _index).combineRules({
      addTodo: _addTodo.default,
      setVisibilityFilter: _setVisibilityFilter.default
    });
    var _default = rule;
    exports.default = _default;
  });

  // lib/example/inferenceApp/dispatcher.js
  var require_dispatcher = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = require_lib2();
    var _rule = _interopRequireDefault2(require_rule());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var dispatcher = (0, _index).createDispatcher(_rule.default);
    var _default = dispatcher;
    exports.default = _default;
  });

  // lib/example/inferenceApp/component/filterLink.js
  var require_filterLink2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _necessary = require_browser();
    var _dispatcher = _interopRequireDefault2(require_dispatcher());
    var _constants = require_constants4();
    function _interopRequireDefault2(obj) {
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
    exports.default = _default;
  });

  // lib/example/inferenceApp/component/footer.js
  var require_footer2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _filterLink = _interopRequireDefault2(require_filterLink2());
    var _constants = require_constants4();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Footer = function(props, context) {
      return _reaction.React.createElement("p", null, "Show: ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
      }, "All"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
      }, "Active"), " - ", /* @__PURE__ */ _reaction.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
      }, "Completed"));
    };
    var _default = Footer;
    exports.default = _default;
  });

  // lib/example/inferenceApp/component/addTodo.js
  var require_addTodo3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _dispatcher = _interopRequireDefault2(require_dispatcher());
    var _constants = require_constants4();
    function _interopRequireDefault2(obj) {
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
    exports.default = _default;
  });

  // lib/example/inferenceApp/component/todoListItem.js
  var require_todoListItem2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
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
    var Component = _reaction.React.Component;
    var TodoListItem = /* @__PURE__ */ function(Component1) {
      _inherits(TodoListItem2, Component1);
      var _super = _createSuper(TodoListItem2);
      function TodoListItem2() {
        _classCallCheck(this, TodoListItem2);
        return _super.apply(this, arguments);
      }
      _createClass(TodoListItem2, [
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
    exports.default = TodoListItem;
  });

  // lib/example/inferenceApp/component/todoListItems.js
  var require_todoListItems2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _dispatcher = _interopRequireDefault2(require_dispatcher());
    var _todoListItem = _interopRequireDefault2(require_todoListItem2());
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
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
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
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
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component1) {
      _inherits(TodoListItems2, Component1);
      var _super = _createSuper(TodoListItems2);
      function TodoListItems2() {
        _classCallCheck(this, TodoListItems2);
        return _super.apply(this, arguments);
      }
      _createClass(TodoListItems2, [
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
              children = _toConsumableArray(children).concat([
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
    exports.default = TodoListItems;
  });

  // lib/example/inferenceApp/component/todoList.js
  var require_todoList2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _todoListItems = _interopRequireDefault2(require_todoListItems2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TodoList = function(props, context) {
      return _reaction.React.createElement("ul", null, /* @__PURE__ */ _reaction.React.createElement(_todoListItems.default, null));
    };
    var _default = TodoList;
    exports.default = _default;
  });

  // lib/example/inferenceApp/component/todoApp.js
  var require_todoApp2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _footer = _interopRequireDefault2(require_footer2());
    var _addTodo = _interopRequireDefault2(require_addTodo3());
    var _todoList = _interopRequireDefault2(require_todoList2());
    var _dispatcher = _interopRequireDefault2(require_dispatcher());
    var _constants = require_constants4();
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
    function _interopRequireDefault2(obj) {
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
    var Component = _reaction.React.Component;
    var TodoApp = /* @__PURE__ */ function(Component1) {
      _inherits(TodoApp2, Component1);
      var _super = _createSuper(TodoApp2);
      function TodoApp2() {
        _classCallCheck(this, TodoApp2);
        return _super.apply(this, arguments);
      }
      _createClass(TodoApp2, [
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
    exports.default = TodoApp;
  });

  // lib/example/inferenceApp.js
  var require_inferenceApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _reaction = require_lib();
    var _todoApp = _interopRequireDefault2(require_todoApp2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var inferenceApp = function() {
      var rootDOMElement = document.getElementById("root");
      _reaction.ReactDOM.render(/* @__PURE__ */ _reaction.React.createElement(_todoApp.default, null), rootDOMElement);
    };
    var _default = inferenceApp;
    exports.default = _default;
  });

  // lib/examples.js
  "use strict";
  var _reduxApp = _interopRequireDefault(require_reduxApp());
  var _inferenceApp = _interopRequireDefault(require_inferenceApp());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  Object.assign(window, {
    reduxApp: _reduxApp.default,
    inferenceApp: _inferenceApp.default
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdENsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWwuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC9mdW5jdGlvbi5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvcmVhY3RET00uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1eC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZm9vdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbXMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy9jb21iaW5lUnVsZXMuanMiLCAic3JjL2NyZWF0ZURpc3BhdGNoZXIuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL3J1bGUvYWRkVG9kby5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9kaXNwYXRjaGVyLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldEF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmFkZENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzZXMoY2xhc3NOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJDbGFzc2VzKCk7XG59XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7XG4gIHJldHVybiBudWxsOyAgLy8vXG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmdldFN0eWxlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRTdHlsZShuYW1lLCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET01FbGVtZW50XCI7XG5pbXBvcnQgcmVhY3RFbGVtZW50TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvcmVhY3RFbGVtZW50XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudCh1cGRhdGUpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGU7ICAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVtb3VudCh1cGRhdGUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgLy8gcmVuZGVyKHVwZGF0ZSkge1xuICAvLyAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5jYWxsKHRoaXMsIHVwZGF0ZSk7XG4gIC8vIH1cblxuICAvLyBnZXRJbml0aWFsU3RhdGUoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIC8vIH1cblxuICAvLyBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAvLyAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAvLyB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICAvLyB9XG5cbiAgLy8gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gIC8vICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICAvLyB9XG5cblxuXG5cblxuXG5cblxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuXG5cblxuXG5cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBDb250YWluZXJFbGVtZW50KHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRk9SID0gXCJmb3JcIjtcbmV4cG9ydCBjb25zdCBSRUYgPSBcInJlZlwiO1xuZXhwb3J0IGNvbnN0IENMQVNTID0gXCJjbGFzc1wiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgT0JKRUNUID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTsgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuaW1wb3J0IGNvbnRhaW5lckVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uLy4uL21peGlucy9jb250YWluZXJFbGVtZW50XCI7XG5cbmltcG9ydCB7IFJFRiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi4vcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cblxuXG5cbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET01FbGVtZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvdGV4dEVsZW1lbnRcIjtcbmltcG9ydCBIVE1MRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWxcIjtcbmltcG9ydCBSZWFjdENsYXNzRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzXCI7XG5pbXBvcnQgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9mdW5jdGlvblwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMgPSBmbGF0dGVuKHJlbWFpbmluZ0FyZ3VtZW50cyk7IC8vL1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLmZvckVhY2goKGNoaWxkQXJndW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoY2hpbGRBcmd1bWVudCkgeyAgLy8vXG4gICAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIFZpcnR1YWxET01FbGVtZW50KSkgeyAvLy9cbiAgICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIGNoaWxkID0gdGV4dEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gQ29udGFpbmVyRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RET00gfSBmcm9tIFwiLi9yZWFjdERPTVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxMID0gXCJTSE9XX0FMTFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSVZFID0gXCJTSE9XX0FDVElWRVwiO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9UT0RPID0gXCJUT0dHTEVfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NUExFVEVEID0gXCJTSE9XX0NPTVBMRVRFRFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVyKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdXhcIjtcblxuaW1wb3J0IHRvZG9zIGZyb20gXCIuL3JlZHVjZXIvdG9kb3NcIjtcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpZCA9IDAsXG4gICAgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RvcmUgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZCsrO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcyAvPlxuICA8L3VsPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjggPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0MgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUID0gXCJhY2NlcHRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRSA9IFwiY29udGVudC10eXBlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgb3ZlcndyaXR0ZW4gPSBvd25Qcm9wZXJ0eU5hbWVzLnNvbWUoKG93blByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9IG93blByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgaGVhZGVyc1tvd25Qcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKCFvdmVyd3JpdHRlbikge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBvd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksXG4gICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMgPSBvd25Qcm9wZXJ0eU5hbWVzLm1hcCgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSA9IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMuaW5jbHVkZXMobG93ZXJjYXNlTmFtZSk7XG5cbiAgaWYgKCFsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpIHtcbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhxdWVyeSksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W25hbWVdLFxuICAgICAgICAgICAgICAgIGVuY29kZWROYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLFxuICAgICAgICAgICAgICAgIGVuY29kZWRWYWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgYW1wZXJzYW5kT3JOb3RoaW5nID0gKGluZGV4ICE9PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFNUEVSU0FORF9DSEFSQUNURVIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG4gIFxuICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAke2VuY29kZWROYW1lfT0ke2VuY29kZWRWYWx1ZX0ke2FtcGVyc2FuZE9yTm90aGluZ31gO1xuICBcbiAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XG4gICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUXVlcnkocXVlcnkpLFxuICAgICAgICB1cmwgPSAocXVlcnlTdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9YCA6XG4gICAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfT8ke3F1ZXJ5U3RyaW5nfWA7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvdmVyd3JpdGUsXG4gIHVuZGVyd3JpdGUsXG4gIHBvcnRGcm9tSG9zdCxcbiAgc2VjdXJlRnJvbUhvc3QsXG4gIGhvc3RuYW1lRnJvbUhvc3QsXG4gIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5LFxuICB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUNDRVBULCBDT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gY29udGVudDtcbiAgICBjb250ZW50ID0gaGVhZGVycztcbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdChoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF0gfHwgbnVsbCxcbiAgICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJzW0NPTlRFTlRfVFlQRV0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVCwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFLCBjb250ZW50VHlwZSk7XG4gIH1cblxuICAoY29udGVudCAhPT0gbnVsbCkgP1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoY29udGVudCkgOlxuICAgICAgeG1sSHR0cFJlcXVlc3Quc2VuZCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldCxcbiAgcG9zdCxcbiAgcmVxdWVzdFxufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMsIGFjY2VwdCkge1xuICBjb25zdCBuYW1lID0gQUNDRVBULCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEUsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IChydWxlKSA9PiB7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1cGRhdGUgPSBydWxlKGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgcnVsZU5hbWVzIH0gPSBsaXN0ZW5lcjtcblxuICAgICAgaWYgKChydWxlTmFtZXMubGVuZ3RoID09PSAwKSB8fCBydWxlTmFtZXMuc29tZSgocnVsZU5hbWUpID0+ICh1cGRhdGVbcnVsZU5hbWVdICE9PSB1bmRlZmluZWQpKSkge1xuICAgICAgICBsaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lciwgLi4ucnVsZU5hbWVzKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lciwge1xuICAgICAgcnVsZU5hbWVzXG4gICAgfSk7XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHVuc3Vic2NyaWJlKGxpc3RlbmVyKSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiAobGlzdGVuZXIgIT09IGwpKTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGF0Y2hlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi9jb21iaW5lUnVsZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlRGlzcGF0Y2hlciB9IGZyb20gXCIuL2NyZWF0ZURpc3BhdGNoZXJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxMID0gXCJzaG93LWFsbFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSVZFID0gXCJzaG93LWFjdGl2ZVwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NUExFVEVEID0gXCJzaG93LWNvbXBsZXRlZFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlGaWx0ZXIoYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBhZGRUb2RvIGZyb20gXCIuL3J1bGUvYWRkVG9kb1wiO1xuaW1wb3J0IHNldFZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcnVsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlRGlzcGF0Y2hlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcihydWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGF0Y2hlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyhcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlLFxuICAgICAgICAgICAgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICBjaGlsZHJlbiA9IFtcbiAgICAgICAgLi4uY2hpbGRyZW4sXG5cbiAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbXMgZnJvbSBcIi4vdG9kb0xpc3RJdGVtc1wiO1xuXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8dWw+XG4gICAgPFRvZG9MaXN0SXRlbXMgLz5cbiAgPC91bD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuXG5jb25zdCBpbmZlcmVuY2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFRvZG9BcHAgLz5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmZlcmVuY2VBcHA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZWR1eEFwcCBmcm9tIFwiLi9leGFtcGxlL3JlZHV4QXBwXCI7XG5pbXBvcnQgaW5mZXJlbmNlQXBwIGZyb20gXCIuL2V4YW1wbGUvaW5mZXJlbmNlQXBwXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIHJlZHV4QXBwLFxuICBpbmZlcmVuY2VBcHBcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLGFBQU4sMkJBQVE7MkJBQ1QsUUFBUSxpQkFBaUIsaUJBQWlCLG1CQUFtQixzQkFBc0IsUUFBTTs4QkFEbEY7QUFFakIsYUFBSyxTQUFTO0FBRWQsWUFBSSxpQkFBaUI7QUFBRSxlQUFLLGtCQUFrQjs7QUFDOUMsWUFBSSxpQkFBaUI7QUFBRSxlQUFLLGtCQUFrQjs7QUFDOUMsWUFBSSxtQkFBbUI7QUFBRSxlQUFLLG9CQUFvQjs7QUFDbEQsWUFBSSxzQkFBc0I7QUFBRSxlQUFLLHVCQUF1Qjs7QUFFeEQsYUFBSyxTQUFTOzttQkFURyxhQUFVOztVQVk3QixLQUFBO2lCQUFBLDJCQUFrQjtBQUNoQixtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEseUJBQWdCLFNBQVM7QUFDdkIsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLDZCQUFvQjs7OztVQUlwQixLQUFBO2lCQUFBLGdDQUF1Qjs7Ozs7VUFJaEIsS0FBQTtpQkFBUCxnQkFBYyxRQUFRO0FBQ3BCLGdCQUFRLFNBQThGLE9BQTlGLFFBQVEsa0JBQXNGLE9BQXRGLGlCQUFpQixrQkFBcUUsT0FBckUsaUJBQWlCLG9C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

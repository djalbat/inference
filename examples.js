(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

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

  // node_modules/reaction/lib/element.js
  var require_element = __commonJS((exports) => {
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
    var Element = /* @__PURE__ */ function() {
      function Element2(props) {
        _classCallCheck(this, Element2);
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      _createClass(Element2, [
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
      return Element2;
    }();
    exports.default = Element;
  });

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

  // node_modules/reaction/lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
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
    var ReactComponent = /* @__PURE__ */ function() {
      function ReactComponent2() {
        _classCallCheck(this, ReactComponent2);
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
    }();
    exports.default = ReactComponent;
  });

  // node_modules/reaction/lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function setAttribute(name2, value) {
      var firstChild = this.getFirstChild();
      return firstChild.setAttribute(name2, value);
    }
    function getAttribute(name2) {
      var firstChild = this.getFirstChild();
      return firstChild.getAttribute(name2);
    }
    function clearAttribute(name2) {
      var firstChild = this.getFirstChild();
      firstChild.clearAttribute(name2);
    }
    function addAttribute(name2, value) {
      var firstChild = this.getFirstChild();
      firstChild.addAttribute(name2, value);
    }
    function removeAttribute(name2) {
      var firstChild = this.getFirstChild();
      firstChild.removeAttribute(name2);
    }
    function hasAttribute(name2) {
      var firstChild = this.getFirstChild();
      return firstChild.hasAttribute(name2);
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
    function getStyle(name2) {
      var firstChild = this.getFirstChild();
      return firstChild.getStyle(name2);
    }
    function setStyle(name2, value) {
      var firstChild = this.getFirstChild();
      firstChild.setStyle(name2, value);
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

  // node_modules/reaction/lib/element/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    var ReactElement = /* @__PURE__ */ function(Element) {
      _inherits(ReactElement2, Element);
      function ReactElement2(props) {
        _classCallCheck(this, ReactElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactElement2).call(this, props));
        _this.state = void 0;
        _this.context = void 0;
        return _this;
      }
      _createClass(ReactElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            var _this = this;
            this.context = context;
            var childContext = this.getChildContext(context), children = (0, _array).guarantee(this.render());
            _get(_getPrototypeOf(ReactElement2.prototype), "mount", this).call(this, parent, children);
            children.forEach(function(child) {
              var childParent = _this, childReference = reference;
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
            return reference1(parent, child);
          }
        }
      ]);
      return ReactElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(ReactElement.prototype, _reactElement.default);
    var _default = ReactElement;
    exports.default = _default;
    function reference1(parent, child) {
      var reference = findReference(parent, child), parentDOMElement = parent.getDOMElement();
      while (reference === null && parentDOMElement === null) {
        child = parent;
        parent = parent.getParent();
        reference = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
      }
      return reference;
    }
    function findReference(parent, child) {
      var children = parent.getChildren(), remainingChildren = (0, _array).remaining(child, children);
      return remainingChildren.reduce(function(reference, remainingChild) {
        if (reference === null) {
          var remainingChildDOMElement = remainingChild.getDOMElement();
          if (remainingChildDOMElement !== null) {
            reference = remainingChild;
          } else {
            child = null;
            parent = remainingChild;
            reference = findReference(parent, child);
          }
        }
        return reference;
      }, null);
    }
  });

  // node_modules/reaction/lib/element/react/class.js
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
    var ReactClassElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactClassElement2, ReactElement);
      function ReactClassElement2(reactClass, props) {
        _classCallCheck(this, ReactClassElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactClassElement2).call(this, props));
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

  // node_modules/reaction/lib/element/react/function.js
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
    var ReactFunctionElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactFunctionElement2, ReactElement);
      function ReactFunctionElement2(reactFunction, props) {
        _classCallCheck(this, ReactFunctionElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactFunctionElement2).call(this, props));
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

  // node_modules/reaction/lib/element/react/component.js
  var require_component = __commonJS((exports) => {
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
    var ReactComponentElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactComponentElement2, ReactElement);
      function ReactComponentElement2(reactComponent, props) {
        _classCallCheck(this, ReactComponentElement2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactComponentElement2).call(this, props));
        _this.reactComponent = reactComponent;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _createClass(ReactComponentElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactComponent.render.call(this, update);
          }
        },
        {
          key: "getInitialState",
          value: function getInitialState() {
            return this.reactComponent.getInitialState.call(this);
          }
        },
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            return this.reactComponent.getChildContext.call(this, context);
          }
        },
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.reactComponent.componentDidMount.call(this);
          }
        },
        {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.reactComponent.componentWillUnmount.call(this);
          }
        }
      ]);
      return ReactComponentElement2;
    }(_react.default);
    exports.default = ReactComponentElement;
  });

  // node_modules/reaction/lib/element/virtualDOMNode.js
  var require_virtualDOMNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
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
    var VirtualDOMNode = /* @__PURE__ */ function(Element) {
      _inherits(VirtualDOMNode2, Element);
      function VirtualDOMNode2(props, domElement) {
        _classCallCheck(this, VirtualDOMNode2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMNode2).call(this, props));
        _this.domElement = domElement;
        return _this;
      }
      _createClass(VirtualDOMNode2, [
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
            _get(_getPrototypeOf(VirtualDOMNode2.prototype), "mount", this).call(this, parent, children);
            parentDOMElement1(parent).insertBefore(this.domElement, referenceDOMElement1(reference));
            return this.domElement;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.domElement.parentElement.removeChild(this.domElement);
            _get(_getPrototypeOf(VirtualDOMNode2.prototype), "unmount", this).call(this);
          }
        }
      ], [
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var children = [], props = {
              children
            }, virtualDOMNode = new VirtualDOMNode2(props, domElement);
            return virtualDOMNode;
          }
        }
      ]);
      return VirtualDOMNode2;
    }(_wrapNativeSuper(_element.default));
    exports.default = VirtualDOMNode;
    function parentDOMElement1(parent) {
      var parentDOMElement = parent.getDOMElement();
      while (parentDOMElement === null) {
        parent = parent.getParent();
        parentDOMElement = parent.getDOMElement();
      }
      return parentDOMElement;
    }
    function referenceDOMElement1(reference) {
      var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement;
    }
  });

  // node_modules/reaction/lib/element/virtualDOMNode/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
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
    var VirtualDOMTextElement = /* @__PURE__ */ function(VirtualDOMNode) {
      _inherits(VirtualDOMTextElement2, VirtualDOMNode);
      function VirtualDOMTextElement2(text) {
        _classCallCheck(this, VirtualDOMTextElement2);
        var domElement = document.createTextNode(text), children = [], props = {
          children
        };
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMTextElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMTextElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(VirtualDOMTextElement2.prototype), "mount", this).call(this, parent, reference);
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            _get(_getPrototypeOf(VirtualDOMTextElement2.prototype), "unmount", this).call(this);
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
      return VirtualDOMTextElement2;
    }(_virtualDOMNode.default);
    exports.default = VirtualDOMTextElement;
  });

  // node_modules/reaction/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HTTP_WWW_W3_ORG_2000_SVG = exports.EMPTY_STRING = exports.CLASS_NAME = exports.HTML_FOR = exports.FUNCTION = exports.BOOLEAN = exports.OBJECT = exports.STRING = exports.CLASS = exports.FOR = void 0;
    var FOR = "for";
    exports.FOR = FOR;
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

  // node_modules/reaction/lib/mixins/virtualDOMElement.js
  var require_virtualDOMElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function setAttribute(name2, value) {
      if (name2 === _constants.CLASS_NAME) {
        name2 = _constants.CLASS;
      }
      if (name2 === _constants.HTML_FOR) {
        name2 = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var _this = this;
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          _this.domElement[name2][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name2;
          this.domElement.setAttribute(name2, value);
        }
      } else {
        this.domElement.setAttribute(name2, value);
      }
    }
    function getAttribute(name2) {
      return this.domElement.getAttribute(name2);
    }
    function clearAttribute(name2) {
      this.domElement.removeAttribute(name2);
    }
    function addAttribute(name2, value) {
      this.setAttribute(name2, value);
    }
    function removeAttribute(name2) {
      this.domElement.removeAttribute(name2);
    }
    function hasAttribute(name2) {
      return this.domElement.hasAttribute(name2);
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
    function getStyle() {
      return this.domElement.style[name];
    }
    function setStyle(name2, value) {
      this.domElement.style[name2] = value;
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

  // node_modules/reaction/lib/element/virtualDOMNode/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
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
    var VirtualDOMElement = /* @__PURE__ */ function(VirtualDOMNode) {
      _inherits(VirtualDOMElement2, VirtualDOMNode);
      function VirtualDOMElement2() {
        _classCallCheck(this, VirtualDOMElement2);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMElement2).apply(this, arguments));
      }
      _createClass(VirtualDOMElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_getPrototypeOf(VirtualDOMElement2.prototype), "mount", this).call(this, parent, reference);
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
            _get(_getPrototypeOf(VirtualDOMElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "applyProps",
          value: function applyProps() {
            var _this = this;
            var names = Object.keys(this.props);
            names.forEach(function(name2) {
              var value = _this.props[name2];
              if (false) {
              } else if (_this.isHandlerName(name2)) {
                _this.setHandler(name2, value);
              } else if (_this.isAttributeName(name2)) {
                _this.setAttribute(name2, value);
              } else if (name2 === "ref") {
                var callback = value;
                callback(_this.domElement);
              }
            });
          }
        },
        {
          key: "setHandler",
          value: function setHandler(name2, value) {
            var eventType = name2.substr(2).toLowerCase(), handler = value;
            this.domElement.addEventListener(eventType, handler);
          }
        },
        {
          key: "isHandlerName",
          value: function isHandlerName(name2) {
            return name2.match(/^on/);
          }
        }
      ]);
      return VirtualDOMElement2;
    }(_virtualDOMNode.default);
    Object.assign(VirtualDOMElement.prototype, _virtualDOMElement.default);
    var _default = VirtualDOMElement;
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

  // node_modules/reaction/lib/element/virtualDOMNode/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
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
    var VirtualDOMHTMLElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(VirtualDOMHTMLElement2, VirtualDOMElement);
      function VirtualDOMHTMLElement2(tagName, props) {
        _classCallCheck(this, VirtualDOMHTMLElement2);
        var domElement = document.createElement(tagName);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMHTMLElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMHTMLElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name2) {
            return (0, _name).isHTMLAttributeName(name2);
          }
        }
      ]);
      return VirtualDOMHTMLElement2;
    }(_element.default);
    exports.default = VirtualDOMHTMLElement;
  });

  // node_modules/reaction/lib/element/virtualDOMNode/element/svg.js
  var require_svg = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
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
    var VirtualDOMSVGElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(VirtualDOMSVGElement2, VirtualDOMElement);
      function VirtualDOMSVGElement2(tagName, props) {
        _classCallCheck(this, VirtualDOMSVGElement2);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMSVGElement2).call(this, props, domElement));
      }
      _createClass(VirtualDOMSVGElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name2) {
            return (0, _name).isSVGAttributeName(name2);
          }
        }
      ]);
      return VirtualDOMSVGElement2;
    }(_element.default);
    exports.default = VirtualDOMSVGElement;
  });

  // node_modules/reaction/lib/react.js
  var require_react2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element());
    var _reactClass = _interopRequireDefault2(require_reactClass());
    var _reactComponent = _interopRequireDefault2(require_reactComponent());
    var _class = _interopRequireDefault2(require_class());
    var _function = _interopRequireDefault2(require_function());
    var _component = _interopRequireDefault2(require_component());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _html = _interopRequireDefault2(require_html());
    var _svg = _interopRequireDefault2(require_svg());
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
          var tagName = firstArgument, virtualDOMElement = (0, _name).isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
          element = virtualDOMElement;
        } else if (_instanceof(firstArgument, _reactClass.default)) {
          var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
          element = reactClassElement;
          var mixins = reactClass.mixins;
          assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
          var ReactComponent = firstArgument, reactComponent = new ReactComponent(), reactComponentElement = new _component.default(reactComponent, props);
          element = reactComponentElement;
          assignReactComponentMixins(ReactComponent, element);
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
          if (isSubclassOf(childArgument.constructor, _element.default)) {
            child = childArgument;
          } else {
            var text = childArgument, virtualDOMTextElement = new _textElement.default(text);
            child = virtualDOMTextElement;
          }
          children.push(child);
        }
      });
      return children;
    }
    function assignReactComponentMixins(reactComponent, element) {
      var mixins = reactComponent.mixins;
      reactComponent = Object.getPrototypeOf(reactComponent);
      if (reactComponent !== _reactComponent.default) {
        assignReactComponentMixins(reactComponent, element);
      }
      assignMixins(mixins, element);
    }
    function assignMixins(mixins, element) {
      if (mixins) {
        mixins.forEach(function(mixin) {
          var name2 = mixin.name;
          element[name2] = mixin.bind(element);
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
    var _virtualDOMNode = _interopRequireDefault2(require_virtualDOMNode());
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
            var parent = _virtualDOMNode.default.fromDOMElement(parentDOMElement), reference = null, context = {};
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
      return function(param, action) {
        var state = param === void 0 ? {} : param;
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
    exports.default = todos1;
    var _constants = require_constants2();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function todos1(param, param1) {
      var state = param === void 0 ? [] : param, action = param1 === void 0 ? {} : param1;
      var type = action.type;
      var todos = state;
      switch (type) {
        case _constants.ADD_TODO:
          todos = addTodoToTodos(todos, action);
          break;
        case _constants.TOGGLE_TODO:
          todos = toggleTodos(todos, action);
          break;
      }
      state = todos;
      return state;
    }
    function addTodoToTodos(todos, action) {
      var id = action.id, text = action.text, completed = false, todo = {
        id,
        text,
        completed
      };
      todos = _toConsumableArray(todos).concat([
        todo
      ]);
      return todos;
    }
    function toggleTodos(todos, action) {
      var id = action.id;
      todos = todos.map(function(todo) {
        if (todo.id === id) {
          var completed = todo.completed;
          completed = !completed;
          todo.completed = completed;
        }
        return todo;
      });
      return todos;
    }
  });

  // lib/example/reduxApp/reducer/visibilityFilter.js
  var require_visibilityFilter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = visibilityFilter1;
    var _constants = require_constants2();
    function visibilityFilter1(param, param1) {
      var state = param === void 0 ? _constants.SHOW_ALL : param, action = param1 === void 0 ? {} : param1;
      var type = action.type;
      switch (type) {
        case _constants.SET_VISIBILITY_FILTER:
          var visibilityFilter = action.visibilityFilter;
          state = visibilityFilter;
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
    var Component1 = _reaction.React.Component;
    var FilterLink = /* @__PURE__ */ function(Component) {
      _inherits(FilterLink2, Component);
      function FilterLink2() {
        _classCallCheck(this, FilterLink2);
        return _possibleConstructorReturn(this, _getPrototypeOf(FilterLink2).apply(this, arguments));
      }
      _createClass(FilterLink2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var _context = this.context, store = _context.store;
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
            var _context = this.context, store = _context.store, state = store.getState(), visibilityFilter1 = state.visibilityFilter, _props = this.props, children = _props.children, filter = _props.filter, active = filter === visibilityFilter1;
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
    }(Component1);
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
    var Component1 = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component) {
      _inherits(TodoListItems2, Component);
      function TodoListItems2() {
        _classCallCheck(this, TodoListItems2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems2).apply(this, arguments));
      }
      _createClass(TodoListItems2, [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            var _this = this;
            var _context = this.context, store = _context.store;
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
            var _context = this.context, store = _context.store, state = store.getState(), todos = state.todos, visibilityFilter = state.visibilityFilter, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map(function(visibleTodo) {
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
    }(Component1);
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
    var Component1 = _reaction.React.Component;
    var Provider = /* @__PURE__ */ function(Component) {
      _inherits(Provider2, Component);
      function Provider2() {
        _classCallCheck(this, Provider2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Provider2).apply(this, arguments));
      }
      _createClass(Provider2, [
        {
          key: "getChildContext",
          value: function getChildContext(context) {
            var _props = this.props, store = _props.store, childContext = {
              store
            };
            return childContext;
          }
        },
        {
          key: "render",
          value: function render() {
            var _props = this.props, children = _props.children;
            return children;
          }
        }
      ]);
      return Provider2;
    }(Component1);
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
    exports.EMPTY_STRING = exports.ERROR = exports.UTF8 = exports.ACCEPT = exports.CTRL_C = exports.CONTENT_TYPE = void 0;
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
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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
    function splice(array1, start, param, param1) {
      var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
      var args = [
        start,
        deleteCount
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element, test) {
      var start;
      var found = array.some(function(element2, index) {
        var passed = test(element2, index);
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
    function patch(array, element, test) {
      var found = array.some(function(element2, index) {
        var passed = test(element2, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
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
    exports.CARRIAGE_RETURN_CHARACTER = exports.BACKSPACE_CHARACTER = exports.LINE_FEED_CHARACTER = exports.ETX_CHARACTER = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = void 0;
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
    exports.queryStringFromParameters = queryStringFromParameters;
    exports.urlFromHostURIAndParameters = urlFromHostURIAndParameters;
    exports.default = void 0;
    var _array = require_array2();
    var _constants = require_constants3();
    var _characters = require_characters();
    function overwrite(headers, name2, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name2.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
          headers[ownPropertyName] = value;
          return true;
        }
      });
      if (!overwritten) {
        headers[name2] = value;
      }
    }
    function underwrite(headers, name2, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name2.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
      }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
      if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name2] = value;
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
    function queryStringFromParameters(parameters) {
      var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString2, name2, index) {
        var value = parameters[name2], encodedName = encodeURIComponent(name2), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString2 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString2;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndParameters(host, uri, parameters) {
      var queryString = queryStringFromParameters(parameters), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromParameters,
      urlFromHostURIAndParameters
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
    function whilst(callback, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = callback(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(callbacks, done, context) {
      var length = callbacks.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, callback = callbacks[index];
          callback(next, done, context, index);
        }
      }
      next();
    }
    function eventually(callbacks, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = callbacks.length;
      var count = 0;
      callbacks.forEach(function(callback, index) {
        callback(next, done, context, index);
      });
    }
    function repeatedly(callback, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        callback(next, done, context, index);
      }
    }
    function forwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
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
    function get(host, uri, parameters, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.GET_METHOD, body = null;
      underwriteAccept(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function post(host, uri, parameters, body, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _methods.POST_METHOD;
      underwriteAccept(headers);
      underwriteContentType(headers);
      request(host, uri, parameters, method, body, headers, callback);
    }
    function request(host, uri, parameters, method, body, headers, callback) {
      var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = body, jsonString = JSON.stringify(json);
        body = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
          var body2 = responseText;
          if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
            try {
              var jsonString2 = body2, json2 = JSON.parse(jsonString2);
              body2 = json2;
            } catch (error) {
              body2 = null;
            }
            callback(body2, status);
          }
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
      }
      body !== null ? xmlHttpRequest.send(body) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAccept(headers) {
      var name2 = _constants.ACCEPT, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name2, value);
    }
    function underwriteContentType(headers) {
      var name2 = _constants.CONTENT_TYPE, value = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      (0, _http).underwrite(headers, name2, value);
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
    function addTodo(param) {
      var action = param === void 0 ? {} : param;
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
    function setVisibilityFilter(param) {
      var action = param === void 0 ? {} : param;
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
    var Component1 = _reaction.React.Component;
    var TodoListItem = /* @__PURE__ */ function(Component) {
      _inherits(TodoListItem2, Component);
      function TodoListItem2() {
        _classCallCheck(this, TodoListItem2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItem2).apply(this, arguments));
      }
      _createClass(TodoListItem2, [
        {
          key: "render",
          value: function render() {
            var _this = this;
            var _props = this.props, text = _props.text, className = "";
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
    }(Component1);
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
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
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
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
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
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
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
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Component1 = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component) {
      _inherits(TodoListItems2, Component);
      function TodoListItems2() {
        _classCallCheck(this, TodoListItems2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoListItems2).apply(this, arguments));
      }
      _createClass(TodoListItems2, [
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
    }(Component1);
    _defineProperty(TodoListItems, "mixins", [
      updateHandler
    ]);
    exports.default = TodoListItems;
    function updateHandler(update) {
      if (update) {
        var addTodo = update.addTodo;
        if (addTodo) {
          this.forceUpdate(update);
        }
      }
    }
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
    var Component1 = _reaction.React.Component;
    var TodoApp = /* @__PURE__ */ function(Component) {
      _inherits(TodoApp2, Component);
      function TodoApp2() {
        _classCallCheck(this, TodoApp2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TodoApp2).apply(this, arguments));
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
    }(Component1);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvcmVhY3RDbGFzcy5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvbWl4aW5zL3JlYWN0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL2VsZW1lbnQvcmVhY3QuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9lbGVtZW50L3JlYWN0L2NsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvZWxlbWVudC9yZWFjdC9mdW5jdGlvbi5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L3N2Zy5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvcmVhY3RET00uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1eC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci90b2Rvcy5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9yZWR1Y2VyL3Zpc2liaWxpdHlGaWx0ZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvZm9vdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0SXRlbXMuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NoYXJhY3RlcnMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2h0dHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FzeW5jaHJvbm91cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9tZXRob2RzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYWpheC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9icm93c2VyLmpzIiwgInNyYy9jb21iaW5lUnVsZXMuanMiLCAic3JjL2NyZWF0ZURpc3BhdGNoZXIuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL3J1bGUvYWRkVG9kby5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9kaXNwYXRjaGVyLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvZmlsdGVyTGluay5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3QuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGdldEZpcnN0Q2hpbGQoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENvbXBvbmVudCB7XG5cblxuXG5cblxuXG5cblxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuXG5cblxuXG5cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0U3R5bGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldFN0eWxlKG5hbWUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCByZWFjdEVsZW1lbnRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9yZWFjdEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG5cblxuXG5cbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTU5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgVmlydHVhbERPTU5vZGUocHJvcHMsIGRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHZpcnR1YWxET01Ob2RlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmVudERPTUVsZW1lbnQocGFyZW50KSB7XG4gIGxldCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudERPTUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSB7XG4gIGNvbnN0IHJlZmVyZW5jZURPTUVsZW1lbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi4vdmlydHVhbERPTU5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTVRleHRFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEJPT0xFQU4sIENMQVNTX05BTUUsIEhUTUxfRk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykgeyByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeSgoY2xhc3NOYW1lKSA9PiB0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7IH1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NTm9kZSBmcm9tIFwiLi4vdmlydHVhbERPTU5vZGVcIjtcblxuaW1wb3J0IHZpcnR1YWxET01FbGVtZW50TWl4aW5zIGZyb20gXCIuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnRcIjtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcHMoKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wc1tuYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNBdHRyaWJ1dGVOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJyZWZcIikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcblx0fVxufVxuXG5PYmplY3QuYXNzaWduKFZpcnR1YWxET01FbGVtZW50LnByb3RvdHlwZSwgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBWaXJ0dWFsRE9NRWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkXCIsIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbERPTUhUTUxFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01TVkdFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgUmVhY3RDbGFzcyBmcm9tIFwiLi9yZWFjdENsYXNzXCI7XG5pbXBvcnQgUmVhY3RDb21wb25lbnQgZnJvbSBcIi4vcmVhY3RDb21wb25lbnRcIjtcbmltcG9ydCBSZWFjdENsYXNzRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3JlYWN0L2NsYXNzXCI7XG5pbXBvcnQgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9mdW5jdGlvblwiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3JlYWN0L2NvbXBvbmVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01UZXh0RWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50XCI7XG5pbXBvcnQgVmlydHVhbERPTUhUTUxFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgVmlydHVhbERPTVNWR0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50L3N2Z1wiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTVNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnQgLy8vXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50OyAgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZsYXR0ZW4ocmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG5cbiAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICByZW1haW5pbmdBcmd1bWVudHMuZm9yRWFjaCgoY2hpbGRBcmd1bWVudCkgPT4ge1xuICAgIGxldCBjaGlsZDtcblxuICAgIGlmIChjaGlsZEFyZ3VtZW50KSB7ICAvLy9cbiAgICAgIGlmIChpc1N1YmNsYXNzT2YoY2hpbGRBcmd1bWVudC5jb25zdHJ1Y3RvciwgRWxlbWVudCkpIHsgLy8vXG4gICAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q29tcG9uZW50O1xuXG4gIHJlYWN0Q29tcG9uZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHJlYWN0Q29tcG9uZW50KTsgLy8vXG5cbiAgaWYgKHJlYWN0Q29tcG9uZW50ICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKHJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTU5vZGUgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IFZpcnR1YWxET01Ob2RlLmZyb21ET01FbGVtZW50KHBhcmVudERPTUVsZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cbiIsICIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdERPTSB9IGZyb20gXCIuL3JlYWN0RE9NXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9yZSA9IChyZWR1Y2VyKSA9PiB7XG4gIGxldCBzdGF0ZSxcbiAgICAgIGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgdW5zdWJzY3JpYmUobGlzdGVuZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgcmV0dXJuIChsaXN0ZW5lciAhPT0gbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGlzcGF0Y2goKTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBcIkFERF9UT0RPXCI7XG5leHBvcnQgY29uc3QgU0hPV19BTEwgPSBcIlNIT1dfQUxMXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ1RJVkUgPSBcIlNIT1dfQUNUSVZFXCI7XG5leHBvcnQgY29uc3QgVE9HR0xFX1RPRE8gPSBcIlRPR0dMRV9UT0RPXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01QTEVURUQgPSBcIlNIT1dfQ09NUExFVEVEXCI7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIHRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICBsZXQgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgIHRvZG8uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvO1xuICB9KTtcblxuICByZXR1cm4gdG9kb3M7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpc2liaWxpdHlGaWx0ZXIoc3RhdGUgPSBTSE9XX0FMTCwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHN0YXRlID0gdmlzaWJpbGl0eUZpbHRlcjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiLi9yZWR1eFwiO1xuXG5pbXBvcnQgdG9kb3MgZnJvbSBcIi4vcmVkdWNlci90b2Rvc1wiO1xuaW1wb3J0IHZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aXZlID0gKGZpbHRlciA9PT0gdmlzaWJpbGl0eUZpbHRlcik7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxzcGFuPntjaGlsZHJlbn08L3NwYW4+XG5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGaWx0ZXJMaW5rIGZyb20gXCIuL2ZpbHRlckxpbmtcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxwPlxuICAgIHtcIlNob3c6IFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBBZGQgdG9kb1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG87XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vbmVcIixcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb25cbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0SXRlbTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIgfSA9IHN0YXRlLFxuICAgICAgICAgIHZpc2libGVUb2RvcyA9IGdldFZpc2libGVUb2Rvcyh0b2RvcywgdmlzaWJpbGl0eUZpbHRlciksXG4gICAgICAgICAgaXRlbXMgPSB2aXNpYmxlVG9kb3MubWFwKCh2aXNpYmxlVG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgdGV4dCwgY29tcGxldGVkIH0gPSB2aXNpYmxlVG9kbztcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXtjb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tIYW5kbGVyPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBUT0dHTEVfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgdmlzaWJpbGl0eUZpbHRlcikgPT4ge1xuICBsZXQgdmlzaWJsZVRvZG9zO1xuXG4gIHN3aXRjaCAodmlzaWJpbGl0eUZpbHRlcikge1xuICAgIGNhc2UgU0hPV19BTEw6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2RvcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0FDVElWRTpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbyxcbiAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNIT1dfQ09NUExFVEVEOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVUb2Rvcztcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvTGlzdEl0ZW1zIGZyb20gXCIuL3RvZG9MaXN0SXRlbXNcIjtcblxuY29uc3QgVG9kb0xpc3QgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHVsPlxuICAgIDxUb2RvTGlzdEl0ZW1zIC8+XG4gIDwvdWw+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgQWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcblxuY29uc3QgVG9kb0FwcCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8ZGl2PlxuICAgIDxBZGRUb2RvIC8+XG4gICAgPFRvZG9MaXN0IC8+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHtcbiAgICAgICAgICAgIHN0b3JlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBjaGlsZENvbnRleHQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1eFwiO1xuXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1eEFwcC9yZWR1Y2VyXCI7XG5pbXBvcnQgVG9kb0FwcCBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1eEFwcCgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcblxuICApO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVRGOCA9IFwidXRmOFwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQyA9IFwiXkNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFUFQgPSBcImFjY2VwdFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFID0gXCJjb250ZW50LXR5cGVcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTt9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs0XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlmdGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoaXJkTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gM107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY29uZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhaWwoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZShhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbnQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheTEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheTIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFtlbGVtZW50T3JBcnJheTJdO1xuICBcbiAgcHVzaChhcnJheTEsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcihhcnJheSkge1xuICBjb25zdCBzdGFydCA9IDA7XG4gIFxuICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoYXJyYXkxLCBhcnJheTIpIHtcbiAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGFycmF5Mi5sZW5ndGg7ICAvLy9cbiAgXG4gIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCwgYXJyYXkyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5hcnJheTJdLFxuICAgICAgICBkZWxldGVkSXRlbXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEl0ZW1zQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlKGFycmF5LCBlbGVtZW50LCB0ZXN0KSB7XG4gIGxldCBzdGFydDtcbiAgXG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGZpbHRlcmVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZmlsdGVyZWRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmb3J3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCBwcnVuZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICBcbiAgYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBwcnVuZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIHBydW5lZEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VwYXJhdGUoYXJyYXksIGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7XG5cbiAgYmFja3dhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpcnN0LFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICBmb3VydGgsXG4gIGZpZnRoLFxuICBmaWZ0aExhc3QsXG4gIGZvdXJ0aExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgc2Vjb25kTGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRVRYX0NIQVJBQ1RFUiA9IFwiXFx1MDAwM1wiO1xuZXhwb3J0IGNvbnN0IENPTE9OX0NIQVJBQ1RFUiA9IFwiOlwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMSU5FX0ZFRURfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIgPSBcIlxcclwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT0xPTl9DSEFSQUNURVIsIEFNUEVSU0FORF9DSEFSQUNURVIgfSBmcm9tIFwiLi4vY2hhcmFjdGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IG93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSxcbiAgICAgICAgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgb3ZlcndyaXR0ZW4gPSBvd25Qcm9wZXJ0eU5hbWVzLnNvbWUoKG93blByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9IG93blByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgaGVhZGVyc1tvd25Qcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgaWYgKCFvdmVyd3JpdHRlbikge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBvd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksXG4gICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMgPSBvd25Qcm9wZXJ0eU5hbWVzLm1hcCgob3duUHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lID0gb3duUHJvcGVydHlOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICByZXR1cm4gbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgbG93ZXJDYXNlT3duUHJvcGVydHlOYW1lc0luY2x1ZGVzTG93ZXJjYXNlTmFtZSA9IGxvd2VyQ2FzZU93blByb3BlcnR5TmFtZXMuaW5jbHVkZXMobG93ZXJjYXNlTmFtZSk7XG5cbiAgaWYgKCFsb3dlckNhc2VPd25Qcm9wZXJ0eU5hbWVzSW5jbHVkZXNMb3dlcmNhc2VOYW1lKSB7XG4gICAgaGVhZGVyc1tuYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3J0RnJvbUhvc3QoaG9zdCkge1xuICBsZXQgcG9ydDtcblxuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW15cXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGluZGV4ID0gc2Vjb25kTWF0Y2guaW5kZXhPZihDT0xPTl9DSEFSQUNURVIpO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjb25zdCBzZWN1cmUgPSBzZWN1cmVGcm9tSG9zdChob3N0KTtcblxuICAgIHBvcnQgPSBzZWN1cmUgPyA0NDMgOiA4MDsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCArIDEsXG4gICAgICAgICAgcG9ydFN0cmluZyA9IHNlY29uZE1hdGNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgICBwb3J0ID0gTnVtYmVyKHBvcnRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHBvcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWN1cmVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IHNlY3VyZSA9IC9eaHR0cHM6XFwvXFwvLy50ZXN0KGhvc3QpO1xuXG4gIHJldHVybiBzZWN1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0bmFtZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteOlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaG9zdG5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG5cbiAgcmV0dXJuIGhvc3RuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyksXG4gICAgICAgIG5hbWVzTGVuZ3RoID0gbmFtZXMubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBuYW1lc0xlbmd0aCAtIDEsXG4gICAgICAgIHF1ZXJ5U3RyaW5nID0gbmFtZXMucmVkdWNlKChxdWVyeVN0cmluZywgbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtZXRlcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdGcm9tUGFyYW1ldGVycyhwYXJhbWV0ZXJzKSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21QYXJhbWV0ZXJzLFxuICB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnNcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gLTE7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgIHRlcm1pbmF0ZSA9IGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIGNhbGxiYWNrLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBjYWxsYmFjayhlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW5jZShjYWxsYmFja3MsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBjYWxsYmFja3MubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2tzW2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkoY2FsbGJhY2tzLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2FsbGJhY2tzLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2ssIGluZGV4KSA9PiB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KGNhbGxiYWNrLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjYWxsYmFjayhuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgY2FsbGJhY2soZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2ssIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cclxuXHJcbiAgbGV0IGNvdW50ID0gbGVuZ3RoO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQtLTtcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IC0xKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cclxuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcclxuXHJcbiAgICAgIGNhbGxiYWNrKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUNDRVBULCBDT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHRVRfTUVUSE9ELCBQT1NUX01FVEhPRCB9IGZyb20gXCIuLi9tZXRob2RzXCI7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUGFyYW1ldGVycyB9IGZyb20gXCIuLi91dGlsaXRpZXMvaHR0cFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGJvZHkgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycyk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIG1ldGhvZCwgYm9keSwgaGVhZGVycywgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHBhcmFtZXRlcnMsIGJvZHksIGhlYWRlcnMsIGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRDtcblxuICB1bmRlcndyaXRlQWNjZXB0KGhlYWRlcnMpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZShoZWFkZXJzKTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcGFyYW1ldGVycywgbWV0aG9kLCBib2R5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFBhcmFtZXRlcnMoaG9zdCwgdXJpLCBwYXJhbWV0ZXJzKSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVdIHx8IG51bGwsXG4gICAgICAgIHhtbEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKGNvbnRlbnRUeXBlID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgIGNvbnN0IGpzb24gPSBib2R5LCAgLy8vXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gICAgYm9keSA9IGpzb25TdHJpbmc7ICAvLy9cbiAgfVxuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIHN0YXR1cywgcmVzcG9uc2VUZXh0IH0gPSB4bWxIdHRwUmVxdWVzdDtcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBib2R5ID0gcmVzcG9uc2VUZXh0O1xuXG4gICAgICBpZiAoYWNjZXB0ID09PSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSBib2R5LCAgLy8vXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICAgICAgICBib2R5ID0ganNvbjsgIC8vL1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGJvZHkgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soYm9keSwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBULCBhY2NlcHQpO1xuICB9XG5cbiAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsKSB7XG4gICAgeG1sSHR0cFJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihDT05URU5UX1RZUEUsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChib2R5ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChib2R5KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHQoaGVhZGVycykge1xuICBjb25zdCBuYW1lID0gQUNDRVBULCAgLy8vXG4gICAgICAgIHZhbHVlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGUoaGVhZGVycykge1xuICBjb25zdCBuYW1lID0gQ09OVEVOVF9UWVBFLCAgLy8vXG4gICAgICAgIHZhbHVlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhdGhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvcGF0aFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBodHRwVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2h0dHBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FzeW5jaHJvbm91c1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFqYXhVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYWpheFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb21iaW5lUnVsZXMgPSAocnVsZXMpID0+IHtcbiAgcmV0dXJuIChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocnVsZXMpLFxuICAgICAgICAgIHVwZGF0ZSA9IGtleXMucmVkdWNlKCh1cGRhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW2tleV07XG5cbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gcnVsZShhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUnVsZXM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNyZWF0ZURpc3BhdGNoZXIgPSAocnVsZSkgPT4ge1xuICBsZXQgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlID0gcnVsZShhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCB7IHJ1bGVOYW1lcyB9ID0gbGlzdGVuZXI7XG5cbiAgICAgIGlmICgocnVsZU5hbWVzLmxlbmd0aCA9PT0gMCkgfHwgcnVsZU5hbWVzLnNvbWUoKHJ1bGVOYW1lKSA9PiAodXBkYXRlW3J1bGVOYW1lXSAhPT0gdW5kZWZpbmVkKSkpIHtcbiAgICAgICAgbGlzdGVuZXIodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIsIC4uLnJ1bGVOYW1lcykgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24obGlzdGVuZXIsIHtcbiAgICAgIHJ1bGVOYW1lc1xuICAgIH0pO1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB1bnN1YnNjcmliZShsaXN0ZW5lcikpO1xuICB9O1xuXG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKGwpID0+IHtcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4gKGxpc3RlbmVyICE9PSBsKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpc3BhdGNoZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29tYmluZVJ1bGVzIH0gZnJvbSBcIi4vY29tYmluZVJ1bGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZURpc3BhdGNoZXIgfSBmcm9tIFwiLi9jcmVhdGVEaXNwYXRjaGVyXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBRERfVE9ETyA9IFwiQUREX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FMTCA9IFwic2hvdy1hbGxcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0FDVElWRSA9IFwic2hvdy1hY3RpdmVcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0NPTVBMRVRFRCA9IFwic2hvdy1jb21wbGV0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRVRfVklTSUJJTElUWV9GSUxURVIgPSBcIlNFVF9WSVNJQklMSVRZX0ZJTFRFUlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kbyhhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE8gOlxuICAgICAgY29uc3QgeyB0ZXh0IH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdGV4dFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5RmlsdGVyKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTRVRfVklTSUJJTElUWV9GSUxURVIgOlxuICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBhY3Rpb247XG5cbiAgICAgIHVwZGF0ZSA9IHtcbiAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJ1bGVzIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9ydWxlL2FkZFRvZG9cIjtcbmltcG9ydCBzZXRWaXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCBydWxlID0gY29tYmluZVJ1bGVzKHtcbiAgYWRkVG9kbyxcbiAgc2V0VmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJ1bGU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNyZWF0ZURpc3BhdGNoZXIgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBydWxlIGZyb20gXCIuL3J1bGVcIjtcblxuY29uc3QgZGlzcGF0Y2hlciA9IGNyZWF0ZURpc3BhdGNoZXIocnVsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgRmlsdGVyTGluayA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBmaWx0ZXIgfSA9IHByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBgJHtmaWx0ZXJ9IGZpbHRlcmAsXG4gICAgICAgIGZpcnN0Q2hpbGQgPSBmaXJzdChjaGlsZHJlbiksXG4gICAgICAgIHRleHQgPSBmaXJzdENoaWxkLmdldFRleHQoKTtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9hPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyTGluaztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHA+XG4gICAge1wiU2hvdzogXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gIDwvcD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5sZXQgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG87XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJcIjtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICB1cGRhdGVIYW5kbGVyXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlLFxuICAgICAgICAgICAgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICBjaGlsZHJlbiA9IFtcbiAgICAgICAgLi4uY2hpbGRyZW4sXG5cbiAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlSGFuZGxlcih1cGRhdGUpIHtcbiAgaWYgKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgaWYgKGFkZFRvZG8pIHtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICB9XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbXMgZnJvbSBcIi4vdG9kb0xpc3RJdGVtc1wiO1xuXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8dWw+XG4gICAgPFRvZG9MaXN0SXRlbXMgLz5cbiAgPC91bD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuXG5jb25zdCBpbmZlcmVuY2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFRvZG9BcHAgLz5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmZlcmVuY2VBcHA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZWR1eEFwcCBmcm9tIFwiLi9leGFtcGxlL3JlZHV4QXBwXCI7XG5pbXBvcnQgaW5mZXJlbmNlQXBwIGZyb20gXCIuL2V4YW1wbGUvaW5mZXJlbmNlQXBwXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIHJlZHV4QXBwLFxuICBpbmZlcmVuY2VBcHBcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7OztZQUVnQixRQUFBO1lBRUEsVUFBQTtZQVFBLFlBQUE7WUFRQSxZQUFBOzs7Ozs7OzttQkFsQk0sT0FBTztBQUFFLGFBQU8sTUFBTTs7cUJBRXBCLFFBQU87QUFDN0IsYUFBTyxPQUFNLE9BQU8sU0FBQyxPQUFPLFNBQVk7QUFDdEMsZ0JBQVEsTUFBTSxPQUFPO0FBRXJCLGVBQU87U0FDTjs7dUJBR3FCLGdCQUFnQjtBQUN4Qyx1QkFBaUIsa0JBQWtCO0FBRW5DLGFBQVEsWUFBQSxnQkFBMEIsU0FDeEIsaUJBQ0U7UUFBQzs7O3VCQUdXLFNBQVMsT0FBTztBQUN4QyxVQUFJLFlBQVksTUFBTTtBQUNwQixlQUFPOztBQUdULFVBQU0sUUFBUSxRQUFRLFNBQVM7QUFFL0IsYUFBTyxNQUFNLE1BQU0sUUFBUTs7cUJBR1osU0FBUyxPQUFPO0FBQy9CLFVBQUksUUFBUTtBQUVaLFlBQU0sS0FBSyxTQUFDLGdCQUFnQixxQkFBd0I7QUFDbEQsWUFBSSxtQkFBbUIsU0FBUztBQUM5QixrQkFBUTtBQUVSLGlCQUFPOzs7QUFJWCxhQUFPOzs7OztBQ3pDVDs7Ozs7O0FBRXNCLFFBQUEsU0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXBCLFVBQU4sMkJBQVE7d0JBQ1QsT0FB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

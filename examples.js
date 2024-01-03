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
    var ReactClass = /* @__PURE__ */ function() {
      function ReactClass2(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        _class_call_check(this, ReactClass2);
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
      _create_class(ReactClass2, [
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
          key: "childContextSet",
          value: function childContextSet(childContext) {
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
    var VirtualDOMElement = /* @__PURE__ */ function() {
      function VirtualDOMElement2(props) {
        _class_call_check(this, VirtualDOMElement2);
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      _create_class(VirtualDOMElement2, [
        {
          key: "getProps",
          value: function getProps() {
            return this.props;
          }
        },
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
    function on(eventType, handler) {
      var firstChild = this.getFirstChild();
      return firstChild.on(eventType, handler);
    }
    function off(eventType, handler) {
      var firstChild = this.getFirstChild();
      return firstChild.off(eventType, handler);
    }
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
      on,
      off,
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
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
    var _reactElement = /* @__PURE__ */ _interop_require_default(require_reactElement());
    var _array = require_array();
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
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function get(target2, property2, receiver2) {
          var base = _super_prop_base(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2 || target2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
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
    function _super_prop_base(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _get_prototype_of(object);
        if (object === null)
          break;
      }
      return object;
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
    var ReactElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ReactElement2, VirtualDOMElement);
      var _super = _create_super(ReactElement2);
      function ReactElement2(props) {
        _class_call_check(this, ReactElement2);
        var _this;
        _this = _super.call(this, props);
        _this.state = null;
        _this.context = null;
        return _this;
      }
      _create_class(ReactElement2, [
        {
          key: "getState",
          value: function getState() {
            return this.state;
          }
        },
        {
          key: "getContext",
          value: function getContext() {
            return this.context;
          }
        },
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return null;
          }
        },
        {
          key: "getChildReference",
          value: function getChildReference() {
            var parent = this.getParent(), child = this;
            return reference(parent, child);
          }
        },
        {
          key: "setState",
          value: function setState(state) {
            this.state = state;
            this.redraw();
          }
        },
        {
          key: "updateState",
          value: function updateState(state) {
            var oldState = this.state, newState = state;
            this.state = Object.assign(oldState, newState);
            this.redraw();
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState(initialState) {
            this.state = initialState;
          }
        },
        {
          key: "forceUpdate",
          value: function forceUpdate(update) {
            this.redraw(update);
          }
        },
        {
          key: "mount",
          value: function mount(parent, reference2, context) {
            var _this = this;
            this.context = context;
            var childContext = this.getChildContext(context) || null;
            var update = null, children = (0, _array.guarantee)(this.render(update, this));
            _get(_get_prototype_of(ReactElement2.prototype), "mount", this).call(this, parent, children);
            children.forEach(function(child) {
              var childParent = _this, childReference = reference2;
              child.mount(childParent, childReference, childContext);
            });
            this.childContextSet(childContext);
            this.componentDidMount();
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.componentWillUnmount();
            var children = this.getChildren();
            children.forEach(function(child) {
              child.unmount();
            });
            _get(_get_prototype_of(ReactElement2.prototype), "unmount", this).call(this);
          }
        },
        {
          key: "redraw",
          value: function redraw(update) {
            var _this = this;
            var childContext = this.getChildContext(this.context) || null;
            this.children.forEach(function(child) {
              child.unmount();
            });
            this.children = (0, _array.guarantee)(this.render(update, this));
            this.children.forEach(function(child) {
              var childParent = _this, childReference = _this.getChildReference();
              child.mount(childParent, childReference, childContext);
            });
            this.childContextSet(childContext);
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
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
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
    var ReactComponent = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactComponent2, ReactElement);
      var _super = _create_super(ReactComponent2);
      function ReactComponent2(props) {
        _class_call_check(this, ReactComponent2);
        var _this;
        _this = _super.call(this, props);
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _create_class(ReactComponent2, [
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
          key: "childContextSet",
          value: function childContextSet(childContext) {
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
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
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
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function get(target2, property2, receiver2) {
          var base = _super_prop_base(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2 || target2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
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
    function _super_prop_base(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _get_prototype_of(object);
        if (object === null)
          break;
      }
      return object;
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
    var ContainerElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ContainerElement2, VirtualDOMElement);
      var _super = _create_super(ContainerElement2);
      function ContainerElement2(props, domElement) {
        _class_call_check(this, ContainerElement2);
        var _this;
        _this = _super.call(this, props);
        _this.domElement = domElement;
        return _this;
      }
      _create_class(ContainerElement2, [
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
            _get(_get_prototype_of(ContainerElement2.prototype), "mount", this).call(this, parent, children);
            parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
            return this.domElement;
          }
        },
        {
          key: "unmount",
          value: function unmount() {
            this.domElement.parentElement.removeChild(this.domElement);
            _get(_get_prototype_of(ContainerElement2.prototype), "unmount", this).call(this);
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
      BOOLEAN: function() {
        return BOOLEAN;
      },
      CLASS: function() {
        return CLASS;
      },
      CLASS_NAME: function() {
        return CLASS_NAME;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      FOR: function() {
        return FOR;
      },
      FUNCTION: function() {
        return FUNCTION;
      },
      HTML_FOR: function() {
        return HTML_FOR;
      },
      HTTP_WWW_W3_ORG_2000_SVG: function() {
        return HTTP_WWW_W3_ORG_2000_SVG;
      },
      OBJECT: function() {
        return OBJECT;
      },
      REF: function() {
        return REF;
      },
      STRING: function() {
        return STRING;
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
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function on(eventType, handler) {
      this.domElement.addEventListener(eventType, handler);
    }
    function off(eventType, handler) {
      this.domElement.removeEventListener(eventType, handler);
    }
    function setAttribute(name, value) {
      var _this = this;
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          _this.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN) {
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
        if (_this.hasClass(className)) {
          return true;
        }
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
      on,
      off,
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
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    var _containerElement = /* @__PURE__ */ _interop_require_default(require_containerElement());
    var _constants = require_constants();
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
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function get(target2, property2, receiver2) {
          var base = _super_prop_base(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2 || target2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
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
    function _super_prop_base(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _get_prototype_of(object);
        if (object === null)
          break;
      }
      return object;
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
    var Element = /* @__PURE__ */ function(ContainerElement) {
      _inherits(Element2, ContainerElement);
      var _super = _create_super(Element2);
      function Element2() {
        _class_call_check(this, Element2);
        return _super.apply(this, arguments);
      }
      _create_class(Element2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_get_prototype_of(Element2.prototype), "mount", this).call(this, parent, reference);
            var childParent = this, childReference = null, childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              child.mount(childParent, childReference, childContext);
            });
            this.applyProps();
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            var childContext = context, children = this.getChildren();
            children.forEach(function(child) {
              child.unmount(childContext);
            });
            _get(_get_prototype_of(Element2.prototype), "unmount", this).call(this);
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
      isHTMLAttributeName: function() {
        return isHTMLAttributeName;
      },
      isSVGAttributeName: function() {
        return isSVGAttributeName;
      },
      isSVGTagName: function() {
        return isSVGTagName;
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
    var _constants = require_constants();
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
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
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
    var SVGElement = /* @__PURE__ */ function(Element) {
      _inherits(SVGElement2, Element);
      var _super = _create_super(SVGElement2);
      function SVGElement2(tagName, props) {
        _class_call_check(this, SVGElement2);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _super.call(this, props, domElement);
      }
      _create_class(SVGElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name.isSVGAttributeName)(name);
          }
        }
      ]);
      return SVGElement2;
    }(_wrap_native_super(_element.default));
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
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
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
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
    var HTMLElement = /* @__PURE__ */ function(Element) {
      _inherits(HTMLElement2, Element);
      var _super = _create_super(HTMLElement2);
      function HTMLElement2(tagName, props) {
        _class_call_check(this, HTMLElement2);
        var domElement = document.createElement(tagName);
        return _super.call(this, props, domElement);
      }
      _create_class(HTMLElement2, [
        {
          key: "isAttributeName",
          value: function isAttributeName(name) {
            return (0, _name.isHTMLAttributeName)(name);
          }
        }
      ]);
      return HTMLElement2;
    }(_wrap_native_super(_element.default));
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
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
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
    var ReactClassElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactClassElement2, ReactElement);
      var _super = _create_super(ReactClassElement2);
      function ReactClassElement2(reactClass, props) {
        _class_call_check(this, ReactClassElement2);
        var _this;
        _this = _super.call(this, props);
        _this.reactClass = reactClass;
        var initialState = _this.getInitialState();
        _this.setInitialState(initialState);
        return _this;
      }
      _create_class(ReactClassElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactClass.render.call(this, update, this);
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
          key: "childContextSet",
          value: function childContextSet(childContext) {
            this.reactClass.childContextSet.call(this, childContext);
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
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
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
    var ReactFunctionElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactFunctionElement2, ReactElement);
      var _super = _create_super(ReactFunctionElement2);
      function ReactFunctionElement2(reactFunction, props) {
        _class_call_check(this, ReactFunctionElement2);
        var _this;
        _this = _super.call(this, props);
        _this.reactFunction = reactFunction;
        return _this;
      }
      _create_class(ReactFunctionElement2, [
        {
          key: "render",
          value: function render(update) {
            return this.reactFunction(this.props, this.context, update, this);
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
          key: "childContextSet",
          value: function childContextSet(childContext) {
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
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
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
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function get(target2, property2, receiver2) {
          var base = _super_prop_base(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2 || target2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
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
    function _super_prop_base(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _get_prototype_of(object);
        if (object === null)
          break;
      }
      return object;
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
    var TextElement = /* @__PURE__ */ function(ContainerElement) {
      _inherits(TextElement2, ContainerElement);
      var _super = _create_super(TextElement2);
      function TextElement2(text) {
        _class_call_check(this, TextElement2);
        var domElement = document.createTextNode(text), children = [], props = {
          children
        };
        return _super.call(this, props, domElement);
      }
      _create_class(TextElement2, [
        {
          key: "mount",
          value: function mount(parent, reference, context) {
            _get(_get_prototype_of(TextElement2.prototype), "mount", this).call(this, parent, reference);
          }
        },
        {
          key: "unmount",
          value: function unmount(context) {
            _get(_get_prototype_of(TextElement2.prototype), "unmount", this).call(this);
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
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
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
        if ((typeof child === "undefined" ? "undefined" : _type_of(child)) === _constants.STRING) {
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
    var _reactClass = /* @__PURE__ */ _interop_require_default(require_reactClass());
    var _reactComponent = /* @__PURE__ */ _interop_require_default(require_reactComponent());
    var _svg = /* @__PURE__ */ _interop_require_default(require_svg());
    var _html = /* @__PURE__ */ _interop_require_default(require_html());
    var _class = /* @__PURE__ */ _interop_require_default(require_class());
    var _function = /* @__PURE__ */ _interop_require_default(require_function());
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument) {
        children = sanitiseChildren(children);
        var props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.STRING) {
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
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
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
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactDOM = /* @__PURE__ */ function() {
      function ReactDOM2() {
        _class_call_check(this, ReactDOM2);
      }
      _create_class(ReactDOM2, null, [
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
    var _react = /* @__PURE__ */ _interop_require_default(require_react2());
    var _reactDOM = /* @__PURE__ */ _interop_require_default(require_reactDOM());
    function _interop_require_default(obj) {
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
      combineReducers: function() {
        return combineReducers;
      },
      createStore: function() {
        return createStore;
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
      SET_VISIBILITY_FILTER: function() {
        return SET_VISIBILITY_FILTER;
      },
      SHOW_ACTIVE: function() {
        return SHOW_ACTIVE;
      },
      SHOW_ALL: function() {
        return SHOW_ALL;
      },
      SHOW_COMPLETED: function() {
        return SHOW_COMPLETED;
      },
      TOGGLE_TODO: function() {
        return TOGGLE_TODO;
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
      DEBUG_LEVEL: function() {
        return DEBUG_LEVEL;
      },
      ERROR_LEVEL: function() {
        return ERROR_LEVEL;
      },
      FATAL_LEVEL: function() {
        return FATAL_LEVEL;
      },
      INFO_LEVEL: function() {
        return INFO_LEVEL;
      },
      TRACE_LEVEL: function() {
        return TRACE_LEVEL;
      },
      WARNING_LEVEL: function() {
        return WARNING_LEVEL;
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
      DELETE_METHOD: function() {
        return DELETE_METHOD;
      },
      GET_METHOD: function() {
        return GET_METHOD;
      },
      OPTIONS_METHOD: function() {
        return OPTIONS_METHOD;
      },
      PATCH_METHOD: function() {
        return PATCH_METHOD;
      },
      POST_METHOD: function() {
        return POST_METHOD;
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
      ACCEPT_HEADER: function() {
        return ACCEPT_HEADER;
      },
      ACCESS_CONTROL_ALLOW_HEADERS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      ACCESS_CONTROL_ALLOW_METHODS_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      ACCESS_CONTROL_ALLOW_ORIGIN_HEADER: function() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      ACCESS_CONTROL_REQUEST_METHOD_HEADER: function() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      AUTHORIZATION_HEADER: function() {
        return AUTHORIZATION_HEADER;
      },
      CACHE_CONTROL_HEADER: function() {
        return CACHE_CONTROL_HEADER;
      },
      CONTENT_DISPOSITION_HEADER: function() {
        return CONTENT_DISPOSITION_HEADER;
      },
      CONTENT_LENGTH_HEADER: function() {
        return CONTENT_LENGTH_HEADER;
      },
      CONTENT_TYPE_HEADER: function() {
        return CONTENT_TYPE_HEADER;
      },
      LOCATION_HEADER: function() {
        return LOCATION_HEADER;
      },
      PRAGMA_HEADER: function() {
        return PRAGMA_HEADER;
      },
      TRANSFER_ENCODING_HEADER: function() {
        return TRANSFER_ENCODING_HEADER;
      },
      USER_AGENT_HEADER: function() {
        return USER_AGENT_HEADER;
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
      ARROW_DOWN_KEY_CODE: function() {
        return ARROW_DOWN_KEY_CODE;
      },
      ARROW_LEFT_KEY_CODE: function() {
        return ARROW_LEFT_KEY_CODE;
      },
      ARROW_RIGHT_KEY_CODE: function() {
        return ARROW_RIGHT_KEY_CODE;
      },
      ARROW_UP_KEY_CODE: function() {
        return ARROW_UP_KEY_CODE;
      },
      BACKSPACE_KEY_CODE: function() {
        return BACKSPACE_KEY_CODE;
      },
      DELETE_KEY_CODE: function() {
        return DELETE_KEY_CODE;
      },
      ENTER_KEY_CODE: function() {
        return ENTER_KEY_CODE;
      },
      ESCAPE_KEY_CODE: function() {
        return ESCAPE_KEY_CODE;
      },
      SHIFT_KEY_CODE: function() {
        return SHIFT_KEY_CODE;
      },
      TAB_KEY_CODE: function() {
        return TAB_KEY_CODE;
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
      BASE64_ENCODING: function() {
        return BASE64_ENCODING;
      },
      UTF8_ENCODING: function() {
        return UTF8_ENCODING;
      },
      UTF_8_ENCODING: function() {
        return UTF_8_ENCODING;
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
      AMPERSAND_CHARACTER: function() {
        return AMPERSAND_CHARACTER;
      },
      BACKSPACE_CHARACTER: function() {
        return BACKSPACE_CHARACTER;
      },
      BACKTICK_DELIMITER: function() {
        return BACKTICK_DELIMITER;
      },
      BAR_CHARACTER: function() {
        return BAR_CHARACTER;
      },
      CARRIAGE_RETURN_CHARACTER: function() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      COLON_CHARACTER: function() {
        return COLON_CHARACTER;
      },
      COMMA_CHARACTER: function() {
        return COMMA_CHARACTER;
      },
      CTRL_C_CHARACTER: function() {
        return CTRL_C_CHARACTER;
      },
      DASH_CHARACTER: function() {
        return DASH_CHARACTER;
      },
      DOWN_CHARACTER: function() {
        return DOWN_CHARACTER;
      },
      ETX_CHARACTER: function() {
        return ETX_CHARACTER;
      },
      EXCLAMATION_MARK_CHARACTER: function() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      FORWARD_SLASH_CHARACTER: function() {
        return FORWARD_SLASH_CHARACTER;
      },
      GREATER_THAN_CHARACTER: function() {
        return GREATER_THAN_CHARACTER;
      },
      LEFT_CHARACTER: function() {
        return LEFT_CHARACTER;
      },
      LESS_THAN_CHARACTER: function() {
        return LESS_THAN_CHARACTER;
      },
      NEW_LINE_CHARACTER: function() {
        return NEW_LINE_CHARACTER;
      },
      PERIOD_CHARACTER: function() {
        return PERIOD_CHARACTER;
      },
      RIGHT_CHARACTER: function() {
        return RIGHT_CHARACTER;
      },
      SPACE_CHARACTER: function() {
        return SPACE_CHARACTER;
      },
      UP_CHARACTER: function() {
        return UP_CHARACTER;
      },
      WILDCARD_CHARACTER: function() {
        return WILDCARD_CHARACTER;
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
      BAD_GATEWAY_502_STATUS_CODE: function() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      BAD_REQUEST_400_STATUS_CODE: function() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      CREATED_201_STATUS_CODE: function() {
        return CREATED_201_STATUS_CODE;
      },
      FORBIDDEN_403_STATUS_CODE: function() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      FOUND_302_STATUS_CODE: function() {
        return FOUND_302_STATUS_CODE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_CODE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      NOT_FOUND_404_STATUS_CODE: function() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      NO_CONTENT_204_STATUS_CODE: function() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      OK_200_STATUS_CODE: function() {
        return OK_200_STATUS_CODE;
      },
      REQUEST_TIMEOUT_408_STATUS_CODE: function() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      SEE_OTHER_303_STATUS_CODE: function() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_CODE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      TOO_MANY_REQUESTS_429_STATUS_CODE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      UNAUTHORIZED_401_STATUS_CODE: function() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      ZERO_0_STATUS_CODE: function() {
        return ZERO_0_STATUS_CODE;
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
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_JSON_CONTENT_TYPE: function() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      APPLICATION_OCTET_STREAM_CONTENT_TYPE: function() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE: function() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      TEXT_HTML_CONTENT_TYPE: function() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      TEXT_PLAIN_CONTENT_TYPE: function() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
    var APPLICATION_JSON_CONTENT_TYPE = "application/json";
    var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
    var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
    var APPLICATION_OCTET_STREAM_CONTENT_TYPE = "application/octet-stream";
    var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
    var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
    var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
    var _default = {
      TEXT_HTML_CONTENT_TYPE,
      TEXT_PLAIN_CONTENT_TYPE,
      APPLICATION_JSON_CONTENT_TYPE,
      TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
      TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
      APPLICATION_OCTET_STREAM_CONTENT_TYPE,
      APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
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
      BAD_GATEWAY_502_STATUS_MESSAGE: function() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      BAD_REQUEST_400_STATUS_MESSAGE: function() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      CREATED_201_STATUS_MESSAGE: function() {
        return CREATED_201_STATUS_MESSAGE;
      },
      FORBIDDEN_403_STATUS_MESSAGE: function() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      FOUND_302_STATUS_MESSAGE: function() {
        return FOUND_302_STATUS_MESSAGE;
      },
      INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE: function() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      NOT_FOUND_404_STATUS_MESSAGE: function() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      NO_CONTENT_204_STATUS_MESSAGE: function() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      OK_200_STATUS_MESSAGE: function() {
        return OK_200_STATUS_MESSAGE;
      },
      REQUEST_TIMEOUT_408_STATUS_MESSAGE: function() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      SEE_OTHER_303_STATUS_MESSAGE: function() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      SERVICE_UNAVAILABLE_503_STATUS_MESSAGE: function() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      TOO_MANY_REQUESTS_429_STATUS_MESSAGE: function() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      UNAUTHORIZED_401_STATUS_MESSAGE: function() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      ZERO_0_STATUS_MESSAGE: function() {
        return ZERO_0_STATUS_MESSAGE;
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
      BOOLEAN: function() {
        return BOOLEAN;
      },
      DATA: function() {
        return DATA;
      },
      DEFAULT: function() {
        return DEFAULT;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      ENVIRONMENT: function() {
        return ENVIRONMENT;
      },
      ERROR: function() {
        return ERROR;
      },
      NUMBER: function() {
        return NUMBER;
      },
      PACKAGE_JSON: function() {
        return PACKAGE_JSON;
      },
      STRING: function() {
        return STRING;
      },
      ZERO: function() {
        return ZERO;
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
    var PACKAGE_JSON = "package.json";
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
      augment: function() {
        return augment;
      },
      back: function() {
        return back;
      },
      backwardsEvery: function() {
        return backwardsEvery;
      },
      backwardsFind: function() {
        return backwardsFind;
      },
      backwardsForEach: function() {
        return backwardsForEach;
      },
      backwardsReduce: function() {
        return backwardsReduce;
      },
      backwardsSome: function() {
        return backwardsSome;
      },
      clear: function() {
        return clear;
      },
      combine: function() {
        return combine;
      },
      compress: function() {
        return compress;
      },
      concat: function() {
        return concat;
      },
      copy: function() {
        return copy;
      },
      default: function() {
        return _default;
      },
      extract: function() {
        return extract;
      },
      fifth: function() {
        return fifth;
      },
      fifthLast: function() {
        return fifthLast;
      },
      filter: function() {
        return filter;
      },
      find: function() {
        return find;
      },
      first: function() {
        return first;
      },
      firstLast: function() {
        return firstLast;
      },
      forwardsEvery: function() {
        return forwardsEvery;
      },
      forwardsFind: function() {
        return forwardsFind;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      forwardsReduce: function() {
        return forwardsReduce;
      },
      forwardsSome: function() {
        return forwardsSome;
      },
      fourth: function() {
        return fourth;
      },
      fourthLast: function() {
        return fourthLast;
      },
      front: function() {
        return front;
      },
      head: function() {
        return head;
      },
      last: function() {
        return last;
      },
      merge: function() {
        return merge;
      },
      patch: function() {
        return patch;
      },
      prune: function() {
        return prune;
      },
      push: function() {
        return push;
      },
      replace: function() {
        return replace;
      },
      second: function() {
        return second;
      },
      secondLast: function() {
        return secondLast;
      },
      separate: function() {
        return separate;
      },
      splice: function() {
        return splice;
      },
      tail: function() {
        return tail;
      },
      third: function() {
        return third;
      },
      thirdLast: function() {
        return thirdLast;
      },
      unshift: function() {
        return unshift;
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
    function splice(array1, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var args = [
        start,
        deleteCount
      ].concat(_to_consumable_array(array2)), deletedElements = Array.prototype.splice.apply(array1, args);
      return deletedElements;
    }
    function filter(array, callback) {
      var deletedElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements2 = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements2);
          deletedElements2.unshift(firstDeletedElement);
        }
      });
      return deletedElements;
    }
    function prune(array, callback) {
      var deletedElement = void 0;
      array.some(function(element, index) {
        var passed = callback(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
    }
    function extract(array, callback) {
      var deletedElement = void 0;
      array.some(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          deletedElement = firstDeletedElement;
          return true;
        }
      });
      return deletedElement;
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
      find,
      replace,
      splice,
      filter,
      prune,
      extract,
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
      bottommostNameFromPath: function() {
        return bottommostNameFromPath;
      },
      combinePaths: function() {
        return combinePaths;
      },
      concatenatePaths: function() {
        return concatenatePaths;
      },
      default: function() {
        return _default;
      },
      isPathAbsolutePath: function() {
        return isPathAbsolutePath;
      },
      isPathName: function() {
        return isPathName;
      },
      isPathRelativePath: function() {
        return isPathRelativePath;
      },
      isPathTopmostName: function() {
        return isPathTopmostName;
      },
      isTopmostNameInAbsolutePath: function() {
        return isTopmostNameInAbsolutePath;
      },
      pathWithoutBottommostNameFromPath: function() {
        return pathWithoutBottommostNameFromPath;
      },
      pathWithoutTopmostDirectoryNameFromPath: function() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      topmostDirectoryNameFromPath: function() {
        return topmostDirectoryNameFromPath;
      },
      topmostDirectoryPathFromPath: function() {
        return topmostDirectoryPathFromPath;
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
      default: function() {
        return _default;
      },
      hostnameFromHost: function() {
        return hostnameFromHost;
      },
      overwrite: function() {
        return overwrite;
      },
      portFromHost: function() {
        return portFromHost;
      },
      queryStringFromQuery: function() {
        return queryStringFromQuery;
      },
      secureFromHost: function() {
        return secureFromHost;
      },
      underwrite: function() {
        return underwrite;
      },
      urlFromHostURIAndQuery: function() {
        return urlFromHostURIAndQuery;
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

  // node_modules/necessary/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
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
      default: function() {
        return _default;
      },
      strcmp: function() {
        return strcmp;
      },
      strlen: function() {
        return strlen;
      },
      substring: function() {
        return substring;
      }
    });
    var _constants = require_constants3();
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
    function strcmp(stringA, stringB) {
      var difference;
      var codePointA = stringA === _constants.EMPTY_STRING ? 0 : stringA.codePointAt(0), codePointB = stringB === _constants.EMPTY_STRING ? 0 : stringB.codePointAt(0);
      difference = codePointB - codePointA;
      if (difference === 0 && codePointA !== 0 && codePointB !== 0) {
        stringA = substring(stringA, 1);
        stringB = substring(stringB, 1);
        difference = strcmp(stringA, stringB);
      }
      return difference;
    }
    function strlen(string) {
      return _to_consumable_array(string).length;
    }
    function substring(string, start, end) {
      return _to_consumable_array(string).slice(start, end).join("");
    }
    var _default = {
      strcmp,
      strlen,
      substring
    };
  });

  // node_modules/necessary/lib/utilities/version.js
  var require_version = __commonJS((exports) => {
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
      default: function() {
        return _default;
      },
      migrate: function() {
        return migrate;
      }
    });
    function migrate(json, migrationMap, latestVersion) {
      var version = json.version;
      while (version !== latestVersion) {
        var migrateFunction = migrationMap[version];
        json = migrateFunction(json);
        version = json.version;
      }
      return json;
    }
    var _default = {
      migrate
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
      backwardsForEach: function() {
        return backwardsForEach;
      },
      default: function() {
        return _default;
      },
      eventually: function() {
        return eventually;
      },
      forEach: function() {
        return forEach;
      },
      forwardsForEach: function() {
        return forwardsForEach;
      },
      repeatedly: function() {
        return repeatedly;
      },
      sequence: function() {
        return sequence;
      },
      whilst: function() {
        return whilst;
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
      var length = operations.length;
      var count = 0;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      }
      operations.forEach(function(operation, index) {
        operation(next, done, context, index);
      });
    }
    function repeatedly(operation, length, done, context) {
      var count = 0;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      }
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
      default: function() {
        return _default;
      },
      get: function() {
        return get;
      },
      post: function() {
        return post;
      },
      request: function() {
        return request;
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
      ajaxUtilities: function() {
        return _ajax.default;
      },
      arrayUtilities: function() {
        return _array.default;
      },
      asynchronousUtilities: function() {
        return _asynchronous.default;
      },
      characters: function() {
        return _characters.default;
      },
      contentTypes: function() {
        return _contentTypes.default;
      },
      encodings: function() {
        return _encodings.default;
      },
      headers: function() {
        return _headers.default;
      },
      httpUtilities: function() {
        return _http.default;
      },
      keyCodes: function() {
        return _keyCodes.default;
      },
      levels: function() {
        return _levels.default;
      },
      methods: function() {
        return _methods.default;
      },
      pathUtilities: function() {
        return _path.default;
      },
      statusCodes: function() {
        return _statusCodes.default;
      },
      statusMessages: function() {
        return _statusMessages.default;
      },
      stringUtilities: function() {
        return _string.default;
      },
      versionUtilities: function() {
        return _version.default;
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
    var _path = /* @__PURE__ */ _interop_require_default(require_path());
    var _http = /* @__PURE__ */ _interop_require_default(require_http());
    var _array = /* @__PURE__ */ _interop_require_default(require_array2());
    var _string = /* @__PURE__ */ _interop_require_default(require_string());
    var _version = /* @__PURE__ */ _interop_require_default(require_version());
    var _asynchronous = /* @__PURE__ */ _interop_require_default(require_asynchronous());
    var _ajax = /* @__PURE__ */ _interop_require_default(require_ajax());
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
      SET_VISIBILITY_FILTER: function() {
        return SET_VISIBILITY_FILTER;
      },
      SHOW_ACTIVE: function() {
        return SHOW_ACTIVE;
      },
      SHOW_ALL: function() {
        return SHOW_ALL;
      },
      SHOW_COMPLETED: function() {
        return SHOW_COMPLETED;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdENsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC9jbGFzcy5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3V0aWxpdGllcy9zYW5pdGlpc2UuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0RE9NLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbGV2ZWxzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL21ldGhvZHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvaGVhZGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9rZXlDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9lbmNvZGluZ3MuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY2hhcmFjdGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzTWVzc2FnZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvaHR0cC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvY29tYmluZVJ1bGVzLmpzIiwgInNyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAuanMiLCAic3JjL2V4YW1wbGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFByb3BzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzO1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGlsZCgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbikgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaXJzdENoaWxkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuXG5mdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0F0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzc2VzKGNsYXNzTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkge1xuICByZXR1cm4gbnVsbDsgIC8vL1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRTdHlsZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uLFxuICBvZmYsXG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuaW1wb3J0IHJlYWN0RWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3JlYWN0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlLCAgLy8vXG4gICAgICAgICAgbmV3U3RhdGUgPSBzdGF0ZTsgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlZHJhdyh1cGRhdGUpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgbnVsbDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVkcmF3KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vdmlydHVhbERPTUVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgQ29udGFpbmVyRWxlbWVudChwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgUkVGID0gXCJyZWZcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEhUTUxfRk9SID0gXCJodG1sRm9yXCI7XG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRSA9IFwiY2xhc3NOYW1lXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgQk9PTEVBTiwgQ0xBU1NfTkFNRSwgSFRNTF9GT1IsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7IHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7IH0gLy8vXG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb24sXG4gIG9mZixcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNoaWxkQ29udGV4dFNldC5jYWxsKHRoaXMsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICB9XG4gXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuXG5pbXBvcnQgU1ZHRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L3N2Z1wiO1xuaW1wb3J0IEhUTUxFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlDaGlsZHJlbiwgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Nhbml0aWlzZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50KSB7XG4gICAgY2hpbGRyZW4gPSBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgY2hpbGRyZW5cbiAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgIG5ldyBTVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MocHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnQ7IC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gZmxhdHRlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZW1vdmVGYWxzZXlDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gUmVhY3RDb21wb25lbnRTdWJDbGFzcztcblxuICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MpOyAvLy9cblxuICBpZiAoUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZTsgLy8vXG5cbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gQ29udGFpbmVyRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RET00gfSBmcm9tIFwiLi9yZWFjdERPTVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxMID0gXCJTSE9XX0FMTFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSVZFID0gXCJTSE9XX0FDVElWRVwiO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9UT0RPID0gXCJUT0dHTEVfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NUExFVEVEID0gXCJTSE9XX0NPTVBMRVRFRFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVyKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdXhcIjtcblxuaW1wb3J0IHRvZG9zIGZyb20gXCIuL3JlZHVjZXIvdG9kb3NcIjtcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpZCA9IDAsXG4gICAgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RvcmUgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZCsrO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcyAvPlxuICA8L3VsPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkRfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgQkFDS1RJQ0tfREVMSU1JVEVSID0gXCJgXCI7XG5leHBvcnQgY29uc3QgTkVXX0xJTkVfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMRVNTX1RIQU5fQ0hBUkFDVEVSID0gXCImbHQ7XCI7XG5leHBvcnQgY29uc3QgR1JFQVRFUl9USEFOX0NIQVJBQ1RFUiA9IFwiJmd0O1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG5leHBvcnQgY29uc3QgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgPSBcIiFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVUF9DSEFSQUNURVIsXG4gIEVUWF9DSEFSQUNURVIsXG4gIEJBUl9DSEFSQUNURVIsXG4gIERBU0hfQ0hBUkFDVEVSLFxuICBET1dOX0NIQVJBQ1RFUixcbiAgTEVGVF9DSEFSQUNURVIsXG4gIFJJR0hUX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgV0lMRENBUkRfQ0hBUkFDVEVSLFxuICBCQUNLVElDS19ERUxJTUlURVIsXG4gIE5FV19MSU5FX0NIQVJBQ1RFUixcbiAgQU1QRVJTQU5EX0NIQVJBQ1RFUixcbiAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgTEVTU19USEFOX0NIQVJBQ1RFUixcbiAgR1JFQVRFUl9USEFOX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19DT0RFID0gMDtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX0NPREUgPSAyMDA7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19DT0RFID0gMzAyO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19DT0RFID0gMjAxO1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUgPSAzMDM7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSA9IDQwMztcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFID0gNDA0O1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFID0gMjA0O1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSA9IDUwMjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUgPSA0MDA7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSA9IDQwMTtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19DT0RFID0gNDA4O1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfQ09ERSA9IDQyOTtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSA9IDUwMztcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19DT0RFID0gNTAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfQ09ERSxcbiAgT0tfMjAwX1NUQVRVU19DT0RFLFxuICBGT1VORF8zMDJfU1RBVFVTX0NPREUsXG4gIENSRUFURURfMjAxX1NUQVRVU19DT0RFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19DT0RFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfQ09ERSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX0NPREUsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfQ09ERSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX0NPREUsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX09DVEVUX1NUUkVBTV9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFpFUk9fMF9TVEFUVVNfTUVTU0FHRSA9IFwiXCI7XG5leHBvcnQgY29uc3QgT0tfMjAwX1NUQVRVU19NRVNTQUdFID0gXCJPS1wiO1xuZXhwb3J0IGNvbnN0IEZPVU5EXzMwMl9TVEFUVVNfTUVTU0FHRSA9IFwiRm91bmRcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSA9IFwiQ3JlYXRlZFwiO1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX01FU1NBR0UgPSBcIlNlZSBvdGhlclwiO1xuZXhwb3J0IGNvbnN0IEZPUkJJRERFTl80MDNfU1RBVFVTX01FU1NBR0UgPSBcIkZvcmJpZGRlblwiO1xuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF80MDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vdCBmb3VuZFwiO1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19NRVNTQUdFID0gXCJObyBjb250ZW50XCI7XG5leHBvcnQgY29uc3QgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgZ2F0ZXdheVwiO1xuZXhwb3J0IGNvbnN0IEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIHJlcXVlc3RcIjtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19NRVNTQUdFID0gXCJVbmF1dGhvcml6ZWRcIjtcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19NRVNTQUdFID0gXCJSZXF1ZXN0IHRpbWVvdXRcIjtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UgPSBcIlRvbyBtYW55IHJlcXVlc3RzXCI7XG5leHBvcnQgY29uc3QgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UgPSBcIlNlcnZpY2UgdW5hdmFpbGFibGVcIjtcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFID0gXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX01FU1NBR0UsXG4gIE9LXzIwMF9TVEFUVVNfTUVTU0FHRSxcbiAgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFLFxuICBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19NRVNTQUdFLFxuICBSRVFVRVNUX1RJTUVPVVRfNDA4X1NUQVRVU19NRVNTQUdFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UsXG4gIFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19NRVNTQUdFLFxuICBJTlRFUk5BTF9TRVJWRVJfRVJST1JfNTAwX1NUQVRVU19NRVNTQUdFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVSTyA9IFwiMFwiO1xuZXhwb3J0IGNvbnN0IERBVEEgPSBcImRhdGFcIjtcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE5VTUJFUiA9IFwibnVtYmVyXCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFQgPSBcImRlZmF1bHRcIjtcbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVCA9IFwiRU5WSVJPTk1FTlRcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfSlNPTiA9IFwicGFja2FnZS5qc29uXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBNYXRoLm1heCgxLCBhcnJheS5sZW5ndGggLSAxKSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNoaWZ0KGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KGFycmF5MSwgZWxlbWVudE9yQXJyYXkyKSB7XG4gIGNvbnN0IGFycmF5MiA9IChlbGVtZW50T3JBcnJheTIgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3JBcnJheTIgOlxuICAgICAgICAgICAgICAgICAgICAgWyBlbGVtZW50T3JBcnJheTIgXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5MSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5MiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXkxLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudDEgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudDIgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudDIsIGVsZW1lbnQxKTtcblxuICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IGluZGV4MiwgLy8vXG4gICAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgICAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleDErKztcblxuICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZShhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXkgPSBbXG4gICAgLi4uYXJyYXkxLFxuICAgIC4uLmFycmF5MlxuICBdO1xuXG4gIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjayk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgY2FsbGJhY2spIHtcbiAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBwYXNzZWQgP1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCkgOlxuICAgICAgICBhcnJheTIucHVzaChlbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRmluZChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gICAgXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzU29tZShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzUmVkdWNlKGFycmF5LCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8vXG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIGZpZnRoTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgdGhpcmRMYXN0LFxuICBzZWNvbmRMYXN0LFxuICBmaXJzdExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLywgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoL1xcLy8pLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgvXFwvLyk7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sIEVNUFRZX1NUUklORyk7ICAvLy9cblxuICBjb25zdCBjb25jYXRlbmF0ZWRQYXRoID0gYCR7cGF0aH0vJHtyZWxhdGl2ZVBhdGh9YDtcblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1tleGlzdGluZ05hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSA9PT0gbnVsbCkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpIHtcbiAgbGV0IGRpZmZlcmVuY2U7XG5cbiAgY29uc3QgY29kZVBvaW50QSA9IChzdHJpbmdBID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQS5jb2RlUG9pbnRBdCgwKSxcbiAgICAgICAgY29kZVBvaW50QiA9IChzdHJpbmdCID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nQi5jb2RlUG9pbnRBdCgwKTtcblxuICBkaWZmZXJlbmNlID0gY29kZVBvaW50QiAtIGNvZGVQb2ludEE7XG5cbiAgaWYgKChkaWZmZXJlbmNlID09PSAwKSAmJiAoY29kZVBvaW50QSAhPT0wKSAmJiAoY29kZVBvaW50QiAhPT0wKSkge1xuICAgIHN0cmluZ0EgPSBzdWJzdHJpbmcoc3RyaW5nQSwgMSk7IC8vL1xuXG4gICAgc3RyaW5nQiA9IHN1YnN0cmluZyhzdHJpbmdCLCAxKTsgLy8vXG5cbiAgICBkaWZmZXJlbmNlID0gc3RyY21wKHN0cmluZ0EsIHN0cmluZ0IpO1xuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4oc3RyaW5nKSB7IHJldHVybiBbLi4uc3RyaW5nXS5sZW5ndGg7IH0gLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kKSB7IHJldHVybiBbLi4uc3RyaW5nXS5zbGljZShzdGFydCwgZW5kKS5qb2luKFwiXCIpOyB9ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJjbXAsXG4gIHN0cmxlbixcbiAgc3Vic3RyaW5nXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pIHtcbiAgbGV0IHsgdmVyc2lvbiB9ID0ganNvbjtcblxuICB3aGlsZSAodmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbikge1xuICAgIGNvbnN0IG1pZ3JhdGVGdW5jdGlvbiA9IG1pZ3JhdGlvbk1hcFt2ZXJzaW9uXTtcblxuICAgIGpzb24gPSBtaWdyYXRlRnVuY3Rpb24oanNvbik7XG5cbiAgICAoeyB2ZXJzaW9uIH0gPSBqc29uKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICB0ZXJtaW5hdGUgPSBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVuY2Uob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50dWFsbHkob3BlcmF0aW9ucywgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudCsrO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZXJhdGlvbnMuZm9yRWFjaCgob3BlcmF0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkbHkob3BlcmF0aW9uLCBsZW5ndGgsIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgR0VUX01FVEhPRCwgUE9TVF9NRVRIT0QgfSBmcm9tIFwiLi4vbWV0aG9kc1wiO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5pbXBvcnQgeyBBQ0NFUFRfSEVBREVSLCBDT05URU5UX1RZUEVfSEVBREVSIH0gZnJvbSBcIi4uL2hlYWRlcnNcIjtcbmltcG9ydCB7IHVuZGVyd3JpdGUsIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2h0dHBcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gaGVhZGVyczsgLy8vXG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gR0VUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnQgPSBudWxsO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdChob3N0LCB1cmksIHF1ZXJ5LCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGxiYWNrID0gY29udGVudDtcbiAgICBjb250ZW50ID0gaGVhZGVycztcbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpLFxuICAgICAgICBhY2NlcHQgPSBoZWFkZXJzW0FDQ0VQVF9IRUFERVJdIHx8IG51bGwsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gaGVhZGVyc1tDT05URU5UX1RZUEVfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICB4bWxIdHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChjb250ZW50VHlwZSA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICBjb25zdCBqc29uID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblxuICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAgLy8vXG4gIH1cblxuICB4bWxIdHRwUmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWFkeVN0YXRlLCBzdGF0dXMsIHJlc3BvbnNlIH0gPSB4bWxIdHRwUmVxdWVzdCxcbiAgICAgICAgICBzdGF0dXNDb2RlID0gc3RhdHVzO1xuXG4gICAgaWYgKHJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgbGV0IGNvbnRlbnQgPSByZXNwb25zZTtcblxuICAgICAgaWYgKGFjY2VwdCA9PT0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBqc29uU3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuXG4gICAgICAgICAgY29udGVudCA9IGpzb247ICAvLy9cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb250ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhjb250ZW50LCBzdGF0dXNDb2RlKTtcbiAgICB9XG4gIH07XG5cbiAgeG1sSHR0cFJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XG5cbiAgaWYgKGFjY2VwdCAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQUNDRVBUX0hFQURFUiwgYWNjZXB0KTtcbiAgfVxuXG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCkge1xuICAgIHhtbEh0dHBSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoQ09OVEVOVF9UWVBFX0hFQURFUiwgY29udGVudFR5cGUpO1xuICB9XG5cbiAgKGNvbnRlbnQgIT09IG51bGwpID9cbiAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKGNvbnRlbnQpIDpcbiAgICAgIHhtbEh0dHBSZXF1ZXN0LnNlbmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQsXG4gIHBvc3QsXG4gIHJlcXVlc3Rcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpIHtcbiAgY29uc3QgbmFtZSA9IEFDQ0VQVF9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBhY2NlcHQ7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFRZcGUpIHtcbiAgY29uc3QgbmFtZSA9IENPTlRFTlRfVFlQRV9IRUFERVIsICAvLy9cbiAgICAgICAgdmFsdWUgPSBjb250ZW50VFlwZTsgLy8vXG5cbiAgdW5kZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0cmluZ1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVyc2lvblV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy92ZXJzaW9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29tYmluZVJ1bGVzID0gKHJ1bGVzKSA9PiB7XG4gIHJldHVybiAoYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJ1bGVzKSxcbiAgICAgICAgICB1cGRhdGUgPSBrZXlzLnJlZHVjZSgodXBkYXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBydWxlc1trZXldO1xuXG4gICAgICAgICAgICB1cGRhdGVba2V5XSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJ1bGVzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjcmVhdGVEaXNwYXRjaGVyID0gKHJ1bGUpID0+IHtcbiAgbGV0IGxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHJ1bGUoYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBydWxlTmFtZXMgfSA9IGxpc3RlbmVyO1xuXG4gICAgICBpZiAoKHJ1bGVOYW1lcy5sZW5ndGggPT09IDApIHx8IHJ1bGVOYW1lcy5zb21lKChydWxlTmFtZSkgPT4gKHVwZGF0ZVtydWxlTmFtZV0gIT09IHVuZGVmaW5lZCkpKSB7XG4gICAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyLCAuLi5ydWxlTmFtZXMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVyLCB7XG4gICAgICBydWxlTmFtZXNcbiAgICB9KTtcblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKCkgPT4gdW5zdWJzY3JpYmUobGlzdGVuZXIpKTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IChsaXN0ZW5lciAhPT0gbCkpO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWJpbmVSdWxlcyB9IGZyb20gXCIuL2NvbWJpbmVSdWxlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVEaXNwYXRjaGVyIH0gZnJvbSBcIi4vY3JlYXRlRGlzcGF0Y2hlclwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQUREX1RPRE8gPSBcIkFERF9UT0RPXCI7XG5leHBvcnQgY29uc3QgU0hPV19BTEwgPSBcInNob3ctYWxsXCI7XG5leHBvcnQgY29uc3QgU0hPV19BQ1RJVkUgPSBcInNob3ctYWN0aXZlXCI7XG5leHBvcnQgY29uc3QgU0hPV19DT01QTEVURUQgPSBcInNob3ctY29tcGxldGVkXCI7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gXCJTRVRfVklTSUJJTElUWV9GSUxURVJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRvZG8oYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIGNvbnN0IHsgdGV4dCB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHRleHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdXBkYXRlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICB1cGRhdGUgPSB7XG4gICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmVSdWxlcyB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vcnVsZS9hZGRUb2RvXCI7XG5pbXBvcnQgc2V0VmlzaWJpbGl0eUZpbHRlciBmcm9tIFwiLi9ydWxlL3NldFZpc2liaWxpdHlGaWx0ZXJcIjtcblxuY29uc3QgcnVsZSA9IGNvbWJpbmVSdWxlcyh7XG4gIGFkZFRvZG8sXG4gIHNldFZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBydWxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVEaXNwYXRjaGVyIH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgcnVsZSBmcm9tIFwiLi9ydWxlXCI7XG5cbmNvbnN0IGRpc3BhdGNoZXIgPSBjcmVhdGVEaXNwYXRjaGVyKHJ1bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5cbmltcG9ydCB7IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IEZpbHRlckxpbmsgPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSBwcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7ZmlsdGVyfSBmaWx0ZXJgLFxuICAgICAgICBmaXJzdENoaWxkID0gZmlyc3QoY2hpbGRyZW4pLFxuICAgICAgICB0ZXh0ID0gZmlyc3RDaGlsZC5nZXRUZXh0KCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICBjb25zdCB0eXBlID0gU0VUX1ZJU0lCSUxJVFlfRklMVEVSLFxuICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyID0gZmlsdGVyLFxuICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgZGlzcGF0Y2hlci5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckxpbms7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBGaWx0ZXJMaW5rIGZyb20gXCIuL2ZpbHRlckxpbmtcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDxwPlxuICAgIHtcIlNob3c6IFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BTEx9PkFsbDwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUNUSVZFfT5BY3RpdmU8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0NPTVBMRVRFRH0+Q29tcGxldGVkPC9GaWx0ZXJMaW5rPlxuICA8L3A+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBBRERfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlucHV0RE9NRWxlbWVudDtcblxuY29uc3QgQWRkVG9kbyA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gQUREX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSkge1xuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGU7XG5cbiAgICAgIGlmIChhZGRUb2RvKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUodXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gZGlzcGF0Y2hlci5zdWJzY3JpYmUoKHVwZGF0ZSkgPT4gdGhpcy51cGRhdGVIYW5kbGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgICAgY29uc3QgeyBhZGRUb2RvIH0gPSB1cGRhdGUsXG4gICAgICAgICAgICB7IHRleHQgfSA9IGFkZFRvZG87XG5cbiAgICAgIGNoaWxkcmVuID0gW1xuICAgICAgICAuLi5jaGlsZHJlbixcblxuICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH0gLz5cblxuICAgICAgXTtcblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcyAvPlxuICA8L3VsPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgc2V0VmlzaWJpbGl0eUZpbHRlciB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoc2V0VmlzaWJpbGl0eUZpbHRlcikge1xuICAgICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IHNldFZpc2liaWxpdHlGaWx0ZXIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke3Zpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgICAgdGhpcy5zZXRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbml0aWFsVmlzaWJpbGl0eUZpbHRlciA9IFNIT1dfQUxMLFxuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7aW5pdGlhbFZpc2liaWxpdHlGaWx0ZXJ9IGFwcGA7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgICA8VG9kb0xpc3QgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vaW5mZXJlbmNlQXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5cbmNvbnN0IGluZmVyZW5jZUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8VG9kb0FwcCAvPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZmVyZW5jZUFwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlZHV4QXBwIGZyb20gXCIuL2V4YW1wbGUvcmVkdXhBcHBcIjtcbmltcG9ydCBpbmZlcmVuY2VBcHAgZnJvbSBcIi4vZXhhbXBsZS9pbmZlcmVuY2VBcHBcIjtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgcmVkdXhBcHAsXG4gIGluZmVyZW5jZUFwcFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sUUFBTSxhQUFOLDJCQUFBOzJCQUNELFFBQVEsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLFFBQU07Z0NBRGxGO0FBRWpCLGFBQUssU0FBUztBQUVkLFlBQUksaUJBQWlCO0FBQUUsZUFBSyxrQkFBa0I7O0FBQzlDLFlBQUksaUJBQWlCO0FBQUUsZUFBSyxrQkFBa0I7O0FBQzlDLFlBQUksbUJBQW1CO0FBQUUsZUFBSyxvQkFBb0I7O0FBQ2xELFlBQUksc0JBQXNCO0FBQUUsZUFBSyx1QkFBdUI7O0FBRXhELGFBQUssU0FBUzs7b0JBVEcsYUFBQTs7VUFZ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

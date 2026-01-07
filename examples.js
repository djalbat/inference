(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get first() {
        return first;
      },
      get flatten() {
        return flatten;
      },
      get guarantee() {
        return guarantee;
      },
      get remaining() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ReactElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ReactElement2, VirtualDOMElement);
      function ReactElement2(props) {
        _class_call_check(this, ReactElement2);
        var _this;
        _this = _call_super(this, ReactElement2, [
          props
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ReactComponent = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactComponent2, ReactElement);
      function ReactComponent2(props) {
        _class_call_check(this, ReactComponent2);
        var _this;
        _this = _call_super(this, ReactComponent2, [
          props
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ContainerElement = /* @__PURE__ */ function(VirtualDOMElement) {
      _inherits(ContainerElement2, VirtualDOMElement);
      function ContainerElement2(props, domElement) {
        _class_call_check(this, ContainerElement2);
        var _this;
        _this = _call_super(this, ContainerElement2, [
          props
        ]);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BOOLEAN() {
        return BOOLEAN;
      },
      get CLASS() {
        return CLASS;
      },
      get CLASS_NAME() {
        return CLASS_NAME;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get FOR() {
        return FOR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get HTML_FOR() {
        return HTML_FOR;
      },
      get HTTP_WWW_W3_ORG_2000_SVG() {
        return HTTP_WWW_W3_ORG_2000_SVG;
      },
      get OBJECT() {
        return OBJECT;
      },
      get REF() {
        return REF;
      },
      get STRING() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Element = /* @__PURE__ */ function(ContainerElement) {
      _inherits(Element2, ContainerElement);
      function Element2() {
        _class_call_check(this, Element2);
        return _call_super(this, Element2, arguments);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get isHTMLAttributeName() {
        return isHTMLAttributeName;
      },
      get isSVGAttributeName() {
        return isSVGAttributeName;
      },
      get isSVGTagName() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var SVGElement = /* @__PURE__ */ function(Element) {
      _inherits(SVGElement2, Element);
      function SVGElement2(tagName, props) {
        _class_call_check(this, SVGElement2);
        var domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        return _call_super(this, SVGElement2, [
          props,
          domElement
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var HTMLElement = /* @__PURE__ */ function(Element) {
      _inherits(HTMLElement2, Element);
      function HTMLElement2(tagName, props) {
        _class_call_check(this, HTMLElement2);
        var domElement = document.createElement(tagName);
        return _call_super(this, HTMLElement2, [
          props,
          domElement
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ReactClassElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactClassElement2, ReactElement);
      function ReactClassElement2(reactClass, props) {
        _class_call_check(this, ReactClassElement2);
        var _this;
        _this = _call_super(this, ReactClassElement2, [
          props
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ReactFunctionElement = /* @__PURE__ */ function(ReactElement) {
      _inherits(ReactFunctionElement2, ReactElement);
      function ReactFunctionElement2(reactFunction, props) {
        _class_call_check(this, ReactFunctionElement2);
        var _this;
        _this = _call_super(this, ReactFunctionElement2, [
          props
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var TextElement = /* @__PURE__ */ function(ContainerElement) {
      _inherits(TextElement2, ContainerElement);
      function TextElement2(text) {
        _class_call_check(this, TextElement2);
        var domElement = document.createTextNode(text), children = [], props = {
          children
        };
        return _call_super(this, TextElement2, [
          props,
          domElement
        ]);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get removeFalseyChildren() {
        return removeFalseyChildren;
      },
      get replaceStringsWithTextChildren() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get React() {
        return _react.default;
      },
      get ReactDOM() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get combineReducers() {
        return combineReducers;
      },
      get createStore() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ADD_TODO() {
        return ADD_TODO;
      },
      get SET_VISIBILITY_FILTER() {
        return SET_VISIBILITY_FILTER;
      },
      get SHOW_ACTIVE() {
        return SHOW_ACTIVE;
      },
      get SHOW_ALL() {
        return SHOW_ALL;
      },
      get SHOW_COMPLETED() {
        return SHOW_COMPLETED;
      },
      get TOGGLE_TODO() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var FilterLink = /* @__PURE__ */ function(Component2) {
      _inherits(FilterLink2, Component2);
      function FilterLink2() {
        _class_call_check(this, FilterLink2);
        return _call_super(this, FilterLink2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItems2, Component2);
      function TodoListItems2() {
        _class_call_check(this, TodoListItems2);
        return _call_super(this, TodoListItems2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var Provider = /* @__PURE__ */ function(Component2) {
      _inherits(Provider2, Component2);
      function Provider2() {
        _class_call_check(this, Provider2);
        return _call_super(this, Provider2, arguments);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DEBUG_LEVEL() {
        return DEBUG_LEVEL;
      },
      get ERROR_LEVEL() {
        return ERROR_LEVEL;
      },
      get FATAL_LEVEL() {
        return FATAL_LEVEL;
      },
      get INFO_LEVEL() {
        return INFO_LEVEL;
      },
      get TRACE_LEVEL() {
        return TRACE_LEVEL;
      },
      get WARNING_LEVEL() {
        return WARNING_LEVEL;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get DELETE_METHOD() {
        return DELETE_METHOD;
      },
      get GET_METHOD() {
        return GET_METHOD;
      },
      get OPTIONS_METHOD() {
        return OPTIONS_METHOD;
      },
      get PATCH_METHOD() {
        return PATCH_METHOD;
      },
      get POST_METHOD() {
        return POST_METHOD;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ACCEPT_HEADER() {
        return ACCEPT_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_HEADERS_HEADER() {
        return ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_METHODS_HEADER() {
        return ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      },
      get ACCESS_CONTROL_ALLOW_ORIGIN_HEADER() {
        return ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      },
      get ACCESS_CONTROL_REQUEST_METHOD_HEADER() {
        return ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      },
      get AUTHORIZATION_HEADER() {
        return AUTHORIZATION_HEADER;
      },
      get CACHE_CONTROL_HEADER() {
        return CACHE_CONTROL_HEADER;
      },
      get CONTENT_DISPOSITION_HEADER() {
        return CONTENT_DISPOSITION_HEADER;
      },
      get CONTENT_LENGTH_HEADER() {
        return CONTENT_LENGTH_HEADER;
      },
      get CONTENT_TYPE_HEADER() {
        return CONTENT_TYPE_HEADER;
      },
      get LOCATION_HEADER() {
        return LOCATION_HEADER;
      },
      get PRAGMA_HEADER() {
        return PRAGMA_HEADER;
      },
      get TRANSFER_ENCODING_HEADER() {
        return TRANSFER_ENCODING_HEADER;
      },
      get USER_AGENT_HEADER() {
        return USER_AGENT_HEADER;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ARROW_DOWN_KEY_CODE() {
        return ARROW_DOWN_KEY_CODE;
      },
      get ARROW_LEFT_KEY_CODE() {
        return ARROW_LEFT_KEY_CODE;
      },
      get ARROW_RIGHT_KEY_CODE() {
        return ARROW_RIGHT_KEY_CODE;
      },
      get ARROW_UP_KEY_CODE() {
        return ARROW_UP_KEY_CODE;
      },
      get BACKSPACE_KEY_CODE() {
        return BACKSPACE_KEY_CODE;
      },
      get DELETE_KEY_CODE() {
        return DELETE_KEY_CODE;
      },
      get ENTER_KEY_CODE() {
        return ENTER_KEY_CODE;
      },
      get ESCAPE_KEY_CODE() {
        return ESCAPE_KEY_CODE;
      },
      get SHIFT_KEY_CODE() {
        return SHIFT_KEY_CODE;
      },
      get TAB_KEY_CODE() {
        return TAB_KEY_CODE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BASE64_ENCODING() {
        return BASE64_ENCODING;
      },
      get UTF8_ENCODING() {
        return UTF8_ENCODING;
      },
      get UTF_8_ENCODING() {
        return UTF_8_ENCODING;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get AMPERSAND_CHARACTER() {
        return AMPERSAND_CHARACTER;
      },
      get ASTERISK_CHARACTER() {
        return ASTERISK_CHARACTER;
      },
      get BACKSLASH_CHARACTER() {
        return BACKSLASH_CHARACTER;
      },
      get BACKSPACE_CHARACTER() {
        return BACKSPACE_CHARACTER;
      },
      get BACKTICK_DELIMITER() {
        return BACKTICK_DELIMITER;
      },
      get BAR_CHARACTER() {
        return BAR_CHARACTER;
      },
      get CARRIAGE_RETURN_CHARACTER() {
        return CARRIAGE_RETURN_CHARACTER;
      },
      get CLOSING_BRACKET_CHARACTER() {
        return CLOSING_BRACKET_CHARACTER;
      },
      get CLOSING_CURLY_BRACKET_CHARACTER() {
        return CLOSING_CURLY_BRACKET_CHARACTER;
      },
      get CLOSING_SQUARE_BRACKET_CHARACTER() {
        return CLOSING_SQUARE_BRACKET_CHARACTER;
      },
      get COLON_CHARACTER() {
        return COLON_CHARACTER;
      },
      get COMMA_CHARACTER() {
        return COMMA_CHARACTER;
      },
      get CTRL_C_CHARACTER() {
        return CTRL_C_CHARACTER;
      },
      get DASH_CHARACTER() {
        return DASH_CHARACTER;
      },
      get DOLLAR_CHARACTER() {
        return DOLLAR_CHARACTER;
      },
      get DOWN_CHARACTER() {
        return DOWN_CHARACTER;
      },
      get ESCAPE_CHARACTER() {
        return ESCAPE_CHARACTER;
      },
      get ETX_CHARACTER() {
        return ETX_CHARACTER;
      },
      get EXCLAMATION_MARK_CHARACTER() {
        return EXCLAMATION_MARK_CHARACTER;
      },
      get FORWARD_SLASH_CHARACTER() {
        return FORWARD_SLASH_CHARACTER;
      },
      get HAT_CHARACTER() {
        return HAT_CHARACTER;
      },
      get LEFT_CHARACTER() {
        return LEFT_CHARACTER;
      },
      get NEW_LINE_CHARACTER() {
        return NEW_LINE_CHARACTER;
      },
      get OPENING_BRACKET_CHARACTER() {
        return OPENING_BRACKET_CHARACTER;
      },
      get OPENING_CURLY_BRACKET_CHARACTER() {
        return OPENING_CURLY_BRACKET_CHARACTER;
      },
      get OPENING_SQUARE_BRACKET_CHARACTER() {
        return OPENING_SQUARE_BRACKET_CHARACTER;
      },
      get PERIOD_CHARACTER() {
        return PERIOD_CHARACTER;
      },
      get PLUS_CHARACTER() {
        return PLUS_CHARACTER;
      },
      get QUESTION_MARK_CHARACTER() {
        return QUESTION_MARK_CHARACTER;
      },
      get RIGHT_CHARACTER() {
        return RIGHT_CHARACTER;
      },
      get SPACE_CHARACTER() {
        return SPACE_CHARACTER;
      },
      get UP_CHARACTER() {
        return UP_CHARACTER;
      },
      get WILDCARD_CHARACTER() {
        return WILDCARD_CHARACTER;
      },
      get default() {
        return _default;
      }
    });
    var UP_CHARACTER = "[A";
    var ETX_CHARACTER = "";
    var BAR_CHARACTER = "|";
    var HAT_CHARACTER = "^";
    var PLUS_CHARACTER = "+";
    var DASH_CHARACTER = "-";
    var DOWN_CHARACTER = "[B";
    var LEFT_CHARACTER = "[D";
    var RIGHT_CHARACTER = "[C";
    var SPACE_CHARACTER = " ";
    var COMMA_CHARACTER = ",";
    var COLON_CHARACTER = ":";
    var PERIOD_CHARACTER = ".";
    var DOLLAR_CHARACTER = "$";
    var CTRL_C_CHARACTER = "^C";
    var ESCAPE_CHARACTER = "";
    var ASTERISK_CHARACTER = "*";
    var WILDCARD_CHARACTER = "*";
    var BACKTICK_DELIMITER = "`";
    var NEW_LINE_CHARACTER = "\n";
    var AMPERSAND_CHARACTER = "&";
    var BACKSLASH_CHARACTER = "\\";
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    var QUESTION_MARK_CHARACTER = "?";
    var FORWARD_SLASH_CHARACTER = "/";
    var OPENING_BRACKET_CHARACTER = "(";
    var CLOSING_BRACKET_CHARACTER = ")";
    var CARRIAGE_RETURN_CHARACTER = "\r";
    var EXCLAMATION_MARK_CHARACTER = "!";
    var OPENING_CURLY_BRACKET_CHARACTER = "{";
    var CLOSING_CURLY_BRACKET_CHARACTER = "}";
    var OPENING_SQUARE_BRACKET_CHARACTER = "[";
    var CLOSING_SQUARE_BRACKET_CHARACTER = "]";
    var _default = {
      UP_CHARACTER,
      ETX_CHARACTER,
      BAR_CHARACTER,
      HAT_CHARACTER,
      PLUS_CHARACTER,
      DASH_CHARACTER,
      DOWN_CHARACTER,
      LEFT_CHARACTER,
      RIGHT_CHARACTER,
      SPACE_CHARACTER,
      COMMA_CHARACTER,
      COLON_CHARACTER,
      PERIOD_CHARACTER,
      DOLLAR_CHARACTER,
      CTRL_C_CHARACTER,
      ESCAPE_CHARACTER,
      ASTERISK_CHARACTER,
      WILDCARD_CHARACTER,
      BACKTICK_DELIMITER,
      NEW_LINE_CHARACTER,
      AMPERSAND_CHARACTER,
      BACKSLASH_CHARACTER,
      BACKSPACE_CHARACTER,
      QUESTION_MARK_CHARACTER,
      FORWARD_SLASH_CHARACTER,
      OPENING_BRACKET_CHARACTER,
      CLOSING_BRACKET_CHARACTER,
      CARRIAGE_RETURN_CHARACTER,
      EXCLAMATION_MARK_CHARACTER,
      OPENING_CURLY_BRACKET_CHARACTER,
      CLOSING_CURLY_BRACKET_CHARACTER,
      OPENING_SQUARE_BRACKET_CHARACTER,
      CLOSING_SQUARE_BRACKET_CHARACTER
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_CODE() {
        return BAD_GATEWAY_502_STATUS_CODE;
      },
      get BAD_REQUEST_400_STATUS_CODE() {
        return BAD_REQUEST_400_STATUS_CODE;
      },
      get CREATED_201_STATUS_CODE() {
        return CREATED_201_STATUS_CODE;
      },
      get FORBIDDEN_403_STATUS_CODE() {
        return FORBIDDEN_403_STATUS_CODE;
      },
      get FOUND_302_STATUS_CODE() {
        return FOUND_302_STATUS_CODE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_CODE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      },
      get NOT_FOUND_404_STATUS_CODE() {
        return NOT_FOUND_404_STATUS_CODE;
      },
      get NO_CONTENT_204_STATUS_CODE() {
        return NO_CONTENT_204_STATUS_CODE;
      },
      get OK_200_STATUS_CODE() {
        return OK_200_STATUS_CODE;
      },
      get REQUEST_TIMEOUT_408_STATUS_CODE() {
        return REQUEST_TIMEOUT_408_STATUS_CODE;
      },
      get SEE_OTHER_303_STATUS_CODE() {
        return SEE_OTHER_303_STATUS_CODE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_CODE() {
        return SERVICE_UNAVAILABLE_503_STATUS_CODE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_CODE() {
        return TOO_MANY_REQUESTS_429_STATUS_CODE;
      },
      get UNAUTHORIZED_401_STATUS_CODE() {
        return UNAUTHORIZED_401_STATUS_CODE;
      },
      get ZERO_0_STATUS_CODE() {
        return ZERO_0_STATUS_CODE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_JSON_CONTENT_TYPE() {
        return APPLICATION_JSON_CONTENT_TYPE;
      },
      get APPLICATION_OCTET_STREAM_CONTENT_TYPE() {
        return APPLICATION_OCTET_STREAM_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE() {
        return APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      },
      get TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_HTML_CONTENT_TYPE() {
        return TEXT_HTML_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE() {
        return TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      },
      get TEXT_PLAIN_CONTENT_TYPE() {
        return TEXT_PLAIN_CONTENT_TYPE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BAD_GATEWAY_502_STATUS_MESSAGE() {
        return BAD_GATEWAY_502_STATUS_MESSAGE;
      },
      get BAD_REQUEST_400_STATUS_MESSAGE() {
        return BAD_REQUEST_400_STATUS_MESSAGE;
      },
      get CREATED_201_STATUS_MESSAGE() {
        return CREATED_201_STATUS_MESSAGE;
      },
      get FORBIDDEN_403_STATUS_MESSAGE() {
        return FORBIDDEN_403_STATUS_MESSAGE;
      },
      get FOUND_302_STATUS_MESSAGE() {
        return FOUND_302_STATUS_MESSAGE;
      },
      get INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE() {
        return INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      },
      get NOT_FOUND_404_STATUS_MESSAGE() {
        return NOT_FOUND_404_STATUS_MESSAGE;
      },
      get NO_CONTENT_204_STATUS_MESSAGE() {
        return NO_CONTENT_204_STATUS_MESSAGE;
      },
      get OK_200_STATUS_MESSAGE() {
        return OK_200_STATUS_MESSAGE;
      },
      get REQUEST_TIMEOUT_408_STATUS_MESSAGE() {
        return REQUEST_TIMEOUT_408_STATUS_MESSAGE;
      },
      get SEE_OTHER_303_STATUS_MESSAGE() {
        return SEE_OTHER_303_STATUS_MESSAGE;
      },
      get SERVICE_UNAVAILABLE_503_STATUS_MESSAGE() {
        return SERVICE_UNAVAILABLE_503_STATUS_MESSAGE;
      },
      get TOO_MANY_REQUESTS_429_STATUS_MESSAGE() {
        return TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      },
      get UNAUTHORIZED_401_STATUS_MESSAGE() {
        return UNAUTHORIZED_401_STATUS_MESSAGE;
      },
      get ZERO_0_STATUS_MESSAGE() {
        return ZERO_0_STATUS_MESSAGE;
      },
      get default() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BOOLEAN() {
        return BOOLEAN;
      },
      get DATA() {
        return DATA;
      },
      get DEFAULT() {
        return DEFAULT;
      },
      get DOUBLE_SPACE() {
        return DOUBLE_SPACE;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get ENVIRONMENT() {
        return ENVIRONMENT;
      },
      get ERROR() {
        return ERROR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get NUMBER() {
        return NUMBER;
      },
      get PACKAGE_JSON() {
        return PACKAGE_JSON;
      },
      get STRING() {
        return STRING;
      },
      get ZERO() {
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
    var FUNCTION = "function";
    var ENVIRONMENT = "ENVIRONMENT";
    var EMPTY_STRING = "";
    var DOUBLE_SPACE = "  ";
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get augment() {
        return augment;
      },
      get back() {
        return back;
      },
      get backwardsEvery() {
        return backwardsEvery;
      },
      get backwardsFind() {
        return backwardsFind;
      },
      get backwardsFindIndex() {
        return backwardsFindIndex;
      },
      get backwardsForEach() {
        return backwardsForEach;
      },
      get backwardsReduce() {
        return backwardsReduce;
      },
      get backwardsSome() {
        return backwardsSome;
      },
      get clear() {
        return clear;
      },
      get combine() {
        return combine;
      },
      get compare() {
        return compare;
      },
      get compress() {
        return compress;
      },
      get concat() {
        return concat;
      },
      get copy() {
        return copy;
      },
      get correlate() {
        return correlate;
      },
      get default() {
        return _default;
      },
      get eighth() {
        return eighth;
      },
      get eighthLast() {
        return eighthLast;
      },
      get extract() {
        return extract;
      },
      get fifth() {
        return fifth;
      },
      get fifthLast() {
        return fifthLast;
      },
      get filter() {
        return filter;
      },
      get find() {
        return find;
      },
      get first() {
        return first;
      },
      get firstLast() {
        return firstLast;
      },
      get forwardsEvery() {
        return forwardsEvery;
      },
      get forwardsFind() {
        return forwardsFind;
      },
      get forwardsFindIndex() {
        return forwardsFindIndex;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get forwardsReduce() {
        return forwardsReduce;
      },
      get forwardsSome() {
        return forwardsSome;
      },
      get fourth() {
        return fourth;
      },
      get fourthLast() {
        return fourthLast;
      },
      get front() {
        return front;
      },
      get head() {
        return head;
      },
      get last() {
        return last;
      },
      get match() {
        return match;
      },
      get merge() {
        return merge;
      },
      get ninth() {
        return ninth;
      },
      get ninthLast() {
        return ninthLast;
      },
      get patch() {
        return patch;
      },
      get prune() {
        return prune;
      },
      get push() {
        return push;
      },
      get replace() {
        return replace;
      },
      get resolve() {
        return resolve;
      },
      get reverse() {
        return reverse;
      },
      get second() {
        return second;
      },
      get secondLast() {
        return secondLast;
      },
      get separate() {
        return separate;
      },
      get seventh() {
        return seventh;
      },
      get seventhLast() {
        return seventhLast;
      },
      get sixth() {
        return sixth;
      },
      get sixthLast() {
        return sixthLast;
      },
      get splice() {
        return splice;
      },
      get tail() {
        return tail;
      },
      get tenth() {
        return tenth;
      },
      get third() {
        return third;
      },
      get thirdLast() {
        return thirdLast;
      },
      get unshift() {
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
    function sixth(array) {
      return array[5];
    }
    function seventh(array) {
      return array[6];
    }
    function eighth(array) {
      return array[7];
    }
    function ninth(array) {
      return array[8];
    }
    function tenth(array) {
      return array[9];
    }
    function firstLast(array) {
      return array[array.length - 1];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function sixthLast(array) {
      return array[array.length - 6];
    }
    function seventhLast(array) {
      return array[array.length - 7];
    }
    function eighthLast(array) {
      return array[array.length - 8];
    }
    function ninthLast(array) {
      return array[array.length - 9];
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
    function push(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function unshift(arrayA, arrayB) {
      Array.prototype.unshift.apply(arrayA, arrayB);
    }
    function concat(arrayA, elementOrArray2) {
      var arrayB = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(arrayA, arrayB);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(arrayA, arrayB) {
      var start = 0, deleteCount = arrayB.length;
      splice(arrayA, start, deleteCount, arrayB);
    }
    function merge(arrayA, arrayB) {
      Array.prototype.push.apply(arrayA, arrayB);
    }
    function match(arrayA, arrayB, callback) {
      var matches = false;
      var arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        matches = arrayA.every(function(elementA, index) {
          var elementB = arrayB[index], passed = callback(elementA, elementB, index);
          if (passed) {
            return true;
          }
        });
      }
      return matches;
    }
    function compare(arrayA, arrayB, callback) {
      var coupled = false;
      var arrayALength = arrayA.length, arrayBLength = arrayB.length;
      if (arrayALength === arrayBLength) {
        arrayB = _to_consumable_array(arrayB);
        coupled = arrayA.every(function(elementA, index) {
          var elementB = extract(arrayB, function(elementB2) {
            var result = callback(elementA, elementB2);
            if (result) {
              return true;
            }
          }) || null;
          if (elementB !== null) {
            return true;
          }
        });
      }
      return coupled;
    }
    function correlate(arrayA, arrayB, callback) {
      arrayB = _to_consumable_array(arrayB);
      var correlates = arrayA.every(function(elementA) {
        var elementB = extract(arrayB, function(elementB2) {
          var result = callback(elementA, elementB2);
          if (result) {
            return true;
          }
        }) || null;
        if (elementB !== null) {
          return true;
        }
      });
      return correlates;
    }
    function resolve(arrayA, arrayB, callback) {
      var _loop = function() {
        var arrayALength2 = arrayA.length;
        if (arrayALength2 === 0) {
          return "break";
        }
        var resolved2 = false;
        arrayA.forEach(function(elementA) {
          var passed = callback(elementA);
          if (passed) {
            var elementB = elementA;
            arrayB.push(elementB);
            resolved2 = true;
          }
        });
        if (!resolved2) {
          return "break";
        }
        filter(arrayA, function(elementA) {
          var arrayBIncludesElementA = arrayB.includes(elementA);
          if (!arrayBIncludesElementA) {
            return true;
          }
        });
      };
      var resolved;
      arrayA = _to_consumable_array(arrayA);
      for (; ; ) {
        var _ret = _loop();
        if (_ret === "break")
          break;
      }
      var arrayALength = arrayA.length;
      resolved = arrayALength === 0;
      return resolved;
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
    function splice(arrayA, start) {
      var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, arrayB = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
      var args = [
        start,
        deleteCount
      ].concat(_to_consumable_array(arrayB)), deletedElements = Array.prototype.splice.apply(arrayA, args);
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
        var elementB = array[index1];
        for (var index2 = length - 1; index2 > index1; index2--) {
          var elementA = array[index2], passed = callback(elementA, elementB);
          if (!passed) {
            var start = index2, deleteCount = 1;
            array.splice(start, deleteCount);
          }
        }
        index1++;
        length = array.length;
      }
    }
    function combine(arrayA, arrayB, callback) {
      var array = _to_consumable_array(arrayA).concat(_to_consumable_array(arrayB));
      compress(array, callback);
      return array;
    }
    function reverse(array) {
      array = _to_consumable_array(array).reverse();
      return array;
    }
    function augment(arrayA, arrayB, callback) {
      arrayB.forEach(function(element, index) {
        var passed = callback(element, index);
        if (passed) {
          arrayA.push(element);
        }
      });
    }
    function separate(array, arrayA, arrayB, callback) {
      array.forEach(function(element, index) {
        var passed = callback(element, index);
        passed ? arrayA.push(element) : arrayB.push(element);
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
    function forwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    function backwardsFindIndex(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], passed = callback(element, index);
        if (passed) {
          return index;
        }
      }
      return -1;
    }
    var _default = {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      ninth,
      firstLast,
      secondLast,
      thirdLast,
      fourthLast,
      fifthLast,
      sixthLast,
      seventhLast,
      eighthLast,
      ninthLast,
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
      match,
      compare,
      correlate,
      resolve,
      find,
      replace,
      splice,
      filter,
      prune,
      extract,
      patch,
      compress,
      combine,
      reverse,
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
      backwardsForEach,
      forwardsFindIndex,
      backwardsFindIndex
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get bottommostNameFromPath() {
        return bottommostNameFromPath;
      },
      get combinePaths() {
        return combinePaths;
      },
      get concatenatePaths() {
        return concatenatePaths;
      },
      get default() {
        return _default;
      },
      get isPathAbsolutePath() {
        return isPathAbsolutePath;
      },
      get isPathName() {
        return isPathName;
      },
      get isPathRelativePath() {
        return isPathRelativePath;
      },
      get isPathTopmostName() {
        return isPathTopmostName;
      },
      get isTopmostNameInAbsolutePath() {
        return isTopmostNameInAbsolutePath;
      },
      get pathWithoutBottommostNameFromPath() {
        return pathWithoutBottommostNameFromPath;
      },
      get pathWithoutTopmostDirectoryNameFromPath() {
        return pathWithoutTopmostDirectoryNameFromPath;
      },
      get topmostDirectoryNameFromPath() {
        return topmostDirectoryNameFromPath;
      },
      get topmostDirectoryPathFromPath() {
        return topmostDirectoryPathFromPath;
      }
    });
    var _constants = require_constants3();
    var _array = require_array2();
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
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var concatenatedPath;
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      concatenatedPath = "".concat(path, "/").concat(relativePath);
      var remainingAArgumentsLength = remainingArguments.length;
      if (remainingAArgumentsLength > 0) {
        var _$path = concatenatedPath, _$relativePath = remainingArguments.shift();
        concatenatedPath = concatenatePaths.apply(void 0, [
          _$path,
          _$relativePath
        ].concat(_to_consumable_array(remainingArguments)));
      }
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get hostnameFromHost() {
        return hostnameFromHost;
      },
      get overwrite() {
        return overwrite;
      },
      get portFromHost() {
        return portFromHost;
      },
      get queryStringFromQuery() {
        return queryStringFromQuery;
      },
      get secureFromHost() {
        return secureFromHost;
      },
      get underwrite() {
        return underwrite;
      },
      get urlFromHostURIAndQuery() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get indexOf() {
        return indexOf;
      },
      get strcmp() {
        return strcmp;
      },
      get strlen() {
        return strlen;
      },
      get substring() {
        return substring;
      }
    });
    var _constants = require_constants3();
    function strlen(string) {
      var length = 0;
      var iterator = string[Symbol.iterator]();
      var character = iterator.next();
      while (!character.done) {
        character = iterator.next();
        length++;
      }
      return length;
    }
    function strcmp(stringA, stringB) {
      var difference;
      var iteratorA = stringA[Symbol.iterator](), iteratorB = stringB[Symbol.iterator]();
      var characterA = iteratorA.next(), characterB = iteratorB.next(), codePointA, codePointB;
      while (true) {
        codePointA = characterA.value ? characterA.value.codePointAt(0) : 0;
        codePointB = characterB.value ? characterB.value.codePointAt(0) : 0;
        difference = codePointB - codePointA;
        if (difference !== 0) {
          break;
        }
        if (characterA.done || characterB.done) {
          break;
        }
        characterA = iteratorA.next();
        characterB = iteratorB.next();
      }
      return difference;
    }
    function indexOf(string, searchString) {
      var index = -1, found = false;
      var searchStringLength = strlen(searchString);
      if (searchStringLength > 0) {
        var character;
        var iterator = string[Symbol.iterator](), searchIterator = searchString[Symbol.iterator](), searchCharacter = searchIterator.next();
        character = iterator.next();
        index++;
        while (!character.done) {
          if (character.value === searchCharacter.value) {
            var start = index, end = start + searchStringLength, subString = substring(string, start, end), difference = strcmp(subString, searchString);
            if (difference === 0) {
              found = true;
              break;
            }
          }
          character = iterator.next();
          index++;
        }
      }
      if (!found) {
        index = -1;
      }
      return index;
    }
    function substring(string, start) {
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
      var index = 0;
      var iterator = string[Symbol.iterator](), characters = [];
      var character = iterator.next();
      while (!character.done) {
        if (index === end) {
          break;
        }
        if (index >= start) {
          characters.push(character.value);
        }
        index++;
        character = iterator.next();
      }
      var _$substring = characters.join(_constants.EMPTY_STRING);
      return _$substring;
    }
    var _default = {
      strcmp,
      strlen,
      indexOf,
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get migrate() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get backwardsForEach() {
        return backwardsForEach;
      },
      get default() {
        return _default;
      },
      get eventually() {
        return eventually;
      },
      get forEach() {
        return forEach;
      },
      get forwardsForEach() {
        return forwardsForEach;
      },
      get repeatedly() {
        return repeatedly;
      },
      get sequence() {
        return sequence;
      },
      get whilst() {
        return whilst;
      }
    });
    function whilst(operation, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count;
        operation(next, done, context, index);
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
      if (length === 0) {
        done();
        return;
      }
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
      if (length === 0) {
        done();
        return;
      }
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get get() {
        return get;
      },
      get post() {
        return post;
      },
      get request() {
        return request;
      }
    });
    var _constants = require_constants3();
    var _methods = require_methods();
    var _contentTypes = require_contentTypes();
    var _headers = require_headers();
    var _http = require_http();
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function get(host, uri, query, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
      underwriteAcceptHeader(headers, accept);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function post(host, uri, query, content, headers, responseType, callback) {
      if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.FUNCTION) {
        callback = headers;
        responseType = null;
        headers = {};
      }
      if ((typeof responseType === "undefined" ? "undefined" : _type_of(responseType)) === _constants.FUNCTION) {
        callback = responseType;
        if ((typeof headers === "undefined" ? "undefined" : _type_of(headers)) === _constants.STRING) {
          responseType = headers;
          headers = {};
        } else {
          responseType = null;
        }
      }
      var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
      underwriteAcceptHeader(headers, accept);
      underwriteContentTypeHeader(headers, contentType);
      request(host, uri, query, method, content, headers, responseType, callback);
    }
    function request(host, uri, query, method, content, headers, responseType, callback) {
      var url = (0, _http.urlFromHostURIAndQuery)(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
        var json = content, jsonString = JSON.stringify(json);
        content = jsonString;
      }
      if (responseType !== null) {
        Object.assign(xmlHttpRequest, {
          responseType
        });
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ajaxUtilities() {
        return _ajax.default;
      },
      get arrayUtilities() {
        return _array.default;
      },
      get asynchronousUtilities() {
        return _asynchronous.default;
      },
      get characters() {
        return _characters.default;
      },
      get contentTypes() {
        return _contentTypes.default;
      },
      get encodings() {
        return _encodings.default;
      },
      get headers() {
        return _headers.default;
      },
      get httpUtilities() {
        return _http.default;
      },
      get keyCodes() {
        return _keyCodes.default;
      },
      get levels() {
        return _levels.default;
      },
      get methods() {
        return _methods.default;
      },
      get pathUtilities() {
        return _path.default;
      },
      get statusCodes() {
        return _statusCodes.default;
      },
      get statusMessages() {
        return _statusMessages.default;
      },
      get stringUtilities() {
        return _string.default;
      },
      get versionUtilities() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get combineRules() {
        return _combineRules.default;
      },
      get createDispatcher() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ADD_TODO() {
        return ADD_TODO;
      },
      get SET_VISIBILITY_FILTER() {
        return SET_VISIBILITY_FILTER;
      },
      get SHOW_ACTIVE() {
        return SHOW_ACTIVE;
      },
      get SHOW_ALL() {
        return SHOW_ALL;
      },
      get SHOW_COMPLETED() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var TodoListItem = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItem2, Component2);
      function TodoListItem2() {
        _class_call_check(this, TodoListItem2);
        return _call_super(this, TodoListItem2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var TodoListItems = /* @__PURE__ */ function(Component2) {
      _inherits(TodoListItems2, Component2);
      function TodoListItems2() {
        _class_call_check(this, TodoListItems2);
        return _call_super(this, TodoListItems2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Component = _reaction.React.Component;
    var TodoApp = /* @__PURE__ */ function(Component2) {
      _inherits(TodoApp2, Component2);
      function TodoApp2() {
        _class_call_check(this, TodoApp2);
        return _call_super(this, TodoApp2, arguments);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdENsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC9jbGFzcy5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3V0aWxpdGllcy9zYW5pdGlpc2UuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0RE9NLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdXguanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIvdG9kb3MuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvcmVkdWNlci92aXNpYmlsaXR5RmlsdGVyLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL3JlZHVjZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvYWRkVG9kby5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIiwgInNyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXIuanMiLCAic3JjL2V4YW1wbGUvcmVkdXhBcHAuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbGV2ZWxzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL21ldGhvZHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvaGVhZGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9rZXlDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9lbmNvZGluZ3MuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY2hhcmFjdGVycy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNDb2Rlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jb250ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvc3RhdHVzTWVzc2FnZXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvcGF0aC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvaHR0cC5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy92ZXJzaW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvdXRpbGl0aWVzL2FqYXguanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvY29tYmluZVJ1bGVzLmpzIiwgInNyYy9jcmVhdGVEaXNwYXRjaGVyLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9ydWxlL2FkZFRvZG8uanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL3J1bGUvc2V0VmlzaWJpbGl0eUZpbHRlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvcnVsZS5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvZGlzcGF0Y2hlci5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L2ZpbHRlckxpbmsuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9mb290ZXIuanMiLCAic3JjL2V4YW1wbGUvaW5mZXJlbmNlQXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtLmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0xpc3RJdGVtcy5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAvY29tcG9uZW50L3RvZG9MaXN0LmpzIiwgInNyYy9leGFtcGxlL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcC5qcyIsICJzcmMvZXhhbXBsZS9pbmZlcmVuY2VBcHAuanMiLCAic3JjL2V4YW1wbGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFByb3BzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzO1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGlsZCgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbikgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaXJzdENoaWxkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuXG5mdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0F0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzc2VzKGNsYXNzTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkge1xuICByZXR1cm4gbnVsbDsgIC8vL1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRTdHlsZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uLFxuICBvZmYsXG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuaW1wb3J0IHJlYWN0RWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3JlYWN0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlLCAgLy8vXG4gICAgICAgICAgbmV3U3RhdGUgPSBzdGF0ZTsgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlZHJhdyh1cGRhdGUpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgbnVsbDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVkcmF3KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vdmlydHVhbERPTUVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgQ29udGFpbmVyRWxlbWVudChwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgUkVGID0gXCJyZWZcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEhUTUxfRk9SID0gXCJodG1sRm9yXCI7XG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRSA9IFwiY2xhc3NOYW1lXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgQk9PTEVBTiwgQ0xBU1NfTkFNRSwgSFRNTF9GT1IsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7IHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7IH0gLy8vXG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb24sXG4gIG9mZixcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNoaWxkQ29udGV4dFNldC5jYWxsKHRoaXMsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICB9XG4gXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuXG5pbXBvcnQgU1ZHRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L3N2Z1wiO1xuaW1wb3J0IEhUTUxFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlDaGlsZHJlbiwgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Nhbml0aWlzZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50KSB7XG4gICAgY2hpbGRyZW4gPSBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgY2hpbGRyZW5cbiAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgIG5ldyBTVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MocHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnQ7IC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gZmxhdHRlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZW1vdmVGYWxzZXlDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gUmVhY3RDb21wb25lbnRTdWJDbGFzcztcblxuICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MpOyAvLy9cblxuICBpZiAoUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZTsgLy8vXG5cbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gQ29udGFpbmVyRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RET00gfSBmcm9tIFwiLi9yZWFjdERPTVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKHJlZHVjZXJzKSA9PiB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKSxcbiAgICAgICAgICBuZXh0U3RhdGUgPSBrZXlzLnJlZHVjZSgobmV4dFN0YXRlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuXG4gICAgICAgICAgICBuZXh0U3RhdGVba2V5XSA9IHJlZHVjZXIoc3RhdGVba2V5XSwgYWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlO1xuICB9O1xufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxMID0gXCJTSE9XX0FMTFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSVZFID0gXCJTSE9XX0FDVElWRVwiO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9UT0RPID0gXCJUT0dHTEVfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NUExFVEVEID0gXCJTSE9XX0NPTVBMRVRFRFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPLCBUT0dHTEVfVE9ETyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3Moc3RhdGUgPSBbXSwgYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHRvZG9zID0gc3RhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICB0b2RvcyA9IGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRPR0dMRV9UT0RPIDpcbiAgICAgIHRvZG9zID0gdG9nZ2xlVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gdG9kb3M7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9Ub2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQsIHRleHQgfSA9IGFjdGlvbixcbiAgICAgICAgY29tcGxldGVkID0gZmFsc2UsXG4gICAgICAgIHRvZG8gPSB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWRcbiAgICAgICAgfTtcblxuICB0b2RvcyA9IFtcbiAgICAuLi50b2RvcyxcbiAgICB0b2RvXG4gIF07XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKSB7XG4gIGNvbnN0IHsgaWQgfSA9IGFjdGlvbjtcblxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgbGV0IHsgY29tcGxldGVkIH0gPSB0b2RvO1xuXG4gICAgICBjb21wbGV0ZWQgPSAhY29tcGxldGVkO1xuXG4gICAgICB0b2RvLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9kbztcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9zO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVyKHN0YXRlID0gU0hPV19BTEwsIGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIDpcbiAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gYWN0aW9uO1xuXG4gICAgICBzdGF0ZSA9IHZpc2liaWxpdHlGaWx0ZXI7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcIi4vcmVkdXhcIjtcblxuaW1wb3J0IHRvZG9zIGZyb20gXCIuL3JlZHVjZXIvdG9kb3NcIjtcbmltcG9ydCB2aXNpYmlsaXR5RmlsdGVyIGZyb20gXCIuL3JlZHVjZXIvdmlzaWJpbGl0eUZpbHRlclwiO1xuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3MsXG4gIHZpc2liaWxpdHlGaWx0ZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpZCA9IDAsXG4gICAgaW5wdXRET01FbGVtZW50O1xuXG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RvcmUgfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBBRERfVE9ETyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gaW5wdXRET01FbGVtZW50LnZhbHVlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZCsrO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgQWRkIHRvZG9cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRUb2RvO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvTGlzdEl0ZW0gZnJvbSBcIi4vdG9kb0xpc3RJdGVtXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQsIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzdGF0ZSxcbiAgICAgICAgICB2aXNpYmxlVG9kb3MgPSBnZXRWaXNpYmxlVG9kb3ModG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpLFxuICAgICAgICAgIGl0ZW1zID0gdmlzaWJsZVRvZG9zLm1hcCgodmlzaWJsZVRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHRleHQsIGNvbXBsZXRlZCB9ID0gdmlzaWJsZVRvZG87XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgPFRvZG9MaXN0SXRlbSB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17Y29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gVE9HR0xFX1RPRE8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpdGVtcztcbiAgfVxufVxuXG5jb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIHZpc2liaWxpdHlGaWx0ZXIpID0+IHtcbiAgbGV0IHZpc2libGVUb2RvcztcblxuICBzd2l0Y2ggKHZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICBjYXNlIFNIT1dfQUxMOlxuICAgICAgdmlzaWJsZVRvZG9zID0gdG9kb3M7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICBhY3RpdmUgPSAhY29tcGxldGVkO1xuXG4gICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTSE9XX0NPTVBMRVRFRDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbXBsZXRlZCB9ID0gdG9kbztcblxuICAgICAgICByZXR1cm4gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgVG9kb0xpc3RJdGVtcyBmcm9tIFwiLi90b2RvTGlzdEl0ZW1zXCI7XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHByb3BzLCBjb250ZXh0KSA9PlxuXG4gIDx1bD5cbiAgICA8VG9kb0xpc3RJdGVtcyAvPlxuICA8L3VsPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB7XG4gICAgICAgICAgICBzdG9yZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4gY2hpbGRDb250ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcIi4vcmVkdXhBcHAvcmVkdXhcIjtcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdXhBcHAvcmVkdWNlclwiO1xuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3RvZG9BcHBcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiLi9yZWR1eEFwcC9jb21wb25lbnQvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdXhBcHAoKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciksXG4gICAgICAgIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG5cbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRSQUNFX0xFVkVMID0gXCJ0cmFjZVwiO1xuZXhwb3J0IGNvbnN0IERFQlVHX0xFVkVMID0gXCJkZWJ1Z1wiO1xuZXhwb3J0IGNvbnN0IElORk9fTEVWRUwgPSBcImluZm9cIjtcbmV4cG9ydCBjb25zdCBXQVJOSU5HX0xFVkVMID0gXCJ3YXJuaW5nXCI7XG5leHBvcnQgY29uc3QgRVJST1JfTEVWRUwgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgRkFUQUxfTEVWRUwgPSBcImZhdGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVFJBQ0VfTEVWRUwsXG4gIERFQlVHX0xFVkVMLFxuICBJTkZPX0xFVkVMLFxuICBXQVJOSU5HX0xFVkVMLFxuICBFUlJPUl9MRVZFTCxcbiAgRkFUQUxfTEVWRUxcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVRfTUVUSE9EID0gXCJHRVRcIjtcbmV4cG9ydCBjb25zdCBQT1NUX01FVEhPRCA9IFwiUE9TVFwiO1xuZXhwb3J0IGNvbnN0IFBBVENIX01FVEhPRCA9IFwiUEFUQ0hcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBQQVRDSF9NRVRIT0QsXG4gIERFTEVURV9NRVRIT0QsXG4gIE9QVElPTlNfTUVUSE9EXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgUFJBR01BX0hFQURFUiA9IFwicHJhZ21hXCI7XG5leHBvcnQgY29uc3QgQUNDRVBUX0hFQURFUiA9IFwiYWNjZXB0XCI7XG5leHBvcnQgY29uc3QgTE9DQVRJT05fSEVBREVSID0gXCJsb2NhdGlvblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUdFTlRfSEVBREVSID0gXCJ1c2VyLWFnZW50XCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwiY29udGVudC10eXBlXCI7XG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBDQUNIRV9DT05UUk9MX0hFQURFUiA9IFwiY2FjaGUtY29udHJvbFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfTEVOR1RIX0hFQURFUiA9IFwiY29udGVudC1sZW5ndGhcIjtcbmV4cG9ydCBjb25zdCBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIgPSBcInRyYW5zZmVyLWVuY29kaW5nXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9ESVNQT1NJVElPTl9IRUFERVIgPSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW5cIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctbWV0aG9kc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1hbGxvdy1oZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfUkVRVUVTVF9NRVRIT0RfSEVBREVSID0gXCJhY2Nlc3MtY29udHJvbC1yZXF1ZXN0LW1ldGhvZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSQUdNQV9IRUFERVIsXG4gIEFDQ0VQVF9IRUFERVIsXG4gIExPQ0FUSU9OX0hFQURFUixcbiAgVVNFUl9BR0VOVF9IRUFERVIsXG4gIENPTlRFTlRfVFlQRV9IRUFERVIsXG4gIEFVVEhPUklaQVRJT05fSEVBREVSLFxuICBDQUNIRV9DT05UUk9MX0hFQURFUixcbiAgQ09OVEVOVF9MRU5HVEhfSEVBREVSLFxuICBUUkFOU0ZFUl9FTkNPRElOR19IRUFERVIsXG4gIENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19PUklHSU5fSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9BTExPV19NRVRIT0RTX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfSEVBREVSU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUlxufTsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfS0VZX0NPREUgPSA5O1xuZXhwb3J0IGNvbnN0IFNISUZUX0tFWV9DT0RFID0gMTY7XG5leHBvcnQgY29uc3QgRU5URVJfS0VZX0NPREUgPSAxMztcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbmV4cG9ydCBjb25zdCBERUxFVEVfS0VZX0NPREUgPSA0NjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfS0VZX0NPREUgPSA4O1xuZXhwb3J0IGNvbnN0IEFSUk9XX1VQX0tFWV9DT0RFID0gMzg7XG5leHBvcnQgY29uc3QgQVJST1dfRE9XTl9LRVlfQ09ERSA9IDQwO1xuZXhwb3J0IGNvbnN0IEFSUk9XX0xFRlRfS0VZX0NPREUgPSAzNztcbmV4cG9ydCBjb25zdCBBUlJPV19SSUdIVF9LRVlfQ09ERSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRBQl9LRVlfQ09ERSxcbiAgU0hJRlRfS0VZX0NPREUsXG4gIEVOVEVSX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZX0NPREUsXG4gIERFTEVURV9LRVlfQ09ERSxcbiAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgQVJST1dfRE9XTl9LRVlfQ09ERSxcbiAgQVJST1dfTEVGVF9LRVlfQ09ERSxcbiAgQVJST1dfUklHSFRfS0VZX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVVEY4X0VOQ09ESU5HID0gXCJ1dGY4XCI7XG5leHBvcnQgY29uc3QgVVRGXzhfRU5DT0RJTkcgPSBcInV0Zi04XCI7XG5leHBvcnQgY29uc3QgQkFTRTY0X0VOQ09ESU5HID0gXCJiYXNlNjRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBVVEY4X0VOQ09ESU5HLFxuICBVVEZfOF9FTkNPRElORyxcbiAgQkFTRTY0X0VOQ09ESU5HXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVVBfQ0hBUkFDVEVSID0gXCJcdTAwMWJbQVwiO1xuZXhwb3J0IGNvbnN0IEVUWF9DSEFSQUNURVIgPSBcIlxcdTAwMDNcIjtcbmV4cG9ydCBjb25zdCBCQVJfQ0hBUkFDVEVSID0gXCJ8XCI7XG5leHBvcnQgY29uc3QgSEFUX0NIQVJBQ1RFUiA9IFwiXlwiO1xuZXhwb3J0IGNvbnN0IFBMVVNfQ0hBUkFDVEVSID0gXCIrXCI7XG5leHBvcnQgY29uc3QgREFTSF9DSEFSQUNURVIgPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBET1dOX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0JcIjtcbmV4cG9ydCBjb25zdCBMRUZUX0NIQVJBQ1RFUiA9IFwiXHUwMDFiW0RcIjtcbmV4cG9ydCBjb25zdCBSSUdIVF9DSEFSQUNURVIgPSBcIlx1MDAxYltDXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IERPTExBUl9DSEFSQUNURVIgPSBcIiRcIjtcbmV4cG9ydCBjb25zdCBDVFJMX0NfQ0hBUkFDVEVSID0gXCJeQ1wiO1xuZXhwb3J0IGNvbnN0IEVTQ0FQRV9DSEFSQUNURVIgPSBcIlxcdTAwMWJcIjtcbmV4cG9ydCBjb25zdCBBU1RFUklTS19DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRF9DSEFSQUNURVIgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBCQUNLVElDS19ERUxJTUlURVIgPSBcImBcIjtcbmV4cG9ydCBjb25zdCBORVdfTElORV9DSEFSQUNURVIgPSBcIlxcblwiO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBCQUNLU0xBU0hfQ0hBUkFDVEVSID0gXCJcXFxcXCI7XG5leHBvcnQgY29uc3QgQkFDS1NQQUNFX0NIQVJBQ1RFUiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTI3KTtcbmV4cG9ydCBjb25zdCBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiP1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiKFwiO1xuZXhwb3J0IGNvbnN0IENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIilcIjtcbmV4cG9ydCBjb25zdCBDQVJSSUFHRV9SRVRVUk5fQ0hBUkFDVEVSID0gXCJcXHJcIjtcbmV4cG9ydCBjb25zdCBFWENMQU1BVElPTl9NQVJLX0NIQVJBQ1RFUiA9IFwiIVwiO1xuZXhwb3J0IGNvbnN0IE9QRU5JTkdfQ1VSTFlfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIntcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSID0gXCJ9XCI7XG5leHBvcnQgY29uc3QgT1BFTklOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVIgPSBcIltcIjtcbmV4cG9ydCBjb25zdCBDTE9TSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUiA9IFwiXVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVQX0NIQVJBQ1RFUixcbiAgRVRYX0NIQVJBQ1RFUixcbiAgQkFSX0NIQVJBQ1RFUixcbiAgSEFUX0NIQVJBQ1RFUixcbiAgUExVU19DSEFSQUNURVIsXG4gIERBU0hfQ0hBUkFDVEVSLFxuICBET1dOX0NIQVJBQ1RFUixcbiAgTEVGVF9DSEFSQUNURVIsXG4gIFJJR0hUX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgRE9MTEFSX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgRVNDQVBFX0NIQVJBQ1RFUixcbiAgQVNURVJJU0tfQ0hBUkFDVEVSLFxuICBXSUxEQ0FSRF9DSEFSQUNURVIsXG4gIEJBQ0tUSUNLX0RFTElNSVRFUixcbiAgTkVXX0xJTkVfQ0hBUkFDVEVSLFxuICBBTVBFUlNBTkRfQ0hBUkFDVEVSLFxuICBCQUNLU0xBU0hfQ0hBUkFDVEVSLFxuICBCQUNLU1BBQ0VfQ0hBUkFDVEVSLFxuICBRVUVTVElPTl9NQVJLX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIE9QRU5JTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENMT1NJTkdfQlJBQ0tFVF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBDTE9TSU5HX0NVUkxZX0JSQUNLRVRfQ0hBUkFDVEVSLFxuICBPUEVOSU5HX1NRVUFSRV9CUkFDS0VUX0NIQVJBQ1RFUixcbiAgQ0xPU0lOR19TUVVBUkVfQlJBQ0tFVF9DSEFSQUNURVJcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPXzBfU1RBVFVTX0NPREUgPSAwO1xuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfQ09ERSA9IDIwMDtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX0NPREUgPSAzMDI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUgPSAyMDE7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSA9IDMwMztcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19DT0RFID0gNDAzO1xuZXhwb3J0IGNvbnN0IE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUgPSA0MDQ7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUgPSAyMDQ7XG5leHBvcnQgY29uc3QgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19DT0RFID0gNTAyO1xuZXhwb3J0IGNvbnN0IEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSA9IDQwMDtcbmV4cG9ydCBjb25zdCBVTkFVVEhPUklaRURfNDAxX1NUQVRVU19DT0RFID0gNDAxO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX0NPREUgPSA0MDg7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFID0gNDI5O1xuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfVU5BVkFJTEFCTEVfNTAzX1NUQVRVU19DT0RFID0gNTAzO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREUgPSA1MDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgWkVST18wX1NUQVRVU19DT0RFLFxuICBPS18yMDBfU1RBVFVTX0NPREUsXG4gIEZPVU5EXzMwMl9TVEFUVVNfQ09ERSxcbiAgQ1JFQVRFRF8yMDFfU1RBVFVTX0NPREUsXG4gIFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUsXG4gIEZPUkJJRERFTl80MDNfU1RBVFVTX0NPREUsXG4gIE5PVF9GT1VORF80MDRfU1RBVFVTX0NPREUsXG4gIE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFLFxuICBCQURfR0FURVdBWV81MDJfU1RBVFVTX0NPREUsXG4gIEJBRF9SRVFVRVNUXzQwMF9TVEFUVVNfQ09ERSxcbiAgVU5BVVRIT1JJWkVEXzQwMV9TVEFUVVNfQ09ERSxcbiAgUkVRVUVTVF9USU1FT1VUXzQwOF9TVEFUVVNfQ09ERSxcbiAgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19DT0RFLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfQ09ERSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUgPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbDsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUgPSBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9PQ1RFVF9TVFJFQU1fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9YX1dXV19GT1JNX0VOQ09ERURfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbmV4cG9ydCBjb25zdCBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLThcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBURVhUX0hUTUxfQ09OVEVOVF9UWVBFLFxuICBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gIFRFWFRfSFRNTF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fT0NURVRfU1RSRUFNX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSxcbiAgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19NRVNTQUdFID0gXCJcIjtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX01FU1NBR0UgPSBcIk9LXCI7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFID0gXCJGb3VuZFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFID0gXCJDcmVhdGVkXCI7XG5leHBvcnQgY29uc3QgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VlIG90aGVyXCI7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSA9IFwiRm9yYmlkZGVuXCI7XG5leHBvcnQgY29uc3QgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm90IGZvdW5kXCI7XG5leHBvcnQgY29uc3QgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UgPSBcIk5vIGNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBCQURfR0FURVdBWV81MDJfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCBnYXRld2F5XCI7XG5leHBvcnQgY29uc3QgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFID0gXCJCYWQgcmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UgPSBcIlVuYXV0aG9yaXplZFwiO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UgPSBcIlJlcXVlc3QgdGltZW91dFwiO1xuZXhwb3J0IGNvbnN0IFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSA9IFwiVG9vIG1hbnkgcmVxdWVzdHNcIjtcbmV4cG9ydCBjb25zdCBTRVJWSUNFX1VOQVZBSUxBQkxFXzUwM19TVEFUVVNfTUVTU0FHRSA9IFwiU2VydmljZSB1bmF2YWlsYWJsZVwiO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0UgPSBcIkludGVybmFsIHNlcnZlciBlcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFpFUk9fMF9TVEFUVVNfTUVTU0FHRSxcbiAgT0tfMjAwX1NUQVRVU19NRVNTQUdFLFxuICBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UsXG4gIENSRUFURURfMjAxX1NUQVRVU19NRVNTQUdFLFxuICBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFLFxuICBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFLFxuICBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFLFxuICBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX0dBVEVXQVlfNTAyX1NUQVRVU19NRVNTQUdFLFxuICBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UsXG4gIFVOQVVUSE9SSVpFRF80MDFfU1RBVFVTX01FU1NBR0UsXG4gIFJFUVVFU1RfVElNRU9VVF80MDhfU1RBVFVTX01FU1NBR0UsXG4gIFRPT19NQU5ZX1JFUVVFU1RTXzQyOV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VSVklDRV9VTkFWQUlMQUJMRV81MDNfU1RBVFVTX01FU1NBR0UsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBaRVJPID0gXCIwXCI7XG5leHBvcnQgY29uc3QgREFUQSA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVCA9IFwiZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UID0gXCJFTlZJUk9OTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgRE9VQkxFX1NQQUNFID0gXCIgIFwiO1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfSlNPTiA9IFwicGFja2FnZS5qc29uXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoKGFycmF5KSB7IHJldHVybiBhcnJheVs1XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gc2V2ZW50aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGVpZ2h0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbN107IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoKGFycmF5KSB7IHJldHVybiBhcnJheVs4XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGVudGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzldOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAzXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZm91cnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpeHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNl07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldmVudGhMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSA3XTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZWlnaHRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pbnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gOV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGFpbChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKGFycmF5Lmxlbmd0aCAtIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9udChhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoMCwgTWF0aC5tYXgoMSwgYXJyYXkubGVuZ3RoIC0gMSkpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5QSwgYXJyYXlCKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5QSwgYXJyYXlCKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zaGlmdChhcnJheUEsIGFycmF5QikgeyBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShhcnJheUEsIGFycmF5Qik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdChhcnJheUEsIGVsZW1lbnRPckFycmF5Mikge1xuICBjb25zdCBhcnJheUIgPSAoZWxlbWVudE9yQXJyYXkyIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9yQXJyYXkyIDpcbiAgICAgICAgICAgICAgICAgICAgIFsgZWxlbWVudE9yQXJyYXkyIF07XG4gIFxuICBwdXNoKGFycmF5QSwgYXJyYXlCKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGFycmF5KSB7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgXG4gIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weShhcnJheUEsIGFycmF5Qikge1xuICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gYXJyYXlCLmxlbmd0aDsgIC8vL1xuICBcbiAgc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50LCBhcnJheUIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlBLCBhcnJheUIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXlBLCBhcnJheUIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaChhcnJheUEsIGFycmF5QiwgY2FsbGJhY2spIHtcbiAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUFMZW5ndGggPSBhcnJheUEubGVuZ3RoLFxuICAgICAgICBhcnJheUJMZW5ndGggPSBhcnJheUIubGVuZ3RoO1xuXG4gIGlmIChhcnJheUFMZW5ndGggPT09IGFycmF5Qkxlbmd0aCkge1xuICAgIG1hdGNoZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEIgPSBhcnJheUJbaW5kZXhdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCLCBpbmRleCk7XG5cbiAgICAgIGlmIChwYXNzZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGxldCBjb3VwbGVkID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aCxcbiAgICAgICAgYXJyYXlCTGVuZ3RoID0gYXJyYXlCLmxlbmd0aDtcblxuICBpZiAoYXJyYXlBTGVuZ3RoID09PSBhcnJheUJMZW5ndGgpIHtcbiAgICBhcnJheUIgPSBbICAvLy9cbiAgICAgIC4uLmFycmF5QlxuICAgIF07XG5cbiAgICBjb3VwbGVkID0gYXJyYXlBLmV2ZXJ5KChlbGVtZW50QSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRCID0gZXh0cmFjdChhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKGVsZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvdXBsZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5QiA9IFsgIC8vL1xuICAgIC4uLmFycmF5QlxuICBdO1xuXG4gIGNvbnN0IGNvcnJlbGF0ZXMgPSBhcnJheUEuZXZlcnkoKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBleHRyYWN0KGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50QSwgZWxlbWVudEIpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZWxlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvcnJlbGF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlKGFycmF5QSwgYXJyYXlCLCBjYWxsYmFjaykge1xuICBsZXQgcmVzb2x2ZWQ7XG5cbiAgYXJyYXlBID0gWyAgLy8vXG4gICAgLi4uYXJyYXlBXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGFycmF5QUxlbmd0aCA9IGFycmF5QS5sZW5ndGg7XG5cbiAgICBpZiAoYXJyYXlBTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGFycmF5QS5mb3JFYWNoKChlbGVtZW50QSkgPT4ge1xuICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEpO1xuXG4gICAgICBpZiAocGFzc2VkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRCID0gZWxlbWVudEE7ICAvLy9cblxuICAgICAgICBhcnJheUIucHVzaChlbGVtZW50Qik7XG5cbiAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYXJyYXlBTGVuZ3RoID0gYXJyYXlBLmxlbmd0aDtcblxuICByZXNvbHZlZCA9IChhcnJheUFMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgbGV0IHN0YXJ0O1xuICBcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHN0YXJ0ID0gaW5kZXg7ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChmb3VuZCkge1xuICAgIGNvbnN0IGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKGFycmF5QSwgc3RhcnQsIGRlbGV0ZUNvdW50ID0gSW5maW5pdHksIGFycmF5QiA9IFtdKSB7XG4gIGNvbnN0IGFyZ3MgPSBbIHN0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXlCIF0sXG4gICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoYXJyYXlBLCBhcmdzKTtcblxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBkZWxldGVkRWxlbWVudHMgPSBbXTtcbiAgXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBkZWxldGVkRWxlbWVudHMudW5zaGlmdChmaXJzdERlbGV0ZWRFbGVtZW50KTsgIC8vL1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gZGVsZXRlZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGxldCBkZWxldGVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGRlbGV0ZWRFbGVtZW50cyA9IGFycmF5LnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpLFxuICAgICAgICAgICAgZmlyc3REZWxldGVkRWxlbWVudCA9IGZpcnN0KGRlbGV0ZWRFbGVtZW50cyk7XG4gICAgICBcbiAgICAgIGRlbGV0ZWRFbGVtZW50ID0gZmlyc3REZWxldGVkRWxlbWVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdChhcnJheSwgY2FsbGJhY2spIHtcbiAgbGV0IGRlbGV0ZWRFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcblxuICAgICAgZGVsZXRlZEVsZW1lbnQgPSBmaXJzdERlbGV0ZWRFbGVtZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGZvdW5kID0gYXJyYXkuc29tZSgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgYXJyYXkucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzKGFycmF5LCBjYWxsYmFjaykge1xuICBsZXQgaW5kZXgxID0gMCxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgxIDwgbGVuZ3RoKSB7XG4gICAgY29uc3QgZWxlbWVudEIgPSBhcnJheVtpbmRleDFdO1xuXG4gICAgZm9yIChsZXQgaW5kZXgyID0gbGVuZ3RoIC0gMTsgaW5kZXgyID4gaW5kZXgxOyBpbmRleDItLSkge1xuICAgICAgY29uc3QgZWxlbWVudEEgPSBhcnJheVtpbmRleDJdLFxuICAgICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudEEsIGVsZW1lbnRCKTtcblxuICAgICAgaWYgKCFwYXNzZWQpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleDIsIC8vL1xuICAgICAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgICAgYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXgxKys7XG5cbiAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5ID0gW1xuICAgIC4uLmFycmF5QSxcbiAgICAuLi5hcnJheUJcbiAgXTtcblxuICBjb21wcmVzcyhhcnJheSwgY2FsbGJhY2spO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2UoYXJyYXkpIHtcbiAgYXJyYXkgPSBbIC8vL1xuICAgIC4uLmFycmF5XG4gIF0ucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5Qi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXBhcmF0ZShhcnJheSwgYXJyYXlBLCBhcnJheUIsIGNhbGxiYWNrKSB7XG4gIGFycmF5LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5QS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXlCLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICAgIFxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc1NvbWUoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICBwYXNzZWQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0V2ZXJ5KGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc1JlZHVjZShhcnJheSwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICBsZXQgdmFsdWUgPSBpbml0aWFsVmFsdWU7IC8vL1xuXG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLy9cblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCBlbGVtZW50LCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGaW5kSW5kZXgoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheUxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcGFzc2VkID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZpbmRJbmRleChhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBhcnJheUxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHBhc3NlZCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlyc3QsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIGZvdXJ0aCxcbiAgZmlmdGgsXG4gIHNpeHRoLFxuICBzZXZlbnRoLFxuICBlaWdodGgsXG4gIG5pbnRoLFxuICBmaXJzdExhc3QsXG4gIHNlY29uZExhc3QsXG4gIHRoaXJkTGFzdCxcbiAgZm91cnRoTGFzdCxcbiAgZmlmdGhMYXN0LFxuICBzaXh0aExhc3QsXG4gIHNldmVudGhMYXN0LFxuICBlaWdodGhMYXN0LFxuICBuaW50aExhc3QsXG4gIGxhc3QsXG4gIGhlYWQsXG4gIHRhaWwsXG4gIGJhY2ssXG4gIGZyb250LFxuICBwdXNoLFxuICB1bnNoaWZ0LFxuICBjb25jYXQsXG4gIGNsZWFyLFxuICBjb3B5LFxuICBtZXJnZSxcbiAgbWF0Y2gsXG4gIGNvbXBhcmUsXG4gIGNvcnJlbGF0ZSxcbiAgcmVzb2x2ZSxcbiAgZmluZCxcbiAgcmVwbGFjZSxcbiAgc3BsaWNlLFxuICBmaWx0ZXIsXG4gIHBydW5lLFxuICBleHRyYWN0LFxuICBwYXRjaCxcbiAgY29tcHJlc3MsXG4gIGNvbWJpbmUsXG4gIHJldmVyc2UsXG4gIGF1Z21lbnQsXG4gIHNlcGFyYXRlLFxuICBmb3J3YXJkc0ZpbmQsXG4gIGJhY2t3YXJkc0ZpbmQsXG4gIGZvcndhcmRzU29tZSxcbiAgYmFja3dhcmRzU29tZSxcbiAgZm9yd2FyZHNFdmVyeSxcbiAgYmFja3dhcmRzRXZlcnksXG4gIGZvcndhcmRzUmVkdWNlLFxuICBiYWNrd2FyZHNSZWR1Y2UsXG4gIGZvcndhcmRzRm9yRWFjaCxcbiAgYmFja3dhcmRzRm9yRWFjaCxcbiAgZm9yd2FyZHNGaW5kSW5kZXgsXG4gIGJhY2t3YXJkc0ZpbmRJbmRleFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aE5hbWUocGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvLywgRU1QVFlfU1RSSU5HKS5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgLy8vXG5cbiAgY29uc3QgcGF0aE5hbWUgPSAoL1xcLy8udGVzdChwYXRoKSA9PT0gZmFsc2UpO1xuXG4gIHJldHVybiBwYXRoTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFRvcG1vc3ROYW1lKHBhdGgpIHtcbiAgY29uc3QgcGF0aE5hbWUgPSBpc1BhdGhOYW1lKHBhdGgpLFxuICAgICAgICBwYXRoQWJzb2x1dGVQYXRoID0gaXNQYXRoQWJzb2x1dGVQYXRoKHBhdGgpLFxuICAgICAgICBwYXRoVG9wbW9zdE5hbWUgPSAocGF0aE5hbWUgJiYgcGF0aEFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhUb3Btb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aFJlbGF0aXZlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhSZWxhdGl2ZVBhdGggPSAhL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhSZWxhdGl2ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCkge1xuICBjb25zdCBwYXRoQWJzb2x1dGVQYXRoID0gL15cXC8vLnRlc3QocGF0aCk7XG5cbiAgcmV0dXJuIHBhdGhBYnNvbHV0ZVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGgodG9wbW9zdE5hbWUsIGFic29sdXRlUGF0aCkge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt0b3Btb3N0TmFtZX0oPzpcXFxcLy4rKT8kYCksXG4gICAgICAgIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGggPSByZWdFeHAudGVzdChhYnNvbHV0ZVBhdGgpO1xuXG4gIHJldHVybiB0b3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUGF0aHMocGF0aCwgcmVsYXRpdmVQYXRoKSB7XG4gIGxldCBjb21iaW5lZFBhdGggPSBudWxsO1xuXG4gIGNvbnN0IHBhdGhOYW1lcyA9IHBhdGguc3BsaXQoL1xcLy8pLFxuICAgICAgICByZWxhdGl2ZVBhdGhOYW1lcyA9IHJlbGF0aXZlUGF0aC5zcGxpdCgvXFwvLyk7XG5cbiAgbGV0IGxhc3RQYXRoTmFtZSxcbiAgICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcblxuICBpZiAoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi5cIikge1xuICAgIHJlbGF0aXZlUGF0aE5hbWVzLnNoaWZ0KCk7XG4gIH1cblxuICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gIGxhc3RQYXRoTmFtZSA9IGxhc3QocGF0aE5hbWVzKTtcblxuICB3aGlsZSAoKGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9PT0gXCIuLlwiKSAmJiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgICBwYXRoTmFtZXMucG9wKCk7XG5cbiAgICBmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPSBmaXJzdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG4gICAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuICB9XG5cbiAgaWYgKGxhc3RQYXRoTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tYmluZWRQYXRoTmFtZXMgPSBbXS5jb25jYXQocGF0aE5hbWVzKS5jb25jYXQocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gICAgY29tYmluZWRQYXRoID0gY29tYmluZWRQYXRoTmFtZXMuam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgY29uY2F0ZW5hdGVkUGF0aDtcblxuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIGNvbnN0IHJlbWFpbmluZ0FBcmd1bWVudHNMZW5ndGggPSByZW1haW5pbmdBcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChyZW1haW5pbmdBQXJndW1lbnRzTGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBhdGggPSBjb25jYXRlbmF0ZWRQYXRoLCAgLy8vXG4gICAgICAgICAgcmVsYXRpdmVQYXRoID0gcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG5cbiAgICBjb25jYXRlbmF0ZWRQYXRoID0gY29uY2F0ZW5hdGVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY29uY2F0ZW5hdGVkUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgYm90dG9tbW9zdE5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eLipcXC8oW15cXC9dK1xcLz8pJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBib3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gYm90dG9tbW9zdE5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoKHBhdGgpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLispXFwvW15cXC9dK1xcLz8kLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICB0b3Btb3N0RGlyZWN0b3J5UGF0aCA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeVBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXihbXlxcL10rKVxcLy4rJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICB0b3Btb3N0RGlyZWN0b3J5TmFtZSA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gdG9wbW9zdERpcmVjdG9yeU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14oLiopXFwvW15cXC9dK1xcLz8kLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWUgPSBzZWNvbmRNYXRjaDsgLy8vXG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXlteXFwvXStcXC8oLispJC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7XG4gIH1cblxuICByZXR1cm4gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpc1BhdGhOYW1lLFxuICBpc1BhdGhUb3Btb3N0TmFtZSxcbiAgaXNQYXRoUmVsYXRpdmVQYXRoLFxuICBpc1BhdGhBYnNvbHV0ZVBhdGgsXG4gIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCxcbiAgY29tYmluZVBhdGhzLFxuICBjb25jYXRlbmF0ZVBhdGhzLFxuICBib3R0b21tb3N0TmFtZUZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5UGF0aEZyb21QYXRoLFxuICB0b3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoLFxuICBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWVGcm9tUGF0aFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ09MT05fQ0hBUkFDVEVSLCBBTVBFUlNBTkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NoYXJhY3RlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShoZWFkZXJzLCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBleGlzdGluZ05hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycyksICAvLy9cbiAgICAgICAgZXhpc3RpbmdOYW1lID0gZXhpc3RpbmdOYW1lcy5maW5kKChleGlzdGluZ05hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPSBleGlzdGluZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ0xvd2VyQ2FzZU5hbWUgPT09IGxvd2VyQ2FzZU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICBpZiAoZXhpc3RpbmdOYW1lICE9PSBudWxsKSB7XG4gICAgaGVhZGVyc1tleGlzdGluZ05hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSA9PT0gbnVsbCkge1xuICAgIGhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9ydEZyb21Ib3N0KGhvc3QpIHtcbiAgbGV0IHBvcnQ7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IGhvc3QubWF0Y2goL15odHRwcz86XFwvXFwvKFteXFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBpbmRleCA9IHNlY29uZE1hdGNoLmluZGV4T2YoQ09MT05fQ0hBUkFDVEVSKTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY29uc3Qgc2VjdXJlID0gc2VjdXJlRnJvbUhvc3QoaG9zdCk7XG5cbiAgICBwb3J0ID0gc2VjdXJlID8gNDQzIDogODA7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXggKyAxLFxuICAgICAgICAgIHBvcnRTdHJpbmcgPSBzZWNvbmRNYXRjaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gICAgcG9ydCA9IE51bWJlcihwb3J0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBwb3J0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VjdXJlRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBzZWN1cmUgPSAvXmh0dHBzOlxcL1xcLy8udGVzdChob3N0KTtcblxuICByZXR1cm4gc2VjdXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdG5hbWVGcm9tSG9zdChob3N0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXjpcXC9dKykvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIGhvc3RuYW1lID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiBob3N0bmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocXVlcnkpLFxuICAgICAgICBuYW1lc0xlbmd0aCA9IG5hbWVzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbmFtZXNMZW5ndGggLSAxLFxuICAgICAgICBxdWVyeVN0cmluZyA9IG5hbWVzLnJlZHVjZSgocXVlcnlTdHJpbmcsIG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtuYW1lXSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkTmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSxcbiAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgICAgICAgICAgICAgIGFtcGVyc2FuZE9yTm90aGluZyA9IChpbmRleCAhPT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBTVBFUlNBTkRfQ0hBUkFDVEVSIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuICBcbiAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtlbmNvZGVkTmFtZX09JHtlbmNvZGVkVmFsdWV9JHthbXBlcnNhbmRPck5vdGhpbmd9YDtcbiAgXG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBxdWVyeVN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21Ib3N0VVJJQW5kUXVlcnkoaG9zdCwgdXJpLCBxdWVyeSkge1xuICBjb25zdCBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nRnJvbVF1ZXJ5KHF1ZXJ5KSxcbiAgICAgICAgdXJsID0gKHF1ZXJ5U3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgICBgJHtob3N0fSR7dXJpfWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX0/JHtxdWVyeVN0cmluZ31gO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3ZlcndyaXRlLFxuICB1bmRlcndyaXRlLFxuICBwb3J0RnJvbUhvc3QsXG4gIHNlY3VyZUZyb21Ib3N0LFxuICBob3N0bmFtZUZyb21Ib3N0LFxuICBxdWVyeVN0cmluZ0Zyb21RdWVyeSxcbiAgdXJsRnJvbUhvc3RVUklBbmRRdWVyeVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuKHN0cmluZykge1xuICBsZXQgbGVuZ3RoID0gMDtcblxuICBjb25zdCBpdGVyYXRvciA9IHN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCk7XG5cbiAgbGV0IGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICB3aGlsZSAoIWNoYXJhY3Rlci5kb25lKSB7XG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgbGVuZ3RoKytcbiAgfVxuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJjbXAoc3RyaW5nQSwgc3RyaW5nQikge1xuICBsZXQgZGlmZmVyZW5jZTtcblxuICBjb25zdCBpdGVyYXRvckEgPSBzdHJpbmdBW1N5bWJvbC5pdGVyYXRvcl0oKSwgLy8vXG4gICAgICAgIGl0ZXJhdG9yQiA9IHN0cmluZ0JbU3ltYm9sLml0ZXJhdG9yXSgpOyAvLy9cblxuICBsZXQgY2hhcmFjdGVyQSA9IGl0ZXJhdG9yQS5uZXh0KCksXG4gICAgICBjaGFyYWN0ZXJCID0gaXRlcmF0b3JCLm5leHQoKSxcbiAgICAgIGNvZGVQb2ludEEsXG4gICAgICBjb2RlUG9pbnRCO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29kZVBvaW50QSA9IGNoYXJhY3RlckEudmFsdWUgPyAvLy9cbiAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJBLnZhbHVlLmNvZGVQb2ludEF0KDApIDpcbiAgICAgICAgICAgICAgICAgICAgIDA7XG4gICAgY29kZVBvaW50QiA9IGNoYXJhY3RlckIudmFsdWUgPyAvLy9cbiAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJCLnZhbHVlLmNvZGVQb2ludEF0KDApIDpcbiAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICBkaWZmZXJlbmNlID0gY29kZVBvaW50QiAtIGNvZGVQb2ludEE7XG5cbiAgICBpZiAoZGlmZmVyZW5jZSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlckEuZG9uZSB8fCBjaGFyYWN0ZXJCLmRvbmUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoYXJhY3RlckEgPSBpdGVyYXRvckEubmV4dCgpO1xuICAgIGNoYXJhY3RlckIgPSBpdGVyYXRvckIubmV4dCgpO1xuICB9XG5cbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mKHN0cmluZywgc2VhcmNoU3RyaW5nKSB7XG4gIGxldCBpbmRleCA9IC0xLFxuICAgICAgZm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBzZWFyY2hTdHJpbmdMZW5ndGggPSBzdHJsZW4oc2VhcmNoU3RyaW5nKTtcblxuICBpZiAoc2VhcmNoU3RyaW5nTGVuZ3RoID4gMCkge1xuICAgIGxldCBjaGFyYWN0ZXI7XG5cbiAgICBjb25zdCBpdGVyYXRvciA9IHN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgc2VhcmNoSXRlcmF0b3IgPSBzZWFyY2hTdHJpbmdbU3ltYm9sLml0ZXJhdG9yXSgpLFxuICAgICAgICAgIHNlYXJjaENoYXJhY3RlciA9IHNlYXJjaEl0ZXJhdG9yLm5leHQoKTtcblxuICAgIGNoYXJhY3RlciA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgIGluZGV4Kys7XG5cbiAgICB3aGlsZSAoIWNoYXJhY3Rlci5kb25lKSB7XG4gICAgICBpZiAoY2hhcmFjdGVyLnZhbHVlID09PSBzZWFyY2hDaGFyYWN0ZXIudmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgICBlbmQgPSBzdGFydCArIHNlYXJjaFN0cmluZ0xlbmd0aCxcbiAgICAgICAgICAgICAgc3ViU3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgc3RhcnQsIGVuZCksXG4gICAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAoc3ViU3RyaW5nLCBzZWFyY2hTdHJpbmcpO1xuXG4gICAgICAgIGlmIChkaWZmZXJlbmNlID09PSAwKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gICAgICBpbmRleCsrXG4gICAgfVxuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIGluZGV4ID0gLTE7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHJpbmcoc3RyaW5nLCBzdGFydCwgZW5kID0gSW5maW5pdHkpIHtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBjb25zdCBpdGVyYXRvciA9IHN0cmluZ1tTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgIGNoYXJhY3RlcnMgPSBbXTtcblxuICBsZXQgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuXG4gIHdoaWxlICghY2hhcmFjdGVyLmRvbmUpIHtcbiAgICBpZiAoaW5kZXggPT09IGVuZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4ID49IHN0YXJ0KSB7XG4gICAgICBjaGFyYWN0ZXJzLnB1c2goY2hhcmFjdGVyLnZhbHVlKTsgLy8vXG4gICAgfVxuXG4gICAgaW5kZXgrK1xuXG4gICAgY2hhcmFjdGVyID0gaXRlcmF0b3IubmV4dCgpO1xuICB9XG5cbiAgY29uc3Qgc3Vic3RyaW5nID0gY2hhcmFjdGVycy5qb2luKEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN1YnN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHJjbXAsXG4gIHN0cmxlbixcbiAgaW5kZXhPZixcbiAgc3Vic3RyaW5nXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZShqc29uLCBtaWdyYXRpb25NYXAsIGxhdGVzdFZlcnNpb24pIHtcbiAgbGV0IHsgdmVyc2lvbiB9ID0ganNvbjtcblxuICB3aGlsZSAodmVyc2lvbiAhPT0gbGF0ZXN0VmVyc2lvbikge1xuICAgIGNvbnN0IG1pZ3JhdGVGdW5jdGlvbiA9IG1pZ3JhdGlvbk1hcFt2ZXJzaW9uXTtcblxuICAgIGpzb24gPSBtaWdyYXRlRnVuY3Rpb24oanNvbik7XG5cbiAgICAoeyB2ZXJzaW9uIH0gPSBqc29uKTtcbiAgfVxuXG4gIHJldHVybiBqc29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1pZ3JhdGVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2hpbHN0KG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGNvdW50OyAgLy8vXHJcblxyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICBkb25lKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRseShvcGVyYXRpb24sIGxlbmd0aCwgZG9uZSwgY29udGV4dCkge1xyXG4gIGlmIChsZW5ndGggPT09IDApIHtcclxuICAgIGRvbmUoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBvcGVyYXRpb24obmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IC0xO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXHJcblxyXG4gIGxldCBjb3VudCA9IGxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50LS07XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSAtMSk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcblxyXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2hpbHN0LFxyXG4gIGZvckVhY2gsXHJcbiAgc2VxdWVuY2UsXHJcbiAgZXZlbnR1YWxseSxcclxuICByZXBlYXRlZGx5LFxyXG4gIGZvcndhcmRzRm9yRWFjaCxcclxuICBiYWNrd2FyZHNGb3JFYWNoXHJcbn07XHJcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBHRVRfTUVUSE9ELFxuICAgICAgICBhY2NlcHQgPSBBUFBMSUNBVElPTl9KU09OX0NPTlRFTlRfVFlQRSxcbiAgICAgICAgY29udGVudCA9IG51bGw7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBjb250ZW50LCBoZWFkZXJzLCByZXNwb25zZVR5cGUsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgY29udGVudCwgaGVhZGVycywgcmVzcG9uc2VUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGhlYWRlcnMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2FsbGJhY2sgPSBoZWFkZXJzOyAvLy9cblxuICAgIHJlc3BvbnNlVHlwZSA9IG51bGw7XG5cbiAgICBoZWFkZXJzID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHJlc3BvbnNlVHlwZSA9PT0gRlVOQ1RJT04pIHtcbiAgICBjYWxsYmFjayA9IHJlc3BvbnNlVHlwZTsgIC8vL1xuXG4gICAgaWYgKHR5cGVvZiBoZWFkZXJzID09PSBTVFJJTkcpIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IGhlYWRlcnM7IC8vL1xuXG4gICAgICBoZWFkZXJzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlVHlwZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXRob2QgPSBQT1NUX01FVEhPRCxcbiAgICAgICAgYWNjZXB0ID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEUsXG4gICAgICAgIGNvbnRlbnRUeXBlID0gQVBQTElDQVRJT05fSlNPTl9DT05URU5UX1RZUEU7XG5cbiAgdW5kZXJ3cml0ZUFjY2VwdEhlYWRlcihoZWFkZXJzLCBhY2NlcHQpO1xuXG4gIHVuZGVyd3JpdGVDb250ZW50VHlwZUhlYWRlcihoZWFkZXJzLCBjb250ZW50VHlwZSk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGNvbnRlbnQsIGhlYWRlcnMsIHJlc3BvbnNlVHlwZSwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5hc3NpZ24oeG1sSHR0cFJlcXVlc3QsIHtcbiAgICAgIHJlc3BvbnNlVHlwZVxuICAgIH0pO1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxldmVscyB9IGZyb20gXCIuL2xldmVsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXRob2RzIH0gZnJvbSBcIi4vbWV0aG9kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBoZWFkZXJzIH0gZnJvbSBcIi4vaGVhZGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBrZXlDb2RlcyB9IGZyb20gXCIuL2tleUNvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGVuY29kaW5ncyB9IGZyb20gXCIuL2VuY29kaW5nc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFyYWN0ZXJzIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNDb2RlcyB9IGZyb20gXCIuL3N0YXR1c0NvZGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnRlbnRUeXBlcyB9IGZyb20gXCIuL2NvbnRlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdGF0dXNNZXNzYWdlcyB9IGZyb20gXCIuL3N0YXR1c01lc3NhZ2VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wYXRoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0dHBVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvaHR0cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHZlcnNpb25VdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvdmVyc2lvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXN5bmNocm9ub3VzXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWpheFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hamF4XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbWJpbmVSdWxlcyA9IChydWxlcykgPT4ge1xuICByZXR1cm4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhydWxlcyksXG4gICAgICAgICAgdXBkYXRlID0ga2V5cy5yZWR1Y2UoKHVwZGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gcnVsZXNba2V5XTtcblxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBydWxlKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB1cGRhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSdWxlcztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY3JlYXRlRGlzcGF0Y2hlciA9IChydWxlKSA9PiB7XG4gIGxldCBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBkaXNwYXRjaCA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCB1cGRhdGUgPSBydWxlKGFjdGlvbik7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgcnVsZU5hbWVzIH0gPSBsaXN0ZW5lcjtcblxuICAgICAgaWYgKChydWxlTmFtZXMubGVuZ3RoID09PSAwKSB8fCBydWxlTmFtZXMuc29tZSgocnVsZU5hbWUpID0+ICh1cGRhdGVbcnVsZU5hbWVdICE9PSB1bmRlZmluZWQpKSkge1xuICAgICAgICBsaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lciwgLi4ucnVsZU5hbWVzKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lciwge1xuICAgICAgcnVsZU5hbWVzXG4gICAgfSk7XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHVuc3Vic2NyaWJlKGxpc3RlbmVyKSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiAobGlzdGVuZXIgIT09IGwpKTtcbiAgfTtcblxuICByZXR1cm4geyBkaXNwYXRjaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlzcGF0Y2hlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi9jb21iaW5lUnVsZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlRGlzcGF0Y2hlciB9IGZyb20gXCIuL2NyZWF0ZURpc3BhdGNoZXJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUxMID0gXCJzaG93LWFsbFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQUNUSVZFID0gXCJzaG93LWFjdGl2ZVwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfQ09NUExFVEVEID0gXCJzaG93LWNvbXBsZXRlZFwiO1xuZXhwb3J0IGNvbnN0IFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA9IFwiU0VUX1ZJU0lCSUxJVFlfRklMVEVSXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEFERF9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb2RvKGFjdGlvbiA9IHt9KSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYWN0aW9uO1xuXG4gIGxldCB1cGRhdGU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBBRERfVE9ETyA6XG4gICAgICBjb25zdCB7IHRleHQgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlGaWx0ZXIoYWN0aW9uID0ge30pIHtcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XG5cbiAgbGV0IHVwZGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNFVF9WSVNJQklMSVRZX0ZJTFRFUiA6XG4gICAgICBjb25zdCB7IHZpc2liaWxpdHlGaWx0ZXIgfSA9IGFjdGlvbjtcblxuICAgICAgdXBkYXRlID0ge1xuICAgICAgICB2aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lUnVsZXMgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBhZGRUb2RvIGZyb20gXCIuL3J1bGUvYWRkVG9kb1wiO1xuaW1wb3J0IHNldFZpc2liaWxpdHlGaWx0ZXIgZnJvbSBcIi4vcnVsZS9zZXRWaXNpYmlsaXR5RmlsdGVyXCI7XG5cbmNvbnN0IHJ1bGUgPSBjb21iaW5lUnVsZXMoe1xuICBhZGRUb2RvLFxuICBzZXRWaXNpYmlsaXR5RmlsdGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcnVsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlRGlzcGF0Y2hlciB9IGZyb20gXCIuLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHJ1bGUgZnJvbSBcIi4vcnVsZVwiO1xuXG5jb25zdCBkaXNwYXRjaGVyID0gY3JlYXRlRGlzcGF0Y2hlcihydWxlKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGF0Y2hlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tIFwiLi4vZGlzcGF0Y2hlclwiO1xuXG5pbXBvcnQgeyBTRVRfVklTSUJJTElUWV9GSUxURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGZpbHRlciB9ID0gcHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IGAke2ZpbHRlcn0gZmlsdGVyYCxcbiAgICAgICAgZmlyc3RDaGlsZCA9IGZpcnN0KGNoaWxkcmVuKSxcbiAgICAgICAgdGV4dCA9IGZpcnN0Q2hpbGQuZ2V0VGV4dCgpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXG4gICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgY29uc3QgdHlwZSA9IFNFVF9WSVNJQklMSVRZX0ZJTFRFUixcbiAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlciA9IGZpbHRlcixcbiAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgIGRpc3BhdGNoZXIuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2E+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJMaW5rO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmxldCBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICBpbnB1dERPTUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGlucHV0RE9NRWxlbWVudC52YWx1ZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaGVyLmRpc3BhdGNoKGFjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdGV4dCB9ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBcIlwiO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyhcImNvbXBsZXRlZFwiKTtcblxuICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gXCIuLi9kaXNwYXRjaGVyXCI7XG5pbXBvcnQgVG9kb0xpc3RJdGVtIGZyb20gXCIuL3RvZG9MaXN0SXRlbVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0SXRlbXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyKHVwZGF0ZSkge1xuICAgIGlmICh1cGRhdGUpIHtcbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlO1xuXG4gICAgICBpZiAoYWRkVG9kbykge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IGRpc3BhdGNoZXIuc3Vic2NyaWJlKCh1cGRhdGUpID0+IHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICAgIGNvbnN0IHsgYWRkVG9kbyB9ID0gdXBkYXRlLFxuICAgICAgICAgICAgeyB0ZXh0IH0gPSBhZGRUb2RvO1xuXG4gICAgICBjaGlsZHJlbiA9IFtcbiAgICAgICAgLi4uY2hpbGRyZW4sXG5cbiAgICAgICAgICA8VG9kb0xpc3RJdGVtIHRleHQ9e3RleHR9IC8+XG5cbiAgICAgIF07XG5cbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFRvZG9MaXN0SXRlbXMgZnJvbSBcIi4vdG9kb0xpc3RJdGVtc1wiO1xuXG5jb25zdCBUb2RvTGlzdCA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8dWw+XG4gICAgPFRvZG9MaXN0SXRlbXMgLz5cbiAgPC91bD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBBZGRUb2RvIGZyb20gXCIuL2FkZFRvZG9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSBcIi4uL2Rpc3BhdGNoZXJcIjtcblxuaW1wb3J0IHsgU0hPV19BTEwgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBkaXNwYXRjaGVyLnN1YnNjcmliZSgodXBkYXRlKSA9PiB0aGlzLnJlbmRlcih1cGRhdGUpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICBjb25zdCB7IHNldFZpc2liaWxpdHlGaWx0ZXIgfSA9IHVwZGF0ZTtcblxuICAgICAgaWYgKHNldFZpc2liaWxpdHlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgeyB2aXNpYmlsaXR5RmlsdGVyIH0gPSBzZXRWaXNpYmlsaXR5RmlsdGVyLFxuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBgJHt2aXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5pdGlhbFZpc2liaWxpdHlGaWx0ZXIgPSBTSE9XX0FMTCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2luaXRpYWxWaXNpYmlsaXR5RmlsdGVyfSBhcHBgO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgICAgPFRvZG9MaXN0IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL2luZmVyZW5jZUFwcC9jb21wb25lbnQvdG9kb0FwcFwiO1xuXG5jb25zdCBpbmZlcmVuY2VBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFRvZG9BcHAgLz5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmZlcmVuY2VBcHA7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCByZWR1eEFwcCBmcm9tIFwiLi9leGFtcGxlL3JlZHV4QXBwXCI7XG5pbXBvcnQgaW5mZXJlbmNlQXBwIGZyb20gXCIuL2V4YW1wbGUvaW5mZXJlbmNlQXBwXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIHJlZHV4QXBwLFxuICBpbmZlcmVuY2VBcHBc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

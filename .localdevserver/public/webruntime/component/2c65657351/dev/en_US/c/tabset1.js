Webruntime.moduleRegistry.define('c/tabset1', ['lwc', 'lightning/configProvider'], function (lwc, configProvider) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        fid: api_scoped_frag_id,
        h: api_element
      } = $api;
      return [api_element("svg", {
        className: $cmp.computedClass,
        attrs: {
          "focusable": "false",
          "data-key": $cmp.name,
          "aria-hidden": "true"
        },
        key: 2
      }, [api_element("use", {
        attrs: {
          "xlink:href": lwc.sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
        },
        key: 3
      }, [])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lightning-primitiveIcon_primitiveIcon-host",
      shadowAttribute: "lightning-primitiveIcon_primitiveIcon"
    };

    const proto = {
      add(className) {
        if (typeof className === 'string') {
          this[className] = true;
        } else {
          Object.assign(this, className);
        }

        return this;
      },

      invert() {
        Object.keys(this).forEach(key => {
          this[key] = !this[key];
        });
        return this;
      },

      toString() {
        return Object.keys(this).filter(key => this[key]).join(' ');
      }

    };
    function classSet(config) {
      if (typeof config === 'string') {
        const key = config;
        config = {};
        config[key] = true;
      }

      return Object.assign(Object.create(proto), config);
    }

    // NOTE: lightning-utils is a public library. adding new utils here means we

    function assert(condition, message) {
      {
        if (!condition) {
          throw new Error(message);
        }
      }
    }

    /**
    An emitter implementation based on the Node.js EventEmitter API:
    https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_class_eventemitter
    **/

    /**
     * Create a deep copy of an object or array
     * @param {object|array} o - item to be copied
     * @returns {object|array} copy of the item
     */

    /**
     * Utility function to generate an unique guid.
     * used on state objects to provide a performance aid when iterating
     * through the items and marking them for render
     * @returns {String} an unique string ID
     */
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      }

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    function classListMutation(classList, config) {
      Object.keys(config).forEach(key => {
        if (typeof key === 'string' && key.length) {
          if (config[key]) {
            classList.add(key);
          } else {
            classList.remove(key);
          }
        }
      });
    }

    /**
    A string normalization utility for attributes.
    @param {String} value - The value to normalize.
    @param {Object} config - The optional configuration object.
    @param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
    @param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
    @return {String} - The normalized value.
    **/
    function normalizeString(value, config = {}) {
      const {
        fallbackValue = '',
        validValues,
        toLowerCase = true
      } = config;
      let normalized = typeof value === 'string' && value.trim() || '';
      normalized = toLowerCase ? normalized.toLowerCase() : normalized;

      if (validValues && validValues.indexOf(normalized) === -1) {
        normalized = fallbackValue;
      }

      return normalized;
    }
    /**
    A boolean normalization utility for attributes.
    @param {Any} value - The value to normalize.
    @return {Boolean} - The normalized value.
    **/

    function normalizeBoolean(value) {
      return typeof value === 'string' || !!value;
    }
    /**
    A aria attribute normalization utility.
    @param {Any} value - A single aria value or an array of aria values
    @return {String} - A space separated list of aria values
    **/

    function normalizeAriaAttribute(value) {
      let arias = Array.isArray(value) ? value : [value];
      arias = arias.map(ariaValue => {
        if (typeof ariaValue === 'string') {
          return ariaValue.replace(/\s+/g, ' ').trim();
        }

        return '';
      }).filter(ariaValue => !!ariaValue);
      return arias.length > 0 ? arias.join(' ') : null;
    }

    const keyCodes = {
      tab: 9,
      backspace: 8,
      enter: 13,
      escape: 27,
      space: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
      shift: 16
    };
    const buffer = {};
    /**
     * Runs an action and passes the string of buffered keys typed within a short time period.
     * Use for type-ahead like functionality in menus, lists, comboboxes, and similar components.
     *
     * @param {CustomEvent} event A keyboard event
     * @param {Function} action function to run, it's passed the buffered text
     */

    function runActionOnBufferedTypedCharacters(event, action) {
      const letter = event.key;

      if (letter.length > 1) {
        // Not an individual character/letter, but rather a special code (like Shift, Backspace, etc.)
        return;
      } // If we were going to clear what keys were typed, don't yet.


      if (buffer._clearBufferId) {
        clearTimeout(buffer._clearBufferId);
      }

      buffer._keyBuffer = buffer._keyBuffer || [];

      buffer._keyBuffer.push(letter);

      const matchText = buffer._keyBuffer.join('').toLowerCase();

      action(matchText); // eslint-disable-next-line lwc/no-set-timeout

      buffer._clearBufferId = setTimeout(() => {
        buffer._keyBuffer = [];
      }, 700);
    }

    const isIE11 = isIE11Test(navigator);
    const isChrome = isChromeTest(navigator); // The following functions are for tests only

    function isIE11Test(navigator) {
      // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
      return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
    }
    function isChromeTest(navigator) {
      // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
      return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    }

    /**
     * Set an attribute on an element, if it's a normal element
     * it will use setAttribute, if it's an LWC component
     * it will use the public property
     *
     * @param {HTMLElement} element The element to act on
     * @param {String} attribute the attribute to set
     * @param {Any} value the value to set
     */

    // hide panel on scroll
    const POSITION_CHANGE_THRESHOLD = 5;
    function observePosition(target, threshold = POSITION_CHANGE_THRESHOLD, originalRect, callback) {
      // retrieve current bounding client rect of target element
      const newBoundingRect = target.getBoundingClientRect();
      const newLeft = newBoundingRect.left;
      const newTop = newBoundingRect.top; // old bounding rect values

      const oldLeft = originalRect.left;
      const oldTop = originalRect.top; // if we have a position change (horizontal or vertical) equal or greater to the threshold then execute the callback

      const horizontalShiftDelta = Math.abs(newLeft - oldLeft);
      const verticalShiftDelta = Math.abs(newTop - oldTop);

      if (horizontalShiftDelta >= threshold || verticalShiftDelta >= threshold) {
        callback();
      }
    }

    const DEFAULT_ZINDEX_BASELINE = 9000;
    /**
     * Returns the zIndex baseline from slds zIndex variable --lwc-zIndexModal.
     * @returns {Number} zIndex baseline
     */

    function getZIndexBaseline() {
      const value = (window.getComputedStyle(document.documentElement) || document.documentElement.style).getPropertyValue('--lwc-zIndexModal');
      const base = parseInt(value, 10);
      return isNaN(base) ? DEFAULT_ZINDEX_BASELINE : base;
    }

    var _tmpl$1 = void 0;

    // Taken from https://github.com/jonathantneal/svg4everybody/pull/139
    // Remove this iframe-in-edge check once the following is resolved https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8323875/
    const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
    const inIframe = window.top !== window.self;
    const isIframeInEdge = isEdgeUA && inIframe;
    var isIframeInEdge$1 = lwc.registerComponent(isIframeInEdge, {
      tmpl: _tmpl$1
    });

    // Taken from https://git.soma.salesforce.com/aura/lightning-global/blob/999dc35f948246181510df6e56f45ad4955032c2/src/main/components/lightning/SVGLibrary/stamper.js#L38-L60
    function fetchSvg(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseText);
            } else {
              reject(xhr);
            }
          }
        };
      });
    }

    // Which looks like it was inspired by https://github.com/jonathantneal/svg4everybody/blob/377d27208fcad3671ed466e9511556cb9c8b5bd8/lib/svg4everybody.js#L92-L107
    // Modify at your own risk!

    const newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
    const webkitUA = /\bAppleWebKit\/(\d+)\b/;
    const olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
    const isIE = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
    const supportsSvg = !isIE && !isIframeInEdge$1;
    var supportsSvg$1 = lwc.registerComponent(supportsSvg, {
      tmpl: _tmpl$1
    });

    /**
    This polyfill injects SVG sprites into the document for clients that don't
    fully support SVG. We do this globally at the document level for performance
    reasons. This causes us to lose namespacing of IDs across sprites. For example,
    if both #image from utility sprite and #image from doctype sprite need to be
    rendered on the page, both end up as #image from the doctype sprite (last one
    wins). SLDS cannot change their image IDs due to backwards-compatibility
    reasons so we take care of this issue at runtime by adding namespacing as we
    polyfill SVG elements.

    For example, given "/assets/icons/action-sprite/svg/symbols.svg#approval", we
    replace the "#approval" id with "#${namespace}-approval" and a similar
    operation is done on the corresponding symbol element.
    **/
    const svgTagName = /svg/i;

    const isSvgElement = el => el && svgTagName.test(el.nodeName);

    const requestCache = {};
    const symbolEls = {};
    const svgFragments = {};
    const spritesContainerId = 'slds-svg-sprites';
    let spritesEl;
    function polyfill(el) {
      if (!supportsSvg$1 && isSvgElement(el)) {
        if (!spritesEl) {
          spritesEl = document.createElement('svg');
          spritesEl.xmlns = 'http://www.w3.org/2000/svg';
          spritesEl['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
          spritesEl.style.display = 'none';
          spritesEl.id = spritesContainerId;
          document.body.insertBefore(spritesEl, document.body.childNodes[0]);
        }

        Array.from(el.getElementsByTagName('use')).forEach(use => {
          // We access the href differently in raptor and in aura, probably
          // due to difference in the way the svg is constructed.
          const src = use.getAttribute('xlink:href') || use.getAttribute('href');

          if (src) {
            // "/assets/icons/action-sprite/svg/symbols.svg#approval" =>
            // ["/assets/icons/action-sprite/svg/symbols.svg", "approval"]
            const parts = src.split('#');
            const url = parts[0];
            const id = parts[1];
            const namespace = url.replace(/[^\w]/g, '-');
            const href = `#${namespace}-${id}`;

            if (url.length) {
              // set the HREF value to no longer be an external reference
              if (use.getAttribute('xlink:href')) {
                use.setAttribute('xlink:href', href);
              } else {
                use.setAttribute('href', href);
              } // only insert SVG content if it hasn't already been retrieved


              if (!requestCache[url]) {
                requestCache[url] = fetchSvg(url);
              }

              requestCache[url].then(svgContent => {
                // create a document fragment from the svgContent returned (is parsed by HTML parser)
                if (!svgFragments[url]) {
                  const svgFragment = document.createRange().createContextualFragment(svgContent);
                  svgFragments[url] = svgFragment;
                }

                if (!symbolEls[href]) {
                  const svgFragment = svgFragments[url];
                  const symbolEl = svgFragment.querySelector(`#${id}`);
                  symbolEls[href] = true;
                  symbolEl.id = `${namespace}-${id}`;
                  spritesEl.appendChild(symbolEl);
                }
              });
            }
          }
        });
      }
    }

    const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
    const underscoreRe = /_/g;
    let pathPrefix;
    const tokenNameMap = Object.assign(Object.create(null), {
      action: 'lightning.actionSprite',
      custom: 'lightning.customSprite',
      doctype: 'lightning.doctypeSprite',
      standard: 'lightning.standardSprite',
      utility: 'lightning.utilitySprite'
    });
    const tokenNameMapRtl = Object.assign(Object.create(null), {
      action: 'lightning.actionSpriteRtl',
      custom: 'lightning.customSpriteRtl',
      doctype: 'lightning.doctypeSpriteRtl',
      standard: 'lightning.standardSpriteRtl',
      utility: 'lightning.utilitySpriteRtl'
    });
    const defaultTokenValueMap = Object.assign(Object.create(null), {
      'lightning.actionSprite': '/assets/icons/action-sprite/svg/symbols.svg',
      'lightning.actionSpriteRtl': '/assets/icons/action-sprite/svg/symbols.svg',
      'lightning.customSprite': '/assets/icons/custom-sprite/svg/symbols.svg',
      'lightning.customSpriteRtl': '/assets/icons/custom-sprite/svg/symbols.svg',
      'lightning.doctypeSprite': '/assets/icons/doctype-sprite/svg/symbols.svg',
      'lightning.doctypeSpriteRtl': '/assets/icons/doctype-sprite/svg/symbols.svg',
      'lightning.standardSprite': '/assets/icons/standard-sprite/svg/symbols.svg',
      'lightning.standardSpriteRtl': '/assets/icons/standard-sprite/svg/symbols.svg',
      'lightning.utilitySprite': '/assets/icons/utility-sprite/svg/symbols.svg',
      'lightning.utilitySpriteRtl': '/assets/icons/utility-sprite/svg/symbols.svg'
    });

    const getDefaultBaseIconPath = (category, nameMap) => defaultTokenValueMap[nameMap[category]];

    const getBaseIconPath = (category, direction) => {
      const nameMap = direction === 'rtl' ? tokenNameMapRtl : tokenNameMap;
      return configProvider.getToken(nameMap[category]) || getDefaultBaseIconPath(category, nameMap);
    };

    const getMatchAtIndex = index => iconName => {
      const result = validNameRe.exec(iconName);
      return result ? result[index] : '';
    };

    const getCategory = getMatchAtIndex(1);
    const getName = getMatchAtIndex(2);
    const isValidName = iconName => validNameRe.test(iconName);
    const getIconPath = (iconName, direction = 'ltr') => {
      pathPrefix = pathPrefix !== undefined ? pathPrefix : configProvider.getPathPrefix();

      if (isValidName(iconName)) {
        const baseIconPath = getBaseIconPath(getCategory(iconName), direction);

        if (baseIconPath) {
          // This check was introduced the following MS-Edge issue:
          // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9655192/
          // If and when this get fixed, we can safely remove this block of code.
          if (isIframeInEdge$1) {
            // protocol => 'https:' or 'http:'
            // host => hostname + port
            const origin = `${window.location.protocol}//${window.location.host}`;
            return `${origin}${pathPrefix}${baseIconPath}#${getName(iconName)}`;
          }

          return `${pathPrefix}${baseIconPath}#${getName(iconName)}`;
        }
      }

      return '';
    };
    const computeSldsClass = iconName => {
      if (isValidName(iconName)) {
        const category = getCategory(iconName);
        const name = getName(iconName).replace(underscoreRe, '-');
        return `slds-icon-${category}-${name}`;
      }

      return '';
    };

    const isSafari = window.safari && window.safari.pushNotification && window.safari.pushNotification.toString() === '[object SafariRemoteNotification]'; // [W-3421985] https://bugs.webkit.org/show_bug.cgi?id=162866
    // https://git.soma.salesforce.com/aura/lightning-global/blob/82e8bfd02846fa7e6b3e7549a64be95b619c4b1f/src/main/components/lightning/primitiveIcon/primitiveIconHelper.js#L53-L56

    function safariA11yPatch(svgElement) {
      if (!svgElement || !isSafari) {
        return;
      } // In case we're dealing with a proxied element.


      svgElement = lwc.unwrap(svgElement);
      const use = svgElement.querySelector('use');

      if (!use) {
        return;
      }

      svgElement.insertBefore(document.createTextNode('\n'), use); // If use.nextSibling is null, the text node is added to the end of
      // the list of children of the SVG element.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

      svgElement.insertBefore(document.createTextNode('\n'), use.nextSibling);
    }

    class LightningPrimitiveIcon extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.iconName = void 0;
        this.src = void 0;
        this.svgClass = void 0;
        this.size = 'medium';
        this.variant = void 0;
        this.privateIconSvgTemplates = configProvider.getIconSvgTemplates();
      }

      get inlineSvgProvided() {
        return !!this.privateIconSvgTemplates;
      }

      renderedCallback() {
        if (this.iconName !== this.prevIconName && !this.inlineSvgProvided) {
          this.prevIconName = this.iconName;
          const svgElement = this.template.querySelector('svg');
          polyfill(svgElement);
          safariA11yPatch(svgElement);
        }
      }

      get href() {
        return this.src || getIconPath(this.iconName, configProvider.getLocale && configProvider.getLocale().dir);
      }

      get name() {
        return getName(this.iconName);
      }

      get normalizedSize() {
        return normalizeString(this.size, {
          fallbackValue: 'medium',
          validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
      }

      get normalizedVariant() {
        // NOTE: Leaving a note here because I just wasted a bunch of time
        // investigating why both 'bare' and 'inverse' are supported in
        // lightning-primitive-icon. lightning-icon also has a deprecated
        // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
        // that no classes should be applied. So this component needs to
        // support both 'bare' and 'inverse' while lightning-icon only needs to
        // support 'inverse'.
        return normalizeString(this.variant, {
          fallbackValue: '',
          validValues: ['bare', 'error', 'inverse', 'warning', 'success']
        });
      }

      get computedClass() {
        const {
          normalizedSize,
          normalizedVariant
        } = this;
        const classes = classSet(this.svgClass);

        if (normalizedVariant !== 'bare') {
          classes.add('slds-icon');
        }

        switch (normalizedVariant) {
          case 'error':
            classes.add('slds-icon-text-error');
            break;

          case 'warning':
            classes.add('slds-icon-text-warning');
            break;

          case 'success':
            classes.add('slds-icon-text-success');
            break;

          case 'inverse':
          case 'bare':
            break;

          default:
            // if custom icon is set, we don't want to set
            // the text-default class
            if (!this.src) {
              classes.add('slds-icon-text-default');
            }

        }

        if (normalizedSize !== 'medium') {
          classes.add(`slds-icon_${normalizedSize}`);
        }

        return classes.toString();
      }

      resolveTemplate() {
        const name = this.iconName;

        if (isValidName(name)) {
          const [spriteName, iconName] = name.split(':');
          const template = this.privateIconSvgTemplates[`${spriteName}_${iconName}`];

          if (template) {
            return template;
          }
        }

        return _tmpl;
      }

      render() {
        if (this.inlineSvgProvided) {
          return this.resolveTemplate();
        }

        return _tmpl;
      }

    }

    lwc.registerDecorators(LightningPrimitiveIcon, {
      publicProps: {
        iconName: {
          config: 0
        },
        src: {
          config: 0
        },
        svgClass: {
          config: 0
        },
        size: {
          config: 0
        },
        variant: {
          config: 0
        }
      }
    });

    var _lightningPrimitiveIcon = lwc.registerComponent(LightningPrimitiveIcon, {
      tmpl: _tmpl
    });

    function tmpl$1($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": $cmp.state.iconName,
          "size": $cmp.size,
          "variant": $cmp.variant,
          "src": $cmp.state.src
        },
        key: 2
      }, []), $cmp.alternativeText ? api_element("span", {
        classMap: {
          "slds-assistive-text": true
        },
        key: 3
      }, [api_dynamic($cmp.alternativeText)]) : null];
    }

    var _tmpl$2 = lwc.registerTemplate(tmpl$1);
    tmpl$1.stylesheets = [];
    tmpl$1.stylesheetTokens = {
      hostAttribute: "lightning-icon_icon-host",
      shadowAttribute: "lightning-icon_icon"
    };

    /**
     * Represents a visual element that provides context and enhances usability.
     */

    class LightningIcon extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.state = {};
        this.alternativeText = void 0;
      }

      /**
       * A uri path to a custom svg sprite, including the name of the resouce,
       * for example: /assets/icons/standard-sprite/svg/test.svg#icon-heart
       * @type {string}
       */
      get src() {
        return this.privateSrc;
      }

      set src(value) {
        this.privateSrc = value; // if value is not present, then we set the state back
        // to the original iconName that was passed
        // this might happen if the user sets a custom icon, then
        // decides to revert back to SLDS by removing the src attribute

        if (!value) {
          this.state.iconName = this.iconName;
          this.classList.remove('slds-icon-standard-default');
        } // if isIE11 and the src is set
        // we'd like to show the 'standard:default' icon instead
        // for performance reasons.


        if (value && isIE11) {
          this.setDefault();
          return;
        }

        this.state.src = value;
      }
      /**
       * The Lightning Design System name of the icon.
       * Names are written in the format 'utility:down' where 'utility' is the category,
       * and 'down' is the specific icon to be displayed.
       * @type {string}
       * @required
       */


      get iconName() {
        return this.privateIconName;
      }

      set iconName(value) {
        this.privateIconName = value; // if src is set, we don't need to validate
        // iconName

        if (this.src) {
          return;
        }

        if (isValidName(value)) {
          const isAction = getCategory(value) === 'action'; // update classlist only if new iconName is different than state.iconName
          // otherwise classListMutation receives class:true and class: false and removes slds class

          if (value !== this.state.iconName) {
            classListMutation(this.classList, {
              'slds-icon_container_circle': isAction,
              [computeSldsClass(value)]: true,
              [computeSldsClass(this.state.iconName)]: false
            });
          }

          this.state.iconName = value;
        } else {
          console.warn(`<lightning-icon> Invalid icon name ${value}`); // eslint-disable-line no-console
          // Invalid icon names should render a blank icon. Remove any
          // classes that might have been previously added.

          classListMutation(this.classList, {
            'slds-icon_container_circle': false,
            [computeSldsClass(this.state.iconName)]: false
          });
          this.state.iconName = undefined;
        }
      }
      /**
       * The size of the icon. Options include xx-small, x-small, small, medium, or large.
       * The default is medium.
       * @type {string}
       * @default medium
       */


      get size() {
        return normalizeString(this.state.size, {
          fallbackValue: 'medium',
          validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
        });
      }

      set size(value) {
        this.state.size = value;
      }
      /**
       * The variant changes the appearance of a utility icon.
       * Accepted variants include inverse, success, warning, and error.
       * Use the inverse variant to implement a white fill in utility icons on dark backgrounds.
       * @type {string}
       */


      get variant() {
        return normalizeVariant(this.state.variant, this.state.iconName);
      }

      set variant(value) {
        this.state.variant = value;
      }

      connectedCallback() {
        this.classList.add('slds-icon_container');
      }

      setDefault() {
        this.state.src = undefined;
        this.state.iconName = 'standard:default';
        this.classList.add('slds-icon-standard-default');
      }

    }

    lwc.registerDecorators(LightningIcon, {
      publicProps: {
        alternativeText: {
          config: 0
        },
        src: {
          config: 3
        },
        iconName: {
          config: 3
        },
        size: {
          config: 3
        },
        variant: {
          config: 3
        }
      },
      track: {
        state: 1
      }
    });

    var _lightningIcon = lwc.registerComponent(LightningIcon, {
      tmpl: _tmpl$2
    });

    function normalizeVariant(variant, iconName) {
      // Unfortunately, the `bare` variant was implemented to do what the
      // `inverse` variant should have done. Keep this logic for as long as
      // we support the `bare` variant.
      if (variant === 'bare') {
        // TODO: Deprecation warning using strippable assertion
        variant = 'inverse';
      }

      if (getCategory(iconName) === 'utility') {
        return normalizeString(variant, {
          fallbackValue: '',
          validValues: ['error', 'inverse', 'warning', 'success']
        });
      }

      return 'inverse';
    }

    function tmpl$2($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        className: $cmp.computedClass,
        attrs: {
          "role": "status"
        },
        key: 2
      }, [$cmp.validAlternativeText ? api_element("span", {
        classMap: {
          "slds-assistive-text": true
        },
        key: 3
      }, [api_dynamic($cmp.alternativeText)]) : null, api_element("div", {
        classMap: {
          "slds-spinner__dot-a": true
        },
        key: 4
      }, []), api_element("div", {
        classMap: {
          "slds-spinner__dot-b": true
        },
        key: 5
      }, [])])];
    }

    var _tmpl$3 = lwc.registerTemplate(tmpl$2);
    tmpl$2.stylesheets = [];
    tmpl$2.stylesheetTokens = {
      hostAttribute: "lightning-spinner_spinner-host",
      shadowAttribute: "lightning-spinner_spinner"
    };

    /**
     * Displays an animated spinner.
     */

    class LightningSpinner extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.alternativeText = void 0;
        this.size = 'medium';
        this.variant = void 0;
      }

      connectedCallback() {
        this.classList.add('slds-spinner_container');
        this.template.addEventListener('mousewheel', this.stopScrolling);
        this.template.addEventListener('touchmove', this.stopScrolling);
      }

      get normalizedVariant() {
        return normalizeString(this.variant, {
          fallbackValue: 'base',
          validValues: ['base', 'brand', 'inverse']
        });
      }

      get normalizedSize() {
        return normalizeString(this.size, {
          fallbackValue: 'medium',
          validValues: ['small', 'medium', 'large']
        });
      }

      get computedClass() {
        const {
          normalizedVariant,
          normalizedSize
        } = this;
        const classes = classSet('slds-spinner'); // add variant-specific class

        if (normalizedVariant !== 'base') {
          classes.add(`slds-spinner_${normalizedVariant}`);
        } // add size-specific class


        classes.add(`slds-spinner_${normalizedSize}`);
        return classes.toString();
      } // alternativeText validation


      get validAlternativeText() {
        const hasAlternativeText = !!this.alternativeText; // if we have an empty value output a console warning

        if (!hasAlternativeText) {
          // eslint-disable-next-line no-console
          console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
        }

        return hasAlternativeText;
      } // prevent scrolling


      stopScrolling(event) {
        event.preventDefault();
      }

    }

    lwc.registerDecorators(LightningSpinner, {
      publicProps: {
        alternativeText: {
          config: 0
        },
        size: {
          config: 0
        },
        variant: {
          config: 0
        }
      }
    });

    var _lightningSpinner = lwc.registerComponent(LightningSpinner, {
      tmpl: _tmpl$3
    });

    function tmpl$3($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element,
        d: api_dynamic,
        c: api_custom_element,
        b: api_bind,
        s: api_slot
      } = $api;
      const {
        _m0,
        _m1,
        _m2,
        _m3,
        _m4,
        _m5,
        _m6,
        _m7,
        _m8,
        _m9,
        _m10,
        _m11,
        _m12,
        _m13,
        _m14
      } = $ctx;
      return [api_element("button", {
        className: $cmp.computedButtonClass,
        attrs: {
          "aria-expanded": $cmp.computedAriaExpanded,
          "title": $cmp.computedTitle,
          "accesskey": $cmp.computedAccessKey,
          "value": $cmp.value,
          "aria-haspopup": "true",
          "type": "button"
        },
        props: {
          "disabled": $cmp.disabled
        },
        key: 2,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleButtonClick)),
          "keydown": _m1 || ($ctx._m1 = api_bind($cmp.handleButtonKeyDown)),
          "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
          "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleFocus)),
          "mousedown": _m4 || ($ctx._m4 = api_bind($cmp.handleButtonMouseDown))
        }
      }, [$cmp.isDraft ? api_element("abbr", {
        classMap: {
          "slds-indicator_unsaved": true,
          "slds-p-right_xx-small": true
        },
        attrs: {
          "title": $cmp.draftAlternativeText
        },
        key: 3
      }, [api_text("*")]) : null, api_dynamic($cmp.label), api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": $cmp.iconName,
          "svgClass": "slds-button__icon",
          "variant": "bare"
        },
        key: 4
      }, []), $cmp.computedShowDownIcon ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": "utility:down",
          "svgClass": "slds-button_icon slds-button__icon_x-small slds-m-left_xx-small",
          "variant": "bare"
        },
        key: 6
      }, []) : null, api_element("span", {
        classMap: {
          "slds-assistive-text": true
        },
        key: 7
      }, [api_dynamic($cmp.computedAlternativeText)])]), $cmp._dropdownOpened ? api_element("div", {
        className: $cmp.computedDropdownClass,
        key: 9,
        on: {
          "mousedown": _m11 || ($ctx._m11 = api_bind($cmp.handleDropdownMouseDown)),
          "mouseup": _m12 || ($ctx._m12 = api_bind($cmp.handleDropdownMouseUp)),
          "mouseleave": _m13 || ($ctx._m13 = api_bind($cmp.handleDropdownMouseLeave)),
          "scroll": _m14 || ($ctx._m14 = api_bind($cmp.handleDropdownScroll))
        }
      }, [$cmp.isLoading ? api_custom_element("lightning-spinner", _lightningSpinner, {
        props: {
          "size": "small",
          "alternativeText": $cmp.computedLoadingStateAlternativeText
        },
        key: 11
      }, []) : null, !$cmp.isLoading ? api_element("div", {
        classMap: {
          "slds-dropdown__list": true
        },
        attrs: {
          "role": "menu"
        },
        key: 13,
        on: {
          "privateselect": _m5 || ($ctx._m5 = api_bind($cmp.handleMenuItemPrivateSelect)),
          "privateblur": _m6 || ($ctx._m6 = api_bind($cmp.handlePrivateBlur)),
          "privatefocus": _m7 || ($ctx._m7 = api_bind($cmp.handlePrivateFocus)),
          "mouseover": _m8 || ($ctx._m8 = api_bind($cmp.handleMouseOverOnMenuItem)),
          "mouseout": _m9 || ($ctx._m9 = api_bind($cmp.allowBlur)),
          "keydown": _m10 || ($ctx._m10 = api_bind($cmp.handleKeyOnMenuItem))
        }
      }, [api_slot("", {
        key: 14
      }, [], $slotset)]) : null]) : null];
    }

    var _tmpl$4 = lwc.registerTemplate(tmpl$3);
    tmpl$3.slots = [""];
    tmpl$3.stylesheets = [];
    tmpl$3.stylesheetTokens = {
      hostAttribute: "lightning-buttonMenu_buttonMenu-host",
      shadowAttribute: "lightning-buttonMenu_buttonMenu"
    };

    var labelLoading = 'Loading menu items...';

    var labelShowMenu = 'Show menu';

    /*
     * This is following the practices listed in
     *
     * https://www.w3.org/TR/wai-aria-practices/#menu
     *
     * and
     *
     * https://www.w3.org/TR/wai-aria-practices/#menubutton
     */

    function preventDefaultAndStopPropagation(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    function moveFocusToTypedCharacters(event, menuInterface) {
      runActionOnBufferedTypedCharacters(event, menuInterface.focusMenuItemWithText);
    }

    function handleKeyDownOnMenuItem(event, menuItemIndex, menuInterface) {
      switch (event.keyCode) {
        // W3: Down Arrow and Up Arrow: move focus to the next and previous items, respectively, optionally
        // wrapping from last to first and vice versa.
        case keyCodes.down:
        case keyCodes.up:
          // eslint-disable-line no-case-declarations
          preventDefaultAndStopPropagation(event);
          let nextIndex = event.keyCode === keyCodes.up ? menuItemIndex - 1 : menuItemIndex + 1;
          const totalMenuItems = menuInterface.getTotalMenuItems();

          if (nextIndex >= totalMenuItems) {
            nextIndex = 0;
          } else if (nextIndex < 0) {
            nextIndex = totalMenuItems - 1;
          }

          menuInterface.focusOnIndex(nextIndex);
          break;
        // W3: Home and End: If arrow key wrapping is not supported, move focus to first and last item
        // Note: We do support wrapping, but it doesn't hurt to support these keys anyway.

        case keyCodes.home:
          preventDefaultAndStopPropagation(event);
          menuInterface.focusOnIndex(0);
          break;

        case keyCodes.end:
          preventDefaultAndStopPropagation(event);
          menuInterface.focusOnIndex(menuInterface.getTotalMenuItems() - 1);
          break;
        // W3: Escape: Close the menu and return focus to the element or context, e.g., menu button or
        // parent menu item, from which the menu was opened
        // Tab: Close the menu and all open parent menus and move focus to the next element in the tab sequence.
        // Note: We don't have to do anything special for Tab because we're not stopping the event, we'll first
        // return the focus and the browser will then handle the tab key default event and will move the focus
        // appropriately. It's handy to return focus for 'Tab' anyway for cases where the menu is in a detached
        // popup (one that's using a panel attached directly to the body).

        case keyCodes.escape:
        case keyCodes.tab:
          // hide menu item list if it is visible
          if (menuInterface.isMenuVisible()) {
            // prevent default escape key action only when menu is visible
            if (event.keyCode === keyCodes.escape) {
              preventDefaultAndStopPropagation(event);
            }

            menuInterface.toggleMenuVisibility();
          }

          menuInterface.returnFocus();
          break;

        default:
          // W3: Any key that corresponds to a printable character: Move focus to the next menu item in the
          // current menu whose label begins with that printable character.
          // Note: we actually support a buffer, and in the current implementation it would jump to
          // the first menu item that matches not next.
          moveFocusToTypedCharacters(event, menuInterface);
      }
    }
    function handleKeyDownOnMenuTrigger(event, menuInterface) {
      const isVisible = menuInterface.isMenuVisible();

      switch (event.keyCode) {
        // W3 suggests that opening a menu should place the focus on the first item (as we do with Up/Down),
        // but we're not doing that because it would differ from most of the native menus behaviour.
        case keyCodes.enter:
        case keyCodes.space:
          preventDefaultAndStopPropagation(event);
          menuInterface.toggleMenuVisibility();
          break;

        case keyCodes.down:
        case keyCodes.up:
          preventDefaultAndStopPropagation(event);

          if (!isVisible) {
            // default to first menu item
            let focusNextIndex = 0; // if key was up-arrow then set to last menu item

            if (event.keyCode === keyCodes.up) {
              focusNextIndex = 'LAST';
            }

            menuInterface.setNextFocusIndex(focusNextIndex);
            menuInterface.toggleMenuVisibility();
          }

          break;
        // W3: Home and End: If arrow key wrapping is not supported, move focus to first and last item
        // Note: We do support wrapping, but it doesn't hurt to support these keys anyway.

        case keyCodes.home:
          preventDefaultAndStopPropagation(event);
          menuInterface.focusOnIndex(0);
          break;

        case keyCodes.end:
          preventDefaultAndStopPropagation(event);
          menuInterface.focusOnIndex(menuInterface.getTotalMenuItems() - 1);
          break;
        // W3: Escape: Close the menu and return focus to the element or context, e.g., menu button or
        // parent menu item, from which the menu was opened

        case keyCodes.escape:
        case keyCodes.tab:
          if (isVisible) {
            preventDefaultAndStopPropagation(event);
            menuInterface.toggleMenuVisibility();
          }

          break;

        default:
          if (!isVisible && menuInterface.showDropdownWhenTypingCharacters) {
            preventDefaultAndStopPropagation(event);
            menuInterface.toggleMenuVisibility();
          } else if (!isVisible) {
            break;
          } // eslint-disable-next-line lwc/no-raf


          window.requestAnimationFrame(() => {
            moveFocusToTypedCharacters(event, menuInterface);
          });
      }
    }

    const POSITION_ATTR_NAME = 'data-position-id';

    class BrowserWindow {
      get window() {
        if (!this._window) {
          this._window = window; // JTEST/Ingtegration: getComputedStyle may be null

          if (!this.window.getComputedStyle) {
            this.window.getComputedStyle = node => {
              return node.style;
            };
          }
        }

        return this._window;
      }

      mockWindow(value) {
        // For test, allow mock window.
        this._window = value;
      }

      get documentElement() {
        assert(this.window.document, 'Missing window.document');
        return this.window.document.documentElement;
      }

      get MutationObserver() {
        return this.window.MutationObserver;
      }

      isWindow(element) {
        return element && element.toString() === '[object Window]';
      }

    }

    const WindowManager = new BrowserWindow(); // A global

    let passiveEventsSupported;

    function supportsPassiveEvents() {
      if (typeof passiveEventsSupported !== 'boolean') {
        passiveEventsSupported = false;

        try {
          const opts = Object.defineProperty({}, 'passive', {
            get: () => {
              passiveEventsSupported = true;
            }
          });
          window.addEventListener('testPassive', null, opts);
          window.removeEventListener('testPassive', null, opts); // eslint-disable-next-line no-empty
        } catch (e) {}
      }

      return passiveEventsSupported;
    }

    function attachPassiveEvent(element, eventName, callback) {
      const options = supportsPassiveEvents() ? {
        passive: true
      } : false;
      element.addEventListener(eventName, callback, options);
      return () => {
        element.removeEventListener(eventName, callback, options);
      };
    }

    function isShadowRoot(node) {
      return node && node.nodeType === 11;
    }

    function enumerateParent(elem, stopEl, checker) {
      // document.body is not necessarily a body tag, because of the (very rare)
      // case of a frameset.
      if (!elem || elem === stopEl || elem === document.body) {
        return null;
      } // if overflow is auto and overflow-y is also auto,
      // however in firefox the opposite is not true


      try {
        // getComputedStyle throws an exception
        // if elem is not an element
        // (can happen during unrender)
        const computedStyle = WindowManager.window.getComputedStyle(elem);

        if (!computedStyle) {
          return null;
        }

        if (checker(computedStyle)) {
          return elem;
        }

        return enumerateParent(isShadowRoot(elem.parentNode) ? elem.parentNode.host : elem.parentNode, stopEl, checker);
      } catch (e) {
        return null;
      }
    }

    function getScrollableParent(elem, stopEl) {
      return enumerateParent(elem, stopEl, computedStyle => {
        const overflow = computedStyle['overflow-y'];
        return overflow === 'auto' || overflow === 'scroll';
      });
    }

    function queryOverflowHiddenParent(elem, stopEl) {
      return enumerateParent(elem, stopEl, computedStyle => {
        return computedStyle['overflow-x'] === 'hidden' || computedStyle['overflow-y'] === 'hidden';
      });
    }

    function isInDom(el) {
      if (el === WindowManager.window) {
        return true;
      }

      if (!isShadowRoot(el.parentNode) && el.parentNode && el.parentNode.tagName && el.parentNode.tagName.toUpperCase() === 'BODY') {
        return true;
      }

      if (isShadowRoot(el.parentNode) && el.parentNode.host) {
        return isInDom(el.parentNode.host);
      }

      if (el.parentNode) {
        return isInDom(el.parentNode);
      }

      return false;
    }
    function isScrolling(elem) {
      return elem.scrollHeight > elem.clientHeight;
    }
    function isDomNode(obj) {
      return obj.nodeType && (obj.nodeType === 1 || obj.nodeType === 11);
    }
    function timeout(time) {
      return new Promise(resolve => {
        // eslint-disable-next-line lwc/no-set-timeout
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
    function containsScrollingElement(list) {
      const len = list.length;

      if (!len) {
        return false;
      }

      for (let i = 0; i < len; i++) {
        if (isScrolling(list[i])) {
          return true;
        }
      }

      return false;
    }
    function queryScrollableChildren(element) {
      return element.querySelectorAll('[data-scoped-scroll="true"]');
    }
    function getPositionTarget(element) {
      return element.tagName === 'TEXTAREA' ? isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode : element;
    }
    let lastId = 1000000;
    function generateUniqueSelector() {
      return `lgcp-${lastId++}`;
    }
    function normalizeElement(element) {
      const selector = generateUniqueSelector();
      element.setAttribute(POSITION_ATTR_NAME, selector);
      element = document.querySelector(`[${POSITION_ATTR_NAME}="${selector}"]`) || element;
      return element;
    }

    function isInsideOverlay(element, modalOnly) {
      if (!element) {
        return false;
      }

      if (element.classList && (element.classList.contains('uiModal') || !modalOnly && element.classList.contains('uiPanel'))) {
        return true;
      }

      if (!element.parentNode) {
        return false;
      }

      return isInsideOverlay(isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode, modalOnly);
    }

    function isInsideModal(element) {
      return isInsideOverlay(element, true);
    }
    function normalizePosition(element, nextIndex, target, alignWidth) {
      // Set element position to fixed
      // 1. element is inside overlay
      // or 2. When element isn't align with target's width, and target's parent has overflow-x:hidden setting.
      const isFixed = isInsideOverlay(element) || !alignWidth && queryOverflowHiddenParent(target, WindowManager.window, true);
      element.style.position = isFixed ? 'fixed' : 'absolute';
      element.style.zIndex = nextIndex || 0;
      element.style.left = '-9999px'; // Avoid flicker

      element.style.top = '0px'; // Avoid flicker

      return element;
    }
    function requestAnimationFrameAsPromise() {
      return new Promise(resolve => {
        requestAnimationFrame(() => resolve());
      });
    }

    const Direction = {
      Center: 'center',
      Middle: 'middle',
      Right: 'right',
      Left: 'left',
      Bottom: 'bottom',
      Top: 'top',
      Default: 'default'
    };
    const VerticalMap = {
      top: Direction.Top,
      bottom: Direction.Bottom,
      center: Direction.Middle
    };
    const HorizontalMap = {
      left: Direction.Left,
      right: Direction.Right,
      center: Direction.Center
    };
    const FlipMap = {
      left: Direction.Right,
      right: Direction.Left,
      top: Direction.Bottom,
      bottom: Direction.Top,
      center: Direction.Center,
      default: Direction.Right
    };

    function getWindowSize() {
      return {
        width: WindowManager.window.innerWidth || document.body.clientWidth || 0,
        height: WindowManager.window.innerHeight || document.body.clientHeight || 0
      };
    }

    function normalizeDirection(direction, defaultValue) {
      return normalizeString(direction, {
        fallbackValue: defaultValue || Direction.Default,
        validValues: [Direction.Center, Direction.Right, Direction.Left, Direction.Bottom, Direction.Top, Direction.Middle, Direction.Default]
      });
    }
    function mapToHorizontal(value) {
      value = normalizeDirection(value, Direction.Left);
      return HorizontalMap[value];
    }
    function mapToVertical(value) {
      value = normalizeDirection(value, Direction.Left);
      return VerticalMap[value];
    }
    function flipDirection(value) {
      value = normalizeDirection(value, Direction.Left);
      return FlipMap[value];
    } // TODO: Remove, not currently in use.
    function checkFlipPossibility(element, target, leftAsBoundary) {
      const viewPort = getWindowSize();
      const elemRect = element.getBoundingClientRect();
      const referenceElemRect = target.getBoundingClientRect();
      const height = typeof elemRect.height !== 'undefined' ? elemRect.height : elemRect.bottom - elemRect.top;
      const width = typeof elemRect.width !== 'undefined' ? elemRect.width : elemRect.right - elemRect.left; // TODO: We'll need to revisit the leftAsBoundary config property. Either we'll need a better
      // name to cover the RTL language cases and maybe open up the possibility of bounding the
      // element to the target in both the horizontal and vertical directions.
      // The boundary shrinks the available area to the edge of the target rather than the viewport.

      let rightAsBoundary = false;

      if (document.dir === 'rtl') {
        rightAsBoundary = leftAsBoundary;
        leftAsBoundary = false;
      }

      const hasSpaceAbove = referenceElemRect.top >= height;
      const hasSpaceBelow = viewPort.height - referenceElemRect.bottom >= height; // Assuming left alignment is specified this tests if:
      // - there's room to accommodate the element with right alignment
      // - there's not enough room to accommodate the element with left alignment

      const shouldAlignToRight = referenceElemRect.right >= width && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width); // Assuming right alignment is specified this tests if:
      // - there's room to accommodate the element with left alignment
      // - there's not enough room to accommodate the element with right alignment

      const shouldAlignToLeft = referenceElemRect.left + width <= viewPort.width && referenceElemRect.right - width < (leftAsBoundary ? referenceElemRect.left : 0); // Assuming center alignment, does the viewport have space to fit half of the element around
      // the target?

      const centerOverflow = {
        left: referenceElemRect.left - width * 0.5 < 0,
        right: referenceElemRect.right + width * 0.5 > viewPort.width,
        top: referenceElemRect.top - height * 0.5 < 0,
        bottom: referenceElemRect.bottom + height * 0.5 > viewPort.height
      };
      return {
        shouldAlignToLeft,
        shouldAlignToRight,
        hasSpaceAbove,
        hasSpaceBelow,
        centerOverflow
      };
    }

    class Transformer {
      constructor(pad, boxDirections, transformX, transformY) {
        this.pad = pad || 0;
        this.boxDirections = boxDirections || {
          left: true,
          right: true
        };

        this.transformX = transformX || function () {};

        this.transformY = transformY || function () {};
      }

      transform() {// no-op
      }

    }

    class TopTransformer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          top: this.transformY(targetBox.top, targetBox, elementBox) + this.pad
        };
      }

    }

    class BottomTransFormer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          top: this.transformY(targetBox.top, targetBox, elementBox) - elementBox.height - this.pad
        };
      }

    }

    class CenterTransformer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) - 0.5 * elementBox.width)
        };
      }

    }

    class MiddleTransformer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          top: Math.floor(0.5 * (2 * targetBox.top + targetBox.height - elementBox.height))
        };
      }

    }

    class LeftTransformer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          left: this.transformX(targetBox.left, targetBox, elementBox) + this.pad
        };
      }

    }

    class RightTransformer extends Transformer {
      transform(targetBox, elementBox) {
        return {
          left: this.transformX(targetBox.left, targetBox, elementBox) - elementBox.width - this.pad
        };
      }

    }

    class BelowTransformer extends Transformer {
      transform(targetBox, elementBox) {
        const top = targetBox.top + targetBox.height + this.pad;
        return elementBox.top < top ? {
          top
        } : {};
      }

    }

    const MIN_HEIGHT = 36; // Minimum Line Height

    const MIN_WIDTH = 36;

    class ShrinkingBoxTransformer extends Transformer {
      transform(targetBox, elementBox) {
        const retBox = {};

        if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
          retBox.top = targetBox.top + this.pad;
          retBox.height = Math.max(elementBox.height - (retBox.top - elementBox.top), MIN_HEIGHT);
        }

        if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
          retBox.left = targetBox.left + this.pad;
          retBox.width = Math.max(elementBox.width - (retBox.left - elementBox.left), MIN_WIDTH);
        }

        if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
          retBox.right = targetBox.left + targetBox.width - this.pad;
          retBox.width = Math.max(retBox.right - (retBox.left || elementBox.left), MIN_WIDTH);
        }

        if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
          retBox.bottom = targetBox.top + targetBox.height - this.pad;
          retBox.height = Math.max(retBox.bottom - (retBox.top || elementBox.top), MIN_HEIGHT);
        }

        return retBox;
      }

    }

    class BoundingBoxTransformer extends Transformer {
      transform(targetBox, elementBox) {
        const retBox = {};

        if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
          retBox.top = targetBox.top + this.pad;
        }

        if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
          retBox.left = targetBox.left + this.pad;
        }

        if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
          retBox.left = targetBox.left + targetBox.width - elementBox.width - this.pad;
        }

        if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
          retBox.top = targetBox.top + targetBox.height - elementBox.height - this.pad;
        }

        return retBox;
      }

    }

    class InverseBoundingBoxTransformer extends Transformer {
      transform(targetBox, elementBox) {
        const retBox = {};

        if (this.boxDirections.left && targetBox.left - this.pad < elementBox.left) {
          retBox.left = targetBox.left - this.pad;
        }

        if (this.boxDirections.right && elementBox.left + elementBox.width < targetBox.left + targetBox.width + this.pad) {
          retBox.left = targetBox.width + this.pad - elementBox.width + targetBox.left;
        }

        if (this.boxDirections.top && targetBox.top < elementBox.top + this.pad) {
          retBox.top = targetBox.top - this.pad;
        }

        if (this.boxDirections.bottom && elementBox.top + elementBox.height < targetBox.top + targetBox.height + this.pad) {
          retBox.top = targetBox.height + this.pad - elementBox.height + targetBox.top;
        }

        return retBox;
      }

    }

    const TransformFunctions = {
      center(input, targetBox) {
        return Math.floor(input + 0.5 * targetBox.width);
      },

      right(input, targetBox) {
        return input + targetBox.width;
      },

      left(input) {
        return input;
      },

      bottom(input, targetBox) {
        return input + targetBox.height;
      }

    };
    const Transformers = {
      top: TopTransformer,
      bottom: BottomTransFormer,
      center: CenterTransformer,
      middle: MiddleTransformer,
      left: LeftTransformer,
      right: RightTransformer,
      below: BelowTransformer,
      'bounding box': BoundingBoxTransformer,
      'shrinking box': ShrinkingBoxTransformer,
      'inverse bounding box': InverseBoundingBoxTransformer,
      default: Transformer
    };
    function toTransformFunctions(value) {
      return TransformFunctions[value] || TransformFunctions.left;
    }

    class TransformBuilder {
      type(value) {
        this._type = value;
        return this;
      }

      align(horizontal, vertical) {
        this._transformX = toTransformFunctions(horizontal);
        this._transformY = toTransformFunctions(vertical);
        return this;
      }

      pad(value) {
        this._pad = parseInt(value, 10);
        return this;
      }

      boxDirections(value) {
        this._boxDirections = value;
        return this;
      }

      build() {
        const AConstructor = Transformers[this._type] ? Transformers[this._type] : Transformers[Direction.Default];
        return new AConstructor(this._pad || 0, this._boxDirections || {}, this._transformX || toTransformFunctions(Direction.left), this._transformY || toTransformFunctions(Direction.left));
      }

    }

    class Constraint {
      constructor(type, config) {
        const {
          target,
          element,
          pad,
          boxDirections
        } = config;
        const {
          horizontal,
          vertical
        } = config.targetAlign;
        this._element = element;
        this._targetElement = target;
        this.destroyed = false;
        this._transformer = new TransformBuilder().type(type).align(horizontal, vertical).pad(pad).boxDirections(boxDirections).build();
      }

      detach() {
        this._disabled = true;
      }

      attach() {
        this._disabled = false;
      }

      computeDisplacement() {
        if (!this._disabled) {
          this._targetElement.refresh();

          this._element.refresh();

          this._pendingBox = this._transformer.transform(this._targetElement, this._element);
        }

        return this;
      }

      computePosition() {
        const el = this._element;

        if (!this._disabled) {
          Object.keys(this._pendingBox).forEach(key => {
            el.setDirection(key, this._pendingBox[key]);
          });
        }

        return this;
      }

      destroy() {
        this._element.release();

        this._targetElement.release();

        this._disabled = true;
        this.destroyed = true;
      }

    }

    class ElementProxy {
      constructor(el, id) {
        this.id = id;
        this.width = 0;
        this.height = 0;
        this.left = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this._dirty = false;
        this._node = null;
        this._releaseCb = null;

        if (!el) {
          throw new Error('Element missing');
        } // W-3262919
        // for some reason I cannot figure out sometimes the
        // window, which clearly a window object, is not the window object
        // this will correct that. It might be related to locker


        if (WindowManager.isWindow(el)) {
          el = WindowManager.window;
        }

        this._node = el;
        this.setupObserver();
        this.refresh();
      }

      setupObserver() {
        // this check is because phantomjs does not support
        // mutation observers. The consqeuence here
        // is that any browser without mutation observers will
        // fail to update dimensions if they changwe after the proxy
        // is created and the proxy is not not refreshed
        if (WindowManager.MutationObserver && !this._node.isObserved) {
          // Use mutation observers to invalidate cache. It's magic!
          this._observer = new WindowManager.MutationObserver(this.refresh.bind(this)); // do not observe the window

          if (!WindowManager.isWindow(this._node)) {
            this._observer.observe(this._node, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true
            });

            this._node.isObserved = true;
          }
        }
      }

      setReleaseCallback(cb, scope) {
        const scopeObj = scope || this;
        this._releaseCb = cb.bind(scopeObj);
      }

      checkNodeIsInDom() {
        // if underlying DOM node is gone,
        // this proxy should be released
        if (!isInDom(this._node)) {
          return false;
        }

        return true;
      }

      refresh() {
        const w = WindowManager.window;

        if (!this.isDirty()) {
          if (!this.checkNodeIsInDom()) {
            return this.release();
          }

          let box, x, scrollTop, scrollLeft;

          if (typeof w.pageYOffset !== 'undefined') {
            scrollTop = w.pageYOffset;
            scrollLeft = w.pageXOffset;
          } else {
            scrollTop = w.scrollY;
            scrollLeft = w.scrollX;
          }

          if (!WindowManager.isWindow(this._node)) {
            // force paint
            // eslint-disable-next-line no-unused-vars
            const offsetHeight = this._node.offsetHeight;
            box = this._node.getBoundingClientRect(); // not using integers causes weird rounding errors
            // eslint-disable-next-line guard-for-in

            for (x in box) {
              this[x] = Math.floor(box[x]);
            }

            this.top = Math.floor(this.top + scrollTop);
            this.bottom = Math.floor(this.top + box.height);
            this.left = Math.floor(this.left + scrollLeft);
            this.right = Math.floor(this.left + box.width);
          } else {
            box = {};
            this.width = WindowManager.documentElement.clientWidth;
            this.height = WindowManager.documentElement.clientHeight;
            this.left = scrollLeft;
            this.top = scrollTop;
            this.right = WindowManager.documentElement.clientWidth + scrollLeft;
            this.bottom = WindowManager.documentElement.clientHeight;
          }

          this._dirty = false;
        }

        return this._dirty;
      }

      getNode() {
        return this._node;
      }

      isDirty() {
        return this._dirty;
      }

      bake() {
        const w = WindowManager.window;

        const absPos = this._node.getBoundingClientRect();

        const style = w.getComputedStyle(this._node) || this._node.style;

        const hasPageOffset = typeof w.pageYOffset !== 'undefined';
        const scrollTop = hasPageOffset ? w.pageYOffset : w.scrollY;
        const scrollLeft = hasPageOffset ? w.pageXOffset : w.scrollX;
        const originalLeft = style.left.match(/auto|fixed/) ? '0' : parseInt(style.left.replace('px', ''), 10);
        const originalTop = style.top.match(/auto|fixed/) ? '0' : parseInt(style.top.replace('px', ''), 10);
        const leftDif = Math.round(this.left - (absPos.left + scrollLeft));
        const topDif = this.top - (absPos.top + scrollTop);
        this._node.style.left = `${originalLeft + leftDif}px`;
        this._node.style.top = `${originalTop + topDif}px`;

        if (this._restoreSize) {
          // Only store the first height/width which is the original height/width.
          this.originalHeight = this.originalHeight || this._node.style.height;
          this.originalWidth = this.originalWidth || this._node.style.width;
          this._node.style.width = `${this.width}px`;
          this._node.style.height = `${this.height}px`;
        }

        this._dirty = false;
      }

      setDirection(direction, val) {
        this[direction] = val;
        this._dirty = true; // if size is changed, should restore the original size.

        if (direction === 'height' || direction === 'width') {
          this._restoreSize = true;
        }
      }

      release() {
        if (this._restoreSize) {
          this._node.style.width = this.originalWidth;
          this._node.style.height = this.originalHeight;

          if (this._removeMinHeight) {
            this._node.style.minHeight = '';
          }
        }

        if (this._releaseCb) {
          this._releaseCb(this);
        }
      }

      querySelectorAll(selector) {
        return this._node.querySelectorAll(selector);
      }

    }

    class ProxyCache {
      constructor() {
        this.proxyCache = {};
      }

      get count() {
        return Object.keys(this.proxyCache).length;
      }

      releaseOrphanProxies() {
        for (const proxy in this.proxyCache) {
          if (!this.proxyCache[proxy].el.checkNodeIsInDom()) {
            this.proxyCache[proxy].el.release();
          }
        }
      }

      bakeOff() {
        for (const proxy in this.proxyCache) {
          if (this.proxyCache[proxy].el.isDirty()) {
            this.proxyCache[proxy].el.bake();
          }
        }
      }

      getReferenceCount(proxy) {
        const id = proxy.id;

        if (!id || !this.proxyCache[id]) {
          return 0;
        }

        return this.proxyCache[id].refCount;
      }

      release(proxy) {
        const proxyInstance = this.proxyCache[proxy.id];

        if (proxyInstance) {
          --proxyInstance.refCount;
        }

        if (proxyInstance && proxyInstance.refCount <= 0) {
          delete this.proxyCache[proxy.id];
        }
      }

      reset() {
        this.proxyCache = {};
      }

      create(element) {
        let key = 'window';

        if (!WindowManager.isWindow(element)) {
          key = element ? element.getAttribute(POSITION_ATTR_NAME) : null; // 1 - Node.ELEMENT_NODE, 11 - Node.DOCUMENT_FRAGMENT_NODE

          assert(key && element.nodeType && (element.nodeType !== 1 || element.nodeType !== 11), `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`);
        }

        if (this.proxyCache[key]) {
          this.proxyCache[key].refCount++;
          return this.proxyCache[key].el;
        }

        const newProxy = new ElementProxy(element, key);
        newProxy.setReleaseCallback(release, newProxy);
        this.proxyCache[key] = {
          el: newProxy,
          refCount: 1
        }; // run GC

        timeout(0).then(() => {
          this.releaseOrphanProxies();
        });
        return this.proxyCache[key].el;
      }

    }

    const elementProxyCache = new ProxyCache();
    function bakeOff() {
      elementProxyCache.bakeOff();
    }
    function release(proxy) {
      return elementProxyCache.release(proxy);
    }
    function createProxy(element) {
      return elementProxyCache.create(element);
    }

    class RepositionQueue {
      constructor() {
        this.callbacks = [];
        this.repositionScheduled = false;
        this._constraints = [];
        this.timeoutId = 0;
        this.lastIndex = getZIndexBaseline();
        this.eventsBound = false;
      }

      get nextIndex() {
        return this.lastIndex++;
      }

      get constraints() {
        return this._constraints;
      }

      set constraints(value) {
        this._constraints = this._constraints.concat(value);
      }

      dispatchRepositionCallbacks() {
        while (this.callbacks.length > 0) {
          this.callbacks.shift()();
        }
      }

      add(callback) {
        if (typeof callback === 'function') {
          this.callbacks.push(callback);
          return true;
        }

        return false;
      }

      scheduleReposition(callback) {
        if (this.timeoutId === 0) {
          // eslint-disable-next-line lwc/no-set-timeout
          this.timeoutId = setTimeout(() => {
            this.reposition(callback);
          }, 10);
        }
      }

      reposition(callback) {
        // all the callbacks will be called
        if (typeof callback === 'function') {
          this.callbacks.push(callback);
        } // this is for throttling


        clearTimeout(this.timeoutId);
        this.timeoutId = 0; // this semaphore is to make sure
        // if reposition is called twice within one frame
        // we only run this once

        if (!this.repositionScheduled) {
          requestAnimationFrame(() => {
            this.repositionScheduled = false; // this must be executed in order or constraints
            // will behave oddly

            this._constraints = this._constraints.filter(constraint => {
              if (!constraint.destroyed) {
                constraint.computeDisplacement().computePosition();
                return true;
              }

              return false;
            });
            bakeOff();
            this.dispatchRepositionCallbacks();
          });
          this.repositionScheduled = true;
        }
      }

      get repositioning() {
        if (!this._reposition) {
          this._reposition = this.scheduleReposition.bind(this);
        }

        return this._reposition;
      }

      bindEvents() {
        if (!this.eventsBound) {
          window.addEventListener('resize', this.repositioning);
          window.addEventListener('scroll', this.repositioning);
          this.eventsBound = true;
        }
      }

      detachEvents() {
        window.removeEventListener('resize', this.repositioning);
        window.removeEventListener('scroll', this.repositioning);
        this.eventsBound = false;
      }

    }

    const positionQueue = new RepositionQueue();
    function scheduleReposition(callback) {
      positionQueue.scheduleReposition(callback);
    }
    function bindEvents() {
      positionQueue.bindEvents();
    }
    function addConstraints(list) {
      positionQueue.constraints = list;
    }
    function reposition(callback) {
      positionQueue.reposition(callback);
    }
    function nextIndex() {
      return positionQueue.nextIndex;
    }

    class Relationship {
      constructor(config, constraintList, scrollableParent) {
        this.config = config;
        this.constraintList = constraintList;
        this.scrollableParent = scrollableParent;
      }

      disable() {
        this.constraintList.forEach(constraintToDisable => {
          constraintToDisable.detach();
        });
      }

      enable() {
        this.constraintList.forEach(constraintToEnable => {
          constraintToEnable.attach();
        });
      }

      destroy() {
        if (this.config.removeListeners) {
          this.config.removeListeners();
          this.config.removeListeners = undefined;
        }

        while (this.constraintList.length > 0) {
          this.constraintList.pop().destroy();
        } // Clean up node appended to body of dom


        if (this.config.appendToBody && this.config.element) {
          const nodeToRemove = document.querySelector(`[${POSITION_ATTR_NAME}="${this.config.element.getAttribute(POSITION_ATTR_NAME)}"]`);

          if (nodeToRemove) {
            nodeToRemove.parentNode.removeChild(nodeToRemove);
          }
        }
      }

      reposition() {
        return new Promise(resolve => {
          reposition(() => {
            resolve();
          });
        });
      }

    }

    const DEFAULT_MIN_HEIGHT = '1.875rem';

    function setupObserver(config, scrollableParent) {
      let proxyWheelEvents = true;

      if (WindowManager.MutationObserver && !config.element.isObserved) {
        // phantomjs :(
        let scrollableChildren = queryScrollableChildren(config.element);
        const observer = new WindowManager.MutationObserver(() => {
          scrollableChildren = queryScrollableChildren(config.element);
          proxyWheelEvents = !containsScrollingElement(scrollableChildren);
        });

        if (containsScrollingElement(scrollableChildren)) {
          proxyWheelEvents = false;
        }

        observer.observe(config.element, {
          attributes: true,
          subtree: true,
          childList: true
        });
        config.element.isObserved = true;
      }

      if (scrollableParent) {
        const scrollRemovalFunction = attachPassiveEvent(scrollableParent, 'scroll', scheduleReposition); // if the target element is inside a
        // scrollable element, we need to make sure
        // scroll events move that element,
        // not the parent, also we need to reposition on scroll

        const wheelRemovalFunction = attachPassiveEvent(config.element, 'wheel', e => {
          if (proxyWheelEvents && scrollableParent && typeof scrollableParent.scrollTop !== 'undefined') {
            scrollableParent.scrollTop += e.deltaY;
          }
        });

        config.removeListeners = () => {
          scrollRemovalFunction();
          wheelRemovalFunction();
        };
      }
    }

    function validateConfig(config) {
      assert(config.element && isDomNode(config.element), 'Element is undefined or missing, or not a Dom Node');
      assert(config.target && (WindowManager.isWindow(config.target) || isDomNode(config.target)), 'Target is undefined or missing');
    }

    function createRelationship(config) {
      bindEvents();
      config.element = normalizePosition(config.element, nextIndex(), config.target, config.alignWidth);

      if (config.alignWidth && config.element.style.position === 'fixed') {
        config.element.style.width = config.target.getBoundingClientRect().width + 'px';
      }

      const constraintList = [];
      const scrollableParent = getScrollableParent(getPositionTarget(config.target), WindowManager.window); // This observer and the test for scrolling children
      // is so that if a panel contains a scroll we do not
      // proxy the events to the "parent"  (actually the target's parent)

      setupObserver(config, scrollableParent);

      if (config.appendToBody) {
        document.body.appendChild(config.element);
      }

      config.element = createProxy(config.element);
      config.target = createProxy(config.target); // Add horizontal constraint.

      const horizontalConfig = Object.assign({}, config);

      if (horizontalConfig.padLeft !== undefined) {
        horizontalConfig.pad = horizontalConfig.padLeft;
      } // Add vertical constraint.


      const verticalConfig = Object.assign({}, config);

      if (verticalConfig.padTop !== undefined) {
        verticalConfig.pad = verticalConfig.padTop;
      }

      constraintList.push(new Constraint(mapToHorizontal(config.align.horizontal), horizontalConfig));
      constraintList.push(new Constraint(mapToVertical(config.align.vertical), verticalConfig));
      const autoShrink = config.autoShrink.height || config.autoShrink.width;

      if (config.scrollableParentBound && scrollableParent) {
        const parent = normalizeElement(scrollableParent);
        const boxConfig = {
          element: config.element,
          enabled: config.enabled,
          target: createProxy(parent),
          align: {},
          targetAlign: {},
          pad: 3,
          boxDirections: {
            top: true,
            bottom: true,
            left: true,
            right: true
          }
        };

        if (autoShrink) {
          const style = boxConfig.element.getNode().style;

          if (!style.minHeight) {
            style.minHeight = config.minHeight;
            boxConfig.element._removeMinHeight = true;
          }

          boxConfig.boxDirections = {
            top: !!config.autoShrink.height,
            bottom: !!config.autoShrink.height,
            left: !!config.autoShrink.width,
            right: !!config.autoShrink.width
          };
          constraintList.push(new Constraint('shrinking box', boxConfig));
        } else {
          constraintList.push(new Constraint('bounding box', boxConfig));
        }
      }

      addConstraints(constraintList);
      reposition();
      return new Relationship(config, constraintList, scrollableParent);
    }

    function isAutoFlipHorizontal(config) {
      return config.autoFlip || config.autoFlipHorizontal;
    }

    function isAutoFlipVertical(config) {
      return config.autoFlip || config.autoFlipVertical;
    }

    function normalizeAlignments(config, flipConfig) {
      const align = {
        horizontal: config.align.horizontal,
        vertical: config.align.vertical
      };
      const targetAlign = {
        horizontal: config.targetAlign.horizontal,
        vertical: config.targetAlign.vertical
      }; // Horizontal alignments flip for RTL languages.

      if (document.dir === 'rtl') {
        align.horizontal = flipDirection(align.horizontal);
        targetAlign.horizontal = flipDirection(targetAlign.horizontal);
      } // When using the autoFlip flags with center alignment, we change the element alignment to fit
      // within the viewport when it's detected that it overflows the edge of the viewport.


      let vFlip = false;

      if (isAutoFlipVertical(config)) {
        if (align.vertical === Direction.Bottom) {
          vFlip = !flipConfig.hasSpaceAbove && flipConfig.hasSpaceBelow;
        } else if (align.vertical === Direction.Top) {
          vFlip = flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow;
        } else if (align.vertical === Direction.Center) {
          if (flipConfig.centerOverflow.top && !flipConfig.centerOverflow.bottom) {
            align.vertical = targetAlign.vertical = Direction.Top;
          } else if (flipConfig.centerOverflow.bottom && !flipConfig.centerOverflow.top) {
            align.vertical = targetAlign.vertical = Direction.Bottom;
          }
        }
      }

      let hFlip = false;

      if (isAutoFlipHorizontal(config)) {
        if (align.horizontal === Direction.Left) {
          hFlip = flipConfig.shouldAlignToRight;
        } else if (align.horizontal === Direction.Right) {
          hFlip = flipConfig.shouldAlignToLeft;
        } else if (align.horizontal === Direction.Center) {
          if (flipConfig.centerOverflow.left && !flipConfig.centerOverflow.right) {
            align.horizontal = targetAlign.horizontal = Direction.Left;
          } else if (flipConfig.centerOverflow.right && !flipConfig.centerOverflow.left) {
            align.horizontal = targetAlign.horizontal = Direction.Right;
          }
        }
      }

      return {
        align: {
          horizontal: hFlip ? flipDirection(align.horizontal) : normalizeDirection(align.horizontal, Direction.Left),
          vertical: vFlip ? flipDirection(align.vertical) : normalizeDirection(align.vertical, Direction.Top)
        },
        targetAlign: {
          horizontal: hFlip ? flipDirection(targetAlign.horizontal) : normalizeDirection(targetAlign.horizontal, Direction.Left),
          vertical: vFlip ? flipDirection(targetAlign.vertical) : normalizeDirection(targetAlign.vertical, Direction.Bottom)
        }
      };
    }

    function normalizeConfig(config) {
      config.align = config.align || {};
      config.targetAlign = config.targetAlign || {};
      const flipConfig = checkFlipPossibility(config.element, config.target, config.leftAsBoundary);
      const {
        align,
        targetAlign
      } = normalizeAlignments(config, flipConfig);
      config.isInsideModal = isInsideModal(config.element); // When inside modal, element may expand out of the viewport and be cut off.
      // So if inside modal, and don't have enough space above or below, will add bounding box rule.

      if (config.isInsideModal && !flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow) {
        config.scrollableParentBound = true;
      }

      return {
        target: config.target,
        element: config.element,
        align,
        targetAlign,
        alignWidth: config.alignWidth,
        scrollableParentBound: config.scrollableParentBound,
        pad: config.pad,
        padTop: config.padTop,
        padLeft: config.padLeft,
        autoShrink: {
          height: config.autoShrink || config.autoShrinkHeight,
          width: config.autoShrink || config.autoShrinkWidth
        },
        minHeight: config.minHeight || DEFAULT_MIN_HEIGHT
      };
    }

    function toElement(root, target) {
      if (target && typeof target === 'string') {
        return root.querySelector(target);
      } else if (target && typeof target === 'function') {
        return lwc.unwrap(target());
      }

      return target;
    }

    function startPositioning(root, config) {
      assert(root, 'Root is undefined or missing');
      assert(config, 'Config is undefined or missing');
      const node = normalizeElement(root);
      const target = toElement(node, config.target);
      const element = toElement(node, config.element); // when target/element is selector, there is chance, dom isn't present anymore.

      if (!target || !element) {
        return null;
      }

      config.target = normalizeElement(target);
      config.element = normalizeElement(element);
      validateConfig(config);
      return createRelationship(normalizeConfig(config));
    }
    function stopPositioning(relationship) {
      if (relationship) {
        relationship.destroy();
      }
    }
    class AutoPosition {
      constructor(root) {
        this._autoPositionUpdater = null;
        this._root = root;
      }

      start(config) {
        return requestAnimationFrameAsPromise().then(() => {
          let promise = Promise.resolve();

          if (!this._autoPositionUpdater) {
            this._autoPositionUpdater = startPositioning(this._root, config);
          } else {
            promise = promise.then(() => {
              return this._autoPositionUpdater.reposition();
            });
          }

          return promise.then(() => {
            return this._autoPositionUpdater;
          });
        });
      }

      stop() {
        if (this._autoPositionUpdater) {
          stopPositioning(this._autoPositionUpdater);
          this._autoPositionUpdater = null;
        }

        return Promise.resolve();
      }

    }

    function tmpl$4($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element
      } = $api;
      return [api_element("div", {
        classMap: {
          "slds-popover__body": true
        },
        context: {
          lwc: {
            dom: "manual"
          }
        },
        key: 2
      }, [])];
    }

    var _tmpl$5 = lwc.registerTemplate(tmpl$4);
    tmpl$4.stylesheets = [];
    tmpl$4.stylesheetTokens = {
      hostAttribute: "lightning-primitiveBubble_primitiveBubble-host",
      shadowAttribute: "lightning-primitiveBubble_primitiveBubble"
    };

    const DEFAULT_ALIGN = {
      horizontal: 'left',
      vertical: 'bottom'
    };

    class LightningPrimitiveBubble extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.state = {
          visible: false,
          contentId: ''
        };
        this.divElement = void 0;
      }

      get contentId() {
        return this.state.contentId;
      }

      set contentId(value) {
        this.state.contentId = value;

        if (this.state.inDOM) {
          this.divEl.setAttribute('id', this.state.contentId);
        }
      }

      connectedCallback() {
        this.updateClassList();
        this.state.inDOM = true;
      }

      disconnectedCallback() {
        this.state.inDOM = false;
      }

      renderedCallback() {
        // set content manually once rendered
        // - this is required to avoid the content update being in the wrong 'tick'
        this.setContentManually();
        this.setIdManually();
      }

      set content(value) {
        this.state.content = value;

        if (this.state.inDOM) {
          this.setContentManually();
        }
      }

      get content() {
        return this.state.content || '';
      }

      get align() {
        return this.state.align || DEFAULT_ALIGN;
      }

      set align(value) {
        this.state.align = value;
        this.updateClassList();
      }

      get visible() {
        return this.state.visible;
      }

      set visible(value) {
        this.state.visible = value;
        this.updateClassList();
      }

      setIdManually() {
        this.divElement = this.divElement ? this.divElement : this.template.querySelector('div');
        this.divElement.setAttribute('id', this.state.contentId);
      } // manually set the content value


      setContentManually() {
        /* manipulate DOM directly */
        this.template.querySelector('.slds-popover__body').textContent = this.state.content;
      } // compute class value for this bubble


      updateClassList() {
        const classes = classSet('slds-popover').add('slds-popover_tooltip'); // show or hide bubble

        classes.add({
          'slds-rise-from-ground': this.visible,
          'slds-fall-into-ground': !this.visible
        }); // apply the proper nubbin CSS class

        const {
          horizontal,
          vertical
        } = this.align;
        classes.add({
          'slds-nubbin_top-left': horizontal === 'left' && vertical === 'top',
          'slds-nubbin_top-right': horizontal === 'right' && vertical === 'top',
          'slds-nubbin_bottom-left': horizontal === 'left' && vertical === 'bottom',
          'slds-nubbin_bottom-right': horizontal === 'right' && vertical === 'bottom',
          'slds-nubbin_bottom': horizontal === 'center' && vertical === 'bottom',
          'slds-nubbin_top': horizontal === 'center' && vertical === 'top',
          'slds-nubbin_left': horizontal === 'left' && vertical === 'center',
          'slds-nubbin_right': horizontal === 'right' && vertical === 'center'
        });
        classListMutation(this.classList, classes);
      }

    }

    lwc.registerDecorators(LightningPrimitiveBubble, {
      publicProps: {
        contentId: {
          config: 3
        },
        content: {
          config: 3
        },
        align: {
          config: 3
        },
        visible: {
          config: 3
        }
      },
      track: {
        state: 1
      }
    });

    var LightningPrimitiveBubble$1 = lwc.registerComponent(LightningPrimitiveBubble, {
      tmpl: _tmpl$5
    });

    const BUBBLE_ID = `salesforce-lightning-tooltip-bubble_${guid()}`;
    /**
     * Shared instance of a primitive bubble used as a tooltip by most components. This was originally
     * defined in the helptext component which is where the minWidth style came from.
     * TODO: We may want to revisit the minWidth style with the PO and/or UX.
     */

    let CACHED_BUBBLE_ELEMENT;

    function getCachedBubbleElement() {
      if (!CACHED_BUBBLE_ELEMENT) {
        CACHED_BUBBLE_ELEMENT = lwc.createElement('lightning-primitive-bubble', {
          is: LightningPrimitiveBubble$1
        });
        CACHED_BUBBLE_ELEMENT.contentId = BUBBLE_ID;
        CACHED_BUBBLE_ELEMENT.style.position = 'absolute';
        CACHED_BUBBLE_ELEMENT.style.minWidth = '75px';
      }

      return CACHED_BUBBLE_ELEMENT;
    }

    const ARIA_DESCRIBEDBY = 'aria-describedby';
    /**
     * Used as a position offset to compensate for the nubbin. The dimensions of the nubbin are not
     * included in the position library bounding box calculations. This is the size in pixels of the
     * nubbin.
     * TODO: We may want to measure this instead in cases it changes.
     */

    const NUBBIN_SIZE = 16;
    /**
     * Used in the calculation that moves the tooltip to a location that places the nubbin at the
     * center of the target element. This is the nubbin offset from the edge of the bubble in pixels
     * when using slds-nubbin_bottom-left or slds-nubbin_bottom-right.
     * TODO: We may want to measure this instead in case it changes.
     */

    const NUBBIN_OFFSET = 24;
    /**
     * Known tooltip types:
     * - info: used in cases where target already has click handlers such as button-icon
     * - toggle: used in cases where target only shows a tooltip such as helptext
     */

    const TooltipType = {
      Info: 'info',
      Toggle: 'toggle'
    };
    /**
     * Allows us to attach a tooltip to components. Typical usage is as follows:
     * - Create an instance of Tooltip
     * - Call Tooltip.initialize() to add the appropriate listeners to the element that needs a tooltip
     * See buttonIcon and buttonMenu for example usage.
     */

    class Tooltip {
      /**
       * A shared instance of primitiveBubble is used when an element is not specified in the config
       * object.
       * @param {string} value the content of the tooltip
       * @param {object} config specifies the root component, target element of the tooltip
       */
      constructor(value, config) {
        this._autoPosition = null;
        this._disabled = true;
        this._initialized = false;
        this._visible = false;
        assert(config.target, 'target for tooltip is undefined or missing');
        this.value = value;
        this._root = config.root;
        this._target = config.target;
        this._type = normalizeString(config.type, {
          fallbackValue: TooltipType.Info,
          validValues: Object.values(TooltipType)
        }); // If a tooltip element is not given, fall back on the globally shared instance.

        this._element = config.element;

        if (!this._element) {
          this._element = getCachedBubbleElement;
          const bubbleElement = getCachedBubbleElement();

          if (bubbleElement.parentNode === null) {
            document.body.appendChild(bubbleElement);
          }
        }

        this.handleDocumentTouch = this.handleDocumentTouch.bind(this);
      }
      /**
       * Disables the tooltip.
       */


      detach() {
        this._disabled = true;
      }
      /**
       * Enables the tooltip.
       */


      attach() {
        this._disabled = false;
      }
      /**
       * Adds the appropriate event listeners to the target element to make the tooltip appear. Also
       * links the tooltip and target element via the aria-describedby attribute for screen readers.
       */


      initialize() {
        const target = this._target();

        if (!this._initialized && target) {
          switch (this._type) {
            case TooltipType.Toggle:
              this.addToggleListeners();
              break;

            case TooltipType.Info:
            default:
              this.addInfoListeners();
              break;
          }

          const ariaDescribedBy = normalizeAriaAttribute([target.getAttribute(ARIA_DESCRIBEDBY), this._element().contentId]);
          target.setAttribute(ARIA_DESCRIBEDBY, ariaDescribedBy);
          this._initialized = true;
        }
      }

      addInfoListeners() {
        const target = this._target();

        if (!this._initialized && target) {
          ['mouseenter', 'focus'].forEach(event => target.addEventListener(event, () => this.show())); // Unlike the tooltip in Aura, we want clicks and keys to dismiss the tooltip.

          ['mouseleave', 'blur', 'click', 'keydown'].forEach(event => target.addEventListener(event, () => this.hide()));
        }
      }

      handleDocumentTouch() {
        if (this._visible) {
          this.hide();
        }
      }

      addToggleListeners() {
        const target = this._target();

        if (!this._initialized && target) {
          if (Tooltip.isMobile()) {
            target.addEventListener('touchstart', e => {
              e.stopPropagation();
              this.toggle();
            });
          } else {
            ['mouseenter', 'focus'].forEach(event => target.addEventListener(event, () => this.show()));
            ['mouseleave', 'blur'].forEach(event => target.addEventListener(event, () => this.hide()));
          }
        }
      }

      show() {
        if (this._disabled) {
          return;
        }

        this._visible = true;

        const tooltip = this._element();

        tooltip.content = this._value;
        this.startPositioning();

        if (Tooltip.isMobile()) {
          document.addEventListener('touchstart', this.handleDocumentTouch);
        }
      }

      hide() {
        this._visible = false;

        const tooltip = this._element();

        tooltip.visible = this._visible;
        this.stopPositioning();

        if (Tooltip.isMobile()) {
          document.removeEventListener('touchstart', this.handleDocumentTouch);
        }
      }

      toggle() {
        if (this._visible) {
          this.hide();
        } else {
          this.show();
        }
      }

      get value() {
        return this._value;
      }

      set value(value) {
        this._value = value;
        this._disabled = !value;
      }

      get initialized() {
        return this._initialized;
      }

      get visible() {
        return this._visible;
      }

      startPositioning() {
        if (!this._autoPosition) {
          this._autoPosition = new AutoPosition(this._root);
        } // The lightning-helptext component was originally left aligned.


        const align = {
          horizontal: Direction.Left,
          vertical: Direction.Bottom
        };
        const targetAlign = {
          horizontal: Direction.Left,
          vertical: Direction.Top
        }; // Pads the tooltip so its nubbin is at the center of the target element.

        const targetBox = this._target().getBoundingClientRect();

        const padLeft = targetBox.width * 0.5 - NUBBIN_OFFSET;

        this._autoPosition.start({
          target: this._target,
          element: this._element,
          align,
          targetAlign,
          autoFlip: true,
          padTop: NUBBIN_SIZE,
          padLeft
        }).then(autoPositionUpdater => {
          // The calculation above may have flipped the alignment of the tooltip. When the
          // tooltip changes alignment we need to update the nubbin class to have it draw in
          // the appropriate place.
          const tooltip = this._element();

          tooltip.align = autoPositionUpdater.config.align;
          tooltip.visible = this._visible;
        });
      }

      stopPositioning() {
        if (this._autoPosition) {
          this._autoPosition.stop();
        }
      }

      static isMobile() {
        return configProvider.getFormFactor() === 'PHONE';
      }

    }

    const i18n = {
      loading: labelLoading,
      showMenu: labelShowMenu
    }; // CSS class and selectors for menu items

    const menuItemCSSClassName = 'slds-dropdown__item';
    const menuItemCSSSelector = `.slds-dropdown__list .${menuItemCSSClassName}`;
    /**
     * Represents a dropdown menu with a list of actions or functions.
     * @slot default Placeholder for menu-item
     */

    class LightningButtonMenu extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.iconSize = 'medium';
        this.iconName = 'utility:down';
        this.value = '';
        this.alternativeText = i18n.showMenu;
        this.loadingStateAlternativeText = i18n.loading;
        this.label = void 0;
        this.draftAlternativeText = void 0;
        this._accesskey = null;
        this._disabled = false;
        this._dropdownVisible = false;
        this._dropdownOpened = false;
        this._nubbin = false;
        this._title = null;
        this._isDraft = false;
        this._isLoading = false;
        this._focusOnIndexDuringRenderedCallback = null;
        this._tabindex = 0;
        this._order = null;
        this._variant = 'border';
        this._positioning = false;
        this._menuAlignment = 'left';
        this._boundingRect = {};
        this._tooltip = null;
      }

      connectedCallback() {
        this._connected = true;
        this.keyboardInterface = this.menuKeyboardInterface();
        this.classList.add('slds-dropdown-trigger', 'slds-dropdown-trigger_click');

        if (this.isDraft) {
          this.classList.add('slds-is-unsaved');
        } // button-group necessities


        const privatebuttonregister = new CustomEvent('privatebuttonregister', {
          bubbles: true,
          detail: {
            callbacks: {
              setOrder: this.setOrder.bind(this),
              setDeRegistrationCallback: deRegistrationCallback => {
                this._deRegistrationCallback = deRegistrationCallback;
              }
            }
          }
        });
        this.dispatchEvent(privatebuttonregister);
      }

      disconnectedCallback() {
        this._connected = false;

        if (this._deRegistrationCallback) {
          this._deRegistrationCallback();
        }
      }

      renderedCallback() {
        if (this._tooltip && !this._tooltip.initialized) {
          this._tooltip.initialize();
        } // if we are using autopositioning focus happens in its own cycle


        if (!this._positioning && this._dropdownVisible) {
          // logic to focus on first menu item after render
          this.focusOnMenuItemAfterRender();
        }
      }
      /**
       * The variant changes the look of the button.
       * Accepted variants include bare, container, border, border-filled, bare-inverse, and border-inverse.
       * This value defaults to border.
       *
       * @type {string}
       * @default border
       */


      get variant() {
        return this._variant;
      }

      set variant(variant) {
        this._variant = normalizeString(variant, {
          fallbackValue: 'border',
          validValues: ['border', 'border-inverse', 'border-filled', 'bare', 'bare-inverse', 'container']
        });
      }
      /**
       * Determines the alignment of the menu relative to the button.
       * Available options are: auto, left, center, right, bottom-left, bottom-center, bottom-right.
       * The auto option aligns the dropdown menu based on available space.
       * This value defaults to left.
       *
       * @type {string}
       * @default left
       */


      get menuAlignment() {
        return this._menuAlignment;
      }

      set menuAlignment(value) {
        this._menuAlignment = normalizeString(value, {
          fallbackValue: 'left',
          validValues: ['auto', 'auto-right', 'auto-left', 'left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right']
        });
      }
      /**
       * If present, the menu can be opened by users.
       * @type {boolean}
       * @default false
       */


      get disabled() {
        return this._disabled;
      }

      set disabled(value) {
        this._disabled = normalizeBoolean(value);
      }
      /**
       * If present, a nubbin is present on the menu.
       * A nubbin is a stub that protrudes from the menu item towards the button menu.
       * The nubbin position is based on the menu-alignment.
       * @type {boolean}
       * @default false
       */


      get nubbin() {
        return this._nubbin;
      }

      set nubbin(value) {
        this._nubbin = normalizeBoolean(value);
      }
      /**
       * Displays tooltip text when the mouse moves over the button menu.
       * @type {string}
       */


      get title() {
        return this._title;
      }

      set title(newValue) {
        this._title = newValue;
      }
      /**
       * If present, the menu trigger shows a draft indicator.
       * @type {boolean}
       * @default false
       */


      get isDraft() {
        return this._isDraft;
      }

      set isDraft(value) {
        this._isDraft = normalizeBoolean(value);
      }
      /**
       * If present, the menu is in a loading state and shows a spinner.
       * @type {boolean}
       * @default false
       */


      get isLoading() {
        return this._isLoading;
      }

      set isLoading(value) {
        const normalizedValue = normalizeBoolean(value);

        if (this.isAutoAlignment()) {
          // stop previous positioning if any as it maintains old position relationship
          this.stopPositioning();

          if (this._isLoading && !normalizedValue) {
            // was loading before and now is not, we need to reposition
            this.startPositioning();
          }
        }

        this._isLoading = normalizedValue;
      }
      /**
       * The keyboard shortcut for the button menu.
       * @type {string}
       */


      get accessKey() {
        return this._accesskey;
      }

      set accessKey(newValue) {
        this._accesskey = newValue;
      }
      /**
       * Text to display when the user mouses over or focuses on the button.
       * The tooltip is auto-positioned relative to the button and screen space.
       * @type {string}
       */


      get tooltip() {
        return this._tooltip ? this._tooltip.value : undefined;
      }

      set tooltip(value) {
        if (this._tooltip) {
          this._tooltip.value = value;
        } else if (value) {
          // Note that because the tooltip target is a child element it may not be present in the
          // dom during initial rendering.
          this._tooltip = new Tooltip(value, {
            root: this,
            target: () => this.template.querySelector('button')
          });

          this._tooltip.initialize();
        }
      }
      /**
       * Sets focus on the button.
       */


      focus() {
        if (this._connected) {
          this.focusOnButton();
        }
      }

      get computedAriaExpanded() {
        return String(this._dropdownVisible); // default value must be a string for the attribute to always be present with a string value
      }

      focusOnMenuItemAfterRender() {
        // if no menu items are focused then set focus on the first or last one once registered
        // :: this can occur if there's a delay in loading the menu items (loading from server for example)
        // :: revealing the menu in an empty state to later have menu items loaded
        let focusOnIndex = this._focusOnIndexDuringRenderedCallback || 0; // if focus index is greater than the size of the list,
        // or next focus should be on LAST,
        // set to the last item

        const menuItems = this.getMenuItems(); // if specified as 'LAST' set it to a valid numeric value instead

        if (focusOnIndex === 'LAST') {
          focusOnIndex = menuItems.length - 1; // maintain 'LAST' value if menu items aren't available yet

          if (focusOnIndex < 0) {
            focusOnIndex = 'LAST';
          }
        } // only perform operations when we have a valid numeric index


        if (focusOnIndex !== 'LAST') {
          if (focusOnIndex > menuItems.length - 1 && menuItems.length > 0) {
            focusOnIndex = menuItems.length - 1;
          } // set the focus


          this.focusOnMenuItem(focusOnIndex); // reset tracker value

          this._focusOnIndexDuringRenderedCallback = null;
        }
      }

      get computedAccessKey() {
        return this._accesskey;
      }

      get computedTitle() {
        return this._title;
      }

      get computedAlternativeText() {
        return this.alternativeText || i18n.showMenu;
      }

      get computedLoadingStateAlternativeText() {
        return this.loadingStateAlternativeText || i18n.loading;
      }

      get computedButtonClass() {
        const isDropdownIcon = !this.computedShowDownIcon;
        const isBare = this.variant === 'bare' || this.variant === 'bare-inverse';
        const classes = classSet('slds-button');

        if (this.label) {
          classes.add({
            'slds-button_neutral': this.variant === 'border' && isDropdownIcon,
            'slds-button_inverse': this.variant === 'border-inverse'
          });
        } else {
          // The inverse check is to allow for a combination of a non-default icon and an -inverse variant
          const useMoreContainer = this.variant === 'container' || this.variant === 'bare-inverse' || this.variant === 'border-inverse';
          classes.add({
            'slds-button_icon': !isDropdownIcon,
            'slds-button_icon-bare': isBare,
            'slds-button_icon-more': !useMoreContainer && !isDropdownIcon,
            'slds-button_icon-container-more': useMoreContainer && !isDropdownIcon,
            'slds-button_icon-container': this.variant === 'container' && isDropdownIcon,
            'slds-button_icon-border': this.variant === 'border' && isDropdownIcon,
            'slds-button_icon-border-filled': this.variant === 'border-filled',
            'slds-button_icon-border-inverse': this.variant === 'border-inverse',
            'slds-button_icon-inverse': this.variant === 'bare-inverse',
            'slds-button_icon-xx-small': this.iconSize === 'xx-small' && !isBare,
            'slds-button_icon-x-small': this.iconSize === 'x-small' && !isBare,
            'slds-button_icon-small': this.iconSize === 'small' && !isBare
          });
        }

        return classes.add({
          // order classes when part of a button-group
          'slds-button_first': this._order === 'first',
          'slds-button_middle': this._order === 'middle',
          'slds-button_last': this._order === 'last'
        }).toString();
      }

      get computedShowDownIcon() {
        return !(this.iconName === 'utility:down' || this.iconName === 'utility:chevrondown');
      }

      get computedDropdownClass() {
        return classSet('slds-dropdown').add({
          'slds-dropdown_left': this.menuAlignment === 'left' || this.isAutoAlignment(),
          'slds-dropdown_center': this.menuAlignment === 'center',
          'slds-dropdown_right': this.menuAlignment === 'right',
          'slds-dropdown_bottom': this.menuAlignment === 'bottom-center',
          'slds-dropdown_bottom slds-dropdown_right slds-dropdown_bottom-right': this.menuAlignment === 'bottom-right',
          'slds-dropdown_bottom slds-dropdown_left slds-dropdown_bottom-left': this.menuAlignment === 'bottom-left',
          'slds-nubbin_top-left': this.nubbin && this.menuAlignment === 'left',
          'slds-nubbin_top-right': this.nubbin && this.menuAlignment === 'right',
          'slds-nubbin_top': this.nubbin && this.menuAlignment === 'center',
          'slds-nubbin_bottom-left': this.nubbin && this.menuAlignment === 'bottom-left',
          'slds-nubbin_bottom-right': this.nubbin && this.menuAlignment === 'bottom-right',
          'slds-nubbin_bottom': this.nubbin && this.menuAlignment === 'bottom-center',
          'slds-p-vertical_large': this.isLoading
        }).toString();
      }

      handleMenuItemPrivateSelect(event) {
        if (this._dropdownVisible) {
          this.toggleMenuVisibility();
          this.focusOnButton();
        } //


        this.dispatchSelect(event);
      }

      dispatchSelect(event) {
        this.dispatchEvent(new CustomEvent('select', {
          cancelable: true,
          detail: {
            value: event.detail.value // pass value through from original private event

          }
        }));
      }

      handleButtonClick() {
        this.allowBlur();
        this.toggleMenuVisibility(); // Focus on the button even if the browser doesn't do it by default
        // (the behaviour differs between Chrome, Safari, Firefox)

        this.focusOnButton();
      }

      handleButtonKeyDown(event) {
        handleKeyDownOnMenuTrigger(event, this.keyboardInterface);
      }

      handleButtonMouseDown(event) {
        const mainButton = 0;

        if (event.button === mainButton) {
          this.cancelBlur();
        }
      }

      handleDropdownMouseDown(event) {
        // if the menu contais a scrollbar due to large number of menu-items
        // this is needed so that menu doesnt close on dragging the scrollbar with the mouse
        const mainButton = 0;

        if (event.button === mainButton) {
          this.cancelBlur();
        }
      }

      handleDropdownMouseUp() {
        // We need this to make sure that if a scrollbar is being dragged with the mouse, upon release
        // of the drag we allow blur, otherwise the dropdown would not close on blur since we'd have cancel blur
        // set
        this.allowBlur();
      }

      handleDropdownMouseLeave() {
        // this is to close the menu after mousedown happens on scrollbar
        // in this case we close immediately if no menu-items were hovered/focused
        // without this the menu would remain open since the blur on the menuitems has happened already
        // when clicking the scrollbar
        if (!this._menuHasFocus) {
          this.close();
        }
      }

      handleDropdownScroll(event) {
        // We don't want this to bubble up to the modal which due to event retargeting wouldn't be able
        // to know what is actually being scrolled and thus may lead to the scrolling of the modal
        event.stopPropagation();
      }

      focusOnButton() {
        this.template.querySelector('button').focus();
      }

      focusOnMenuItem(itemIndex) {
        if (this._dropdownVisible) {
          const menuItem = this.getMenuItemByIndex(itemIndex);
          this.cancelBlurAndFocusOnMenuItem(menuItem);
        }
      }

      isAutoAlignment() {
        return this.menuAlignment.startsWith('auto');
      }

      startPositioning() {
        if (!this.isAutoAlignment()) {
          return;
        }

        this._positioning = true;
        const align = {
          horizontal: Direction.Left,
          vertical: Direction.Top
        };
        const targetAlign = {
          horizontal: Direction.Left,
          vertical: Direction.Bottom
        };
        let autoFlip = true;
        let autoFlipVertical;

        if (this.menuAlignment === 'auto-right') {
          align.horizontal = Direction.Right;
          targetAlign.horizontal = Direction.Right;
        }

        if (this.menuAlignment === 'auto-right' || this.menuAlignment === 'auto-left') {
          autoFlip = false;
          autoFlipVertical = true;
        }

        requestAnimationFrame(() => {
          this.stopPositioning();
          this._autoPosition = startPositioning(this, {
            target: () => this.template.querySelector('button'),
            element: () => this.template.querySelector('.slds-dropdown'),
            align,
            targetAlign,
            autoFlip,
            autoFlipVertical
          });
        }); // focus on the first item in next cycle
        // eslint-disable-next-line lwc/no-set-timeout

        setTimeout(() => {
          this._positioning = false;
          this.focusOnMenuItemAfterRender();
        }, 0);
      }

      stopPositioning() {
        if (this._autoPosition) {
          stopPositioning(this._autoPosition);
          this._autoPosition = null;
        }

        this._positioning = false;
      }

      toggleMenuVisibility() {
        if (!this.disabled) {
          this._dropdownVisible = !this._dropdownVisible;

          if (!this._dropdownOpened && this._dropdownVisible) {
            this._dropdownOpened = true;
          }

          if (this._dropdownVisible) {
            this.startPositioning();
            this.dispatchEvent(new CustomEvent('open')); // update the bounding rect when the menu is toggled

            this._boundingRect = this.getBoundingClientRect();
            this.pollBoundingRect();
          } else {
            this.stopPositioning();
          }

          this.classList.toggle('slds-is-open');
        }
      }

      getMenuItems() {
        return Array.from(this.querySelectorAll(menuItemCSSSelector));
      }

      getMenuItemByIndex(index) {
        return this.getMenuItems()[index];
      }

      findMenuItemIndex(menuItemElement) {
        // Get children (HTMLCollection) and transform into an array.
        const listChildren = Array.prototype.map.call(this.getMenuItems(), item => {
          return lwc.unwrap(item);
        });
        return listChildren.indexOf(menuItemElement);
      }

      findMenuItemFromEventTarget(element) {
        let currentNode = lwc.unwrap(element);
        const stopAtElement = lwc.unwrap(this.template.querySelector("[role='menu']"));

        while (currentNode !== stopAtElement) {
          if (currentNode.classList && currentNode.classList.contains(menuItemCSSClassName)) {
            return currentNode;
          }

          if (currentNode.parentNode) {
            currentNode = currentNode.parentNode;
          } else {
            return null;
          }
        }

        return null;
      }

      handleKeyOnMenuItem(event) {
        const menuItem = this.findMenuItemFromEventTarget(event.target);

        if (menuItem) {
          handleKeyDownOnMenuItem(event, this.findMenuItemIndex(menuItem), this.keyboardInterface);
        }
      }

      handleMouseOverOnMenuItem(event) {
        const menuItem = this.findMenuItemFromEventTarget(event.target);

        if (menuItem) {
          const menuItemIndex = this.findMenuItemIndex(menuItem);
          this.focusOnMenuItem(menuItemIndex);
        }
      }

      cancelBlurAndFocusOnMenuItem(menuItem) {
        if (menuItem) {
          // prevent blur during a non-blurring focus change
          // set lock so that while focusing on menutitem, menu doesnt close
          this.cancelBlur();
          menuItem.focus();
        } // allowBlur is called when the menu items receives focus

      }

      handleFocus() {
        this.dispatchEvent(new CustomEvent('focus'));
      }

      handlePrivateBlur(event) {
        // The event may be synthetic from the menu items
        event.stopPropagation(); // perform common blurring behavior

        this.handleBlur();
        this._menuHasFocus = false;
      }

      handlePrivateFocus(event) {
        // synthetic from the menu items
        event.stopPropagation(); // reset the cancelBlur so any clicks outside the menu can now close the menu

        this.allowBlur();
        this._menuHasFocus = true;
      }

      handleBlur() {
        // Don't handle the blur event if the focus events are inside the menu (see the cancelBlur/allowBlur functions)
        if (this._cancelBlur) {
          return;
        } // Hide only when the focus moved away from the container


        if (this._dropdownVisible) {
          this.toggleMenuVisibility();
        } // dispatch standard blur event


        this.dispatchEvent(new CustomEvent('blur'));
      }

      allowBlur() {
        this._cancelBlur = false;
      }

      cancelBlur() {
        this._cancelBlur = true;
      }

      menuKeyboardInterface() {
        const that = this;
        return {
          getTotalMenuItems() {
            return that.getMenuItems().length;
          },

          focusOnIndex(index) {
            that.focusOnMenuItem(index);
          },

          setNextFocusIndex(index) {
            that._focusOnIndexDuringRenderedCallback = index;
          },

          returnFocus() {
            that.focusOnButton();
          },

          isMenuVisible() {
            return that._dropdownVisible;
          },

          toggleMenuVisibility() {
            that.toggleMenuVisibility();
          },

          focusMenuItemWithText(text) {
            const match = [...that.getMenuItems()].filter(menuItem => {
              const label = menuItem.label;
              return label && label.toLowerCase().indexOf(text) === 0;
            });

            if (match.length > 0) {
              that.focusOnMenuItem(match[0]);
            }
          }

        };
      }
      /**
       * {Function} setOrder - Sets the order value of the button when in the context of a button-group or other ordered component
       * @param {String} order -  The order string (first, middle, last)
       */


      setOrder(order) {
        this._order = order;
      }
      /**
       * {Function} close - Closes the dropdown if it's open
       */


      close() {
        // should only do something if dropdown is visible
        if (this._dropdownVisible) {
          this.toggleMenuVisibility();
        }
      }
      /**
       * Poll for change in bounding rectangle
       * only if it is menuAlignment=auto since that is
       * position:fixed and is opened
       */


      pollBoundingRect() {
        // only poll if the dropdown is auto aligned
        if (this.isAutoAlignment() && this._dropdownVisible) {
          // eslint-disable-next-line lwc/no-set-timeout
          setTimeout(() => {
            if (this._connected) {
              observePosition(this, 300, this._boundingRect, () => {
                this.close();
              }); // continue polling

              this.pollBoundingRect();
            }
          }, 250 // check every 0.25 second
          );
        }
      }

    }

    LightningButtonMenu.delegatesFocus = true;

    lwc.registerDecorators(LightningButtonMenu, {
      publicProps: {
        iconSize: {
          config: 0
        },
        iconName: {
          config: 0
        },
        value: {
          config: 0
        },
        alternativeText: {
          config: 0
        },
        loadingStateAlternativeText: {
          config: 0
        },
        label: {
          config: 0
        },
        draftAlternativeText: {
          config: 0
        },
        variant: {
          config: 3
        },
        menuAlignment: {
          config: 3
        },
        disabled: {
          config: 3
        },
        nubbin: {
          config: 3
        },
        title: {
          config: 3
        },
        isDraft: {
          config: 3
        },
        isLoading: {
          config: 3
        },
        accessKey: {
          config: 3
        },
        tooltip: {
          config: 3
        }
      },
      publicMethods: ["focus"],
      track: {
        _accesskey: 1,
        _disabled: 1,
        _dropdownVisible: 1,
        _dropdownOpened: 1,
        _nubbin: 1,
        _title: 1,
        _isDraft: 1,
        _isLoading: 1,
        _focusOnIndexDuringRenderedCallback: 1,
        _tabindex: 1,
        _order: 1,
        _variant: 1
      }
    });

    var _lightningButtonMenu = lwc.registerComponent(LightningButtonMenu, {
      tmpl: _tmpl$4
    });

    function stylesheet$1(hostSelector, shadowSelector, nativeShadow) {
      return "\n" + (nativeShadow ? (":host {display: block;}") : (hostSelector + " {display: block;}")) + "\n";
    }
    var _implicitStylesheets$1 = [stylesheet$1];

    function tmpl$5($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        t: api_text,
        h: api_element,
        d: api_dynamic,
        ti: api_tab_index,
        b: api_bind
      } = $api;
      const {
        _m0,
        _m1,
        _m2,
        _m3
      } = $ctx;
      return [api_element("a", {
        attrs: {
          "href": $cmp.computedHref,
          "role": $cmp.computedRole,
          "tabindex": api_tab_index($cmp.computedTabIndex),
          "accesskey": $cmp.computedAccessKey,
          "aria-checked": $cmp.computedAriaChecked,
          "aria-disabled": $cmp.computedAriaDisabled
        },
        key: 2,
        on: {
          "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick)),
          "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
          "keydown": _m2 || ($ctx._m2 = api_bind($cmp.handleKeyDown)),
          "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur))
        }
      }, [api_element("span", {
        classMap: {
          "slds-truncate": true
        },
        key: 3
      }, [$cmp.isMenuItemCheckbox ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": "utility:check",
          "size": "x-small",
          "svgClass": $cmp.computedCheckedIconClass,
          "variant": "bare"
        },
        key: 5
      }, []) : null, $cmp.isDraft ? api_element("abbr", {
        classMap: {
          "slds-indicator_unsaved": true
        },
        attrs: {
          "title": $cmp.draftAlternativeText
        },
        key: 6
      }, [api_text("*")]) : null, $cmp.prefixIconName ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": $cmp.prefixIconName,
          "size": "x-small",
          "svgClass": "slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small",
          "variant": "bare"
        },
        key: 8
      }, []) : null, api_dynamic($cmp.label)]), $cmp.iconName ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
        props: {
          "iconName": $cmp.iconName,
          "size": "x-small",
          "svgClass": "slds-icon-text-default slds-m-left_small slds-shrink-none",
          "variant": "bare"
        },
        key: 10
      }, []) : null])];
    }

    var _tmpl$6 = lwc.registerTemplate(tmpl$5);
    tmpl$5.stylesheets = [];

    if (_implicitStylesheets$1) {
      tmpl$5.stylesheets.push.apply(tmpl$5.stylesheets, _implicitStylesheets$1);
    }
    tmpl$5.stylesheetTokens = {
      hostAttribute: "lightning-menuItem_menuItem-host",
      shadowAttribute: "lightning-menuItem_menuItem"
    };

    /**
     * Represents a list item in a menu.
     */

    class LightningMenuItem extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.value = void 0;
        this.label = void 0;
        this.iconName = void 0;
        this._accesskey = null;
        this._disabled = false;
        this._tabindex = '-1';
        this._checked = undefined;
        this._isDraft = false;
        this.prefixIconName = void 0;
        this.href = void 0;
        this.draftAlternativeText = void 0;
      }

      connectedCallback() {
        this.classList.add('slds-dropdown__item');
        this.setAttribute('role', 'presentation');
      }
      /**
       * If present, a draft indicator is shown on the menu item.
       * A draft indicator is denoted by blue asterisk on the left of the menu item.
       * When you use a draft indicator, include alternative text for accessibility using draft-alternative-text.
       * @type {boolean}
       * @default false
       */


      get isDraft() {
        return this._isDraft;
      }

      set isDraft(value) {
        this._isDraft = normalizeBoolean(value);
      }
      /**
       * The keyboard shortcut for the menu item.
       * @type {string}
       */


      get accessKey() {
        return this._accesskey;
      }

      set accessKey(newValue) {
        this._accesskey = newValue;
        this.handleAccessKeyChange(newValue);
      }
      /**
       * Reserved for internal use. Use tabindex instead to indicate if an element should be focusable.
       * tabindex can be set to 0 or -1.
       * The default tabindex value is 0, which means that the menu item is focusable and
       * participates in sequential keyboard navigation. The value -1 means
       * that the menu item is focusable but does not participate in keyboard navigation.
       * @type {number}
       */


      get tabIndex() {
        return this._tabindex;
      }

      set tabIndex(newValue) {
        this._tabindex = newValue;
        this.handleTabIndexChange(newValue);
      }

      handleAccessKeyChange(value) {
        this._accesskey = value;
      }

      handleTabIndexChange(value) {
        this._tabindex = value;
      }

      get computedAccessKey() {
        return this._accesskey;
      }

      get computedTabIndex() {
        return this._tabindex;
      }
      /**
       * If present, the menu item is disabled and users cannot interact with it.
       * @type {boolean}
       * @default false
       */


      get disabled() {
        return this._disabled;
      }

      set disabled(value) {
        this._disabled = normalizeBoolean(value);
      }
      /**
       * If present, a check mark displays on the left of the menu item if it's selected.
       * @type {boolean}
       * @default false
       */


      get checked() {
        return this._checked;
      }

      set checked(value) {
        if (typeof value === 'string') {
          // handle string
          value = normalizeString(value, {
            fallbackValue: undefined,
            validValues: ['true', 'false']
          });

          if (value !== undefined) {
            value = value === 'true';
          }
        }

        if (value !== undefined) {
          // handle boolean which is from above or user
          value = normalizeBoolean(value);
        }

        this._checked = value;
        this.classList.toggle('slds-is-selected', this.checked === true);
      }

      get computedCheckedIconClass() {
        // note that what .slds-icon_selected does is to hide the checked icon
        return classSet('slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small').add({
          'slds-icon_selected': !this.checked
        }).toString();
      }

      get computedHref() {
        // eslint-disable-next-line no-script-url
        return this.href ? this.href : 'javascript:void(0)';
      }

      get computedAriaChecked() {
        return this.isMenuItemCheckbox ? this.checked + '' : null;
      }

      get computedAriaDisabled() {
        // Note: Needed to explicitly set aria-disabled="true"
        return this.disabled ? 'true' : 'false';
      }

      get isMenuItemCheckbox() {
        return this.checked !== undefined;
      }

      get computedRole() {
        return this.isMenuItemCheckbox ? 'menuitemcheckbox' : 'menuitem';
      }

      handleBlur() {
        this.dispatchEvent(new CustomEvent('blur')); // we need to trigger a private blur to make it bubble and be handled by parent button-menu

        this.dispatchEvent(new CustomEvent('privateblur', {
          composed: true,
          bubbles: true,
          cancelable: true
        }));
      }

      handleFocus() {
        // trigger a private focus to make it bubble and be handled by parent button-menu
        // this is used for resetting cancelBlur in button-menu
        this.dispatchEvent(new CustomEvent('privatefocus', {
          bubbles: true,
          cancelable: true
        }));
      }

      handleClick(event) {
        // no action needed when item is disabled
        if (this.disabled) {
          event.preventDefault(); // do nothing and return

          return;
        } // allow HREF to be followed


        if (this.href) ; else {
          event.preventDefault();
          this.dispatchSelect();
        }
      }

      handleKeyDown(event) {
        // no action needed when item is disabled
        if (this.disabled) {
          // do nothing and return
          return;
        }

        if (event.keyCode === keyCodes.space) {
          // follow HREF if a value was provided
          if (this.href) {
            // trigger click behavior
            this.template.querySelector('a').click();
          } else {
            // if no HREF is provided follow usual select behavior
            this.dispatchSelect();
          }
        }
      }
      /**
       *
       * The select event is a non-navigational event.
       * The purpose of the event is to toggle the selected state of a menu item.
       * It will not be dispatched if a menu item has an HREF value to navigate to (other than the default).
       * This event will be handled by the parent button-menu component.
       *
       **/


      dispatchSelect() {
        if (!this.disabled) {
          this.dispatchEvent(new CustomEvent('privateselect', {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
              value: lwc.unwrap(this.value)
            }
          }));
        }
      }
      /**
       * Sets focus on the anchor element in the menu item.
       */


      focus() {
        // set the focus on the anchor element
        this.template.querySelector('a').focus(); // dispatch a focus event for the menu item component

        this.dispatchEvent(new CustomEvent('focus'));
      }

    }

    lwc.registerDecorators(LightningMenuItem, {
      publicProps: {
        value: {
          config: 0
        },
        label: {
          config: 0
        },
        iconName: {
          config: 0
        },
        prefixIconName: {
          config: 0
        },
        href: {
          config: 0
        },
        draftAlternativeText: {
          config: 0
        },
        isDraft: {
          config: 3
        },
        accessKey: {
          config: 3
        },
        tabIndex: {
          config: 3
        },
        disabled: {
          config: 3
        },
        checked: {
          config: 3
        }
      },
      publicMethods: ["focus"],
      track: {
        _accesskey: 1,
        _disabled: 1,
        _tabindex: 1,
        _checked: 1,
        _isDraft: 1
      }
    });

    var _lightningMenuItem = lwc.registerComponent(LightningMenuItem, {
      tmpl: _tmpl$6
    });

    function tmpl$6($api, $cmp, $slotset, $ctx) {
      const {
        c: api_custom_element,
        h: api_element,
        d: api_dynamic,
        ti: api_tab_index,
        b: api_bind,
        k: api_key,
        i: api_iterator,
        f: api_flatten
      } = $api;
      const {
        _m0,
        _m1,
        _m2,
        _m3,
        _m4
      } = $ctx;
      return [api_element("ul", {
        className: $cmp.computedListClass,
        attrs: {
          "role": "tablist",
          "aria-orientation": $cmp.computedAriaOrientation
        },
        key: 2,
        on: {
          "keydown": _m4 || ($ctx._m4 = api_bind($cmp.handleKeyDown))
        }
      }, api_flatten([api_iterator($cmp._allTabs, function (tab) {
        return tab.visible ? api_element("li", {
          className: tab.class,
          attrs: {
            "data-tab": true,
            "title": tab.title,
            "role": "presentation",
            "data-label": tab.label,
            "data-tab-value": tab.value
          },
          key: api_key(5, tab.value),
          on: {
            "click": _m2 || ($ctx._m2 = api_bind($cmp.handleTabClick))
          }
        }, [api_element("a", {
          className: tab.linkClass,
          attrs: {
            "data-tab-value": tab.value,
            "data-label": tab.label,
            "role": "tab",
            "href": "javascript:void(0)",
            "tabindex": api_tab_index(tab.tabIndex),
            "aria-selected": tab.ariaSelected
          },
          key: 6,
          on: {
            "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
            "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus))
          }
        }, [tab.iconName ? api_element("span", {
          classMap: {
            "slds-tabs__left-icon": true
          },
          key: 8
        }, [api_custom_element("lightning-icon", _lightningIcon, {
          attrs: {
            "data-tab-value": tab.value
          },
          props: {
            "iconName": tab.iconName,
            "size": "small",
            "alternativeText": tab.iconAlternativeText
          },
          key: 9
        }, [])]) : null, api_dynamic(tab.label), tab.endIconName ? api_element("span", {
          classMap: {
            "slds-tabs__right-icon": true
          },
          key: 11
        }, [api_custom_element("lightning-icon", _lightningIcon, {
          attrs: {
            "data-tab-value": tab.value
          },
          props: {
            "iconName": tab.endIconName,
            "size": "small",
            "alternativeText": tab.endIconAlternativeText
          },
          key: 12
        }, [])]) : null, tab.showErrorIndicator ? api_element("span", {
          classMap: {
            "slds-tabs__right-icon": true
          },
          key: 14
        }, [api_custom_element("lightning-icon", _lightningIcon, {
          attrs: {
            "data-tab-value": tab.value
          },
          props: {
            "iconName": "utility:error",
            "variant": "error",
            "size": "small",
            "alternativeText": $cmp.i18n.errorStateAlternativeText
          },
          key: 15
        }, [])]) : null])]) : null;
      }), $cmp.overflowSupported ? api_element("li", {
        className: $cmp.computedOverflowClass,
        style: $cmp.computedOverflowVisibility,
        attrs: {
          "data-overflow": true
        },
        key: 17
      }, [api_custom_element("lightning-button-menu", _lightningButtonMenu, {
        props: {
          "variant": "bare",
          "alternativeText": $cmp.i18n.moreAlternativeText,
          "title": $cmp.i18n.moreTitle,
          "iconName": "utility:chevrondown",
          "label": $cmp.i18n.more,
          "menuAlignment": "right"
        },
        key: 18,
        on: {
          "select": _m3 || ($ctx._m3 = api_bind($cmp.handleOverflowSelect))
        }
      }, api_iterator($cmp._allTabs, function (tab) {
        return !tab.visible ? api_custom_element("lightning-menu-item", _lightningMenuItem, {
          props: {
            "label": tab.label,
            "value": tab.value
          },
          key: api_key(21, tab.value)
        }, []) : null;
      }))]) : null]))];
    }

    var _tmpl$7 = lwc.registerTemplate(tmpl$6);
    tmpl$6.stylesheets = [];
    tmpl$6.stylesheetTokens = {
      hostAttribute: "lightning-tabBar_tabBar-host",
      shadowAttribute: "lightning-tabBar_tabBar"
    };

    var labelOverflowMore = 'More';

    var labelOverflowMoreAlternativeText = 'Tabs';

    var labelOverflowMoreTitle = 'More Tabs';

    var labelErrorStateAlternativeText = 'This item has an error';

    function calculateOverflow({
      items,
      activeItem,
      containerWidth,
      overflowWidth
    }) {
      const visibleItems = [];
      const overflowItems = [];
      const allItemsWidth = items.reduce((totalWidth, item) => totalWidth + item.width, 0); // if total items width is less than containerwidth or if the containerwidth is
      // less than zero in cases where container is not yet rendered and we subtract the threshold
      // return all items as visibleItems and overflowItems empty

      if (allItemsWidth <= containerWidth || containerWidth <= 0) {
        return {
          visibleItems: items,
          overflowItems
        };
      } // Not all items fit, an overflow is needed


      let totalWidth = overflowWidth; // The active item should always show so we're always including it

      if (activeItem) {
        totalWidth += activeItem.width;
      }

      let activeItemFitsWithoutRearrangement = false;

      for (const item of items) {
        if (activeItem.value === item.value) {
          activeItemFitsWithoutRearrangement = overflowItems.length === 0;

          if (activeItemFitsWithoutRearrangement) {
            visibleItems.push(activeItem);
          }
        } else {
          const itemFits = item.width + totalWidth <= containerWidth;

          if (itemFits && overflowItems.length === 0) {
            totalWidth += item.width;
            visibleItems.push(item);
          } else {
            overflowItems.push(item);
          }
        }
      }

      if (!activeItemFitsWithoutRearrangement) {
        visibleItems.push(activeItem);
      }

      return {
        visibleItems,
        overflowItems
      };
    }

    class LightningResizeObserver {
      constructor(resizeCallback) {
        this._resizeObserverAvailable = typeof ResizeObserver === 'function';

        const delayedCallback = callback => {
          if (this._running) {
            return;
          }

          this._running = true; // eslint-disable-next-line lwc/no-set-timeout

          setTimeout(() => {
            callback();
            this._running = false;
          }, 60);
        };

        this._delayedResizeCallback = delayedCallback.bind(this, resizeCallback);

        if (this._resizeObserverAvailable) {
          this._resizeObserver = new ResizeObserver(this._delayedResizeCallback);
        }
      }

      observe(lightningElement) {
        // Using requestAnimationFrame as the element may not be physically in the DOM yet.
        this._requestAnimationId = requestAnimationFrame(() => {
          const domElement = lwc.unwrap(lightningElement);

          if (this._resizeObserverAvailable) {
            this._resizeObserver.observe(domElement);
          } else if (!this._hasWindowResizeHandler) {
            window.addEventListener('resize', this._delayedResizeCallback);
            this._hasWindowResizeHandler = true;
          }
        });
      }

      disconnect() {
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
        }

        if (this._requestAnimationId) {
          cancelAnimationFrame(this._requestAnimationId);
        }

        window.removeEventListener('resize', this._delayedResizeCallback);
        this._hasWindowResizeHandler = false;
      }

    }

    function preventDefaultAndStopPropagation$1(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    function handleKeyDownOnTabList(event, currentFocusedIndex, tabsetInterface) {
      switch (event.keyCode) {
        case keyCodes.left:
        case keyCodes.right:
        case keyCodes.down:
        case keyCodes.up:
          // eslint-disable-line no-case-declarations
          const isArrowUp = event.keyCode === keyCodes.up;
          const isArrowDown = event.keyCode === keyCodes.down;
          const isArrowLeft = event.keyCode === keyCodes.left;
          const isArrowRight = event.keyCode === keyCodes.right;
          const verticalNavigation = tabsetInterface.isVerticalOrientation() && (isArrowUp || isArrowDown);
          const horizontalNavigation = !tabsetInterface.isVerticalOrientation() && (isArrowLeft || isArrowRight);

          if (verticalNavigation || horizontalNavigation) {
            preventDefaultAndStopPropagation$1(event);
            const increment = isArrowLeft || isArrowUp ? -1 : 1;
            let newIndex = currentFocusedIndex + increment;

            if (newIndex < 0) {
              newIndex = tabsetInterface.totalTabs() - 1;
            }

            if (newIndex + 1 > tabsetInterface.totalTabs()) {
              newIndex = 0;
            }

            tabsetInterface.selectTabIndex(newIndex);
          }

          break;

        default:
          break;
      }
    }

    const i18n$1 = {
      more: labelOverflowMore,
      moreAlternativeText: labelOverflowMoreAlternativeText,
      moreTitle: labelOverflowMoreTitle,
      errorStateAlternativeText: labelErrorStateAlternativeText
    };
    const RECOMPUTE_OVERFLOW_THRESHOLD_PX = 30;

    class LightningTabBar extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.disableOverflow = false;
        this._allTabs = [];
        this._hasOverflow = false;
        this._variant = void 0;
        this._tabsChanged = false;
      }

      connectedCallback() {
        this._connected = true;

        if (this.overflowSupported) {
          this._queueOverflow();
        }
      }

      renderedCallback() {
        if (this.overflowSupported && !this._resizeObserver) {
          this._resizeObserver = this._setupResizeObserver();
        }

        if (this._tabsChanged) {
          // tabs array changed, causing this render.
          this.synchronizeA11y();
          this._tabsChanged = false;
        }
      }

      disconnectedCallback() {
        this._connected = false;

        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
        }
      }

      get variant() {
        return this._variant;
      }

      set variant(value) {
        if (this._connected && value === 'vertical') {
          if (this._resizeObserver) {
            this._resizeObserver.disconnect();
          }
        }

        this._variant = value;
      }

      get tabHeaders() {
        return this._tabHeaders;
      }

      set tabHeaders(tabHeaders = []) {
        this._tabsChanged = true;
        this._tabHeaders = tabHeaders;
        const allTabs = tabHeaders.map(tab => {
          const classNames = this.tabClass({});
          const linkClassNames = this.computedLinkClass;
          return {
            label: tab.label,
            title: tab.title || tab.label,
            linkId: tab.value + '__item',
            domId: tab.domId,
            value: String(tab.value),
            class: classNames,
            linkClass: linkClassNames,
            tabIndex: -1,
            ariaSelected: false,
            contentId: '',
            visible: true,
            iconName: tab.iconName,
            iconAlternativeText: tab.iconAlternativeText,
            endIconName: tab.endIconName,
            endIconAlternativeText: tab.endIconAlternativeText,
            showErrorIndicator: tab.showErrorIndicator
          };
        });
        let selectedTab = allTabs[0];

        if (this._selectedTab) {
          selectedTab = allTabs.find(tab => tab.value === this._selectedTab.value);

          if (!selectedTab) {
            selectedTab = allTabs[0];
          }
        }

        if (selectedTab) {
          this._selectedTab = selectedTab;
          selectedTab.class = this.tabClass({
            selected: true
          });
          selectedTab.ariaSelected = 'true';
          selectedTab.tabIndex = 0;
        }

        this._allTabs = allTabs;

        if (this._connected && this.overflowSupported) {
          requestAnimationFrame(this._queueOverflow.bind(this));
        }
      }

      selectTabByValue(tabValue) {
        this._selectTab(tabValue);
      }

      get overflowSupported() {
        return this._variant !== 'vertical' && !this.disableOverflow;
      }

      get computedLinkClass() {
        const isScopedVariant = this._variant === 'scoped';
        const isVerticalVariant = this._variant === 'vertical';
        const linkClassNames = classSet().add({
          'slds-tabs_default__link': !isScopedVariant && !isVerticalVariant,
          'slds-tabs_scoped__link': isScopedVariant,
          'slds-vertical-tabs__link': isVerticalVariant
        }).toString();
        return linkClassNames;
      }

      get computedOverflowVisibility() {
        return this._hasOverflow ? '' : 'visibility: hidden;';
      }

      get i18n() {
        return i18n$1;
      }

      handleOverflowSelect(event) {
        event.stopPropagation();

        this._selectTabAndFireSelectEvent(event.detail.value);

        if (this._hasOverflow) {
          this._recomputeOverflow();
        }
      }

      handleTabClick(event) {
        // Don't navigate to href. Since href is set to "javascript:void(0)", if event default action is not prevented
        // the browser attempts to navigate to the url provided, thus raising a CSP violation that doesn't allow
        // javascript: in urls.
        event.preventDefault();
        const clickedtabValue = event.target.getAttribute('data-tab-value');

        this._selectTabAndFireSelectEvent(clickedtabValue, {
          hasFocus: true
        });
      }

      _findTabByValue(tabValue) {
        return this._allTabs.find(tab => tab.value === tabValue);
      }

      _selectTabAndFireSelectEvent(tabValue, options) {
        this._selectTab(tabValue, options);

        const tab = this._findTabByValue(tabValue);

        this.dispatchEvent(new CustomEvent('select', {
          detail: {
            value: tab.value,
            label: tab.label
          }
        }));
      }

      _selectTab(tabValue, options = {}) {
        const tab = this._findTabByValue(tabValue);

        if (!tab) {
          return;
        }

        if (this._selectedTab) {
          if (this._selectedTab.value === tabValue) {
            // already selected, do nothing
            return;
          }

          this._selectedTab.hasFocus = false;
          this._selectedTab.ariaSelected = 'false';
          this._selectedTab.class = this.tabClass({});
          this._selectedTab.tabIndex = -1;
        }

        tab.hasFocus = true;
        tab.ariaSelected = 'true';
        tab.class = this.tabClass({
          selected: true,
          hasFocus: options.hasFocus
        });
        tab.tabIndex = 0;
        this._selectedTab = tab;
      }

      handleBlur(event) {
        const tabValue = event.target.getAttribute('data-tab-value');

        const tab = this._findTabByValue(tabValue);

        if (tab) {
          tab.class = this.tabClass({
            selected: this._selectedTab.value === tab.value,
            hasFocus: false
          });
        }
      }

      handleFocus(event) {
        const tabValue = event.target.getAttribute('data-tab-value');

        const tab = this._findTabByValue(tabValue);

        tab.class = this.tabClass({
          selected: this._selectedTab.value === tab.value,
          hasFocus: true
        });
      }

      get _visibleTabs() {
        return this._allTabs.filter(tab => tab.visible);
      }

      handleKeyDown(event) {
        let currentFocusedIndex = 0;

        if (this._selectedTab) {
          currentFocusedIndex = this._visibleTabs.findIndex(tab => tab.value === this._selectedTab.value);
        }

        handleKeyDownOnTabList(event, currentFocusedIndex, {
          isVerticalOrientation: () => this._variant === 'vertical',
          totalTabs: () => this._visibleTabs.length,
          selectTabIndex: index => {
            const tab = this._visibleTabs[index];

            this._selectTabAndFireSelectEvent(tab.value, {
              hasFocus: true
            });

            this.template.querySelector(`a[data-tab-value="${tab.value}"]`).focus();
          }
        });
      }

      get computedAriaOrientation() {
        return this._variant === 'vertical' ? 'vertical' : null;
      }

      get computedListClass() {
        const isScoped = this._variant === 'scoped';
        const isVertical = this._variant === 'vertical';
        return classSet().add({
          'slds-tabs_scoped__nav': isScoped,
          'slds-vertical-tabs__nav': isVertical,
          'slds-tabs_default__nav': !isScoped && !isVertical
        }).toString();
      }

      tabClass({
        selected = false,
        hasFocus = false
      }) {
        const isScopedVariant = this._variant === 'scoped';
        const isVerticalVariant = this._variant === 'vertical';
        return classSet().add({
          'slds-tabs_default__item': !isScopedVariant && !isVerticalVariant,
          'slds-tabs_scoped__item': isScopedVariant,
          'slds-vertical-tabs__nav-item': isVerticalVariant,
          'slds-is-active': selected,
          'slds-has-focus': hasFocus
        }).toString();
      }

      get computedOverflowClass() {
        const tabStyle = this._variant === 'scoped' ? 'scoped' : 'default';
        return `slds-tabs_${tabStyle}__item slds-tabs_${tabStyle}__overflow-button`;
      }

      synchronizeA11y() {
        const tabLinks = this.template.querySelectorAll('a[role="tab"]');
        tabLinks.forEach(tabLink => {
          const tabData = this._allTabs.find(tab => tabLink.getAttribute('data-tab-value') === tab.value);

          tabLink.setAttribute('id', tabData.linkId);
          tabLink.setAttribute('aria-controls', tabData.domId);
        });
      }

      _setupResizeObserver() {
        const resizeObserver = new LightningResizeObserver(() => {
          if (this._connected) {
            const newWidth = this.getBoundingClientRect().width; // dont do anything if the resize is within a threshold of containerwidth +/- 30 possibly because of scroller appearance etc

            if (this._containerWidthWhenLastResized && newWidth < this._containerWidthWhenLastResized + RECOMPUTE_OVERFLOW_THRESHOLD_PX && newWidth > this._containerWidthWhenLastResized - RECOMPUTE_OVERFLOW_THRESHOLD_PX) {
              return;
            } // set the containerWidthWhenLastResized to the newWidth only when resize happens
            // so that next time it is compared against this accumulated value and resize happens


            this._containerWidthWhenLastResized = newWidth;

            this._queueOverflow();
          }
        });
        resizeObserver.observe(this.template.querySelector('[role="tablist"]'));
        return resizeObserver;
      }

      _queueOverflow() {
        this._allTabs.forEach(tab => {
          tab.visible = true;
        });

        requestAnimationFrame(this._recomputeOverflow.bind(this));
      }

      _recomputeOverflow() {
        if (!this._connected) {
          return;
        } // keep buffer = RECOMPUTE_OVERFLOW_THRESHOLD_PX so that we dont run into edge cases where recompute doesnt happen in the window


        const containerWidth = this.getBoundingClientRect().width - RECOMPUTE_OVERFLOW_THRESHOLD_PX;
        const tabHeaderElements = this.template.querySelectorAll('[data-tab]');

        for (let i = 0; i < tabHeaderElements.length; i++) {
          const tabHeaderElement = tabHeaderElements[i];
          const tabValue = tabHeaderElement.getAttribute('data-tab-value');

          const tab = this._findTabByValue(tabValue);

          let tabWidth = tabHeaderElement.getBoundingClientRect().width; // eslint-disable-next-line lightning-global/check-return-value-for-nullable-call

          const computedStyle = getComputedStyle(lwc.unwrap(tabHeaderElement));

          if (computedStyle) {
            tabWidth += parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
          }

          tab.width = tabWidth;
        }

        const overflowElement = this.template.querySelector('[data-overflow]');
        const overflowData = calculateOverflow({
          items: this._allTabs,
          activeItem: this._selectedTab,
          containerWidth,
          overflowWidth: overflowElement.getBoundingClientRect().width
        });
        overflowData.overflowItems.forEach(overflowItem => {
          if (overflowItem.visible) {
            overflowItem.visible = false;
          }
        });
        this._hasOverflow = overflowData.overflowItems && overflowData.overflowItems.length > 0;
        overflowData.visibleItems.forEach(overflowItem => {
          if (!overflowItem.visible) {
            overflowItem.visible = true;
          }
        });
      }

    }

    lwc.registerDecorators(LightningTabBar, {
      publicProps: {
        disableOverflow: {
          config: 0
        },
        variant: {
          config: 3
        },
        tabHeaders: {
          config: 3
        }
      },
      publicMethods: ["selectTabByValue"],
      track: {
        _allTabs: 1,
        _hasOverflow: 1,
        _variant: 1
      }
    });

    var _lightningTabBar = lwc.registerComponent(LightningTabBar, {
      tmpl: _tmpl$7
    });

    function tmpl$7($api, $cmp, $slotset, $ctx) {
      const {
        b: api_bind,
        c: api_custom_element,
        s: api_slot,
        h: api_element
      } = $api;
      const {
        _m0,
        _m1,
        _m2
      } = $ctx;
      return [api_element("div", {
        className: $cmp.computedClass,
        attrs: {
          "title": $cmp.title
        },
        key: 2,
        on: {
          "privatetabregister": _m1 || ($ctx._m1 = api_bind($cmp.handleTabRegister)),
          "privatetabdatachange": _m2 || ($ctx._m2 = api_bind($cmp.handleTabDataChange))
        }
      }, [api_custom_element("lightning-tab-bar", _lightningTabBar, {
        props: {
          "variant": $cmp.variant
        },
        key: 3,
        on: {
          "select": _m0 || ($ctx._m0 = api_bind($cmp.handleTabSelected))
        }
      }, []), api_slot("", {
        key: 4
      }, [], $slotset)])];
    }

    var _tmpl$8 = lwc.registerTemplate(tmpl$7);
    tmpl$7.slots = [""];
    tmpl$7.stylesheets = [];
    tmpl$7.stylesheetTokens = {
      hostAttribute: "lightning-tabset_tabset-host",
      shadowAttribute: "lightning-tabset_tabset"
    };

    let idCounter = 0;
    function generateUniqueId(prefix = 'input') {
      idCounter++;
      return `${prefix}-${idCounter}`;
    }

    const tabClassPrefixByVariant = {
      scoped: 'slds-tabs_scoped',
      vertical: 'slds-vertical-tabs',
      standard: 'slds-tabs_default'
    };
    /**
     * Represents a list of tabs.
     * @slot default Placeholder for lightning-tab.
     */

    class LightningTabset extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.title = void 0;
        this._variant = 'standard';
      }

      connectedCallback() {
        this._tabByValue = {};
        this._tabHeaders = [];
        this._connected = true;
      }

      disconnectedCallback() {
        this._connected = false;
      }
      /**
       * The variant changes the appearance of the tabset. Accepted variants are standard, scoped, and vertical.
       * @type {string}
       */


      get variant() {
        return this._variant;
      }

      set variant(value) {
        this._variant = normalizeString(value, {
          fallbackValue: 'standard',
          validValues: ['scoped', 'vertical']
        });
      }
      /**
       * Sets a specific tab to open by default using a string that matches a tab's value string. If not used, the first tab opens by default.
       * @type {string}
       */


      get activeTabValue() {
        return this._activeTabValue;
      }

      set activeTabValue(tabValue) {
        const newTabValue = tabValue && String(tabValue);

        if (!newTabValue || this._activeTabValue === newTabValue) {
          // already selected, do nothing
          return;
        }

        if (this._connected) {
          const tab = this._tabByValue[tabValue];

          if (tab) {
            this._selectTab(tabValue);
          }
        } else {
          this._activeTabValue = newTabValue;
        }
      }

      handleTabRegister(event) {
        event.stopPropagation();
        const tab = event.target;
        tab.role = 'tabpanel';
        const generatedUniqueId = generateUniqueId('tab');

        if (!tab.id) {
          // We need a tab.id on the tab component to ensure that aria-controls from tab-bar can point to it
          tab.id = generatedUniqueId;
        }

        if (!tab.value) {
          tab.value = generatedUniqueId;
        }

        const tabValue = tab.value;
        tab.dataTabValue = tabValue;
        tab.ariaLabelledBy = tabValue + '__item';
        tab.classList.add(`${tabClassPrefixByVariant[this.variant]}__content`);
        tab.classList.add('slds-hide');
        tab.classList.remove('slds-show');
        const tabs = this.querySelectorAll(`[role='tabpanel']`);
        let tabIndex;

        for (tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
          if (tabs[tabIndex].dataTabValue === tabValue) {
            break;
          }
        }

        event.detail.setDeRegistrationCallback(() => {
          if (!this._connected) {
            return;
          }

          const index = this._tabHeaders.findIndex(existingTab => existingTab.value === tabValue);

          if (index >= 0) {
            this._tabHeaders.splice(index, 1);

            this._updateTabBarHeaders(this._tabHeaders);

            this._tabByValue[tabValue] = undefined;

            if (this._activeTabValue === tab.value && this._tabHeaders.length > 0) {
              this._showTabContentForTabValue(this._tabHeaders[0].value);
            }
          }
        });

        this._tabHeaders.splice(tabIndex, 0, {
          value: tabValue,
          label: tab.label,
          domId: tab.id,
          title: tab.title,
          iconName: tab.iconName,
          // the icon was incorrectly named assistive text..
          iconAlternativeText: tab.iconAssistiveText,
          endIconName: tab.endIconName,
          endIconAlternativeText: tab.endIconAlternativeText,
          showErrorIndicator: tab.showErrorIndicator
        });

        this._updateTabBarHeaders(this._tabHeaders);

        this._tabByValue[tabValue] = tab; // if no activeTabValue specified, we will default to the first registered tab

        if (!this._activeTabValue) {
          this._activeTabValue = tab.value;
        }

        if (this._activeTabValue === tab.value) {
          this._selectTab(tabValue);
        }
      }

      _selectTab(value) {
        this._selectTabHeaderByTabValue(value);

        this._showTabContentForTabValue(value);
      }

      _showTabContentForTabValue(value) {
        const tab = this._tabByValue[value];

        if (!tab) {
          return;
        }

        if (this._activeTabValue) {
          const currentTab = this._tabByValue[this._activeTabValue];

          if (currentTab) {
            currentTab.classList.add('slds-hide');
            currentTab.classList.remove('slds-show');
          }
        }

        this._activeTabValue = tab.value;
        tab.classList.add('slds-show');
        tab.classList.remove('slds-hide');
        tab.loadContent();
      }

      _selectTabHeaderByTabValue(value) {
        if (!this._connected) {
          return;
        }

        const tabBar = this.template.querySelector('lightning-tab-bar');
        tabBar.selectTabByValue(value);
      }

      handleTabSelected(event) {
        const selectedTabValue = event.detail.value;
        const tab = this._tabByValue[selectedTabValue];

        if (this._activeTabValue !== tab.value) {
          this._showTabContentForTabValue(selectedTabValue);
        }
      }

      handleTabDataChange(event) {
        const changedTab = event.target;
        const newTabValue = changedTab.value;
        const currentTabValue = changedTab.dataTabValue;

        const matchingTabHeader = this._tabHeaders.find(tabHeader => tabHeader.value === currentTabValue);

        if (matchingTabHeader) {
          matchingTabHeader.label = changedTab.label;
          matchingTabHeader.value = newTabValue;
          matchingTabHeader.title = changedTab.title;
          matchingTabHeader.iconName = changedTab.iconName;
          matchingTabHeader.iconAlternativeText = changedTab.iconAssistiveText;
          matchingTabHeader.endIconName = changedTab.endIconName;
          matchingTabHeader.endIconAlternativeText = changedTab.endIconAlternativeText;
          matchingTabHeader.showErrorIndicator = changedTab.showErrorIndicator;
        }

        this._updateTabBarHeaders(this._tabHeaders);

        if (currentTabValue !== newTabValue) {
          const tab = this._tabByValue[currentTabValue];

          if (tab) {
            tab.dataTabValue = newTabValue;
            this._tabByValue[newTabValue] = this._tabByValue[currentTabValue];
            this._tabByValue[currentTabValue] = undefined;
          }

          if (this._activeTabValue === currentTabValue) {
            this._activeTabValue = newTabValue;
          }
        }
      }

      _updateTabBarHeaders(headers) {
        this.template.querySelector('lightning-tab-bar').tabHeaders = headers.slice();
      }

      get computedClass() {
        return tabClassPrefixByVariant[this.variant];
      }

    }

    lwc.registerDecorators(LightningTabset, {
      publicProps: {
        title: {
          config: 0
        },
        variant: {
          config: 3
        },
        activeTabValue: {
          config: 3
        }
      },
      track: {
        _variant: 1
      }
    });

    var _lightningTabset = lwc.registerComponent(LightningTabset, {
      tmpl: _tmpl$8
    });

    function tmpl$8($api, $cmp, $slotset, $ctx) {
      const {
        s: api_slot
      } = $api;
      return [$cmp._loadContent ? api_slot("", {
        key: 3
      }, [], $slotset) : null];
    }

    var _tmpl$9 = lwc.registerTemplate(tmpl$8);
    tmpl$8.slots = [""];
    tmpl$8.stylesheets = [];
    tmpl$8.stylesheetTokens = {
      hostAttribute: "lightning-tab_tab-host",
      shadowAttribute: "lightning-tab_tab"
    };

    /**
     * A single tab in a tabset component.
     * @slot default Placeholder for your content in lightning-tab.
     */

    class LightningTab extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this._loadContent = false;
      }

      connectedCallback() {
        this._connected = true;
        this.dispatchEvent(new CustomEvent('privatetabregister', {
          cancelable: true,
          bubbles: true,
          composed: true,
          detail: {
            setDeRegistrationCallback: deRegistrationCallback => {
              this._deRegistrationCallback = deRegistrationCallback;
            }
          }
        }));
      }
      /**
       * Reserved for internal use.
       */


      loadContent() {
        this._loadContent = true;
        this.dispatchEvent(new CustomEvent('active'));
      }

      disconnectedCallback() {
        this._connected = false;

        if (this._deRegistrationCallback) {
          this._deRegistrationCallback();
        }
      }
      /**
       * The optional string to be used during tabset's select event to determine which tab was clicked.
       * This string is also used by active-tab-value in tabset to open a tab.
       * @type {string}
       */


      get value() {
        return this._value;
      }

      set value(newValue) {
        this._value = String(newValue);

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * The text displayed in the tab header.
       * @type {string}
       */


      get label() {
        return this._label;
      }

      set label(value) {
        this._label = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * Specifies text that displays in a tooltip over the tab content.
       * @type {string}
       */


      get title() {
        return this._title;
      }

      set title(value) {
        this._title = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * The Lightning Design System name of an icon to display before the tab label.
       * Specify the name in the format 'utility:down' where 'utility' is the category, and
       * 'down' is the icon to be displayed. Only utility icons can be used.
       * @type {string}
       */


      get iconName() {
        return this._iconName;
      }

      set iconName(value) {
        this._iconName = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * The alternative text for the icon specified by icon-name.
       * @type {string}
       */


      get iconAssistiveText() {
        return this._iconAlernativeText;
      }

      set iconAssistiveText(value) {
        this._iconAlernativeText = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * The Lightning Design System name of an icon to display after the tab label.
       * Specify the name in the format 'utility:check' where 'utility' is the category, and
       * 'check' is the icon to be displayed.
       * @type {string}
       */


      get endIconName() {
        return this._endIconName;
      }

      set endIconName(value) {
        this._endIconName = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * The alternative text for the icon specified by end-icon-name.
       * @type {string}
       */


      get endIconAlternativeText() {
        return this._endIconAlternativeText;
      }

      set endIconAlternativeText(value) {
        this._endIconAlternativeText = value;

        this._dispatchDataChangeEventIfConnected();
      }
      /**
       * Specifies whether there's an error in the tab content.
       * An error icon is displayed to the right of the tab label.
       * @type {boolean}
       */


      get showErrorIndicator() {
        return this._showErrorIndicator;
      }

      set showErrorIndicator(value) {
        this._showErrorIndicator = normalizeBoolean(value);

        this._dispatchDataChangeEventIfConnected();
      }

      _dispatchDataChangeEventIfConnected() {
        if (this._connected) {
          this.dispatchEvent(new CustomEvent('privatetabdatachange', {
            cancelable: true,
            bubbles: true,
            composed: true
          }));
        }
      }

    }

    lwc.registerDecorators(LightningTab, {
      publicProps: {
        value: {
          config: 3
        },
        label: {
          config: 3
        },
        title: {
          config: 3
        },
        iconName: {
          config: 3
        },
        iconAssistiveText: {
          config: 3
        },
        endIconName: {
          config: 3
        },
        endIconAlternativeText: {
          config: 3
        },
        showErrorIndicator: {
          config: 3
        }
      },
      publicMethods: ["loadContent"],
      track: {
        _loadContent: 1
      }
    });

    var _lightningTab = lwc.registerComponent(LightningTab, {
      tmpl: _tmpl$9
    });

    function tmpl$9($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        c: api_custom_element,
        t: api_text
      } = $api;
      return [api_custom_element("lightning-tabset", _lightningTabset, {
        key: 2
      }, [api_custom_element("lightning-tab", _lightningTab, {
        props: {
          "label": "Item One"
        },
        key: 3
      }, [api_dynamic($cmp.recordId)]), api_custom_element("lightning-tab", _lightningTab, {
        props: {
          "label": "Item Two",
          "title": "2nd tab extended title"
        },
        key: 4
      }, [api_text("Two Content !")]), api_custom_element("lightning-tab", _lightningTab, {
        props: {
          "label": "Item Three"
        },
        key: 5
      }, [api_text("Three Content !")])])];
    }

    var _tmpl$a = lwc.registerTemplate(tmpl$9);
    tmpl$9.stylesheets = [];
    tmpl$9.stylesheetTokens = {
      hostAttribute: "lwc-tabset1_tabset1-host",
      shadowAttribute: "lwc-tabset1_tabset1"
    };

    class TabsetBasic extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.recordId = sessionStorage.getItem("recordId");
      }

    }

    lwc.registerDecorators(TabsetBasic, {
      publicProps: {
        recordId: {
          config: 0
        }
      }
    });

    var tabset1 = lwc.registerComponent(TabsetBasic, {
      tmpl: _tmpl$a
    });

    return tabset1;

});

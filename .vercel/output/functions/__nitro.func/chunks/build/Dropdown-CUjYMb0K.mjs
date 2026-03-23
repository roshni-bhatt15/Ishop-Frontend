import { j as _export_sfc, r as outsideClick } from './server.mjs';
import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'vue-dompurify-html';

let idCounter = 0;
function generateUniqueId(prefix = "id") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}
const _sfc_main = {
  setup() {
    const currentId = generateUniqueId("dropdown");
    return { currentId };
  },
  name: "Dropdown",
  data() {
    return {
      optionsData: this.options,
      searched: "",
      dropdownOpen: false,
      hasLayer: this.layer,
      selectedKeyData: ""
    };
  },
  mounted() {
    var _a;
    this.selectedKeyData = (_a = this.selectedKey) != null ? _a : Object.keys(this.options)[0];
    this.processSelected(this.options);
  },
  watch: {
    options(value) {
      this.processSelected(value);
    },
    selectedKey(value) {
      this.selectedKeyData = value;
    },
    searched(value) {
      this.doSearch(value);
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    defaultNull: {
      type: Boolean,
      default: false
    },
    positionFixed: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default() {
        return { "0": { title: "--------------" } };
      }
    },
    selectedKey: {
      default() {
        return null;
      }
    },
    keyName: {
      type: String,
      default: "title"
    },
    searching: {
      type: Boolean,
      default: false
    },
    layer: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    outsideClick
  },
  computed: {
    isSmallerDevice() {
      return (void 0).innerWidth <= 768;
    },
    opt() {
      var _a;
      return (_a = this.optionsData) != null ? _a : null;
    },
    currentKey() {
      if (this.selectedKeyData && this.options[this.selectedKeyData]) {
        return this.selectedKeyData;
      } else {
        return Object.keys(this.optionsData)[0];
      }
    },
    selectedValue() {
      if (this.opt && this.opt[this.currentKey] && this.opt[this.currentKey][this.keyName])
        return this.opt[this.currentKey][this.keyName];
      else
        return "--------------";
    }
  },
  methods: {
    processSelected(value) {
      if (!this.selectedKey && !this.defaultNull) {
        this.selectedKeyData = Object.keys(value)[0];
        this.$emit("clicked", {
          key: this.selectedKeyData,
          value: value[0]
        });
      } else if (!this.selectedKey && this.defaultNull) {
        value["0"] = { title: "--------------" };
        this.selectedKeyData = "0";
      } else if (this.defaultNull) {
        value["0"] = { title: "--------------" };
      }
      this.optionsData = value;
    },
    doSearch(query) {
      var _a;
      this.optionsData = {};
      const object = this.options;
      for (const property in object) {
        if ((_a = object[property][this.keyName]) == null ? void 0 : _a.toLowerCase().includes(query.toLowerCase()))
          this.opt[property] = object[property];
      }
    },
    openDropdown() {
      if (this.disabled) {
        return false;
      }
      if (this.isSmallerDevice) {
        this.hasLayer = true;
      }
      if (this.hasLayer && this.positionFixed) {
        (void 0).body.classList.add("no-scroll");
      }
      this.dropdownOpen = !this.dropdownOpen;
      this.$emit("value", this.dropdownOpen);
      if (this.searching && this.dropdownOpen) {
        this.$nextTick(() => {
          this.$refs.searcBox.focus();
        });
      }
    },
    closeDropdown() {
      if (this.positionFixed) {
        (void 0).body.classList.remove("no-scroll");
      }
      this.dropdownOpen = false;
      this.$emit("value", this.dropdownOpen);
    },
    changed(index, obj) {
      this.$emit("changed", {
        key: index,
        value: obj
      });
      this.clicked(index, obj);
    },
    clicked(index, obj) {
      this.closeDropdown();
      this.searched = "";
      if (index !== "0" && this.currentKey !== index || this.defaultNull && this.currentKey !== index) {
        this.selectedKeyData = index;
        this.$emit("clicked", {
          key: index,
          value: obj
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_outside_click = resolveDirective("outside-click");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["custom-dropdown", { "open": $data.dropdownOpen }]
  }, _attrs))}><span${ssrRenderAttr("data-ignore", $setup.currentId)} class="${ssrRenderClass({ disabled: $props.disabled })}">${ssrInterpolate($options.selectedValue)} <i class="${ssrRenderClass([[{ "arrow-up": $data.dropdownOpen }, { "arrow-down": !$data.dropdownOpen }], "icon black ignore-click"])}"></i></span>`);
  if ($data.dropdownOpen) {
    _push(`<div class="dropdown-wrapper">`);
    if ($data.hasLayer) {
      _push(`<div${ssrRenderAttr("data-ignore", $setup.currentId)} class="layer"></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "dropdown-inner",
      id: $setup.currentId
    }, ssrGetDirectiveProps(_ctx, _directive_outside_click, $options.closeDropdown)))}>`);
    if ($props.searching) {
      _push(`<input type="text"${ssrRenderAttr("value", $data.searched)}>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<ul><!--[-->`);
    ssrRenderList($options.opt, (data, index) => {
      _push(`<li class="${ssrRenderClass({ active: `${$data.selectedKeyData}` === `${index}` })}">${ssrInterpolate(data[$props.keyName])}</li>`);
    });
    _push(`<!--]--></ul></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dropdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Dropdown-CUjYMb0K.mjs.map

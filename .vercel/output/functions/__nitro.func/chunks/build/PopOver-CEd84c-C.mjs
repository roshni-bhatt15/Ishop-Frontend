import { j as _export_sfc, r as outsideClick } from './server.mjs';
import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  name: "PopOver",
  components: {},
  directives: { outsideClick },
  props: {
    title: {
      type: String,
      default: ""
    },
    elemId: {
      type: String,
      default: ""
    },
    layer: {
      type: Boolean,
      default: false
    },
    outsideClickOn: {
      type: Boolean,
      default: true
    },
    layerOnResponsive: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isSmallerDevice() {
      return (void 0).innerWidth < 992;
    },
    hasFooterSlot() {
      return !!this.$slots["pop-footer"];
    }
  },
  data() {
    return {
      hasLayer: this.layer
    };
  },
  methods: {
    outsideClickFn() {
      if (this.outsideClickOn && !this.hasLayer) {
        this.closePopOver();
      }
    },
    closePopOver() {
      this.$emit("close");
    }
  },
  mounted() {
    if (this.isSmallerDevice && this.layerOnResponsive) {
      this.hasLayer = true;
    }
    if (this.hasLayer) {
      (void 0).body.classList.add("no-scroll");
    }
  },
  unmounted() {
    (void 0).body.classList.remove("no-scroll");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_outside_click = resolveDirective("outside-click");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["pop-over", { "has-layer": $data.hasLayer }]
  }, _attrs))}><div class="layer"${ssrRenderAttr("data-ignore", $props.elemId)}></div><div${ssrRenderAttrs(mergeProps({
    class: "pop-over-inner",
    id: $props.elemId
  }, ssrGetDirectiveProps(_ctx, _directive_outside_click, $options.outsideClickFn)))}>`);
  if ($props.title) {
    _push(`<div class="pop-heading flex sided plr-20 plr-sm-15 ptb-10 b-b pos-rel">`);
    ssrRenderSlot(_ctx.$slots, "heading", {}, () => {
      _push(`<h5 class="bold">${ssrInterpolate($props.title)}</h5>`);
    }, _push, _parent);
    _push(`<button class="right-btn close-btn pos-static no-shadow" aria-label="submit"><i class="icon close-icon"></i></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="sb pop-over-content p-20 p-sm-15">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div>`);
  if ($options.hasFooterSlot) {
    _push(`<div class="pop-footer b-t plr-20 plr-sm-15 pt-10 pb-10">`);
    ssrRenderSlot(_ctx.$slots, "pop-footer", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopOver.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PopOver = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { PopOver as default };
//# sourceMappingURL=PopOver-CEd84c-C.mjs.map

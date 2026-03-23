import _sfc_main$1 from './Banner-BuJz601-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
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
  name: "ProductBanner",
  data() {
    return {};
  },
  watch: {},
  props: {
    bannerData: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  components: {
    Banner: _sfc_main$1
  },
  computed: {
    banner2() {
      var _a;
      return (_a = this.bannerData) == null ? void 0 : _a.banner2;
    },
    banner3() {
      var _a;
      return (_a = this.bannerData) == null ? void 0 : _a.banner3;
    },
    banner4() {
      var _a;
      return (_a = this.bannerData) == null ? void 0 : _a.banner4;
    }
  },
  mixins: [],
  methods: {},
  created() {
  },
  async mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_banner = _sfc_main$1;
  if ($options.banner2 || $options.banner3 || $options.banner4) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-banner" }, _attrs))}>`);
    if ($options.banner2) {
      _push(ssrRenderComponent(_component_banner, { banner: $options.banner2 }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($options.banner3) {
      _push(ssrRenderComponent(_component_banner, { banner: $options.banner3 }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    if ($options.banner4) {
      _push(ssrRenderComponent(_component_banner, { banner: $options.banner4 }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=ProductBanner-BRHLAVOA.mjs.map

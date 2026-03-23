import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
  setup() {
    const commonStore = useCommonStore();
    const { setToastError } = commonStore;
    return { setToastError };
  },
  data() {
    return {
      qtyVal: 1
    };
  },
  props: {
    productInventory: {
      type: Object,
      default: () => {
        return {};
      }
    },
    quantity: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 1
    }
  },
  components: {},
  mixins: [],
  computed: {
    qtyComputed() {
      return this.qtyVal;
    }
  },
  methods: {
    qty(direction) {
      if (!Object.keys(this.productInventory).length) {
        this.setToastError(this.$t("detailRight.requiredAttributes"));
        return;
      }
      if (this.qtyVal + direction > this.max) {
        this.setToastError(this.$t("quantityNav.maximumExceeds"));
        return;
      }
      if (this.qtyVal + direction === 0) {
        this.setToastError(this.$t("quantityNav.min"));
        return;
      }
      this.qtyVal += direction;
      this.$emit("value-changed", { direction, value: this.qtyVal });
    }
  },
  activated() {
    this.qtyVal = this.quantity;
  },
  mounted() {
    this.qtyVal = this.quantity;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "quantity-area" }, _attrs))}><button aria-label="subtract"> - </button><span class="no-control">${ssrInterpolate($options.qtyComputed)}</span><button aria-label="add"> + </button></span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuantityNav.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=QuantityNav-BsBh_DF4.mjs.map

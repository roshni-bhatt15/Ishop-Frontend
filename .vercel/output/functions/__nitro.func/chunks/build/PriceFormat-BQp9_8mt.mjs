import { u as util } from './util-D0P5KPFP.mjs';
import { j as _export_sfc, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { computed, useSSRContext } from 'vue';
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
import 'vue-router';
import 'vue-dompurify-html';

const _sfc_main = {
  setup() {
    const commonStore = useCommonStore();
    const { currencyIcon, setting, currency } = storeToRefs(commonStore);
    const currencyPosition = computed(() => {
      return setting.value.currency_position;
    });
    return { currencyIcon, setting, currencyPosition, currency };
  },
  name: "PriceFormat",
  data() {
    return {};
  },
  props: {
    price: {
      default: 0,
      required: true
    }
  },
  mixins: [util],
  components: {},
  computed: {
    formattedPrice() {
      return this.priceFormat(this.currencyPosition, this.currencyIcon, this.price, this.setting);
    }
  },
  methods: {},
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(_attrs)}>${ssrInterpolate($options.formattedPrice)}</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PriceFormat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=PriceFormat-BQp9_8mt.mjs.map

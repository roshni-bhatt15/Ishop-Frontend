import _sfc_main$1 from './ProductTile-B00mx6gH.mjs';
import __nuxt_component_1 from './TileShimmer-CoHt9eD1.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
import './ImageLazy-C91HtcbD.mjs';
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
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';

const _sfc_main = {
  name: "SuggestedAjaxSlider",
  data() {
    return {
      sliderContainerWidth: 0
    };
  },
  watch: {},
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    currentPagination: {
      type: Number
    },
    totalPage: {
      type: Number
    },
    currentPage: {
      type: Number
    },
    draggedWidth: {
      type: Number
    }
  },
  components: {
    ProductTile: _sfc_main$1,
    TileShimmer: __nuxt_component_1
  },
  computed: {
    parentWidthStyle() {
      return {
        "flex-basis": `${this.totalPage * this.sliderContainerWidth}px`,
        "width": `${this.totalPage * this.sliderContainerWidth}px`,
        "max-width": `${this.totalPage * this.sliderContainerWidth}px`,
        "min-width": `${this.totalPage * this.sliderContainerWidth}px`
      };
    },
    translateXInPx() {
      return `translate3d(${((this.currentPage - 1) * this.sliderContainerWidth + this.draggedWidth) * -1}px, 0, 0)`;
    },
    itemWidthStyle() {
      return {
        "flex-basis": `${this.itemWidthInPx}px`,
        "width": `${this.itemWidthInPx}px`,
        "max-width": `${this.itemWidthInPx}px`,
        "min-width": `${this.itemWidthInPx}px`
      };
    },
    itemWidthInPx() {
      return this.sliderContainerWidth / this.currentPagination;
    }
  },
  mixins: [],
  methods: {},
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.sliderContainerWidth = this.$refs["main-slider"].clientWidth;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_tile = _sfc_main$1;
  const _component_tile_shimmer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "main-slider",
    class: "flow-hidden"
  }, _attrs))}><ul class="c_slider__container shimmer-wrapper" style="${ssrRenderStyle([$options.parentWidthStyle, { transform: $options.translateXInPx }])}"><!--[-->`);
  ssrRenderList($props.itemList, (value, index) => {
    _push(`<li style="${ssrRenderStyle([{ "max-width": "100px" }, $options.itemWidthStyle])}">`);
    if (value) {
      _push(ssrRenderComponent(_component_product_tile, {
        product: value,
        class: "mb-20 mb-sm-15"
      }, null, _parent));
    } else {
      _push(ssrRenderComponent(_component_tile_shimmer, null, null, _parent));
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuggestedAjaxSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=SuggestedAjaxSlider-0ofB_iEU.mjs.map

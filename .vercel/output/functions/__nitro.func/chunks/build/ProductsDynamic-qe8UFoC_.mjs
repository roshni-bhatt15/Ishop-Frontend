import __nuxt_component_0$1 from './SuggestedAjaxSlider-0ofB_iEU.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
import './ProductTile-B00mx6gH.mjs';
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
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
import './TileShimmer-CoHt9eD1.mjs';

const _sfc_main = {
  name: "ProductsDynamic",
  data() {
    return {
      currentPage: 1,
      draggedWidth: 0,
      pagination: [6, 4, 3, 2, 2]
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
    title: {
      type: String,
      default: ""
    },
    totalItem: {
      type: Number
    },
    perPage: {
      type: Number
    }
  },
  components: {
    SuggestedAjaxSlider: __nuxt_component_0$1
  },
  computed: {
    loadedPage() {
      const count = this.itemList.length;
      const rem = count % this.itemPerPage;
      return (count - rem) / this.itemPerPage;
    },
    totalPage() {
      if (this.currentPagination < this.totalItem) {
        const mod = this.totalItem % parseInt(this.currentPagination);
        return (this.totalItem - mod) / parseInt(this.currentPagination) + (mod > 0 ? 1 : 0);
      }
      return 1;
    },
    itemPerPage() {
      if ((void 0).innerWidth > 1200) return this.pagination[0];
      else if ((void 0).innerWidth > 992) return this.pagination[1];
      else if ((void 0).innerWidth >= 768) return this.pagination[2];
      else if ((void 0).innerWidth > 576) return this.pagination[3];
      else return this.pagination[4];
    },
    currentPagination() {
      return this.itemPerPage < this.perPage ? this.itemPerPage : this.perPage;
    }
  },
  mixins: [util],
  methods: {
    onDragging(deltaX) {
      this.draggedWidth = -1 * deltaX;
    },
    onDragEnd() {
      if (this.draggedWidth > 0) {
        this.change(1);
      } else if (this.draggedWidth < 0) {
        this.change(-1);
      }
    },
    change(data) {
      this.currentPage += data;
      if (this.currentPage < 1) {
        this.currentPage = this.totalPage;
      } else if (this.currentPage > this.totalPage) {
        this.currentPage = 1;
      }
      this.draggedWidth = 0;
      if (this.loadedPage < this.currentPage) {
        this.$emit("change", data);
      }
    }
  },
  created() {
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_suggested_ajax_slider = __nuxt_component_0$1;
  const _directive_drag = resolveDirective("drag");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex sided align-start"><h4 class="bold">${ssrInterpolate($props.title)}</h4><p class="mn-w-90x right-text">${ssrInterpolate(_ctx.$t("productDynamic.pageOf", { current: $data.currentPage, total: $options.totalPage }))}</p></div><div class="c_slider__wrapper"><div class="c_slider__nav"><button aria-label="submit" class="prev-btn clear-height"><i class="icon arrow-left black m-0"></i></button><button aria-label="submit" class="next-btn clear-height"><i class="icon arrow-right black m-0"></i></button></div>`);
  if (!_ctx.isMobile()) {
    _push(ssrRenderComponent(_component_suggested_ajax_slider, mergeProps({
      class: "touch-action",
      "item-list": $props.itemList,
      "current-pagination": $options.currentPagination,
      "total-page": $options.totalPage,
      "current-page": $data.currentPage,
      "dragged-width": $data.draggedWidth
    }, ssrGetDirectiveProps(_ctx, _directive_drag, { onDragging: $options.onDragging, onDragEnd: $options.onDragEnd })), null, _parent));
  } else {
    _push(ssrRenderComponent(_component_suggested_ajax_slider, mergeProps({
      class: "touch-action",
      "item-list": $props.itemList,
      "current-pagination": $options.currentPagination,
      "total-page": $options.totalPage,
      "current-page": $data.currentPage,
      "dragged-width": $data.draggedWidth
    }, ssrGetDirectiveProps(_ctx, _directive_drag, { onDragging: $options.onDragging, onDragEnd: $options.onDragEnd })), null, _parent));
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductsDynamic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ProductsDynamic-qe8UFoC_.mjs.map

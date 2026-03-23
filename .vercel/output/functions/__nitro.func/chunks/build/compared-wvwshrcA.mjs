import __nuxt_component_0 from './AccountLayout-CBcflmtQ.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import __nuxt_component_1$1 from './TileShimmer-CoHt9eD1.mjs';
import _sfc_main$1 from './ComparedTile-DVfVk_h_.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import { ref, computed, watch, mergeProps, withCtx, unref, createVNode, createBlock, Transition, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useCommonStore, d as useHead, u as useLanguageStore, i as useRoute, f as useUtils, p as prepareGetUrl } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './ProductTile-B00mx6gH.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './RatingStar-DUn_scU4.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './useCompareHelper-of9z6jwL.mjs';
import './usePriceHelper-DzuasYxT.mjs';
import './detail-CmpxRn50.mjs';
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
  __name: "compared",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { getRequest } = commonStore;
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const fetchingComparedData = ref(false);
    const allCompared = ref(null);
    const totalPage = computed(() => {
      var _a;
      return (_a = allCompared.value) == null ? void 0 : _a.last_page;
    });
    const currentCompared = computed(() => {
      var _a;
      return (_a = allCompared.value) == null ? void 0 : _a.data;
    });
    const removedSuccessfully = async () => {
      await fetchingData();
    };
    const comparedPagination = ref(null);
    const loadData = async () => {
      comparedPagination.value.routeParam();
    };
    const route = useRoute();
    const { getTimeZone } = useUtils();
    const fetchingData = async () => {
      fetchingComparedData.value = true;
      const data = await getRequest({
        params: `?${prepareGetUrl({
          time_zone: getTimeZone(),
          order_by: route.query.orderBy || "created_at",
          type: route.query.orderByType || "desc",
          page: route.query.page || 1,
          q: route.query.q || null
        })}`,
        api: "compareListAll",
        lang: langCode.value
      });
      if ((data == null ? void 0 : data.status) === 200) {
        allCompared.value = data.data;
      }
      fetchingComparedData.value = false;
    };
    watch(() => route.query, async () => {
      await fetchingData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_account_layout = __nuxt_component_0;
      const _component_spinner = __nuxt_component_1;
      const _component_tile_shimmer = __nuxt_component_1$1;
      const _component_compared_tile = _sfc_main$1;
      const _component_pagination = __nuxt_component_3;
      _push(ssrRenderComponent(_component_account_layout, mergeProps({
        "active-route": "compared",
        onClickedCompared: loadData,
        class: "flow-hidden"
      }, _attrs), {
        rightArea: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            if (unref(fetchingComparedData)) {
              _push2(`<div class="spinner-wrapper flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentCompared) && !unref(currentCompared).length) {
              _push2(`<div class="info-msg"${_scopeId}>${ssrInterpolate(_ctx.$t("compared.noData"))}</div>`);
            } else {
              _push2(`<div class="area"${_scopeId}><div class="area-content"${_scopeId}><div class="tile-container"${_scopeId}>`);
              if (unref(fetchingComparedData)) {
                _push2(`<div class="shimmer-wrapper pt-15"${_scopeId}><!--[-->`);
                ssrRenderList(8, (index) => {
                  _push2(ssrRenderComponent(_component_tile_shimmer, { key: index }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(unref(currentCompared), (value, index) => {
                  _push2(ssrRenderComponent(_component_compared_tile, {
                    key: index,
                    product: value.product,
                    onRemoved: removedSuccessfully
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }
              _push2(`</div></div></div>`);
            }
            _push2(ssrRenderComponent(_component_pagination, {
              class: "mt-20 mt-sm-15",
              ref_key: "comparedPagination",
              ref: comparedPagination,
              "total-page": unref(totalPage)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(fetchingComparedData) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "spinner-wrapper flex"
                  }, [
                    createVNode(_component_spinner, { radius: 100 })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              unref(currentCompared) && !unref(currentCompared).length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "info-msg"
              }, toDisplayString(_ctx.$t("compared.noData")), 1)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "area"
              }, [
                createVNode("div", { class: "area-content" }, [
                  createVNode("div", { class: "tile-container" }, [
                    unref(fetchingComparedData) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "shimmer-wrapper pt-15"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(8, (index) => {
                        return createVNode(_component_tile_shimmer, { key: index });
                      }), 64))
                    ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(currentCompared), (value, index) => {
                      return openBlock(), createBlock(_component_compared_tile, {
                        key: index,
                        product: value.product,
                        onRemoved: removedSuccessfully
                      }, null, 8, ["product"]);
                    }), 128))
                  ])
                ])
              ])),
              createVNode(_component_pagination, {
                class: "mt-20 mt-sm-15",
                ref_key: "comparedPagination",
                ref: comparedPagination,
                "total-page": unref(totalPage)
              }, null, 8, ["total-page"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/compared.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=compared-wvwshrcA.mjs.map

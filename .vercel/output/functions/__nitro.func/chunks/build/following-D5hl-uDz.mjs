import __nuxt_component_0 from './AccountLayout-CBcflmtQ.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import __nuxt_component_5 from './StoreTile-qfPzOBxa.mjs';
import _sfc_main$1 from './FollowBtn-DRaJlaSD.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import { ref, computed, watch, mergeProps, withCtx, unref, createVNode, createBlock, Transition, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useCommonStore, d as useHead, i as useRoute, f as useUtils, p as prepareGetUrl } from './server.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { storeToRefs } from 'pinia';
import 'moment';
import './util-D0P5KPFP.mjs';
import './AjaxButton-DzViXcHL.mjs';
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
  __name: "following",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { getRequest } = commonStore;
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const fetchingAjaxData = ref(false);
    const result = ref(null);
    const totalPage = computed(() => {
      var _a;
      return (_a = result.value) == null ? void 0 : _a.last_page;
    });
    const currentList = computed(() => {
      var _a;
      return (_a = result.value) == null ? void 0 : _a.data;
    });
    const removedSuccessfully = async () => {
      await fetchingData();
    };
    const followingPaginationRef = ref(null);
    const loadData = () => {
      followingPaginationRef.value.routeParam();
    };
    const route = useRoute();
    const { getTimeZone } = useUtils();
    const fetchingData = async () => {
      fetchingAjaxData.value = true;
      const data = await getRequest({
        params: `?${prepareGetUrl({
          time_zone: getTimeZone(),
          order_by: route.query.orderBy || "created_at",
          type: route.query.orderByType || "desc",
          page: route.query.page || 1,
          q: route.query.q || null
        })}`,
        api: "followingListAll"
      });
      if ((data == null ? void 0 : data.status) === 200) {
        result.value = data.data;
      }
      fetchingAjaxData.value = false;
    };
    watch(() => route.query, async () => {
      await fetchingData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_account_layout = __nuxt_component_0;
      const _component_spinner = __nuxt_component_1;
      const _component_store_tile = __nuxt_component_5;
      const _component_follow_btn = _sfc_main$1;
      const _component_pagination = __nuxt_component_3;
      _push(ssrRenderComponent(_component_account_layout, mergeProps({
        "active-route": "following",
        onClickedCompared: loadData,
        class: "flow-hidden"
      }, _attrs), {
        rightArea: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(``);
            if (unref(fetchingAjaxData)) {
              _push2(`<div class="spinner-wrapper flex"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(currentList) && !unref(currentList).length) {
              _push2(`<div class="info-msg"${_scopeId}>${ssrInterpolate(_ctx.$t("store.noData"))}</div>`);
            } else {
              _push2(`<div class="area"${_scopeId}><div class="area-content user-following"${_scopeId}><div class="tile-container"${_scopeId}><!--[-->`);
              ssrRenderList(unref(currentList), (value, index) => {
                _push2(ssrRenderComponent(_component_store_tile, {
                  key: `store-tile-${index}`,
                  store: value.store,
                  onRemoved: removedSuccessfully
                }, {
                  followBtn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_follow_btn, {
                        color: "primary",
                        class: "visit-btn",
                        following: true,
                        "store-id": value.store.id,
                        onChangeFollowing: removedSuccessfully
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_follow_btn, {
                          color: "primary",
                          class: "visit-btn",
                          following: true,
                          "store-id": value.store.id,
                          onChangeFollowing: removedSuccessfully
                        }, null, 8, ["store-id"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></div>`);
            }
            _push2(ssrRenderComponent(_component_pagination, {
              class: "mt-20 mt-sm-15",
              ref_key: "followingPaginationRef",
              ref: followingPaginationRef,
              "total-page": unref(totalPage)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  unref(fetchingAjaxData) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "spinner-wrapper flex"
                  }, [
                    createVNode(_component_spinner, { radius: 100 })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              unref(currentList) && !unref(currentList).length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "info-msg"
              }, toDisplayString(_ctx.$t("store.noData")), 1)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "area"
              }, [
                createVNode("div", { class: "area-content user-following" }, [
                  createVNode("div", { class: "tile-container" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(currentList), (value, index) => {
                      return openBlock(), createBlock(_component_store_tile, {
                        key: `store-tile-${index}`,
                        store: value.store,
                        onRemoved: removedSuccessfully
                      }, {
                        followBtn: withCtx(() => [
                          createVNode(_component_follow_btn, {
                            color: "primary",
                            class: "visit-btn",
                            following: true,
                            "store-id": value.store.id,
                            onChangeFollowing: removedSuccessfully
                          }, null, 8, ["store-id"])
                        ]),
                        _: 2
                      }, 1032, ["store"]);
                    }), 128))
                  ])
                ])
              ])),
              createVNode(_component_pagination, {
                class: "mt-20 mt-sm-15",
                ref_key: "followingPaginationRef",
                ref: followingPaginationRef,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/following.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=following-D5hl-uDz.mjs.map

import { toRefs, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, i as useRoute } from './server.mjs';
import { storeToRefs } from 'pinia';
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
  __name: "SocialShare",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const { product } = toRefs(props);
    const commonStore = useCommonStore();
    const { site_setting } = storeToRefs(commonStore);
    const route = useRoute();
    const currentURL = computed(() => {
      const baseUrl = (void 0).location.origin;
      return route ? baseUrl + route.path : baseUrl;
    });
    const metaTitle = computed(() => {
      var _a, _b;
      return ((_a = product.value) == null ? void 0 : _a.meta_title) || ((_b = site_setting.value) == null ? void 0 : _b.meta_title) || "";
    });
    const metaDescription = computed(() => {
      var _a, _b;
      return ((_a = product.value) == null ? void 0 : _a.meta_description) || ((_b = site_setting.value) == null ? void 0 : _b.meta_description) || "";
    });
    const productTags = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = product.value) == null ? void 0 : _a.tags) != null ? _a2 : "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_share_network = resolveComponent("share-network");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex start mt-15 mt-sm social-share gap-10" }, _attrs))}><span class="mr-10 color-lite hide-sm">${ssrInterpolate(_ctx.$t("socialShare.share"))}: </span>`);
      _push(ssrRenderComponent(_component_share_network, {
        network: "facebook",
        url: currentURL.value,
        title: metaTitle.value,
        description: metaDescription.value,
        quote: metaTitle.value,
        hashtags: productTags.value
      }, {
        default: withCtx(({ share }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cp flex gap-10"${_scopeId}><i class="icon facebook-icon"${_scopeId}></i><span class="hide block-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("socialShare.facebook"))}</span></div>`);
          } else {
            return [
              createVNode("div", {
                class: "cp flex gap-10",
                onClick: share
              }, [
                createVNode("i", { class: "icon facebook-icon" }),
                createVNode("span", { class: "hide block-sm" }, toDisplayString(_ctx.$t("socialShare.facebook")), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_share_network, {
        network: "twitter",
        url: currentURL.value,
        title: metaTitle.value,
        description: metaDescription.value,
        quote: metaTitle.value,
        hashtags: productTags.value
      }, {
        default: withCtx(({ share }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mlr-5 cp flex gap-10"${_scopeId}><i class="icon twitter-icon"${_scopeId}></i><span class="hide block-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("socialShare.twitter"))}</span></div>`);
          } else {
            return [
              createVNode("div", {
                class: "mlr-5 cp flex gap-10",
                onClick: share
              }, [
                createVNode("i", { class: "icon twitter-icon" }),
                createVNode("span", { class: "hide block-sm" }, toDisplayString(_ctx.$t("socialShare.twitter")), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_share_network, {
        network: "pinterest",
        url: currentURL.value,
        title: metaTitle.value,
        description: metaDescription.value,
        quote: metaTitle.value,
        hashtags: productTags.value
      }, {
        default: withCtx(({ share }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cp flex gap-10"${_scopeId}><i class="icon pinterest-icon"${_scopeId}></i><span class="hide block-sm"${_scopeId}>${ssrInterpolate(_ctx.$t("socialShare.pinterest"))}</span></div>`);
          } else {
            return [
              createVNode("div", {
                class: "cp flex gap-10",
                onClick: share
              }, [
                createVNode("i", { class: "icon pinterest-icon" }),
                createVNode("span", { class: "hide block-sm" }, toDisplayString(_ctx.$t("socialShare.pinterest")), 1)
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialShare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SocialShare-CVzFsphV.mjs.map

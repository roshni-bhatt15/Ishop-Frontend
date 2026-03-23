import __nuxt_component_0 from './Subscription-BKr6n7ic.mjs';
import __nuxt_component_1 from './FooterTreeNode-DEGfnUrz.mjs';
import { a as useCommonStore, f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import { unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import './AjaxButton-DzViXcHL.mjs';
import './Spinner-CfK0SFd4.mjs';
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
import './validation-Cjx0gTHd.mjs';
import './util-D0P5KPFP.mjs';

const _sfc_main = {
  __name: "CommonFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { site_setting, categories, services, about, payment, social, current_year } = storeToRefs(commonStore);
    const { getImageURL, pageLink } = useUtils();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_subscription = __nuxt_component_0;
      const _component_footer_tree_node = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_subscription, null, null, _parent));
      _push(`<footer class="link-hover"><div class="top-area section pb-0"><div class="container"><ul class="table-tree"><!--[-->`);
      ssrRenderList(unref(categories), (value) => {
        _push(ssrRenderComponent(_component_footer_tree_node, {
          node: value,
          key: value.id
        }, null, _parent));
      });
      _push(`<!--]--></ul><div class="ptb-15 mt-20 mt-sm-15 b-t center-text">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(getImageURL)(unref(site_setting).footer_logo))}${ssrRenderAttr("alt", _ctx.$t("footer.siteLogo"))} height="50" width="50"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(getImageURL)(unref(site_setting).footer_logo),
                alt: _ctx.$t("footer.siteLogo"),
                height: "50",
                width: "50"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bottom-area section pb-0"><div class="container"><div class="row"><div class="col-lg-3 col-md-6 mb-15"><h4 class="bold mb-15">${ssrInterpolate(_ctx.$t("footer.services"))}</h4><!--[-->`);
      ssrRenderList(unref(services), (item, i) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(pageLink)(item),
          key: i
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="col-lg-3 col-md-6 mb-15"><h4 class="bold mb-15">${ssrInterpolate(_ctx.$t("footer.about"))}</h4><!--[-->`);
      ssrRenderList(unref(about), (item, i) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(pageLink)(item),
          key: i
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="col-lg-3 col-md-6 payment mb-20 mb-sm-15"><h4 class="bold mb-15">${ssrInterpolate(_ctx.$t("footer.payment"))}</h4><div class="payment-icons"><!--[-->`);
      ssrRenderList(unref(payment), (item, i) => {
        _push(`<a${ssrRenderAttr("href", item.link)} target="_blank">`);
        _push(ssrRenderComponent(_component_ImageLazy, {
          "lazy-src": unref(getImageURL)(item.image),
          alt: item.title,
          title: item.title
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-3 col-md-6 mb-15 mb-xs"><h4 class="bold mb-15">${ssrInterpolate(_ctx.$t("footer.social"))}</h4><!--[-->`);
      ssrRenderList(unref(social), (item, i) => {
        _push(`<a${ssrRenderAttr("href", item.link)} target="_blank">`);
        _push(ssrRenderComponent(_component_ImageLazy, {
          "lazy-src": unref(getImageURL)(item.image),
          alt: item.title,
          title: item.title
        }, null, _parent));
        _push(` ${ssrInterpolate(item.title)}</a>`);
      });
      _push(`<!--]--></div></div><p class="ptb-15 mt-10 b-t center-text"> \xA9 ${ssrInterpolate(unref(current_year))} - ${ssrInterpolate(unref(site_setting).copyright_text)}</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommonFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CommonFooter-BicVHNBP.mjs.map

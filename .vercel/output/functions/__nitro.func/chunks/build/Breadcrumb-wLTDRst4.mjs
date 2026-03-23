import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  name: "Breadcrumb",
  data() {
    return {};
  },
  props: {
    page: {
      type: String,
      required: true
    },
    slugs: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "breadcrumb" }, _attrs))}><ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    itemprop: "item"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span itemprop="name"${_scopeId}>${ssrInterpolate(_ctx.$t("product.home"))}</span>`);
      } else {
        return [
          createVNode("span", { itemprop: "name" }, toDisplayString(_ctx.$t("product.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<meta itemprop="position" content="1"></li><!--[-->`);
  ssrRenderList($props.slugs, (value, i) => {
    _push(`<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      title: value.title,
      to: value.link,
      itemprop: "item"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span itemprop="name"${_scopeId}>${ssrInterpolate(value.title)}</span>`);
        } else {
          return [
            createVNode("span", { itemprop: "name" }, toDisplayString(value.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<meta itemprop="position"${ssrRenderAttr("content", i + 2)}></li>`);
  });
  _push(`<!--]--><li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="item"><span itemprop="name">${ssrInterpolate($props.page)}</span></span><meta itemprop="position"${ssrRenderAttr("content", $props.slugs.length + 2)}></li></ol></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Breadcrumb-wLTDRst4.mjs.map

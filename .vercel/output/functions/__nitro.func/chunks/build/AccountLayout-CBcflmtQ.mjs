import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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
  name: "AccountLayout",
  data() {
    return {};
  },
  mixins: [],
  watch: {},
  props: {
    activeRoute: {
      type: String
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    goingNext(url) {
      const clicked = url.split("/");
      this.$emit(`clicked-${clicked[clicked.length - 1]}`);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid mtb-20 mtb-sm-15" }, _attrs))}><div class="order-wrapper"><ul class="left-sidebar"><li class="${ssrRenderClass({ active: $props.activeRoute === "profile" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/profile",
    onClick: ($event) => $options.goingNext("/user/profile")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.myProfile"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.myProfile")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "addresses" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/addresses",
    onClick: ($event) => $options.goingNext("/user/addresses")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.myAddressBook"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.myAddressBook")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "vouchers" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/vouchers",
    onClick: ($event) => $options.goingNext("/user/vouchers")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.vouchers"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.vouchers")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "orders" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/orders",
    onClick: ($event) => $options.goingNext("/user/orders")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.myOrders"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.myOrders")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "following" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/following",
    onClick: ($event) => $options.goingNext("/user/following")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("store.followingStores"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("store.followingStores")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "wishlists" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/wishlists",
    onClick: ($event) => $options.goingNext("/user/wishlists")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.myWishlist"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.myWishlist")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass({ active: $props.activeRoute === "compared" })}">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/user/compared",
    onClick: ($event) => $options.goingNext("/user/compared")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("accountLayout.comparedList"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("accountLayout.comparedList")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul><div class="right-area grow pos-rel">`);
  ssrRenderSlot(_ctx.$slots, "rightArea", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccountLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=AccountLayout-CBcflmtQ.mjs.map

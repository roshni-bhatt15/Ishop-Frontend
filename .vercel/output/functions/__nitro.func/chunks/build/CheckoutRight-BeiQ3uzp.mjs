import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { p as productHelper, a as productPriceHelper } from './productPriceHelper-BjqO3bPN.mjs';
import { j as _export_sfc, c as useI18n, a as useCommonStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
import './Spinner-CfK0SFd4.mjs';

const _sfc_main = {
  setup(props) {
    const { t } = useI18n();
    const btnText = props.btnText || t("checkoutRight.proceedToCheckout");
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    return { currencyIcon, setting, btnText };
  },
  name: "CheckoutRight",
  data() {
    return {
      voucher: ""
    };
  },
  watch: {},
  props: {
    checkedProduct: {
      type: Array
    },
    hasShipping: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    submitting: {
      type: Boolean,
      default: false
    },
    hideBtn: {
      type: Boolean,
      default: false
    },
    voucherResult: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  components: {
    PriceFormat: __nuxt_component_2,
    AjaxButton: _sfc_main$1
  },
  computed: {
    isFreeShipping() {
      var _a;
      return !(parseFloat((_a = this.cartPrice) == null ? void 0 : _a.shippingPrice) > 0);
    },
    totalPrice() {
      return this.cartPrice.totalPriceWithOffer + this.cartPrice.shippingPrice - this.cartPrice.voucher + this.cartPrice.tax;
    },
    voucherDiscount() {
      var _a2;
      var _a;
      return (_a2 = (_a = this.voucherResult) == null ? void 0 : _a.offered) != null ? _a2 : 0;
    },
    discountedPrice() {
      return this.cartPrice.priceBeforeOffer - this.cartPrice.totalPriceWithOffer + parseFloat(this.voucherDiscount);
    },
    cartPrice() {
      var _a;
      let cp = {
        priceBeforeOffer: 0,
        totalItems: 0,
        totalPriceWithOffer: 0,
        totalPrice: 0,
        tax: 0,
        shippingPrice: 0,
        voucher: 0
      };
      let shippingId = [];
      this.checkedProduct.forEach((curr) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        const currentShippingId = (_b = (_a2 = curr == null ? void 0 : curr.shipping_place) == null ? void 0 : _a2.shipping_rule) == null ? void 0 : _b.id;
        const shippingIdExists = shippingId[currentShippingId];
        if (!((_d = (_c = curr == null ? void 0 : curr.shipping_place) == null ? void 0 : _c.shipping_rule) == null ? void 0 : _d.single_price) || ((_f = (_e = curr == null ? void 0 : curr.shipping_place) == null ? void 0 : _e.shipping_rule) == null ? void 0 : _f.single_price) && !shippingIdExists) {
          if (parseInt(curr.shipping_type) === 1 && this.hasShipping) {
            cp.shippingPrice += parseInt(((_g = curr == null ? void 0 : curr.shipping_place) == null ? void 0 : _g.price) || 0);
          } else if (parseInt(curr.shipping_type) === 2 && this.hasShipping) {
            cp.shippingPrice += parseInt(((_h = curr == null ? void 0 : curr.shipping_place) == null ? void 0 : _h.pickup_price) || 0);
          }
          shippingId[currentShippingId] = curr.shipping_type;
        }
        const qty = parseInt((curr == null ? void 0 : curr.quantity) || 0);
        const bundleDeal = (_i = curr == null ? void 0 : curr.flash_product) == null ? void 0 : _i.bundle_deal;
        cp.totalItems += qty;
        const currentInventoryPrice = this.currentInventoryPriceCalc(curr == null ? void 0 : curr.updated_inventory, curr == null ? void 0 : curr.flash_product);
        const bundleOffer = (bundleDeal == null ? void 0 : bundleDeal.buy) <= qty ? currentInventoryPrice * parseInt((bundleDeal == null ? void 0 : bundleDeal.free) || 0) : 0;
        cp.totalPriceWithOffer += qty * currentInventoryPrice - bundleOffer;
        const taxRule = (_j = curr == null ? void 0 : curr.flash_product) == null ? void 0 : _j.tax_rules;
        cp.tax += qty * this.priceByType(currentInventoryPrice, (taxRule == null ? void 0 : taxRule.price) || 0, taxRule == null ? void 0 : taxRule.type);
        cp.totalPrice += qty * currentInventoryPrice;
        cp.priceBeforeOffer += this.sellPriceCalc(curr == null ? void 0 : curr.flash_product) * qty;
      });
      cp.voucher = ((_a = this.voucherResult) == null ? void 0 : _a.offered) || 0;
      this.$emit("calculated-price", cp);
      return cp;
    }
  },
  mixins: [util, productHelper, productPriceHelper]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_price_format = __nuxt_component_2;
  const _component_ajax_button = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-right" }, _attrs))}><div class="area pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15"><h5 class="bold b-b pb-10 mb-15">${ssrInterpolate(_ctx.$t("filter.ckout"))}</h5><div class="flex sided mb-15"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("checkoutRight.subtotalItems", { itemCount: $options.cartPrice.totalItems }))}</h5><h5 class="price">`);
  _push(ssrRenderComponent(_component_price_format, {
    price: _ctx.formatPrice($options.cartPrice.totalPrice)
  }, null, _parent));
  _push(`</h5></div>`);
  if ($options.cartPrice.totalPrice !== $options.cartPrice.totalPriceWithOffer) {
    _push(`<div class="flex sided pb-10"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("cartProductTile.bundleOffer"))}</h5><h5 class="price">`);
    _push(ssrRenderComponent(_component_price_format, {
      price: _ctx.formatPrice($options.cartPrice.totalPrice - $options.cartPrice.totalPriceWithOffer)
    }, null, _parent));
    _push(`</h5></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.hasShipping) {
    _push(`<div class="flex sided pb-10"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("checkoutRight.shipping"))}</h5><h5 class="price">`);
    if ($options.isFreeShipping) {
      _push(`<span class="color-free">${ssrInterpolate(_ctx.$t("invent.fre"))}</span>`);
    } else {
      _push(ssrRenderComponent(_component_price_format, {
        price: _ctx.formatPrice($options.cartPrice.shippingPrice)
      }, null, _parent));
    }
    _push(`</h5></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.voucherResult) {
    _push(`<div class="flex sided pb-10"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("checkoutRight.voucher"))}</h5><h5 class="price">`);
    _push(ssrRenderComponent(_component_price_format, {
      price: _ctx.formatPrice($props.voucherResult.offered)
    }, null, _parent));
    _push(`</h5></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.cartPrice.tax) {
    _push(`<div class="flex sided mb-10"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("cart.tax"))}</h5><h5 class="price">`);
    _push(ssrRenderComponent(_component_price_format, {
      price: _ctx.formatPrice($options.cartPrice.tax)
    }, null, _parent));
    _push(`</h5></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex sided mb-20 mb-sm-15 b-t pt-10"><h5 class="fw-400">${ssrInterpolate(_ctx.$t("checkoutRight.total"))}</h5><h4 class="price">`);
  _push(ssrRenderComponent(_component_price_format, {
    price: _ctx.formatPrice($options.totalPrice)
  }, null, _parent));
  _push(`</h4></div>`);
  if (!$props.hideBtn) {
    _push(ssrRenderComponent(_component_ajax_button, {
      class: "primary-btn w-100",
      type: "button",
      "fetching-data": $props.submitting,
      "loading-text": "",
      disabled: $props.disabled,
      text: $setup.btnText,
      onClicked: ($event) => _ctx.$emit("go-next")
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "checkout", {}, null, _push, _parent);
  if ($options.discountedPrice > 0) {
    _push(`<div class="discounted-price success-msg mt-20"><span class="">${ssrInterpolate(_ctx.$t("date.ttl"))}</span><h4 class="price">`);
    _push(ssrRenderComponent(_component_price_format, {
      price: _ctx.formatPrice($options.discountedPrice)
    }, null, _parent));
    _push(`</h4></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckoutRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_6 as default };
//# sourceMappingURL=CheckoutRight-BeiQ3uzp.mjs.map

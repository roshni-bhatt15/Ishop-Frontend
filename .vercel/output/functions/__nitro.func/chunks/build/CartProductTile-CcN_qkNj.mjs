import { a as useCommonStore, f as useUtils, g as useConstants, c as useI18n, h as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$1 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_2 from './PriceFormat-BQp9_8mt.mjs';
import __nuxt_component_3 from './QuantityNav-BsBh_DF4.mjs';
import _sfc_main$2 from './AjaxButton-DzViXcHL.mjs';
import { toRefs, ref, watch, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrLooseEqual } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useDetailStore } from './detail-CmpxRn50.mjs';
import { u as useProductHelper } from './useProductHelper-D_nJapxP.mjs';
import { u as usePriceHelper } from './usePriceHelper-DzuasYxT.mjs';
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
import './util-D0P5KPFP.mjs';
import './Spinner-CfK0SFd4.mjs';

const _sfc_main = {
  __name: "CartProductTile",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: Array
    },
    cart: {
      type: Object
    },
    isShipping: {
      type: Boolean,
      default: false
    },
    cartShipping: {
      type: Object,
      default() {
        return null;
      }
    },
    error: {
      type: Array,
      default() {
        return [];
      }
    },
    currentAddresses: {
      type: Array,
      default() {
        return [];
      }
    },
    address: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  emits: ["current-shipping", "shipping-changed", "deleting", "quantity"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { checked, cart, cartShipping, address } = toRefs(props);
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { currencyIcon, setting } = storeToRefs(commonStore);
    const detailStore = useDetailStore();
    const { setProduct } = detailStore;
    const goToProduct = (product2) => {
      setProduct(product2);
    };
    const cbChecked = ref(checked.value);
    watch(checked, (value) => {
      cbChecked.value = value;
    });
    const isFreePickup = computed(() => {
      var _a;
      return !(parseFloat((_a = currentShipRule.value) == null ? void 0 : _a.pickup_price) > 0);
    });
    const isFreeShipping = computed(() => {
      var _a;
      return !(parseFloat((_a = currentShipRule.value) == null ? void 0 : _a.price) > 0);
    });
    const isSingleShipping = computed(() => {
      var _a, _b;
      return (_b = cartShipping.value[(_a = cart.value) == null ? void 0 : _a.id]) == null ? void 0 : _b.single_shipping;
    });
    const hasBundleDeal = computed(() => {
      var _a;
      return productQuantity.value >= ((_a = bundleDeal.value) == null ? void 0 : _a.buy);
    });
    const bundleDeal = computed(() => {
      var _a;
      return (_a = product.value) == null ? void 0 : _a.bundle_deal;
    });
    const cartId = computed(() => {
      var _a;
      return (_a = cart.value) == null ? void 0 : _a.id;
    });
    const product = computed(() => {
      var _a;
      return (_a = cart.value) == null ? void 0 : _a.flash_product;
    });
    const productInventory = computed(() => {
      var _a;
      return (_a = cart.value) == null ? void 0 : _a.updated_inventory;
    });
    const currentShipRule = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      let matched = null;
      if (address.value) {
        (_b = (_a = product.value) == null ? void 0 : _a.shipping_rule) == null ? void 0 : _b.shipping_places.forEach((obj) => {
          if (obj.country === address.value.country) {
            if (obj.state === address.value.state) {
              matched = obj;
              return;
            } else if (obj.state === "ALL") {
              matched = obj;
            }
          } else if (obj.country === "ALL") {
            if (!matched) {
              matched = obj;
            }
          }
        });
      }
      if (matched && !(matched == null ? void 0 : matched.shipping_rule)) {
        matched = { ...matched, ...{ shipping_rule: (_c = product.value) == null ? void 0 : _c.shipping_rule } };
      }
      if (matched && cartShipping.value[(_d = cart.value) == null ? void 0 : _d.id]) {
        cartShipping.value[(_e = cart.value) == null ? void 0 : _e.id].shipping_place = matched;
        updateCartShipping();
      }
      emit("current-shipping", { cart: (_f = cart.value) == null ? void 0 : _f.id, shipping: matched });
      return matched;
    });
    const { getProductImage } = useProductHelper();
    const { productLink, getThumbImageURL } = useUtils();
    const { shippingTypeIn } = useConstants();
    const productImage = computed(() => {
      return getProductImage(product.value, inventoryAttributes.value);
    });
    const inventoryAttributes = computed(() => {
      var _a;
      return (_a = productInventory.value) == null ? void 0 : _a.inventory_attributes;
    });
    const { productPrice, prevPrice, reducedPercent } = usePriceHelper({ product, productInventory });
    const currentAttr = computed(() => {
      var _a;
      return (_a = inventoryAttributes.value) == null ? void 0 : _a.map((i) => {
        var _a2, _b, _c;
        return [(_b = (_a2 = i == null ? void 0 : i.attribute_value) == null ? void 0 : _a2.attribute) == null ? void 0 : _b.title, (_c = i == null ? void 0 : i.attribute_value) == null ? void 0 : _c.title];
      });
    });
    const title = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.title) || "";
    });
    const maxQuantity = computed(() => {
      var _a;
      return parseInt((_a = productInventory.value) == null ? void 0 : _a.quantity);
    });
    const productQuantity = computed(() => {
      var _a;
      return parseInt((_a = cart.value) == null ? void 0 : _a.quantity);
    });
    const { t } = useI18n();
    const noShipMessage = computed(() => {
      var _a, _b, _c;
      const state = ((_a = address.value) == null ? void 0 : _a.stateTitle) ? `${(_b = address.value) == null ? void 0 : _b.stateTitle},` : "";
      return t("cartProductTile.noShipMessage", { state, country: (_c = address.value) == null ? void 0 : _c.countryTitle });
    });
    const updateCartShipping = () => {
      emit("shipping-changed", cartShipping.value);
    };
    const deleting = async () => {
      if (confirm(t("cartProductTile.deleteAlert"))) {
        emit("deleting", { id: cartId.value, isBundle: !!bundleDeal.value, user_token: await getUserToken() });
      }
    };
    const valueChanged = (evt) => {
      emit(
        "quantity",
        {
          bundleDeal: bundleDeal.value,
          product: product.value,
          inventory: productInventory.value,
          direction: evt.direction
        }
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_ImageLazy = _sfc_main$1;
      const _component_price_format = __nuxt_component_2;
      const _component_quantity_nav = __nuxt_component_3;
      const _component_ajax_button = _sfc_main$2;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "gap-20 flex sided align-start b-b pb-20 pt-10 mb-10 cart-product-tile" }, _attrs))}><div class="flex gap-15"><label class="cb-container"><input type="checkbox"${ssrRenderAttr("value", unref(cartId))}${ssrIncludeBooleanAttr(Array.isArray(unref(cbChecked)) ? ssrLooseContain(unref(cbChecked), unref(cartId)) : unref(cbChecked)) ? " checked" : ""} class="cp"><span class="checkmark"></span></label>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "w-100x img-wrapper",
          to: unref(productLink)(unref(product)),
          title: unref(title),
          onClick: ($event) => goToProduct(unref(product))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ImageLazy, {
                "lazy-src": unref(getThumbImageURL)(unref(productImage)),
                title: unref(title),
                alt: unref(title)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ImageLazy, {
                  "lazy-src": unref(getThumbImageURL)(unref(productImage)),
                  title: unref(title),
                  alt: unref(title)
                }, null, 8, ["lazy-src", "title", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="content-wrap flex align-start grow block-sm gap-15"><div class="grow"><div><h5 class="semi-bold mb-5">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "ellipsis-1",
          to: unref(productLink)(unref(product)),
          title: unref(title),
          onClick: ($event) => goToProduct(unref(product))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(title))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(title)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h5><h6 class="color-lite mb-15 mt-10"><!--[-->`);
        ssrRenderList(unref(currentAttr), (i) => {
          _push(`<span class="mr-15"><b class="mr-5">${ssrInterpolate(i[0])}</b> : ${ssrInterpolate(i[1])}</span>`);
        });
        _push(`<!--]-->`);
        if (unref(hasBundleDeal)) {
          _push(`<span class="ellipsis-1 mr-10"><span class="bold mr-5">${ssrInterpolate(_ctx.$t("cartProductTile.bundleOffer"))}: </span> ${ssrInterpolate(unref(bundleDeal).title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(prevPrice)) {
          _push(`<span>`);
          _push(ssrRenderComponent(_component_price_format, {
            class: "color-reduced strike-through",
            price: unref(prevPrice)
          }, null, _parent));
          _push(`<span class="bold color-offer">${ssrInterpolate(_ctx.$t("date.offer", { amount: unref(reducedPercent) }))}</span></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h6></div>`);
        if (__props.isShipping && __props.currentAddresses.length && unref(isSingleShipping)) {
          _push(`<form>`);
          if (!unref(currentShipRule)) {
            _push(`<p class="error">${ssrInterpolate(unref(noShipMessage))}</p>`);
          } else if (__props.error && __props.error.length) {
            _push(`<p class="error"><!--[-->`);
            ssrRenderList(__props.error, (e) => {
              _push(`<span class="block">${ssrInterpolate(e)}</span>`);
            });
            _push(`<!--]--></p>`);
          } else if (unref(cartShipping)[unref(cart).id]) {
            _push(`<div><label class="mr-15 cp rd-container color-lite"><input class="mt-5 cp" type="radio"${ssrRenderAttr("value", unref(shippingTypeIn).location)}${ssrRenderAttr("name", `shipping_${unref(cartId)}_type`)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(cartShipping)[unref(cartId)].shipping_type, unref(shippingTypeIn).location)) ? " checked" : ""}><span class="rd-checkmark"></span> ${ssrInterpolate(_ctx.$t("cartProductTile.fromLocation"))} (`);
            if (unref(isFreeShipping)) {
              _push(`<span class="color-free">${ssrInterpolate(_ctx.$t("invent.fre"))}</span>`);
            } else {
              _push(ssrRenderComponent(_component_price_format, {
                price: unref(currentShipRule).price
              }, null, _parent));
            }
            _push(` ) </label>`);
            if (parseInt(unref(currentShipRule).pickup_point) === 1) {
              _push(`<label class="mr-15 cp rd-container color-lite"><input class="mt-5 cp" type="radio"${ssrRenderAttr("value", unref(shippingTypeIn).pickup)}${ssrRenderAttr("name", `shipping_${unref(cartId)}_type`)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(cartShipping)[unref(cartId)].shipping_type, unref(shippingTypeIn).pickup)) ? " checked" : ""}><span class="rd-checkmark"></span> ${ssrInterpolate(_ctx.$t("cartProductTile.fromPickupPlace"))} (`);
              if (unref(isFreePickup)) {
                _push(`<span class="color-free">${ssrInterpolate(_ctx.$t("invent.fre"))}</span>`);
              } else {
                _push(ssrRenderComponent(_component_price_format, {
                  price: unref(currentShipRule).pickup_price
                }, null, _parent));
              }
              _push(` ) </label>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</form>`);
        } else {
          _push(`<!---->`);
        }
        if (!__props.isShipping) {
          _push(`<div class="flex gap-10 start wrap mt-10">`);
          _push(ssrRenderComponent(_component_quantity_nav, {
            class: "mtb-5",
            quantity: parseInt(unref(productQuantity)),
            "product-inventory": unref(cart).updated_inventory,
            max: unref(maxQuantity),
            onValueChanged: valueChanged
          }, null, _parent));
          _push(ssrRenderComponent(_component_ajax_button, {
            class: "outline-btn plr-20 mtb-5",
            type: "button",
            text: _ctx.$t("userAddress.delete"),
            color: "primary",
            onClicked: deleting
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-sm-10 mn-w-90x right-text"><h5 class="price inl-b-sm">`);
        _push(ssrRenderComponent(_component_price_format, { price: unref(productPrice) }, null, _parent));
        _push(`</h5><p class="inl-b-sm">x ${ssrInterpolate(unref(productQuantity))}</p>`);
        if (unref(hasBundleDeal)) {
          _push(`<p class="inl-b-sm">(-) x ${ssrInterpolate(unref(bundleDeal).free)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartProductTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CartProductTile-CcN_qkNj.mjs.map

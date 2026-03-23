import __nuxt_component_1 from './PaymentGateways-DcJBOKM7.mjs';
import __nuxt_component_6 from './CheckoutRight-BeiQ3uzp.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { ref, watch, computed, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, withDirectives, isRef, vModelText, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useLanguageStore, a as useCommonStore, c as useI18n, d as useHead, b as useAuthStore, g as useConstants } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import './StripePayment-Y640db4U.mjs';
import './PopOver-CEd84c-C.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './paymentHelper-DD2LjzWi.mjs';
import './RazorpayPayment-CqxnzU4N.mjs';
import './Spinner-CfK0SFd4.mjs';
import './IyzicoPayment-CDjyEdX6.mjs';
import './FlutterwavePayBtn-Co9vVLle.mjs';
import './productPriceHelper-BjqO3bPN.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { currencyIcon, setting, currency, paymentGateway, customScripts, site_setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, deleteRequest, getRequest, setPaymentGateway, postRequest } = commonStore;
    const cartStoreStore = useCartStore();
    const { cartProducts } = storeToRefs(cartStoreStore);
    const { getCartByUser, subtractCartProductCount, emptyCartProduct } = cartStoreStore;
    const userStore = useUserStore();
    const { userAddressAll, getUserToken } = userStore;
    const { t } = useI18n();
    const { pageMeta, preloadScript } = useMetaData();
    let paymentMeta = "";
    const getPaymentMeta = ({ paypal_key }) => {
      return {
        link: [
          preloadScript(`https://www.paypal.com/sdk/js?client-id=${paypal_key}&components=buttons,marks&disable-funding=paylater,card`),
          preloadScript("https://checkout.flutterwave.com/v3.js")
        ]
      };
    };
    if (paymentGateway.value) {
      paymentMeta = getPaymentMeta(paymentGateway.value);
    }
    useHead({
      ...pageMeta({
        ...site_setting.value,
        ...{ meta_title: `${t("header.checkout")} | ${site_setting.value.meta_title}` }
      }),
      ...paymentMeta
    });
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    ref(false);
    const voucher = ref("");
    const voucherError = ref(null);
    const voucherResult = ref(null);
    const submitting = ref(false);
    ref(false);
    const cartPrice = ref(0);
    ref(0);
    watch(voucher, () => {
      voucherResult.value = null;
      voucherError.value = null;
    });
    useConstants();
    const productPrice = computed(() => {
      return cartPrice.value.totalPriceWithOffer + cartPrice.value.shippingPrice + cartPrice.value.tax;
    });
    const totalPrice = computed(() => {
      if (productPrice.value) {
        return productPrice.value - cartPrice.value.voucher;
      }
      return 0;
    });
    const checkedProduct = computed(() => {
      return cartProducts.value.filter((obj) => {
        return parseInt(obj.selected) === 1;
      });
    });
    const checkVoucher = async () => {
      var _a;
      submitting.value = true;
      const res = await postRequest({
        params: {
          voucher: voucher.value,
          user_token: await getUserToken(),
          price: (_a = cartPrice.value) == null ? void 0 : _a.totalPriceWithOffer
        },
        lang: langCode.value,
        api: "voucherValidity"
      });
      submitting.value = false;
      if ((res == null ? void 0 : res.status) === 201) {
        voucherError.value = res.data.form[0];
      } else {
        voucherResult.value = res.data;
      }
    };
    const calculatedPrice = (evt) => {
      cartPrice.value = evt;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_payment_gateways = __nuxt_component_1;
      const _component_checkout_right = __nuxt_component_6;
      const _component_ajax_button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid mtb-20 mtb-sm-15" }, _attrs))}><div class="product-detail checkout-detail"><div class="area detail-left pt-10 plr-20 plr-sm-15 pb-20 pb-sm-15 mr-20 mr-sm mb-sm-15"><h5 class="b-b pb-10 mb-15 bold">${ssrInterpolate(_ctx.$t("checkout.selectPayment"))}</h5>`);
      if (unref(paymentGateway) && unref(totalPrice)) {
        _push(ssrRenderComponent(_component_payment_gateways, {
          ref: "paymentGateways",
          "total-price": unref(totalPrice),
          voucher: unref(voucherResult)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_checkout_right, {
        "route-link": "checkout",
        "checked-product": unref(checkedProduct),
        "has-shipping": true,
        "voucher-result": unref(voucherResult),
        "hide-btn": true,
        onCalculatedPrice: calculatedPrice
      }, {
        checkout: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass({ invalid: !!unref(voucherError) })}"${_scopeId}><form class="mt-15 btn-input"${_scopeId}><input class="pl-15 pr-80"${ssrRenderAttr("placeholder", _ctx.$t("checkout.voucherCode"))} type="text"${ssrRenderAttr("value", unref(voucher))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ajax_button, {
              class: "primary-btn plr-15",
              type: "button",
              "fetching-data": unref(submitting),
              "loading-text": "",
              disabled: !unref(voucher) || !!unref(voucherError) || !!unref(voucherResult),
              text: _ctx.$t("checkout.apply"),
              onClicked: checkVoucher
            }, null, _parent2, _scopeId));
            _push2(`</form></div>`);
            if (unref(voucherError)) {
              _push2(`<span class="error"${_scopeId}>${ssrInterpolate(unref(voucherError))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: { invalid: !!unref(voucherError) }
              }, [
                createVNode("form", { class: "mt-15 btn-input" }, [
                  withDirectives(createVNode("input", {
                    class: "pl-15 pr-80",
                    placeholder: _ctx.$t("checkout.voucherCode"),
                    type: "text",
                    "onUpdate:modelValue": ($event) => isRef(voucher) ? voucher.value = $event : null
                  }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, unref(voucher)]
                  ]),
                  createVNode(_component_ajax_button, {
                    class: "primary-btn plr-15",
                    type: "button",
                    "fetching-data": unref(submitting),
                    "loading-text": "",
                    disabled: !unref(voucher) || !!unref(voucherError) || !!unref(voucherResult),
                    text: _ctx.$t("checkout.apply"),
                    onClicked: checkVoucher
                  }, null, 8, ["fetching-data", "disabled", "text"])
                ])
              ], 2),
              unref(voucherError) ? (openBlock(), createBlock("span", {
                key: 0,
                class: "error"
              }, toDisplayString(unref(voucherError)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-ZfR99rSZ.mjs.map

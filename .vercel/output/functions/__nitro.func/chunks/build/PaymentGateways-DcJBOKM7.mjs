import StripePayment from './StripePayment-Y640db4U.mjs';
import RazorpayPayment from './RazorpayPayment-CqxnzU4N.mjs';
import __nuxt_component_1$1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_4 from './IyzicoPayment-CDjyEdX6.mjs';
import __nuxt_component_5 from './FlutterwavePayBtn-Co9vVLle.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { p as productHelper, a as productPriceHelper } from './productPriceHelper-BjqO3bPN.mjs';
import { p as paymentHelper } from './paymentHelper-DD2LjzWi.mjs';
import { j as _export_sfc, p as prepareGetUrl, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import './PopOver-CEd84c-C.mjs';
import './PriceFormat-BQp9_8mt.mjs';
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
  setup() {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { currencyIcon, setting, currency, paymentGateway, site_setting } = storeToRefs(commonStore);
    const { setToastMessage, setToastError, postRequest, getRequest, bgGetRequest } = commonStore;
    const currencyPosition = computed(() => {
      return setting.value.currency_position;
    });
    const cartStoreStore = useCartStore();
    const { cartProducts } = storeToRefs(cartStoreStore);
    const { getCartByUser, subtractCartProductCount, emptyCartProduct } = cartStoreStore;
    return {
      getUserToken,
      profile,
      currencyPosition,
      cartProducts,
      langCode,
      postRequest,
      getRequest,
      currency,
      paymentGateway,
      site_setting,
      bgGetRequest,
      currencyIcon,
      setting,
      setToastMessage,
      setToastError,
      getCartByUser,
      subtractCartProductCount,
      emptyCartProduct
    };
  },
  middleware: ["auth"],
  data() {
    return {
      loading: false,
      payFastLoader: false,
      payFastData: null,
      flutterwaveLoaded: false,
      paypaLoaded: false,
      showRazorpay: false,
      showStripe: false,
      paymentType: 1,
      orderData: null,
      orderError: null,
      submitting: false,
      placingOrder: false,
      checkedProductQty: 0
    };
  },
  props: {
    voucher: {
      type: Object,
      default() {
        return null;
      }
    },
    order: {
      type: Object,
      default() {
        return null;
      }
    },
    page: {
      type: String,
      default: "checkout"
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  watch: {
    payFastForm() {
      this.$nextTick(() => {
        var _a, _b;
        (_b = (_a = this.$refs.payFastContainer) == null ? void 0 : _a.querySelector("#frmPayment")) == null ? void 0 : _b.submit();
      });
    }
  },
  components: {
    IyzicoPayment: __nuxt_component_4,
    FlutterwavePayBtn: __nuxt_component_5,
    AjaxButton: _sfc_main$1,
    Spinner: __nuxt_component_1$1,
    RazorpayPayment,
    StripePayment
  },
  mixins: [util, productHelper, paymentHelper, productPriceHelper],
  computed: {
    payFastForm() {
      var _a;
      return (_a = this.payFastData) == null ? void 0 : _a.payfast;
    },
    orderMethod() {
      var _a;
      return (_a = this.order) == null ? void 0 : _a.order_method;
    },
    paymentBtnText() {
      return this.$t("checkout.confirmOrderAnd", { amount: this.formattedPrice });
    },
    formattedPrice() {
      return this.priceFormat(this.currencyPosition, this.currencyIcon, this.totalPrice, this.setting);
    },
    voucherResult() {
      return this.voucher;
    },
    isCheckout() {
      return this.page === "checkout";
    },
    userEmail() {
      var _a, _b;
      return ((_a = this.orderData) == null ? void 0 : _a.email) || ((_b = this.profile) == null ? void 0 : _b.email);
    },
    headerLogo() {
      return this.imageURL({ "image": this.site_setting.header_logo });
    },
    siteName() {
      var _a;
      return (_a = this.site_setting) == null ? void 0 : _a.site_name;
    },
    currencyData() {
      var _a;
      return ((_a = this.orderData) == null ? void 0 : _a.currency) || this.currency;
    },
    userId() {
      var _a;
      return (_a = this.profile) == null ? void 0 : _a.id;
    },
    userName() {
      var _a, _b;
      return ((_a = this.orderData) == null ? void 0 : _a.userName) || ((_b = this.profile) == null ? void 0 : _b.name);
    },
    razorpayPaymentToken() {
      var _a;
      return ((_a = this.orderData) == null ? void 0 : _a.payment_token) || null;
    },
    amount() {
      var _a;
      return parseFloat((_a = this.orderData) == null ? void 0 : _a.total_amount).toFixed(2) || 0;
    },
    orderId() {
      var _a;
      return ((_a = this.orderData) == null ? void 0 : _a.id) || null;
    },
    noPaymentMethod() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return parseInt((_a = this.paymentGateway) == null ? void 0 : _a.stripe) !== this.status.PUBLIC && parseInt((_b = this.paymentGateway) == null ? void 0 : _b.razorpay) !== this.status.PUBLIC && parseInt((_c = this.paymentGateway) == null ? void 0 : _c.paypal) !== this.status.PUBLIC && parseInt((_d = this.paymentGateway) == null ? void 0 : _d.iyzico_payment) !== this.status.PUBLIC && parseInt((_e = this.paymentGateway) == null ? void 0 : _e.flutterwave) !== this.status.PUBLIC && parseInt((_f = this.paymentGateway) == null ? void 0 : _f.bank) !== this.status.PUBLIC && parseInt((_g = this.paymentGateway) == null ? void 0 : _g.cash_on_delivery) !== this.status.PUBLIC && parseInt((_h = this.paymentGateway) == null ? void 0 : _h.payfast_payment) !== this.status.PUBLIC;
    },
    checkedProduct() {
      return this.cartProducts.filter((obj) => {
        return parseInt(obj.selected) === 1;
      });
    }
  },
  methods: {
    async payWithIyzicoPayment() {
      await this.confirmOrder();
      this.$refs.iyzicoPayment.makePayment(!!this.isCheckout);
    },
    async payWithFlutterWave() {
      await this.confirmOrder();
      this.$refs.flutterWave.makePayment();
    },
    setLoaded(resp) {
      (void 0).paypal.Buttons({
        style: {
          label: "pay"
        },
        createOrder: async (data, actions) => {
          if (this.isCheckout) {
            return this.confirmOrder().then(() => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "",
                    amount: {
                      currency_code: this.currency,
                      value: this.amount
                    }
                  }
                ]
              });
            });
          } else {
            this.orderData = this.order;
            return actions.order.create({
              purchase_units: [
                {
                  description: "",
                  amount: {
                    currency_code: this.currency,
                    value: this.amount
                  }
                }
              ]
            });
          }
        },
        onApprove: async (data, actions) => {
          var _a, _b;
          return (_b = (_a = actions == null ? void 0 : actions.order) == null ? void 0 : _a.capture()) == null ? void 0 : _b.then(async function(details) {
            await this.paymentDoneFn(this.orderId, this.orderId, this.orderMethods.PAYPAL);
            this.orderPlaced("success", this.orderId);
          });
        },
        onError: (err) => {
          this.orderPlaced("closed", err);
        }
      }).render(this.$refs.paypal);
    },
    async initIyzico() {
      try {
        await this.confirmOrder();
      } catch (e) {
        console.log(e);
      }
    },
    async initPayFast() {
      try {
        this.payFastData = await this.confirmOrder();
        this.payFastLoader = true;
      } catch (e) {
        console.log(e);
      }
    },
    async initRazorpay() {
      try {
        await this.confirmOrder();
        this.showRazorpay = true;
      } catch (e) {
        console.log(e);
      }
    },
    async initStripe() {
      try {
        await this.confirmOrder();
        this.showStripe = true;
      } catch (e) {
        console.log(e);
      }
    },
    confirmOrder() {
      return new Promise(async (resolve) => {
        if (this.isCheckout) {
          this.orderError = "";
          this.placeOrder().then((result) => {
            const data = result == null ? void 0 : result.data;
            if (parseInt(data.order_method) !== this.orderMethods.CASH_ON_DELIVERY || parseInt(data.order_method) !== this.orderMethods.BANK) {
              data["total_amount"] = data.amount;
            }
            this.orderData = data;
            resolve(data);
          });
        } else {
          this.orderData = this.order;
          let payDone = null;
          if (parseInt(this.paymentType) === this.orderMethods.CASH_ON_DELIVERY) {
            this.placingOrder = true;
            await this.paymentDoneFn(this.order.id, this.order.id, this.orderMethods.CASH_ON_DELIVERY);
            this.placingOrder = false;
            this.orderPlaced("success", this.order.id);
          } else if (parseInt(this.paymentType) === this.orderMethods.BANK) {
            this.placingOrder = true;
            await this.paymentDoneFn(this.order.id, this.order.id, this.orderMethods.BANK);
            this.placingOrder = false;
            this.orderPlaced("success", this.order.id);
          } else if (parseInt(this.paymentType) === this.orderMethods.IYZICO_PAYMENT) {
            const { data } = await this.paymentDoneFn(this.order.id, this.order.id, this.orderMethods.IYZICO_PAYMENT);
            this.orderData = { ...this.orderData, ...data };
          } else if (parseInt(this.paymentType) === this.orderMethods.PAYFAST) {
            const { data } = await this.paymentDoneFn(this.order.id, this.order.id, this.orderMethods.PAYFAST);
            payDone = data;
          }
          resolve(payDone);
        }
      });
    },
    izcoOrderPlaces(evt) {
      this.orderPlaced("success", evt == null ? void 0 : evt.id, evt == null ? void 0 : evt.redirect, false);
    },
    orderPlaced(type = "success", event, redirect = true, showToast = true) {
      if (type === "success") {
        if (showToast) {
          this.setToastMessage(this.$t("payButton.placedSuccess"));
        }
        if (redirect) {
          this.$router.push({ path: "/user/order/" + event });
        }
        this.$emit("order-status", true);
      } else if (type === "error") {
        this.$router.push({ path: "/user/order/" + this.orderId });
        this.setToastError(event);
      } else if (type === "closed") {
        this.$router.push({ path: "/user/order/" + this.orderId });
        this.$emit("order-status", false);
      }
    },
    async placeOrder() {
      return new Promise((resolve, reject) => {
        var _a;
        if (this.checkedProduct.length) {
          const params = [];
          this.checkedProduct.forEach(async (obj) => {
            var _a2, _b;
            let shippingPrice = 0;
            if (parseInt(obj.shipping_type) === 1) {
              shippingPrice = parseInt((_a2 = obj == null ? void 0 : obj.shipping_place) == null ? void 0 : _a2.price);
            } else if (parseInt(obj.shipping_type) === 2) {
              shippingPrice = parseInt((_b = obj == null ? void 0 : obj.shipping_place) == null ? void 0 : _b.pickup_price);
            }
            const currentInventoryPrice = this.currentInventoryPriceCalc(obj.inventory, obj.flash_product);
            const currentPrice = parseInt(obj == null ? void 0 : obj.quantity) * currentInventoryPrice;
            const currentOffer = currentInventoryPrice * parseInt(obj == null ? void 0 : obj.offered);
            this.checkedProductQty += parseInt(obj == null ? void 0 : obj.quantity);
            params.push({
              cart: obj.id,
              bundle_offer: currentOffer,
              shipping_price: shippingPrice,
              selling: currentPrice
            });
          });
          this.loading = true;
          const userToken = this.getUserToken();
          this.postRequest({
            lang: this.langCode,
            api: "orderAction",
            params: {
              data: this.phpEncryption({
                user_token: userToken,
                order_method: this.paymentType,
                voucher: ((_a = this.voucherResult) == null ? void 0 : _a.voucher) || "",
                time_zone: this.timeZone
              })
            }
          }).then((res) => {
            var _a2, _b, _c, _d;
            this.loading = false;
            if (res.status === 200) {
              setTimeout(async () => {
                this.bgGetRequest({
                  params: `/${res.data.id}?${prepareGetUrl({
                    id: res.data.id,
                    time_zone: this.timeZone,
                    user_token: await this.getUserToken()
                  })}`,
                  lang: this.langCode,
                  api: "sendOrderEmail"
                });
              }, 100);
              this.subtractCartProductCount({
                qty: this.checkedProductQty,
                status: this.status
              });
              if (parseInt(res.data.order_method) === this.orderMethods.CASH_ON_DELIVERY || parseInt(res.data.order_method) === this.orderMethods.BANK) {
                this.orderPlaced("success", res.data.id);
              }
              resolve(res);
            } else if (res.status === 201) {
              if ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.form) {
                this.orderError = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.form;
              } else if ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.product) {
                const productError = [];
                Object.values((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.product[0]).forEach((obj) => {
                  obj.forEach((o) => {
                    productError.push(o);
                  });
                });
                this.orderError = productError;
              }
              reject();
            }
          });
        } else {
          this.setToastError(this.$t("listingLayout.noProductFound"));
          this.$router.push("cart");
        }
      });
    }
  },
  async mounted() {
    var _a, _b, _c, _d, _e, _f;
    if ((_a = this.paymentGateway) == null ? void 0 : _a.default) {
      this.paymentType = (_b = this.paymentGateway) == null ? void 0 : _b.default;
    } else if (parseInt((_c = this.paymentGateway) == null ? void 0 : _c.stripe) === this.status.PUBLIC) {
      this.paymentType = this.orderMethods.STRIPE;
    }
    if (parseInt((_d = this.paymentGateway) == null ? void 0 : _d.paypal) === this.status.PUBLIC) {
      const recaptchaScript = (void 0).createElement("script");
      recaptchaScript.setAttribute(
        "src",
        `https://www.paypal.com/sdk/js?client-id=${(_e = this.paymentGateway) == null ? void 0 : _e.paypal_key}&components=buttons,marks&disable-funding=paylater,card`
      );
      recaptchaScript.setAttribute("async", true);
      (void 0).head.appendChild(recaptchaScript);
      recaptchaScript.addEventListener("load", () => {
        this.setLoaded();
        this.paypaLoaded = true;
      });
    } else {
      this.paypaLoaded = true;
    }
    if (parseInt((_f = this.paymentGateway) == null ? void 0 : _f.flutterwave) === this.status.PUBLIC) {
      const recaptchaScript = (void 0).createElement("script");
      recaptchaScript.setAttribute(
        "src",
        `https://checkout.flutterwave.com/v3.js`
      );
      recaptchaScript.setAttribute("async", true);
      (void 0).head.appendChild(recaptchaScript);
      recaptchaScript.addEventListener("load", () => {
        this.flutterwaveLoaded = true;
      });
    } else {
      this.flutterwaveLoaded = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_stripe_payment = StripePayment;
  const _component_razorpay_payment = RazorpayPayment;
  const _component_spinner = __nuxt_component_1$1;
  const _component_ajax_button = _sfc_main$1;
  const _component_iyzico_payment = __nuxt_component_4;
  const _component_flutterwave_pay_btn = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pos-rel" }, _attrs))}>`);
  if ($data.showStripe) {
    _push(ssrRenderComponent(_component_stripe_payment, {
      "stripe-key": $setup.paymentGateway.stripe_key,
      "order-id": $options.orderId,
      amount: parseFloat($options.amount),
      currency: $options.currencyData,
      name: $options.userName,
      "site-name": $setup.site_setting.siteName,
      email: $options.userEmail,
      onSuccess: ($event) => $options.orderPlaced("success", $event),
      onClosed: ($event) => $options.orderPlaced("closed", $event)
    }, null, _parent));
  } else if ($data.showRazorpay) {
    _push(ssrRenderComponent(_component_razorpay_payment, {
      "order-id": $options.orderId,
      "razorpay-key": $setup.paymentGateway.razorpay_key,
      "razorpay-payment-token": $options.razorpayPaymentToken,
      amount: parseFloat($options.amount),
      "site-name": $setup.site_setting.siteName,
      currency: $options.currencyData,
      name: $options.userName,
      email: $options.userEmail,
      onSuccess: ($event) => $options.orderPlaced("success", $event),
      onClosed: ($event) => $options.orderPlaced("closed", $event),
      onError: ($event) => $options.orderPlaced("error", $event)
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.loading || $data.payFastLoader) {
    _push(`<div class="spinner-wrapper flex layer-white">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.orderError) {
    _push(`<p class="f-13 error mb-15"><!--[-->`);
    ssrRenderList($data.orderError, (i) => {
      _push(`<span class="block">${ssrInterpolate(i)}</span>`);
    });
    _push(`<!--]--></p>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.paymentGateway) {
    _push(`<form>`);
    if ($options.noPaymentMethod) {
      _push(`<p class="info mt-15">${ssrInterpolate(_ctx.$t("checkout.noPayment"))}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="heading-tab-wrapper"><div class="tab-heading">`);
    if (parseInt($setup.paymentGateway.stripe) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.STRIPE })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.STRIPE)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.STRIPE)) ? " checked" : ""}><i class="icon stripe-icon"></i><span>${ssrInterpolate(_ctx.$t("payment.stripe"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.flutterwave) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.FLUTTERWAVE })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.FLUTTERWAVE)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.FLUTTERWAVE)) ? " checked" : ""}><i class="icon flutterwave-icon"></i><span>${ssrInterpolate(_ctx.$t("payment.flutterwave"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.razorpay) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.RAZORPAY })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.RAZORPAY)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.RAZORPAY)) ? " checked" : ""}><i class="icon razorpay-icon"></i><span>${ssrInterpolate(_ctx.$t("payment.razorpay"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.paypal) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.PAYPAL })}">`);
      if (!$data.paypaLoaded && $data.paymentType === _ctx.orderMethods.PAYPAL) {
        _push(`<span class="spinner-wrapper flex layer-white">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 50 }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.PAYPAL)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.PAYPAL)) ? " checked" : ""}><i class="icon paypal-icon"></i><span>${ssrInterpolate(_ctx.$t("payment.paypal"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.iyzico_payment) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.IYZICO_PAYMENT })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.IYZICO_PAYMENT)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.IYZICO_PAYMENT)) ? " checked" : ""}><i class="icon iyzico-icon"></i><span>${ssrInterpolate(_ctx.$t("filter.payIyzico"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.payfast_payment) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.PAYFAST })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.PAYFAST)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.PAYFAST)) ? " checked" : ""}><i class="icon payfast-icon"></i><span>${ssrInterpolate(_ctx.$t("invent.pf"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.cash_on_delivery) === _ctx.status.PUBLIC) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.CASH_ON_DELIVERY })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.CASH_ON_DELIVERY)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.CASH_ON_DELIVERY)) ? " checked" : ""}><i class="icon cod-icon"></i><span>${ssrInterpolate(_ctx.$t("orderTabbing.cod"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.bank) === _ctx.status.PUBLIC && $options.orderMethod !== _ctx.orderMethods.BANK) {
      _push(`<label class="${ssrRenderClass({ active: $data.paymentType === _ctx.orderMethods.BANK })}"><input type="radio" name="payment"${ssrRenderAttr("value", _ctx.orderMethods.BANK)}${ssrIncludeBooleanAttr(ssrLooseEqual($data.paymentType, _ctx.orderMethods.BANK)) ? " checked" : ""}><i class="icon bank-icon mb-5"></i><span>${ssrInterpolate(_ctx.$t("date.bt"))}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><div class="tab-content">`);
    if ($data.paymentType === _ctx.orderMethods.STRIPE) {
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        type: "button",
        "fetching-data": $data.placingOrder,
        disabled: !$props.totalPrice || $options.noPaymentMethod,
        text: $options.paymentBtnText,
        onClicked: $options.initStripe
      }, null, _parent));
    } else if ($data.paymentType === _ctx.orderMethods.RAZORPAY) {
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        type: "button",
        "fetching-data": $data.placingOrder,
        disabled: !$props.totalPrice || $options.noPaymentMethod,
        text: $options.paymentBtnText,
        onClicked: $options.initRazorpay
      }, null, _parent));
    } else if ($data.paymentType === _ctx.orderMethods.PAYFAST) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        type: "button",
        "fetching-data": $data.placingOrder,
        disabled: !$props.totalPrice || $options.noPaymentMethod,
        text: $options.paymentBtnText,
        onClicked: $options.initPayFast
      }, null, _parent));
      if ($data.payFastData) {
        _push(`<div>${(_a = $options.payFastForm) != null ? _a : ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else if ($data.paymentType === _ctx.orderMethods.CASH_ON_DELIVERY) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        type: "button",
        "fetching-data": $data.placingOrder,
        disabled: !$props.totalPrice || $options.noPaymentMethod,
        text: _ctx.$t("checkout.confirmOrder"),
        onClicked: $options.confirmOrder
      }, null, _parent));
      _push(`</div>`);
    } else if ($data.paymentType === _ctx.orderMethods.BANK) {
      _push(ssrRenderComponent(_component_ajax_button, {
        class: "primary-btn plr-30 plr-sm-15",
        type: "button",
        "fetching-data": $data.placingOrder,
        disabled: !$props.totalPrice || $options.noPaymentMethod,
        text: _ctx.$t("checkout.confirmOrder"),
        onClicked: $options.confirmOrder
      }, null, _parent));
    } else if ($data.paymentType === _ctx.orderMethods.IYZICO_PAYMENT) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_iyzico_payment, {
        ref: "iyzicoPayment",
        order: $data.orderData,
        "btn-text": $options.paymentBtnText,
        onClicked: $options.payWithIyzicoPayment,
        onSuccess: $options.izcoOrderPlaces,
        onClosed: ($event) => $options.orderPlaced("closed", $event),
        onError: ($event) => $options.orderPlaced("error", $event)
      }, null, _parent));
      _push(`</div>`);
    } else if ($data.paymentType === _ctx.orderMethods.FLUTTERWAVE) {
      _push(`<div>`);
      _push(ssrRenderComponent(_component_flutterwave_pay_btn, {
        ref: "flutterWave",
        order: $data.orderData,
        "public-key": $setup.paymentGateway.fw_public_key,
        amount: parseFloat($options.amount),
        currency: $setup.currency,
        "btn-text": $options.paymentBtnText,
        name: $options.userName,
        loading: !$data.flutterwaveLoaded,
        "user-id": `${$options.userId}`,
        email: $options.userEmail,
        "site-name": $options.siteName,
        "header-logo": $options.headerLogo,
        onClicked: $options.payWithFlutterWave,
        onSuccess: ($event) => $options.orderPlaced("success", $event),
        onClosed: ($event) => $options.orderPlaced("closed", $event),
        onError: ($event) => $options.orderPlaced("error", $event)
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (parseInt($setup.paymentGateway.paypal) === _ctx.status.PUBLIC) {
      _push(`<div class="${ssrRenderClass([{ "paypal-active": $data.paymentType === _ctx.orderMethods.PAYPAL }, "paypal-tab"])}"><div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentGateways.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=PaymentGateways-DcJBOKM7.mjs.map

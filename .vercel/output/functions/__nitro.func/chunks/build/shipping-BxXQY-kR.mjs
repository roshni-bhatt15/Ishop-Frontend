import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { u as useAddressHelper, _ as _sfc_main$1 } from './UserAddress-DLDK1urt.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_0 from './Dropdown-CUjYMb0K.mjs';
import _sfc_main$2 from './AjaxButton-DzViXcHL.mjs';
import _sfc_main$3 from './CartList-sedxDV_N.mjs';
import __nuxt_component_6 from './CheckoutRight-BeiQ3uzp.mjs';
import { ref, watch, computed, mergeProps, unref, withCtx, createVNode, withModifiers, toDisplayString, createBlock, createCommentVNode, openBlock, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { u as useLanguageStore, a as useCommonStore, c as useI18n, d as useHead, b as useAuthStore, e as useRouter } from './server.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { storeToRefs } from 'pinia';
import { u as useValidationHelper } from './useValidationHelper-CV8fh1WP.mjs';
import './Pagination-1kX6F26r.mjs';
import './CartProductTile-CcN_qkNj.mjs';
import './ImageLazy-C91HtcbD.mjs';
import './PriceFormat-BQp9_8mt.mjs';
import './util-D0P5KPFP.mjs';
import './QuantityNav-BsBh_DF4.mjs';
import './detail-CmpxRn50.mjs';
import './useProductHelper-D_nJapxP.mjs';
import './usePriceHelper-DzuasYxT.mjs';
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
  __name: "shipping",
  __ssrInlineRender: true,
  setup(__props) {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const resourceStore = useResourceStore();
    const { countryList, phoneList } = storeToRefs(resourceStore);
    const { setCountryList, setPhoneList } = resourceStore;
    const userStore = useUserStore();
    const { allAddress, profile } = storeToRefs(userStore);
    const { userAddressAction, getUserToken, updateAddress } = userStore;
    const commonStore = useCommonStore();
    const { location, customScripts, setting, site_setting } = storeToRefs(commonStore);
    const { fetchLocation, setToastMessage, setToastError, unAuthGet, postRequest } = commonStore;
    const { t } = useI18n();
    const { pageMeta } = useMetaData();
    useHead(pageMeta({ ...site_setting.value, ...{ meta_title: `${t("header.shipping")} | ${site_setting.value.meta_title}` } }));
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const cartStore = useCartStore();
    const { cartProducts } = storeToRefs(cartStore);
    const { getCartByUser, updateCartShipping } = cartStore;
    const setAddressPopup = () => {
      addressPopup.value = true;
    };
    const setSelected = (event) => {
      selectedCurrentAddress.value = event;
    };
    const addressPopup = ref(false);
    const cartShipping = ref({});
    const checked = ref([]);
    const cartPrice = ref({
      totalItems: 0,
      totalPriceWithOffer: 0,
      totalPrice: 0
    });
    const cartPopOver = ref(false);
    const editing = ref(0);
    const checkingOut = ref(false);
    const states = ref({});
    const loading = ref(false);
    const checkedProduct = ref([]);
    const singleShippingCart = ref({});
    const hasAddressErrors = ref(false);
    const addressData = ref({
      id: "",
      name: "",
      phone: "",
      city: "",
      country: "",
      state: "",
      zip: "",
      address_1: "",
      address_2: "",
      delivery_instruction: ""
    });
    const submittingAddressData = ref(false);
    const selectedCurrentAddress = ref(null);
    const errorFromApi = ref(null);
    const router = useRouter();
    watch(profile, (newVal) => {
      addressData.value.name = newVal.name;
      addressData.value.email = newVal.email;
    });
    watch(location, () => {
      settingCountry();
    });
    const { isValidNumber, isValidEmail } = useValidationHelper();
    const invalidNumber = computed(() => {
      var _a;
      return !isValidNumber((_a = addressData.value) == null ? void 0 : _a.phone);
    });
    const numberValid = computed(() => {
      return addressData.value.phone && !invalidNumber.value;
    });
    const selectedSippingPlace = computed(() => {
      var _a;
      const cartShippingValues = Object.values(cartShipping.value);
      if (cartShippingValues == null ? void 0 : cartShippingValues.length) {
        const sp = (_a = cartShippingValues[0]) == null ? void 0 : _a.shipping_place;
        if (!(sp == null ? void 0 : sp.pickup_point)) {
          return null;
        }
        const addrArr = [
          sp.pickup_address_line_1,
          sp.pickup_address_line_2,
          sp.pickup_zip,
          sp.pickup_state,
          sp.pickup_city,
          sp.pickup_country
        ];
        let addr = addrArr.filter((i) => i).join(", ");
        if (sp.pickup_phone) {
          addr = `${addr}, <span class="block">${t("date.tl")}: ${sp.pickup_phone}</span>`;
        }
        return addr;
      }
      return null;
    });
    const invalidEmail = computed(() => {
      return !isValidEmail(addressData.value.email);
    });
    const emailValid = computed(() => {
      return addressData.value.email && !invalidEmail.value;
    });
    const currentAddresses = computed(() => {
      var _a;
      return (_a = allAddress.value) == null ? void 0 : _a.data;
    });
    const shippingAddress = ref(null);
    const initAddress = () => {
      addressData.value = {
        id: "",
        email: "",
        name: "",
        phone: "",
        city: "",
        country: "",
        state: "",
        zip: "",
        address_1: "",
        address_2: "",
        delivery_instruction: ""
      };
    };
    const cartChanged = (evt) => {
      singleShippingCart.value = [];
      if (evt) {
        getCheckedProducts();
      }
    };
    const shippingChanged = (evt) => {
      cartShipping.value = evt;
    };
    const currentShipping = ({ cart, shipping }) => {
      if (cartShipping.value[cart] && shipping) {
        cartShipping.value[cart].shipping_place = shipping;
        const sr = shipping == null ? void 0 : shipping.shipping_rule;
        if ((sr == null ? void 0 : sr.single_price) && (!singleShippingCart.value[sr == null ? void 0 : sr.id] || singleShippingCart.value[sr == null ? void 0 : sr.id] === cart)) {
          singleShippingCart.value[sr == null ? void 0 : sr.id] = cart;
          cartShipping.value[cart].single_shipping = true;
        } else if ((sr == null ? void 0 : sr.single_price) && singleShippingCart.value[sr == null ? void 0 : sr.id]) {
          cartShipping.value[cart].single_shipping = false;
        }
      }
    };
    const priceCalculated = (evt) => {
      cartPrice.value = evt;
    };
    const getCheckedProducts = () => {
      checked.value = [];
      checkedProduct.value = [];
      cartProducts.value.forEach((obj) => {
        var _a;
        if (parseInt(obj.selected) === 1) {
          checked.value.push(obj.id);
          checkedProduct.value.push(obj);
          const sp = (_a = obj == null ? void 0 : obj.shipping_place) != null ? _a : "";
          cartShipping.value = {
            ...cartShipping.value,
            ...{
              [obj.id]: {
                cart: obj.id,
                shipping_place: sp,
                single_shipping: true,
                shipping_type: obj.shipping_type || 1
              }
            }
          };
        }
      });
    };
    const goToCheckout = async () => {
      var _a, _b, _c, _d, _e;
      let unableToShip = false;
      Object.values(cartShipping.value).forEach((obj) => {
        if (!obj.shipping_place) {
          unableToShip = true;
          return false;
        }
      });
      if (unableToShip) {
        setToastError(t("shipping.unableShipped"));
        return;
      }
      if (!checkedProduct.value.length) {
        cartPopOver.value = false;
        setToastError(t("shipping.noProductSelected"));
        router.push("/cart");
        return;
      }
      checkingOut.value = true;
      const data = await updateCartShipping({
        cart: cartShipping.value,
        user_token: await getUserToken(),
        selected_address: (_a = selectedCurrentAddress.value) == null ? void 0 : _a.id
      });
      checkingOut.value = false;
      if ((data == null ? void 0 : data.status) === 200) {
        cartPopOver.value = false;
        router.push("/checkout");
      } else {
        if ((_b = data.data) == null ? void 0 : _b.form) {
          setToastError((_c = data.data) == null ? void 0 : _c.form[0]);
        } else if ((_d = data.data) == null ? void 0 : _d.product) {
          errorFromApi.value = (_e = data.data) == null ? void 0 : _e.product[0];
        }
      }
    };
    const clearData = () => {
      addressPopup.value = false;
      initAddress();
      submittingAddressData.value = false;
      editing.value = 0;
      settingCountry();
      hasAddressErrors.value = false;
    };
    const { fetchingAddressData } = useAddressHelper({ submittingAddressData, hasAddressErrors });
    const selectCountry = (evt) => {
      var _a, _b, _c, _d, _e;
      addressData.value = { ...addressData.value, ...{ country: (_a = evt.value) == null ? void 0 : _a.code2 } };
      states.value = (_b = evt.value) == null ? void 0 : _b.states;
      addressData.value.state = Object.keys((_c = evt.value) == null ? void 0 : _c.states).length ? (_e = Object.values((_d = evt.value) == null ? void 0 : _d.states)[0]) == null ? void 0 : _e.code : "";
    };
    const selectState = (evt) => {
      addressData.value.state = evt.value.code;
    };
    const settingCountry = () => {
      var _a;
      if (addressData.value) {
        if (location.value.countryCode && countryList.value[location.value.countryCode]) {
          addressData.value.country = location.value.countryCode;
        } else {
          addressData.value.country = Object.keys(countryList.value)[0];
        }
        states.value = ((_a = addressData.value) == null ? void 0 : _a.country) ? countryList.value[addressData.value.country].states : "";
        addressData.value.state = location.value.region;
      }
    };
    const closeAddressPopup = () => {
      var _a, _b, _c, _d, _e;
      addressPopup.value = false;
      addressData.value = {};
      addressData.value.country = (_a = location.value) == null ? void 0 : _a.countryCode;
      states.value = (_c = countryList.value[(_b = location.value) == null ? void 0 : _b.countryCode]) == null ? void 0 : _c.states;
      addressData.value.state = (_d = location.value) == null ? void 0 : _d.region;
      addressData.value.email = (_e = profile.value) == null ? void 0 : _e.email;
    };
    const editAddress = (value) => {
      addressPopup.value = true;
      editing.value = value.id;
      addressData.value = Object.assign({}, value);
      states.value = countryList.value[value.country].states;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_spinner = __nuxt_component_1;
      const _component_user_address = _sfc_main$1;
      const _component_pop_over = PopOver;
      const _component_dropdown = __nuxt_component_0;
      const _component_ajax_button = _sfc_main$2;
      const _component_cart_list = _sfc_main$3;
      const _component_checkout_right = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid mtb-20 mtb-sm-15" }, _attrs))}><div class="product-detail checkout-detail"><div class="detail-left p-20 p-sm-15 pb-10 area mr-20 mr-sm mb-sm-15"><h5 class="mb-20">${ssrInterpolate(_ctx.$t("date.dad"))}</h5><div class="flex align-start gap-15 start">`);
      if (unref(loading)) {
        _push(`<div class="spinner-wrapper flex layer-white">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="address-wrapper">`);
      _push(ssrRenderComponent(_component_user_address, {
        ref_key: "shippingAddress",
        ref: shippingAddress,
        "has-radio": true,
        onEditing: editAddress,
        onSelectedAddress: setSelected,
        onAddAddress: setAddressPopup
      }, null, _parent));
      _push(`</div><form class="address-form">`);
      if (unref(addressPopup)) {
        _push(ssrRenderComponent(_component_pop_over, {
          title: _ctx.$t("filter.address"),
          onClose: closeAddressPopup,
          "elem-id": "shipping-address-pop-over",
          layer: true
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-15"${_scopeId}>`);
              if (unref(countryList)) {
                _push2(`<div class="input-wrap flex-1"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.country"))}</label>`);
                _push2(ssrRenderComponent(_component_dropdown, {
                  "selected-key": unref(addressData).country,
                  options: unref(countryList),
                  "position-fixed": false,
                  "key-name": "name",
                  searching: true,
                  onClicked: selectCountry
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass([{ invalid: !unref(emailValid) && unref(hasAddressErrors) }, "input-wrap flex-1"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><div class="icon-input"${_scopeId}><i class="icon email-icon"${_scopeId}></i><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}${ssrRenderAttr("value", unref(addressData).email)}${_scopeId}></div>`);
              if (!unref(addressData).email && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
              } else if (unref(invalidEmail) && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="flex block-xxs gap-15"${_scopeId}><div class="${ssrRenderClass([{ invalid: !unref(addressData).name && unref(hasAddressErrors) }, "input-wrap flex-1"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.name"))}</label><input type="text"${ssrRenderAttr("value", unref(addressData).name)}${_scopeId}>`);
              if (!unref(addressData).name && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") }))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (unref(phoneList)) {
                _push2(`<div class="${ssrRenderClass([{ invalid: !unref(numberValid) && unref(hasAddressErrors) }, "input-wrap flex-1"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.phone"))}</label><div class="input-text"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(phoneList)[unref(addressData).country])}</span><input type="text"${ssrRenderAttr("value", unref(addressData).phone)}${_scopeId}></div>`);
                if (!unref(addressData).phone && unref(hasAddressErrors)) {
                  _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.phone") }))}</span>`);
                } else if (unref(invalidNumber) && unref(hasAddressErrors)) {
                  _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("invent.in"))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="${ssrRenderClass([{ invalid: !unref(addressData).address_1 && unref(hasAddressErrors) }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.address"))}</label><input class="mb-10" type="text"${ssrRenderAttr("value", unref(addressData).address_1)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.addressPlaceholder"))}${_scopeId}><input type="text"${ssrRenderAttr("value", unref(addressData).address_2)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.address2Placeholder"))}${_scopeId}>`);
              if (!unref(addressData).address_1 && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.address") }))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex block-xxs gap-15 sided"${_scopeId}><div class="${ssrRenderClass([{ invalid: !unref(addressData).city && unref(hasAddressErrors) }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.city"))}</label><input type="text"${ssrRenderAttr("value", unref(addressData).city)}${_scopeId}>`);
              if (!unref(addressData).city && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.city") }))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="${ssrRenderClass([{ invalid: !unref(addressData).zip && unref(hasAddressErrors) }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.zipCode"))}</label><input type="text"${ssrRenderAttr("value", unref(addressData).zip)}${_scopeId}>`);
              if (!unref(addressData).zip && unref(hasAddressErrors)) {
                _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.zipCode") }))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (Object.keys(unref(states)).length) {
                _push2(`<div class="input-wrap"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.state"))}</label>`);
                _push2(ssrRenderComponent(_component_dropdown, {
                  "selected-key": unref(addressData).state,
                  position: "right",
                  "position-fixed": false,
                  options: unref(states),
                  "key-name": "name",
                  onClicked: selectState,
                  class: "state-dd"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="input-wrap mb-0"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("shipping.instruction"))}</label><textarea${_scopeId}>${ssrInterpolate(unref(addressData).delivery_instruction)}</textarea></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-15" }, [
                  unref(countryList) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "input-wrap flex-1"
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.country")), 1),
                    createVNode(_component_dropdown, {
                      "selected-key": unref(addressData).country,
                      options: unref(countryList),
                      "position-fixed": false,
                      "key-name": "name",
                      searching: true,
                      onClicked: selectCountry
                    }, null, 8, ["selected-key", "options"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["input-wrap flex-1", { invalid: !unref(emailValid) && unref(hasAddressErrors) }]
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.email")), 1),
                    createVNode("div", { class: "icon-input" }, [
                      createVNode("i", { class: "icon email-icon" }),
                      withDirectives(createVNode("input", {
                        type: "text",
                        placeholder: _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }),
                        "onUpdate:modelValue": ($event) => unref(addressData).email = $event
                      }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                        [
                          vModelText,
                          unref(addressData).email,
                          void 0,
                          { trim: true }
                        ]
                      ])
                    ]),
                    !unref(addressData).email && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error"
                    }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") })), 1)) : unref(invalidEmail) && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "error"
                    }, toDisplayString(_ctx.$t("contact.invalidEmail")), 1)) : createCommentVNode("", true)
                  ], 2)
                ]),
                createVNode("div", { class: "flex block-xxs gap-15" }, [
                  createVNode("div", {
                    class: ["input-wrap flex-1", { invalid: !unref(addressData).name && unref(hasAddressErrors) }]
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.name")), 1),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(addressData).name = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(addressData).name]
                    ]),
                    !unref(addressData).name && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error"
                    }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") })), 1)) : createCommentVNode("", true)
                  ], 2),
                  unref(phoneList) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ["input-wrap flex-1", { invalid: !unref(numberValid) && unref(hasAddressErrors) }]
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.phone")), 1),
                    createVNode("div", { class: "input-text" }, [
                      createVNode("span", null, toDisplayString(unref(phoneList)[unref(addressData).country]), 1),
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(addressData).phone = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(addressData).phone]
                      ])
                    ]),
                    !unref(addressData).phone && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error"
                    }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.phone") })), 1)) : unref(invalidNumber) && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "error"
                    }, toDisplayString(_ctx.$t("invent.in")), 1)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: ["input-wrap", { invalid: !unref(addressData).address_1 && unref(hasAddressErrors) }]
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.address")), 1),
                  withDirectives(createVNode("input", {
                    class: "mb-10",
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(addressData).address_1 = $event,
                    placeholder: _ctx.$t("addressPopup.addressPlaceholder")
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(addressData).address_1]
                  ]),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => unref(addressData).address_2 = $event,
                    placeholder: _ctx.$t("addressPopup.address2Placeholder")
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vModelText, unref(addressData).address_2]
                  ]),
                  !unref(addressData).address_1 && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "error"
                  }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.address") })), 1)) : createCommentVNode("", true)
                ], 2),
                createVNode("div", { class: "flex block-xxs gap-15 sided" }, [
                  createVNode("div", {
                    class: ["input-wrap", { invalid: !unref(addressData).city && unref(hasAddressErrors) }]
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.city")), 1),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(addressData).city = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(addressData).city]
                    ]),
                    !unref(addressData).city && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error"
                    }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.city") })), 1)) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", {
                    class: ["input-wrap", { invalid: !unref(addressData).zip && unref(hasAddressErrors) }]
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.zipCode")), 1),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => unref(addressData).zip = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(addressData).zip]
                    ]),
                    !unref(addressData).zip && unref(hasAddressErrors) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error"
                    }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.zipCode") })), 1)) : createCommentVNode("", true)
                  ], 2),
                  Object.keys(unref(states)).length ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "input-wrap"
                  }, [
                    createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.state")), 1),
                    createVNode(_component_dropdown, {
                      "selected-key": unref(addressData).state,
                      position: "right",
                      "position-fixed": false,
                      options: unref(states),
                      "key-name": "name",
                      onClicked: selectState,
                      class: "state-dd"
                    }, null, 8, ["selected-key", "options"])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "input-wrap mb-0" }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("shipping.instruction")), 1),
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(addressData).delivery_instruction = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(addressData).delivery_instruction]
                  ])
                ])
              ];
            }
          }),
          "pop-footer": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex sided mlr-0 gap-10"${_scopeId}><button aria-label="submit" class="outline-btn plr-30 plr-sm-15"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.cancel"))}</button>`);
              _push2(ssrRenderComponent(_component_ajax_button, {
                class: "primary-btn plr-30 plr-sm-15",
                "fetching-data": unref(submittingAddressData),
                "loading-text": _ctx.$t("addressPopup.saving"),
                text: _ctx.$t("addressPopup.thisAddress", { type: unref(editing) > 0 ? _ctx.$t("addressPopup.update") : _ctx.$t("addressPopup.save") })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex sided mlr-0 gap-10" }, [
                  createVNode("button", {
                    "aria-label": "submit",
                    class: "outline-btn plr-30 plr-sm-15",
                    onClick: withModifiers(clearData, ["prevent"])
                  }, toDisplayString(_ctx.$t("addressPopup.cancel")), 1),
                  createVNode(_component_ajax_button, {
                    class: "primary-btn plr-30 plr-sm-15",
                    "fetching-data": unref(submittingAddressData),
                    "loading-text": _ctx.$t("addressPopup.saving"),
                    text: _ctx.$t("addressPopup.thisAddress", { type: unref(editing) > 0 ? _ctx.$t("addressPopup.update") : _ctx.$t("addressPopup.save") })
                  }, null, 8, ["fetching-data", "loading-text", "text"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
      if (unref(selectedSippingPlace)) {
        _push(`<div class="pickup-addr"><h5 class="mt-30 mb-10">${ssrInterpolate(_ctx.$t("date.pa"))}</h5><div class="flex start"><p class="success-msg">${(_a = unref(selectedSippingPlace)) != null ? _a : ""}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-30"><h5 class="mb-10">${ssrInterpolate(_ctx.$t("date.os"))}</h5>`);
      _push(ssrRenderComponent(_component_cart_list, {
        "error-from-api": unref(errorFromApi),
        "cart-products": unref(checkedProduct),
        "cart-shipping": unref(cartShipping),
        checked: unref(checked),
        "current-addresses": unref(currentAddresses),
        "is-shipping": true,
        address: unref(selectedCurrentAddress),
        onShippingChanged: shippingChanged,
        onCartChanged: cartChanged,
        onCurrentShipping: currentShipping
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_checkout_right, {
        "route-link": "checkout",
        "checked-product": unref(checkedProduct),
        "btn-text": _ctx.$t("date.ptp"),
        onCalculatedPrice: priceCalculated,
        submitting: unref(checkingOut),
        disabled: unref(fetchingAddressData) || Object.keys(unref(cartShipping)).length === 0 || !unref(selectedCurrentAddress),
        onGoNext: goToCheckout
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shipping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shipping-BxXQY-kR.mjs.map

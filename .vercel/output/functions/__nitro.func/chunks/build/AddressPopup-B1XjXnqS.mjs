import __nuxt_component_1$1 from './Spinner-CfK0SFd4.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_0 from './Dropdown-CUjYMb0K.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import { a as addressHelper } from './addressHelper-BBaujjhf.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { j as _export_sfc, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { storeToRefs } from 'pinia';
import { withCtx, createVNode, withModifiers, toDisplayString, createBlock, createCommentVNode, openBlock, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
    const resourceStore = useResourceStore();
    const { countryList, phoneList } = storeToRefs(resourceStore);
    const { setCountryList, setPhoneList } = resourceStore;
    const userStore = useUserStore();
    const { userAddressAction, getUserToken, setAllAddress, updateAddress } = userStore;
    const { profile } = storeToRefs(userStore);
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { location } = storeToRefs(commonStore);
    const { fetchLocation, setToastMessage, setToastError, getRequest, postRequest } = commonStore;
    return {
      getUserToken,
      countryList,
      phoneList,
      langCode,
      setCountryList,
      location,
      fetchLocation,
      setToastMessage,
      setToastError,
      getRequest,
      postRequest,
      setAllAddress,
      updateAddress,
      setPhoneList,
      userAddressAction,
      profile
    };
  },
  name: "AddressPopup",
  data() {
    return {
      states: {},
      addressData: null,
      loading: false,
      hasAddressErrors: false,
      dropdownOpen: false,
      submittingAddressData: false
    };
  },
  watch: {
    location() {
      this.settingCountry();
    },
    profile() {
      this.addressData.name = this.profile.name;
      this.addressData.email = this.profile.email;
    }
  },
  props: {
    address: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  components: {
    Spinner: __nuxt_component_1$1,
    AjaxButton: _sfc_main$1,
    PopOver,
    Dropdown: __nuxt_component_0
  },
  computed: {
    invalidNumber() {
      var _a;
      return !this.isValidNumber((_a = this.addressData) == null ? void 0 : _a.phone);
    },
    numberValid() {
      return this.addressData.phone && !this.invalidNumber;
    },
    invalidEmail() {
      var _a;
      return !this.isValidEmail((_a = this.addressData) == null ? void 0 : _a.email);
    },
    emailValid() {
      return this.addressData.email && !this.invalidEmail;
    },
    phoneCode() {
      var _a;
      return this.phoneList[(_a = this.addressData) == null ? void 0 : _a.country];
    },
    editing() {
      return this.addressData && this.addressData.id;
    }
  },
  mixins: [util, validation, addressHelper],
  methods: {
    async savingAddressData() {
      if (this.numberValid && this.emailValid) {
        await this.addressAction();
        if (!this.hasAddressErrors) {
          this.$emit("close");
        }
      } else {
        this.hasAddressErrors = true;
      }
    },
    settingCountry() {
      var _a, _b, _c, _d, _e;
      this.addressData.country = this.addressData.country.trim() !== "" ? this.addressData.country.trim() : this.location.countryCode;
      this.states = ((_a = this.addressData) == null ? void 0 : _a.country) ? this.countryList[this.addressData.country].states : "";
      this.addressData.state = ((_c = (_b = this.addressData) == null ? void 0 : _b.state) == null ? void 0 : _c.trim()) !== "" ? (_e = (_d = this.addressData) == null ? void 0 : _d.state) == null ? void 0 : _e.trim() : this.location.region;
    },
    selectedCountry(evt) {
      var _a;
      this.addressData = { ...this.addressData, ...{ country: evt.value.code2 } };
      this.states = evt.value.states;
      this.addressData.state = Object.keys(evt.value.states).length ? (_a = Object.values(evt.value.states)[0]) == null ? void 0 : _a.code : "";
    },
    selectedState(evt) {
      this.addressData.state = evt.value.code;
    }
  },
  async mounted() {
    var _a, _b, _c, _d, _e;
    if (!this.countryList || !this.phoneList) {
      this.loading = true;
      const { data } = await this.unAuthGet({
        params: "",
        lang: this.langCode,
        api: "countriesPhones"
      });
      this.setCountryList(data == null ? void 0 : data.countries);
      this.setPhoneList(data == null ? void 0 : data.phones);
      this.loading = false;
    }
    if (this.address) {
      this.addressData = { ...this.addressData, ...this.address };
    } else {
      this.addressData = {
        id: "",
        city: "",
        email: "",
        name: "",
        phone: "",
        country: "",
        state: "",
        zip: "",
        address_1: "",
        address_2: ""
      };
      this.$nextTick(() => {
        if (this.profile) {
          this.addressData.name = this.profile.name;
          this.addressData.email = this.profile.email;
        }
      });
    }
    if (!this.addressData.country) {
      this.settingCountry();
    } else {
      this.states = ((_a = this.addressData) == null ? void 0 : _a.country) ? this.countryList[this.addressData.country].states : "";
      this.addressData.state = ((_c = (_b = this.addressData) == null ? void 0 : _b.state) == null ? void 0 : _c.trim()) !== "" ? (_e = (_d = this.addressData) == null ? void 0 : _d.state) == null ? void 0 : _e.trim() : this.location.region;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_spinner = __nuxt_component_1$1;
  const _component_pop_over = PopOver;
  const _component_dropdown = __nuxt_component_0;
  const _component_ajax_button = _sfc_main$1;
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  if ($data.loading) {
    _push(`<div class="spinner-wrapper flex layer-white">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.addressData) {
    _push(ssrRenderComponent(_component_pop_over, {
      title: _ctx.$t("filter.address"),
      onClose: ($event) => _ctx.$emit("close"),
      "elem-id": "user-address-pop-over",
      layer: true,
      class: "address-popup popup-top-auto"
    }, {
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div${_scopeId}><div class="flex start mlr--5"${_scopeId}>`);
          if ($setup.countryList) {
            _push2(`<div class="input-wrap mlr-5"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.country"))}</label>`);
            _push2(ssrRenderComponent(_component_dropdown, {
              "selected-key": $data.addressData.country,
              options: $setup.countryList,
              "key-name": "name",
              "position-fixed": false,
              searching: true,
              onClicked: $options.selectedCountry
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (Object.keys($data.states).length) {
            _push2(`<div class="input-wrap mlr-5"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.state"))}</label>`);
            _push2(ssrRenderComponent(_component_dropdown, {
              "selected-key": $data.addressData.state,
              options: $data.states,
              "key-name": "name",
              "position-fixed": false,
              onClicked: $options.selectedState
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="${ssrRenderClass([{ invalid: !$options.emailValid && $data.hasAddressErrors }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><div class="icon-input"${_scopeId}><i class="icon email-icon"${_scopeId}></i><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}${ssrRenderAttr("value", $data.addressData.email)}${_scopeId}></div>`);
          if (!$data.addressData.email && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
          } else if ($options.invalidEmail && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="flex mlr--5 start"${_scopeId}><div class="${ssrRenderClass([{ invalid: !$data.addressData.name && $data.hasAddressErrors }, "input-wrap mlr-5"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.name"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.name)}${_scopeId}>`);
          if (!$data.addressData.name && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="${ssrRenderClass([{ invalid: !$options.numberValid && $data.hasAddressErrors }, "input-wrap mlr-5"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.phone"))}</label><div class="input-text"${_scopeId}><span${_scopeId}>${ssrInterpolate($options.phoneCode)}</span><input type="text"${ssrRenderAttr("value", $data.addressData.phone)}${_scopeId}></div>`);
          if (!$data.addressData.phone && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.phone") }))}</span>`);
          } else if ($options.invalidNumber && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("invent.in"))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div><div class="${ssrRenderClass([{ invalid: !$data.addressData.address_1 && $data.hasAddressErrors }, "input-wrap"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.address"))}</label><input class="mb-10" type="text"${ssrRenderAttr("value", $data.addressData.address_1)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.addressPlaceholder"))}${_scopeId}><input type="text"${ssrRenderAttr("value", $data.addressData.address_2)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.addressPlaceholder"))}${_scopeId}>`);
          if (!$data.addressData.address_1 && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.address") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="flex start mlr--5"${_scopeId}><div class="${ssrRenderClass([{ invalid: !$data.addressData.city && $data.hasAddressErrors }, "input-wrap mlr-5"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.city"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.city)}${_scopeId}>`);
          if (!$data.addressData.city && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.city") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><div class="${ssrRenderClass([{ invalid: !$data.addressData.zip && $data.hasAddressErrors }, "input-wrap mlr-5"])}"${_scopeId}><label${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.zipCode"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.zip)}${_scopeId}>`);
          if (!$data.addressData.zip && $data.hasAddressErrors) {
            _push2(`<span class="error"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.zipCode") }))}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div></div>`);
        } else {
          return [
            createVNode("div", null, [
              createVNode("div", { class: "flex start mlr--5" }, [
                $setup.countryList ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "input-wrap mlr-5"
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.country")), 1),
                  createVNode(_component_dropdown, {
                    "selected-key": $data.addressData.country,
                    options: $setup.countryList,
                    "key-name": "name",
                    "position-fixed": false,
                    searching: true,
                    onClicked: $options.selectedCountry
                  }, null, 8, ["selected-key", "options", "onClicked"])
                ])) : createCommentVNode("", true),
                Object.keys($data.states).length ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "input-wrap mlr-5"
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.state")), 1),
                  createVNode(_component_dropdown, {
                    "selected-key": $data.addressData.state,
                    options: $data.states,
                    "key-name": "name",
                    "position-fixed": false,
                    onClicked: $options.selectedState
                  }, null, 8, ["selected-key", "options", "onClicked"])
                ])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                class: ["input-wrap", { invalid: !$options.emailValid && $data.hasAddressErrors }]
              }, [
                createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.email")), 1),
                createVNode("div", { class: "icon-input" }, [
                  createVNode("i", { class: "icon email-icon" }),
                  withDirectives(createVNode("input", {
                    type: "text",
                    placeholder: _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }),
                    "onUpdate:modelValue": ($event) => $data.addressData.email = $event
                  }, null, 8, ["placeholder", "onUpdate:modelValue"]), [
                    [
                      vModelText,
                      $data.addressData.email,
                      void 0,
                      { trim: true }
                    ]
                  ])
                ]),
                !$data.addressData.email && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "error"
                }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") })), 1)) : $options.invalidEmail && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "error"
                }, toDisplayString(_ctx.$t("contact.invalidEmail")), 1)) : createCommentVNode("", true)
              ], 2),
              createVNode("div", { class: "flex mlr--5 start" }, [
                createVNode("div", {
                  class: ["input-wrap mlr-5", { invalid: !$data.addressData.name && $data.hasAddressErrors }]
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.name")), 1),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.addressData.name = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.addressData.name]
                  ]),
                  !$data.addressData.name && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "error"
                  }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") })), 1)) : createCommentVNode("", true)
                ], 2),
                createVNode("div", {
                  class: ["input-wrap mlr-5", { invalid: !$options.numberValid && $data.hasAddressErrors }]
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.phone")), 1),
                  createVNode("div", { class: "input-text" }, [
                    createVNode("span", null, toDisplayString($options.phoneCode), 1),
                    withDirectives(createVNode("input", {
                      type: "text",
                      "onUpdate:modelValue": ($event) => $data.addressData.phone = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, $data.addressData.phone]
                    ])
                  ]),
                  !$data.addressData.phone && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "error"
                  }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.phone") })), 1)) : $options.invalidNumber && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "error"
                  }, toDisplayString(_ctx.$t("invent.in")), 1)) : createCommentVNode("", true)
                ], 2)
              ]),
              createVNode("div", {
                class: ["input-wrap", { invalid: !$data.addressData.address_1 && $data.hasAddressErrors }]
              }, [
                createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.address")), 1),
                withDirectives(createVNode("input", {
                  class: "mb-10",
                  type: "text",
                  "onUpdate:modelValue": ($event) => $data.addressData.address_1 = $event,
                  placeholder: _ctx.$t("addressPopup.addressPlaceholder")
                }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                  [vModelText, $data.addressData.address_1]
                ]),
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => $data.addressData.address_2 = $event,
                  placeholder: _ctx.$t("addressPopup.addressPlaceholder")
                }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                  [vModelText, $data.addressData.address_2]
                ]),
                !$data.addressData.address_1 && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "error"
                }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.address") })), 1)) : createCommentVNode("", true)
              ], 2),
              createVNode("div", { class: "flex start mlr--5" }, [
                createVNode("div", {
                  class: ["input-wrap mlr-5", { invalid: !$data.addressData.city && $data.hasAddressErrors }]
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.city")), 1),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.addressData.city = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.addressData.city]
                  ]),
                  !$data.addressData.city && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "error"
                  }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.city") })), 1)) : createCommentVNode("", true)
                ], 2),
                createVNode("div", {
                  class: ["input-wrap mlr-5", { invalid: !$data.addressData.zip && $data.hasAddressErrors }]
                }, [
                  createVNode("label", null, toDisplayString(_ctx.$t("addressPopup.zipCode")), 1),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.addressData.zip = $event
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.addressData.zip]
                  ]),
                  !$data.addressData.zip && $data.hasAddressErrors ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "error"
                  }, toDisplayString(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.zipCode") })), 1)) : createCommentVNode("", true)
                ], 2)
              ])
            ])
          ];
        }
      }),
      "pop-footer": withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="flex j-end gap-10"${_scopeId}><button class="outline-btn plr-30 plr-sm-15"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.cancel"))}</button>`);
          _push2(ssrRenderComponent(_component_ajax_button, {
            class: "primary-btn plr-30 plr-sm-15",
            "fetching-data": $data.submittingAddressData,
            "loading-text": _ctx.$t("addressPopup.saving"),
            text: _ctx.$t("addressPopup.thisAddress", { type: $options.editing > 0 ? _ctx.$t("addressPopup.update") : _ctx.$t("addressPopup.save") })
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", { class: "flex j-end gap-10" }, [
              createVNode("button", {
                class: "outline-btn plr-30 plr-sm-15",
                onClick: withModifiers(($event) => _ctx.$emit("close"), ["prevent"])
              }, toDisplayString(_ctx.$t("addressPopup.cancel")), 9, ["onClick"]),
              createVNode(_component_ajax_button, {
                class: "primary-btn plr-30 plr-sm-15",
                "fetching-data": $data.submittingAddressData,
                "loading-text": _ctx.$t("addressPopup.saving"),
                text: _ctx.$t("addressPopup.thisAddress", { type: $options.editing > 0 ? _ctx.$t("addressPopup.update") : _ctx.$t("addressPopup.save") })
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
  _push(`</form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddressPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=AddressPopup-B1XjXnqS.mjs.map

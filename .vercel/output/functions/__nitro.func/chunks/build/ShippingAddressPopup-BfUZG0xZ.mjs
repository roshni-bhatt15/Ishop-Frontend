import __nuxt_component_0 from './Dropdown-CUjYMb0K.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import PopOver from './PopOver-CEd84c-C.mjs';
import { a as addressHelper } from './addressHelper-BBaujjhf.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { j as _export_sfc, a as useCommonStore, u as useLanguageStore } from './server.mjs';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
    const commonStore = useCommonStore();
    const { location } = storeToRefs(commonStore);
    const { fetchLocation, setToastMessage, setToastError, unAuthGet } = commonStore;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const userStore = useUserStore();
    const { userAddressAction, getUserToken } = userStore;
    const { profile } = storeToRefs(userStore);
    return {
      countryList,
      phoneList,
      langCode,
      setCountryList,
      location,
      unAuthGet,
      fetchLocation,
      setToastMessage,
      setToastError,
      setPhoneList,
      userAddressAction,
      profile,
      getUserToken
    };
  },
  name: "ShippingAddressPopup",
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
    Spinner: __nuxt_component_1,
    AjaxButton: _sfc_main$1,
    PopOver,
    Dropdown: __nuxt_component_0
  },
  computed: {
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
      await this.addressAction();
      if (!this.hasAddressErrors) {
        this.$emit("close");
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
  created() {
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
  const _component_dropdown = __nuxt_component_0;
  const _component_ajax_button = _sfc_main$1;
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "address-form" }, _attrs))}>`);
  if ($setup.countryList) {
    _push(`<div class="input-wrap"><label>${ssrInterpolate(_ctx.$t("addressPopup.country"))}</label>`);
    _push(ssrRenderComponent(_component_dropdown, {
      "selected-key": $data.addressData.country,
      options: $setup.countryList,
      "key-name": "name",
      searching: true,
      onClicked: _ctx.selectCountry
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ invalid: !$options.emailValid && $data.hasAddressErrors }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.email"))}</label><div class="icon-input"><i class="icon email-icon"></i><input type="text"${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("contact.email") }))}${ssrRenderAttr("value", $data.addressData.email)}></div>`);
  if (!$data.addressData.email && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.email") }))}</span>`);
  } else if ($options.invalidEmail && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("contact.invalidEmail"))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex"><div class="${ssrRenderClass([{ invalid: !$data.addressData.name && $data.hasAddressErrors }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.name"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.name)}>`);
  if (!$data.addressData.name && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.name") }))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($setup.phoneList) {
    _push(`<div class="${ssrRenderClass([{ invalid: !$data.addressData.phone && $data.hasAddressErrors }, "input-wrap"])}"><label>\xA0</label><div class="input-text"><span>${ssrInterpolate($setup.phoneList[$data.addressData.country])}</span><input type="text"${ssrRenderAttr("value", $data.addressData.phone)}></div>`);
    if (!$data.addressData.phone && $data.hasAddressErrors) {
      _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.phone") }))}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ invalid: !$data.addressData.address_1 && $data.hasAddressErrors }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.address"))}</label><input class="mb-10" type="text"${ssrRenderAttr("value", $data.addressData.address_1)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.addressPlaceholder"))}><input type="text"${ssrRenderAttr("value", $data.addressData.address_2)}${ssrRenderAttr("placeholder", _ctx.$t("addressPopup.address2Placeholder"))}>`);
  if (!$data.addressData.address_1 && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.address") }))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex block-xxs"><div class="${ssrRenderClass([{ invalid: !$data.addressData.city && $data.hasAddressErrors }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.city"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.city)}>`);
  if (!$data.addressData.city && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.city") }))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([{ invalid: !$data.addressData.zip && $data.hasAddressErrors }, "input-wrap"])}"><label>${ssrInterpolate(_ctx.$t("addressPopup.zipCode"))}</label><input type="text"${ssrRenderAttr("value", $data.addressData.zip)}>`);
  if (!$data.addressData.zip && $data.hasAddressErrors) {
    _push(`<span class="error">${ssrInterpolate(_ctx.$t("addressPopup.isRequired", { type: _ctx.$t("addressPopup.zipCode") }))}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (Object.keys($data.states).length) {
    _push(`<div class="input-wrap"><label>${ssrInterpolate(_ctx.$t("addressPopup.state"))}</label>`);
    _push(ssrRenderComponent(_component_dropdown, {
      "selected-key": $data.addressData.state,
      options: $data.states,
      "key-name": "name",
      onClicked: _ctx.selectState
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="input-wrap"><label>${ssrInterpolate(_ctx.$t("shipping.instruction"))}</label><textarea>${ssrInterpolate($data.addressData.delivery_instruction)}</textarea></div><div class="flex start mlr-0 gap-10">`);
  if ($options.editing) {
    _push(`<button aria-label="submit" class="outline-btn plr-30 plr-sm-15">${ssrInterpolate(_ctx.$t("addressPopup.cancel"))}</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_ajax_button, {
    class: "primary-btn plr-30 plr-sm-15",
    "fetching-data": $data.submittingAddressData,
    "loading-text": _ctx.$t("addressPopup.saving"),
    text: _ctx.$t("addressPopup.thisAddress", { type: $options.editing > 0 ? _ctx.$t("addressPopup.update") : _ctx.$t("addressPopup.save") })
  }, null, _parent));
  _push(`</div></form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShippingAddressPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShippingAddressPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ShippingAddressPopup as default };
//# sourceMappingURL=ShippingAddressPopup-BfUZG0xZ.mjs.map

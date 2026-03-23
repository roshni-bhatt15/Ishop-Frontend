import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import { ref, toRefs, computed, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { u as useResourceStore } from './resource-Did0obd8.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { c as useI18n, i as useRoute, a as useCommonStore, f as useUtils, u as useLanguageStore, p as prepareGetUrl, s as showError } from './server.mjs';
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

function useAddressHelper({ submittingAddressData, hasAddressErrors, ajaxDeleting }) {
  const { t } = useI18n();
  const fetchingAddressData = ref(false);
  const resourceStore = useResourceStore();
  const { countryList } = storeToRefs(resourceStore);
  const route = useRoute();
  const commonStore = useCommonStore();
  const { postRequest, setToastMessage, setToastError, deleteRequest, getRequest } = commonStore;
  const userStore = useUserStore();
  const { getUserToken, updateAddress, setAllAddress } = userStore;
  const addressAction = async (addressData) => {
    var _a, _b, _c;
    if (addressData.value.email && addressData.value.city && addressData.value.phone && addressData.value.name && addressData.value.zip && addressData.value.country && addressData.value.address_1) {
      submittingAddressData.value = true;
      const data = await postRequest({
        api: "userAddressAction",
        params: {
          ...addressData.value,
          ...{
            user_token: await getUserToken()
          }
        }
      });
      if ((data == null ? void 0 : data.status) === 200) {
        hasAddressErrors.value = false;
        updateAddress(data == null ? void 0 : data.data);
        setToastMessage(data.message);
      } else if ((data == null ? void 0 : data.status) === 201) {
        setToastError((_b = (_a = data.data) == null ? void 0 : _a.form) == null ? void 0 : _b.join(", "));
      } else {
        showError({
          statusCode: 400,
          message: (_c = data.data) == null ? void 0 : _c.form[0]
        });
      }
      submittingAddressData.value = false;
    } else {
      hasAddressErrors.value = true;
    }
  };
  const deleteAddress = async (address) => {
    var _a, _b;
    if (confirm(t("cartProductTile.deleteAlert"))) {
      ajaxDeleting.value = address.id;
      const data = await deleteRequest({
        api: "userAddressDelete",
        params: `/${address.id}?${prepareGetUrl({
          user_token: await getUserToken()
        })}`
      });
      if ((data == null ? void 0 : data.status) === 200) {
        setToastMessage(data.message);
        await fetchingData();
      } else {
        setToastError((_b = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form) == null ? void 0 : _b.join(", "));
      }
      ajaxDeleting.value = 0;
    }
  };
  const formatAddress = (obj) => {
    let addArr = [];
    addArr.push(obj.address_1);
    if (obj.address_2) {
      addArr.push(obj.address_2);
    }
    addArr.push(obj.city + "-" + obj.zip);
    if (countryList.value[obj.country]) {
      const country = countryList.value[obj.country];
      if (country.states[obj.state]) {
        addArr.push(country.states[obj.state].name);
      }
      addArr.push(country.name);
    }
    return addArr.filter(function(el) {
      return el != null;
    }).join(", ");
  };
  const { getTimeZone } = useUtils();
  const fetchingData = async () => {
    var _a;
    fetchingAddressData.value = true;
    const data = await getRequest({
      api: "userAddressAll",
      params: `?${prepareGetUrl({
        time_zone: getTimeZone(),
        order_by: route.query.orderBy || "created_at",
        type: route.query.orderByType || "desc",
        page: route.query.page || 1,
        user_token: await getUserToken(),
        q: route.query.q || null
      })}`
    });
    if ((data == null ? void 0 : data.status) !== 200) {
      showError({
        statusCode: 400,
        message: (_a = data.data) == null ? void 0 : _a.form[0]
      });
    } else {
      setAllAddress(data == null ? void 0 : data.data);
    }
    fetchingAddressData.value = false;
  };
  return { formatAddress, addressAction, fetchingAddressData, deleteAddress, fetchingData };
}
const _sfc_main = {
  __name: "UserAddress",
  __ssrInlineRender: true,
  props: {
    hasRadio: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selected-address"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { hasRadio } = toRefs(props);
    const emit = __emit;
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const resourceStore = useResourceStore();
    const { countryList, phoneList } = storeToRefs(resourceStore);
    const { setCountryList, setPhoneList } = resourceStore;
    const userStore = useUserStore();
    const { getUserToken, setAllAddress } = userStore;
    const { allAddress } = storeToRefs(userStore);
    const commonStore = useCommonStore();
    const { setToastMessage, setToastError, unAuthGet, getRequest, postRequest, deleteRequest } = commonStore;
    const ajaxDeleting = ref(0);
    const selectedAddress = ref(-1);
    const selectedAddressObj = ref(null);
    const currentAddresses = computed(() => {
      var _a;
      return ((_a = allAddress.value) == null ? void 0 : _a.data) || [];
    });
    const route = useRoute();
    watch(selectedAddressObj, (value) => {
      var _a, _b;
      if (currentAddresses.value.length) {
        const countryName = (_a = countryList.value[value.country]) == null ? void 0 : _a.name;
        const stateName = value.state ? (_b = countryList.value[value.country].states[value.state]) == null ? void 0 : _b.name : "";
        emit("selected-address", { ...value, ...{ countryTitle: countryName, stateTitle: stateName } });
      } else {
        emit("selected-address", null);
      }
    });
    const fetchingAddressData = ref(false);
    watch(currentAddresses, (value) => {
      if (value.length) {
        if (hasRadio.value) {
          selectedAddress.value = 0;
          selectedAddressObj.value = value[selectedAddress.value];
        }
      } else {
        selectedAddress.value = -1;
        selectedAddressObj.value = null;
      }
    });
    watch(selectedAddress, (value) => {
      selectedAddressObj.value = currentAddresses.value[value];
    });
    const hasAddress = computed(() => {
      var _a, _b, _c;
      if ((_a = allAddress.value) == null ? void 0 : _a.data) {
        return !!((_c = (_b = allAddress.value) == null ? void 0 : _b.data) == null ? void 0 : _c.length);
      }
      return true;
    });
    const totalPage = computed(() => {
      var _a;
      return (_a = allAddress.value) == null ? void 0 : _a.last_page;
    });
    const addressPaginationRef = ref(null);
    const { fetchingData, formatAddress, deleteAddress } = useAddressHelper({ ajaxDeleting });
    watch(() => route.query, async () => {
      await fetchingData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_1;
      const _component_ajax_button = _sfc_main$1;
      const _component_pagination = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(fetchingAddressData)) {
        _push(`<div class="spinner-wrapper flex">`);
        _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(hasAddress)) {
        _push(`<div class="info-msg mb-20">${ssrInterpolate(_ctx.$t("userAddress.noAddress"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hasRadio)) {
        _push(`<div class="flex gap-20 align-initial wrap start"><!--[-->`);
        ssrRenderList(unref(currentAddresses), (value, key) => {
          var _a;
          _push(`<label class="${ssrRenderClass([{ active: unref(selectedAddress) === key }, "card p-15 address-card"])}"><input type="radio" name="user_address"${ssrRenderAttr("value", key)}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(selectedAddress), key)) ? " checked" : ""}><span class="flex gap-10 mb-10 align-initial sided address-title"><span class="block bold">${ssrInterpolate(value.name)}</span><span class="flex gap-10">`);
          _push(ssrRenderComponent(_component_ajax_button, {
            class: "outline-btn plr-10",
            type: "button",
            text: _ctx.$t("userAddress.edit"),
            color: "primary",
            onClicked: ($event) => _ctx.$emit("editing", value)
          }, null, _parent));
          _push(ssrRenderComponent(_component_ajax_button, {
            class: "outline-btn plr-10",
            type: "button",
            "fetching-data": unref(ajaxDeleting) === value.id,
            "loading-text": _ctx.$t("userAddress.deleting"),
            text: _ctx.$t("userAddress.delete"),
            color: "primary",
            onClicked: ($event) => unref(deleteAddress)(value)
          }, null, _parent));
          _push(`</span></span><span>${(_a = unref(formatAddress)(value)) != null ? _a : ""}</span><span class="block mt-5">tel: ${ssrInterpolate(value.phone)}</span></label>`);
        });
        _push(`<!--]--><button class="address-btn card" type="button"><span class="icon-wrap mb-10"><i class="icon plus-icon"></i></span> ${ssrInterpolate(_ctx.$t("addresses.addAddress"))}</button></div>`);
      } else {
        _push(`<div class="flex wrap start align-initial gap-10"><!--[-->`);
        ssrRenderList(unref(currentAddresses), (value, index) => {
          var _a;
          _push(`<div class="card p-20 mx-w-400x address-card"><span class="flex gap-10 sided mb-10 address-title"><span class="bold block">${ssrInterpolate(value.name)}</span><span class="flex gap-10">`);
          _push(ssrRenderComponent(_component_ajax_button, {
            class: "outline-btn plr-10",
            type: "button",
            text: _ctx.$t("userAddress.edit"),
            color: "primary",
            onClicked: ($event) => _ctx.$emit("editing", value)
          }, null, _parent));
          _push(ssrRenderComponent(_component_ajax_button, {
            class: "outline-btn plr-10",
            type: "button",
            "fetching-data": unref(ajaxDeleting) === value.id,
            "loading-text": _ctx.$t("userAddress.deleting"),
            text: _ctx.$t("userAddress.delete"),
            color: "primary",
            onClicked: ($event) => unref(deleteAddress)(value)
          }, null, _parent));
          _push(`</span></span><span>${(_a = unref(formatAddress)(value)) != null ? _a : ""}</span><span class="block mt-5">tel: ${ssrInterpolate(value.phone)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_pagination, {
        ref_key: "addressPaginationRef",
        ref: addressPaginationRef,
        "total-page": unref(totalPage)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useAddressHelper as u };
//# sourceMappingURL=UserAddress-DLDK1urt.mjs.map

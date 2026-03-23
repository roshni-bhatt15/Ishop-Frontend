import __nuxt_component_0 from './AccountLayout-CBcflmtQ.mjs';
import __nuxt_component_1 from './AddressPopup-B1XjXnqS.mjs';
import { _ as _sfc_main$1 } from './UserAddress-DLDK1urt.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, Transition, createBlock, createCommentVNode, openBlock, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as useCommonStore, d as useHead } from './server.mjs';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { storeToRefs } from 'pinia';
import './Spinner-CfK0SFd4.mjs';
import './PopOver-CEd84c-C.mjs';
import './Dropdown-CUjYMb0K.mjs';
import './AjaxButton-DzViXcHL.mjs';
import './util-D0P5KPFP.mjs';
import './validation-Cjx0gTHd.mjs';
import './addressHelper-BBaujjhf.mjs';
import './user-DM1LUZx7.mjs';
import './resource-Did0obd8.mjs';
import './Pagination-1kX6F26r.mjs';
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
  __name: "addresses",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { currencyIcon, setting, customScripts, site_setting } = storeToRefs(commonStore);
    const { fetchLocation, setToastMessage, setToastError, postRequest, getRequest } = commonStore;
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const userAddressRef = ref(null);
    const editingAddress = ref(null);
    const showAddressPopup = ref(false);
    const loadData = () => {
      userAddressRef.value.loadData();
    };
    const closingPopup = () => {
      showAddressPopup.value = false;
    };
    const adding = () => {
      showAddressPopup.value = true;
      editingAddress.value = null;
    };
    const editing = (value) => {
      editingAddress.value = value;
      showAddressPopup.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_account_layout = __nuxt_component_0;
      const _component_address_popup = __nuxt_component_1;
      const _component_user_address = _sfc_main$1;
      _push(ssrRenderComponent(_component_account_layout, mergeProps({
        "active-route": "addresses",
        onClickedAddresses: loadData,
        class: "mb-5"
      }, _attrs), {
        rightArea: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (unref(showAddressPopup)) {
              _push2(ssrRenderComponent(_component_address_popup, {
                address: unref(editingAddress),
                onClose: closingPopup
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button aria-label="submit" class="primary-btn plr-20 mb-15"${_scopeId}>${ssrInterpolate(_ctx.$t("addresses.addAddress"))}</button>`);
            _push2(ssrRenderComponent(_component_user_address, {
              ref_key: "userAddressRef",
              ref: userAddressRef,
              onEditing: editing
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(Transition, {
                  name: "fade",
                  mode: "out-in"
                }, {
                  default: withCtx(() => [
                    unref(showAddressPopup) ? (openBlock(), createBlock(_component_address_popup, {
                      key: 0,
                      address: unref(editingAddress),
                      onClose: closingPopup
                    }, null, 8, ["address"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode("button", {
                  "aria-label": "submit",
                  class: "primary-btn plr-20 mb-15",
                  onClick: withModifiers(adding, ["prevent"])
                }, toDisplayString(_ctx.$t("addresses.addAddress")), 1),
                createVNode(_component_user_address, {
                  ref_key: "userAddressRef",
                  ref: userAddressRef,
                  onEditing: editing
                }, null, 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/addresses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=addresses-DPgXqZq6.mjs.map

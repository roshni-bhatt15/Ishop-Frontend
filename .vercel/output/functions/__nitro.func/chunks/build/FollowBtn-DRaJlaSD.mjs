import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { toRefs, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useCommonStore, b as useAuthStore, c as useI18n, q as navigateTo } from './server.mjs';
import { storeToRefs } from 'pinia';
import './Spinner-CfK0SFd4.mjs';
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
  __name: "FollowBtn",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: ""
    },
    storeId: {
      required: true
    },
    following: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change-following"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { color, storeId, following } = toRefs(props);
    const commonStore = useCommonStore();
    const { postRequest } = commonStore;
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    const { t } = useI18n();
    const followingText = computed(() => {
      return following.value ? t("store.following") : t("store.follow");
    });
    const ajaxing = ref(false);
    const followStore = async () => {
      if (!authenticated.value) {
        return navigateTo("/login");
      }
      ajaxing.value = true;
      const data = await postRequest({
        params: {
          store_id: storeId.value
        },
        api: "followStore"
      });
      ajaxing.value = false;
      if (data.status === 200) {
        emit("change-following");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ajax_button = _sfc_main$1;
      _push(ssrRenderComponent(_component_ajax_button, mergeProps({
        class: { "following": unref(following) },
        type: "button",
        color: unref(color),
        "loading-text": " ",
        "fetching-data": unref(ajaxing),
        text: followingText.value,
        onClicked: followStore
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FollowBtn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=FollowBtn-DRaJlaSD.mjs.map

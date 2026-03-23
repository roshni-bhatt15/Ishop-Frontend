import { b as useAuthStore, a as useCommonStore, d as useHead, u as useLanguageStore, c as useI18n, _ as __nuxt_component_0$2 } from './server.mjs';
import { ref, watch, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { u as useCartStore } from './cart-BePPNdc0.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { u as useValidationHelper } from './useValidationHelper-CV8fh1WP.mjs';
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
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const { updateUserPassword, setProfile } = userStore;
    const authStore = useAuthStore();
    const { logUserOut } = authStore;
    const cartStore = useCartStore();
    const { emptyCartProduct } = cartStore;
    const commonStore = useCommonStore();
    const { setToastMessage, setToastError, deleteRequest, postRequest, bgGetRequest } = commonStore;
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const { t } = useI18n();
    const name = ref("");
    const email = ref("");
    ref("");
    ref([]);
    const newPassword = ref("");
    ref("");
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    ref(false);
    watch(profile, (value) => {
      if (value) {
        email.value = value == null ? void 0 : value.email;
        name.value = value == null ? void 0 : value.name;
      }
    });
    const loggedInWithGoogle = computed(() => {
      var _a;
      return (_a = profile.value) == null ? void 0 : _a.google_id;
    });
    const loggedInWithFacebook = computed(() => {
      var _a;
      return (_a = profile.value) == null ? void 0 : _a.facebook_id;
    });
    computed(() => {
      var _a, _b;
      return !((_a = profile.value) == null ? void 0 : _a.facebook_id) && !((_b = profile.value) == null ? void 0 : _b.google_id);
    });
    computed(() => {
      if (profile.value) {
        if (loggedInWithGoogle.value) {
          return t("profile.google");
        } else if (loggedInWithFacebook.value) {
          return t("profile.facebook");
        } else {
          return t("addressPopup.email");
        }
      }
    });
    const { isValidLength } = useValidationHelper();
    const invalidPassword = computed(() => {
      return !isValidLength(newPassword.value);
    });
    computed(() => {
      return newPassword.value && !invalidPassword.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profile-HGXBwh-O.mjs.map

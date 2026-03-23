import { a as useCommonStore, b as useAuthStore, i as useRoute, _ as __nuxt_component_0$2 } from './server.mjs';
import { computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
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
  __name: "social-callback",
  __ssrInlineRender: true,
  setup(__props) {
    const commonStore = useCommonStore();
    const { customScripts } = storeToRefs(commonStore);
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const { setProfile } = userStore;
    const authStore = useAuthStore();
    const { setToken } = authStore;
    const route = useRoute();
    computed(() => {
      return route.query.error || null;
    });
    computed(() => {
      return route.query.id || null;
    });
    computed(() => {
      return route.query.name || null;
    });
    computed(() => {
      return route.query.email || null;
    });
    computed(() => {
      return route.query.token || null;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/social-callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=social-callback-f2Dn04Fo.mjs.map

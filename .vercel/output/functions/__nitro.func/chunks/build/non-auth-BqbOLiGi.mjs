import { t as defineNuxtRouteMiddleware, b as useAuthStore, v as useCookie, w as useRuntimeConfig, q as navigateTo } from './server.mjs';
import { storeToRefs } from 'pinia';
import 'vue';
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
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'vue-dompurify-html';

const nonAuth = defineNuxtRouteMiddleware((to) => {
  const { authenticated, token } = storeToRefs(useAuthStore());
  const config = useRuntimeConfig();
  const tkn = useCookie(config.public.auth_token_key);
  if (tkn == null ? void 0 : tkn.value) {
    authenticated.value = true;
    token.value = tkn.value;
    return navigateTo("/");
  }
});

export { nonAuth as default };
//# sourceMappingURL=non-auth-BqbOLiGi.mjs.map

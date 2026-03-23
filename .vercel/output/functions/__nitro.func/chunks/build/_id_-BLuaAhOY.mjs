import { j as _export_sfc, _ as __nuxt_component_0$2, a as useCommonStore, d as useHead } from './server.mjs';
import { g as global } from './global-jh2fF79e.mjs';
import { storeToRefs } from 'pinia';
import { u as useMetaData } from './useMetaData-CbIQ9tQq.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
    const commonStore = useCommonStore();
    const { setToastMessage, setToastError, getRequest } = commonStore;
    const { customScripts, site_setting } = storeToRefs(commonStore);
    const { pageMeta } = useMetaData();
    useHead(pageMeta(site_setting.value));
    return { setToastMessage, setToastError, getRequest, customScripts };
  },
  mixins: [global],
  computed: {
    orderId() {
      return parseInt(this.$route.params.id);
    }
  },
  async mounted() {
    this.setToastMessage(this.$t("invent.pc"));
    this.$router.push(`/user/order/${this.orderId}`);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payfast/cancel/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BLuaAhOY.mjs.map

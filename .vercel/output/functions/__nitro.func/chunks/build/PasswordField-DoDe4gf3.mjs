import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderClass } from 'vue/server-renderer';
import { j as _export_sfc } from './server.mjs';
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
import 'pinia';
import 'vue-router';
import 'vue-dompurify-html';

const _sfc_main = {
  setup(props, { emit }) {
    const password = ref("");
    const passwordChange = () => {
      emit("on-change", password.value);
    };
    return { password, passwordChange };
  },
  name: "PasswordField",
  data() {
    return {
      passwordFieldType: "password"
    };
  },
  props: {
    isInvalid: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  mixins: [],
  components: {},
  computed: {
    isPasswordTypePassword() {
      return this.passwordFieldType === "password";
    }
  },
  methods: {
    passwordFieldToggle() {
      if (this.isPasswordTypePassword) {
        this.passwordFieldType = "text";
      } else {
        this.passwordFieldType = "password";
      }
    }
  },
  mounted() {
    this.password = this.value;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon-input right-icon" }, _attrs))}><i class="icon lock-icon"></i><input${ssrRenderAttr("type", $data.passwordFieldType)}${ssrRenderAttr("placeholder", _ctx.$t("contact.your", { type: _ctx.$t("login.password") }))}${ssrRenderDynamicModel($data.passwordFieldType, $setup.password, null)} class="${ssrRenderClass({ invalid: !!!$setup.password || $props.isInvalid })}"><i class="${ssrRenderClass([!$options.isPasswordTypePassword ? "eye-icon" : "eye-close-icon", "icon"])}"></i></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PasswordField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=PasswordField-DoDe4gf3.mjs.map

import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import { toRefs, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { c as useI18n } from './server.mjs';
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
  __name: "AjaxButton",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: null
    },
    loadingText: {
      type: String,
      default: null
    },
    fetchingData: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "Submit"
    }
  },
  emits: ["clicked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const { color, text, loadingText, fetchingData, disabled, type } = toRefs(props);
    const buttonText = computed(() => {
      return text.value || t("ajaxButton.submit");
    });
    const propLoadingText = computed(() => {
      return loadingText.value || t("ajaxButton.gettingResponse");
    });
    const disable = computed(() => {
      return fetchingData.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_1;
      if (unref(type) === "Submit") {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "ajax-btn",
          "aria-label": unref(buttonText),
          disabled: unref(disable) || unref(disabled),
          type: unref(type)
        }, _attrs))}>`);
        if (unref(fetchingData)) {
          _push(ssrRenderComponent(_component_spinner, {
            color: unref(color),
            class: "mr-15"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(unref(buttonText))}</button>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          class: "ajax-btn",
          disabled: unref(disable) || unref(disabled),
          type: unref(type),
          "aria-label": unref(buttonText)
        }, _attrs))}>`);
        if (unref(fetchingData)) {
          _push(ssrRenderComponent(_component_spinner, { color: unref(color) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(propLoadingText) && unref(fetchingData)) {
          _push(`<span class="ml-15">${ssrInterpolate(unref(propLoadingText))}</span>`);
        } else if (!unref(fetchingData)) {
          _push(`<span>${ssrInterpolate(unref(buttonText))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AjaxButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AjaxButton-DzViXcHL.mjs.map

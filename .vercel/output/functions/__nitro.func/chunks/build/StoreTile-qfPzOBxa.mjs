import { j as _export_sfc, h as __nuxt_component_0$1 } from './server.mjs';
import moment from 'moment';
import { u as util } from './util-D0P5KPFP.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import _sfc_main$2 from './FollowBtn-DRaJlaSD.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
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
import './Spinner-CfK0SFd4.mjs';

const _sfc_main = {
  name: "StoreTile",
  data() {
    return {
      ajaxing: false
    };
  },
  components: {
    FollowBtn: _sfc_main$2,
    AjaxButton: _sfc_main$1
  },
  props: {
    store: {
      type: Object
    }
  },
  mixins: [util],
  computed: {
    storeName() {
      var _a;
      return (_a = this.store) == null ? void 0 : _a.name;
    },
    storeDate() {
      var _a;
      return moment((_a = this.store) == null ? void 0 : _a.created_at).format("MMM DD, YYYY");
    }
  },
  methods: {},
  async mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "store-info" }, _attrs))}><div class="btn-wrap"><div class="w-100"><p class="store-name">${ssrInterpolate($options.storeName)}</p><h6 class="store-date">${ssrInterpolate(_ctx.$t("store.memberSince"))} <b class="block">${ssrInterpolate($options.storeDate)}</b></h6></div><div class="action-btn">`);
  ssrRenderSlot(_ctx.$slots, "followBtn", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "visit-btn ajax-btn",
    to: _ctx.storeLink($props.store)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("store.visitStore"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("store.visitStore")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StoreTile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=StoreTile-qfPzOBxa.mjs.map

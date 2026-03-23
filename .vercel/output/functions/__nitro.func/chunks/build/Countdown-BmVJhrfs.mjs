import moment from 'moment-timezone';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main = {
  name: "Countdown",
  data() {
    return {
      days: 0,
      date: moment(0),
      intervalHandler: null
    };
  },
  props: {
    endTime: {
      type: String,
      required: ""
    },
    timeZone: {
      type: String,
      default: ""
    }
  },
  computed: {
    formattedTime() {
      return Math.floor(this.days) + ":" + moment.utc(this.date).format("HH:mm:ss");
    }
  },
  mounted() {
    let now = moment();
    if (this.timeZone) {
      now = moment(moment().tz(this.timeZone));
    }
    const then = moment(moment.utc(this.endTime)).local();
    this.date = then.diff(now, "milliseconds");
    var duration = moment.duration(this.date, "milliseconds");
    this.days = duration.asDays();
    this.intervalHandler = setInterval();
  },
  unmounted() {
    clearInterval(this.intervalHandler);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h5${ssrRenderAttrs(_attrs)}>${ssrInterpolate($options.formattedTime)}</h5>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Countdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_5 as default };
//# sourceMappingURL=Countdown-BmVJhrfs.mjs.map

import { toRefs, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "ImageSlider2",
  __ssrInlineRender: true,
  props: {
    activeSlide: { type: Number, default: 0 },
    imageCount: { type: Number, default: 0 },
    perView: { type: Number, default: 1 },
    responsive: { type: Array, default: [1, 1, 1, 1, 1] },
    gap: { type: Number, default: 1 },
    loop: { type: Boolean, default: false },
    bullets: { type: Boolean, default: false },
    autoplay: { type: Number, default: 0 },
    lazyImage: { type: Boolean, default: false }
  },
  emits: ["glide", "loaded", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { activeSlide, imageCount, perView, responsive, gap, loop, bullets, autoplay, lazyImage } = toRefs(props);
    const glideEl = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "glide",
        ref_key: "glideEl",
        ref: glideEl
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "bullet-area", {}, () => {
        if (unref(bullets)) {
          _push(`<ul class="glide-bullets" data-glide-el="controls[nav]"><!--[-->`);
          ssrRenderList(unref(imageCount), (index) => {
            _push(`<li${ssrRenderAttr("data-glide-dir", `=${index - 1}`)}></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div data-glide-el="controls" class="glide-nav"><button aria-label="prev" class="prev-btn" data-glide-dir="&lt;"><i class="m-0 icon arrow-left"></i></button><button class="next-btn" aria-label="next" data-glide-dir="&gt;"><i class="m-0 icon arrow-right"></i></button></div><div data-glide-el="track" class="glide__track"><ul class="glide__slides">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageSlider2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ImageSlider2-Cjhfa-J_.mjs.map

import { toRefs, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import emblaCarouselVue from 'embla-carousel-vue';

const _sfc_main = {
  __name: "ImageSlider",
  __ssrInlineRender: true,
  props: {
    activeSlide: { type: Number, default: 0 },
    imageCount: { type: Number, default: 0 },
    perView: { type: Number, default: 1 },
    gap: { type: Number, default: 1 },
    loop: { type: Boolean, default: false },
    bullets: { type: Boolean, default: false },
    autoplay: { type: Number, default: 0 },
    lazy: { type: Boolean, default: false },
    addInitEvt: { type: Boolean, default: false }
  },
  emits: ["on-init", "on-change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { activeSlide, imageCount, perView, gap, loop, bullets, autoplay, lazy, addInitEvt } = toRefs(props);
    const activation = ref({
      prev: false,
      next: false
    });
    const options = { loop: loop.value, slidesToScroll: "auto", duration: 15, containScroll: false };
    const [emblaRef, emblaApi] = emblaCarouselVue(options);
    const [emblaThumbRef, emblaThumbsApi] = emblaCarouselVue({
      containScroll: "keepSnaps",
      dragFree: false
    });
    const onThumbClick = async (index) => {
      if (!emblaApi.value) return;
      emblaApi.value.scrollTo(index);
    };
    __expose({ onThumbClick });
    const onActivation = () => {
      activation.value = {
        next: emblaApi == null ? void 0 : emblaApi.value.canScrollNext(),
        prev: emblaApi == null ? void 0 : emblaApi.value.canScrollPrev()
      };
    };
    const onSlidesInView = () => {
      const slidersInView = emblaApi.value.selectedScrollSnap();
      emit("on-change", { index: slidersInView });
    };
    watch(emblaApi, (api) => {
      if (!api) return;
      if (addInitEvt.value) {
        emit("on-init", true);
      }
      onActivation();
      api.on("reInit", onActivation);
      if (lazy.value) {
        api.on("select", onSlidesInView);
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "embla glide slider-wrapper" }, _attrs))}><div class="embla__viewport"><ul class="embla__container">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</ul></div><div class="embla__buttons glide-nav"><button class="${ssrRenderClass([!unref(activation).prev && "disabled", "prev-btn"])}"><i class="m-0 icon arrow-left"></i></button><button class="${ssrRenderClass([!unref(activation).next && "disabled", "next-btn"])}"><i class="m-0 icon arrow-right"></i></button></div>`);
      if (unref(bullets)) {
        _push(`<div class="embla-thumbs thumb-wrapper">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
        _push(`<div class="embla-thumbs__viewport"><div class="embla-thumbs__container flex start wrap">`);
        ssrRenderSlot(_ctx.$slots, "bullet-area", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ImageSlider-ByQM7FE3.mjs.map

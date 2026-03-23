import _sfc_main$1 from './ImageZoom-DPoiLqVR.mjs';
import _sfc_main$2 from './ImageSlider-ByQM7FE3.mjs';
import _sfc_main$3 from './ImageLazy-C91HtcbD.mjs';
import _sfc_main$4 from './ImagePopup-B797CJ91.mjs';
import { toRefs, ref, computed, mergeProps, unref, withCtx, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { f as useUtils } from './server.mjs';
import 'embla-carousel-vue';
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
import './PopOver-CEd84c-C.mjs';
import './SocialShare-CVzFsphV.mjs';
import './user-DM1LUZx7.mjs';
import './useSliderHelper-C7WfA-Bc.mjs';

const _sfc_main = {
  __name: "ProductImages",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object
    },
    images: {
      type: Array,
      default() {
        return [];
      }
    },
    mainImage: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["image-popup"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { product, images, mainImage, title } = toRefs(props);
    const emit = __emit;
    const imagePopupRef = ref(null);
    const callChildMethod = (index) => {
      if (imagePopupRef.value) {
        imagePopupRef.value.selectSliderImage(index);
      }
    };
    const mainImgLoaded = ref(false);
    ref(false);
    ref(true);
    const sliderMessage = ref(false);
    const activeId = ref(0);
    const activeIndex = ref(0);
    const imagePopup = ref(false);
    const selectedImage = computed(() => {
      var _a;
      return ((_a = productImageList.value[activeIndex.value]) == null ? void 0 : _a.image) || mainImage.value;
    });
    const productImageList = computed(() => {
      return [{ image: mainImage.value }, ...images.value];
    });
    const videoThumb = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.video_thumb) || "";
    });
    const isSmallerDevice = computed(() => {
      return (void 0).innerWidth <= 992;
    });
    const { getThumbImageURL, getImageURL } = useUtils();
    const setIndex = (index) => {
      activeIndex.value = index;
    };
    const closePopup = () => {
      if (!isSmallerDevice.value) {
        imagePopup.value = false;
      }
      emit("image-popup", imagePopup.value);
    };
    const zoomActiveChange = (index) => {
      callChildMethod(index);
      activeIndex.value = index;
    };
    __expose({ zoomActiveChange });
    const imagePopupOpen = async (index) => {
      imagePopup.value = true;
      setTimeout(() => {
        callChildMethod(index || activeIndex.value);
      }, 100);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageZoom = _sfc_main$1;
      const _component_ImageSlider = _sfc_main$2;
      const _component_ImageLazy = _sfc_main$3;
      const _component_ImagePopup = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-image shimmer-wrapper" }, _attrs))}>`);
      if (mainImgLoaded.value) {
        _push(`<!--[--><div class="hide-md mx-h-100">`);
        _push(ssrRenderComponent(_component_ImageZoom, {
          image: unref(getThumbImageURL)(unref(selectedImage)),
          "zoom-image": unref(getImageURL)(unref(selectedImage)),
          onClick: ($event) => imagePopupOpen()
        }, null, _parent));
        _push(ssrRenderComponent(_component_ImageSlider, { class: "thumb-slider" }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productImageList), (value, index) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ImageLazy, {
                  class: [activeIndex.value === index ? "choosed-thumb" : "", "responsive-image"],
                  "lazy-src": unref(getThumbImageURL)(value.image),
                  onMouseover: ($event) => setIndex(index)
                }, null, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]-->`);
              if (unref(videoThumb)) {
                _push2(`<li class="video-thumb"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_ImageLazy, {
                  class: [activeIndex.value === unref(productImageList).length ? "choosed-thumb" : "", "responsive-image"],
                  "lazy-src": unref(getImageURL)(unref(videoThumb))
                }, null, _parent2, _scopeId));
                _push2(`<span class="flex"${_scopeId}><i class="icon play-icon"${_scopeId}></i></span></li>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productImageList), (value, index) => {
                  return openBlock(), createBlock("li", {
                    key: index,
                    onClick: withModifiers(($event) => imagePopupOpen(index), ["prevent"])
                  }, [
                    createVNode(_component_ImageLazy, {
                      class: [activeIndex.value === index ? "choosed-thumb" : "", "responsive-image"],
                      "lazy-src": unref(getThumbImageURL)(value.image),
                      onMouseover: ($event) => setIndex(index)
                    }, null, 8, ["class", "lazy-src", "onMouseover"])
                  ], 8, ["onClick"]);
                }), 128)),
                unref(videoThumb) ? (openBlock(), createBlock("li", {
                  key: 0,
                  class: "video-thumb",
                  onClick: withModifiers(($event) => imagePopupOpen(unref(productImageList).length), ["prevent"])
                }, [
                  createVNode(_component_ImageLazy, {
                    class: [activeIndex.value === unref(productImageList).length ? "choosed-thumb" : "", "responsive-image"],
                    "lazy-src": unref(getImageURL)(unref(videoThumb))
                  }, null, 8, ["class", "lazy-src"]),
                  createVNode("span", { class: "flex" }, [
                    createVNode("i", { class: "icon play-icon" })
                  ])
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (imagePopup.value) {
          _push(ssrRenderComponent(_component_ImagePopup, {
            ref_key: "imagePopupRef",
            ref: imagePopupRef,
            title: unref(title),
            product: unref(product),
            "active-id": activeId.value,
            "no-scroll": !unref(isSmallerDevice),
            "image-list": unref(productImageList),
            "stacked-on-responsive": true,
            onClosePopup: closePopup,
            onAddToWishlist: ($event) => _ctx.$emit("add-to-wishlist")
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="mt-5 pb-15 center-text lh-30 hide-md">`);
        if (!sliderMessage.value) {
          _push(`<span>${ssrInterpolate(_ctx.$t("productImage.rollOver"))}</span>`);
        } else {
          _push(`<span>${ssrInterpolate(_ctx.$t("productImage.extendedView"))}</span>`);
        }
        _push(`</p><!--]-->`);
      } else {
        _push(`<!--[--><div class="pleceholder-zoomer-base-container center-text"><img class="preload-img"${ssrRenderAttr("src", unref(getThumbImageURL)(unref(mainImage)))}${ssrRenderAttr("alt", unref(title))} height="100" width="100"></div><div class="pleceholder-thumb-list"><div class="responsive-image shimmer"></div><div class="responsive-image shimmer"></div><div class="responsive-image shimmer"></div></div><!--]-->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProductImages-mymLTfsU.mjs.map

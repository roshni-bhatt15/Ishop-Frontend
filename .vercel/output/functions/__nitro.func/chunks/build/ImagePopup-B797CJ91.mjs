import PopOver from './PopOver-CEd84c-C.mjs';
import _sfc_main$1 from './SocialShare-CVzFsphV.mjs';
import _sfc_main$2 from './ImageSlider-ByQM7FE3.mjs';
import { toRefs, ref, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { f as useUtils } from './server.mjs';
import { u as useSliderHelper } from './useSliderHelper-C7WfA-Bc.mjs';
import { storeToRefs } from 'pinia';
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
import 'embla-carousel-vue';

const _sfc_main = {
  __name: "ImagePopup",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object
    },
    title: {
      type: String,
      default: ""
    },
    activeId: {
      type: Number,
      default: 1
    },
    imageList: {
      type: Array,
      default() {
        return [];
      }
    },
    noScroll: {
      type: Boolean,
      default: true
    },
    stackedOnResponsive: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close-popup", "add-to-wishlist"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { product, imageList, noScroll } = toRefs(props);
    const productSliderRef = ref(null);
    const userStore = useUserStore();
    const { profile } = storeToRefs(userStore);
    const selectSliderImage = (index) => {
      if (productSliderRef.value) {
        productSliderRef.value.onThumbClick(index);
      }
    };
    __expose({ selectSliderImage });
    const activeSlide = ref(0);
    const sharePopOver = ref(false);
    const sliderLoaded = ref(false);
    const { getThumbImageURL, getImageURL, getVideoURL } = useUtils();
    const { onChange, onFirstImageLoad } = useSliderHelper(activeSlide, sliderLoaded);
    computed(() => {
      if (video) {
        return imageList.value.length + 1;
      }
      return imageList.value.length;
    });
    const video = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.video) || "";
    });
    const videoThumb = computed(() => {
      var _a;
      return ((_a = product.value) == null ? void 0 : _a.video_thumb) || "";
    });
    const wishListed = computed(() => {
      var _a, _b;
      return ((_a = profile.value) == null ? void 0 : _a.id) && ((_b = product.value) == null ? void 0 : _b.wishlisted);
    });
    const isFavourited = computed(() => {
      return wishListed.value ? "heart-fill-icon" : "heart-icon";
    });
    const closePopOver = () => {
      sharePopOver.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_pop_over = PopOver;
      const _component_social_share = _sfc_main$1;
      const _component_image_slider = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ stacked: __props.stackedOnResponsive }, "image-popup-wrapper"]
      }, _attrs))}><div class="layer"></div>`);
      if (sharePopOver.value) {
        _push(ssrRenderComponent(_component_pop_over, {
          title: _ctx.$t("socialShare.share"),
          layer: true,
          onClose: closePopOver,
          "elem-id": "social-pop-over"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_social_share, { product: unref(product) }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_social_share, { product: unref(product) }, null, 8, ["product"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="image-popup">`);
      if (__props.stackedOnResponsive) {
        _push(`<div class="image-popup-icons"><button class="left-btn fav-btn"><i class="${ssrRenderClass([unref(isFavourited), "m-0 icon"])}"></i></button><button class="right-btn share-btn"><i class="m-0 icon share-icon"></i></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="right-btn close-btn"><i class="m-0 icon close-icon"></i></button>`);
      _push(ssrRenderComponent(_component_image_slider, {
        ref_key: "productSliderRef",
        ref: productSliderRef,
        class: "product-slider",
        addInitEvt: true,
        bullets: true,
        lazy: true,
        loop: true,
        onOnChange: (evt) => unref(onChange)(evt, "product-image"),
        onOnInit: ($event) => unref(onFirstImageLoad)(0, "product-image")
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imageList), (value, index) => {
              _push2(`<li${_scopeId}><img${ssrRenderAttr("id", `product-image-${index}`)} class="full-dimen opacity-0"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${ssrRenderAttr("data-src", unref(getImageURL)(value.image))}${_scopeId}></li>`);
            });
            _push2(`<!--]-->`);
            if (unref(video)) {
              _push2(`<li${_scopeId}><video preload="metadata"${ssrRenderAttr("src", unref(getVideoURL)(unref(video)))} controls${_scopeId}></video></li>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imageList), (value, index) => {
                return openBlock(), createBlock("li", { key: index }, [
                  createVNode("img", {
                    id: `product-image-${index}`,
                    class: "full-dimen opacity-0",
                    alt: _ctx.$t("invent.si"),
                    "data-src": unref(getImageURL)(value.image)
                  }, null, 8, ["id", "alt", "data-src"])
                ]);
              }), 128)),
              unref(video) ? (openBlock(), createBlock("li", { key: 0 }, [
                createVNode("video", {
                  preload: "metadata",
                  src: unref(getVideoURL)(unref(video)),
                  controls: ""
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h5 class="title mb-10"${_scopeId}>${ssrInterpolate(__props.title)}</h5>`);
          } else {
            return [
              createVNode("h5", { class: "title mb-10" }, toDisplayString(__props.title), 1)
            ];
          }
        }),
        "bullet-area": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imageList), (value, index) => {
              _push2(`<div class="${ssrRenderClass([index === activeSlide.value ? "active" : "", "embla-thumbs__slide"])}"${_scopeId}><img class="embla-thumbs__slide__number img-handler"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${ssrRenderAttr("src", unref(getThumbImageURL)(value.image))}${_scopeId}></div>`);
            });
            _push2(`<!--]-->`);
            if (unref(videoThumb)) {
              _push2(`<div class="${ssrRenderClass([unref(imageList).length === activeSlide.value ? "active" : "", "embla-thumbs__slide video-thumb"])}"${_scopeId}><img class="embla-thumbs__slide__number img-handler"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${ssrRenderAttr("src", unref(getImageURL)(unref(videoThumb)))}${_scopeId}><span class="flex"${_scopeId}><i class="icon play-icon"${_scopeId}></i></span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imageList), (value, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: ["embla-thumbs__slide", index === activeSlide.value ? "active" : ""],
                  onClick: ($event) => selectSliderImage(index)
                }, [
                  createVNode("img", {
                    class: "embla-thumbs__slide__number img-handler",
                    alt: _ctx.$t("invent.si"),
                    src: unref(getThumbImageURL)(value.image)
                  }, null, 8, ["alt", "src"])
                ], 10, ["onClick"]);
              }), 128)),
              unref(videoThumb) ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["embla-thumbs__slide video-thumb", unref(imageList).length === activeSlide.value ? "active" : ""],
                onClick: withModifiers(($event) => selectSliderImage(unref(imageList).length), ["prevent"])
              }, [
                createVNode("img", {
                  class: "embla-thumbs__slide__number img-handler",
                  alt: _ctx.$t("invent.si"),
                  src: unref(getImageURL)(unref(videoThumb))
                }, null, 8, ["alt", "src"]),
                createVNode("span", { class: "flex" }, [
                  createVNode("i", { class: "icon play-icon" })
                ])
              ], 10, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImagePopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ImagePopup-B797CJ91.mjs.map

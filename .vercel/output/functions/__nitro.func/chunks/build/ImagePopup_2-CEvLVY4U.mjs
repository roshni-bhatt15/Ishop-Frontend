import PopOver from './PopOver-CEd84c-C.mjs';
import _sfc_main$1 from './SocialShare-CVzFsphV.mjs';
import _sfc_main$3 from './ImageSlider-ByQM7FE3.mjs';
import _sfc_main$2 from './ImageLazy-C91HtcbD.mjs';
import { j as _export_sfc, r as outsideClick } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { resolveDirective, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import 'embla-carousel-vue';

const sliderHelper = {
  data() {
    return {
      sliderLoaded: false
    };
  },
  methods: {
    changed({ index }, id = "home-hero") {
      const self = this;
      const img = this.loadedImage(index, id);
      const setLoadingState = () => {
        img.style.opacity = 1;
      };
      img == null ? void 0 : img.addEventListener("load", setLoadingState);
      img == null ? void 0 : img.addEventListener("error", () => {
        img.style.opacity = 1;
        img.src = self == null ? void 0 : self.getImageURL();
      });
    },
    firstImgLoaded(index = 0, id = "home-hero") {
      const self = this;
      const img = this.loadedImage(index, id);
      const setLoadingState = () => {
        this.sliderLoaded = true;
        img.style.opacity = 1;
      };
      img == null ? void 0 : img.addEventListener("load", setLoadingState);
      img == null ? void 0 : img.addEventListener("error", () => {
        this.sliderLoaded = true;
        img.style.opacity = 1;
        img.src = self == null ? void 0 : self.getImageURL();
      });
    },
    loadedImage(index = 0, id = "home-hero") {
      const firstImg = (void 0).getElementById(`${id}-${index}`);
      firstImg == null ? void 0 : firstImg.setAttribute("src", firstImg == null ? void 0 : firstImg.getAttribute("data-src"));
      return firstImg;
    }
  }
};
const _sfc_main = {
  name: "ImagePopup",
  data() {
    return {
      sharePopOver: false,
      scrollPosition: 0
    };
  },
  components: {
    ImageSlider: _sfc_main$3,
    LazyImage: _sfc_main$2,
    SocialShare: _sfc_main$1,
    PopOver
  },
  directives: { outsideClick },
  mixins: [util, sliderHelper],
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
  computed: {
    imageCount() {
      if (this.video) {
        return this.imageList.length + 1;
      }
      return this.imageList.length;
    },
    video() {
      var _a;
      return ((_a = this.product) == null ? void 0 : _a.video) || "";
    },
    videoThumb() {
      var _a;
      return ((_a = this.product) == null ? void 0 : _a.video_thumb) || "";
    },
    wishListed() {
      var _a, _b;
      return ((_a = this.profile) == null ? void 0 : _a.id) && ((_b = this.product) == null ? void 0 : _b.wishlisted);
    },
    isFavourited() {
      return this.wishListed ? "heart-fill-icon" : "heart-icon";
    }
  },
  methods: {
    clickOnThumb(index) {
      var _a, _b;
      (_b = (_a = this.$refs) == null ? void 0 : _a.imageSlider) == null ? void 0 : _b.changeSlide(index);
    },
    closePopOver() {
      this.sharePopOver = false;
    },
    closePopup() {
      this.$emit("close-popup");
    }
  },
  mounted() {
    if (this.noScroll) {
      (void 0).body.classList.add("no-scroll");
    }
  },
  unmounted() {
    (void 0).body.classList.remove("no-scroll");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_social_share = _sfc_main$1;
  const _component_image_slider = _sfc_main$3;
  const _component_ImageLazy = _sfc_main$2;
  const _directive_outside_click = resolveDirective("outside-click");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [{ stacked: $props.stackedOnResponsive }, "image-popup-wrapper"]
  }, _attrs))}>`);
  if ($data.sharePopOver) {
    _push(ssrRenderComponent(_component_pop_over, {
      title: _ctx.$t("socialShare.share"),
      layer: true,
      onClose: $options.closePopOver,
      "elem-id": "social-pop-over"
    }, {
      content: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_social_share, { product: $props.product }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_social_share, { product: $props.product }, null, 8, ["product"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-popup" }, ssrGetDirectiveProps(_ctx, _directive_outside_click, $options.closePopup)))}>`);
  if ($props.stackedOnResponsive) {
    _push(`<div class="image-popup-icons"><button class="left-btn fav-btn"><i class="${ssrRenderClass([$options.isFavourited, "m-0 icon"])}"></i></button><button class="right-btn share-btn"><i class="m-0 icon share-icon"></i></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="right-btn close-btn"><i class="m-0 icon close-icon"></i></button>`);
  _push(ssrRenderComponent(_component_image_slider, {
    ref: "imageSlider",
    "active-slide": $props.activeId,
    "image-count": $options.imageCount,
    bullets: true,
    "lazy-image": true,
    onOnChange: _ctx.changed,
    onOnLoaded: _ctx.firstImgLoaded,
    class: "slider-wrapper"
  }, {
    "bullet-area": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="thumb-wrapper"${_scopeId}><h5 class="title mb-10"${_scopeId}>${ssrInterpolate($props.title)}</h5><div data-glide-el="controls[nav]" class="flex start wrap"${_scopeId}><!--[-->`);
        ssrRenderList($props.imageList, (value, index) => {
          _push2(ssrRenderComponent(_component_ImageLazy, {
            key: index,
            class: ["img-handler", { active: index === _ctx.currentSlider }],
            "lazy-src": _ctx.getThumbImageURL(value.image),
            "data-glide-dir": `=${index}`,
            height: "50",
            width: "50"
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
        if ($options.videoThumb) {
          _push2(`<div class="${ssrRenderClass([{ active: $props.imageList.length === _ctx.currentSlider }, "img-handler video-thumb"])}"${ssrRenderAttr("data-glide-dir", `=${$props.imageList.length}`)}${_scopeId}>`);
          _push2(ssrRenderComponent(_component_ImageLazy, {
            "lazy-src": _ctx.getImageURL($options.videoThumb),
            height: "50",
            width: "50"
          }, null, _parent2, _scopeId));
          _push2(`<span class="flex"${_scopeId}><i class="icon play-icon"${_scopeId}></i></span></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "thumb-wrapper" }, [
            createVNode("h5", { class: "title mb-10" }, toDisplayString($props.title), 1),
            createVNode("div", {
              "data-glide-el": "controls[nav]",
              class: "flex start wrap"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.imageList, (value, index) => {
                return openBlock(), createBlock(_component_ImageLazy, {
                  key: index,
                  class: ["img-handler", { active: index === _ctx.currentSlider }],
                  "lazy-src": _ctx.getThumbImageURL(value.image),
                  "data-glide-dir": `=${index}`,
                  height: "50",
                  width: "50"
                }, null, 8, ["lazy-src", "class", "data-glide-dir"]);
              }), 128)),
              $options.videoThumb ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["img-handler video-thumb", { active: $props.imageList.length === _ctx.currentSlider }],
                "data-glide-dir": `=${$props.imageList.length}`
              }, [
                createVNode(_component_ImageLazy, {
                  "lazy-src": _ctx.getImageURL($options.videoThumb),
                  height: "50",
                  width: "50"
                }, null, 8, ["lazy-src"]),
                createVNode("span", { class: "flex" }, [
                  createVNode("i", { class: "icon play-icon" })
                ])
              ], 10, ["data-glide-dir"])) : createCommentVNode("", true)
            ])
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.imageList, (value, index) => {
          _push2(`<li${_scopeId}><div class="slider-content"${_scopeId}><div class="slider-content-inner"${_scopeId}><img${ssrRenderAttr("id", _ctx.generateElemId(index))} class="full-dimen opacity-0"${ssrRenderAttr("data-source", _ctx.getImageURL(value.image))} alt="Product image" height="100" width="100"${_scopeId}></div></div></li>`);
        });
        _push2(`<!--]-->`);
        if ($options.video) {
          _push2(`<li${_scopeId}><div class="slider-content"${_scopeId}><div class="slider-content-inner"${_scopeId}><video controls=""${ssrRenderAttr("autostart", 0)}${_scopeId}><source${ssrRenderAttr("src", _ctx.getVideoURL($options.video))} type="video/mp4"${_scopeId}></video></div></div></li>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.imageList, (value, index) => {
            return openBlock(), createBlock("li", { key: index }, [
              createVNode("div", { class: "slider-content" }, [
                createVNode("div", { class: "slider-content-inner" }, [
                  createVNode("img", {
                    id: _ctx.generateElemId(index),
                    class: "full-dimen opacity-0",
                    "data-source": _ctx.getImageURL(value.image),
                    alt: "Product image",
                    height: "100",
                    width: "100"
                  }, null, 8, ["id", "data-source"])
                ])
              ])
            ]);
          }), 128)),
          $options.video ? (openBlock(), createBlock("li", { key: 0 }, [
            createVNode("div", { class: "slider-content" }, [
              createVNode("div", { class: "slider-content-inner" }, [
                createVNode("video", {
                  controls: "",
                  autostart: 0
                }, [
                  createVNode("source", {
                    src: _ctx.getVideoURL($options.video),
                    type: "video/mp4"
                  }, null, 8, ["src"])
                ])
              ])
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImagePopup_2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImagePopup_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ImagePopup_2 as default };
//# sourceMappingURL=ImagePopup_2-CEvLVY4U.mjs.map

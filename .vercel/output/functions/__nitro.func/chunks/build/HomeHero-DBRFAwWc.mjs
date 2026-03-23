import _sfc_main$1 from './ImageSlider-ByQM7FE3.mjs';
import { f as useUtils, h as __nuxt_component_0$1 } from './server.mjs';
import { toRefs, ref, computed, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSliderHelper } from './useSliderHelper-C7WfA-Bc.mjs';
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

const _sfc_main = {
  __name: "HomeHero",
  __ssrInlineRender: true,
  props: {
    slider: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { slider } = toRefs(props);
    const activeSlide = ref(0);
    const sliderLoaded = ref(false);
    const homeHeroRef = ref(null);
    function selectSliderImage(index) {
      if (homeHeroRef.value) {
        homeHeroRef.value.onThumbClick(index);
      }
    }
    const { onChange, onFirstImageLoad } = useSliderHelper(activeSlide, sliderLoaded);
    const { getImageURL, sourceUrl } = useUtils();
    const rightBottom = computed(() => {
      var _a;
      return (_a = slider.value) == null ? void 0 : _a.right_bottom;
    });
    const rightTop = computed(() => {
      var _a;
      return (_a = slider.value) == null ? void 0 : _a.right_top;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImageSlider = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-slider" }, _attrs))}>`);
      if (unref(slider) && unref(slider).main.length) {
        _push(`<div class="h-100"><div class="${ssrRenderClass([{ "has-right": unref(rightTop) || unref(rightBottom) }, "slider-wrapper"])}"><div class="left flow-hidden"><div class="pos-rel">`);
        _push(ssrRenderComponent(_component_ImageSlider, {
          ref_key: "homeHeroRef",
          ref: homeHeroRef,
          class: ["opacity-0", { "img-loading": unref(sliderLoaded) }],
          "image-count": unref(slider).main.length,
          bullets: true,
          autoplay: 6e3,
          loop: true,
          addInitEvt: true,
          lazy: true,
          onOnChange: unref(onChange),
          onOnInit: ($event) => unref(onFirstImageLoad)()
        }, {
          "bullet-area": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(slider).main, (_2, index) => {
                _push2(`<span class="${ssrRenderClass([index === unref(activeSlide) ? "active" : "", "embla-thumbs__slide"])}"${_scopeId}></span>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(slider).main, (_2, index) => {
                  return openBlock(), createBlock("span", {
                    key: index,
                    class: ["embla-thumbs__slide", index === unref(activeSlide) ? "active" : ""],
                    onClick: ($event) => selectSliderImage(index)
                  }, null, 10, ["onClick"]);
                }), 128))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(slider).main, (value, index) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_nuxt_link, {
                  to: unref(sourceUrl)(value),
                  class: "slider-content block"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="slider-content-inner"${_scopeId2}><img${ssrRenderAttr("id", `home-hero-${index}`)} class="full-dimen opacity-0"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${ssrRenderAttr("data-src", unref(getImageURL)(value.image))} height="100" width="100"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "slider-content-inner" }, [
                          createVNode("img", {
                            id: `home-hero-${index}`,
                            class: "full-dimen opacity-0",
                            alt: _ctx.$t("invent.si"),
                            "data-src": unref(getImageURL)(value.image),
                            height: "100",
                            width: "100"
                          }, null, 8, ["id", "alt", "data-src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(slider).main, (value, index) => {
                  return openBlock(), createBlock("li", { key: index }, [
                    createVNode(_component_nuxt_link, {
                      to: unref(sourceUrl)(value),
                      class: "slider-content block"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "slider-content-inner" }, [
                          createVNode("img", {
                            id: `home-hero-${index}`,
                            class: "full-dimen opacity-0",
                            alt: _ctx.$t("invent.si"),
                            "data-src": unref(getImageURL)(value.image),
                            height: "100",
                            width: "100"
                          }, null, 8, ["id", "alt", "data-src"])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<img class="${ssrRenderClass([{ "img-loaded": unref(sliderLoaded) }, "full-dimen placeholder-img"])}"${ssrRenderAttr("alt", _ctx.$t("invent.si"))} height="100" width="100"${ssrRenderAttr("src", unref(getImageURL)(unref(slider).main[0].image))}></div></div>`);
        if (unref(rightTop) || unref(rightBottom)) {
          _push(`<div class="right">`);
          if (unref(rightTop)) {
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: unref(sourceUrl)(unref(rightTop)),
              class: "img-wrap block"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", unref(getImageURL)(unref(rightTop).image))} height="100" width="100"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(getImageURL)(unref(rightTop).image),
                      height: "100",
                      width: "100",
                      alt: _ctx.$t("invent.si")
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(rightBottom)) {
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: unref(sourceUrl)(unref(rightBottom)),
              class: "img-wrap block"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<img${ssrRenderAttr("src", unref(getImageURL)(unref(rightBottom).image))} height="100" width="100"${ssrRenderAttr("alt", _ctx.$t("invent.si"))}${_scopeId}>`);
                } else {
                  return [
                    createVNode("img", {
                      src: unref(getImageURL)(unref(rightBottom).image),
                      height: "100",
                      width: "100",
                      alt: _ctx.$t("invent.si")
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="shimmer-wrapper"><div class="shimmer" style="${ssrRenderStyle({ "height": "100%" })}"></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HomeHero-DBRFAwWc.mjs.map

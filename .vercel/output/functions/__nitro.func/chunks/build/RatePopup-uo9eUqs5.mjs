import PopOver from './PopOver-CEd84c-C.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$1 from './AjaxButton-DzViXcHL.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { v as validation } from './validation-Cjx0gTHd.mjs';
import { j as _export_sfc, p as prepareGetUrl, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { u as useUserStore } from './user-DM1LUZx7.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createVNode, withModifiers, toDisplayString, createBlock, openBlock, createCommentVNode, withDirectives, Fragment, renderList, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  setup() {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const userStore = useUserStore();
    const { getUserToken } = userStore;
    const commonStore = useCommonStore();
    const { setToastMessage, setToastError, postRequest, getRequest } = commonStore;
    return {
      postRequest,
      getRequest,
      setToastMessage,
      getUserToken,
      setToastError,
      langCode
    };
  },
  name: "RatePopup",
  data() {
    return {
      hoverRating: 0,
      id: 0,
      rating: 0,
      images: [],
      imageFiles: [],
      deletedImages: [],
      review: "",
      submitting: false,
      hasImageError: false,
      fetchingRatingData: false
    };
  },
  watch: {},
  props: {
    orderId: {
      type: Number,
      required: true
    },
    productId: {
      type: Number,
      required: true
    }
  },
  components: {
    AjaxButton: _sfc_main$1,
    PopOver,
    Spinner: __nuxt_component_1
  },
  computed: {
    ratingComputed() {
      return this.hoverRating || this.rating;
    }
  },
  mixins: [util, validation],
  methods: {
    serializing(obj) {
      this.rating = parseInt(obj.rating);
      this.review = obj.review;
      this.id = obj.id;
      obj.review_images.forEach((img) => {
        this.images.push({
          id: img.id,
          image: img.image
        });
        this.imageFiles.push({
          id: img.id,
          url: this.getThumbImageURL(img.image),
          image: img.image
        });
      });
    },
    deleteImg(index) {
      if (this.imageFiles[index].id) {
        this.deletedImages.push({
          id: this.imageFiles[index].id,
          image: this.imageFiles[index].image
        });
      }
      this.images.splice(index, 1);
      this.imageFiles.splice(index, 1);
    },
    addImage(evt) {
      this.hasImageError = false;
      Object.values(evt.target.files).forEach((obj) => {
        if (this.imageFile(obj)) {
          this.imageFiles.push({
            id: "",
            url: URL.createObjectURL(obj)
          });
          this.images.push({
            id: "",
            image: obj
          });
        } else {
          this.hasImageError = true;
        }
      });
      if (this.hasImageError) {
        this.setToastError(this.$t("ratePopup.uploadingError"));
      }
    },
    mouseEnterFn(val) {
      this.hoverRating = val;
    },
    mouseLeaveFn() {
      this.hoverRating = 0;
    },
    rated(val) {
      this.rating = val;
    },
    async submitRating() {
      const fdImg = new FormData();
      this.images.forEach((obj) => {
        if (!obj.id) {
          fdImg.append("images[]", obj.image);
        }
      });
      fdImg.append("user_token", await this.getUserToken());
      fdImg.append("order_id", this.orderId);
      fdImg.append("product_id", this.productId);
      fdImg.append("rating", this.rating);
      fdImg.append("review", this.review);
      fdImg.append("deleted_images", JSON.stringify(this.deletedImages));
      fdImg.append("id", this.id);
      this.submitting = true;
      const data = await this.postRequest({
        api: "ratingReviewAction",
        params: fdImg,
        lang: this.langCode
      });
      this.submitting = false;
      if ((data == null ? void 0 : data.status) === 200) {
        this.$emit("close");
        this.setToastMessage(data.message);
      } else {
        this.setToastError(data.data.form.join(", "));
      }
    }
  },
  async mounted() {
    this.fetchingRatingData = true;
    const data = await this.getRequest({
      lang: this.langCode,
      api: "ratingReviewFind",
      params: `/${this.productId}?${prepareGetUrl({
        id: this.productId,
        user_token: await this.getUserToken()
      })}`
    });
    if ((data == null ? void 0 : data.status) === 200) {
      this.serializing(data.data);
    }
    this.fetchingRatingData = false;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pop_over = PopOver;
  const _component_spinner = __nuxt_component_1;
  const _component_ajax_button = _sfc_main$1;
  _push(ssrRenderComponent(_component_pop_over, mergeProps({
    title: _ctx.$t("filter.rating"),
    onClose: ($event) => _ctx.$emit("close"),
    "elem-id": "rate-pop-over",
    layer: true,
    class: "rating-popup popup-top-auto"
  }, _attrs), {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($data.fetchingRatingData) {
          _push2(`<div class="mn-h-200x flex"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_spinner, { radius: 70 }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}><div class="mb-15 flex sided"${_scopeId}><span class="star-wrapper"${_scopeId}><span class="star-btn"${_scopeId}><!--[-->`);
          ssrRenderList(5, (val) => {
            _push2(`<span${_scopeId}> \u2606 </span>`);
          });
          _push2(`<!--]--></span><span class="star-fill" style="${ssrRenderStyle({ width: `${$options.ratingComputed * 20}%` })}"${_scopeId}><!--[-->`);
          ssrRenderList($options.ratingComputed, (val) => {
            _push2(`<span${_scopeId}> \u2605 </span>`);
          });
          _push2(`<!--]--></span></span><input class="d-none" type="file" multiple${_scopeId}><button aria-label="submit" class="outline-btn plr-20"${_scopeId}>${ssrInterpolate(_ctx.$t("ratePopup.addImage"))}</button></div><p class="mb-15 f-9"${_scopeId}>${ssrInterpolate(_ctx.$t("ratePopup.supportedImage", { max: _ctx.maxSize }))}</p>`);
          if ($data.imageFiles.length) {
            _push2(`<div class="flex m--7-5 start wrap mb-10"${_scopeId}><!--[-->`);
            ssrRenderList($data.imageFiles, (val, index) => {
              _push2(`<div class="img-container"${_scopeId}><button aria-label="close" class="close-btn"${_scopeId}><i class="icon close-icon"${_scopeId}></i></button><div class="b-dashed m-7-5 img-wrapper"${_scopeId}><img${ssrRenderAttr("src", val.url)} height="20" width="20"${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<textarea${_scopeId}>${ssrInterpolate($data.review)}</textarea></div>`);
        }
      } else {
        return [
          $data.fetchingRatingData ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mn-h-200x flex"
          }, [
            createVNode(_component_spinner, { radius: 70 })
          ])) : (openBlock(), createBlock("div", { key: 1 }, [
            createVNode("div", { class: "mb-15 flex sided" }, [
              createVNode("span", {
                class: "star-wrapper",
                onMouseleave: $options.mouseLeaveFn
              }, [
                createVNode("span", { class: "star-btn" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(5, (val) => {
                    return createVNode("span", {
                      onMouseover: ($event) => $options.mouseEnterFn(val),
                      onClick: ($event) => $options.rated(val)
                    }, " \u2606 ", 40, ["onMouseover", "onClick"]);
                  }), 64))
                ]),
                createVNode("span", {
                  class: "star-fill",
                  style: { width: `${$options.ratingComputed * 20}%` }
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.ratingComputed, (val) => {
                    return openBlock(), createBlock("span", {
                      onMouseover: ($event) => $options.mouseEnterFn(val),
                      onClick: ($event) => $options.rated(val)
                    }, " \u2605 ", 40, ["onMouseover", "onClick"]);
                  }), 256))
                ], 4)
              ], 40, ["onMouseleave"]),
              createVNode("input", {
                class: "d-none",
                type: "file",
                multiple: "",
                onChange: $options.addImage,
                ref: "fileInput"
              }, null, 40, ["onChange"]),
              createVNode("button", {
                "aria-label": "submit",
                class: "outline-btn plr-20",
                onClick: ($event) => _ctx.$refs.fileInput.click()
              }, toDisplayString(_ctx.$t("ratePopup.addImage")), 9, ["onClick"])
            ]),
            createVNode("p", { class: "mb-15 f-9" }, toDisplayString(_ctx.$t("ratePopup.supportedImage", { max: _ctx.maxSize })), 1),
            $data.imageFiles.length ? (openBlock(), createBlock("div", {
              key: 0,
              class: "flex m--7-5 start wrap mb-10"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.imageFiles, (val, index) => {
                return openBlock(), createBlock("div", { class: "img-container" }, [
                  createVNode("button", {
                    "aria-label": "close",
                    class: "close-btn",
                    onClick: ($event) => $options.deleteImg(index)
                  }, [
                    createVNode("i", { class: "icon close-icon" })
                  ], 8, ["onClick"]),
                  createVNode("div", { class: "b-dashed m-7-5 img-wrapper" }, [
                    createVNode("img", {
                      src: val.url,
                      height: "20",
                      width: "20"
                    }, null, 8, ["src"])
                  ])
                ]);
              }), 256))
            ])) : createCommentVNode("", true),
            withDirectives(createVNode("textarea", {
              "onUpdate:modelValue": ($event) => $data.review = $event
            }, null, 8, ["onUpdate:modelValue"]), [
              [vModelText, $data.review]
            ])
          ]))
        ];
      }
    }),
    "pop-footer": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex j-end gap-10"${_scopeId}><button aria-label="submit" class="outline-btn plr-30 plr-sm-15"${_scopeId}>${ssrInterpolate(_ctx.$t("addressPopup.cancel"))}</button>`);
        _push2(ssrRenderComponent(_component_ajax_button, {
          class: "primary-btn plr-30 plr-sm-15",
          type: "button",
          "fetching-data": $data.submitting,
          "loading-text": _ctx.$t("checkoutRight.submitting"),
          text: _ctx.$t("ratePopup.rateNow"),
          disabled: $data.fetchingRatingData,
          onClicked: $options.submitRating
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex j-end gap-10" }, [
            createVNode("button", {
              "aria-label": "submit",
              class: "outline-btn plr-30 plr-sm-15",
              onClick: withModifiers(($event) => _ctx.$emit("close"), ["prevent"])
            }, toDisplayString(_ctx.$t("addressPopup.cancel")), 9, ["onClick"]),
            createVNode(_component_ajax_button, {
              class: "primary-btn plr-30 plr-sm-15",
              type: "button",
              "fetching-data": $data.submitting,
              "loading-text": _ctx.$t("checkoutRight.submitting"),
              text: _ctx.$t("ratePopup.rateNow"),
              disabled: $data.fetchingRatingData,
              onClicked: $options.submitRating
            }, null, 8, ["fetching-data", "loading-text", "text", "disabled", "onClicked"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RatePopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RatePopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { RatePopup as default };
//# sourceMappingURL=RatePopup-uo9eUqs5.mjs.map

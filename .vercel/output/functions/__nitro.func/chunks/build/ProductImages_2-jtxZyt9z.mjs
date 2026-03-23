import { j as _export_sfc, _ as __nuxt_component_0$2 } from './server.mjs';
import _sfc_main$1 from './ImagePopup-B797CJ91.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';
import './user-DM1LUZx7.mjs';
import './useSliderHelper-C7WfA-Bc.mjs';

const _sfc_main = {
  name: "ProductImages",
  data() {
    return {
      key: 0,
      loaded: false,
      noScroll: true,
      showSliderMessage: false,
      activeId: 0,
      imagePopup: false,
      imageList: [],
      zoomImageList: {
        thumbs: [],
        normal_size: [],
        large_size: []
      },
      zoomerOptions: {
        zoomFactor: 2.5,
        // scale for zoomer
        pane: "pane",
        // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300,
        // how long after the zoomer take effect
        namespace: "zoomer",
        // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click: false,
        // move image by click thumb image or by mouseover
        scroll_items: 4,
        // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb",
        // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },
  components: {
    ImagePopup: _sfc_main$1
  },
  mixins: [util],
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
  directives: {},
  computed: {
    videoThumb() {
      var _a;
      return ((_a = this.product) == null ? void 0 : _a.video_thumb) || "";
    },
    isSmallerDevice() {
      return (void 0).innerWidth <= 992;
    },
    isArrowVisible() {
      var _a;
      return this.zoomerOptions.scroll_items < ((_a = this.images) == null ? void 0 : _a.length) + 1;
    }
  },
  methods: {
    zoomActiveChange(index) {
      var _a, _b, _c;
      if (((_a = this.zoomImageList) == null ? void 0 : _a.thumbs) && this.zoomImageList.thumbs[index]) {
        (_c = (_b = this.$refs) == null ? void 0 : _b.imagePopup) == null ? void 0 : _c.clickOnThumb(index);
        this.$refs.productZoomer.chooseThumb(this.zoomImageList.thumbs[index], { type: null });
      }
    },
    closePopup() {
      if (!this.isSmallerDevice) {
        this.imagePopup = false;
      }
      this.$emit("image-popup", this.imagePopup);
    },
    imagePopupOpen(evt) {
      if (evt.target.classList.contains("zoomer-control") || evt.target.classList.contains("video-thumb")) {
        return false;
      }
      const childList = [...this.$el.querySelectorAll(".thumb-list")[0].children];
      childList.forEach((obj, index) => {
        if (obj.className.includes("choosed-thumb")) {
          this.activeId = index - 1;
        }
      });
      this.imagePopup = true;
      this.$emit("image-popup", this.imagePopup);
    },
    generateImageObj(id, imageLink) {
      return {
        id,
        url: imageLink
      };
    }
  },
  async mounted() {
    if (this.isSmallerDevice) {
      this.imagePopup = true;
    }
    if (this.images) {
      this.imageList = [{ image: this.mainImage }].concat(this.images);
    } else {
      this.imageList = [{ image: this.mainImage }];
    }
    let thumbs = [];
    let normals = [];
    let larges = [];
    let imageId = 0;
    const self = this;
    const thumbPromiseAll = [];
    const fullPromiseAll = [];
    this.imageList.forEach((obj) => {
      if (obj) {
        imageId++;
        thumbPromiseAll.push(new Promise((resolve, reject) => {
          const thumbImg = (void 0).createElement("img");
          thumbImg.onload = function() {
            resolve(self.generateImageObj(this.dataset.index, this.src));
          };
          thumbImg.onerror = function() {
            resolve(self.generateImageObj(this.dataset.index, self.getThumbImageURL()));
          };
          thumbImg.src = this.getThumbImageURL(obj.image);
          thumbImg.setAttribute("data-index", imageId);
        }));
        fullPromiseAll.push(new Promise((resolve, reject) => {
          const thumbImg = (void 0).createElement("img");
          thumbImg.onload = function() {
            resolve(self.generateImageObj(this.dataset.index, this.src));
          };
          thumbImg.onerror = function() {
            resolve(self.generateImageObj(this.dataset.index, self.getImageURL()));
          };
          thumbImg.src = this.getImageURL(obj.image);
          thumbImg.setAttribute("data-index", imageId);
        }));
      }
    });
    await Promise.all(thumbPromiseAll).then((res) => {
      thumbs = res;
      this.zoomImageList.thumbs = thumbs;
    });
    await Promise.all(fullPromiseAll).then((res) => {
      normals = res;
      larges = res;
      this.zoomImageList.normal_size = normals;
      this.zoomImageList.large_size = larges;
    });
    this.key++;
    this.$nextTick(() => {
      setTimeout(() => {
        this.loaded = true;
        if (this.videoThumb) {
          const imgWrapper = (void 0).querySelector(".thumb-list");
          const div = (void 0).createElement("div");
          div.classList.add("video-thumb");
          const span = (void 0).createElement("span");
          span.classList.add("flex");
          const i = (void 0).createElement("i");
          i.classList.add("icon");
          i.classList.add("play-icon");
          const img = (void 0).createElement("img");
          img.onerror = function() {
            img.src = self.getThumbImageURL();
          };
          img.src = this.getImageURL(this.videoThumb);
          div.appendChild(img);
          span.appendChild(i);
          div.appendChild(span);
          imgWrapper.appendChild(div);
          div.addEventListener("click", function() {
            self.activeId = normals == null ? void 0 : normals.length;
            self.imagePopup = true;
            self.$emit("image-popup", self.imagePopup);
          });
        }
      }, 1e3);
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail-image shimmer-wrapper" }, _attrs))}>`);
  if ($data.key) {
    _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  } else {
    _push(`<!---->`);
  }
  if (!$data.key) {
    _push(`<!--[--><div class="pleceholder-zoomer-base-container center-text"><img class="preload-img"${ssrRenderAttr("src", _ctx.getThumbImageURL(this.mainImage))}${ssrRenderAttr("alt", $props.title)} height="100" width="100"></div><div class="pleceholder-thumb-list"><div class="responsive-image shimmer hide-sm"></div><div class="responsive-image shimmer hide-sm"></div><div class="responsive-image shimmer hide-sm"></div></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductImages_2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductImages_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProductImages_2 as default };
//# sourceMappingURL=ProductImages_2-jtxZyt9z.mjs.map

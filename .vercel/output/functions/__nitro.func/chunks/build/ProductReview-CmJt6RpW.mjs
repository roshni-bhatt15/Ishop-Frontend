import __nuxt_component_0 from './RatingStar-DUn_scU4.mjs';
import __nuxt_component_1 from './Spinner-CfK0SFd4.mjs';
import _sfc_main$2 from './ImageLazy-C91HtcbD.mjs';
import __nuxt_component_3 from './Pagination-1kX6F26r.mjs';
import _sfc_main$3 from './Banner-BuJz601-.mjs';
import _sfc_main$1 from './ImagePopup-B797CJ91.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { storeToRefs } from 'pinia';
import { j as _export_sfc, p as prepareGetUrl, u as useLanguageStore, a as useCommonStore } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
import './PopOver-CEd84c-C.mjs';
import './SocialShare-CVzFsphV.mjs';
import './ImageSlider-ByQM7FE3.mjs';
import 'embla-carousel-vue';
import './user-DM1LUZx7.mjs';
import './useSliderHelper-C7WfA-Bc.mjs';

const routeParamHelper = {
  data() {
    return {
      orderByType: "",
      orderBy: "",
      page: 0,
      search: null
    };
  },
  methods: {
    settingParam(data) {
      this.orderByType = (data == null ? void 0 : data.orderByType) || "desc";
      this.orderBy = (data == null ? void 0 : data.orderBy) || "created_at";
      this.page = Number(data == null ? void 0 : data.page) || 1;
      this.search = (data == null ? void 0 : data.q) || null;
    },
    settingRouteParam() {
      this.orderByType = this.$route.query.orderByType || "desc";
      this.orderBy = this.$route.query.orderBy || "created_at";
      this.page = Number(this.$route.query.page) || 1;
      this.search = this.$route.query.q || null;
    }
  }
};
const _sfc_main = {
  setup(props, { emit }) {
    const languageStore = useLanguageStore();
    const { langCode } = storeToRefs(languageStore);
    const commonStore = useCommonStore();
    const { unAuthGet } = commonStore;
    const emitHasReview = (pageCount) => {
      emit("has-review", pageCount);
    };
    return { unAuthGet, langCode, emitHasReview };
  },
  name: "ProductReview",
  data() {
    return {
      reviewData: null,
      avgRating: 0,
      totalRating: null,
      fetchingReviews: false,
      fetchingTotal: false,
      imagePopup: false,
      activeImage: 0,
      reviewImages: [],
      paginationParam: null
    };
  },
  watch: {},
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    RatingStar: __nuxt_component_0,
    Spinner: __nuxt_component_1,
    ImageLazy: _sfc_main$2,
    ImagePopup: _sfc_main$1,
    Pagination: __nuxt_component_3
  },
  computed: {
    allReviews() {
      var _a;
      return ((_a = this.reviewData) == null ? void 0 : _a.all) || null;
    },
    reviews() {
      const outputArray = [];
      const total = this.totalReviewCount;
      for (let i = 1; i <= 5; i++) {
        const ratingObj = this.totalReviews.find((obj) => obj.rating === i);
        let percent = 0;
        let ratingCount = 0;
        if (ratingObj) {
          percent = ratingObj.total / total * 100;
          ratingCount = ratingObj.total;
        }
        outputArray.push({
          percent: percent.toFixed(2),
          rating: i,
          total: ratingCount
        });
      }
      return outputArray;
    },
    totalReviews() {
      var _a;
      return ((_a = this.reviewData) == null ? void 0 : _a.total) || [];
    },
    banner() {
      var _a;
      return (_a = this.reviewData) == null ? void 0 : _a.banner;
    },
    isSmallerDevice() {
      return (void 0).innerWidth <= 768;
    },
    totalReviewCount() {
      return this.totalReviews.reduce((acc, review) => acc + review.total, 0);
    },
    averageRating() {
      const totalReviewCount = this.totalReviewCount;
      const totalRating = this.totalReviews.reduce((acc, review) => acc + review.total * review.rating, 0);
      return totalReviewCount > 0 ? (totalRating / totalReviewCount).toFixed(2) : 0;
    },
    totalPage() {
      var _a;
      return (_a = this.allReviews) == null ? void 0 : _a.last_page;
    },
    pageCount() {
      var _a;
      return (_a = this.allReviews) == null ? void 0 : _a.total;
    },
    currentAllReviews() {
      var _a;
      return ((_a = this.allReviews) == null ? void 0 : _a.data) || [];
    }
  },
  mixins: [util, routeParamHelper],
  methods: {
    userName(review) {
      var _a, _b;
      if (review == null ? void 0 : review.user) {
        return (_a = review == null ? void 0 : review.user) == null ? void 0 : _a.name;
      } else if (review == null ? void 0 : review.guest_user) {
        return (_b = review == null ? void 0 : review.guest_user) == null ? void 0 : _b.name;
      }
      return "";
    },
    imagePopupOpen(data, index) {
      this.reviewImages = data.review_images;
      this.activeImage = index;
      this.imagePopup = true;
    },
    noReview(review) {
      return !review || review === "null";
    },
    async paginationFetch(evt) {
      this.paginationParam = evt;
      await this.fetchingData();
    },
    async fetchingData() {
      this.settingParam(this.paginationParam);
      this.fetchingReviews = true;
      const response = await this.unAuthGet({
        api: "reviews",
        params: `/${this.id}?${prepareGetUrl(
          {
            id: this.id,
            time_zone: this.timeZone,
            order_by: this.orderBy,
            type: this.orderByType,
            get_total: !this.totalReviews.length > 0,
            page: this.page,
            q: this.search
          }
        )}`,
        lang: this.langCode
      });
      this.reviewData = response.data;
      this.fetchingReviews = false;
      this.emitHasReview(this.pageCount);
    }
  },
  created() {
  },
  async mounted() {
    this.fetchingTotal = false;
    await this.fetchingData();
    this.fetchingTotal = true;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_rating_star = __nuxt_component_0;
  const _component_spinner = __nuxt_component_1;
  const _component_ImageLazy = _sfc_main$2;
  const _component_pagination = __nuxt_component_3;
  const _component_banner = _sfc_main$3;
  const _component_image_popup = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rating-review pb-5" }, _attrs))}><div class="flex gap-15 start align-initial block-sm"><div class="pr-15 pr-sm total-rating"><div class="pos-sticky"><h4 class="mb-10 bold">${ssrInterpolate(_ctx.$t("productReview.customerReviews"))}</h4><div class="flex start">`);
  _push(ssrRenderComponent(_component_rating_star, {
    class: "mr-10",
    rating: parseFloat($options.averageRating)
  }, null, _parent));
  _push(`<h4>${ssrInterpolate(_ctx.$t("ratingStar.outOf", { rating: $options.averageRating }))}</h4></div><p class="mb-15">${ssrInterpolate(_ctx.$t("productReview.peopleReviewed", { count: $options.totalReviewCount }))}</p><table class="mb-15"><tbody><!--[-->`);
  ssrRenderList($options.reviews, (value) => {
    _push(`<tr><td>${ssrInterpolate(_ctx.$t("productReview.star", { count: value.rating }))}</td><td><span class="rating-bar mtb-5 mlr-10"><span style="${ssrRenderStyle({ width: `${value.percent}%` })}"></span></span></td><td>${ssrInterpolate(value.percent)}% (${ssrInterpolate(value.total)})</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div><div class="all-review mlr--15"><div class="mlr-15">`);
  if ($data.fetchingReviews) {
    _push(`<div class="spinner-wrapper flex">`);
    _push(ssrRenderComponent(_component_spinner, { radius: 100 }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.fetchingReviews) {
    _push(`<div class="review-list">`);
    if ($options.currentAllReviews.length) {
      _push(`<!--[-->`);
      ssrRenderList($options.currentAllReviews, (value, index) => {
        _push(`<div class="mb-20 mb-sm-15"><div class="flex start align-start gap-15"><div class="user-img flex mt-5"><i class="icon user-icon"></i></div><div class="flex sided grow"><div><h5 class="semi-bold">${ssrInterpolate($options.userName(value))}</h5>`);
        _push(ssrRenderComponent(_component_rating_star, {
          rating: parseFloat(value.rating)
        }, null, _parent));
        _push(`</div><p class="f-9 color-lite">${ssrInterpolate(value.created)}</p></div></div>`);
        if (!$options.noReview(value.review)) {
          _push(`<p class="mb-15">${ssrInterpolate(value.review)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (value.review_images && value.review_images.length) {
          _push(`<div class="flex start m--5"><!--[-->`);
          ssrRenderList(value.review_images, (img, i) => {
            _push(`<div class="w-70x m-5 img-wrap"><div class="img-wrapper">`);
            _push(ssrRenderComponent(_component_ImageLazy, {
              "lazy-src": _ctx.getThumbImageURL(img.image),
              title: value.created,
              alt: value.created,
              class: "p-5"
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    } else {
      _push(`<p>${ssrInterpolate(_ctx.$t("detailRight.noReview"))}</p>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_pagination, {
    class: "mb-15",
    ref: "ratingPagination",
    "total-page": $options.totalPage,
    "changing-route": false,
    onFetchingData: $options.paginationFetch
  }, null, _parent));
  _push(`</div>`);
  if ($options.banner) {
    _push(ssrRenderComponent(_component_banner, {
      banner: $options.banner,
      class: "rating-banner mb-15 mlr-15"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.imagePopup) {
    _push(ssrRenderComponent(_component_image_popup, {
      "active-id": $data.activeImage,
      "image-list": $data.reviewImages,
      onClosePopup: ($event) => $data.imagePopup = false
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductReview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ProductReview as default };
//# sourceMappingURL=ProductReview-CmJt6RpW.mjs.map

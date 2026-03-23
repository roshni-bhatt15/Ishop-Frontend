import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  name: "Pagination",
  data() {
    return {
      sortByType: this.$route.query.orderByType || "desc",
      sortBy: this.$route.query.orderBy || "created_at",
      currentPage: Number(this.$route.query.page) || this.page,
      search: this.$route.query.q || null
    };
  },
  props: {
    changingRoute: {
      type: Boolean,
      default: true
    },
    page: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number
    },
    pagePer: {
      type: Number,
      default: 5
    }
  },
  watch: {},
  directives: {},
  components: {},
  mixins: [],
  computed: {
    getActivePages() {
      let maxPage = this.getPage + (this.pagePer - 1);
      if (maxPage % this.pagePer !== 0) {
        maxPage = parseInt(maxPage / this.pagePer) * this.pagePer;
      }
      const currentPage = maxPage - (this.pagePer - 1);
      if (maxPage >= this.totalPage) {
        maxPage = this.totalPage;
      }
      return [currentPage - 1, maxPage];
    },
    getPage() {
      return this.currentPage;
    },
    allPages() {
      const allP = [];
      for (let i = 1; i <= this.totalPage; i++) {
        allP.push(i);
      }
      return allP;
    }
  },
  methods: {
    routeParam() {
      if (this.isDefaultPage()) {
        this.resettingRoute();
      } else {
        this.clearQuery();
        this.$emit("fetching-data");
      }
      this.scrollToTop();
    },
    resettingRoute(routeParams = {}) {
      this.clearQuery();
      this.$router.push({
        query: {
          ...routeParams,
          ...{
            orderBy: this.orderBy,
            orderByType: this.orderByType,
            page: this.currentPage,
            q: this.search
          }
        }
      });
      this.$emit("fetching-data");
    },
    clearQuery() {
      this.orderByType = "desc";
      this.orderBy = "created_at";
      this.currentPage = 1;
    },
    isDefaultPage() {
      return this.orderByType === "desc" && this.orderBy === "created_at" && this.currentPage === 1;
    },
    settingRoute() {
      this.$router.push({
        query: {
          ...this.$route.query,
          ...{
            orderBy: this.orderBy,
            orderByType: this.orderByType,
            page: this.currentPage,
            q: this.search
          }
        }
      });
    },
    dropdownSelected(isOrderType, data) {
      this.currentPage = 1;
      if (isOrderType)
        this.orderByType = data.key;
      else
        this.orderBy = data.key;
      this.getDataWithRoute();
    },
    scrollToTop() {
      (void 0).scrollTo(0, 0);
    },
    getDataFromRoute() {
      this.sortByType = this.$route.query.orderByType || "desc";
      this.sortBy = this.$route.query.orderBy || "created_at";
      this.currentPage = Number(this.$route.query.page) || 1;
      this.search = this.$route.query.q || null;
      this.$emit("fetching-data");
    },
    getDataWithRoute() {
      if (this.changingRoute) {
        this.settingRoute();
        this.scrollToTop();
      }
      this.$emit("fetching-data", {
        orderBy: this.orderBy,
        orderByType: this.orderByType,
        page: this.currentPage,
        q: this.q
      });
    },
    navigate(param) {
      if (param > 0 && this.currentPage >= this.totalPage || param < 0 && this.currentPage <= 1)
        return;
      this.currentPage += param;
      this.getDataWithRoute();
    },
    paginate(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
        this.getDataWithRoute();
      }
    },
    loadData() {
      this.getDataFromRoute();
    }
  },
  unmounted() {
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.totalPage > 1) {
    _push(`<ul${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}><li class="${ssrRenderClass({ disabled: $data.currentPage === 1 })}"><i class="icon arrow-left black"></i></li><!--[-->`);
    ssrRenderList($options.allPages.slice($options.getActivePages[0], $options.getActivePages[1]), (value, index) => {
      _push(`<li class="${ssrRenderClass([{ disabled: $data.currentPage === value }, "page"])}"><span>${ssrInterpolate(value)}</span></li>`);
    });
    _push(`<!--]--><li class="${ssrRenderClass({ disabled: $data.currentPage === $props.totalPage })}"><i class="icon arrow-right black"></i></li></ul>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=Pagination-1kX6F26r.mjs.map

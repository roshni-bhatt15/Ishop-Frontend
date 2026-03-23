import { j as _export_sfc, h as __nuxt_component_0$1, c as useI18n, a as useCommonStore } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { storeToRefs } from 'pinia';
import { mergeProps, withCtx, createVNode, withModifiers, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
    const { t } = useI18n();
    const propBtnText = props.btnText || t("profile.upload");
    const commonStore = useCommonStore();
    const { categories } = storeToRefs(commonStore);
    return { categories, propBtnText };
  },
  name: "FilterCategory",
  props: {},
  data() {
    return {};
  },
  components: {},
  mixins: [util],
  computed: {
    subCategorySlug() {
      var _a;
      return ((_a = this.$route.params) == null ? void 0 : _a.subCategory) || null;
    },
    categorySlug() {
      var _a;
      return ((_a = this.$route.params) == null ? void 0 : _a.category) || null;
    },
    categoryList() {
      var _a;
      if (this.categorySlug) {
        const selected = this.categories.find((i) => {
          return this.categorySlug === i.slug;
        });
        if (selected) {
          return [selected];
        }
      }
      return (_a = this.categories) == null ? void 0 : _a.map(({ public_sub_categories, ...item }) => item);
    }
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-wrapper" }, _attrs))}>`);
  if ($options.categorySlug) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/all-products/products",
      class: "flex start mb-15",
      custom: true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="flex"${_scopeId}><i class="dimen-16x icon double-arrow-left-icon mr-5 opacity-6"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("listingLayout.allProducts"))}</span>`);
        } else {
          return [
            createVNode("span", {
              class: "flex",
              onClick: withModifiers(($event) => _ctx.$emit("going-next", "/all-products/products"), ["prevent"])
            }, [
              createVNode("i", { class: "dimen-16x icon double-arrow-left-icon mr-5 opacity-6" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("listingLayout.allProducts")), 1)
            ], 8, ["onClick"])
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<ul><!--[-->`);
  ssrRenderList($options.categoryList, (cat, i) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: { active: $options.categorySlug === cat.slug },
      to: _ctx.categoryLink(cat),
      custom: true
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>${ssrInterpolate(cat.title)}</span>`);
        } else {
          return [
            createVNode("span", {
              onClick: withModifiers(($event) => _ctx.$emit("going-next", _ctx.categoryLink(cat)), ["prevent"])
            }, toDisplayString(cat.title), 9, ["onClick"])
          ];
        }
      }),
      _: 2
    }, _parent));
    if (cat.public_sub_categories) {
      _push(`<ul><!--[-->`);
      ssrRenderList(cat.public_sub_categories, (sub, j) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: { active: $options.subCategorySlug === sub.slug },
          to: _ctx.subCategoryLink(sub, cat),
          custom: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(sub.title)}</span>`);
            } else {
              return [
                createVNode("span", {
                  onClick: withModifiers(($event) => _ctx.$emit("going-next", _ctx.subCategoryLink(sub, cat)), ["prevent"])
                }, toDisplayString(sub.title), 9, ["onClick"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterCategory-3.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const FilterCategory3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FilterCategory3 as default };
//# sourceMappingURL=FilterCategory-3-B3q455Xo.mjs.map

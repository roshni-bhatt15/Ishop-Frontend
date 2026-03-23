import { j as _export_sfc, h as __nuxt_component_0$1, a as useCommonStore } from './server.mjs';
import { u as util } from './util-D0P5KPFP.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { storeToRefs } from 'pinia';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
    const commonStore = useCommonStore();
    const { categories } = storeToRefs(commonStore);
    return { categories };
  },
  name: "FilterCategory",
  props: {
    category: {
      type: Object,
      default: null
    },
    subCategoryId: {
      type: String,
      default: null
    },
    isCategoryPage: {
      type: Boolean,
      default: false
    },
    allCategories: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  mixins: [util],
  computed: {
    categoryTitle() {
      var _a;
      return (_a = this.category) == null ? void 0 : _a.title;
    },
    subCategories() {
      var _a;
      return (_a = this.category) == null ? void 0 : _a.public_sub_categories;
    }
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-wrapper" }, _attrs))}>`);
  if (!$props.isCategoryPage) {
    _push(`<ul><!--[-->`);
    ssrRenderList($props.allCategories, (item, i) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: _ctx.categoryLink(item),
        onClick: ($event) => _ctx.$emit("going-next", _ctx.categoryLink(item))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<div><p class="mb-10">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      onClick: ($event) => _ctx.$emit("close-filter"),
      to: _ctx.listingLink({ title: _ctx.$t("listingLayout.allProducts") }),
      class: "flex start"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="dimen-16x icon double-arrow-left-icon mr-5 opacity-6"${_scopeId}></i> ${ssrInterpolate(_ctx.$t("listingLayout.allProducts"))}`);
        } else {
          return [
            createVNode("i", { class: "dimen-16x icon double-arrow-left-icon mr-5 opacity-6" }),
            createTextVNode(" " + toDisplayString(_ctx.$t("listingLayout.allProducts")), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p><h5 class="mb-5 main-category">`);
    if ($props.category) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: [{ "active": !$props.subCategoryId }, "bold"],
        to: _ctx.categoryLink($props.category),
        onClick: ($event) => _ctx.$emit("going-next", _ctx.categoryLink($props.category))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate($options.categoryTitle)}`);
          } else {
            return [
              createTextVNode(toDisplayString($options.categoryTitle), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</h5>`);
    if ($options.subCategories) {
      _push(`<ul><!--[-->`);
      ssrRenderList($options.subCategories, (item, i) => {
        _push(`<li class="${ssrRenderClass({ "active": $props.subCategoryId && $props.subCategoryId.toString() === item.id.toString() })}">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: _ctx.subCategoryLink(item),
          onClick: ($event) => _ctx.$emit("going-next", _ctx.subCategoryLink(item))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
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
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterCategory2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FilterCategory2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FilterCategory2 as default };
//# sourceMappingURL=FilterCategory2-DkbFezbX.mjs.map

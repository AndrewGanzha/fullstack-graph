import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Utils","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/utils/index.md","filePath":"frontend/utils/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/utils/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utils" tabindex="-1">Utils <a class="header-anchor" href="#utils" aria-label="Permalink to &quot;Utils&quot;">​</a></h1><p>Утилиты, composables и общие расширения.</p><ul><li><a href="/frontend/utils/vueuse">VueUse</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/utils/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UI","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/ui/index.md","filePath":"frontend/ui/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/ui/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ui" tabindex="-1">UI <a class="header-anchor" href="#ui" aria-label="Permalink to &quot;UI&quot;">​</a></h1><p>UI-библиотеки и дизайн-системы под Vue.</p><ul><li><a href="/frontend/ui/naive-ui">Naive UI</a></li><li><a href="/frontend/ui/element-plus">Element Plus</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/ui/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

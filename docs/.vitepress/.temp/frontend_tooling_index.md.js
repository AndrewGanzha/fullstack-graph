import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tooling","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/tooling/index.md","filePath":"frontend/tooling/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/tooling/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tooling" tabindex="-1">Tooling <a class="header-anchor" href="#tooling" aria-label="Permalink to &quot;Tooling&quot;">​</a></h1><p>Инструменты качества и DX.</p><ul><li><a href="/frontend/tooling/eslint">ESLint</a></li><li><a href="/frontend/tooling/prettier">Prettier</a></li><li><a href="/frontend/tooling/unocss">UnoCSS</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/tooling/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

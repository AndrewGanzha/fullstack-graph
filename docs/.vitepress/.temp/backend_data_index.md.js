import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend Data","description":"","frontmatter":{},"headers":[],"relativePath":"backend/data/index.md","filePath":"backend/data/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/data/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-data" tabindex="-1">Backend Data <a class="header-anchor" href="#backend-data" aria-label="Permalink to &quot;Backend Data&quot;">​</a></h1><p>Раздел про слой данных:</p><ul><li>SQL/NoSQL базы;</li><li>кэширование;</li><li>миграции;</li><li>ORM и query builders.</li></ul><p>Цель раздела: связать выбор инструментов с задачами и trade-offs.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/data/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

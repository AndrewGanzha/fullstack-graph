import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend API","description":"","frontmatter":{},"headers":[],"relativePath":"backend/api/index.md","filePath":"backend/api/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/api/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-api" tabindex="-1">Backend API <a class="header-anchor" href="#backend-api" aria-label="Permalink to &quot;Backend API&quot;">​</a></h1><p>Раздел про проектирование и реализацию API:</p><ul><li>REST и GraphQL;</li><li>валидация входных данных;</li><li>versioning;</li><li>документация контрактов.</li></ul><p>Сюда будут добавляться карточки и паттерны интеграции.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/api/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

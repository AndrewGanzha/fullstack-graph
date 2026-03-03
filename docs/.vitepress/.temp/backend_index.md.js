import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend","description":"","frontmatter":{},"headers":[],"relativePath":"backend/index.md","filePath":"backend/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h1><p>Раздел для backend-части базы знаний.</p><h2 id="что-здесь-будет" tabindex="-1">Что здесь будет <a class="header-anchor" href="#что-здесь-будет" aria-label="Permalink to &quot;Что здесь будет&quot;">​</a></h2><ul><li>Foundation: языки, фреймворки и базовые принципы.</li><li>API: REST, GraphQL, контракт и валидация.</li><li>Data: БД, кэш, миграции и паттерны доступа к данным.</li><li>Infrastructure: контейнеризация, очереди, observability, CI/CD.</li><li>Testing: unit, integration, contract и e2e для backend.</li></ul><p>Первые узлы уже добавлены в общий граф на странице <code>/graph</code>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

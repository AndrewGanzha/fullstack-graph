import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend Testing","description":"","frontmatter":{},"headers":[],"relativePath":"backend/testing/index.md","filePath":"backend/testing/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/testing/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-testing" tabindex="-1">Backend Testing <a class="header-anchor" href="#backend-testing" aria-label="Permalink to &quot;Backend Testing&quot;">​</a></h1><p>Раздел про тестирование backend:</p><ul><li>unit и integration тесты;</li><li>contract тесты;</li><li>e2e сценарии;</li><li>тестовые данные и изоляция окружений.</li></ul><p>Здесь будут собраны практики и инструменты для стабильной поставки.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/testing/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

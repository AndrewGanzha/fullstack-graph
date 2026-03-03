import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend Foundation","description":"","frontmatter":{},"headers":[],"relativePath":"backend/foundation/index.md","filePath":"backend/foundation/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/foundation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-foundation" tabindex="-1">Backend Foundation <a class="header-anchor" href="#backend-foundation" aria-label="Permalink to &quot;Backend Foundation&quot;">​</a></h1><p>Базовые технологии и подходы для backend:</p><ul><li>runtime и язык;</li><li>фреймворк;</li><li>архитектурный стиль;</li><li>базовая безопасность и конфигурация.</li></ul><p>Раздел будет расширяться карточками по конкретным инструментам.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/foundation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

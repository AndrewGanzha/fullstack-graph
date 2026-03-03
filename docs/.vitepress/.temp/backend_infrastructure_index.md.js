import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Backend Infrastructure","description":"","frontmatter":{},"headers":[],"relativePath":"backend/infrastructure/index.md","filePath":"backend/infrastructure/index.md","lastUpdated":null}');
const _sfc_main = { name: "backend/infrastructure/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-infrastructure" tabindex="-1">Backend Infrastructure <a class="header-anchor" href="#backend-infrastructure" aria-label="Permalink to &quot;Backend Infrastructure&quot;">​</a></h1><p>Раздел про эксплуатацию backend:</p><ul><li>Docker и контейнеризация;</li><li>очереди и брокеры сообщений;</li><li>логирование и метрики;</li><li>deployment и CI/CD.</li></ul><p>Карточки будут добавляться по мере наполнения базы знаний.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/infrastructure/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

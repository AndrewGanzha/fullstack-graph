import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Forms & Validation","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/forms-validation/index.md","filePath":"frontend/forms-validation/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/forms-validation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="forms-validation" tabindex="-1">Forms &amp; Validation <a class="header-anchor" href="#forms-validation" aria-label="Permalink to &quot;Forms &amp; Validation&quot;">​</a></h1><p>Валидация, схемы, формы.</p><ul><li><a href="/frontend/forms-validation/vee-validate">VeeValidate</a></li><li><a href="/frontend/forms-validation/zod">Zod</a></li><li><a href="/frontend/forms-validation/valibot">Valibot</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/forms-validation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

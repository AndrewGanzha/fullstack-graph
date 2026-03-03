import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Testing","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/testing/index.md","filePath":"frontend/testing/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/testing/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h1><p>Юнит, e2e и мокинг сетевых запросов.</p><ul><li><a href="/frontend/testing/vitest">Vitest</a></li><li><a href="/frontend/testing/vue-test-utils">@vue/test-utils</a></li><li><a href="/frontend/testing/playwright">Playwright</a></li><li><a href="/frontend/testing/msw">MSW</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/testing/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

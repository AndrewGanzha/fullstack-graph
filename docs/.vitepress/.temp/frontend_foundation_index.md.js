import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Foundation","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/foundation/index.md","filePath":"frontend/foundation/index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/foundation/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="foundation" tabindex="-1">Foundation <a class="header-anchor" href="#foundation" aria-label="Permalink to &quot;Foundation&quot;">​</a></h1><p>Базовые кирпичи Vue-стека: фреймворк, сборка, роутинг и типизация.</p><ul><li><a href="/frontend/foundation/vue">Vue</a></li><li><a href="/frontend/foundation/vite">Vite</a></li><li><a href="/frontend/foundation/typescript">TypeScript</a></li><li><a href="/frontend/foundation/vue-router">Vue Router</a></li><li><a href="/frontend/foundation/nuxt">Nuxt</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/foundation/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

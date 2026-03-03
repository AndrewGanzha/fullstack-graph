import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vue","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/foundation/vue.md","filePath":"frontend/foundation/vue.md","lastUpdated":1770746279000}');
const _sfc_main = { name: "frontend/foundation/vue.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>Прогрессивный фреймворк для построения UI.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Приложения от небольших SPA до больших продуктовых интерфейсов.</li><li>Когда нужна гибкость, композиционный API и сильная экосистема.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>Composition API и SFC.</li><li>Реактивность и вычисляемые значения.</li><li>Слоты, директивы, телепорты.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/foundation/vite">Vite</a></li><li><a href="/frontend/foundation/vue-router">Vue Router</a></li><li><a href="/frontend/state/pinia">Pinia</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li>React, Svelte.</li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li><a href="https://ru.vuejs.org/" target="_blank" rel="noreferrer">Документация Vue</a>.</li><li><a href="https://vue-reactivity-pitfalls.netlify.app/?lang=ru#/destructure-reactive" target="_blank" rel="noreferrer">Песочница реактивности</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/foundation/vue.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue as default
};

import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Axios","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/data/axios.md","filePath":"frontend/data/axios.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/data/axios.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="axios" tabindex="-1">Axios <a class="header-anchor" href="#axios" aria-label="Permalink to &quot;Axios&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>HTTP-клиент для браузера и серверных приложений.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Нужны interceptors и расширенная конфигурация запросов.</li><li>Нужно единообразие в проекте.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>Интерцепторы запросов и ответов.</li><li>Таймауты, базовые URL, трансформации.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/data/tanstack-vue-query">@tanstack/vue-query</a></li><li><a href="/frontend/testing/msw">MSW</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li><a href="/frontend/data/ky">Ky</a>, native fetch.</li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li>Документация Axios.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/data/axios.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const axios = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  axios as default
};

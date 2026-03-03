import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zod","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/forms-validation/zod.md","filePath":"frontend/forms-validation/zod.md","lastUpdated":1770745478000}');
const _sfc_main = { name: "frontend/forms-validation/zod.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zod" tabindex="-1">Zod <a class="header-anchor" href="#zod" aria-label="Permalink to &quot;Zod&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>TypeScript-first библиотека для схем и валидации.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Нужна схема данных, которую можно переиспользовать.</li><li>Нужны типы на основе схем.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>Инференс типов из схем.</li><li>Валидация на клиенте и сервере.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/forms-validation/vee-validate">VeeValidate</a></li><li><a href="/frontend/foundation/typescript">TypeScript</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li><a href="/frontend/forms-validation/valibot">Valibot</a></li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><h3 id="текстовые-материалы" tabindex="-1">Текстовые материалы <a class="header-anchor" href="#текстовые-материалы" aria-label="Permalink to &quot;Текстовые материалы&quot;">​</a></h3><ul><li><a href="https://zod.dev/" target="_blank" rel="noreferrer">Документация Zod</a></li><li><a href="https://habr.com/ru/companies/banki/articles/994886/" target="_blank" rel="noreferrer">Опыт перехода на валидацию с использованием Zod</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/forms-validation/zod.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zod = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zod as default
};

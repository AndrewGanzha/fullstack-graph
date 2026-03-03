import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UnoCSS","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/tooling/unocss.md","filePath":"frontend/tooling/unocss.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/tooling/unocss.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="unocss" tabindex="-1">UnoCSS <a class="header-anchor" href="#unocss" aria-label="Permalink to &quot;UnoCSS&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>Утилитарный CSS-движок с генерацией классов на лету.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Нужен быстрый, гибкий utility-first подход.</li><li>Хотите минимальный финальный CSS.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>On-demand генерация.</li><li>Пресеты и кастомные правила.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/foundation/vite">Vite</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li>Tailwind CSS.</li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li>Документация UnoCSS.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/tooling/unocss.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unocss = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unocss as default
};

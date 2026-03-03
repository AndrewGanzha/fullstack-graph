import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Naive UI","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/ui/naive-ui.md","filePath":"frontend/ui/naive-ui.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/ui/naive-ui.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="naive-ui" tabindex="-1">Naive UI <a class="header-anchor" href="#naive-ui" aria-label="Permalink to &quot;Naive UI&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>Компонентная библиотека для Vue 3 с акцентом на консистентность и типы.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Нужен готовый UI-кит с современным стилем.</li><li>Важна хорошая типизация и компоненты для форм.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>Большой набор компонентов.</li><li>Темизация и токены.</li><li>Удобные таблицы и формы.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/foundation/vue">Vue</a></li><li><a href="/frontend/state/pinia">Pinia</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li><a href="/frontend/ui/element-plus">Element Plus</a></li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li>Документация Naive UI.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/ui/naive-ui.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naiveUi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  naiveUi as default
};

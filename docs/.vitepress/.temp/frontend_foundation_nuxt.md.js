import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nuxt (опционально)","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/foundation/nuxt.md","filePath":"frontend/foundation/nuxt.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/foundation/nuxt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nuxt-опционально" tabindex="-1">Nuxt (опционально) <a class="header-anchor" href="#nuxt-опционально" aria-label="Permalink to &quot;Nuxt (опционально)&quot;">​</a></h1><h2 id="что-это" tabindex="-1">Что это <a class="header-anchor" href="#что-это" aria-label="Permalink to &quot;Что это&quot;">​</a></h2><p>Meta-фреймворк над Vue для SSR/SSG.</p><h2 id="когда-брать" tabindex="-1">Когда брать <a class="header-anchor" href="#когда-брать" aria-label="Permalink to &quot;Когда брать&quot;">​</a></h2><ul><li>Нужен SSR/SSG и готовая структура проекта.</li><li>Нужны авто-роутинг, серверные эндпоинты, meta/SEO.</li></ul><h2 id="основные-возможности" tabindex="-1">Основные возможности <a class="header-anchor" href="#основные-возможности" aria-label="Permalink to &quot;Основные возможности&quot;">​</a></h2><ul><li>SSR/SSG из коробки.</li><li>Автоматическая маршрутизация.</li><li>Серверные API (Nitro).</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/foundation/vue">Vue</a></li><li><a href="/frontend/foundation/vue-router">Vue Router</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li>Vite + SSR вручную.</li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li>Документация Nuxt.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/foundation/nuxt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nuxt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nuxt as default
};

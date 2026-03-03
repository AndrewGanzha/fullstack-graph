import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VueUse","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/utils/vueuse.md","filePath":"frontend/utils/vueuse.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "frontend/utils/vueuse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vueuse" tabindex="-1">VueUse <a class="header-anchor" href="#vueuse" aria-label="Permalink to &quot;VueUse&quot;">​</a></h1><h2 id="что-это-когда-брать" tabindex="-1">Что это + когда брать <a class="header-anchor" href="#что-это-когда-брать" aria-label="Permalink to &quot;Что это + когда брать&quot;">​</a></h2><p>Коллекция composables для Vue. Берём, когда нужно быстро закрывать типичные задачи: реактивные утилиты, интеграции с API браузера и удобные хелперы.</p><h2 id="топ-composables-коротко" tabindex="-1">Топ composables (коротко) <a class="header-anchor" href="#топ-composables-коротко" aria-label="Permalink to &quot;Топ composables (коротко)&quot;">​</a></h2><ul><li><code>useMouse</code> / <code>useWindowSize</code> — базовые данные UI.</li><li><code>useFetch</code> — простой слой над fetch.</li><li><code>useLocalStorage</code> — состояние в storage.</li><li><code>useIntersectionObserver</code> — видимость элементов.</li></ul><h2 id="с-чем-обычно-вместе" tabindex="-1">С чем обычно вместе <a class="header-anchor" href="#с-чем-обычно-вместе" aria-label="Permalink to &quot;С чем обычно вместе&quot;">​</a></h2><ul><li><a href="/frontend/foundation/vue">Vue</a></li><li><a href="/frontend/foundation/vite">Vite</a></li></ul><h2 id="альтернативы" tabindex="-1">Альтернативы <a class="header-anchor" href="#альтернативы" aria-label="Permalink to &quot;Альтернативы&quot;">​</a></h2><ul><li>Самописные composables под проект.</li></ul><h2 id="материалы" tabindex="-1">Материалы <a class="header-anchor" href="#материалы" aria-label="Permalink to &quot;Материалы&quot;">​</a></h2><ul><li>Документация VueUse.</li><li>Подборки лучших composables.</li></ul><div class="mermaid">graph TD vue--&gt;vueuse vueuse--&gt;vite vueuse--&gt;pinia</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/utils/vueuse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vueuse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vueuse as default
};

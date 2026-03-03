import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Fullstack Knowledge Graph","text":"База знаний по frontend и backend","tagline":"Узлы, связи и практические заметки по полному стеку","actions":[{"theme":"brand","text":"Открыть граф","link":"/graph"},{"theme":"alt","text":"Frontend","link":"/frontend/foundation/"},{"theme":"alt","text":"Backend","link":"/backend/"}]},"features":[{"title":"Fullstack-структура","details":"Единая база знаний по frontend и backend в одном формате."},{"title":"Граф зависимостей","details":"Видно, как инструменты и фреймворки связаны между собой."},{"title":"Markdown + Mermaid","details":"Практичные карточки и диаграммы без лишней инфраструктуры."}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="что-внутри" tabindex="-1">Что внутри <a class="header-anchor" href="#что-внутри" aria-label="Permalink to &quot;Что внутри&quot;">​</a></h2><ul><li>Документация и карточки ключевых технологий frontend и backend.</li><li>Граф знаний из <code>graph/nodes.yml</code> и <code>graph/edges.yml</code>.</li><li>Интерактивная страница <code>/graph</code> для поиска и фильтрации.</li></ul><h2 id="быстрыи-старт" tabindex="-1">Быстрый старт <a class="header-anchor" href="#быстрыи-старт" aria-label="Permalink to &quot;Быстрый старт&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> install</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">npm</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> run</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> docs:dev</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};

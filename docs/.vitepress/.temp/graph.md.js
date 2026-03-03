import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Глобальная карта fullstack-стека","description":"","frontmatter":{},"headers":[],"relativePath":"graph.md","filePath":"graph.md","lastUpdated":1770459893000}');
const _sfc_main = { name: "graph.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_GraphView = resolveComponent("GraphView");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="глобальная-карта-fullstack-стека" tabindex="-1">Глобальная карта fullstack-стека <a class="header-anchor" href="#глобальная-карта-fullstack-стека" aria-label="Permalink to &quot;Глобальная карта fullstack-стека&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_GraphView, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_GraphView)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Данные берутся из <code>graph/nodes.yml</code> и <code>graph/edges.yml</code>.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("graph.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const graph = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  graph as default
};

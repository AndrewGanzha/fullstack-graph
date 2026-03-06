<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import cytoscape from 'cytoscape'
import yaml from 'js-yaml'
import nodesRaw from '../../../../graph/nodes.yml?raw'
import edgesRaw from '../../../../graph/edges.yml?raw'

type GraphNode = {
  id: string
  title: string
  type: string
  area: string
  tags?: string[]
  solves?: string[]
  links?: Record<string, string>
}

type GraphEdge = {
  from: string
  to: string
  type: string
}

const AREA_COLORS: Record<string, string> = {
  foundation: '#0ea5e9',
  ui: '#f97316',
  state: '#8b5cf6',
  'forms-validation': '#eab308',
  data: '#10b981',
  utils: '#14b8a6',
  testing: '#ef4444',
  tooling: '#64748b',
  'backend-foundation': '#6366f1',
  'backend-api': '#ec4899',
  'backend-data': '#22c55e',
  'backend-infra': '#f59e0b',
  'backend-testing': '#ef4444'
}

const EDGE_TYPES = [
  { id: 'recommended_with', label: 'Recommended with', color: '#0ea5e9', style: 'solid' },
  { id: 'belongs_to', label: 'Belongs to', color: '#64748b', style: 'dotted' },
  { id: 'integrates_with', label: 'Integrates with', color: '#22c55e', style: 'solid' },
  { id: 'alternative', label: 'Alternative', color: '#f59e0b', style: 'dashed' },
  { id: 'extends', label: 'Extends', color: '#8b5cf6', style: 'solid' },
  { id: 'pairs_with', label: 'Pairs with', color: '#14b8a6', style: 'solid' }
]

const nodesData = (yaml.load(nodesRaw) as GraphNode[]) || []
const edgesData = (yaml.load(edgesRaw) as GraphEdge[]) || []

const query = ref('')
const area = ref('all')
const showLabels = ref(true)
const cyEl = ref<HTMLDivElement | null>(null)
let cy: cytoscape.Core | null = null

const areas = computed(() => {
  const set = new Set(nodesData.map((node) => node.area))
  return ['all', ...Array.from(set)]
})

const totalNodes = computed(() => nodesData.length)
const totalEdges = computed(() => edgesData.length)

const buildElements = () => {
  const nodes = nodesData.map((node) => ({
    data: {
      id: node.id,
      label: node.title,
      area: node.area,
      type: node.type,
      color: AREA_COLORS[node.area] ?? '#94a3b8'
    }
  }))

  const edges = edgesData.map((edge) => ({
    data: {
      id: `${edge.from}__${edge.to}__${edge.type}`,
      source: edge.from,
      target: edge.to,
      type: edge.type
    }
  }))

  return { nodes, edges }
}

const matchesQuery = (node: GraphNode, value: string) => {
  if (!value) return true
  const target = `${node.id} ${node.title} ${(node.tags ?? []).join(' ')}`.toLowerCase()
  return target.includes(value)
}

const applyFilters = () => {
  if (!cy) return
  const q = query.value.trim().toLowerCase()
  const areaFilter = area.value
  const visibleIds = new Set(
    nodesData
      .filter((node) => (areaFilter === 'all' ? true : node.area === areaFilter))
      .filter((node) => matchesQuery(node, q))
      .map((node) => node.id)
  )

  cy.nodes().forEach((node) => {
    const visible = visibleIds.has(node.id())
    node.style('display', visible ? 'element' : 'none')
  })

  cy.edges().forEach((edge) => {
    const visible =
      visibleIds.has(edge.source().id()) &&
      visibleIds.has(edge.target().id())
    edge.style('display', visible ? 'element' : 'none')
  })

  cy.nodes().removeClass('matched')
  if (q) {
    cy.nodes()
      .filter((node) => visibleIds.has(node.id()))
      .filter((node) => {
        const nodeData = nodesData.find((item) => item.id === node.id())
        return nodeData ? matchesQuery(nodeData, q) : false
      })
      .addClass('matched')
  }
}

const rebuildLayout = () => {
  if (!cy) return
  cy.layout({
    name: 'cose',
    animate: true,
    fit: true,
    randomize: false
  }).run()
}

const resetZoom = () => {
  if (!cy) return
  cy.fit(undefined, 40)
}

onMounted(() => {
  if (!cyEl.value) return
  const elements = buildElements()

  cy = cytoscape({
    container: cyEl.value,
    elements,
    layout: { name: 'cose', animate: true },
    style: [
      {
        selector: 'node',
        style: {
          label: showLabels.value ? 'data(label)' : '',
          'background-color': 'data(color)',
          'border-color': '#0f172a',
          'border-width': 1,
          color: '#0f172a',
          'font-size': 10,
          'text-wrap': 'wrap',
          'text-max-width': 90,
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: 'node.matched',
        style: {
          'border-width': 3,
          'border-color': '#0f766e',
          'text-outline-width': 2,
          'text-outline-color': '#ccfbf1'
        }
      },
      {
        selector: 'edge',
        style: {
          width: 2,
          'line-color': '#94a3b8',
          'target-arrow-color': '#94a3b8',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      },
      ...EDGE_TYPES.map((edgeType) => ({
        selector: `edge[type = "${edgeType.id}"]`,
        style: {
          'line-color': edgeType.color,
          'target-arrow-color': edgeType.color,
          'line-style': edgeType.style
        }
      }))
    ]
  })

  applyFilters()
  resetZoom()
})

watch([query, area], () => {
  applyFilters()
})

watch(showLabels, () => {
  if (!cy) return
  cy.nodes().style('label', showLabels.value ? 'data(label)' : '')
})
</script>

<template>
  <section class="graph-wrapper">
    <header class="graph-header">
      <div>
        <p class="graph-kicker">Fullstack Graph</p>
        <h2>Interactive map</h2>
        <p class="graph-subtitle">
          Nodes: {{ totalNodes }} · Edges: {{ totalEdges }}
        </p>
      </div>
      <div class="graph-actions">
        <button class="ghost" type="button" @click="resetZoom">Reset zoom</button>
        <button class="solid" type="button" @click="rebuildLayout">Rebuild</button>
      </div>
    </header>

    <div class="graph-controls">
      <label>
        <span>Search</span>
        <input v-model="query" type="search" placeholder="Vue, Laravel, FastAPI, PostgreSQL..." />
      </label>
      <label>
        <span>Area</span>
        <select v-model="area">
          <option v-for="item in areas" :key="item" :value="item">
            {{ item === 'all' ? 'All' : item }}
          </option>
        </select>
      </label>
      <label class="toggle">
        <input v-model="showLabels" type="checkbox" />
        <span>Show labels</span>
      </label>
    </div>

    <div class="graph-body">
      <div class="graph-canvas" ref="cyEl" />
      <aside class="graph-legend">
        <h3>Edge legend</h3>
        <ul>
          <li v-for="edge in EDGE_TYPES" :key="edge.id">
            <span class="swatch" :style="{ background: edge.color }" />
            <span class="label">{{ edge.label }}</span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.graph-wrapper {
  border-radius: 24px;
  border: 1px solid rgba(15, 118, 110, 0.2);
  background: radial-gradient(circle at top, rgba(13, 148, 136, 0.12), transparent 55%),
    linear-gradient(135deg, rgba(15, 118, 110, 0.08), transparent 60%);
  padding: 24px;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.08);
}

.graph-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.graph-kicker {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 11px;
  color: rgba(15, 23, 42, 0.55);
  margin: 0 0 6px;
}

.graph-subtitle {
  margin: 6px 0 0;
  color: rgba(15, 23, 42, 0.6);
}

.graph-actions {
  display: flex;
  gap: 8px;
}

button {
  border-radius: 999px;
  padding: 8px 14px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid transparent;
}

button.ghost {
  background: transparent;
  border-color: rgba(15, 118, 110, 0.4);
  color: #0f766e;
}

button.solid {
  background: #0f766e;
  color: white;
}

.graph-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.graph-controls label {
  display: grid;
  gap: 6px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(15, 23, 42, 0.6);
}

.graph-controls input,
.graph-controls select {
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.15);
  padding: 10px 12px;
  font-size: 14px;
  background: white;
}

.graph-controls .toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: none;
  font-size: 13px;
}

.graph-body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 16px;
}

.graph-canvas {
  min-height: 520px;
  border-radius: 18px;
  background: white;
  border: 1px solid rgba(15, 23, 42, 0.1);
}

.graph-legend {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(15, 23, 42, 0.08);
  padding: 16px;
  height: fit-content;
}

.graph-legend h3 {
  margin: 0 0 12px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.graph-legend ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.graph-legend li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.graph-legend .swatch {
  width: 14px;
  height: 14px;
  border-radius: 4px;
}

@media (max-width: 960px) {
  .graph-body {
    grid-template-columns: 1fr;
  }
}
</style>

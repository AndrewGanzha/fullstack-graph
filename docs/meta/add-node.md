# Как добавлять узлы

## Где лежат данные

- `graph/nodes.yml`
- `graph/edges.yml`

## Минимальный формат узла

```yaml
- id: vueuse
  title: VueUse
  type: library
  area: utils
  tags: [vue, composables]
  solves: [utility_composables]
  links:
    docs: https://vueuse.org/
    repo: https://github.com/vueuse/vueuse
```

## Минимальный формат связи

```yaml
- from: vue
  to: vueuse
  type: recommended_with
```

## Правила

- `id` только латиница, `kebab-case`.
- `area` должен совпадать с одной из секций: `foundation`, `ui`, `state`, `forms-validation`, `data`, `utils`, `testing`, `tooling`.
- `type` для узлов: `framework`, `library`, `tool`, `service` (или другой явный тип, но одинаковый для группы).
- `type` для связей используем из легенды на странице `/graph`.

## Что дальше

- Добавьте страницу в соответствующей секции `docs/frontend/...`.
- При необходимости добавьте Mermaid-граф внизу страницы.

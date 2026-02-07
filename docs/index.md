---
layout: home
hero:
  name: Vue Knowledge Graph
  text: База знаний по Vue-экосистеме
  tagline: Узлы, связи и практические заметки для фронтенд-стека
  actions:
    - theme: brand
      text: Открыть граф
      link: /graph
    - theme: alt
      text: Foundation
      link: /frontend/foundation/
features:
  - title: Vue-first структура
    details: Секции от Foundation до Testing, только самое прикладное.
  - title: Mermaid в Markdown
    details: Диаграммы рядом с контентом без лишних генераторов.
  - title: Интерактивная карта
    details: Поиск, фильтры и легенда типов связей.
---

## Что внутри

- Документация и карточки ключевых библиотек.
- Граф знаний из `graph/nodes.yml` и `graph/edges.yml`.
- Интерактивная страница `/graph`.

## Быстрый старт

```bash
npm install
npm run docs:dev
```

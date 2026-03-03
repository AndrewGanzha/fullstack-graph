---
layout: home
hero:
  name: Fullstack Knowledge Graph
  text: База знаний по frontend и backend
  tagline: Узлы, связи и практические заметки по полному стеку
  actions:
    - theme: brand
      text: Открыть граф
      link: /graph
    - theme: alt
      text: Frontend
      link: /frontend/foundation/
    - theme: alt
      text: Backend
      link: /backend/
features:
  - title: Fullstack-структура
    details: Единая база знаний по frontend и backend в одном формате.
  - title: Граф зависимостей
    details: Видно, как инструменты и фреймворки связаны между собой.
  - title: Markdown + Mermaid
    details: Практичные карточки и диаграммы без лишней инфраструктуры.
---

## Что внутри

- Документация и карточки ключевых технологий frontend и backend.
- Граф знаний из `graph/nodes.yml` и `graph/edges.yml`.
- Интерактивная страница `/graph` для поиска и фильтрации.

## Быстрый старт

```bash
npm install
npm run docs:dev
```

import DefaultTheme from 'vitepress/theme'
import GraphView from './components/GraphView.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('GraphView', GraphView)
  }
}

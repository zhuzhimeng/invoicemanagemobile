import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { 
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Popup,
  Empty,
  Toast,
  Cell,
  CellGroup
} from 'vant'
import router from './router'
import 'vant/lib/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
   .use(pinia)
   .use(Button)
   .use(Icon)
   .use(NavBar)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Popup)
   .use(Empty)
   .use(Toast)
   .use(Cell)
   .use(CellGroup)

app.mount('#app')
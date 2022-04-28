import "./styles/tailwind.css"
import "animate.css"

import App from "./App.vue"
import { createApp } from "vue"
import router from "./router"
import store from "./store"

const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")

import Loading from "vue-material-design-icons/Loading.vue"
app.component("loading", Loading)
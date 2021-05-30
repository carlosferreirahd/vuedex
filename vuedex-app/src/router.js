import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/gen1",
      name: "primeira-geracao"
    },
  ]
})
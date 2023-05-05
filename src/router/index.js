import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
      props: (Router) => ({ msg: Router.query.msg })
    },
    {
      path: "/V-model",
      component: () => import("../components/V-model.vue")
    },
    {
      path: "/V-on",
      component: () => import("../components/V-on.vue")
    },
    {
      path: "/V-bind",
      component: () => import("../components/V-bind.vue")
    },
    {
      path: "/prop",
      component: () => import("../components/prop.vue")
    },
    {
      path: "/aixos.",
      component: () => import("../components/aixos.vue")
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";

import Articulo from "../views/Articulo.vue";
import Inicio from "../views/Inicio.vue";
import NotFound from "../views/NotFound.vue";
import SobreMi from "../views/SobreMi.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/inicio",
      component: Inicio,
    },
    {
      path: "/articulo",
      component: Articulo,
    },
    {
      path: "/sobremi",
      component: SobreMi,
    },
    {
      path: "/post/:id",
      name:"Post",
      component: () => import ("../views/Post.vue"),
      children: [
        {
          path: "/",
          component:() => import ("../views/Articulo.vue")
        }
      ],
    },
    {
      path: "/contacto",
      component: () => import("../views/Contacto.vue"),
    },
    {
      path: "*",
      redirect: "/notfound",
    },
    {
      path: "/notfound",
      component: NotFound,
      
    },
    {
      path: "",
      redirect: "/inicio",
    }
  ],
});

export default router;

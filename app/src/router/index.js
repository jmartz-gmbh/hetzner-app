import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Server from "../pages/server.vue";
import ServerNew from "../pages/server/add.vue"
import ServerTypes from "../pages/server/types.vue"
import ServerDatacenters from "../pages/server/datacenters.vue"
import ServerLocations from "../pages/server/locations.vue"
import ServerImages from "../pages/server/images.vue"
import Settings from "../pages/settings.vue"

const routes = [
  { path: "/", component: Home },
  {
    path: "/server/:id",
    component: Server,
  },
  {
    path: "/server/new",
    component: ServerNew,
  },
  {
    path: "/settings",
    component: Settings,
  },{
    path: "/settings/types",
    component: ServerTypes,
  },{
    path: "/settings/locations",
    component: ServerLocations,
  },{
    path: "/settings/datacenters",
    component: ServerDatacenters,
  },{
    path: "/settings/images",
    component: ServerImages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Server from "../pages/server.vue";
import ServerNew from "../pages/server/add.vue";
import ServerTypes from "../pages/server/types.vue";
import ServerDatacenters from "../pages/server/datacenters.vue";
import ServerLocations from "../pages/server/locations.vue";
import ServerImages from "../pages/server/images.vue";
import ServerKeys from "../pages/server/keys.vue";
import ServerVolumes from "../pages/server/volumes.vue";
import ServerNetworks from "../pages/server/networks.vue";
import ServerLoadBalancers from "../pages/server/load_balancers.vue";
import Settings from "../pages/settings.vue";
import Impressum from "../pages/impressum.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/impressum", component: Impressum },
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
  },
  {
    path: "/settings/types",
    component: ServerTypes,
  },
  {
    path: "/settings/locations",
    component: ServerLocations,
  },
  {
    path: "/settings/datacenters",
    component: ServerDatacenters,
  },
  {
    path: "/settings/images",
    component: ServerImages,
  },
  {
    path: "/settings/keys",
    component: ServerKeys,
  },
  {
    path: "/settings/volumes",
    component: ServerVolumes,
  },
  {
    path: "/settings/networks",
    component: ServerNetworks,
  },{
    path: "/settings/load-balancers",
    component: ServerLoadBalancers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

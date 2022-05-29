import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Servers from "../pages/servers.vue";
import Server from "../pages/server.vue";
import ServerNew from "../pages/server/add.vue";
import ServerKeyAdd from "../pages/server/key/add.vue";
import ServerNetworkAdd from "../pages/server/network/add.vue";
import ServerNetworkEdit from "../pages/server/network/edit.vue";
import ServerKeyView from "../pages/server/key/view.vue";
import ServerLocationView from "../pages/server/location/view.vue";
import ServerDatacenterView from "../pages/server/datacenter/view.vue";
import ServerKeyEdit from "../pages/server/key/edit.vue";
import ServerTypes from "../pages/server/types.vue";
import ServerDatacenters from "../pages/server/datacenters.vue";
import ServerLocations from "../pages/server/locations.vue";
import ServerImages from "../pages/server/images.vue";
import ServerKeys from "../pages/server/keys.vue";
import ServerVolumes from "../pages/server/volumes.vue";
import ServerNetworks from "../pages/server/networks.vue";
import ServerLoadBalancers from "../pages/server/load_balancers.vue";
import Settings from "../pages/settings.vue";
import Robot from "../pages/robot.vue";
import Impressum from "../pages/impressum.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/robot", component: Robot },
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
    path: "/servers",
    component: Servers,
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
    path: "/settings/location/id/:id",
    component: ServerLocationView,
  },
  {
    path: "/settings/datacenter/id/:id",
    component: ServerDatacenterView,
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
    path: "/settings/key/view/add",
    component: ServerKeyAdd,
  },
  {
    path: "/settings/key/view/:id",
    component: ServerKeyView,
  },
  {
    path: "/settings/key/edit/:id",
    component: ServerKeyEdit,
  },
  {
    path: "/settings/volumes",
    component: ServerVolumes,
  },
  {
    path: "/settings/networks",
    component: ServerNetworks,
  },
  {
    path: "/settings/network/add",
    component: ServerNetworkAdd,
  },
  {
    path: "/settings/network/edit/:id",
    component: ServerNetworkEdit,
  },
  {
    path: "/settings/load-balancers",
    component: ServerLoadBalancers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

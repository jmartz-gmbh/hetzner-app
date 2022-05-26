import { createStore } from "vuex";
import messages from "./messages";
import token from "./token";
import server_types from "./server/types";
import locations from "./server/locations";
import images from "./server/images";
import datacenters from "./server/datacenters";
import ssh_keys from "./server/keys";
import servers from "./servers";
import breadcrumb from "./breadcrumb";
import load_balancers from "./server/load_balancers";
import networks from "./server/networks";
import volumes from "./server/volumes";

const store = createStore({
  modules: {
    messages: messages,
    server_types: server_types,
    servers: servers,
    locations: locations,
    token: token,
    images: images,
    breadcrumb: breadcrumb,
    ssh_keys: ssh_keys,
    load_balancers: load_balancers,
    networks: networks,
    volumes: volumes,
    datacenters: datacenters
  },
});

export default store;

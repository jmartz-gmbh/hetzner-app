import { createStore } from "vuex";
import messages from "./messages.js";
import token from "./token.js";
import server_types from "./server/types.js";
import locations from "./server/locations.js";
import images from "./server/images.js";
import datacenters from "./server/datacenters.js";
import ssh_keys from "./server/keys.js";
import load_balancers from "./server/load_balancers.js";
import networks from "./server/networks.js";
import volumes from "./server/volumes.js";

const store = createStore({
  modules: {
    messages: messages,
    server_types: server_types,
    locations: locations,
    token: token,
    images: images,
    ssh_keys: ssh_keys,
    load_balancers: load_balancers,
    networks: networks,
    volumes: volumes,
    datacenters: datacenters
  },
});

export default store;

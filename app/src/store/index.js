import { createStore } from "vuex";
import messages from "./messages.js";
import token from "./token.js";
import server_types from "./server/types.js";
import locations from "./server/locations.js";
import images from "./server/images.js";
import datacenters from "./server/datacenters.js";

const store = createStore({
  modules: {
    messages: messages,
    server_types: server_types,
    locations: locations,
    token: token,
    images: images,
    datacenters: datacenters
  },
});

export default store;

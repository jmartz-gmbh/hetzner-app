export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "locations-load": function (state, that) {
      that.$store.commit("token-load");
      fetch("https://api.hetzner.cloud/v1/locations", {
        headers: {
          Authorization: "Bearer " + that.$store.state.token.auth,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          state.items = [];
          for (let i = 0; i < data.locations.length; i++) {
            state.items.push(data.locations[i]);
          }
          localStorage.setItem("locations", JSON.stringify(data.locations));
        });
    },
    "location-add": function (state, item) {
      state.items.push(item);
    },
    "locations-reset": function (state) {
      state.items = [];
    },
  },
};

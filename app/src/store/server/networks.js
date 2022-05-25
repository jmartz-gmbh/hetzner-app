export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "network-typ-add": function (state, item) {
      state.items.push(item);
    },
    "networks-reset": function (state) {
      state.items = [];
    },
    "networks-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/networks", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.networks.length; i++) {
              state.items.push(data.networks[i]);
            }
            localStorage.setItem(
              "networks",
              JSON.stringify(data.networks)
            );
          });
      }
    },
  },
};

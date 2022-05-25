export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "datacenter-typ-add": function (state, item) {
      state.items.push(item);
    },
    "datacenters-reset": function (state) {
      state.items = [];
    },
    "datacenters-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/datacenters", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.datacenters.length; i++) {
              state.items.push(data.datacenters[i]);
            }
            localStorage.setItem(
              "datacenters",
              JSON.stringify(data.datacenters)
            );
          });
      }
    },
  },
};

export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "servers-add": function (state, item) {
      state.items.push(item);
    },
    "servers-reset": function (state) {
      state.items = [];
    },
    "servers-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/servers", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.servers.length; i++) {
              state.items.push(data.servers[i]);
            }
            localStorage.setItem("servers", JSON.stringify(data.servers));
          });
      }
    },
  },
};

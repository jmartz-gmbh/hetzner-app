export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "load-balancer-add": function (state, item) {
      state.items.push(item);
    },
    "load-balancers-reset": function (state) {
      state.items = [];
    },
    "load-balancers-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/load_balancers", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.load_balancers.length; i++) {
              state.items.push(data.load_balancers[i]);
            }
            localStorage.setItem(
              "load_balancers",
              JSON.stringify(data.load_balancers)
            );
          });
      }
    },
  },
};

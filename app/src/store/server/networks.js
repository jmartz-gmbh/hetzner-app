export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "network-create": function (state, data) {
      fetch("https://api.hetzner.cloud/v1/networks", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + data.$store.state.token.auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: data.network.name, ip_range: data.network.ip_range }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
          // data.$router.push("/settings/networks");
        });
    },
    "networks-reload": function (state) {
      state.items = JSON.parse(localStorage.getItem('networks'));
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
            localStorage.setItem("networks", JSON.stringify(data.networks));
          });
      }
    },
  },
};

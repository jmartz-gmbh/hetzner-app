export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "volume-typ-add": function (state, item) {
      state.items.push(item);
    },
    "volumes-reset": function (state) {
      state.items = [];
    },
    "volumes-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.volumes.length; i++) {
              state.items.push(data.volumes[i]);
            }
            localStorage.setItem(
              "volumes",
              JSON.stringify(data.volumes)
            );
          });
      }
    },
  },
};

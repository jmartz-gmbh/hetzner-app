export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "ssh-key-add": function (state, item) {
      state.items.push(item);
    },
    "ssh-keys-reset": function (state) {
      state.items = [];
    },
    "ssh-keys-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/ssh_keys", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.ssh_keys.length; i++) {
              state.items.push(data.ssh_keys[i]);
            }
            localStorage.setItem(
              "ssh_keys",
              JSON.stringify(data.ssh_keys)
            );
          });
      }
    },
  },
};

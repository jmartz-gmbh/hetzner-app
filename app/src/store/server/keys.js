export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "ssh-key-add": function (state, item) {
      state.items.push(item);
    },
    "ssh-key-update": function (state, data) {
      data.that.$store.commit("");
      fetch("https://api.hetzner.cloud/v1/ssh_keys/" + data.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + data.that.$store.state.token.auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.that.key.name,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          data.that.$router.push("/settings/keys");
        });
    },
    "ssh-keys-reset": function (state) {
      state.items = [];
    },
    "ssh-keys-reload": function (state) {
      state.items = JSON.parse(localStorage.getItem("ssh_keys"));
    },
    "ssh-key-remove": function (state, data) {
      if (data.that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/ssh_keys/" + data.id, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth,
          },
        });
      }
    },
    "ssh-keys-load": function (state, that) {
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
            localStorage.setItem("ssh_keys", JSON.stringify(data.ssh_keys));
          });
      }
    },
  },
};

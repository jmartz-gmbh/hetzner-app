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
    "server-reboot": function (state, data) {
      fetch(
        "https://api.hetzner.cloud/v1/servers/" + data.id + "/actions/reboot",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          data.that.$router.go();
        });
    },
    "server-delete": function (state, data) {
      fetch("https://api.hetzner.cloud/v1/servers/" + data.id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + data.that.$store.state.token.auth,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          data.that.$router.go();
        });
    },
    "server-unsecure": function (state, data) {
      fetch("https://api.hetzner.cloud/v1/servers/" + data.id + "/actions/change_protection", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + data.that.$store.state.token.auth,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          delete: false,
          rebuild: false
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          data.that.$router.go();
        });
    },
    "server-secure": function (state, data) {
      fetch("https://api.hetzner.cloud/v1/servers/" + data.id + "/actions/change_protection", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + data.that.$store.state.token.auth,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          delete: true,
          rebuild: true
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          data.that.$router.go();
        });
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

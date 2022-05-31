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
    "servers-refresh": function (state) {
      state.items = JSON.parse(localStorage.getItem("servers"));
    },
    "servers-save": function (state) {
      localStorage.setItem("servers", JSON.stringify(state.items));
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
      fetch(
        "https://api.hetzner.cloud/v1/servers/" +
          data.id +
          "/actions/change_protection",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            delete: false,
            rebuild: false,
          }),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          data.that.$router.go();
        });
    },
    "server-secure": function (state, data) {
      fetch(
        "https://api.hetzner.cloud/v1/servers/" +
          data.id +
          "/actions/change_protection",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            delete: true,
            rebuild: true,
          }),
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          data.that.$router.go();
        });
    },
    "servers-reload": function (state) {
      state.items = JSON.parse(localStorage.getItem("servers"));
    },
    "servers-load": function (state, that) {
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
              localStorage.setItem(
                "server-" + data.servers[i].id,
                JSON.stringify(data.servers[i])
              );
            }
            localStorage.setItem("servers", JSON.stringify(data.servers));
          });
      }
    },
    "server-load": function (state, data) {
      data.that.$store.commit("servers-load", data.that);
      if (data.that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/servers/" + data.id, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            for (let i = 0; i < state.items.length; i++) {
              if (state.items[i].id == json.server.id) {
                state.items[i] = json.server;
                data.that.$store.commit("servers-save", data.that);
              }

              data.that.$router.go();
            }
          });
      }
    },
    "server-power-off": function (state, data) {
      if (data.that.$store.state.token.auth) {
        fetch(
          "https://api.hetzner.cloud/v1/servers/" +
            data.id +
            "/actions/poweroff",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + data.that.$store.state.token.auth,
            },
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            data.that.$router.go();
          });
      }
    },
    "server-power-on": function (state, data) {
      if (data.that.$store.state.token.auth) {
        fetch(
          "https://api.hetzner.cloud/v1/servers/" +
            data.id +
            "/actions/poweron",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + data.that.$store.state.token.auth,
            },
          }
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            data.that.$router.go();
          });
      }
    },
  },
};

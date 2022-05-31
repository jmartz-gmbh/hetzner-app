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
            localStorage.setItem("volumes", JSON.stringify(data.volumes));
          });
      }
    },
    "volume-add": function (state, that) {
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: that.form.name,
            size: that.form.size,
            location: that.form.location,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            if (json.error) {
              that.$store.commit("request-error", data.error);
            } else {
              that.$router.push("/settings/volumes/");
            }
          });
      }
    },
    "volume-remove": function (state, that) {
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes/" + that.id, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        }).then(function (response) {
          that.$store.commit("volumes-load", that);
        });
      }
    },
    "volume-edit": function (state, that) {
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes/" + that.id, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: that.name,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            console.log(json);
          });
      }
    },
  },
};

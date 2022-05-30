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
            localStorage.setItem("volumes", JSON.stringify(data.volumes));
          });
      }
    },
    "volume-add": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: that.name,
            size: that.size,
            location: that.location,
          }),
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            that.$router.push("/settings/volumes/");
          });
      }
    },
    "volume-remove": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/volumes/" + that.id, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            that.$router.push('/settings/volumes');
          });
      }
    },
  },
};

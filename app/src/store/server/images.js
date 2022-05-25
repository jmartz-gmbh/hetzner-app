export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "image-add": function (state, item) {
      state.items.push(item);
    },
    "images-reset": function (state) {
      state.items = [];
    },
    "images-load": function (state, that) {
      that.$store.commit("token-load");
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/images", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.images.length; i++) {
              state.items.push(data.images[i]);
            }
            localStorage.setItem("images", JSON.stringify(data.images));
          });
      }
    },
  },
};

  export default {
    state: () => ({
      items: [],
    }),
    mutations: {
      "server-typ-add": function (state, item) {
        state.items.push(item);
      },
      "server-types-reset": function (state,) {
        state.items = [];
      },
      "server-types-load": function(state,that){
        that.$store.commit('token-load');
        fetch("https://api.hetzner.cloud/v1/server_types", {
        headers: {
          Authorization: "Bearer " + that.$store.state.token.auth,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          state.items = [];
          for(let i = 0;i < data.server_types.length;i++){
            state.items.push(data.server_types[i]);
          }
          localStorage.setItem(
            "server_types",
            JSON.stringify(data.server_types)
          );
        });
      }
    },
  };;
  
export default {
  state: () => ({
    items: [],
  }),
  mutations: {
    "load-balancer-add": function (state, item) {
      state.items.push(item);
    },
    "load-balancers-reset": function (state) {
      state.items = [];
    },
    "load-balancers-reload": function (state) {
      state.items = JSON.parse(localStorage.getItem("load_balancers"));
    },
    "load-balancers-load": function (state, that) {
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/load_balancers", {
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
          },
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            state.items = [];
            for (let i = 0; i < data.load_balancers.length; i++) {
              state.items.push(data.load_balancers[i]);
            }
            localStorage.setItem(
              "load_balancers",
              JSON.stringify(data.load_balancers)
            );
          });
      }
    },
    "load-balancer-add": function (state, that) {
      if (that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/load_balancers", {
          method: 'POST',
          headers: {
            Authorization: "Bearer " + that.$store.state.token.auth,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: that.name,
            load_balancer_type: that.typ,
            location: that.location,
          })
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (json) {
            console.log(json);
          });
      }
    },
    "load-balancers-remove": function (state, data) {
      if (data.that.$store.state.token.auth) {
        fetch("https://api.hetzner.cloud/v1/load_balancers/"+data.id, {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer " + data.that.$store.state.token.auth
          }
        })
          .then(function (response) {
          data.that.$router.go('');
          })
      }
    },
  },
};

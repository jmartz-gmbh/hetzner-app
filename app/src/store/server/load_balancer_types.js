export default {
    state: () => ({
      items: [],
    }),
    mutations: {
      "load-balancer-typ-add": function (state, item) {
        state.items.push(item);
      },
      "load-balancer-types-reset": function (state) {
        state.items = [];
      },
      "load-balancer-types-reload": function (state) {
        state.items = JSON.parse(localStorage.getItem("load_balancer_types"));
      },
      "load-balancer-types-load": function (state, that) {
        if (that.$store.state.token.auth) {
          fetch("https://api.hetzner.cloud/v1/load_balancer_types", {
            headers: {
              Authorization: "Bearer " + that.$store.state.token.auth,
            },
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              state.items = [];
              for (let i = 0; i < data.load_balancer_types.length; i++) {
                state.items.push(data.load_balancer_types[i]);
              }
              localStorage.setItem(
                "load_balancer_types",
                JSON.stringify(data.load_balancer_types)
              );
              console.log('Load Balancer Types loaded');
            });
        }
      },
      "load-balancer-types-add": function (state, that) {
        if (that.$store.state.token.auth) {
          fetch("https://api.hetzner.cloud/v1/load_balancers", {
            method: 'POST',
            headers: {
              Authorization: "Bearer " + that.$store.state.token.auth,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: that.name,
              typ: that.typ,
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
    },
  };
  
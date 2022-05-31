<template>
  <div class="vp-load-balcner-add">
    <h2>Load Balancer</h2>
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Name</label>
        <input type="text" v-model="name" class="w-full px-2 py-2" />
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-4">
        <label class="font-bold block mb-2">Typ</label>
        {{$store.state.load_balancers.items}}
        {{this.$store.state.token.auth}}
        <select v-model="typ">
          <option v-for="(lb, index) in $store.state.load_balancers.items">
            {{ lb }}
          </option>
        </select>
      </div>

      <div
        class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-6 text-right"
      >
        <button
          @click="add()"
          class="px-2 py-2 w-full font-bold bg-red-600 text-white"
        >
          create Load Balancer
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadBalancerAdd",
  data() {
    return {
      name: "",
      typ: "",
    };
  },
  methods: {
    add: function () {
      this.$store.commit("load-balancer-add", this);
    },
  },
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/load-balancers",
      label: "Load Balancer",
    });
    this.$store.commit("load-balancers-load", this);
  },
};
</script>

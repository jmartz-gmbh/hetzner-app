<template>
  <div class="vp-load-balancer-tpyes">
    <h2 class="flex justify-between">
      <span class="font-bold">Load Balancer Types</span>
      <div class="buttons">
        <button @click="load()"><fa icon="rotate" /></button>
      </div>
    </h2>
    <div class="tw-table block border border-black mt-5">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-2">Beschreibung</div>
        <div class="col col-span-12 md:col-span-2">Services</div>
        <div class="col col-span-12 md:col-span-2">Targets</div>
      </div>
      <div
        v-for="(typ, index) in $store.state.load_balancer_types.items"
        class="row grid grid-cols-12 font-bold px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-2">
          {{ typ.name }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ typ.description }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ typ.max_services }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ typ.max_targets }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerLoadBalancerTypes",
  mounted() {
    this.$store.commit("load-balancer-types-load", this);
  },
  methods: {
    load: function () {
      this.$store.commit("load-balancer-types-load", this);
    },
    add: function () {
      this.$router.push("/settings/load-balancer/add");
    },
  },
};
</script>

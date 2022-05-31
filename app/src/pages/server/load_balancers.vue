<template>
  <div class="tab-ssh-keys">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">{{ $t("server.loadbalancers") }}</span>
        <div class="buttons space-x-2">
          <button @click.prevent="load()">
            <fa icon="rotate" />
          </button>
          <button @click.prevent="add()">
            <fa icon="plus" />
          </button>
        </div>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.id") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.name") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.created") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.typ") }}
          </div>
        </div>
        <div
          v-if="!$store.state.load_balancers.items.length"
          class="table-empty text-center block text-lg font-bold my-2"
        >
          Momentan sind keine Load Balancer vorhanden
        </div>
        <div v-else class="table-full">
          <div
            v-for="(typ, index) in $store.state.load_balancers.items"
            :key="index"
            class="row grid grid-cols-12 px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-2">
              {{ typ.id }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ typ.name }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ typ.created }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ typ.load_balancer_type.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerLoadBalancers",
  mounted() {
    this.$store.commit("load-balancers-load", this);
  },
  methods: {
    load: function () {
      this.$store.commit("load-balancers-load", this);
    },
    add: function () {
      this.$router.push("/settings/load-balancer/add");
    },
  },
};
</script>

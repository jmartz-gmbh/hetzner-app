<template>
  <div class="vc-tab-server-types">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Server Types</span>
        <button @click.prevent="load()"><fa icon="rotate" /></button>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.name") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.cores") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.memory") }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ $t("general.disk") }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            {{ $t("general.price") }}
          </div>
        </div>

        <div
          v-for="(typ, index) in $store.state.server_types.items"
          :key="index"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-2">
            {{ typ.name }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ typ.cores }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ typ.memory }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ typ.disk }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            <ul>
              <li v-for="(price, key) in typ.prices">
                {{ price.location }} {{ parseFloat(price.price_monthly.net) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabServerTypes",
  data() {
    return {
      server_types: [],
    };
  },
  mounted() {
    this.$store.commit("server-types-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/types",
      label: "Types",
    });
  },
  methods: {
    load: function () {
      this.$store.commit("server-types-load", this);
    },
  },
};
</script>
<style lang="less" scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>

<template>
  <div class="tab-locations">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Locations</span>
        <button @click.prevent="loadLocations()"><fa icon="rotate" /></button>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-4">Beschreibung</div>
          <div class="col col-span-12 md:col-span-2">Land</div>
        </div>
        <div
          v-for="(typ, index) in this.$store.state.datacenters.items"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="row grid grid-cols-12 px-2 py-2">
            <div class="col col-span-12 md:col-span-2">
              {{ typ.id }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              <router-link
                :to="'/settings/location/id/' + typ.id"
                class="text-blue-400"
                >{{ typ.name }}</router-link
              >
            </div>
            <div class="col col-span-12 md:col-span-4">
              {{ typ.description }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ typ.country }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabLocations",
  data() {
    return {
      locations: [],
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("locations-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/locations",
      label: "Locations",
    });
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

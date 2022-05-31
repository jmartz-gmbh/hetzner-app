<template>
  <div class="tab-locations">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Locations</span>
        <button @click.prevent="load()"><fa icon="rotate" /></button>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-4">
            {{ $t("general.description") }}
          </div>
          <div class="col col-span-12 md:col-span-2">Netzwerk</div>
        </div>
        <div
          v-for="(typ, index) in this.$store.state.datacenters.items"
          class="row grid grid-cols-12 px-2 py-2"
        >
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
            {{ typ.location.network_zone }}
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
  methods: {
    load: function () {
      this.$store.commit("locations-load", this);
    },
  },
};
</script>

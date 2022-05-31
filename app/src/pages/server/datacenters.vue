<template>
  <div class="tab-datacenters">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Datacenters</span>
        <button @click.prevent="loadDatacenters()">
          <fa icon="rotate" />
        </button>
      </h2>

      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-4">Beschreibung</div>
          <div class="col col-span-12 md:col-span-2">Location</div>
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
              :to="'/settings/datacenter/id/' + typ.id"
              class="text-blue-400"
              >{{ typ.name }}</router-link
            >
          </div>
          <div class="col col-span-12 md:col-span-4">
            {{ typ.description }}
          </div>

          <div class="col col-span-12 md:col-span-2">
            <router-link
              :to="'/settings/location/id/' + typ.location.id"
              class="text-blue-400"
              >{{ typ.location.name }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabDatacenters",
  data() {
    return {
      datacenters: [],
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("datacenters-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/datacenters",
      label: "Datacenters",
    });
  },
  methods: {
    loadDatacenters: function () {
      this.$store.commit("datacenters-load", this);
    },
  },
};
</script>

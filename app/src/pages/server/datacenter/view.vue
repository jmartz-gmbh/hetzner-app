<template>
  <div class="vp-location-view">
    <h2 class="flex justify-between mb-3">
      <span class="text-lg">Datacenter ({{ $route.params.id }})</span>
      <div class="buttons">
        <button @click="reload()"><fa icon="rotate" /></button>
      </div>
    </h2>
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-4">Description</div>
        <div class="col col-span-12 md:col-span-2">Location</div>
      </div>
      <div class="row grid grid-cols-12 px-2 py-2">
        <div class="col col-span-12 md:col-span-2">
          {{ datacenter.id }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ datacenter.name }}
        </div>
        <div class="col col-span-12 md:col-span-4">
          {{ datacenter.description }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          <router-link
            :to="'/settings/location/id/' + datacenter.location.id"
            class="text-blue-400"
            >{{ datacenter.location.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationView",
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/datacenters",
      label: "Datacenters",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/datacenter/id/" + this.$route.params.id,
      label: "Datacenter (" + this.$route.params.id + ")",
    });
  },
  computed: {
    datacenter: function () {
      this.$store.commit("datacenters-reload", this);
      for (let i = 0; i < this.$store.state.datacenters.items.length; i++) {
        if (
          this.$store.state.datacenters.items[i].id == this.$route.params.id
        ) {
          return this.$store.state.datacenters.items[i];
        }
      }
    },
  },
};
</script>

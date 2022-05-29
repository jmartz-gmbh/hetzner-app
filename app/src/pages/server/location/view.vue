<template>
  <div class="vp-location-view">
    <h2 class="flex justify-between mb-3">
      <span class="text-lg">Location ({{ $route.params.id }})</span>
      <div class="buttons">
        <button @click="reload()"><fa icon="rotate" /></button>
      </div>
    </h2>
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-2">Description</div>
        <div class="col col-span-12 md:col-span-2">Country</div>
        <div class="col col-span-12 md:col-span-2">City</div>
        <div class="col col-span-12 md:col-span-2">Network Zone</div>
        <div class="col col-span-12 md:col-span-2">Lat/Long</div>
      </div>
      <div class="row grid grid-cols-12 px-2 py-2">
        <div class="col col-span-12 md:col-span-2">
          {{ location.id }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ location.description }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ location.country }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ location.city }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ location.network_zone }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ location.latitude }} <br>
          {{ location.longitude }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationView",
  computed: {
    location: function () {
      this.$store.commit("locations-reload", this);
      for (let i = 0; i < this.$store.state.locations.items.length; i++) {
        if (this.$store.state.locations.items[i].id == this.$route.params.id) {
          return this.$store.state.locations.items[i];
        }
      }
    },
  },
};
</script>

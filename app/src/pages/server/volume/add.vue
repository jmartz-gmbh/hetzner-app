<template>
  <div class="vp-volume-add">
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Volume Name</label>
        <input type="text" v-model="form.name" class="w-full px-2 py-2" />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Volume Size</label>
        <input type="number" v-model="form.size" class="w-full px-2 py-2" />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Volume Location</label>
        <select v-model="form.location" class="w-full px-2 py-2">
          <option v-for="(l, i) in $store.state.locations.items">
            {{ l.id }}
          </option>
        </select>
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <button
          class="px-2 py-2 text-white bg-red-500 block w-full mt-7"
          @click="add()"
        >
          add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VolumeAdd",
  data() {
    return {
      form: {
        name: "",
        size: 0,
        location: "",
      },
    };
  },
  mounted() {
    this.$store.commit("locations-load", this);
    this.$store.commit("servers-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/volumes",
      label: "Volumes",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/volume/add",
      label: "Add",
    });
  },
  methods: {
    toggle: function () {
      if (this.select != "server") {
        this.select = "server";
      } else {
        this.select = "location";
      }
    },
    add: function () {
      this.$store.commit("volume-add", this);
    },
  },
};
</script>

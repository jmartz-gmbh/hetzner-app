<template>
  <div class="vp-volume-edit">
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Volume Name</label>
        <input type="text" v-model="name" class="w-full px-2 py-2" />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Volume Size</label>
        <input type="number" v-model="size" class="w-full px-2 py-2" />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <button
          class="px-2 py-2 text-white bg-red-500 block w-full mt-7"
          @click="edit()"
        >
          update
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VolumeEdit",
  data() {
    return {
      id: 0,
      name: "",
      size: 10,
      server: {},
      location: "",
    };
  },
  mounted() {
    this.$store.commit("locations-load", this);
    this.$store.commit("servers-load", this);
    this.$store.commit("servers-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/volumes",
      label: "Volumes",
    });
    this.id = this.$route.params.id;
    this.load();
  },
  methods: {
    edit: function () {
      this.$store.commit("volume-edit", this);
    },
    load: function () {
      const that = this;
      fetch("https://api.hetzner.cloud/v1/volumes/" + that.id, {
        headers: {
          Authorization: "Bearer " + that.$store.state.token.auth,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.name = json.volume.name;
          that.size = json.volume.size;
        });
    },
  },
};
</script>

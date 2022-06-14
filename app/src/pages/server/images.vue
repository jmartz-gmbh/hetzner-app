<template>
  <div class="tab-images">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Images</span>
        <button @click.prevent="loadImages()"><fa icon="rotate" /></button>
      </h2>
      <div class="tw-table block border border-black mt-5">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">Id</div>
          <div class="col col-span-12 md:col-span-4">Name</div>
          <div class="col col-span-12 md:col-span-6">Status</div>
        </div>
        <div
          v-for="(image, index) in $store.state.images.items"
          class="row grid grid-cols-12 font-bold px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-2">
            {{ image.id }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            {{ image.name }}
          </div>
          <div class="col col-span-12 md:col-span-6">
            {{ image.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabImages",
  data() {
    return {
      images: [],
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("images-load", this);
  },
  methods: {
    loadImages: function () {
      this.$store.commit("images-load", this);
    },
  },
};
</script>

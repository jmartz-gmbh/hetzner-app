<template>
  <div class="tab-images">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Images</span>
        <button @click.prevent="loadImages()"><fa icon="rotate"/></button>
      </h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
        <tr v-for="(image, index) in $store.state.images.items">
          <td>{{ image.id }}</td>
          <td>{{ image.name }}</td>
          <td>{{ image.status }}</td>
        </tr>
      </table>
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
    this.$store.commit('images-load',this);
  },
  methods: {
    loadImages: function () {
      this.$store.commit('images-load',this);
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

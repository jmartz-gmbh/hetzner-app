<template>
  <div class="tab-datacenters">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg ">Datacenters</span>
        <button @click.prevent="loadDatacenters()">
          <fa icon="rotate" />
        </button>
      </h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Beschreibung</th>
          <th>Location Id</th>
        </tr>
        <tr v-for="(typ, index) in this.$store.state.datacenters.items">
          <td>{{ typ.id }}</td>
          <td>{{ typ.name }}</td>
          <td>{{ typ.description }}</td>
          <td>{{ typ.location.id }}</td>
        </tr>
      </table>
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
  },
  methods: {
    loadDatacenters: function () {
      this.$store.commit("datacenters-load", this);
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

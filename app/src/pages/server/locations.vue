<template>
  <div class="tab-locations">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
         <span class="font-bold text-lg">Locations</span>
        <button @click.prevent="loadLocations()"><font-awesome-icon icon="rotate"/></button>
      </h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Beschreibung</th>
          <th>Land</th>
        </tr>
        <tr v-for="(typ, index) in $store.state.locations.items">
          <td>{{ typ.id }}</td>
          <td>{{ typ.name }}</td>
          <td>{{ typ.description }}</td>
          <td>{{ typ.country }}</td>
        </tr>
      </table>
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
    this.$store.commit('locations-load', this);
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

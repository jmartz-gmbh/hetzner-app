<template>
  <div class="vc-tab-server-types">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
         <span class="font-bold text-lg">Server Types</span>
        <button @click.prevent="loadServers()"><fa icon="rotate"/></button>
      </h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Cores</th>
          <th>Memory</th>
          <th>Disk</th>
          <th>Prices</th>
        </tr>
        <tr v-for="(typ, index) in $store.state.server_types.items">
          <td>{{ typ.name }}</td>
          <td>{{ typ.cores }}</td>
          <td>{{ typ.memory }}</td>
          <td>{{ typ.disk }}</td>
          <td>
            <ul>
              <li v-for="(price, key) in typ.prices">
                {{ price.location }} {{ parseFloat(price.price_monthly.net) }}
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabServerTypes",
  data() {
    return {
      server_types: [],
    };
  },
  mounted() {
    this.$store.commit("server-types-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/types",
      label: "Types",
    });
  },
  methods: {
    loadServers: function(){
      this.$store.commit("server-types-load", this);
    }
  }
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

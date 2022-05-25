<template>
  <div class="vc-tab-server-types">
    <div class="settings-servers mt-3">
      <h2 class="text-lg">
        Servers Types
        <button @click.prevent="loadServers()">load</button>
      </h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Cores</th>
          <th>Memory</th>
          <th>Disk</th>
          <th>Prices</th>
        </tr>
        <tr v-for="(typ, index) in server_types">
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
  data(){
return {
    server_types: []
}
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.server_types = JSON.parse(localStorage.getItem("server_types"));
  },
  methods: {
    loadServers: function () {
      const that = this;
      fetch("https://api.hetzner.cloud/v1/server_types", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          that.server_types = data.server_types;
          localStorage.setItem(
            "server_types",
            JSON.stringify(data.server_types)
          );
        });
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

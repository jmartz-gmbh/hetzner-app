<template>
  <div class="tab-datacenters">
    <div class="settings-servers mt-3">
      <h2 class="text-lg">
        Datacenters
        <button @click.prevent="loadDatacenters()">load</button>
      </h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Beschreibung</th>
          <th>Location Id</th>
        </tr>
        <tr v-for="(typ, index) in datacenters">
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
    let datacenters = JSON.parse(localStorage.getItem("datacenters"));
    if (datacenters == null) {
      this.loadDatacenters();
    } else {
      this.datacenters = datacenters;
    }
  },
  methods: {
    loadDatacenters: function () {
      const that = this;
      fetch("https://api.hetzner.cloud/v1/datacenters", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          that.datacenters = data.datacenters;
          localStorage.setItem("datacenters", JSON.stringify(data.datacenters));
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

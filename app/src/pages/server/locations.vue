<template>
  <div class="tab-locations">
    <div class="settings-servers mt-3">
      <h2 class="text-lg">
        Locations
        <button @click.prevent="loadLocations()">load</button>
      </h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Beschreibung</th>
          <th>Land</th>
        </tr>
        <tr v-for="(typ, index) in locations">
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
    let locations = JSON.parse(localStorage.getItem("locations"));
    if (locations == null) {
      this.loadLocations();
    } else {
      this.locations = locations;
    }
  },
  methods: {
    loadLocations: function () {
      const that = this;
      fetch("https://api.hetzner.cloud/v1/locations", {
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          that.locations = data.locations;
          localStorage.setItem("locations", JSON.stringify(data.locations));
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

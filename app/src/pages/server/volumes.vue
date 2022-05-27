<template>
  <div class="tab-ssh-keys">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg ">Volumes</span>
        <button @click.prevent="loadVolumes()">
          <fa icon="rotate" />
        </button>
      </h2>
      <table class="table-auto">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Erstellt</th>
          <th>Server</th>
        </tr>
        <tr v-for="(typ, index) in this.$store.state.volumes.items">
          <td>{{ typ.id}}</td>
          <td>{{ typ.name}}</td>
          <td>{{ typ.created}}</td>
          <td>{{ typ.server}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerKeys",
  data() {
    return {
      ssh_keys: [],
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("volumes-load", this);
  },
  methods: {
    loadSshKeys: function () {
      this.$store.commit("volumes-load", this);
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

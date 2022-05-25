<template>
  <div class="vp-server-view" v-if="server">
    <h2>Server View

        
    </h2>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Status</th>
        <th>Created at</th>
      </tr>
      <tr>
        <td>{{ server.id }}</td>
        <td>
          {{ server.name }}
        </td>
        <td>{{ server.status }}</td>
        <td>{{ server.created }}</td>
      </tr>
    </table>
    <div v-if="server.public_net" class="public-network">
      <table>
        <tr>
          <th>Id</th>
          <th>Ip</th>
          <th>DNS</th>
        </tr>
        <tr>
          <td>{{ server.public_net.ipv4.id }}</td>
          <td>{{ server.public_net.ipv4.ip }}</td>
          <td>{{ server.public_net.ipv4.dns_ptr }}</td>
        </tr>
        <tr>
          <td>{{ server.public_net.ipv6.id }}</td>
          <td>{{ server.public_net.ipv6.ip }}</td>
          <td>{{ server.public_net.ipv6.dns_ptr }}</td>
        </tr>
      </table>
    </div>
    <pre> {{ server }}</pre>
  </div>
</template>
<script>
export default {
  name: "ServerView",
  data() {
    return {
      server: {},
    };
  },
  mounted() {
    this.load(this.$route.params.id);
  },
  methods: {
    load: function (id) {
      this.server = JSON.parse(localStorage.getItem("server-" + id));
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

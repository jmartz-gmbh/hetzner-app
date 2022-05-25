<template>
  <div class="WelcomeScreen">
    <div v-if="servers === false" class="welcome-form">
      <h2>Enter Access Token</h2>
      <div class="form-group">
        <label>Access Token</label>
        <input v-model="token" name="token" />
      </div>
      <div class="form-button">
        <button @click.prevent="save(token)">Senden</button>
      </div>
    </div>
    <div v-else class="">
      <h2>
        Servers
        <router-link to="/server/new">
          <font-awesome-icon class="float-right mr-2" icon="plus" />
        </router-link>
      </h2>
      <hr />
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(server, index) in servers">
          <td>{{ server.id }}</td>
          <td>
            <router-link :to="'/server/' + server.id" class="text-blue-400">{{
              server.name
            }}</router-link>
          </td>
          <td>{{ server.status }}</td>
          <td>{{ server.created }}</td>
          <td>
            <button @click="deleteServer(server.id)">delete</button>
            <button @click="rebootServer(server.id)">reboot</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      token: "",
      servers: false,
    };
  },
  methods: {
    rebootServer: function (id) {
      fetch("https://api.hetzner.cloud/v1/servers/" + id + '/actions/reboot', {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
    deleteServer: function (id) {
      fetch("https://api.hetzner.cloud/v1/servers/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.$router.push('/');
        });
    },
    save: function (token) {
      this.token = token;
      localStorage.setItem("token", token);
      this.loadServers(token);
    },
    loadServers: function (value) {
      fetch("https://api.hetzner.cloud/v1/servers", {
        headers: {
          Authorization: "Bearer " + value,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.servers) {
            this.servers = data.servers;
            data.servers.map(function (item) {
              localStorage.setItem("server-" + item.id, JSON.stringify(item));
            });
          }
        });
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.token = token;
      this.save(token);
    }
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

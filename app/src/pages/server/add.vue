<template>
  <div class="vp-server-new">
    <h2>New Server</h2>
    <p>Lorem Ipsum dolor at atem</p>
    <div class="form">
      <div class="form-group">
        <label>Server Name</label>
        <input type="text" v-model="name" />
      </div>

      <div class="form-group">
        <label>Server Type</label>
        <select v-model="server_type">
          <option v-for="(typ, index) in server_types">{{ typ.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Server Location</label>
        <select v-model="location">
          <option v-for="(l, index) in locations">{{ l.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Server Image</label>
        <select v-model="image">
          <option v-for="(i, index) in images">{{ i.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Server SSH Keys</label>
        <select v-model="key">
          <option v-for="(k, index) in ssh_keys">{{ k.name }}</option>
        </select>
      </div>

      <button @click="createServer()" class="px-2 py-2 bg-gray-300 border border-black">create</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addServer",
  data() {
    return {
      name: "",
      server_type: "",
      location: "",
      key: '',
      image: "",
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
    server_types: function () {
      return JSON.parse(localStorage.getItem("server_types"));
    },
    images: function () {
      return JSON.parse(localStorage.getItem("images"));
    },
    ssh_keys: function () {
      return JSON.parse(localStorage.getItem("ssh_keys"));
    },
    locations: function () {
      return JSON.parse(localStorage.getItem("locations"));
    },
  },
  methods: {
    createServer: function () {
      fetch("https://api.hetzner.cloud/v1/servers", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          server_type: this.server_type,
          location: this.location,
          ssh_keys: [this.key],
          image: this.image,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.server) {
            console.log("New Server with id: " + data.server.id);
          }
        });
    },
  },
};
</script>

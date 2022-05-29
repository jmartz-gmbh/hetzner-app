<template>
  <div class="vp-server-new">
    <h2>New Server</h2>
    <p>Lorem Ipsum dolor at atem</p>
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Server Name</label>
        <input type="text" v-model="name" class="w-full px-2 py-2" />
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Server Type</label>
        <select v-model="server_type" class="w-full px-2 py-2">
          <option v-for="(typ, index) in $store.state.server_types.items">
            {{ typ.name }}
          </option>
        </select>
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Server Location</label>
        <select v-model="location" class="w-full px-2 py-2">
          <option v-for="(l, index) in $store.state.locations.items">
            {{ l.name }}
          </option>
        </select>
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Server Image</label>
        <select v-model="image" class="w-full px-2 py-2">
          <option v-for="(i, index) in $store.state.images.items">
            {{ i.name }}
          </option>
        </select>
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Server SSH Keys</label>
        <select v-model="key" class="w-full px-2 py-2">
          <option v-for="(k, index) in $store.state.ssh_keys.items">
            {{ k.name }}
          </option>
        </select>
      </div>

      <div
        class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2 text-right"
      >
        <button
          @click="createServer()"
          class="px-2 py-2 w-full mt-7 font-bold bg-red-600 text-white"
        >
          create Server
        </button>
      </div>
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
      key: "",
      image: "",
    };
  },
  mounted() {
    this.$store.commit("server-types-load", this);
    this.$store.commit("ssh-keys-load", this);
    this.$store.commit("images-load", this);
    this.$store.commit("locations-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/servers",
      label: "Servers",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/server/new",
      label: "Add",
    });
  },
  methods: {
    createServer: function () {
      fetch("https://api.hetzner.cloud/v1/servers", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.$store.state.token.auth,
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
            this.$router.push("/servers");
          }
        });
    },
  },
};
</script>

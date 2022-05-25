<template>
  <div class="WelcomeScreen">
    <div
      v-if="$store.state.servers.items === false"
      class="welcome-form block text-center mt-5"
    >
      <h2 class="text-lg bg-gray-300 px-2 py-2 border border-black">
        Add your Project Token under
        <router-link to="/settings" class="text-blue-400">Settings</router-link>
      </h2>
    </div>
    <div v-else class="">
      <h2 class="flex justify-between px-2 my-2">
        <span class="text-lg font-bold">Servers</span>
        <router-link to="/server/new">
          <font-awesome-icon class="float-right mr-2" icon="plus" />
        </router-link>
      </h2>
      <hr />
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-2">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-2">Status</div>
          <div class="col col-span-12 md:col-span-4">Created</div>
          <div class="col col-span-12 md:col-span-2">Actions</div>
        </div>
        <div
          v-for="(server, index) in $store.state.servers.items"
          :key="index"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-2">
            {{ server.id }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            <router-link :to="'/server/' + server.id" class="text-blue-400">{{
              server.name
            }}</router-link>
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ server.status }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            {{ server.created }}
          </div>
          <div class="col col-span-12 md:col-span-2 space-x-2">
            <button
              @click="deleteServer(server.id)"
              class="border border-black px-2 py-2 w-10 h-10"
              title="Delete Server"
            >
              <font-awesome-icon icon="times" />
            </button>
            <button
              @click="rebootServer(server.id)"
              class="border border-black px-2 py-2 w-10 h-10"
              title="Reboot Server"
            >
              <font-awesome-icon icon="rotate" />
            </button>
          </div>
        </div>
      </div>
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
      if (confirm("Do you want to Restart the Server ?")) {
        fetch(
          "https://api.hetzner.cloud/v1/servers/" + id + "/actions/reboot",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + this.token,
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.$router.go();
          });
      }
    },
    deleteServer: function (id) {
      if (confirm("Do you want to Delete the Server ?")) {
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
            this.$router.go();
          });
      }
    },
    loadServers: function () {
      this.$store.commit("servers-load", this);
    },
  },
  mounted() {
    this.loadServers();
  },
};
</script>

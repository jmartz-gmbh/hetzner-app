<template>
  <div class="WelcomeScreen">
    <div
      v-if="$store.state.token.auth === ''"
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
        <div class="buttons">
          <router-link to="/server/new">
            <fa class="float-right mr-2" icon="plus" />
          </router-link>
          <fa
            @click="refresh()"
            class="float-right mr-2"
            icon="rotate"
          />
        </div>
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
          v-if="$store.state.servers.items.length == 0"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 text-center">
            Momentan sind noch keine Server vorhanden.
          </div>
        </div>
        <div
          v-else
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
              <fa icon="times" />
            </button>
            <button
              @click="rebootServer(server.id)"
              class="border border-black px-2 py-2 w-10 h-10"
              title="Reboot Server"
            >
              <fa icon="rotate-right" />
            </button>
            <button
              v-if="!server.protection.delete"
              @click="toogleSecureServer(server.id)"
              class="border border-black px-2 py-2 w-10 h-10"
              title="Secure Server"
            >
              <fa icon="lock" />
            </button>
            <button
              v-if="server.protection.delete"
              @click="toogleUnsecureServer(server.id)"
              class="border border-black px-2 py-2 w-10 h-10"
              title="Secure Server"
            >
              <fa icon="lock-open" />
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
    return {};
  },
  mounted() {
    this.loadServers();
    this.$store.commit("breadcrumb-add", {
      link: "/servers",
      label: "Servers",
    });
  },
  methods: {
    refresh: function () {
      this.$store.commit("servers-load", this);
      this.$store.commit("servers-refresh", this);
    },
    rebootServer: function (id) {
      if (confirm("Do you want to Restart the Server ?")) {
        this.$store.commit("server-reboot", { that: this, id });
      }
    },
    deleteServer: function (id) {
      if (confirm("Do you want to Delete the Server ?")) {
        this.$store.commit("server-delete", { that: this, id });
      }
    },
    toogleSecureServer: function (id) {
      if (confirm("Do you want to Secure the Server ?")) {
        this.$store.commit("server-secure", { that: this, id });
      }
    },
    toogleUnsecureServer: function (id) {
      if (confirm("Do you want to Secure the Server ?")) {
        this.$store.commit("server-unsecure", { that: this, id });
      }
    },
    loadServers: function () {
      this.$store.commit("servers-load", this);
    },
  },
};
</script>

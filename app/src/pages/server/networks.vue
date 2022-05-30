<template>
  <div class="tab-ssh-keys">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Networks</span>
        <div class="buttons space-x-2">
          <button @click.prevent="load()">
            <fa icon="rotate" />
          </button>
          <button @click.prevent="add()">
            <fa icon="plus" />
          </button>
        </div>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-1">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-3">Erstellt</div>
          <div class="col col-span-12 md:col-span-3">Ip Range</div>
          <div class="col col-span-12 md:col-span-3">Aktionen</div>
        </div>
        <div
          v-for="(typ, index) in this.$store.state.networks.items"
          :key="index"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-1">
            {{ typ.id }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            {{ typ.name }}
          </div>
          <div class="col col-span-12 md:col-span-3">
            {{ typ.created }}
          </div>
          <div class="col col-span-12 md:col-span-3">
            {{ typ.ip_range }}
          </div>
          <div class="col col-span-12 md:col-span-3 space-x-2">
            <button @click="remove(typ.id)"><fa icon="trash-can" /></button>
            <button @click="edit(typ.id)"><fa icon="edit" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerNetworks",
  data() {
    return {
      networks: [],
      id: 0
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("networks-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/networks",
      label: "Networks",
    });
  },
  methods: {
    add: function () {
      this.$router.push("/settings/network/add");
    },
    edit: function (id) {
      this.$router.push("/settings/network/edit/" + id);
    },
    load: function () {
      this.$store.commit("networks-load", this);
    },
    remove: function (id) {
      this.id = id;
      this.$store.commit("network-remove", this);
    },
  },
};
</script>

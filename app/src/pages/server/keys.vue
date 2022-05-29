<template>
  <div class="tab-ssh-keys">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">SSH Keys</span>
        <div class="buttons space-x-2">
          <button @click.prevent="load()">
            <fa icon="rotate" />
          </button>
          <router-link to="/settings/key/view/add">
            <fa icon="plus" />
          </router-link>
        </div>
      </h2>
      <div class="tw-table block border border-black">
        <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
          <div class="col col-span-12 md:col-span-1">Id</div>
          <div class="col col-span-12 md:col-span-2">Name</div>
          <div class="col col-span-12 md:col-span-3">Created</div>
          <div class="col col-span-12 md:col-span-4">Fingerprint</div>
          <div class="col col-span-12 md:col-span-2 text-right">Actions</div>
        </div>
        <div
          v-for="(typ, index) in $store.state.ssh_keys.items"
          :key="index"
          class="row grid grid-cols-12 px-2 py-2"
        >
          <div class="col col-span-12 md:col-span-1">
            {{ typ.id }}
          </div>
          <div class="col col-span-12 md:col-span-2">
            <router-link
              :to="'/settings/key/view/' + typ.id"
              class="text-blue-400"
              >{{ typ.name }}</router-link
            >
          </div>
          <div class="col col-span-12 md:col-span-3">
            {{ typ.created }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            {{ typ.fingerprint }}
          </div>
          <div class="col col-span-12 md:col-span-2 space-x-2 text-right">
            <button @click="remove(typ.id)"><fa icon="trash-can" /></button>
            <router-link :to="'/settings/key/edit/' + typ.id"
              ><fa icon="edit"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerKeys",
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
    ssh_keys: function () {
      return this.$store.state.ssh_keys.items;
    },
  },
  mounted() {
    this.$store.commit("ssh-keys-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/keys",
      label: "Keys",
    });
  },
  methods: {
    load: function () {
      this.$store.commit("ssh-keys-load", this);
    },
    remove: function (id) {
      if (confirm("Do you want to Delete this SSH Key? ")) {
        this.$store.commit("ssh-key-remove", {
          that: this,
          id: id,
        });
      }
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

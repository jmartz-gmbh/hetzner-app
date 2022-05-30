<template>
  <div class="tab-volumes">
    <div class="settings-servers mt-3">
      <h2 class="flex justify-between my-2 px-2">
        <span class="font-bold text-lg">Volumes</span>
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
          <div class="col col-span-12 md:col-span-1">Größe</div>
          <div class="col col-span-12 md:col-span-4">Server/Location</div>
        </div>
        <div
          v-for="(typ, index) in this.$store.state.volumes.items"
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
          <div class="col col-span-12 md:col-span-1">
            {{ typ.size }}
          </div>
          <div class="col col-span-12 md:col-span-4">
            <div v-if="typ.location" class="select-location">
              <router-link
                :to="'/settings/location/id/' + typ.location.id"
                class="text-blue-400"
                >{{ typ.location.name }}</router-link
              >
            </div>
            <div v-else class="select-server">{{ typ.server }}</div>
          </div>
          <div class="col col-span-12 md:col-span-1">
            <fa icon="trash-can" @click="remove(typ.id)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerVolumes",
  data() {
    return {
      id: [],
    };
  },
  computed: {
    token: function () {
      return localStorage.getItem("token");
    },
  },
  mounted() {
    this.$store.commit("volumes-load", this);
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/volumes",
      label: "Volumes",
    });
  },
  methods: {
    add: function () {
      this.$router.push("/settings/volume/add");
    },
    load: function () {
      this.$store.commit("volumes-load", this);
    },
    remove: function (id) {
      this.id = id;
      this.$store.commit("volume-remove", this);
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

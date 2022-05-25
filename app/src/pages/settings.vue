<template>
  <div class="vp-settings">
    <div class="settings-token">
      <table>
        <tr>
          <th>Token</th>
        </tr>
        <tr class="flex justify-between mt-2">
          <input
            type="text"
            v-model="token"
            class="block w-full px-2 py-2"
            placeholder="Your Token"
          />
          <button
            class="block px-2 py-2 bg-gray-500 text-white"
            @click="saveToken()"
          >
            <font-awesome-icon icon="save" class="mx-2" />
          </button>
        </tr>
      </table>
    </div>
    <div class="settings-pages mt-5">
      <h2 class="px-2 py-2">more Settings</h2>
      <div class="grid grid-cols-4 text-center mt-2 gap-2">
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/types"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Servers</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/datacenters"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Datacenters</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/locations"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Locations</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/images"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Images</router-link
          >
        </div>
      </div>
      <div class="grid grid-cols-4 text-center mt-2 gap-2">
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/keys"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >SSH Keys</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/volumes"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Volumes</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/networks"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Networks</router-link
          >
        </div>
        <div class="col-span-2 md:col-span-1">
          <router-link
            to="/settings/load-balancers"
            class="bg-gray-500 text-white border border-black block px-2 py-2"
            >Load Balancers</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {
      token: ''
    };
  },
  methods: {
    saveToken: function () {
      localStorage.setItem("token", this.token);
    },
    loadToken: function(){
      this.token = localStorage.getItem("token")
    }
  },
  mounted() {
    this.loadToken();
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

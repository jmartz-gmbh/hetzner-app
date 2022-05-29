<template>
  <div class="vp-network-edit">
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-2">Id</div>
            <div class="col col-span-12 md:col-span-2">Name</div>
            <div class="col col-span-12 md:col-span-3">Ip Range</div>
            <div class="col col-span-12 md:col-span-2">Protection</div>
            <div class="col col-span-12 md:col-span-2">Erstellt</div>
          </div>
          <div class="row grid grid-cols-12 px-2 py-2">
            <div class="col col-span-12 md:col-span-2">{{ network.id }}</div>
            <div class="col col-span-12 md:col-span-2">{{ network.name }}</div>
            <div class="col col-span-12 md:col-span-3">
              {{ network.ip_range }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              Delete: {{ network.protection.delete }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ network.created }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Servers</h2>
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-3">No.</div>
            <div class="col col-span-12 md:col-span-9">Server</div>
          </div>
          <div
            v-for="(server, index) in network.servers"
            :key="index"
            class="row grid grid-cols-12 px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-3">{{ index }}</div>
            <div class="col col-span-12 md:col-span-9">
              <router-link
                :to="'/servers/id/' + server"
                class="text-blue-400"
                >{{ server }}</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Load Balancer</h2>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Routes</h2>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h2>Subnets</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NetworksEdit",
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/networks",
      label: "Networks",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/networks/add",
      label: "Add",
    });
  },
  computed: {
    network: function () {
      console.log(this.$route.params.id);
      this.$store.commit("networks-reload", this);
      for (let i = 0; i < this.$store.state.networks.items.length; i++) {
        if (this.$store.state.networks.items[i].id == this.$route.params.id) {
          return this.$store.state.networks.items[i];
        }
      }
    },
  },
};
</script>

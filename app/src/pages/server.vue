<template>
  <div class="vp-server-view">
    <h2><span class="font-bold text-lg my-2">Server Informationen</span></h2>
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-2">Status</div>
        <div class="col col-span-12 md:col-span-2">Erstellt</div>
      </div>
      <div class="row grid grid-cols-12 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">{{ server.id }}</div>
        <div class="col col-span-12 md:col-span-2">{{ server.name }}</div>
        <div class="col col-span-12 md:col-span-2">{{ server.status }}</div>
        <div class="col col-span-12 md:col-span-2">{{ server.created }}</div>
      </div>
    </div>

    <div class="tw-table block border border-black mt-5">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Typ</div>
        <div class="col col-span-12 md:col-span-2">Datacenter</div>
        <div class="col col-span-12 md:col-span-2">Location</div>
        <div class="col col-span-12 md:col-span-2">Image</div>
      </div>
      <div class="row grid grid-cols-12 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">
          {{ server.server_type.name }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ server.datacenter.name }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ server.datacenter.location.name }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ server.image.name }}
        </div>
      </div>
    </div>

    <div
      class="tw-table block border border-black mt-5"
      v-if="server.public_net"
    >
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-4">Ip</div>
        <div class="col col-span-12 md:col-span-6">Dns</div>
      </div>
      <div class="row grid grid-cols-12 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">
          {{ server.public_net.ipv4.id }}
        </div>
        <div class="col col-span-12 md:col-span-4">
          {{ server.public_net.ipv4.ip }}
        </div>
        <div class="col col-span-12 md:col-span-6">
          {{ server.public_net.ipv4.dns_ptr }}
        </div>
      </div>
      <div class="row grid grid-cols-12 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">
          {{ server.public_net.ipv6.id }}
        </div>
        <div class="col col-span-12 md:col-span-4">
          {{ server.public_net.ipv6.ip }}
        </div>
        <div class="col col-span-12 md:col-span-6">
          {{ server.public_net.ipv6.dns_ptr }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServerView",
  data() {
    return {};
  },
  computed: {
    server: function () {
      return JSON.parse(
        localStorage.getItem("server-" + this.$route.params.id)
      );
    },
  },
  created() {
    this.$store.commit("breadcrumb-add", {
      link: this.$route.fullPath,
      label: "Server",
    });
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

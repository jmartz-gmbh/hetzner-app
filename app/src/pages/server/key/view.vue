<template>
  <div class="vp-server-key-view">
    <h2 class="flex justify-between mb-3">
      <span class="text-lg">SSH Key ({{ $route.params.id }})</span>
      <div class="buttons">
        <button @click="reload()"><fa icon="rotate" /></button>
      </div>
    </h2>
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-2">Id</div>
        <div class="col col-span-12 md:col-span-2">Name</div>
        <div class="col col-span-12 md:col-span-5">Fingerprint</div>
        <div class="col col-span-12 md:col-span-3">Created</div>
      </div>
      <div
        v-for="(key, index) in $store.state.ssh_keys.items"
        :key="index"
        class="row grid grid-cols-12 px-2 py-2"
      >
        <div class="col col-span-12 md:col-span-2">
          {{ key.id }}
        </div>
        <div class="col col-span-12 md:col-span-2">
          {{ key.name }}
        </div>
        <div class="col col-span-12 md:col-span-5">
          {{ key.fingerprint }}
        </div>
        <div class="col col-span-12 md:col-span-3">
          {{ key.created }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerView",
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
    this.$store.commit("breadcrumb-add", {
      link: "/settings/keys",
      label: "View(" + this.$route.params.id + ")",
    });
  },
  methods: {
    reload: function () {
      this.$store.commit("ssh-keys-load", this);
    },
  },
  computed: {
    server: function () {
      this.$store.commit("ssh-keys-reload");
      for (let i = 0; i < this.$store.state.ssh_keys.items.length; i++) {
        if (this.$store.state.ssh_keys.items[i].id == this.$route.params.id) {
          return this.$store.state.ssh_keys.items[i];
        }
      }
      return false;
    },
  },
};
</script>

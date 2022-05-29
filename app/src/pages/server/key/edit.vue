<template>
  <div class="vp-ssh-key-edit">
    <div class="grid grid-cols-6">
      <div class="col-span-6">
        <h2><span>SSH Key</span></h2>
      </div>
      <div class="col-span-6 md:col-span-2">
        <div class="form-group bg-gray-300 block px-2 py-2">
          <label class="w-full block font-bold">Name</label>
          <input
            type="text"
            class="block px-2 py-2 mt-2 w-full"
            v-model="key.name"
          />
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="form-group bg-gray-300 block px-2 py-2">
          <label class="w-full block font-bold">Fingerprint</label>
          <div class="block px-2 py-2 mt-2 w-full bg-white">
            {{ key.fingerprint }}
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-1 bg-gray-300">
        <button
          class="bg-red-500 text-white w-full px-2 py-2 mt-9"
          @click="update()"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SshKeyEdit",
  data() {
    return {
      key: "",
    };
  },
  mounted() {
    this.load();
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
      this.$store.commit("ssh-keys-reload", this);
      for (let i = 0; i < this.$store.state.ssh_keys.items.length; i++) {
        if (this.$store.state.ssh_keys.items[i].id == this.$route.params.id) {
          this.key = this.$store.state.ssh_keys.items[i];
        }
      }
    },
    update: function () {
      this.$store.commit("ssh-key-update", {
        that: this,
        id: this.$route.params.id,
      });
    },
  },
};
</script>

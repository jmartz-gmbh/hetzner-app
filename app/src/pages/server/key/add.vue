<template>
  <div class="vp-server-new">
    <h2>New Server</h2>
    <p>Lorem Ipsum dolor at atem</p>
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Name</label>
        <input type="text" v-model="name" class="w-full px-2 py-2" />
      </div>

      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-4">
        <label class="font-bold block mb-2">Key</label>
        <input type="text" v-model="public_key" class="w-full px-2 py-2" />
      </div>

      <div
        class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-6 text-right"
      >
        <button
          @click="addKey()"
          class="px-2 py-2 w-full font-bold bg-red-600 text-white"
        >
          create Server
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addServer",
  data() {
    return {
      name: "",
      public_key: "",
    };
  },
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/settings",
      label: "Settings",
    });
    this.$store.commit("breadcrumb-add", {
      link: "/settings/key/view/add",
      label: "Key Add",
    });
  },
  methods: {
    addKey: function () {
      const that = this;
      this.$store.commit('token-load');
      fetch("https://api.hetzner.cloud/v1/ssh_keys", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + that.$store.state.token.auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          public_key: this.public_key,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            this.$store.commit("request-error", {
              that: this,
              error: data.error,
            });
          }
          else {
             this.$router.push('/settings/keys')
          }
        
        });
    },
  },
};
</script>

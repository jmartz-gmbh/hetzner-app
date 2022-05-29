<template>
  <div class="vp-network-add">
    <h2>Network Add</h2>
    <div class="form grid grid-cols-6 gap-2">
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Network Name</label>
        <input type="text" placeholder="Your Name" v-model="network.name" class="w-full px-2 py-2" />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <label class="font-bold block mb-2">Network Ip range</label>
        <input
          type="text"
          placeholder="10.0.0.0/16"
          v-model="network.ip_range"
          class="w-full px-2 py-2"
        />
      </div>
      <div class="form-group px-2 py-2 bg-gray-300 col-span-6 md:col-span-2">
        <button class="px-2 py-2 bg-red-500 block w-full text-white mt-7" @click="create()">
          create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      network: {},
    };
  },
  methods: {
      create: function(){
          this.$store.commit('network-create',this);
      }
  },
};
</script>

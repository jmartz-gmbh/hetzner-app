<template>
  <div class="vc-header">
    <div v-if="show" class="header-desktop flex justify-between">
      <div class="logo">
        <router-link to="/" class="flex">
          <img
          src="https://docs.hetzner.cloud/logo.svg"
          class="h-5 ml-2 mt-1"
          alt="Hetzner Logo"
        />
        <span class="ml-3 font-bold text-lg">Cloud App</span>
        </router-link>
      </div>
      <div class="nav space-x-3 text-lg mt-1 font-bold">
        <router-link to="/settings" title="Settings"><fa icon="gear" /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    show: function () {
      if (window.innerWidth >= 768 && window.innerWidth <= 1440) {
        return true;
      }
      return false;
    },
  },
};
</script>

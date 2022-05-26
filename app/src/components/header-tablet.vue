<template>
  <div class="vc-header">
    <div v-if="show" class="header-tablet flex justify-between">
      <div class="logo">Hetzner Cloud App</div>
      <div class="nav space-x-2">
        <router-link to="/">Home</router-link>
        <router-link to="/settings"
          ><font-awesome-icon icon="gear"
        /></router-link>
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

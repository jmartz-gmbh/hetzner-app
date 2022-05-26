<template>
  <div class="vp-robot">Willkommen bei DNS Robot</div>
</template>

<script>
export default {
  name: "Robot",
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("breadcrumb-add", {
      link: "/robot",
      label: "Robot",
    });
  },
};
</script>

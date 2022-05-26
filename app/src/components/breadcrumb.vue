<template>
  <div class="vc-breadcrumbs">
    <div
      class="border border-black bg-gray-600 text-white px-2 py-2 block items mb-2"
    >
      <router-link
        :to="item.link"
        class="item mr-2"
        v-for="(item, index) in this.$store.state.breadcrumb.items"
        >{{ item.label }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Breadcrumb",
  methods: {},
  watch: {
    $route: function(){
      this.$store.commit('breadcrumb-reset');
    }
  }
};
</script>

<style lang="less">
.items {
  .item:before {
    content: ">";
    padding-right: 5px;
  }
  .item:first-child:before {
    content: "";
    padding-right: 0;
  }
}
</style>

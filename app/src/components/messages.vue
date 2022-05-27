<template>
  <div class="vc-messages">
    <div
    :class="{
        'flex items-center text-sm font-bold px-4 py-3 justify-between mb-2': true,
        'bg-red-500 text-white': item.status == 'warning',
        'bg-green-500 text-white': item.status == 'success',
    }"
      v-for="(item, index) in this.$store.state.messages.items"
    >
      <p>
        <fa icon="info" class="mr-3" />
        {{ item.message }}
      </p>
      <fa icon="times" @click="close(index)" class="ml-3" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Messages",
  methods: {
    close: function (index) {
      this.$store.commit("messages-remove", {
        index: index,
      });
    },
  },
};
</script>

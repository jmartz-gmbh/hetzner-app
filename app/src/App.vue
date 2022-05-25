<script>
import HeaderDesktop from "./components/header-desktop.vue";
import HeaderMobile from "./components/header-mobile.vue";
import HeaderTablet from "./components/header-tablet.vue";
import Footer from "./components/footer.vue";
import messages from "./components/messages.vue";

export default {
  name: "Header",
  components: {
    messages: messages,
    "header-mobile": HeaderMobile,
    "header-tablet": HeaderTablet,
    "header-desktop": HeaderDesktop,
    "footer-general": Footer,
  },
  watch: {
    $route: function () {
      this.$store.commit("messages-reset");
      this.$store.commit("messages-add", {
        status: "warning",
        message: "Dies ist keine Offizielle Webseite der Hetzner GmbH",
      });
    },
  },
};
</script>

<template>
  <div class="px-2 py-2 bg-gray-400">
    <header class="mx-auto max-w-5xl my-2 bg-white px-2 py-2">
      <header-mobile></header-mobile>
      <header-tablet></header-tablet>
      <header-desktop></header-desktop>
    </header>
    <main class="mx-auto max-w-5xl my-2 min-h-screen bg-white px-2 py-2">
      <messages></messages>
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl my-2 bg-white px-2 py-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>

<style></style>

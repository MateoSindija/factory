<template>
  <div>
    <NavBar />

    <div class="center">
      <router-view />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    FooterComponent,
  },
};
</script>

<style lang="scss">
body {
  background-color: $body-background-color;
}

.center {
  margin: 16px auto;
  background-color: $body-background-color;
  width: 940px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #595959;
}
</style>

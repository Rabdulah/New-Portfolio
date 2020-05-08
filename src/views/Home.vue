<template>
  <div class="flex-container">
    <div class="run-shot">
      <!-- <div class="overlay"/> -->
    </div>
    <div class="who-am-i">
      <AboutMe>
          <PortfolioGrid></PortfolioGrid>
      </AboutMe>
    </div>
    <!-- <h1>hello im home</h1> -->
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import PortfolioGrid from "../components/PortfolioGrid";
export default {
  components: {
    AboutMe,
    PortfolioGrid
  },
};
</script>

<style lang="scss">
.flex-container {
  display: flex;
}
.run-shot {
  width: 50vw;
  height: 100vh;
  background: url("../assets/SprintStartVibrant.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: initial;
  background-position: 74% 40%;
}
.overlay {
  z-index: 1;
  height: 100%;
  width: 50%;
  position: fixed;
  overflow: auto;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.6); /*can be anything, of course*/
}
.who-am-i {
  width: 50vw;
  height: 100vh;
  background: white;
}
body {
  margin: 0;
}
</style>

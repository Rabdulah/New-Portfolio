<template>
  <div>
    <div class="flex-container">
      <!-- <div class="run-shot"></div> -->
      <div class="who-am-i">
        <AboutMe>
          <PortfolioGrid></PortfolioGrid>
        </AboutMe>
      </div>
    </div>
    <div class="opaque-overlay" />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe";
import PortfolioGrid from "../components/PortfolioGrid";
export default {
  components: {
    AboutMe,
    PortfolioGrid,
  },
};
</script>

<style lang="scss">
.flex-container {
  display: flex;
  height: 100vh;
  background: url("../assets/sprint-start-wide.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: initial;
  background-position: 100% 40%;
}
// .run-shot {
//     width: 50vw;
//     height: 100vh;
//     background: url("../assets/sprint-start-vibrant.jpg");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-attachment: initial;
//     background-position: 74% 40%;
// }
.opaque-overlay {
  // Work around to get half the background image opaque without casscading to text
  z-index: 1;
  width: 50vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  background: white;
}
.who-am-i {
  z-index: 2; // Making sure its above opaque-overlay
  width: 50vw;
  height: 100vh;
  margin-left: 50%;
}
body {
  margin: 0;
}
</style>

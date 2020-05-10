<template>
  <div>
    <div class="flex-container">
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
  background-position: 50% 40%;
}
.opaque-overlay {
  // Work around to get half the background image opaque without casscading to text
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.7;
  background: white;
}
.who-am-i {
  z-index: 2; // Making sure its above opaque-overlay
  height: 100vh;
}
body {
  margin: 0;
}
@media screen and (max-width: 767px) {
  .who-am-i {
    //margin-left: 50%;
  }
}
@media screen and (min-width: 768px) {
  .who-am-i {
    width: 50vw;
    margin-left: 50%;
  }
  .opaque-overlay {
    width: 50vw;
  }
  .flex-container {
    background-position: 100% 40%;
  }
}
</style>

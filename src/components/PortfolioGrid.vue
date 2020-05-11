<template>
  <div class="portfolio-grid">
    <!-- <PortfolioItem link="#" classType="rect nasa" title="Under Construction..."></PortfolioItem> 
    Temporarily breaking DRY practices so we can have custom <a> tag without href. Only until this project is complete! -->
    <a class="portfolio-item rect nasa">Under Construction</a>
    <PortfolioItem link="#" classType="tall home" title="HomeShare"></PortfolioItem>
    <PortfolioItem
      link="https://github.com/Rabdulah/PizzaPyRobot"
      classType="rect pizza"
      title="Python Pizza"
    ></PortfolioItem>
    <PortfolioItem
      link="https://rabdulah.github.io/HackerNewsClone/#/"
      classType="wide hack"
      title="HackerNews Clone"
    ></PortfolioItem>
    <PortfolioItem
      link="https://rabdulah.github.io/Tic-Tac-Toe/#/"
      classType="small"
      title="Tic-Tac-Toe"
    ></PortfolioItem>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem";
export default {
  name: "PortfolioGrid",
  components: {
    PortfolioItem
  }
};
</script>

<style lang="scss">
.portfolio-grid {
  display: grid;
  height: 100%;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  align-self: center;
}
</style>

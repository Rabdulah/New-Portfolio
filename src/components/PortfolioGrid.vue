<template>
  <div class="portfolio-grid">
    <PortfolioItem link="#" classType="rect nasa" title="Nasa"></PortfolioItem>
    <PortfolioItem link="#" classType="tall home" title="HomeShare"></PortfolioItem>
    <PortfolioItem link="#" classType="rect pizza" title="Python Pizza Script"></PortfolioItem>
    <PortfolioItem link="#" classType="wide hack" title="HackerNews Clone"></PortfolioItem>
    <PortfolioItem link="#" classType="small" title="Tic-Tac-Toe"></PortfolioItem>
  </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem";
export default {
  name: "PortfolioGrid",
  components: {
    PortfolioItem,
  },
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

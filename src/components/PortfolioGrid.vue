<template>
  <div class="portfolio-grid">
    <PortfolioItem link="#" classType="small" title="lol"></PortfolioItem>
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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  align-self: center;
}
</style>

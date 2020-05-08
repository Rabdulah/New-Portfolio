<template>
  <div>
    <a :href="link" class="portfolio-item" :class="classType" target="_blank">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    link: {
      type: String,
    },
    classType: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.portfolio-item {
  display: flex;
  justify-content: center;
  align-items: center;
  //background: $layer3;
  color: white;
  //font-weight: $font-bold;
  text-align: center;
}
.small {
  grid-row: span 2;
  grid-column: span 2;
}
</style>

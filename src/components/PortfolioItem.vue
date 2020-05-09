<template>
  <a :href="link" class="portfolio-item" :class="classType" target="_blank">{{
    title
  }}</a>
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
$lightgray: rgba(29, 29, 29, 0.253);

a {
  text-decoration: none;
  font-size: 40px;
  color: white;
}
.portfolio-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-blend-mode: multiply;
  background-color: $lightgray;
  transition: all 300ms ease-in-out;
  &.small {
    grid-row: span 2;
    grid-column: span 2;
    background-image: url("../assets/tic-tac-toe.jpg");
    background-size: cover;
    background-position: center;
  }
  &.wide {
    grid-row: span 2;
    grid-column: span 4;
    &.hack {
      background-image: url("../assets/hack.jpg");
      background-size: cover;
      background-position: center;
      background-position: 0% 15%;
    }
  }
  &.rect {
    grid-row: span 2;
    grid-column: span 3;
    &.nasa {
      color: white;
      background-image: url("../assets/nasa.jpg");
      background-position: 10% 35%;
    }
    &.pizza {
      background-image: url("../assets/python-pizza.jpg");
      background-size: contain;
      background-position: center;
      padding-bottom: 50px;
    }
  }
  &.tall {
    grid-row: span 4;
    grid-column: span 3;
    &.home {
      background-image: url("../assets/home-share2.jpg");
      background-size: cover;
      background-position: center;
      padding-bottom: 140px;
    }
  }
  &:hover {
    background-blend-mode: normal;
    transform: scale(1.07);
    color: black;
  }
}
</style>

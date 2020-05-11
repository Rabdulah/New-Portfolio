<template>
  <a :href="link" class="portfolio-item" :class="classType" target="_blank">{{ title }}</a>
</template>

<script>
export default {
  name: "PortfolioItem",
  props: {
    link: {
      type: String
    },
    classType: {
      type: String
    },
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss">
$lightgray: rgba(29, 29, 29, 0.562);
a {
  text-decoration: none;
  color: white;
  font-family: "Open Sans", sans-serif;
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
      // Temporarily here to disable the NASA square until it's done
      &:hover {
        background-blend-mode: multiply;
        transform: none;
      }
    }
    &.pizza {
      background-image: url("../assets/python-pizza.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }
  &.tall {
    grid-row: span 4;
    grid-column: span 3;
    &.home {
      background-image: url("../assets/home-share2.jpg");
      background-size: cover;
      background-position: center;
    }
  }
  &:hover {
    background-blend-mode: normal;
    transform: scale(1.07);
    color: black;
  }
}
</style>

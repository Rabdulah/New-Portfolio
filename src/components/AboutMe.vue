<template>
  <div class="container">
    <div>
      <hr class="emphatic-break horizontal left" />
      <h1 class="title">{{ $t("personal.name") }}</h1>
      <hr class="emphatic-break horizontal left" />
      <h2 class="subtitle">{{ $t("personal.whatDefinesMe") }}</h2>
      <h3 class="blurb">{{ $t("personal.miniSummary") }}</h3>
      <hr class="emphatic-break horizontal left" />
      <p>
        {{ $t("personal.aboutMe") }}
      </p>
      <hr class="emphatic-break vertical" />
    </div>
    <div class="grid">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss">
h1,
h2,
h3 {
  font-family: "Muli", sans-serif;
  margin: 0;
  &.title {
    font-weight: bold;
    font-size: 48px;
  }
  &.subtitle {
    margin-bottom: 5px;
  }
  &.blurb {
    font-style: italic;
  }
}
p{
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
}
.container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
}
.emphatic-break {
  &.horizontal {
    width: 10px;
    border: 2px solid red;
    &.left {
      margin-left: 0;
    }
    &.right {
      margin-right: 0;
    }
  }
  &.vertical {
    height: 12px;
    width: 2px;
    border: 1px solid red;
    background-color: red;
  }
}
.grid {
  height: 100%;
}
</style>

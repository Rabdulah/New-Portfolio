<template>
  <div class="container">
    <hr class="emphatic-break horizontal left" />
    <h1>{{ $t("personal.name") }}</h1>
    <hr class="emphatic-break horizontal left" />
    <h2>{{ $t("personal.whatDefinesMe") }}</h2>
    <h3>{{ $t("personal.miniSummary") }}</h3>
    <hr class="emphatic-break horizontal left" />
    <p>
      {{ $t("personal.aboutMe") }}
    </p>
    <hr class="emphatic-break vertical" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss">
.container {
  margin: 50px;
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
.bold {
  font-weight: bold;
}
</style>

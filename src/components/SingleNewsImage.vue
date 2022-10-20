<template lang="">
  <div class="mainImage">
    <div class="mainImage__image">
      <img src="../assets/singleImage.png" alt="single" />
    </div>
    <div class="mainImage__text">
      <div class="mainImage__text__date">{{ date }}</div>
      <div class="mainImage__text__title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    title: String,
  },
};
</script>
<style lang="scss" scoped>
.mainImage {
  margin-top: 18px;
  position: relative;

  &__image {
    background: linear-gradient(to bottom, transparent 0%, white 100%) no-repeat
      bottom;
    background-size: 100% 50%;

    img {
      width: 100%;
      height: 588px;
      position: relative;
      z-index: -1;
    }
  }

  &__text {
    position: absolute;
    bottom: 34px;
    left: 30px;
    text-align: left;
    color: #222222;

    &__title {
      @include titleStyle(#222222, 44px);
    }

    &__date {
      font-family: "VarelaRound", Arial, Helvetica;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
}
</style>

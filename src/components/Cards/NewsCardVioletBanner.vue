<template lang="">
  <div class="container">
    <div class="container__text">
      <div class="container__text__date">{{ date }}</div>
      <div class="container__text__title">{{ title }}</div>
    </div>
    <div class="container__number">
      <img src="@/assets/comment.svg" alt="comment" />
      <div class="container__number__text">{{ number }}</div>
    </div>
    <img
      class="container__imageNews"
      src="@/assets/bannerNewsImage.svg"
      alt="news"
    />
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    date: String,
    number: Number,
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  position: relative;

  box-sizing: border-box;
  width: 100%;
  padding: 20px 33px;
  border-bottom: 1px solid #000000;

  @include rippleEffect(#453c75);

  &__text {
    text-align: left;
    width: 172px;

    &__date {
      @include varelaRegular(12px, $date-color-banner);

      margin-bottom: 3px;
    }

    &__title {
      @include titleStyle(#ffffff, 14px);
    }
  }

  &__number {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 23px;
    right: 118px;

    &__text {
      @include varelaRegular(12px, $date-color-banner);

      margin-left: 3px;
    }
  }

  &__imageNews {
    border: 2px solid white;
    width: 68px;
    height: 68px;
  }
}
</style>

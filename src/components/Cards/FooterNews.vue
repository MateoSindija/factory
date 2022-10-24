<template>
  <div class="container">
    <div class="container__info">
      <div class="container__info__date">August 26, 2013</div>
      <div class="container__info__title">
        Palestinians call off peace talks after clash
      </div>
    </div>
    <img src="@/assets/footerNews.svg" alt="news" />
    <div class="container__number">5</div>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-bottom: 1px solid rgba(102, 102, 102, 0.2);
  padding-bottom: 21px;
  padding-top: 18px;

  @include rippleEffect(#343538);

  &__number {
    @include varelaRegular(10px, $footer-text-color);

    position: relative;
    top: 5px;
    right: 86px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__date {
      @include varelaRegular(10px, #666666);

      margin-bottom: 10px;
    }

    &__title {
      text-align: left;
      font-family: "BitterBold", Arial, Helvetica;
      color: #cccccc;
      font-size: 14px;
    }
  }
  img {
    border: 2px solid white;
    width: 66px;
    height: 66px;
  }
}
</style>

<template lang="">
  <div class="container">
    <div class="container__title">Kenaz TV</div>

    <iframe
      class="container__video"
      src="https://www.youtube.com/embed/668nUCeBHyY?controls=0"
    ></iframe>

    <div class="container__desc">
      <div class="container__desc__date">August 26, 2013</div>
      <div class="container__desc__title">
        NASA releases portrait of a planet waving at Saturn
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  height: 324px;
  background-color: white;
  padding: 15px 33px 5px 33px;
  text-align: left;

  &__video {
    width: 303px;
    border: none;
    height: 149px;
    margin: 31px -33px 17px -33px;
  }

  &__title {
    @include titleStyle();
  }

  &__desc {
    &__date {
      @include varelaRegular(12px, $footer-text-color);

      margin-bottom: 5px;
    }

    &__title {
      font-family: "BitterBold", Arial, Helvetica;
      font-size: 14px;
      color: #363f48;
      font-weight: 700;
    }
  }
}
</style>

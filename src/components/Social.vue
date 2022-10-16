<template lang="">
  <div class="social">
    <div class="social__title">Social</div>
    <div class="social__row">
      <img src="../assets/facebook.svg" alt="" />
      <div class="social__row__like socialStyles">Like</div>
      <div class="social__row__followers socialStyles">
        {{ facebook.number }} {{ facebook.text }}
      </div>
    </div>
    <div class="social__row">
      <img src="../assets/twitter.svg" alt="" />
      <div class="social__row__like socialStyles">Follow</div>
      <div class="social__row__followers socialStyles">
        {{ twitter.number }} {{ twitter.text }}
      </div>
    </div>
    <div class="social__row">
      <img src="../assets/youtube.svg" alt="" />
      <div class="social__row__like socialStyles">Subscribe</div>
      <div class="social__row__followers socialStyles">
        {{ youtube.number }} {{ youtube.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    facebook: Object,
    twitter: Object,
    youtube: Object,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/font.scss";

.socialStyles {
  display: flex;
  align-items: center;
  padding-left: 15px;
  height: 38px;
}
.social {
  display: flex;
  flex-direction: column;
  text-align: left;

  &__title {
    margin-bottom: 16px;
    font-family: "BitterBold", Arial, Helvetica;
    font-weight: 700;
    font-size: 24px;
  }

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:nth-child(3) {
      margin: 7px 0;
    }

    &__like {
      width: 123px;
      font-family: "BitterBold", Arial, Helvetica;
      font-weight: 700;
      font-size: 18px;
      background-color: $social-grey;
    }

    &__followers {
      background-color: $nav-bottom-background-color;
      font-family: "VarelaRoundRegular", Arial, Helvetica;
      color: white;
      font-size: 14px;
      width: 143px;
    }
  }
}
</style>

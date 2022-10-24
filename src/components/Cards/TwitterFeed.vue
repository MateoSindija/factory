<template lang="">
  <div class="container">
    <div class="container__username">
      <img src="@/assets/twitterBird.svg" alt="twitter" />
      <div>{{ userName }}</div>
    </div>
    <div class="container__post">
      {{ post }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userName: String,
    post: String,
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  &__username {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-bottom: 3px;

    div {
      font-family: "BitterRegular", Arial, Helvetica;
      color: $footer-text-color;
      font-size: 14px;
    }

    img {
      margin-right: 4px;
    }
  }

  &__post {
    font-family: "VarelaRegular", Arial, Helvetica;
    color: $footer-grey-color;
    font-size: 13px;
  }
}
</style>

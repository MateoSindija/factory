<template lang="">
  <div class="author">
    <div class="author__title">About the Author</div>
    <div class="author__info">
      <img src="../assets/author.png" alt="" />
      <div class="author__info__text">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    description: String,
  },
};
</script>
<style lang="scss">
.author {
  background-color: white;
  padding: 18px 26px 31px 31px;
  text-align: left;

  &__title {
    margin-bottom: 30px;
    @include titleStyle();
  }

  &__info {
    display: flex;
    align-items: center;
    flex-direction: row;

    &__text {
      margin-left: 20px;
      @include varelaGrey();
    }

    img {
      width: 110px;
      height: 110px;
    }
  }
}
</style>

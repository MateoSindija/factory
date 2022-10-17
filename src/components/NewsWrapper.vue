<template lang="">
  <div class="wrapper">
    <div class="wrapper__title">News</div>

    <NewsWrapperArticle
      v-for="(i, index) in data"
      :key="index"
      :title="i.title"
      :date="i.date"
      :article="i.article"
      :comments="i.comments"
      :author="i.author"
    />
  </div>
</template>
<script>
export default {
  props: { data: Array },
};
</script>
<style lang="scss" scoped>
@import "../styles/font.scss";
.wrapper {
  width: 100%;
  min-height: 404px;
  padding: 15px 18px 31px 31px;
  box-sizing: border-box;
  text-align: left;

  background-color: white;

  &__title {
    font-family: "BitterBold", Arial, Helvetica;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 12px;
  }
}
</style>

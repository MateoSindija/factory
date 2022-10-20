<template lang="">
  <div class="article">
    <div class="article__paragraph">{{ paragraphOne }}</div>
    <img src="../assets/articleImage.png" alt="article" />
    <div class="article__paragraph">{{ paragraphTwo }}</div>
  </div>
</template>
<script>
export default {
  props: {
    paragraphOne: String,
    paragraphTwo: String,
  },
};
</script>
<style lang="scss" scoped>
.article {
  min-height: 200px;
  background-color: white;
  padding: 37px 20px 37px 30px;

  &__paragraph {
    text-align: left;
    color: #222222;
    line-height: 22px;

    font-size: 14px;
    font-family: "BitterRegular", Arial, Helvetica;
  }

  img {
    margin: 37px -20px 37px -30px;
  }
}
</style>

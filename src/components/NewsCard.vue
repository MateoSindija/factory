<template lang="">
  <div class="card">
    <img src="../assets/newsMountain.svg" alt="news" />
    <div class="card__article">
      <div class="card__article__number">
        {{ this.number }}
      </div>
      <div class="card__article__date">
        {{ this.date }}
      </div>
      <div class="card__article__title">
        {{ this.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    title: String,
    number: Number,
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/font.scss";
@import "../styles/variables.scss";
.card {
  width: 170px;
  cursor: pointer;

  img {
    width: 170px;
    height: 128px;
  }

  &__article {
    text-align: left;
    position: relative;

    &__number {
      font-size: 12px;
      font-family: "VarelaRoundRegular", Arial, Helvetica;

      position: absolute;
      top: 3px;
      right: 0px;
    }

    &__date {
      color: #363f48;
      font-size: 12px;
      font-family: "VarelaRoundRegular", Arial, Helvetica;
    }

    &__title {
      margin-top: 5px;
      color: #363f48;
      font-family: "BitterBold", Arial, Helvetica;
      font-size: 14px;
      font-weight: 700;

      &:hover {
        color: black;
      }
    }
  }
}
</style>

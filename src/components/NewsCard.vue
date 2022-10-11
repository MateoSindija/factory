<template lang="">
  <div :class="handleType">
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
    number: {
      type: Number,
      required: false,
    },
    isSideway: Boolean,
  },

  computed: {
    handleType() {
      return {
        "cardSideway card": this.isSideway,
        card: !this.isSideway,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/font.scss";
@import "../styles/variables.scss";

.cardSideway {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;

  &:nth-child(-n + 2) {
    margin-bottom: 30px !important;
  }

  .card__article__title {
    width: 118px;
  }

  img {
    margin-right: 15px;
    width: 120px !important;
    height: 90px !important;
  }
}

.card {
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

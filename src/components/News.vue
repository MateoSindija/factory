<template lang="">
  <div class="container" :style="containerColor">
    <div class="container__title">{{ this.title }}</div>
    <a class="container__link" href="/">See all</a>
    <div :class="flexDirection">
      <NewsCard
        v-for="(e, index) in this.articles"
        :key="index"
        :date="e.date"
        :title="e.title"
        :number="e.number"
        :isSideway="this.isSideway"
      />
    </div>
  </div>
</template>
<script>
import NewsCard from "./NewsCard.vue";

export default {
  props: {
    color: String,
    title: String,
    articles: Array,
    isSideway: Boolean,
  },
  components: {
    NewsCard,
  },

  data() {
    return {
      containerColor: {
        "border-left": `14px solid ${this.color}`,
      },
    };
  },

  computed: {
    flexDirection() {
      return {
        container__cards: !this.isSideway,
        "container__cards wrap": this.isSideway,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../styles/font.scss";

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.container {
  width: 546px;
  height: 305px;
  padding: 15px 31px 0px 31px;

  position: relative;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__link {
    text-decoration: none;
    position: absolute;
    right: 32px;
    top: 30px;
    color: #3677b5;
    font-size: 14px;
    font-family: "VarelaRoundRegular", Arial, Helvetica;
    border-bottom: 0.5px solid rgba(54, 119, 181, 0.3);
    cursor: pointer;

    &:hover {
      color: blue;
      border-bottom: 0.5px solid blue;
    }
  }

  &__title {
    font-size: 24px;
    font-family: "BitterBold", Arial, Helvetica;
    color: #363f48;
  }

  &__cards {
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    :deep(.card) {
      &:nth-child(2) {
        margin: 0 20px;
      }
    }
  }
}
</style>

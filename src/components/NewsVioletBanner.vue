<template lang="">
  <div class="container">
    <div class="container__nav">
      <button class="container__nav__category" @click="handleNav('popular')">
        <div :class="isActivePopular">Popular</div>
      </button>
      <button class="container__nav__category" @click="handleNav('rated')">
        <div :class="isActiveRated">Top Rated</div>
      </button>
      <button class="container__nav__category" @click="handleNav('comments')">
        <div :class="isActiveComments">Comments</div>
      </button>
    </div>

    <div class="container__news">
      <NewsCardVioletBanner
        v-for="(i, index) in bannerData"
        :key="index"
        :date="i.date"
        :title="i.title"
        :number="i.number"
      />
    </div>
  </div>
</template>
<script>
import NewsBannerData from "../json/BannerNews.json";

export default {
  data() {
    return {
      popularActive: true,
      ratedActive: false,
      commentsActive: false,
      bannerData: NewsBannerData,
    };
  },

  methods: {
    handleNav(type) {
      if (type === "popular") {
        this.popularActive = true;
        this.ratedActive = false;
        this.commentsActive = false;
      } else if (type === "rated") {
        this.popularActive = false;
        this.ratedActive = true;
        this.commentsActive = false;
      } else if (type === "comments") {
        this.popularActive = false;
        this.ratedActive = false;
        this.commentsActive = true;
      }
    },
  },
  computed: {
    isActivePopular() {
      return [
        "container__nav__category__title",
        { active: this.popularActive },
      ];
    },
    isActiveRated() {
      return ["container__nav__category__title", { active: this.ratedActive }];
    },
    isActiveComments() {
      return [
        "container__nav__category__title",
        { active: this.commentsActive },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #fcc44d !important;
  border-bottom: 0.5px solid #fcc44d !important;
}
.container {
  width: 303px;
  max-height: 667px;

  &__news {
    background-color: #4d4382;
    box-sizing: content-box;
    padding-bottom: 37px;
  }

  &__nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 32px;
    background-color: #3e3668;

    &__category {
      font-family: "VarelaRoundRegular", Arial, Helvetica;
      font-size: 14px;
      color: #ffffff;
      background-color: #3e3668;
      border: none;

      cursor: pointer;
      height: 53px;

      @include rippleEffect(#59527d);

      &__title {
        border-bottom: 0.5px solid #acb3ba;
      }
    }
  }
}
</style>

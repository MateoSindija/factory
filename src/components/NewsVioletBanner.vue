<template lang="">
  <div class="container">
    <div class="container__nav">
      <button :class="isActivePopular" @click="handleNav('popular')">
        Popular
      </button>
      <button :class="isActiveRated" @click="handleNav('rated')">
        Top Rated
      </button>
      <button :class="isActiveComments" @click="handleNav('comments')">
        Comments
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
import NewsCardVioletBanner from "../components/NewsCardVioletBanner.vue";
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

  components: {
    NewsCardVioletBanner,
  },

  computed: {
    isActivePopular() {
      return ["container__nav__category", { active: this.popularActive }];
    },
    isActiveRated() {
      return ["container__nav__category", { active: this.ratedActive }];
    },
    isActiveComments() {
      return ["container__nav__category", { active: this.commentsActive }];
    },
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
};
</script>
<style lang="scss" scoped>
@import "../styles/mixins.scss";

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
    padding: 18px 32px;
    background-color: #3e3668;

    &__category {
      font-family: "VarelaRoundRegular", Arial, Helvetica;
      font-size: 14px;
      color: #ffffff;
      background-color: #3e3668;
      border: none;
      border-bottom: 0.5px solid #acb3ba;
      cursor: pointer;
      height: 100%;

      @include rippleEffect(#59527d);
    }
  }
}
</style>

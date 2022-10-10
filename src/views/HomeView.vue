<template>
  <div class="home">
    <Banner :height="120" :width="940" />
    <TopCarousel />
    <div class="row home__secondRow">
      <div class="rowChildrenSpacing home__secondRow__firstCol">
        <News
          :color="this.news.color"
          :title="this.news.title"
          :articles="this.news.articles"
        />

        <News
          :color="this.sport.color"
          :title="this.sport.title"
          :articles="this.sport.articles"
        />

        <Banner :height="123" :width="620" />

        <News
          :color="this.business.color"
          :title="this.business.title"
          :articles="this.business.articles"
        />
      </div>

      <div class="rowChildrenSpacing home__secondRow__secondCol">
        <NewsVioletBanner />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import TopCarousel from "../components/TopCarousel.vue";
import NewsData from "../json/News.json";
import News from "../components/News.vue";
import NewsVioletBanner from "../components/NewsVioletBanner.vue";

export default {
  name: "HomeView",
  data() {
    return {
      news: NewsData[0],
      sport: NewsData[1],
      business: NewsData[2],
    };
  },

  components: {
    Banner,
    TopCarousel,
    News,
    NewsVioletBanner,
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  margin-top: 19px;
}

.rowChildrenSpacing {
  & > * {
    margin: 19px 0 19px 0;
  }
}
.home {
  width: 944px;

  &__secondRow {
    display: flex;
    flex-direction: row;

    &__firstCol {
      width: 622px;
      margin-right: 19px;
    }

    &__secondCol {
      width: 303px;
    }
  }
}
</style>

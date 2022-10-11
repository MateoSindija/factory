<template>
  <div class="home">
    <Banner :height="120" :width="940" />
    <NewsCarouselTop :news="this.topNews" />
    <div class="row home__secondRow">
      <div class="rowChildrenSpacing home__secondRow__firstCol">
        <News
          :color="this.news.color"
          :title="this.news.title"
          :articles="this.news.articles"
          :isSideway="false"
        />

        <News
          :color="this.sport.color"
          :title="this.sport.title"
          :articles="this.sport.articles"
          :isSideway="false"
        />

        <Banner :height="123" :width="620" />

        <News
          :color="this.business.color"
          :title="this.business.title"
          :articles="this.business.articles"
          :isSideway="true"
        />
        <Banner :height="123" :width="620" />

        <NewsCarouselCard :inView="2" />
      </div>

      <div class="rowChildrenSpacing home__secondRow__secondCol">
        <NewsVioletBanner />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import NewsCarouselTop from "../components/NewsCarouselTop.vue";
import NewsData from "../json/News.json";
import News from "../components/News.vue";
import NewsVioletBanner from "../components/NewsVioletBanner.vue";
import TopCarouselNews from "../json/TopCarouselNews.json";
import NewsCarouselCard from "../components/NewsCarouselCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      news: NewsData[0],
      sport: NewsData[1],
      business: NewsData[2],
      topNews: TopCarouselNews,
    };
  },

  components: {
    Banner,
    NewsCarouselTop,
    News,
    NewsVioletBanner,
    NewsCarouselCard,
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
  width: 940px;

  &__secondRow {
    display: flex;
    flex-direction: row;

    &__firstCol {
      width: 618px;
      margin-right: 19px;
    }

    &__secondCol {
      width: 303px;
    }
  }
}
</style>

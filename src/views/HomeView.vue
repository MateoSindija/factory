<template>
  <div class="home">
    <Banner :height="120" :width="940" />
    <NewsCarouselTop :news="this.topNews" />
    <div class="row home__secondRow">
      <div class="rowChildrenSpacing home__secondRow__firstCol">
        <News
          :color="this.news.color"
          :title="this.news.title"
          :isSideway="false"
        >
          <NewsCard
            v-for="(e, index) in this.news.articles"
            :key="index"
            :date="e.date"
            :title="e.title"
            :number="e.number"
            :isSideway="this.isSideway"
          />
        </News>

        <News
          :color="this.sport.color"
          :title="this.sport.title"
          :isSideway="false"
        >
          <NewsCard
            v-for="(e, index) in this.sport.articles"
            :key="index"
            :date="e.date"
            :title="e.title"
            :number="e.number"
            :isSideway="this.isSideway"
          />
        </News>

        <Banner :height="123" :width="620" />

        <News
          :color="this.business.color"
          :title="this.business.title"
          :isSideway="true"
        >
          <NewsCard
            v-for="(e, index) in this.business.articles"
            :key="index"
            :date="e.date"
            :title="e.title"
            :number="e.number"
            :isSideway="true"
          />
        </News>

        <Banner :height="123" :width="620" />
        <News
          :color="this.newsCarousel.color"
          :title="this.newsCarousel.title"
          :isSideway="false"
          :isCarousel="true"
        >
          <NewsCarousel
            :items="this.newsCarousel.articles"
            :inView="2"
            :color="this.newsCarousel.color"
          />
        </News>
        <div class="home__secondRow__firstCol__news">
          <div class="home__secondRow__firstCol__news__firstCol">
            <News
              :color="this.editorials.color"
              :title="this.editorials.title"
              :isSideway="false"
              :isCarousel="true"
            >
              <NewsCarousel
                :items="this.editorials.articles"
                :inView="1"
                size="small"
                :color="this.editorials.color"
              />
            </News>
          </div>
          <div class="home__secondRow__firstCol__news__secondCol">
            <News
              :color="this.localNews.color"
              :title="this.localNews.title"
              :isSideway="false"
              :isCarousel="true"
            >
              <NewsCarousel
                :items="this.localNews.articles"
                :inView="1"
                size="small"
                :color="this.localNews.color"
              />
            </News>
          </div>
        </div>
      </div>

      <div class="rowChildrenSpacing home__secondRow__secondCol">
        <NewsVioletBanner />
      </div>
    </div>
    <Banner :height="120" :width="940" />
    <div class="home__imageCarousel">
      <ImageCarousel />
    </div>
  </div>
</template>

<script>
import NewsData from "../json/News.json";
import TopCarouselNews from "../json/TopCarouselNews.json";
import NewsCarousel from "../components/NewsCarousel.vue";
import ImageCarousel from "@/components/ImageCarousel.vue";

export default {
  name: "HomeView",
  data() {
    return {
      news: NewsData[0],
      sport: NewsData[1],
      business: NewsData[2],
      newsCarousel: NewsData[3],
      editorials: NewsData[4],
      localNews: NewsData[5],
      topNews: TopCarouselNews,
    };
  },
  components: { NewsCarousel, ImageCarousel },
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
      width: 622px;
      margin-right: 19px;

      &__news {
        display: flex;
        flex-direction: row;

        &__firstCol {
          width: 303px;
          margin-right: 16px;
        }

        &__secondCol {
          width: 303px;
        }
      }
    }

    &__secondCol {
      width: 303px;
    }
  }
}
</style>

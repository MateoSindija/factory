<template>
  <div class="home">
    <Banner :height="120" :width="940" />
    <NewsCarouselTop :news="this.topNews" />
    <div class="row home__secondRow">
      <div class="rowChildrenSpacing home__secondRow__firstCol">
        <NewsWrapper :data="newsWrapperData" />
        <Banner :width="620" :height="120" />
      </div>

      <div class="rowChildrenSpacing home__secondRow__secondCol">
        <NewsVioletBanner />
        <Social
          :facebook="social.facebook"
          :twitter="social.twitter"
          :youtube="social.youtube"
        />
        <Video />

        <div class="home__secondRow__secondCol__smallBanner">
          <Banner :width="128" :height="128" />
          <Banner :width="128" :height="128" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialData from "../json/Social.json";
import TopCarouselNews from "../json/TopCarouselNews.json";
import NewsWrapperData from "../json/NewsWrapperCards.json";

export default {
  data() {
    return {
      topNews: TopCarouselNews,
      social: SocialData,
      newsWrapperData: NewsWrapperData,
    };
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
      width: 622px;
      margin-right: 19px;

      &__news {
        display: flex;
        flex-direction: row;

        &__firstCarousel {
          width: 303px;
          margin-right: 16px;
        }

        &__secondCarousel {
          width: 303px;
        }
      }
    }

    &__secondCol {
      width: 303px;

      &__smallBanner {
        display: flex;
        justify-content: space-around;
        background-color: $social-grey;
        padding: 19px;
      }
    }
  }
}
</style>

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Banner from "./components/Banner.vue";
import NewsCarouselTop from "./components/NewsCarouselTop.vue";
import News from "./components/News.vue";
import NewsVioletBanner from "./components/NewsVioletBanner.vue";
import FooterNews from "./components/FooterNews.vue";
import TwitterFeed from "./components/TwitterFeed.vue";
import NewsCardVioletBanner from "./components/NewsCardVioletBanner.vue";
import NewsCard from "./components/NewsCard.vue";
import NewsCarousel from "./components/NewsCarousel.vue";
import ImageCarousel from "./components/ImageCarousel.vue";
import Social from "./components/Social.vue";
import Video from "./components/Video.vue";
import NewsWrapper from "./components/NewsWrapper.vue";
import NewsWrapperArticle from "./components/NewsWrapperArticle.vue";

const app = createApp(App);

app.component("NewsVioletBanner", NewsVioletBanner);
app.component("News", News);
app.component("NewsCarouselTop", NewsCarouselTop);
app.component("Banner", Banner);
app.component("FooterNews", FooterNews);
app.component("TwitterFeed", TwitterFeed);
app.component("NewsCardVioletBanner", NewsCardVioletBanner);
app.component("NewsCard", NewsCard);
app.component("NewsCarousel", NewsCarousel);
app.component("ImageCarousel", ImageCarousel);
app.component("Social", Social);
app.component("Video", Video);
app.component("NewsWrapper", NewsWrapper);
app.component("NewsWrapperArticle", NewsWrapperArticle);

app.use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Banner from "./components/Banner.vue";
import NewsCarouselTop from "./components/Carousels/NewsCarouselTop.vue";
import News from "./components/Wrappers/News.vue";
import NewsVioletBanner from "./components/Wrappers/NewsVioletBanner.vue";
import FooterNews from "./components/Cards/FooterNews.vue";
import TwitterFeed from "./components/Cards/TwitterFeed.vue";
import NewsCardVioletBanner from "./components/Cards/NewsCardVioletBanner.vue";
import NewsCard from "./components/Cards/NewsCard.vue";
import NewsCarousel from "./components/Carousels/NewsCarousel.vue";
import ImageCarousel from "./components/Carousels/ImageCarousel.vue";
import Social from "./components/Social.vue";
import Video from "./components/Video.vue";
import NewsWrapper from "./components/Wrappers/NewsWrapper.vue";
import NewsWrapperArticle from "./components/Cards/NewsWrapperArticle.vue";

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

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

app.use(router).mount("#app");

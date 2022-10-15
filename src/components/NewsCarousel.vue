<template lang="">
  <div class="container" :class="containerWidth">
    <div class="container__carouselNews" :data-slick="slickProperties">
      <NewsCard
        v-for="(i, index) in this.items"
        :key="index"
        :date="i.date"
        :title="i.title"
      />
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  props: { items: Array, size: String, inView: Number, color: String },

  computed: {
    containerWidth() {
      if (this.size === "small") {
        return "small";
      }
      return "big";
    },

    slickProperties() {
      return `{"slidesToShow": ${this.inView}}`;
    },
  },

  mounted() {
    $(".container__carouselNews")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: false,
        slidesToScroll: 1,
        nextArrow: `<button class='arrowNewsCarousel nextArrowNewsCarousel'  style='background-color: ${this.color}'></button>`,
        prevArrow: `<button class='arrowNewsCarousel prevArrowNewsCarousel' style='background-color: ${this.color}'></button>`,
      });
  },
};
</script>
<style lang="scss">
@import "../styles/mixins.scss";

.arrowNewsCarousel {
  position: absolute;
  top: -41px;
  right: 5px;
  background-color: transparent;
  border: none;
  height: 22px;
  width: 16px;
  cursor: pointer;
}

.nextArrowNewsCarousel {
  mask-image: url("../assets/arrowNext.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
}

.prevArrowNewsCarousel {
  right: 22px;
  mask-image: url("../assets/arrowPrev.svg");
  mask-size: contain;
  mask-repeat: no-repeat;
}

.big {
  width: 540px;
}

.small {
  width: 241px;
}
.container {
  position: relative;
}
</style>

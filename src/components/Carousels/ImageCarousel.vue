<template lang="">
  <div class="container" @mouseover="handleHover" @mouseleave="hover = false">
    <teleport to="#imageModal">
      <div class="modalBg" v-if="isModalOpen" @click="closeModal">
        <div class="modalBg__modal">
          <img
            :src="require(`@/assets/CarouselImages/${data[imgIndex].src}`)"
            alt="carousel"
          />
        </div>
      </div>
    </teleport>

    <button
      class="arrow container__buttonPrev"
      @mouseover="handleHover"
    ></button>

    <button
      class="arrow container__buttonNext"
      @mouseover="handleHover"
    ></button>

    <transition name="slide-thumbs">
      <div v-if="hover" class="container__thumbs">
        <img
          v-for="(i, index) in data"
          :key="index"
          :src="require(`@/assets/CarouselImages/${i.src}`)"
          @click="changeToSlide(index)"
        />
      </div>
    </transition>
    <div class="container__carouselImage">
      <div
        v-for="(i, index) in data"
        :key="index"
        class="container__carouselImage__image"
        @mouseover="handleHover"
      >
        <transition name="slide-search">
          <button
            v-if="hover"
            class="container__carouselImage__image__search"
            @click="openModal(index)"
          ></button>
        </transition>
        <img
          :src="require(`@/assets/CarouselImages/${i.src}`)"
          alt="carousel"
        />
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MAX_IMAGES_IN_ROW = 7;
const FIRST_SLIDE = 0;
const NUMBER_OF_SLIDES_TO_SCROLL = 2;

export default {
  props: {
    data: Object,
  },

  data() {
    return {
      hover: false,
      isModalOpen: false,
      imgIndex: 0,
    };
  },

  methods: {
    handleHover() {
      $(".container__thumbs").not(".slick-initialized").slick({
        dots: false,
        infinite: false,
        initialSlide: FIRST_SLIDE,
        arrows: false,
        slidesToScroll: NUMBER_OF_SLIDES_TO_SCROLL,
        slidesToShow: MAX_IMAGES_IN_ROW,
      });

      $(".container__carouselImage").on(
        "beforeChange",
        (event, slick, currentSlide, nextSlide) => {
          if (nextSlide >= MAX_IMAGES_IN_ROW) {
            $(".container__thumbs").slick("slickNext");
          }

          if (nextSlide === 0) {
            $(".container__thumbs").slick("slickGoTo", 0);
          }
        }
      );

      this.hover = true;
    },

    changeToSlide(number) {
      $(".container__carouselImage").slick("slickGoTo", number);
    },

    openModal(index) {
      this.imgIndex = index;
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },
  },

  mounted() {
    $(".container__carouselImage").not(".slick-initialized").slick({
      dots: false,
      infinite: true,
      arrows: true,
      initialSlide: FIRST_SLIDE,
      nextArrow: ".arrow.container__buttonNext",
      prevArrow: ".arrow.container__buttonPrev",
    });
  },
};
</script>
<style lang="scss" scoped>
.slide-search-move,
.slide-search-enter-active,
.slide-search-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  z-index: 100;
  width: 100%;
  bottom: 0px !important;
}

.slide-search-enter-from,
.slide-search-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-thumbs-move,
.slide-thumbs-enter-active,
.slide-thumbs-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  z-index: 100;
  width: 100%;
  bottom: 0px !important;
}

.slide-thumbs-enter-from,
.slide-thumbs-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.activeThumb {
  outline: 2px solid white !important;
}
.modalBg {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  &__modal {
    img {
      position: relative;
      height: 500px;
      width: auto;
      z-index: 950;
    }
  }
}
.arrow {
  width: 36px;
  height: 53px;

  background-color: white;
  position: absolute;

  border: none;

  cursor: pointer;

  &:hover {
    filter: brightness(70%);
  }
}

.container {
  position: relative;
  overflow: hidden;

  &__buttonNext {
    right: 10px;
    mask-image: url("@/assets/arrowNext.svg");
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  &__buttonPrev {
    mask-image: url("@/assets/arrowPrev.svg");
    mask-size: contain;
    mask-repeat: no-repeat;
    left: 10px;
  }

  &__thumbs {
    position: absolute !important;
    bottom: 0 !important;
    width: 100% !important;
    z-index: 100 !important;
    background-image: linear-gradient(to bottom, transparent 0%, black 100%);
    display: flex !important;
    justify-content: space-around !important;

    img {
      margin: 2px 0 20px 0 !important;
      height: 118px !important;
      width: 118px !important;
      cursor: pointer !important;

      &:hover {
        outline: 2px solid white;
      }
    }
  }

  &__carouselImage {
    margin-top: 18px;

    &__image {
      width: 940px !important;
      display: flex !important;
      justify-content: center !important;
      position: relative;

      &__search {
        position: absolute;
        z-index: 100;
        top: 38%;
        left: 45%;
        width: 80px;
        height: 80px;

        cursor: pointer;
        border: none;
        background-position: center;
        background-color: transparent;
        background-size: cover;
        background-image: url("@/assets/search.svg");

        &:hover {
          filter: brightness(50%);
        }
      }

      img {
        height: 400px !important;
        width: auto !important;
        max-width: 940px !important;
      }
    }
  }
}
</style>

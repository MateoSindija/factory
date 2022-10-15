<template lang="">
  <div class="container" @mouseover="hover = true" @mouseleave="hover = false">
    <teleport to="#imageModal">
      <div class="modalBg" v-if="isModalOpen" @click="closeModal">
        <div class="modalBg__modal"></div>
      </div>
    </teleport>

    <button class="arrow container__buttonPrev"></button>
    <button class="arrow container__buttonNext"></button>
    <button
      class="container__search"
      v-show="hover"
      @click="openModal"
    ></button>
    <div class="container__thumbs" v-show="hover">
      <img
        src="../assets/CarouselImages/Layer36.png"
        alt="carousel"
        @click="changeToSlide(0)"
        class="activeThumbx"
      />
      <img
        src="../assets/CarouselImages/Layer37.png"
        alt="carousel"
        @click="changeToSlide(1)"
      />
      <img
        src="../assets/CarouselImages/Layer39.jpg"
        alt="carousel"
        @click="changeToSlide(2)"
      />
      <img
        src="../assets/CarouselImages/Layer40.jpg"
        alt="carousel"
        @click="changeToSlide(3)"
      />
      <img
        src="../assets/CarouselImages/Layer41.jpg"
        alt="carousel"
        @click="changeToSlide(4)"
      />
      <img
        src="../assets/CarouselImages/Layer42.jpg"
        alt="carousel"
        @click="changeToSlide(5)"
      />
      <img
        src="../assets/CarouselImages/Layer43.jpg"
        alt="carousel"
        @click="changeToSlide(6)"
      />
    </div>
    <div class="container__carouselImage">
      <div class="carouselImage__container">
        <img src="../assets/CarouselImages/Layer36.png" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer37.png" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer39.jpg" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer40.jpg" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer41.jpg" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer42.jpg" alt="carousel" />
      </div>
      <div class="container__carouselImage__image">
        <img src="../assets/CarouselImages/Layer43.jpg" alt="carousel" />
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  data() {
    return {
      hover: false,
      isModalOpen: false,
    };
  },

  methods: {
    changeToSlide(number) {
      $(".container__carouselImage").slick("slickGoTo", number);
    },

    openModal() {
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
      initialSlide: 0,
      nextArrow: ".arrow.container__buttonNext",
      prevArrow: ".arrow.container__buttonPrev",
    });

    $(".container__carouselImage").on(
      "beforeChange",
      (event, slick, currentSlide, nextSlide) => {
        $(`.container__thumbs img:nth-child(${currentSlide + 1})`).removeClass(
          "activeThumb"
        );
        $(`.container__thumbs img:nth-child(${nextSlide + 1})`).addClass(
          "activeThumb"
        );
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.activeThumb {
  outline: 1px solid white;
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
    position: relative;
    z-index: 910;
    background-color: white;
    width: 100px;
    height: 100px;
  }
}
.arrow {
  width: 36px;
  height: 53px;
}

.container {
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
    background-image: url("../assets/search.svg");

    &:hover {
      filter: brightness(50%);
    }
  }

  &__buttonNext {
    right: 10px;
    background-image: url("../assets/arrowNext.svg");
  }

  &__buttonPrev {
    left: 10px;
    background-image: url("../assets/arrowPrev.svg");
  }

  &__thumbs {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 100;

    background-image: linear-gradient(to bottom, transparent 0%, black 100%);
    display: flex;
    justify-content: space-around;

    transition: 0.5s all ease-in;

    img {
      margin-bottom: 20px;
      height: 120px;
      width: 120px;
      cursor: pointer;

      &:hover {
        outline: 1px solid white;
      }
    }
  }

  &__carouselImage {
    margin-top: 18px;

    &__image {
      width: 940px !important;
      display: flex !important;
      justify-content: center !important;

      img {
        height: 400px !important;
        width: auto !important;
        max-width: 940px !important;
      }
    }
  }
}
</style>

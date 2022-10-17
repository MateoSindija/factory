<template lang="">
  <div class="carousel">
    <div
      v-for="(i, index) in this.news"
      :key="index"
      class="carousel__container"
    >
      <div class="carousel__container__image">
        <img src="../assets/topCarouselmage.svg" alt="news" />
      </div>
      <div class="carousel__container__article">
        <div class="carousel__container__article__dateComments">
          <div>{{ i.date }}</div>
          <div class="carousel__container__article__dateComments__comments">
            <img
              alt="comment"
              src="../assets/comment.svg"
              class="carousel__container__article__dateComments__comments__image"
            />
            <div>{{ i.comments }}</div>
          </div>
        </div>
        <div class="carousel__container__article__title">{{ i.title }}</div>
        <router-link to="/single" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            class="carousel__container__article__button"
          >
            Read Article
          </button>
        </router-link>
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
  props: {
    news: Array,
  },
  mounted() {
    $(".carousel").slick({
      arrows: true,
      prevArrow: this.prevArrow(),
      nextArrow: this.nextArrow(),
    });
  },

  methods: {
    prevArrow() {
      return "<button class='arrow arrowPrev'></button>";
    },

    nextArrow() {
      return "<button class='arrow arrowNext'></button>";
    },
  },
};
</script>
<style lang="scss">
@import "../styles/font.scss";
@import "../styles/mixins.scss";

.arrow {
  width: 30px;
  height: 63px;
  position: absolute;
  top: 38%;
  z-index: 100;

  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: center;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(50%);
  }
}

.carousel {
  margin-top: 18px;

  &__container {
    position: relative;
    text-align: left;

    &__article {
      position: absolute;
      z-index: 100;
      bottom: 28px;
      left: 30px;
      width: 60%;

      &__button {
        color: $top-carousel-font-color;
        background-color: transparent;
        padding: 6px 21px;
        border: 1px solid $top-carousel-font-color;
        font-family: "VarelaRound", Arial, Helvetica;
        font-size: 14px;
        background: linear-gradient(
            to left,
            transparent 50%,
            $top-carousel-font-color 50%
          )
          right;
        background-size: 200%;
        transition: 0.5s ease-out;
        cursor: pointer;

        &:hover {
          color: black;
          background-position: left;
        }
      }

      &__title {
        font-family: "BitterBold", Arial, Helvetica;
        font-weight: 700;
        font-size: 34px;
        color: white;
        margin-bottom: 10px;
      }

      &__dateComments {
        display: flex;
        flex-direction: row;
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        color: $top-carousel-font-color;
        font-size: 12px;
        margin-bottom: 6px;

        &__comments {
          display: flex;
          flex-direction: row;

          &__image {
            margin: 0 6px 0 18px;
          }
        }
      }
    }

    &__image {
      width: 940px;
      height: 425px;
      background: linear-gradient(to bottom, transparent 0%, black 100%);

      img {
        position: relative;
        z-index: -1;
      }
    }
  }
}

.arrowPrev {
  left: 28px;
  background-image: url("../assets/arrowPrev.svg");
}

.arrowNext {
  right: 28px;
  background-image: url("../assets/arrowNext.svg");
}
</style>

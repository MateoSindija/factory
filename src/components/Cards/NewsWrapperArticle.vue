<template lang="">
  <div class="container">
    <div class="container__title">{{ title }}</div>
    <div class="container__info">
      <div class="container__info__date">
        <img src="@/assets/calendar.svg" alt="calendar" />{{ date }}
      </div>
      <div>Author: {{ author }}</div>
      <div>{{ comments }} Comments</div>
    </div>
    <div class="container__article">
      <img src="@/assets/newsMountain.png" alt="news" />
      <div class="container__article__textBtn">
        <div class="container__article__textBtn__text">{{ article }}</div>
        <router-link to="/single" custom v-slot="{ navigate }"
          ><button @click="navigate">Read Article</button></router-link
        >
      </div>
    </div>

    <div class="container__line"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    date: String,
    article: String,
    comments: Number,
    author: String,
  },
};
</script>
<style lang="scss" scoped>
.container {
  &__line {
    width: 622px;
    margin: 0 -18px 0 -31px;
    border-bottom: 1px solid $social-grey;
  }

  &__title {
    font-family: "BitterBold", Arial, Helvetica;
    font-size: 28px;
    font-weight: 700;
    margin: 24px 0 13px 0;
  }

  &__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 16px;

    @include varelaRegular(12px, $footer-text-color);

    &__date {
      display: flex;
      align-items: center;

      img {
        margin-right: 4px;
      }
    }
  }

  &__article {
    display: flex;
    flex-direction: row;

    &__textBtn {
      &__text {
        font-family: "BitterRegular", Arial, Helvetica;
        font-size: 14px;
        color: #444444;
        max-height: 400px;
        line-height: 22px;
        overflow: hidden;
        margin-bottom: 24px;
      }

      button {
        margin-bottom: 62px;
        padding: 8px 22px;
        border: none;
        cursor: pointer;
        background-color: $nav-bottom-background-color;
        color: white;

        @include rippleEffect(#665aa2);
      }
    }

    img {
      height: 128px;
      width: 170px;
      margin: 8px 20px 0 0;
    }
  }
}
</style>

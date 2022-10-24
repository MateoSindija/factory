<template lang="">
  <div :class="handleType">
    <img src="@/assets/newsMountain.png" alt="news" />
    <div class="card__article">
      <div class="card__article__number">
        {{ this.number }}
      </div>
      <div class="card__article__date">
        {{ this.date }}
      </div>
      <div class="card__article__title">
        {{ this.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: String,
    title: String,
    number: {
      type: Number,
      required: false,
    },
    isSideway: Boolean,
  },

  computed: {
    handleType() {
      return {
        "cardSideway card": this.isSideway,
        card: !this.isSideway,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.cardSideway {
  display: flex;
  flex-direction: row;

  margin-left: 0px !important;
  margin-bottom: 20px;
  margin-right: 15px;
  margin-top: 0px !important ;

  .card__article__title {
    width: 118px;
  }

  img {
    margin-right: 15px;
    width: 120px !important;
    height: 90px !important;
  }
}

.card {
  max-width: 260px;

  &:hover {
    cursor: pointer;
    .card__article__title {
      text-decoration: underline;
    }

    img {
      filter: brightness(0.85);
    }
  }

  img {
    width: 100%;
    height: 128px;
    margin-bottom: 9px;
  }

  &__article {
    text-align: left;
    position: relative;

    &__number {
      @include varelaRegular(12px, white);

      position: absolute;
      top: 3px;
      right: 0px;
    }

    &__date {
      @include varelaRegular(12px, #363f48);
    }

    &__title {
      margin-top: 5px;

      @include titleStyle(#363f48, 14px);
      max-height: 70px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

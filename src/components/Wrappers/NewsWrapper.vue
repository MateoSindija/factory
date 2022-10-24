<template lang="">
  <div class="wrapper">
    <div class="wrapper__title">News</div>

    <NewsWrapperArticle
      v-for="(i, index) in displayedPosts"
      :key="index"
      :title="i.title"
      :date="i.date"
      :article="i.article"
      :comments="i.comments"
      :author="i.author"
    />
    <div class="wrapper__pagination">
      <button
        class="wrapper__pagination__buttons"
        type="button"
        v-for="(pageNumber, index) in pages"
        @click="page = pageNumber"
        :class="buttonHighlight(pageNumber, index)"
        :key="index"
      >
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>
<script>
const POSTS_PER_PAGE = 6;
const FIRST_PAGE = 1;

export default {
  props: { data: Array },

  data() {
    return {
      newsData: this.data,
      page: FIRST_PAGE,
      perPage: POSTS_PER_PAGE,
      pages: [],
    };
  },

  methods: {
    buttonHighlight(index) {
      if (index === this.page) {
        return "highlighted";
      }
      return "";
    },
    //calculate number of pages
    setPages() {
      let numberOfpages = Math.ceil(this.newsData.length / this.perPage);

      for (let i = 1; i <= numberOfpages; i++) {
        this.pages.push(i);
      }
    },

    //get data from one index to other
    paginate(data) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return data.slice(from, to);
    },
  },

  mounted() {
    this.setPages();
  },

  computed: {
    //return paginated news
    displayedPosts() {
      return this.paginate(this.newsData);
    },
  },
};
</script>
<style lang="scss" scoped>
.highlighted {
  color: white !important;
  background-color: $nav-bottom-background-color !important;

  @include rippleEffect(#60578e);
}
.wrapper {
  width: 100%;
  min-height: 404px;
  padding: 15px 18px 31px 31px;
  box-sizing: border-box;
  text-align: left;

  background-color: white;

  &__pagination {
    margin-top: 32px;

    &__buttons {
      width: 33px;
      height: 33px;
      background-color: $social-grey;
      border: none;
      cursor: pointer;

      @include varelaRegular(14px, $nav-bottom-background-color);

      @include rippleEffect(#e6e6e6);

      &:nth-child(n + 2) {
        margin: 0 3px 0 3px;
      }
    }
  }

  &__title {
    @include titleStyle();
    margin-bottom: 12px;
  }
}
</style>

<template lang="">
  <div class="cardCarousel"></div>
</template>
<script>
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default {
  props: {
    inView: Number,
  },
  mounted() {
    $(".cardCarousel").slick({
      arrows: true,
    });
  },
};
</script>
<style lang=""></style>

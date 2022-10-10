<template lang="">
  <div class="banner" :style="containerStyle">
    <div>banner</div>
    <div>{{ this.width }}x{{ this.height }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      containerStyle: {
        width: this.width + "px",
        height: this.height + "px",
      },
    };
  },
  props: {
    height: Number,
    width: Number,
  },
};
</script>
<style lang="scss" scoped>
.banner {
  border: 1px solid #d7d7d7;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #999999;
}
</style>

<template lang="">
  <div class="comments">
    <div class="comments__title">Comments</div>
    <div class="comments__comments">
      <CommentCard
        v-for="(el, index) in commentsData"
        :key="index"
        :data="el"
      />
    </div>
    <div class="comments__add">
      <div class="comments__add__title">Add Your Comment</div>
      <div class="comments__add__desc">
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </div>
      <form class="comments__add__form" @submit.prevent="addComment">
        <input
          @input="removeAddMessage"
          type="text"
          placeholder="Name"
          ref="name"
        />
        <input
          @input="removeAddMessage"
          type="email"
          placeholder="Email Address"
          ref="email"
        />
        <textarea
          @input="removeAddMessage"
          ref="comment"
          name="Comment"
          placeholder="Comment"
          cols="30"
          rows="10"
          resize="false"
        ></textarea>
        <div v-if="isCommentAdded" class="comments__add__form__added">
          Comment added successfully!
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
import SingleData from "../json/Single.json";
import CommentCard from "../components/CommentCard.vue";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default {
  components: { CommentCard },

  data() {
    return {
      commentsData: SingleData.comments,
      isCommentAdded: false,
    };
  },

  methods: {
    transformTime(hours, minutes) {
      if (hours > 12) {
        hours = hours - 12;
        return hours + ":" + minutes + " pm";
      }

      return hours + ":" + minutes + " am";
    },

    removeAddMessage() {
      this.isCommentAdded = false;
    },

    addComment() {
      const userName = this.$refs.name;
      const comment = this.$refs.comment;
      const email = this.$refs.email;

      const date = new Date();
      const currentDate = String(
        monthNames[date.getMonth() + 1] +
          " " +
          date.getDay() +
          "nd " +
          this.transformTime(date.getHours(), date.getMinutes())
      );

      const newComment = {
        userName: userName.value,
        comment: comment.value,
        date: currentDate,
        reply: [],
      };

      this.commentsData.push(newComment);
      this.isCommentAdded = true;

      userName.value = "";
      email.value = "";
      comment.value = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.comments {
  background-color: white;
  text-align: left;
  padding: 15px 15px 30px 30px;

  &__title {
    @include titleStyle();
    margin-bottom: 43px;
  }

  &__add {
    &__desc {
      @include varelaGrey();
      margin-bottom: 27px;
    }
    &__title {
      @include titleStyle();
      margin-bottom: 27px;
    }

    &__form {
      display: flex;
      flex-direction: column;

      &__added {
        margin-top: 18px;
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;
        color: green;
      }

      input {
        padding: 13px 11px 13px 18px;
        width: 270px;
        background-color: $social-grey;
        border: none;

        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;
        &:nth-child(2) {
          margin: 8px 0;
        }
      }

      textarea {
        resize: none;
        background-color: $social-grey;
        padding: 13px 11px 13px 18px;
        border: none;

        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;
      }

      button {
        margin-top: 18px;
        padding: 15px 35px;
        width: 120px;
        background-color: $nav-bottom-background-color;
        cursor: pointer;
        border: none;
        color: white;
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;

        @include rippleEffect(#5f5590);
      }
    }
  }
}
</style>

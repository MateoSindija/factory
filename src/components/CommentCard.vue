<template lang="">
  <div class="container">
    <img
      class="container__image"
      src="../assets/blankProfile.png"
      alt="profile"
    />

    <div class="container__comment">
      <div class="container__comment__title">
        <div>
          <span class="container__comment__title__name">{{
            data.userName
          }}</span>
          <span class="container__comment__title__date">{{ data.date }}</span>
        </div>

        <span
          class="container__comment__title__reply"
          @click="isReplyPressed = true"
          >Reply</span
        >
      </div>
      <div class="container__comment__text">{{ data.comment }}</div>
      <form
        @submit.prevent="handleReply"
        class="container__comment__newReply"
        v-if="isReplyPressed"
      >
        <input
          type="text"
          placeholder="Add a Reply..."
          @input="handleReplyInput"
          ref="reply"
        />
        <div class="container__comment__newReply__buttons">
          <button
            type="button"
            class="container__comment__newReply__buttons__cancel"
            @click="isReplyPressed = false"
          >
            Cancel
          </button>
          <button
            type="submit"
            :class="
              isReplyDisabled
                ? 'container__comment__newReply__buttons__add'
                : 'container__comment__newReply__buttons__add notDisabled'
            "
            :disabled="isReplyDisabled"
          >
            Reply
          </button>
        </div>
      </form>

      <div class="container__comment__replies" v-if="data.reply.length">
        <div
          v-for="(i, index) in data.reply"
          :key="index"
          class="container__comment__replies__reply"
        >
          <img
            class="container__comment__replies__reply__image"
            src="../assets/blankProfile.png"
            alt="profile"
          />
          <div class="container__comment__replies__reply__nameCom">
            <div class="container__comment__replies__reply__nameCom__username">
              {{ i.userName }}
            </div>

            <div class="container__comment__replies__reply__nameCom__comment">
              {{ i.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      userName: String,
      date: String,
      comment: String,
      reply: [{ userName: String, comment: String }],
    },
  },

  methods: {
    handleReplyInput(event) {
      const value = event.target.value;

      if (value.trim()) {
        this.isReplyDisabled = false;
      } else {
        this.isReplyDisabled = true;
      }
    },

    handleReply() {
      const reply = this.$refs.reply.value;

      const newReply = { userName: "Anonymus", comment: reply };

      this.comment.reply.push(newReply);

      this.isReplyPressed = false;
    },
  },

  data() {
    return {
      comment: this.data,
      isReplyPressed: false,
      isReplyDisabled: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.notDisabled {
  @include rippleEffect(#5f5590);
}
.container {
  display: flex;
  flex-direction: row;
  margin-bottom: 49px;
  box-sizing: content-box;

  &__comment {
    width: 100% !important;

    &__newReply {
      margin-top: 10px;
      &__buttons {
        margin-top: 7px;
        display: flex;
        justify-content: flex-end;

        &__cancel {
          margin-right: 10px;
          padding: 8px;
          width: 70px;
          background-color: #524656;
          cursor: pointer;
          border: none;
          color: white;
          font-family: "VarelaRoundRegular", Arial, Helvetica;
          font-size: 14px;

          @include rippleEffect(#5e5462);
        }

        &__add {
          padding: 8px;
          width: 70px;
          background-color: $nav-bottom-background-color;
          cursor: pointer;
          border: none;
          color: white;
          font-family: "VarelaRoundRegular", Arial, Helvetica;
          font-size: 14px;

          &:disabled {
            background-color: grey;
          }
        }
      }

      input {
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 0.3px solid $title-color;
      }
    }

    &__replies {
      margin-top: 10px;

      &__reply {
        margin: 0 0 15px 0;
        display: flex;
        flex-direction: row;

        &__image {
          margin-right: 8px;
          width: 28px;
          height: 28px;
        }

        &__nameCom {
          &__username {
            font-family: "VarelaRoundRegular", Arial, Helvetica;
            font-size: 14px;
            font-weight: 500;
            color: $nav-bottom-background-color;
            margin-bottom: 5px;
          }

          &__comment {
            font-family: "VarelaRoundRegular", Arial, Helvetica;
            font-size: 12px;
            color: #444444;
          }
        }
      }
    }

    &__text {
      font-family: "VarelaRoundRegular", Arial, Helvetica;
      font-size: 13px;
      color: #444444;
    }

    &__title {
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      &__reply {
        cursor: pointer;
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 14px;
        color: $nav-bottom-background-color;

        &:hover {
          color: #786ea9;
          text-decoration: underline;
        }
      }

      &__name {
        font-family: "BitterRegular", Arial, Helvetica;
        font-size: 18px;
        color: #4d4382;
        font-weight: 500;
        margin-right: 7px;
      }

      &__date {
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        color: $footer-text-color;
        font-size: 11px;
      }
    }
  }

  &__image {
    width: 57px;
    height: 57px;
    margin-right: 18px;
  }
}
</style>

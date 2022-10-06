<template lang="">
  <footer>
    <div class="upperRow">
      <div class="flexCol upperRow__firstCol">
        <div class="upperRow__firstCol__logo">
          <img src="../assets/logo.svg" alt="logo" />
          <div class="upperRow__firstCol__logo__name">Kenaz</div>
        </div>
        <div class="upperRow__firstCol__lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
          ante.
        </div>
        <div class="upperRow__firstCol__socialMedia">
          <img src="../assets/rss.svg" alt="rss" />
          <img src="../assets/facebook.svg" alt="facebook" />
          <img src="../assets/twitter.svg" alt="twitter" />
          <img src="../assets/dribble.svg" alt="dribble" />
          <img src="../assets/linkedin.svg" alt="linkedin" />
          <img src="../assets/youtube.svg" alt="youtube" />
          <img src="../assets/skype.svg" alt="skype" />
        </div>

        <div class="upperRow__firstCol__featured">
          <div class="colNewstTitle">Featured</div>
          <div class="noBottomBorder">
            <FooterNews />
            <FooterNews />
            <FooterNews />
          </div>
        </div>
      </div>
      <div class="flexCol upperRow__secondCol">
        <div class="colTitle">Newsletter</div>
        <div class="upperRow__secondCol__lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
          ante...
        </div>

        <form
          @submit.prevent="onSubmit"
          class="flexCol upperRow__secondCol__form"
        >
          <input type="email" placeholder="Your mail" />
          <button type="submit ">Subscribe</button>
        </form>
        <div class="upperRow__secondCol__randomPosts">
          <div class="colNewstTitle">Random Posts</div>
          <div class="noBottomBorder">
            <FooterNews />
            <FooterNews />
            <FooterNews />
          </div>
        </div>
      </div>

      <div class="flexCol upperRow__thirdCol">
        <div class="colTitle">Tags Widget</div>
        <div class="upperRow__thirdCol__tags">
          <div>assueverit</div>
          <div>utroquoe</div>
          <div>probo</div>
          <div>assuev</div>
          <div>probo</div>
          <div>assuevverit</div>
          <div>titl</div>
          <div>assuevverit</div>
          <div>assuevverit</div>
          <div>utroquoe</div>
          <div>probo</div>
          <div>assuevverit</div>
          <div>utroquoe</div>
        </div>
      </div>
    </div>

    <div class="bottomRow">
      <div class="bottomRow__container">
        <div class="bottomRowText bottomRow__conatiner__company">
          © 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia
        </div>
        <div class="bottomRowText bottomRow__conatiner__info">
          Typography - Templates - Contact Form - 404 Page
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import FooterNews from "./FooterNews.vue";

export default {
  components: {
    FooterNews,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/font.scss";
@import "../styles/mixins.scss";

footer {
  display: flex;
  flex-direction: column;
  margin: auto -8px -8px -8px;

  height: 992px;
  background-color: #252525;
  border-top: 23px solid $nav-bottom-background-color;
}

.colNewstTitle {
  color: white;
  font-weight: 700;
  font-size: 24px;
  font-family: "BitterBold", Arial, Helvetica;
  margin-bottom: 25px;
}

.flexCol {
  display: flex;
  flex-direction: column;
  width: 303px;
}

.colTitle {
  display: flex;
  align-items: center;

  color: $footer-grey-color;
  font-size: 24px;
  font-weight: 700;
  font-family: "BitterBold", Arial, Helvetica;
  margin-bottom: 23px;
  height: 43px;
}

.noBottomBorder {
}

.upperRow {
  padding: 47px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 67px;

  &__firstCol {
    margin-right: 18px;

    &__logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 23px;

      img {
        width: 28px;
        height: 43px;
        margin-right: 18px;
      }

      &__name {
        font-family: "BitterRegular", Arial, Helvetica;
        color: $footer-logo-color;
        font-size: 30px;
        font-weight: 400;
      }
    }

    &__lorem {
      text-align: left;
      color: $footer-text-color;
      font-family: "BitterRegular", Arial, Helvetica;

      margin-bottom: 33px;
    }

    &__socialMedia {
      display: flex;
      justify-content: space-between;
      margin-bottom: 84px;
      img {
        cursor: pointer;
      }
    }

    &__featured {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }

  &__secondCol {
    text-align: left;
    margin-right: 18px;

    &__lorem {
      text-align: left;
      color: $footer-text-color;
      font-family: "BitterRegular", Arial, Helvetica;

      margin-bottom: 33px;
    }

    &__form {
      display: flex;
      flex-direction: row;
      margin-bottom: 74px;

      input {
        padding: 15px 15px 15px 21px;
        width: 70%;
        background-color: #333333;
        border: none;
        color: white;
        font-size: 16px;

        &::placeholder {
          font-size: 16px;
        }
      }

      button {
        width: 30%;
        border: none;
        background-color: #4d4382;
        cursor: pointer;

        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 16px;
        color: $footer-grey-color;

        @include rippleEffect(#605594);
      }
    }
  }

  &__thirdCol {
    text-align: left;

    &__tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &:first-child {
      }

      div {
        font-family: "VarelaRoundRegular", Arial, Helvetica;
        font-size: 12px;
        color: $footer-text-color;
        padding: 4px 12px;
        background-color: #333333;
        margin: 3px;
      }
    }
  }
}

.bottomRowText {
  font-family: "VarelaRoundRegular", Arial, Helvetica;
  color: #999999;
  font-size: 12px;
}

.bottomRow {
  border-top: 1px solid rgba(102, 102, 102, 0.2);
  padding-top: 18px;

  display: flex;
  justify-content: center;

  &__container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
}
</style>

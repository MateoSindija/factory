<template>
  <nav>
    <div class="navSections flexVerCenter upperNav">
      <div class="flexVerCenter upperNav__logo">
        <div class="flexVerCenter upperNav__logo__image">
          <img src="../assets/logo.svg" alt="logo" />
        </div>
        <div class="upperNav__logo__name">Kenaz</div>
      </div>
      <div class="flexVerCenter upperNav__buttons">
        <button>Media</button>
        <button>Marketing</button>
        <button>Contact</button>

        <div class="flexVerCenter upperNav__search">
          <img src="../assets/search.svg" alt="search" />
        </div>
      </div>
    </div>

    <div class="navSections flexVerCenter bottomNav">
      <button class="bottomNav__btnNews">News</button>
      <button class="bottomNav__btnBuisiness">Business</button>
      <button class="bottomNav__btnSport">Sport</button>
      <button class="bottomNav__btnLife">Life</button>
      <button class="bottomNav__btnTech">Tech</button>
      <button class="bottomNav__btnTravel">Travel</button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/font.scss";

.navSections {
  padding: 0 19%;
  height: 50px;
}

.flexVerCenter {
  display: flex;
  align-items: center;
}

.upperNav {
  &__logo {
    &__image {
      justify-content: center;
      width: 63px;
      height: 53px;
      background-color: rgba(255, 255, 255, 0.05);
    }

    &__name {
      display: flex;
      font-family: "BitterRegular", Arial, Helvetica;
      font-size: 24px;
      color: white;

      margin-left: 9px;
    }
  }

  &__search {
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.05);
    height: 50px;
    width: 62px;
    cursor: pointer;
    margin-left: 10px;

    img {
      width: 20px;
    }

    &:hover {
      background-color: #343538;
    }
  }

  &__buttons {
    margin-left: auto;
    justify-content: space-between;

    button {
      color: white;
      background-color: $nav-upper-background-color;
      font-size: 14px;
      height: 50px;
      padding: 0 5px;
      border: none;
      cursor: pointer;
      min-width: 70px;
      font-family: "VarelaRoundRegular", Arial, Helvetica;

      @include rippleEffect(#343538);
    }
  }
}

.bottomNav {
  background-color: $nav-bottom-background-color;

  button {
    color: white;
    background-color: $nav-bottom-background-color;
    height: 100%;
    border-right: none;
    border-top: none;
    border-left: none;
    font-weight: 700;
    min-width: 100px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 18px;
    padding: 0 10px;

    font-family: "BitterBold", Arial, Helvetica, sans-serif;

    @include rippleEffect(#5a518a);
  }

  &__btnNews {
    background-color: #299ec3 !important;
    border-bottom: none;
  }

  &__btnBuisiness {
    border-bottom: 4px solid #ee6151;
  }

  &__btnSport {
    border-bottom: 4px solid #84c14f;
  }

  &__btnLife {
    border-bottom: 4px solid #5dcff3;
  }

  &__btnTech {
    border-bottom: 4px solid #fcc44d;
  }

  &__btnTravel {
    border-bottom: 4px solid #a99765;
  }
}

nav {
  display: flex;
  flex-direction: column;
  background-color: $nav-upper-background-color;
}
</style>

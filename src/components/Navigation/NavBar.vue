<template>
  <header>
    <nav class="flexVerCenter upperNav">
      <div class="navSections flexVerCenter upperNav__container">
        <router-link to="/" custom v-slot="{ navigate }">
          <div
            @click="navigate"
            class="flexVerCenter upperNav__container__logo"
          >
            <div class="flexVerCenter upperNav__container__logo__image">
              <img src="@/assets/logo.svg" alt="logo" />
            </div>
            <div class="upperNav__container__logo__name">Kenaz</div>
          </div>
        </router-link>
        <div class="flexVerCenter upperNav__container__buttons">
          <button>Media</button>
          <button>Marketing</button>
          <button>Contact</button>

          <div class="flexVerCenter upperNav__container__search">
            <img src="@/assets/search.svg" alt="search" />
          </div>
        </div>
      </div>
    </nav>

    <nav class="flexVerCenter bottomNav">
      <div class="navSections bottomNav__container">
        <router-link to="/category" custom v-slot="{ navigate }"
          ><button
            @click="navigateNews(navigate)"
            class="bottomNav__container__btnNews"
            :class="navButtons.isNewsActive ? 'selectedBtnNews' : ''"
          >
            News
          </button></router-link
        >
        <button
          @click="changeObject('isBuisinessActive')"
          class="bottomNav__container__btnBuisiness"
          :class="navButtons.isBuisinessActive ? 'selectedBtnBuisiness' : ''"
        >
          Business
        </button>
        <button
          @click="changeObject('isSportActive')"
          class="bottomNav__container__btnSport"
          :class="navButtons.isSportActive ? 'selectedBtnSport' : ''"
        >
          Sport
        </button>
        <button
          @click="changeObject('isLifeActive')"
          class="bottomNav__container__btnLife"
          :class="navButtons.isLifeActive ? 'selectedBtnLife' : ''"
        >
          Life
        </button>
        <button
          @click="changeObject('isTechActive')"
          class="bottomNav__container__btnTech"
          :class="navButtons.isTechActive ? 'selectedBtnTech' : ''"
        >
          Tech
        </button>
        <button
          @click="changeObject('isTravelActive')"
          class="bottomNav__container__btnTravel"
          :class="navButtons.isTravelActive ? 'selectedBtnTravel' : ''"
        >
          Travel
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navButtons: {
        isNewsActive: false,
        isBuisinessActive: false,
        isSportActive: false,
        isLifeActive: false,
        isTechActive: false,
        isTravelActive: false,
      },
    };
  },

  methods: {
    changeObject(requiredKey) {
      Object.keys(this.navButtons).forEach((key) => {
        if (key === requiredKey) {
          this.navButtons[requiredKey] = true;
        } else {
          this.navButtons[key] = false;
        }
      });
    },

    navigateNews(navigate) {
      this.changeObject("isNewsActive");

      navigate("/category");
    },
  },

  watch: {
    $route() {
      const route = this.$route.path;

      if (route === "/category") {
        this.changeObject("isNewsActive");
      } else if (route === "/") {
        this.changeObject("");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.selectedBtnNews {
  background-color: #299ec3 !important;
  border-bottom: none !important;
}

.selectedBtnBuisiness {
  background-color: #ee6151 !important;
  border-bottom: none !important;
}
.selectedBtnSport {
  background-color: #84c14f !important;
  border-bottom: none !important;
}
.selectedBtnLife {
  background-color: #5dcff3 !important;
  border-bottom: none !important;
}
.selectedBtnTech {
  background-color: #fcc44d !important;
  border-bottom: none !important;
}
.selectedBtnTravel {
  background-color: #a99765 !important;
  border-bottom: none !important;
}

.navSections {
  height: 50px;
  width: 940px;
}

.flexVerCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.upperNav {
  background-color: $nav-upper-background-color;
  &__container {
    &__logo {
      cursor: pointer;
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
        background-color: $nav-upper-background-color;
        height: 50px;
        padding: 0 5px;
        border: none;
        cursor: pointer;
        min-width: 70px;
        @include varelaRegular(14px, white);

        @include rippleEffect(#343538);
      }
    }
  }
}

.bottomNav {
  background-color: $nav-bottom-background-color;

  &__container {
    display: flex;
    justify-content: flex-start;

    button {
      background-color: $nav-bottom-background-color;
      height: 100%;
      border-right: none;
      border-top: none;
      border-left: none;
      min-width: 100px;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0 10px;

      @include titleStyle(white, 18px);

      @include rippleEffect(#5a518a);
    }

    &__btnNews {
      border-bottom: 4px solid lightblue;
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
    align-items: center;
    flex-direction: column;
    background-color: $nav-upper-background-color;
  }
}
</style>

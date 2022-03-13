<template>
  <div class="wrapper">
    <div class="info">
      <dress-code v-if="isActive('dress-code')" />
      <home-invitation v-if="isActive('home-invitation')" :name="name" @go-to="goTo"/>
      <save-the-date v-if="isActive('save-the-date')" :error="error" @new-code="newCode" />
      <when-is v-if="isActive('when-is')" />
      <where-is v-if="isActive('where-is')" />
      <guests-confirmation v-if="isActive('guest-confirmation')" :guests="guests" @go-to="goTo" />
      <confirmation-message v-if="isActive('confirmation-message')" :guests="guests" />
      <button v-if="backButtonActive" class="button-3" @click="goTo('home-invitation')">Volver</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ConfirmationMessage from './ConfirmationMessage.vue';
import DressCode from './DressCode.vue';
import GuestsConfirmation from './GuestsConfirmation.vue';
import HomeInvitation from './HomeInvitation.vue';
import SaveTheDate from './SaveTheDate.vue';
import WhenIs from "./WhenIs.vue";
import WhereIs from "./WhereIs.vue";

type IState = "loading" | "dress-code" | "home-invitation" | "save-the-date" | "when-is" | "where-is";
export interface IGuest {
  id: number;
  code: string;
  name: string;
  confirmed: boolean
}

export default defineComponent({
  name: 'HomePage',
  components: {
    ConfirmationMessage,
    DressCode,
    GuestsConfirmation,
    HomeInvitation,
    SaveTheDate,
    WhenIs,
    WhereIs
  },
  data() {
    return {
      state: "loading" as IState,
      code: "",
      guests: [] as IGuest[],
      error: false,
      name: ""
    };
  },
  computed: {
    backButtonActive(): boolean {
      return this.state !== "home-invitation" && this.state !== "loading" && this.state !== "save-the-date";
    }
  },
  mounted() {
    document.title = "Matri Laura y Andrés";
    if (this.$route.query.code) {
      this.newCode(this.$route.query.code as string);
    } else {
      this.state = "save-the-date";
    }
  },
  methods: {
    isActive(state: IState): boolean {
      return this.state === state;
    },
    newCode(code: string): void {
      this.code = code;
      this.axios.get("/whois", { params: { code: this.code } })
        .then(res => {
          this.name = res.data;
          this.state = "home-invitation";
          this.axios.get("/guests", { params: { code: this.code } })
            .then(res => {
              this.guests = res.data;
            });
        })
        .catch(() => {
          this.error = true;
          this.state = "save-the-date"
          console.log("Wrong Code")
        })
    },
    goTo(state: IState): void {
      this.state = state;
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c77644;
  background-image: url("../assets/flores.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: 'Dancing Script', cursive;
}
.wrapper {
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.infoRow {
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
}
.data42 {
  font-size: 42px;
}
.data30 {
  font-size: 30px;
}
.data26 {
  font-size: 26px;
}
.data22 {
  font-size: 22px;
}
.margin30 {
  margin-top: 30px;
}
/* CSS */
.button-3 {
  margin-top: 5px;
  width: fit-content;
  align-self: center;
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}
</style>

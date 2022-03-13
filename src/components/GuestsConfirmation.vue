<template>
  <div class="info">
    <span class="data30">Confirma quienes van a ir:</span>
    <span
      v-for="(guest, index) in guests"
      :key="index"
    >
      <input type="checkbox" id="checkbox" v-model="guest.confirmed">
      <label class="data26" for="checkbox">{{ guest.name }}</label>
    </span>
    <button class="margin30 button-3" @click="saveInfo">Confirma</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { IGuest } from './HomePage.vue'

export default defineComponent({
  name: "GuestsConfirmation",
  props: {
    guests: {
      type: Array as () => IGuest[],
      required: true
    }
  },
  methods: {
    saveInfo(): void {
      const answers = this.guests.map(g =>  {
        return { person: g.id, confirmed: g.confirmed }
      });
      this.axios.put("/guests", { code: this.guests[0].code, answers })
        .then(() => {
          this.$emit('go-to', 'confirmation-message');
        })
        .catch(() => {
          console.log("Wrong Response");
        })
    }
  }
});
</script>

<style lang="scss">
</style>
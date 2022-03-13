<template>
  <div class="info">
    <span v-if="sad" class="data30">Sabemos que nos acompañaran de corazón</span>
    <span v-else class="data30">
      Confirmaste a {{ countMessage }}
      <br>
      ¡Estamos ansiosos de compartir con {{ names }} ese día!
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { IGuest } from './HomePage.vue'

export default defineComponent({
  name: "ConfirmationMessage",
  props: {
    guests: {
      type: Array as () => IGuest[],
      required: true
    }
  },
  computed: {
    sad(): boolean {
      return this.count === 0;
    },
    bornReady(): IGuest[] {
      return this.guests.filter(g => g.confirmed);
    },
    count(): number {
      return this.bornReady.length;
    },
    countMessage(): string {
      if(this.count === 1) {
        return "1 persona";
      } else {
        return this.count +  " personas";
      }
    },
    names(): string {
      if(this.count === 1) {
        return this.guests[0].name;
      } else {
        return this.bornReady.slice(0, -1).map(g => g.name).join(", ") + " y " + this.bornReady.slice(-1)[0].name;
      }
    }
  }
});
</script>

<style lang="scss">
</style>
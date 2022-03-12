<template>
  <div class="info">
    <span class="data42">Hola {{name}}</span>
    <span class="data22 ">Llegó el gran día</span>
    <span class="data30">Laura y Andrés tienen el gusto de invitarlos a su boda</span>
    <div class="infoRow margin30">
      <span class="data30">¿Cuándo?: </span>
      <span class="icon" @click="$emit('go-to', 'when-is')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiCalendarClockIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow">
      <span class="data30">¿Qué me pongo?: </span>
      <span class="icon" @click="$emit('go-to', 'dress-code')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiAccountTieIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow">
      <span class="data30">¿Dónde?: </span>
      <span class="icon" @click="$emit('go-to', 'where-is')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiMapOutlineIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow">
      <span class="data30">¡Quiero ir!: </span>
      <span class="icon" @click="$emit('go-to', 'guest-confirmation')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiAccountCheckIcon" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiAccountCheck, mdiAccountTie, mdiCalendarClock, mdiMapOutline } from '@mdi/js'; 

export default {
  name: "HomeInvitation",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mdiAccountCheckIcon: mdiAccountCheck,
      mdiAccountTieIcon: mdiAccountTie,
      mdiCalendarClockIcon: mdiCalendarClock,
      mdiMapOutlineIcon: mdiMapOutline
    };
  }
}
</script>

<style>
.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;

}

.currentTheme {
  fill: #5e7c4a;
}

</style>
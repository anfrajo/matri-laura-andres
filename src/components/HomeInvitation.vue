<template>
  <div class="info">
    <span class="data42 padding 16"><b>{{name}}</b></span>
    <span class="data30">¡Laura y Andrés se casan!</span>
    <img class="principal-image" :src="fotoImg" />
    <span class="data30 padding16">
      Queremos que nos
      acompañe<span v-if="individual">s</span><span v-else>n</span>
      en esta fecha tan especial
    </span>

    <div class="infoRow margin30" @click="$emit('go-to', 'when-is')">
      <span class="data30">¿Cuándo?: </span>
      <span class="icon">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiCalendarClockIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow" @click="$emit('go-to', 'dress-code')">
      <span class="data30">¿Qué me pongo?: </span>
      <span class="icon">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiAccountTieIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow" @click="$emit('go-to', 'where-is')">
      <span class="data30">¿Dónde?: </span>
      <span class="icon">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiMapOutlineIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow" @click="$emit('go-to', 'guest-confirmation')">
      <span class="data30">¡Quiero ir!: </span>
      <span class="icon">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiAccountCheckIcon" />
        </svg>
      </span>
    </div>
    <div class="infoRow">
      <span class="data30">Contáctanos: </span>
      <span class="icon" @click="openWhatsapp('3007426090')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiFaceWomanOutlineIcon" />
        </svg>
      </span>
      &nbsp;&nbsp;&nbsp;
      <span class="icon" @click="openWhatsapp('3057002493')">
        <svg viewBox="0 0 24 24">
          <path class="currentTheme" :d="mdiFaceManIcon" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiAccountCheck,
  mdiAccountTie,
  mdiCalendarClock,
  mdiFaceMan,
  mdiFaceWomanOutline,
  mdiMapOutline
} from '@mdi/js';

export default {
  name: "HomeInvitation",
  props: {
    name: {
      type: String,
      required: true
    },
    individual: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    fotoImg()  {
      return require("../assets/foto.jpg");
    }
  },
  data() {
    return {
      mdiAccountCheckIcon: mdiAccountCheck,
      mdiAccountTieIcon: mdiAccountTie,
      mdiCalendarClockIcon: mdiCalendarClock,
      mdiFaceManIcon: mdiFaceMan,
      mdiFaceWomanOutlineIcon: mdiFaceWomanOutline,
      mdiMapOutlineIcon: mdiMapOutline
    };
  },
  methods: {
    openWhatsapp(destination: string) {
      window.open(`https://wa.me/57${destination}`, '_blank');
    }
  }
}
</script>

<style>
.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.principal-image {
  object-fit: cover;
  height: 170px;
  width: 300px;
}

.currentTheme {
  fill: #5e7c4a;
}

</style>
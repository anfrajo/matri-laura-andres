<template>
  <div class="info">
    <span class="data42">Hacienda El Trebolito</span>
    <span class="data22 padding16">Km. 5 via Guaymaral-Bogotá</span>
    <span class="data22">(Bogotá DC)</span>
    <span class="data26">Planea tu viaje con tiempo</span>
    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7372141532214!2d-74.0775182846549!3d4.815121696503364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8658404aba2d%3A0xd1867583e3c72131!2sHacienda%20El%20Trebolito%20Dan%C3%A9s%2C%20Suba%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1646323766165!5m2!1sen!2sco"
      allowfullscreen=""
      loading="lazy"
    />
    <button class="margin30 button-3" @click="openWaze">Navega</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "WhereIs",
  methods: {
    openWaze(): void {
      window.open("https://waze.com/ul/hd2g76ke6k");
    }
  }
}
</script>

<style>
.map {
  width: 360px;
  height: 210px;
  border: 0;
}

</style>
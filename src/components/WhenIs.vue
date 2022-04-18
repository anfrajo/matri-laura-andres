<template>
  <div class="info">
    <span class="data42">Mayo 21 de 2022</span>
    <img class="when__image" :src="calendarImg" alt="Calendar" />
    <span class="data26">Te esperamos a las <b>3:30pm</b></span>
    <span class="data22 margin">Si piensas llevar tu carro,</span>
    <span class="data22 margin padding16">pide el conductor elegido alrededor de las <b>11pm</b></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "WhenIs",
  computed: {
    calendarImg() {
      return require("../assets/calendar.png");
    }
  }
}
</script>

<style lang="scss">
.when {
  &__image {
    width: 60%;
  }
}

</style>
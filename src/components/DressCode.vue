<template>
  <div class="dress-code">
    <div class="info">
      <img :src="dressImg" alt="Dress" width="100" height="150" />
      <span class="data30">Ellas: </span>
      <span class="data30">Vestido Largo</span>
    </div>
    <div class="info">
      <img :src="suitImg" alt="Suit" width="100" heigth="150" />
      <span class="data30">Ellos: </span>
      <span class="data30">Corbata</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "DressCode",
  computed: {
    dressImg() {
      return require("../assets/dress.jpg");
    },
    suitImg() {
      return require("../assets/suit.jpg");
    }
  }
};
</script>

<style lang="scss">
.dress-code {
  display: flex;
  flex-direction: column;
  
  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
  }
}
</style>
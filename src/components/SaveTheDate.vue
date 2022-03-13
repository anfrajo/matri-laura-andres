<template>
  <div class="info">
    <img width="360" src="https://c.tenor.com/1J5kkT96dcAAAAAC/up-si-quiero.gif"/>
    <span class="data26 margin30">Introduce el código</span>
    <input v-model="code" type="text">
    <button class="button-3" @click="$emit('new-code', code)">Entrar</button>
    <span class="data26 margin26">
      ¿Perdiste tu código?
      <br>Pregúntale a
      <a href="https://wa.me/573007426090" target="_blank">Laura</a>
      o a
      <a href="https://wa.me/573057002493" target="_blank">Andrés</a>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SaveTheDate",
  data() {
    return {
      code: ""
    };
  }
}
</script>

<style>

</style>
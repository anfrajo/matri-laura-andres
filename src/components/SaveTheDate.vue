<template>
  <div class="info">
    <img width="360" src="https://c.tenor.com/1J5kkT96dcAAAAAC/up-si-quiero.gif"/>
    <span class="data26 margin30">Introduce el código</span>
    <input v-model="code" type="text">
    <button class="button-3" @click="$emit('new-code', code)">Entrar</button>
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
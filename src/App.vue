<template>
  <div class="wrapper">
    <div class="info">
      <img width="100%" src="https://c.tenor.com/1J5kkT96dcAAAAAC/up-si-quiero.gif"/>
      <span class="data32">Save the date</span>
      <span class="data20">Mayo 28 2022</span>
      <span class="data12">Laura y Andrés</span>
      <span class="data32">Espera más noticias muy pronto</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatriLauraAndres',
  mounted() {
    document.title = "Matri Laura y Andrés";
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #722620;
  color: #F2BC94;
  width: 100%;
  height: 100vh;
  margin: 0;
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
}
.data32 {
  font-size: 32px;
}
.data20 {
  font-size: 20px;
}
.data12 {
  font-size: 12px;
}
</style>

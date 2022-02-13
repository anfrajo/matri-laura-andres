<template>
  <div class="wrapper">
    <div class="info">
      <img width="100%" src="https://c.tenor.com/1J5kkT96dcAAAAAC/up-si-quiero.gif"/>
      <span class="data32">Save the date</span>
      <span class="data12">Laura y Andrés</span>
      <span class="data20">Mayo 28 de 2022</span>
      <span class="data26">Espera más noticias muy pronto</span>
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
  color: #c77644;
  background-image: url("./assets/flores.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  font-family: 'Dancing Script', cursive;
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
  font-size: 42px;
}
.data26 {
  font-size: 26px;
  margin-top: 30px;
}
.data20 {
  font-size: 30px;
}
.data12 {
  font-size: 22px;
  font-weight: bold;
}
</style>

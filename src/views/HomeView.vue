<template>
  <main id="welcome">
    <h2 id="drop-text">Quello che facciamo è solo una goccia nell'oceano, ma l'oceano senza quella goccia sarebbe più piccolo</h2>
    <div class="drop"></div>
      <!-- <div class="circle"></div> -->
      <div class="circle__wrapper">
        <p class="circle"></p>
      </div>
  </main>
</template>

<script>
export default {
  mounted(){
    setTimeout(() => {
      this.$router.push('/presentation')
    }, 6200);
  }
}
</script>

<style scoped src="../assets/welcome.css" />

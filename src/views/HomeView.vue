<template>
  <main id="welcome">
    <h2 id="drop-text">{{ $t('welcome_message') }}</h2>
    <div class="drop"></div>
    <div class="wave"></div>
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
      this.$router.push('/introduction')
    }, 4200);
  }
}
</script>

<style scoped src="../assets/welcome.css" />

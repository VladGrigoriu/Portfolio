
<template>
    <header class="header">
      <LanguageSwitcher />
        <a target="_blank" href="https://it.linkedin.com/in/vladgrigoriu"><FontAwesomeIcon icon="fa-brands fa-linkedin" class="icons"/></a>
        <a target="_blank" href="https://github.com/VladGrigoriu"><FontAwesomeIcon icon="fa-brands fa-github" class="icons ml mr"/></a>
    </header>
</template>

<script>
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue';

export default {
  components: { LanguageSwitcher }
}
</script>

<style scoped>
.icons{
  -webkit-animation: show .75s 1 forwards;
    -moz-animation: show .75s 1 forwards;
    -o-animation: show .75s 1 forwards;
    animation: show .75s 1 forwards;
    animation-delay: 3s;
    opacity: 0;
}
.header{
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  z-index: 99;
  background-color: var(--primary-color);
}
@keyframes show {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
  }
  
</style>
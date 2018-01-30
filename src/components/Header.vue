<template>
  <div class="header">
    <router-link to="/"><i class="fas fa-home"></i></router-link>
    <a id="mail" href='https://github.com/pip36' target='_blank'> <span class="is-size-6">phil_23@live.co.uk</span> <i class="fab fa-github"></i> </a>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  .header {
    position: absolute;
    font-size: 1.7em;
    left: 10px;
    width: 98%;
  }
  #mail {
    float: right;
  }
</style>

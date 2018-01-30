<template>
  <div id="app">
    <header-top></header-top>
    <div class="section has-text-centered gradient">
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    'header-top': Header
  }
}
</script>

<style>
  .section{
    min-height: 100vh;
    overflow: hidden;
  }

  .gradient {
    background: linear-gradient(rgb(249, 253, 255), rgb(186, 228, 250));
  }
</style>

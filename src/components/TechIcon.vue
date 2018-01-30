<template>
  <span class="tech-icon tag" :class="name">
    {{name}} <i :class="faviconClass" > </i> 
  </span>
</template>

<script>

export default {
  name: 'TechIcon',
  props: ['name'],
 
  data () {
    return {
      icons: {
        html: {favicon: 'fab fa-html5'},
        css: {favicon: 'fab fa-css3-alt'},
        javascript: {favicon: 'fab fa-js-square'},
        rails: {favicon: 'far fa-gem'},
        vue: {favicon: 'fab fa-vuejs'},
        android: {favicon: "fab fa-android"},
        'c-sharp': {favicon:"fas fa-hashtag"},
        jquery: {favicon: 'fab fa-js-square'}
      }
    }
  },
  computed: {
    faviconClass () {
      if (this.icons[this.name]) {
        return this.icons[this.name].favicon 
      } 
      else {
        return "fas fa-exclamation-triangle"
      } 
    }
  }
}
</script>

<style scoped>
  .tech-icon {
    font-size: 12px;
    margin-left: 2px;
    margin-right: 2px;
  }

  .html {
    background: rgb(223, 70, 0);
    color: #f8f8f8;
  }

  .css{
    background: rgb(10, 63, 207);
    color: #f8f8f8;
  }

  .javascript{
    background: rgb(180, 164, 17);
    color: #f8f8f8;
  }

  .vue {
    background: rgb(5, 151, 73);
    color: #f8f8f8;
  }

  .rails {
    background: rgb(158, 18, 18);
    color: #f8f8f8;
  }

  .android {
    background: rgb(103, 167, 20);
    color: #f8f8f8;
  }

  .c-sharp {
    background: rgb(115, 7, 148);
    color: #f8f8f8;
  }

  .jquery {
    background: rgb(61, 7, 148);
    color: #f8f8f8;
  }

</style>

<template>
  <div class="projects">

    <div class="content">
      <carousel> </carousel>
    </div>
  
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'Projects',
  components: {
    'carousel': Carousel
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>

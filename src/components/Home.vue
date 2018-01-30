<template>
  <div class="home">
 
    <div class="content">
      <transition name="drop">
        <h1 v-if="shown" class="title is-1"> Philip White </h1>
      </transition>
      <transition name="swipe">
        <h2 v-if="shown" class="subtitle is-4"> Web Developer</h2>
      </transition>

      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <transition name="fade1"> 
            <slide-button v-if="shown" @click.native="routeTo('projects')" color="yellow"> 
              Projects <i class="fas fa-pencil-alt"></i>
            </slide-button>
          </transition>
        </div>
        <div class="column"> 
          <transition name="fade2"> 
            <slide-button v-if="shown" @click.native="routeTo('about')" color ="purple"> 
              About Me <i class="fas fa-address-card"></i>
            </slide-button>
          </transition>
        </div>
        <div class="column"> </div>
      </div>
      <div class="columns offset-top">
        <div class="column">
          <transition name="fade3"> 
            <slide-button v-if="shown" @click.native="openURL('https://github.com/pip36/')" color="green"> 
              Github <i class="fab fa-github"></i>
            </slide-button>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SlideButton from '@/components/SlideButton'

export default {
  name: 'Home',
  components: {
    'slide-button': SlideButton
  },
  data () {
    return {
      shown: false
    }
  },
  mounted () {
    this.shown = true
  },
  methods: {
    routeTo (path) {
      this.$router.push(path)
    },
    openURL (url) {
      window.open(url, '_blank')
    },
  }
}
</script>

<style scoped>

  .content {
    height: 100%;
    padding-top: 10vh;
  }

  .offset-top {
    margin-top: -2.5em;
  }

  .fade1-enter-active { transition: opacity 1s 1s; }
  .fade1-enter { opacity: 0; }
  .fade2-enter-active { transition: opacity 1s 1.3s; }
  .fade2-enter { opacity: 0; }
  .fade3-enter-active { transition: opacity 1s 1.6s; }
  .fade3-enter { opacity: 0; }

  .drop-enter {
    margin-top: -50vh;
  }
  .drop-enter-active {
    transition: margin-top 0.5s;
  }

  .swipe-enter {
    margin-left: -150vw;
  }
  .swipe-enter-active {
    transition: margin-left 0.5s 0.5s;
  }

  

</style>

<template>
  <button class="slide-button" :class="color"> 
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: 'SlideButton',
  props: ['color'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  button {
    border: none;
    background: none; 
  }

  .yellow:hover {
    color: rgb(36, 69, 255);
  }
  .purple:hover {
    color: rgb(129, 18, 202);
  }
  .green:hover {
    color: rgb(4, 98, 43);
  }
 

  .slide-button {
    color: black;
    background: rgb(0,0,0,0);
    margin-left: auto;
    margin-right:auto;
    width: 120px;
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: cursive;
    font-weight: bold;
    font-size: 1.3em;
  }

.slide-button:after, .slide-button:before {
    content: '';
    position: absolute;
    display: block;
    top: 0; left: 0; 
    width: 0; height: 0; 
    border-color: inherit;
    border: 0px solid;
    
  }

  .slide-button:after {
    transition: width 0.1s linear 0.1s, height 0.1s linear, border 0s linear 0.2s;
  }

  .slide-button:before {
    transition: width 0.1s linear, height 0.1s linear 0.1s, border 0s linear 0.2s; 
  }

  .slide-button:hover:after, .slide-button:hover:before {
    width: inherit;
    height: inherit;
  }

  .slide-button:hover:before {
    transition: width 0.1s linear 0.1s, height 0.1s linear;
    border-bottom: 3px solid;
    border-left: 3px solid;
  }

  .slide-button:hover:after {
    transition: width 0.1s linear, height 0.1s linear 0.1s;
    border-top: 3px solid;
    border-right: 3px solid;
  }

</style>

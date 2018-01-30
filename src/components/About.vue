<template>
  <div class="about">
    <div class="container">
      <div class="content">
        <h1 class="title is-1"> Hello! </h1>
        <p> I am a self taught web developer with a drive to improve my skills. I have gained lots
          of experience over the past year building web applications with a variety of tools. You can
          see some of my projects <router-link to='/projects'> <strong>here!</strong> </router-link>
        </p>
        <p>
          Currently my main interest is in vue.js and node.
        </p>

        <p> I started my web developement by learning ruby, and later ruby on rails. But I have also dabbled in some C# within
          the unity game framework and microsoft XNA game framework, quite a few years back. </p>

        <p> I am currently looking to build a career in web development and am available for employment, so please feel free to get in touch. </p>

        <p> As well as build web applications, I am also a musician! (oboist) I have played with several orchestras in my time and
          am also an active teacher of music. </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .content {
    padding-top: 5vh;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

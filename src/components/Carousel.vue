<template>
  <div class="carousel ">
    
    <div class="project-info">    
      <h4 class="title"> {{currentProject.title}}</h4>
     
      <div class="tech-list"> 
        <tech-icon 
          v-for="(technology, index) in currentProject.technologies"
          :key="index" 
          :name="technology"> </tech-icon>
      </div>

      <p class="description"> {{ currentProject.description }} </p>

      <a
        v-if="currentProject.repoUrl"
        :href="currentProject.repoUrl" 
        target='_blank'> 
          code <i class="far fa-file-code"> </i>     
      </a>

      <a 
        v-if="currentProject.url"
        :href="currentProject.url" 
        target='_blank'> 
          site <i class="fas fa-globe"></i>  
      </a>
    </div>

    <div class="c-container">  
      <div id="carousel">    
        <div
          v-for="(project, index) in projects" 
          :key="project.image"
          @click="openURL(project.url)" 
          :class="{'image': true}">            
        </div>       
      </div>  
    </div>
    <br>
    
    <button @click="shiftPanelsBy(mode.val)" class="button is-info"> 
      <i class="fas fa-angle-double-left"></i>
    </button>
    <button @click="shiftPanelsBy(-mode.val)" class="button is-info"> 
      <i class="fas fa-angle-double-right"></i>
    </button>

    <br><br>
    <div>
      <div v-if="shuffleCounter > 10 && !shuffleMessageDisabled" class="notification is-info">
        <button class="delete" @click="shuffleMessageDisabled = true"></button>
        <p> Enough shuffling... Contact me! <br> email: phil_23@live.co.uk </p>
      </div> 
      <button @click="toggleMode" class="button is-link"> 
        {{mode.name}}
      </button>
      <button @click="shuffle" class="button is-link"> 
        SHUFFLE!
      </button>
    </div>
    <br> <br>

    

 
  </div>
</template>

<script>
import TechIcon from '@/Components/TechIcon'

export default {
  name: 'Carousel',
  components: {
    'tech-icon': TechIcon
  },
  data () {
    return {
      shuffleMessageDisabled: false,
      shuffleCounter: 0,
      mode: { name: 'SLIDE ON', val: 1 },
      minDiameter: 800,
      diameter: 800,
      spin: 0,
      currentProjectIndex: 0,
      projects: [
        {
          image: "./static/ChessPuzzles.PNG", 
          title: 'Chess Puzzles',
          repoUrl: 'https://github.com/pip36/chess-puzzles',
          url: 'https://chess-puzzles-52133.firebaseapp.com',
          description: `A little app for solving chess puzzles. It pulls in puzzle data from a firebase database and 
          displays it on a chess board. I also built the chess move validation module using javascript.`,
          technologies: ['html','css','javascript']
        },
        {
          image: "./static/SamiWebsite.PNG", 
          title: 'Sami\'s oboe website',
          repoUrl: 'https://github.com/pip36/website-sami',
          url: 'http://www.samitaylor.com/',
          description: `A website I built for a performing baroque oboist who also sells instrument cases. I used Ruby on Rails,
          deploying to heroku, and built a custom shop integration with paypal handling payment. It also uses a JQuery image 
          slider I created`,
          technologies: ['html','css','jquery','rails']
        },
        {
          image: "./static/Shape.PNG",
          title: 'Shape Burst',
          url: 'https://play.google.com/store/apps/details?id=com.OB.ShapeBurst',
          description: `I created this android app before I started learning web development seriously. I decided I wanted to release an app on the app
          store within a month, and this was the result. I used the unity game framework, and it is still available should you wish to play it.`,
          technologies: ['android', 'c-sharp']
        },
        {
          image: "./static/Wally.PNG",
          title: 'Where\'s Wally',
          repoUrl: 'https://github.com/pip36/wheres_wally',
          url: 'https://floating-everglades-97160.herokuapp.com/',
          description: `A project I created to learn some AJAX. The images are stored in a rails backend, and the game logic is controlled from 
          frontend javascript. It also has a basic scorekeeping/ leaderboard implementation.`,
          technologies: ['html','css','javascript','rails']
        },
        {
          image: "./static/Quote.PNG",
          title: 'Quote Machine',
          repoUrl: 'https://github.com/pip36/quote-machine',
          url: 'https://quote-machine-18705.firebaseapp.com/',
          description: `Just another quote machine, including a fading background, which I made to get used to some different tools.`,
          technologies: ['html','css','vue']
        },
        {
          image: "./static/Snake.PNG",
          title: 'Snake',
          repoUrl: 'https://github.com/pip36/snake',
          url: 'https://pip36.github.io/snake/',
          description: `One of my first javascript projects. Snake, with a few user controlled variables, like fruit spawn rates and grid size.`,
          technologies: ['html','css','javascript']
        },
        {
          image: "./static/GameOfLife.PNG",
          title: 'Game of Life',
          repoUrl: 'https://github.com/pip36/game_of_life',
          url: 'https://pip36.github.io/game_of_life/',
          description: `Just a little game of life implementation using javascript. I wanted to try out using the html canvas, and
          this seemed like an interesting simple project.`,
          technologies: ['html','javascript']
        },
        {
          image: "./static/CatBook.PNG",
          title: 'Catbook',
          repoUrl: 'https://github.com/pip36/cat-book-app',
          url: 'https://powerful-harbor-87739.herokuapp.com/',
          description: `My first full stack web app, made with ruby on rails and some AJAX. It includes user authentication,
          post creation, comments, likes (paws) and allows image upload onto posts or profile pictures.`,
          technologies: ['html','css','javascript', 'rails']
        },
        {
          image: "./static/Crime.PNG",
          title: 'Crime Map',
          url: 'https://crime-uk.firebaseapp.com/',
          description: `A simple little app for displaying crime data in the uk. Pick a location and month and it will show you 
          the crimes that were commited within a mile radius. I created it to try interacting with the google maps api, as well as pulling
          crime data from data.police.uk`,
           technologies: ['html','javascript']
        },
        {
          image: "./static/Quiz.PNG",
          title: 'Quizzical',
          repoUrl: 'https://github.com/pip36/quiz',
          url: 'https://quizz-e6536.firebaseapp.com/',
          description: `A quiz site I made with firebase/firestore for the database and vue.js on the front. Users who create an acccount can
          create public quizzes using a quiz creator tool. These quizzes can also be edited at a later date. You don't need to sign up to play quizzes
          however, and stats are tracked for each quiz.`,
           technologies: ['html','css','vue']
        },
        {
          image: "./static/Nexo.PNG",
          title: 'Nexocharge Website',
          repoUrl: 'https://github.com/pip36/NexoCharge',
          url: 'https://nexocharge.firebaseapp.com/',
          description: `A simple website redesign created for a friend with contact form and subscribe form.`,
          technologies: ['html','css','vue']
        }
      ]
    }
  },
  computed: {
    imageCount () {
      return this.projects.length
    },
    currentProject () {
      return this.projects[this.currentProjectIndex]
    }
  },
  mounted () {
    this.diameter = Math.max(document.documentElement.clientWidth, this.minDiameter)
    window.addEventListener('resize', this.setDiameter) 
    this.shiftPanelsBy(0) 
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setDiameter)
  },
  methods: {
    toRadians (angle) {
      return angle * (Math.PI / 180);
    },

    setDiameter () {
      this.diameter = Math.max(document.documentElement.clientWidth, this.minDiameter)
      this.shiftPanelsBy(0)
    },

    openURL (url) {
      window.open(url, '_blank')
    },

    toggleMode () {
      if(this.mode.name === 'FLIP ON') {
        this.mode.name = 'SLIDE ON'
        this.mode.val = 1
      }
      else {
        this.mode.name = 'FLIP ON'
        this.mode.val = -this.imageCount + 1
      }
    },

    shuffle () {
      this.shiftPanelsBy(Math.floor((Math.random()-1) * 100))
      this.shuffleCounter++
    },

    incrementProjectIndex(val) {
      let updatedIndex = this.currentProjectIndex += -(val%this.imageCount)
      if(updatedIndex >= this.imageCount) {
        updatedIndex -= this.imageCount
      }
      else if(updatedIndex < 0) {
        updatedIndex += this.imageCount
      }
      this.currentProjectIndex = updatedIndex
    },

    shiftPanelsBy (val) {
      this.spin += val;
      this.incrementProjectIndex(val)
      for (var i = 0; i < this.imageCount; i++){     
        let X = Math.round(Math.cos(this.toRadians(90 - ((i+this.spin)*(360/this.imageCount)))) * this.diameter);
        let Z = Math.round((Math.sin(this.toRadians(90- ((i+this.spin)*(360/this.imageCount)))) * this.diameter) - this.diameter);
        let rot = (i+this.spin) * (360/this.imageCount)
        let carouselElement = document.getElementById('carousel')       
        let image = carouselElement.childNodes[i]
        image.style.transform = `translateX(${X}px) translateZ(${Z}px) rotateY(${rot}deg)`
        image.style.backgroundImage = `url(${this.projects[i].image})`    
      }
    }

  }
}
</script>

<style scoped>

  .carousel {
    margin-top: -40px;
  }

  p {
    font-size: 12px;
  }

  a {
    font-size: 18px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .tech-list {
    margin-top: -10px;
    
  }

  .notification {
    width: 300px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    z-index: 1;
  }

  .project-info { 
    min-height: 40vh;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    margin-top: 8%;
  }

  .c-container {
    width: 100%;
    min-height: 230px;
    margin-top: -30px;
    perspective: 40vh;
  }

  #carousel{
    position: absolute;
   
    width: 300px;
    height: 200px;
    margin-left: -150px; 

    left: 50%;
    bottom: 0;
    transform-style: preserve-3d;
  }

  @media screen and ( min-width: 760px ){ 
    #carousel{
      width: 450px;
      height: 300px;
      margin-left: -225px; 
    }

    .c-container {
      min-height: 300px;
    }

    h4 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and ( min-width: 1520px ){ 
    #carousel{
      width: 700px;
      height: 450px;
      margin-left: -350px; 
    }

    .c-container {
      min-height: 345px;
    }

    h4 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }

  #carousel div{
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .image{
    
    transition: transform 1s;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center; 
    opacity: 0.95;
  }



</style>

webpackJsonp([0],{"5juZ":function(t,e){},"9Q8b":function(t,e){},ASOs:function(t,e){},"F9/W":function(t,e){},GoeM:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-home"})]),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{id:"mail",href:"https://github.com/pip36",target:"_blank"}},[e("span",{staticClass:"is-size-6"},[this._v("phil_23@live.co.uk")]),this._v(" "),e("i",{staticClass:"fab fa-github"})])}]};var n={name:"App",components:{"header-top":a("VU/8")({name:"Header"},s,!1,function(t){a("9Q8b")},"data-v-60da934e",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("header-top"),this._v(" "),e("div",{staticClass:"section has-text-centered gradient"},[e("router-view")],1)],1)},staticRenderFns:[]};var r=a("VU/8")(n,o,!1,function(t){a("F9/W")},null,null).exports,c=a("/ocq"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"slide-button",class:this.color},[this._t("default")],2)},staticRenderFns:[]};var u={name:"Home",components:{"slide-button":a("VU/8")({name:"SlideButton",props:["color"],data:function(){return{}}},l,!1,function(t){a("OgWu")},"data-v-9525eabc",null).exports},data:function(){return{shown:!1}},mounted:function(){this.shown=!0},methods:{routeTo:function(t){this.$router.push(t)},openURL:function(t){window.open(t,"_blank")}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"content"},[a("transition",{attrs:{name:"drop"}},[t.shown?a("h1",{staticClass:"title is-1"},[t._v(" Philip White ")]):t._e()]),t._v(" "),a("transition",{attrs:{name:"swipe"}},[t.shown?a("h2",{staticClass:"subtitle is-4"},[t._v(" Web Developer")]):t._e()]),t._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"}),t._v(" "),a("div",{staticClass:"column"},[a("transition",{attrs:{name:"fade1"}},[t.shown?a("slide-button",{attrs:{color:"yellow"},nativeOn:{click:function(e){t.routeTo("projects")}}},[t._v(" \n            Projects "),a("i",{staticClass:"fas fa-pencil-alt"})]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"column"},[a("transition",{attrs:{name:"fade2"}},[t.shown?a("slide-button",{attrs:{color:"purple"},nativeOn:{click:function(e){t.routeTo("about")}}},[t._v(" \n            About Me "),a("i",{staticClass:"fas fa-address-card"})]):t._e()],1)],1),t._v(" "),a("div",{staticClass:"column"})]),t._v(" "),a("div",{staticClass:"columns offset-top"},[a("div",{staticClass:"column"},[a("transition",{attrs:{name:"fade3"}},[t.shown?a("slide-button",{attrs:{color:"green"},nativeOn:{click:function(e){t.openURL("https://github.com/pip36/")}}},[t._v(" \n            Github "),a("i",{staticClass:"fab fa-github"})]):t._e()],1)],1)])],1)])},staticRenderFns:[]};var d=a("VU/8")(u,h,!1,function(t){a("GoeM")},"data-v-b3e844a0",null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"title is-1"},[t._v(" Hello! ")]),t._v(" "),a("p",[t._v(" I am a self taught web developer with a drive to improve my skills. I have gained lots\n        of experience over the past year building web applications with a variety of tools. You can\n        see some of my projects "),a("router-link",{attrs:{to:"/projects"}},[a("strong",[t._v("here!")])])],1),t._v(" "),a("p",[t._v("\n        Currently my main interest is in vue.js and node.\n      ")]),t._v(" "),a("p",[t._v(" I started my web developement by learning ruby, and later ruby on rails. But I have also dabbled in some C# within\n        the unity game framework and microsoft XNA game framework, quite a few years back. ")]),t._v(" "),a("p",[t._v(" I am currently looking to build a career in web development and am available for employment, so please feel free to get in touch. ")]),t._v(" "),a("p",[t._v(" As well as build web applications, I am also a musician! (oboist) I have played with several orchestras in my time and\n        am also an active teacher of music. ")])])])])},staticRenderFns:[]};var m=a("VU/8")({name:"About",data:function(){return{}}},p,!1,function(t){a("ASOs")},"data-v-4cbba860",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"tech-icon tag",class:this.name},[this._v("\n  "+this._s(this.name)+" "),e("i",{class:this.faviconClass})])},staticRenderFns:[]};var v={name:"Carousel",components:{"tech-icon":a("VU/8")({name:"TechIcon",props:["name"],data:function(){return{icons:{html:{favicon:"fab fa-html5"},css:{favicon:"fab fa-css3-alt"},javascript:{favicon:"fab fa-js-square"},rails:{favicon:"far fa-gem"},vue:{favicon:"fab fa-vuejs"},android:{favicon:"fab fa-android"},"c-sharp":{favicon:"fas fa-hashtag"},jquery:{favicon:"fab fa-js-square"}}}},computed:{faviconClass:function(){return this.icons[this.name]?this.icons[this.name].favicon:"fas fa-exclamation-triangle"}}},f,!1,function(t){a("qx6l")},"data-v-7b576d9c",null).exports},data:function(){return{shuffleMessageDisabled:!1,shuffleCounter:0,mode:{name:"SLIDE ON",val:1},minDiameter:800,diameter:800,spin:0,currentProjectIndex:0,projects:[{image:"static/ChessPuzzles.PNG",title:"Chess Puzzles",repoUrl:"https://github.com/pip36/chess-puzzles",url:"https://chess-puzzles-52133.firebaseapp.com",description:"A little app for solving chess puzzles. It pulls in puzzle data from a firebase database and \n          displays it on a chess board. I also built the chess move validation module using javascript.",technologies:["html","css","javascript"]},{image:"static/SamiWebsite.PNG",title:"Sami's oboe website",repoUrl:"https://github.com/pip36/website-sami",url:"http://www.samitaylor.com/",description:"A website I built for a performing baroque oboist who also sells instrument cases. I used Ruby on Rails,\n          deploying to heroku, and built a custom shop integration with paypal handling payment. It also uses a JQuery image \n          slider I created",technologies:["html","css","jquery","rails"]},{image:"static/Shape.PNG",title:"Shape Burst",url:"https://play.google.com/store/apps/details?id=com.OB.ShapeBurst",description:"I created this android app before I started learning web development seriously. I decided I wanted to release an app on the app\n          store within a month, and this was the result. I used the unity game framework, and it is still available should you wish to play it.",technologies:["android","c-sharp"]},{image:"static/Wally.PNG",title:"Where's Wally",repoUrl:"https://github.com/pip36/wheres_wally",url:"https://floating-everglades-97160.herokuapp.com/",description:"A project I created to learn some AJAX. The images are stored in a rails backend, and the game logic is controlled from \n          frontend javascript. It also has a basic scorekeeping/ leaderboard implementation.",technologies:["html","css","javascript","rails"]},{image:"static/Quote.PNG",title:"Quote Machine",repoUrl:"https://github.com/pip36/quote-machine",url:"https://quote-machine-18705.firebaseapp.com/",description:"Just another quote machine, including a fading background, which I made to get used to some different tools.",technologies:["html","css","vue"]},{image:"static/Snake.PNG",title:"Snake",repoUrl:"https://github.com/pip36/snake",url:"https://pip36.github.io/snake/",description:"One of my first javascript projects. Snake, with a few user controlled variables, like fruit spawn rates and grid size.",technologies:["html","css","javascript"]},{image:"static/GameOfLife.PNG",title:"Game of Life",repoUrl:"https://github.com/pip36/game_of_life",url:"https://pip36.github.io/game_of_life/",description:"Just a little game of life implementation using javascript. I wanted to try out using the html canvas, and\n          this seemed like an interesting simple project.",technologies:["html","javascript"]},{image:"static/CatBook.PNG",title:"Catbook",repoUrl:"https://github.com/pip36/cat-book-app",url:"https://powerful-harbor-87739.herokuapp.com/",description:"My first full stack web app, made with ruby on rails and some AJAX. It includes user authentication,\n          post creation, comments, likes (paws) and allows image upload onto posts or profile pictures.",technologies:["html","css","javascript","rails"]},{image:"static/Crime.PNG",title:"Crime Map",url:"https://crime-uk.firebaseapp.com/",description:"A simple little app for displaying crime data in the uk. Pick a location and month and it will show you \n          the crimes that were commited within a mile radius. I created it to try interacting with the google maps api, as well as pulling\n          crime data from data.police.uk",technologies:["html","javascript"]},{image:"static/Quiz.PNG",title:"Quizzical",repoUrl:"https://github.com/pip36/quiz",url:"https://quizz-e6536.firebaseapp.com/",description:"A quiz site I made with firebase/firestore for the database and vue.js on the front. Users who create an acccount can\n          create public quizzes using a quiz creator tool. These quizzes can also be edited at a later date. You don't need to sign up to play quizzes\n          however, and stats are tracked for each quiz.",technologies:["html","css","vue"]},{image:"static/Nexo.PNG",title:"Nexocharge Website",repoUrl:"https://github.com/pip36/NexoCharge",url:"https://nexocharge.firebaseapp.com/",description:"A simple website redesign created for a friend with contact form and subscribe form.",technologies:["html","css","vue"]}]}},computed:{imageCount:function(){return this.projects.length},currentProject:function(){return this.projects[this.currentProjectIndex]}},mounted:function(){this.diameter=Math.max(document.documentElement.clientWidth,this.minDiameter),window.addEventListener("resize",this.setDiameter),this.shiftPanelsBy(0)},beforeDestroy:function(){window.removeEventListener("resize",this.setDiameter)},methods:{toRadians:function(t){return t*(Math.PI/180)},setDiameter:function(){this.diameter=Math.max(document.documentElement.clientWidth,this.minDiameter),this.shiftPanelsBy(0)},openURL:function(t){window.open(t,"_blank")},toggleMode:function(){"FLIP ON"===this.mode.name?(this.mode.name="SLIDE ON",this.mode.val=1):(this.mode.name="FLIP ON",this.mode.val=1-this.imageCount)},shuffle:function(){this.shiftPanelsBy(Math.floor(100*(Math.random()-1))),this.shuffleCounter++},incrementProjectIndex:function(t){var e=this.currentProjectIndex+=-t%this.imageCount;e>=this.imageCount?e-=this.imageCount:e<0&&(e+=this.imageCount),this.currentProjectIndex=e},shiftPanelsBy:function(t){this.spin+=t,this.incrementProjectIndex(t);for(var e=0;e<this.imageCount;e++){var a=Math.round(Math.cos(this.toRadians(90-(e+this.spin)*(360/this.imageCount)))*this.diameter),i=Math.round(Math.sin(this.toRadians(90-(e+this.spin)*(360/this.imageCount)))*this.diameter-this.diameter),s=(e+this.spin)*(360/this.imageCount),n=document.getElementById("carousel").childNodes[e];n.style.transform="translateX("+a+"px) translateZ("+i+"px) rotateY("+s+"deg)",n.style.backgroundImage="url("+this.projects[e].image+")"}}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"carousel "},[a("div",{staticClass:"project-info"},[a("h4",{staticClass:"title"},[t._v(" "+t._s(t.currentProject.title))]),t._v(" "),a("div",{staticClass:"tech-list"},t._l(t.currentProject.technologies,function(t,e){return a("tech-icon",{key:e,attrs:{name:t}})})),t._v(" "),a("p",{staticClass:"description"},[t._v(" "+t._s(t.currentProject.description)+" ")]),t._v(" "),t.currentProject.repoUrl?a("a",{attrs:{href:t.currentProject.repoUrl,target:"_blank"}},[t._v(" \n        code "),a("i",{staticClass:"far fa-file-code"})]):t._e(),t._v(" "),t.currentProject.url?a("a",{attrs:{href:t.currentProject.url,target:"_blank"}},[t._v(" \n        site "),a("i",{staticClass:"fas fa-globe"})]):t._e()]),t._v(" "),a("div",{staticClass:"c-container"},[a("div",{attrs:{id:"carousel"}},t._l(t.projects,function(e,i){return a("div",{key:e.image,class:{image:!0},on:{click:function(a){t.openURL(e.url)}}})}))]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"button is-info",on:{click:function(e){t.shiftPanelsBy(t.mode.val)}}},[a("i",{staticClass:"fas fa-angle-double-left"})]),t._v(" "),a("button",{staticClass:"button is-info",on:{click:function(e){t.shiftPanelsBy(-t.mode.val)}}},[a("i",{staticClass:"fas fa-angle-double-right"})]),t._v(" "),a("br"),a("br"),t._v(" "),a("div",[t.shuffleCounter>10&&!t.shuffleMessageDisabled?a("div",{staticClass:"notification is-info"},[a("button",{staticClass:"delete",on:{click:function(e){t.shuffleMessageDisabled=!0}}}),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("button",{staticClass:"button is-link",on:{click:t.toggleMode}},[t._v(" \n      "+t._s(t.mode.name)+"\n    ")]),t._v(" "),a("button",{staticClass:"button is-link",on:{click:t.shuffle}},[t._v(" \n      SHUFFLE!\n    ")])]),t._v(" "),a("br"),t._v(" "),a("br")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(" Enough shuffling... Contact me! "),e("br"),this._v(" email: phil_23@live.co.uk ")])}]};var g={name:"Projects",components:{carousel:a("VU/8")(v,b,!1,function(t){a("5juZ")},"data-v-be58748c",null).exports},data:function(){return{}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"projects"},[e("div",{staticClass:"content"},[e("carousel")],1)])},staticRenderFns:[]};var w=a("VU/8")(g,_,!1,function(t){a("qdtg")},"data-v-11223eef",null).exports;i.a.use(c.a);var C=new c.a({mode:"history",routes:[{path:"/",name:"Home",component:d},{path:"/about",name:"About",component:m},{path:"/projects",name:"Projects",component:w}]}),y=a("ZA4m"),k=a.n(y);i.a.config.productionTip=!1,i.a.use(k.a),new i.a({el:"#app",router:C,components:{App:r},template:"<App/>"})},OgWu:function(t,e){},ZA4m:function(t,e){},qdtg:function(t,e){},qx6l:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.09ae90a7300ce5f7cd14.js.map
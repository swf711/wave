<template lang="pug">
  #app
    header
      router-link.brand(to="/") brian shao
      nav
        router-link(to="/about" @mouseover.native="mouseover('about')" @mouseleave.native="mouseover('none')") about
        router-link(to="/works" @mouseover.native="mouseover('works')" @mouseleave.native="mouseover('none')") works
        router-link(to="/contact" @mouseover.native="mouseover('contact')" @mouseleave.native="mouseover('none')") contact
    main.container
      router-view(:nav-hover="navHover")
    footer
      .mode-toggle
        input#switch(type="checkbox" name="mode" @change="check")
        label.toggle-button(for="switch")
          font-awesome-icon(icon="moon")
          font-awesome-icon(icon="sun")
      .copyright
        span ©2020
        span brian shao
    wave-cursor
</template>

<script>
  import './assets/css/app.sass'
  import waveCursor from './components/wave-cursor.vue'

  export default{
    components: {
      'wave-cursor': waveCursor
    },
    data(){
      return {
        theme: 'light',
        navHover: 'none'
      }
    },
    methods: {
      mouseover: function(target){
        this.navHover = target
      },
      check: function(){
        if(this.theme === 'light'){
          document.documentElement.setAttribute('data-theme', 'dark');
          this.theme = 'dark';
        }else{
          document.documentElement.setAttribute('data-theme', 'light');
          this.theme = 'light';
        }
      },
      // trans: function(){
      //   document.documentElement.classList.add('transition');
      //   window.setTimeout(function(){
      //     document.documentElement.classList.remove('transition');
      //   }, 1000)
      // }
    }
  }
</script>
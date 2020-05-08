<template lang="pug">
  #app
    header
      router-link.brand(to="/") brian shao
      nav
        router-link(to="/about") about
        router-link(to="/works") works
        router-link(to="/contact") contact
    main.container
      router-view
    footer
      .mode-toggle
        input#switch(type="checkbox" name="mode")
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
    }
  }

  window.onload = function(){

    document.querySelector('input[name=mode]').addEventListener('change', function(){
      if(this.checked){
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })

    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000)
    }

  }
</script>
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
      .mode-select
        .select-button
      .copyright
        span ©2020
        span brian shao
    #cursorC
    #cursorP
</template>

<script>
  import './assets/css/app.sass'

  export default{}

  let xPosition = 0, yPosition = 0;
  document.addEventListener('mousemove', function(e){
    xPosition = e.clientX;
    yPosition = e.clientY;

    updateCursorPos();
  })

  function updateCursorPos(){
    document.getElementById('cursorC').style.cssText = `top: ${yPosition}px; left: ${xPosition}px;`;
    document.getElementById('cursorP').style.cssText = `top: ${yPosition}px; left: ${xPosition}px;`;
  }
</script>
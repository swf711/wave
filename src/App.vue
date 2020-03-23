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
    .cursorC
    .cursorP
</template>

<script>
  import './assets/css/app.sass'

  export default{}

  let timeout;
  document.addEventListener('mousemove',({x,y}) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() => {
      [].forEach.call(document.querySelectorAll(".cursorC,.cursorP"), (item) => {
        item.style.transform = `translate(${x}px, ${y}px)`;
      });
    })
  })
</script>
<template lang="pug">
  #app
    #nav
      router-link(to="/") Home
      | |
      router-link(to="/about") About
    router-view
    .card(style="width: 18rem;")
      .card-body
        h5.card-title Card title
        p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
        a.btn.btn-primary(href="#") Go somewhere
</template>

<style lang="sass">

@import "~bootstrap/scss/bootstrap"

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
      
</style>

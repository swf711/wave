<template lang="pug">
  div(:class="[{cursor_hover: hover}, {cursor_hide: hideCursor}]")
    .cursor-circle(:style="cursorPosition")
    .cursor-point(:style="cursorPosition")
</template>

<script>

export default {
  name: 'wave-cursor',
  data(){
    return {
      x: 0,
      y: 0,
      hover: false,
      hideCursor: true
    }
  },
  mounted(){
    document.addEventListener('mousemove', this.moveCursor);

    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
    document.addEventListener('mouseenter', e => {
      this.hideCursor = false;
    });

    const hoverTargets = document.querySelectorAll('#app a, #app label');
    for (let target of hoverTargets) {
      target.addEventListener('mouseover', function(){
        this.hover = true;
        console.log(this.hover);
      });
      target.addEventListener('mouseout', function(){
        this.hover = false;
        console.log(this.hover);
      });
    }
  },
  computed: {
    cursorPosition(){
      return `transform: translate(${this.x}px, ${this.y}px);`
    }
  },
  methods: {
    moveCursor(e){
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
}
</script>

<!-- wTargets[1].addEventListener('mouseover', function(){
  if(document.querySelector('.home')){
    document.querySelector('.about-pre').classList.add('show');
  }
})
wTargets[1].addEventListener('mouseout', function(){
  if(document.querySelector('.home')){
    document.querySelector('.about-pre').classList.remove('show');
  }
}) -->
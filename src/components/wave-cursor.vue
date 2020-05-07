<template lang="pug">
  div(:class="['cursor', {'cursor_hover': hover}, {'cursor_hide': hideCursor}]")
    .cursor-circle(:style="cursorPosition")
    .cursor-point(:style="cursorPosition")
</template>

<script>
export default {
  name: 'wave-cursor',
  props: [hoverTargets],
  data(){
    return {
      x: 0,
      y: 0,
      hover: false,
      hideCursor: true
      targets: {{hoverTargets}}
    }
  },
  mounted(){
    document.addEventListener('mousemove', this.moveCursor);
    document.addEventListener('mouseleave', e => {
      this.hideCursor = true;
    });
  },
  computed: {
    cursorPosition(){
      return `transform: translate(${this.x}px, ${this.y}px);`
    },
    cursorHover(){
      for (const target of hoverTargets) {
        wTarget.addEventListener('mouseover', function(){
          document.querySelector('.cursorC').classList.add('hover');
        })

        wTarget.addEventListener('mouseout', function(){
          document.querySelector('.cursorC').classList.remove('hover');
        })
      }
    }
  },
  methods: {
    moveCursor(e){
      this.x = e.clientX;
      this.y = e.clientY;
    }
  },
}
</script>
<!-- const wTargets = document.querySelectorAll('#app a, #app label')
for (const wTarget of wTargets) {
  wTarget.addEventListener('mouseover', function(){
    document.querySelector('.cursorC').classList.add('hover');
  })

  wTarget.addEventListener('mouseout', function(){
    document.querySelector('.cursorC').classList.remove('hover');
  })
}

wTargets[1].addEventListener('mouseover', function(){
  if(document.querySelector('.home')){
    document.querySelector('.about-pre').classList.add('show');
  }
})
wTargets[1].addEventListener('mouseout', function(){
  if(document.querySelector('.home')){
    document.querySelector('.about-pre').classList.remove('show');
  }
}) -->
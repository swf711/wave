<template lang="pug">
  div(:class="{cursor_hover: hover}")
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
      hover: false
    }
  },
  mounted(){
    document.addEventListener('mousemove', this.moveCursor);
    
    const vm = this;

    /*hold cursor*/
    document.addEventListener('mousedown', function(){
      vm.hover = true;
    });
    document.addEventListener('mouseup', function(){
      vm.hover = false;
    });

    /*hover on link*/
    var hoverTargets = document.querySelectorAll('#app a, #app label');
    for (let target of hoverTargets) {
      target.addEventListener('mouseover', function(){
        vm.hover = true;
      });
      target.addEventListener('mouseout', function(){
        vm.hover = false;
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
  },
  watch:{
    $route (to, from){
      const vm = this;
      var hoverTargets = document.querySelectorAll('#app a, #app label');
      for (let target of hoverTargets) {
        target.addEventListener('mouseover', function(){
          vm.hover = true;
        });
        target.addEventListener('mouseout', function(){
          vm.hover = false;
        });
      }
    }
  }
}
</script>
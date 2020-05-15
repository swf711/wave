<template lang="pug">
	section.home
		.visual-logo
			.wave.-one
			.wave.-two
			.wave.-three
		.title Wave
		p Portfolio of<br>a Web Developer with 
			span Renaissance Soul. {{navHover}}
		img.about-pre(:class="{show: navHover === 'about'}" src="../assets/images/profile-image-border.png")
		img.about-pre(:class="{show: navHover === 'works'}" src="../assets/images/profile-image-border.png")
		img.about-pre(:class="{show: navHover === 'contact'}" src="../assets/images/profile-image-border.png")
</template>

<script>
	const range = 100;
	let timeout;
	const calcValue = (a, b) => (a/b*range-range/2).toFixed(1);

	document.addEventListener('mousemove',({x,y}) => {
	  if (timeout) {
	    window.cancelAnimationFrame(timeout);
	  }
	  timeout = window.requestAnimationFrame(() => {
	    const xValue = calcValue(x,window.innerWidth);
	    const yValue = calcValue(y,window.innerHeight);
	    if(document.querySelector('.visual-logo')){
	    	document.querySelector('.visual-logo').style.transform = `translate(${-xValue*.45}px,${-yValue*.45}px)`;
	  	}
	  })
	})

	export default {
		props: ['navHover'],
	  data(){
	    return {
	    	active: false,
	      pre: this.navHover
	    }
	  }
	}
</script>

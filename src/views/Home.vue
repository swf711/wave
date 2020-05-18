<template lang="pug">
	section.home
		.visual-logo
			.wave.-one
			.wave.-two
			.wave.-three
		.title Wave
		p Portfolio of<br>a Web Developer with 
			span Renaissance Soul.
		img.pre-img.about-img(:class="{show: navHover === 'about'}" src="../assets/images/profile-image-border.png")
		img.pre-img.works-img(:class="{show: navHover === 'works'}" src="../assets/images/pre_img_works.png")
		img.pre-img.contact-img(:class="{show: navHover === 'contact'}" src="../assets/images/pre_img_contact.png")
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

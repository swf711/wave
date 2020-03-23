<template lang="pug">
	section.home
		.visual-logo
			.wave.-one
			.wave.-two
			.wave.-three
		.title Wave
		p Portfolio of<br>a Web Developer with 
			span Renaissance Soul.
</template>

<script>
	const range = 80;
	let timeout;
	const calcValue = (a, b) => (a/b*range-range/2).toFixed(1);

	document.addEventListener('mousemove',({x,y}) => {
	  if (timeout) {
	    window.cancelAnimationFrame(timeout);
	  }
	  timeout = window.requestAnimationFrame(() => {
	    const xValue = calcValue(x,window.innerWidth);
	    const yValue = calcValue(y,window.innerHeight);
	    document.querySelector('.visual-logo').style.transform = `translate(${-xValue*.45}px,${-yValue*.45}px)`;
	  })
	})
</script>

<template lang="pug">
	section.contact
		.content
			h1 LET'S GET IN TOUCH !!!
			h3 Thank you for visiting this site.<br>I’m based in Taiwan but always open to the world.<br>Feel free to contact me for an offer,<br>to have some tech discussion or just for some advice.
			.profile
				p Brian Shao
				p Taipei, Taiwan
				p 1994.07.11
				p brian830711@gmail.com
			.community
				a(href="https://www.facebook.com/wave.shao" target="_blank") Facebook
				a(href="https://www.instagram.com/swf711/" target="_blank") Instagram
				a(href="https://codepen.io/swf711" target="_blank") CodePen
		#particles
</template>

<script>
	import particles from 'particles.js'

	export default {
	  mounted(){
	  	particlesJS('particles',{
			  "particles": {
			    "number": {
			      "value": 20,
			      "density": {
			        "enable": true,
			        "value_area": 900
			      }
			    },
			    "shape": {
			      "type": "image",
			      "image": {
			        "src": "https://res.cloudinary.com/swf711/image/upload/v1590909709/mail2_mkybfx.png",
			        "width": 100,
			        "height": 60
			      }
			    },
			    "size": {
			      "value": 30,
			      "random": true,
			    },
			    "line_linked": {
			      "enable": false,
			    },
			    "move": {
			      "enable": true,
			      "speed": 60,
			      "direction": "none",
			      "random": false,
			      "straight": false,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
			        "enable": false
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "canvas",
			    "events": {
			      "onhover": {
			        "enable": true,
			        "mode": "bubble"
			      },
			      "onclick": {
			        "enable": false,
			      },
			      "resize": true
			    },
			    "modes": {
			      "bubble": {
			        "distance": 300,
			        "size": 40
			      }
			    }
			  },
			  "retina_detect": true
			});
	  }
	}
</script>
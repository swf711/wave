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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
	section.about
		img.about-img(src="../assets/images/profile-image.jpg")
		img.about-img-bd(src="../assets/images/profile-image-border.png")
		//- HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>
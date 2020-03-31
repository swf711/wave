<template lang="pug">
	section.about
		img.about-img(src="../assets/images/profile-image.jpg")
		img.about-img-bd(src="../assets/images/profile-image-border.png")
		.content
			h1 Hi I’m 
				span Brian Shao 
				| !
			h3 A web designer based in Taipei, Taiwan.<br>
				| Focused on digital interactive experiences.<br>
				| Love web & effect designing,<br>
				| always trying to make <br>
				| intresting interactive web page.
			.title EXPERIENCE
			p 資訊管理系畢業<br>
				| BACHELOR IN INFORMATION MANAGEMENT
				.sm-gray 2012 - 2016｜Fu Jen Catholic Unuversity
			p 網路行銷企劃<br>
				| INTERNET MARKETING PERSONNEL
				.sm-gray 2016 - 2017｜你最大行銷公司
			p 網頁設計師<br>
				| WEB DESIGNER
				.sm-gray 2017 - 2020｜佳音英語總公司
			.title SKILLS
			p [Photoshop, Illustrator, HTML 5, CSS, JavaScript, Jquery, PHP, Pug / Sass, Web Design, Visual Design, ]

		//- HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'About',
  // components: {
  //   HelloWorld
  // }
}
</script>
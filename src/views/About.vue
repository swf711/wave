<template lang="pug">
	section.about
		img.about-img(src="../assets/images/profile-image.jpg")
		img.about-img-bd(src="../assets/images/profile-image-border.png")
		.content
			.lg-title ABOUT
			
			.intro
				h1 Hi I’m 
					span Brian Shao 
					| !
				h3 A web designer based in Taipei, Taiwan.<br>
					| Focused on digital interactive experiences.<br>
					| Love web & effect designing,<br>
					| always trying to make <br>
					| intresting interactive web page.

			.experience
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

			.skills
				.title SKILLS
				.row
					.col-sm-6.col-12
						p HTML5/CSS4/JS<br>Vue.js<br>jQuery<br>Node.js<br>Bootstrap/Material Design<br>Webpack<br>Pug/SASS<br>npm
					.col-sm-6.col-12
						p RWD<br>GIT<br>PHP<br>Photoshop<br>Illustrator<br>UX/UI
							.future Continuously expanding...

</template>

<script>
		// document.querySelector('.future').innerHTML = document.querySelector('.future').textContent.replace(/\S/g, "<span>$&</span>");
</script>
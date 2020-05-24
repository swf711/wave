<template lang="pug">
	section.works(@mousewheel="wheelScroll")
		.pages
			.bn(:class="{active: page === 0}")
				.bn_top
					.bn_img
					h1.title
						span Explore<br class="hidden-xs"> Kyushu
				.bn_bottom
					p Kyushu is the third largest island of Japan and most southwesterly of its four main islands. The island is mountainous, and Japan's most active volcano. The historical regional name Saikaidō referred to its surrounding islands.
			.bn(:class="{active: page === 1}")
				.bn_top
					.bn_img
					h1.title
						span Explore<br class="hidden-xs"> Denmark
				.bn_bottom
					p Denmark, officially the Kingdom of Denmark, is a sovereign state in Europe. Denmark is a Nordic country and the southernmost of the Scandinavian nations, it is south-west of Sweden and south of Norway.
			.bn(:class="{active: page === 2}")
				.bn_top
					.bn_img
					h1.title
						span Explore<br class="hidden-xs"> Xi'an
				.bn_bottom
					p Xi'an is the capital of Shaanxi Province, China. A sub-provincial city on the Guanzhong Plain in northwestern China, it is one of the oldest cities in China, and the oldest of the Four Great Ancient Capitals.
		.mouse.hidden-xs
			.wheel

</template>

<script>
	import lodash from 'lodash';
	// import Hammer from 'hammer';
	export default {
	  data(){
	    return {
	    	page: 0,
	    	maxPage: 0
	    }
	  },
	  mounted(){
	  	this.maxPage = document.querySelectorAll('.bn').length;

	  	/* hammer.js */
			// var myElement = document.querySelector('.works');
			// var mc = new Hammer(myElement);

			// mc.on("swipeleft swiperight", function(e) {
			//   if(e.type = "swipeleft"){
			//     previousBn();
			//   }else if(e.type = "swiperight"){
			//     nextBn();
			//   }
			// });
	  },
	  methods: {
	  	wheelScroll: lodash.debounce(function(e){
		    if(e.deltaY < 0) {
		      if(this.page > 0){
		      	this.page--;
		      }else{
		      	this.page = this.maxPage - 1;
		      }
		    } else if(e.deltaY > 0) {
		      if(this.page < this.maxPage - 1){
		      	this.page++;
		      }else{
		      	this.page = 0;
		      }
		    }
			}, 150)
	  }
	}
</script>
<template lang="pug">
	section.works(@mousewheel="wheelScroll")
		.pages
			.bn(:class="{active: page === 0}")
				.bn_top
					.bn_img
						.mouse
							.wheel
					h1.title
						a(href="http://mag.joy.com.tw/" target="_blank")
							span Explore<br class="hidden-xs"> Kyushu
				.bn_bottom
					p Kyushu is the third largest island of Japan and most southwesterly of its four main islands. The island is mountainous, and Japan's most active volcano. The historical regional name Saikaidō referred to its surrounding islands.
			.bn(:class="{active: page === 1}")
				.bn_top
					.bn_img
						.mouse
							.wheel
					h1.title
						span JOY TO THE <br class="hidden-xs"> WORLD
				.bn_bottom
					p 佳音英語世界雜誌官網 - 負責網站前端設計及製作<br>Official site for Joy Magazine - Web designing & Front-end develop<br>#Bootstrap #Jquery #Skollr #OwlCarousel #Fancybox #ImageMapResize
			.bn(:class="{active: page === 2}")
				.bn_top
					.bn_img
						.mouse
							.wheel
					h1.title
						span Explore<br class="hidden-xs"> Xi'an
				.bn_bottom
					p Xi'an is the capital of Shaanxi Province, China. A sub-provincial city on the Guanzhong Plain in northwestern China, it is one of the oldest cities in China, and the oldest of the Four Great Ancient Capitals.
			.pagination
				span 0{{page + 1}}
				span |
				span 0{{maxPage}}

</template>

<script>
	import lodash from 'lodash';
	import Hammer from 'hammerjs';
	export default {
	  data(){
	    return {
	    	page: 0,
	    	maxPage: 0
	    }
	  },
	  mounted(){
	  	var vm = this;
	  	this.maxPage = document.querySelectorAll('.bn').length;

	  	/* hammer.js */
			var myElement = document.querySelector('.works');
			var mc = new Hammer(myElement);

			mc.get('swipe').set({
			  direction: Hammer.DIRECTION_ALL
			});

			mc.on("swipe", function(e) {
			  if(e.type = "swipeleft" || "swipeup"){
		      if(vm.page > 0){
		      	vm.page--;
		      }else{
		      	vm.page = vm.maxPage - 1;
		      }
			  }else if(e.type = "swiperight" || "swipedown"){
		      if(vm.page < vm.maxPage - 1){
		      	vm.page++;
		      }else{
		      	vm.page = 0;
		      }
			  }
			});
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
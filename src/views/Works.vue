<template lang="pug">
	section.works(@mousewheel="wheelScroll")
		.pages
			.bn(:class="{active: page === 0}")
				.bn_top
					.bn_img
						.mouse
							.wheel
					h1.title
						span Explore<br class="hidden-xs"> Kyushu
				.bn_bottom
					p 電商作品範例 - 負責網站設計及製作<br>Joy Magazine official site - Web designing & Front-end develop<br>#Vue.js #Bootstrap
			.bn(:class="{active: page === 1}")
				.bn_top
					.bn_img
						video.hidden-xs(src="../assets/images/works_joymag.mp4" loop)
						.mouse
							.wheel
					h1.title(@mouseover="videoStart" @mouseleave="videoPaused")
						a(href="http://mag.joy.com.tw/" target="_blank")
							span JOY TO THE <br class="hidden-xs"> WORLD
				.bn_bottom
					p 佳音英語世界雜誌官網 - 負責網站前端設計及製作<br>Joy Magazine official site - Web designing & Front-end develop<br>#Bootstrap #Jquery #Skrollr #OwlCarousel #Fancybox #ImageMapResize
			.bn(:class="{active: page === 2}")
				.bn_top
					.bn_img
						video.hidden-xs(src="../assets/images/works_joydrama.mp4" loop)
						.mouse
							.wheel
					h1.title(@mouseover="videoStart" @mouseleave="videoPaused")
						a(href="http://drama.joy.com.tw/" target="_blank")
							span Joy English<br class="hidden-xs"> Drama Club
				.bn_bottom
					p 佳音英語劇團官網 - 負責網站前端設計及製作<br>Joy English Drama Club official site - Web designing & Front-end develop<br>#GSAP #TweenMax #Bootstrap #Jquery #OwlCarousel #Fancybox #MagnificPopup
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
			}, 150),
			videoStart(){
	  		var video = document.querySelector('.active video');
	  		video.play();
	  	},
	  	videoPaused(){
	  		var video = document.querySelector('.active video');
	  		video.currentTime = 0;
	  		video.pause();
	  	}
	  }
	}
</script>
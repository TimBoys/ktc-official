<template>
	<div class="swiperWork">
		
		
<div class="swiper-container swiper-container-horizontal">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in cscItem">
      	<img class="carouselImg" :src="item"/>
      	<!--<x-img class="carouselImg" v-lazy="item" /></x-img>-->
      </div>

    </div>
    <!-- Add Arrows -->
	</div>
	<div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
	<div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"></div>
  	
	</div>
</template>

<script>
	import { XImg } from 'vux';
	import VueDB from '../util/vue-db/vue-db-long.js'
	import Swiper from '../../static/swiper/swiper-4.3.5.min';

	var DB = new VueDB();

	export default {
		name: 'test',
		data() {
			return {
			}
		},
		props:{
			cscItem:Array,
			default:function(){
				return [];
			}
		},
		computed: {
		},
		mounted: function() {
			console.log(this.cscItem)
		    var swiper = new Swiper('.swiper-container', {
		      slidesPerView: 6,
		      spaceBetween:30,
			  breakpoints: { 
			    //当宽度小于等于750
			    1400: {
			      slidesPerView: 5,
			       spaceBetween:15,
			    },			    
			    1100: {
			      slidesPerView: 4,
			       spaceBetween:15,
			    },
			    750: {
			      slidesPerView: 3,
			       spaceBetween:15,
			    }
			  },		      
//		      height:80,
		      roundLengths : true, 
		      loop:true,
		      loopAdditionalSlides : 1,
		      autoplay:true,
		      speed:100,
		      delay:100,
		      grabCursor:true, //光标手
		      pagination: {
		        el: '.swiper-pagination',
		        type: 'fraction',
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });
		},
		components:{
			Swiper,
			XImg
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
@import "../../static/swiper/swiper-4.3.5.min.css";
	.swiperWork{
		width: 100%;
		position: relative;
	}
    .swiper-container {
      width:82%;
      height: 3rem;
    }
    .swiper-wrapper{
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: transparent;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .carouselImg{
      	 height: 2.2rem;
      }
    }
	.swiper-button-prev{
		outline: none;
		position: absolute;
		left: 2%;
	}
	.swiper-button-next{
		outline: none;
		position: absolute;
		right: 2%;		
	}
</style>
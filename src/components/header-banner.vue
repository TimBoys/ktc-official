<template>
	<div class="bannerCont" v-bind:style="{backgroundImage:'url(' + cont.bannerUrl + ')'}">
		<div  class="bannerTitleCont">
		 <div class="bannerTitle" :class="{'bannerTitleActive' : isActive}">
		 	{{cont.bannerTitle}}
		 </div>
		</div>
	
	</div>
	
</template>

<script>
	export default{
		name:"header-banner",
		data(){
			return {
				isActive:false
			}
		},
		props:{
			cont:Object,
			default:function(){
				return {}
			}
		},
		mounted:function(){
			console.log(this.cont)
			console.log(this.isActive)
			setTimeout(()=>{
				this.isActive = true;
			},200)
			
		},
		methods:{
			
			
			
		}
		
		
	}
	
</script>

<style scoped="scoped" type="text/scss" lang="scss">
@import "../assets/scss/util";

.bannerCont{
	height: 2.2rem;
	width:100%;
	/*background-image: url("http://www.itwaibaow.com/uploadfile/2016/0518/20160518085631527.jpg");*/
	background-repeat:no-repeat ;
	background-size:100% 100% ;
	display:flex;
	justify-content:center;
	align-items:center;
	.bannerTitleCont{
		overflow: hidden;
	.bannerTitle{
		height: .7rem;
		line-height: .7rem;
		width:2rem;
		background-color:rgba(33,33,33,0.4);
		color:#FFF;
		text-align:center;
		transition: 0.5s ;
		transform: translateY(0.7rem)
	}
	.bannerTitleActive{
		transform: translateY(0rem)
	}
	}
	
	
}
</style>
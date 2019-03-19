<template>
<!--联系我们KTC版本-->
		<div class="findUs">
				<div class="findUsCont">
					<div class="abSrcContKTC"></div>
					<div class="fuTrueCont">
						<div class="ftc-left">
							<div class="ftcl-title">
								<span class="aboutLink" @click="open('/aboutUs')">关于我们</span>
								<span class="aboutLink" @click="open('/services')">服务范围</span>
								<span class="aboutLink" @click="open('/applyJoin')">联系我们</span>
							</div>
							<div class="ftcl-cont">
								<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont1" :key="index">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>
							<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont2" :key="index">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>								
							<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont" :key="index">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>								
								
							</div>
						</div>
						<div class="ftc-right">
							<span class="ftcrImg">© 2010-2019 The KeepThinking Consulting     沪ICP备11042995号
								<a href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&serial=9031000020190226093100000004079874-SAIC_SHOW_310000-20121227090238642826&signData=MEYCIQDR5IDDWEXAZXrL/hkKOuzHl6cAsXYnGdEfRno0wREWWgIhAKEwyYZygMclrd+IwDvyZOCmkB+5TyhHD8VZOxu1OYD2" target="_blank" rel="noopener noreferrer">
									<x-img class="LzImg" v-lazy="LzImg"></x-img>
								</a>
							</span>
						</div>						
					</div>
				</div>		
		</div>
<!--联系我们KTC版本-->
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	export default{
		name:"bottomAboutUs",
		data(){
			return{
				//底部联系我们三个
				ftclcCont1:[{
					textCont:"企业管理咨询"
				},{
					textCont:"信息技术服务"
				},{
					textCont:"应用维护服务"
				}],
				ftclcCont2:[{
					textCont:"管理咨询服务"
				},{
					textCont:"企业it系统规划"
				},{
					textCont:"it整体外包"
				}],				
				ftclcCont:[{
					textCont:"HR电话:15221175771(刘)"
				},{
					textCont:"公司电话:63300002"
				},{
					textCont:"hr@keepthinking.com.cn"
				}],
				LzImg:"../../../static/images/home/zhiZhao.png",
			}
		},
		mounted(){
		},

		methods:{
			open(link){
				this.$router.openPage(link)
			}
		},

		components:{
			XImg,
		}
	}
</script>

<style type="text/scss" lang="scss">
			/*联系我们*/
			.findUs{
				width: 100%;
				/*margin-top: 0.2rem;*/
				color: #fff;
				.findUsCont{
					position: relative;
					.abSrcContKTC{
						height: 4rem;
						background-color: rgba(66,66,66,0.8);
					}
					.abSrcContImg{
						height: 4rem;
					}
					.fuTrueCont{
						position: absolute;
						top: 0;
						display: flex;
						background-color: rgba(0,0,0,0.4);
						width:100%;
						height: 4rem;
						flex-direction: column;
						.ftc-left{
							padding: 0.4rem 0;
							.ftcl-title{
								padding-bottom:0.2rem ;
								display: flex;
								justify-content: space-between;
								span{
									flex: 1;
									text-align: center;
								}
							}
							.ftcl-cont{
								font-size: 0.26rem;
								display: flex;
								justify-content: space-around;	
								.ftcl-contF{	
									display: flex;			
									flex-direction: column;			
									align-items: center;
									flex: 1;
									.ftclc-item{
										margin-bottom: 0.08rem;
										display: flex;
										text-align: center;
										.ftcrc-Img{
											width: .5rem;
											height: .5rem;
										}
									}
								}
							}
						}
						.ftc-right{
							font-size: 0.24rem;
							.ftcrImg{
								display: flex;
								justify-content: center;
								align-items: center;
								width: 100%;
								text-align: center;
								.LzImg{
									display: inline-block;
									align-self: flex-start;
									width: 0.62rem;
									height: 0.74rem;
									margin-left: 0.2rem;
								}
							}
						}
					}

				}				
							
			}

			.aboutLink:hover{
				cursor: pointer;
			}		
</style>
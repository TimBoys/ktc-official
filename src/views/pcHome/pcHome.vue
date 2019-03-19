<template>
	<div class="initCont" ref="initCont">

		<Carousel v-model="value1" loop autoplay :autoplay-speed="4000" class="carouselCont">
			<CarouselItem v-for="(imgItem,index) in banner" :key="index">
				<div class="demo-carousel">
					<x-img class="carouselImg" v-lazy="imgItem"></x-img>
				</div>
			</CarouselItem>
		</Carousel>

<!--内容模块-->
		<div class="homeContainer">
			<div class="ct-title ">
				<div class="ctt-oneTitle">KeepThinking Consulting</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle aboutLink" @click="open('/aboutUs')">关于我们</div>
			</div>
<!--关于我们-->

			<div class="ct-aboutAss pdtbRem2 ">
			    <Row>
			        <Col :xs="24" :sm="8" :md="8" :lg="8" ><div class="abSrcCont"></div></Col>
			        <Col :xs="24" :sm="16" :md="16" :lg="16" >
								<div class="ctto-aboutCont">
									<div class="p">致想咨询依据每个客户的特殊需要和业务环境，融入公司对数据的深刻洞察，并与我们的最佳实践和实战经验结合起来，力求为客户提供最佳的解决方案。并与客户长期合作，提供高质量服务、确保我们的客户能够受益于核心业务并获得可持续的竞争优势。</div>
									<br /><div class="p">在保证服务质量的前提下，我们尤其注重技术创新。在参与的很多大型项目中，都体现了我们的顾问对独特的业务需求背景的缜密思考。为改善经营业绩，优化管理流程，提升产品和服务的效率和效果，我们不懈探索、勇于实践，以引人入胜、超越期待的特色创造成果得到了客户的肯定。 </div>	
									<br /><div class="p">公司快速发展， 而我们对卓越品质以及与客户保持长期愉快合作的目标恒久不变。 同时我们将不懈地吸引并培养优秀的员工，为他们创造良好的发展空间，帮助他们在工作和生活中获得平衡与快乐。 </div>
								</div>        	
			        </Col>
			    </Row>				
			</div>

<!--服务领域-->
		<div class="joinUsCont greyBC pdtbRem2">
				<div class="ctt-threeTitle aboutLink"  @click="open('/services')">服务领域</div>	
				<div class="ctt-fourTitle">我们为客户提供涵盖桌面端、移动终端、服务器、网络及应用等以企业云为基础的IT服务。</div>	
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in joinUsCont" :key="index" class="abSrcCont">
						<div>
							<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
							<div class="dectOne">{{abSrcItem.dectOne}}</div>
							<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
						</div>
					</div>
				</div>				
		</div>			

<!--为什么选择我们-->
		<div class="whyjoinUsCont pdtbRem2">
				<div class="ctt-threeTitle aboutLink" @click="open('/services')">为什么选择我们</div>	
				<div class="ctt-fourTitle">我们为您的企业量身定制适合您的服务方案。</div>	
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in whyjoinUsCont" :key="index" class="abSrcCont">
						<div>
							<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
							<div class="dectOne">{{abSrcItem.dectOne}}</div>
							<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
						</div>
					</div>
				</div>				
		</div>

<!--轮播2-->
		<div class="carouselCont2">
				<div class="ctt-oneTitle">KeepThinking Consulting</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle aboutLink" @click="open('/succCase')">客户名录</div>	
				<!--模态框2-->
				<div class="carouseScroll">
					<swiperWork :cscItem="cscItem"></swiperWork>
				</div>
				<!--模态框2-->
		</div>

		<!-- 关于我们 -->
		<bottomAboutUs></bottomAboutUs>


		</div>

	</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import swiperWork from '../../components/swiperWork';
	import bottomAboutUs from '../../components/bottomAboutUs';
	export default {
		name: "pcHome",
		data() {
			return {
				// 轮播图
				banner: ["http://www.keepthinking.com.cn/en/img/home.jpg","http://www.keepthinking.com.cn/en/img/succ.jpg","../../../static/images/home/banner3.jpg"],
				value1: 0,
				// 公司简介
				ktcAboutUs:"http://www.itwaibaow.com/statics/images/About-Us.jpg",
				//关于我们
				aboutImg:[
					"http://www.keepthinking.com.cn/en/img/home.jpg",
					"http://www.keepthinking.com.cn/en/img/succ.jpg",
				],
				//服务领域
				joinUsCont:[{
					src:"../../../static/images/mine/im-time.png",
					dectOne:"现场支持服务",
					dectTwo:"2小时快速响应、多语种、覆盖北上广，让企业每时每刻均能享受到高品质的瑞耀服务"
					},{
					src:"../../../static/images/mine/computer.png",
					dectOne:"IT咨询服务",
					dectTwo:"帮助企业建立企业信息战略架构，提供可预期的IT建设路线图，提高企业应对业务变化和抗风险的能力"
					},
					{
					src:"../../../static/images/mine/lock.png",
					dectOne:"信息安全评估",
					dectTwo:"从资产分类、日常运维、管理机制、系统配置等方面对组织信息安全管理，安全现状进行调研"
					},
					{
					src:"../../../static/images/mine/ktcyun.png",
					dectOne:"企业云; Office 365",
					dectTwo:"凭借Office365完整的办公解决方案，助员工实现高效的移动办公和沟通，降低企业运营成本"
					}
				],			
				//为什么加入我们
				whyjoinUsCont:[{
					src:"../../../static/images/mine/tel.png",
					dectOne:"2 小时响应",
					dectTwo:"还在苦苦等待服务人员上门？"
					},{
					src:"../../../static/images/mine/rili.png",
					dectOne:"98% 故障解决率",
					dectTwo:"还在被反复出现的故障而困扰？"
					},
					{
					src:"../../../static/images/mine/xiuli.png",
					dectOne:"30+ 技术人员",
					dectTwo:"还在寻找一个技术实力雄厚的团队？"
					},
					{
					src:"../../../static/images/mine/zhuangshi.png",
					dectOne:"96% 满意度",
					dectTwo:"还在投诉服务人员不专业、态度差？"
					}
				],	
				cttTwoImg:"../../../static/images/home/joinUs2.png",
				//轮播2
				cscItem:[
				"../../../static/images/mine/changjiangcunchu.png",				
				"../../../static/images/mine/zhongyuan.jpg",
				"../../../static/images/mine/luolai.jpg",
				"../../../static/images/mine/qingsuansuo.jpg",
				"../../../static/images/mine/rrd.jpg",				
				"../../../static/images/mine/feixun.jpg",				
				"../../../static/images/mine/hand.jpg",				
				"../../../static/images/mine/dg.jpg",				
				"../../../static/images/mine/cmig.jpg",				
				"../../../static/images/mine/lixun.jpg",				

				],
				crouselScrWidth:null, //每次滚动距离
			}
		},
		mounted: function() {
		},

		methods: {
			open(link){
				this.$router.openPage(link)
			}
		},
		components: {
			swiperWork,
			XImg,
			Flexbox,
			FlexboxItem,
			Actionsheet,
			bottomAboutUs
		}

	}
</script>

<style scoped="scoped" lang="scss">
@import "../../assets/scss/util";
	.initCont {
		font-size:0.38rem;
		margin-top: 1rem;
		.carouselCont {
			.carouselImg {
				height: 6rem;
			}
		}
		/*内容区域*/
		.homeContainer {
			/*头部四个标题*/
			.ct-title{
				width: 100%;;
				height: 1.6rem;
				text-align: center;
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}
				.ctt-threeTitle{
					color:#000000;
					padding-bottom: 0.3rem;
					color: $originColor;
				}

			}

			/*关于我们*/
			@media screen and (min-width:720px) {
				.ct-aboutAss {
					/*padding: 0 2.2rem;*/
					padding-bottom: 0.4rem;
					 margin: 0 auto;
   					 max-width: 1200px;
					.abSrcCont {
						float: right;
						width: 100%;
						min-height: 4.2rem;
						height: 100%;
						padding: 0.1rem;
						margin-right: 0.3rem;
						background-image: url("../../../static/images/home/About-Us2.jpg");
						background-repeat: no-repeat;
						background-size: 100% 100%;
						border-radius: 8px;
					}
					.ctto-aboutCont {
						padding-right: 0;
						color: #333;
						/*font-size: 0.24rem;*/
						font-size: 16px;
						margin-left: 0.3rem;
						&>.p {
							text-indent: 0.48rem;
							width: 100%;
							line-height: 0.46rem;
						}
					}
				}
			}
			
			@media screen and (max-width:720px) {
				.ct-aboutAss {
					padding: 0 0.5rem;
					padding-bottom: 0.4rem;
					.abSrcCont {
						width: 100%;
						min-height: 5rem;
						padding: 0.1rem;
						background-image: url("../../../static/images/home/About-Us2.jpg");
						background-repeat: no-repeat;
						background-size: 100% 100%;
						border-radius: 8px;
						margin-bottom: 0.2rem;
					}
					.ctto-aboutCont {
						padding-right: 0;
						color: #333;
						font-size: 0.24rem;
						&>.p {
							text-indent: 0.48rem;
							width: 100%;
							line-height: 0.6rem;
						}
					}
				}
			}			
			
			/*第二个轮播*/
			.carouselCont2{
				width: 100%;;
				text-align: center;
				background-color: #F4F4F4;
				padding-top:0.3rem ;
				div{
					
				}
				.ctt-oneTitle{
					color: $originColor;
					padding:0.2rem 0 0 0 ;
				}
				.ctt-twoTitle{
					display: flex;
					justify-content: center;
					align-items: center;
					height: 0.2rem;
					.line{
						background-color: #000000;
						height:0.04rem;
						width: 0.6rem;
					}
				}				
				.ctt-threeTitle{
					color: $originColor;
				}	
				
				.carouseScroll{
					padding:0 .6rem;
					height: 3.3rem;
					width: 100%;
					/*background-color: rgba(0,0,0,0.8);*/
					/*background-image: url("http://www.keepthinking.com.cn/en/img/home.jpg");*/
					background-repeat:no-repeat ;
					background-size:100% 100% ;
					overflow:hidden;
					/*margin-top:0.2rem ;*/
					.csModel{
						margin:0 2% ;
						display: flex;
						background-color: #F4F4F4;
						width:96%;
						height: 3.4rem;					
						div{
							display: inline-block;
							float: left;
						}
						.cs-pre,.cs-next{
							width: 8%;
							line-height: 3.6rem;
							font-size: 0.8rem;
							color: #ccc;
						}
						.allCont{
							align-self: center;
							width: 84%;
							overflow-x: scroll;
							overflow-y: hidden;
							&::-webkit-scrollbar { width: 0 !important }
							-ms-overflow-style: none;
							overflow: -moz-scrollbars-none;
							display: flex;
							align-items: center;
						.csCont{
							min-width:25rem;
							margin-top: 0.3rem;
							.cscItem{
								width: 2.5rem;
								.cscItemImg{
									width:2rem;
									height: 2rem;
									border-radius:6px ;
								}
							}
						}
						}

						
					}
				}			
			}
			/*服务领域*/
			.joinUsCont{
				width: 100%;
				.ctt-threeTitle,.ctt-fourTitle{
					text-align: center;
					width: 100%;
					color: $originColor;
					padding:0.3rem  0 0.6rem;
				}	
				.ctt-fourTitle{
					font-size: 0.3rem;
					padding:0 1rem 0.1rem 1rem;
				}	
				.ctt-twoImg{
					width:100%;
					height: 3.8rem;
				}		
				.ctt-two{
					.abSrcCont{
						width: calc(100%/4);
						display: inline-block;
						padding:0.3rem;
						div{
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 0.22rem;
						.abSrcContImg{
							width:0.6rem;
							height:0.6rem;
						}
						.dectOne{
							font-weight: 700;
							padding: 0.2rem 0 0.1rem 0;
						}
						.dectTwo{
							max-width: 4rem;
						}
						}
					}
				}				
			}	
			
/*为什么加入我们*/
			.whyjoinUsCont{
				width: 100%;
				background-image: url("http://m.itwaibaow.com/statics/images/index-image/Home_Numbers_2.jpg");
				background-repeat:no-repeat ;
				background-size:100% 100% ;
				.ctt-threeTitle,.ctt-fourTitle{
					text-align: center;
					width: 100%;
					color: $originColor;
					padding:0.3rem  0 0.6rem;
				}	
				.ctt-fourTitle{
					font-size: 0.3rem;
					padding:0 1rem 0.1rem 1rem;
				}	
				.ctt-twoImg{
					width:100%;
					height: 3.8rem;
				}		
				.ctt-two{
					color: #BBB;
					.abSrcCont{
						width: calc(100%/4);
						display: inline-block;
						padding:0.3rem;
						div{
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							font-size: 0.22rem;
						.abSrcContImg{
							width:0.6rem;
							height:0.6rem;
						}
						.dectOne{
							font-weight: 700;
							padding: 0.2rem 0 0.1rem 0;
						}
						.dectTwo{
							max-width: 4rem;
						}
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
<template>
	<div class="initCont" ref="initCont">

		<Carousel v-model="value1" loop autoplay :autoplay-speed="4000" class="carouselCont">
			<CarouselItem v-for="(imgItem,index) in banner" :key="index">
				<div class="demo-carousel">
					<x-img class="carouselImg" v-lazy="imgItem" /></x-img>
				</div>
			</CarouselItem>
		</Carousel>

<!--内容模块-->
		<div class="homeContainer">
			<div class="ct-title ">
				<div class="ctt-oneTitle">KeepThinking Consulting</div>
				<div class="ctt-twoTitle"><div class="line"></div></div>
				<div class="ctt-threeTitle">关于我们</div>
			</div>
<!--关于我们-->

			<div class="ct-aboutAss pdtbRem2">
			    <Row>
			        <Col :xs="24" :sm="8" :md="8" :lg="8" ><div class="abSrcCont"></div></Col>
			        <Col :xs="24" :sm="16" :md="16" :lg="16" >
								<div class="ctto-aboutCont">
									<div class="p">致想咨询依据每个客户的特殊需要和业务环境，融入公司对数据的深刻洞察，并与我们的最佳实践和实战经验结合起来，力求为客户提供最佳的解决方案。并与客户长期合作，提供高质量服务、确保我们的客户能够受益于核心业务并获得可持续的竞争优势。</div>
									<div class="p">在保证服务质量的前提下，我们尤其注重技术创新。在参与的很多大型项目中，都体现了我们的顾问对独特的业务需求背景的缜密思考。为改善经营业绩，优化管理流程，提升产品和服务的效率和效果，我们不懈探索、勇于实践，以引人入胜、超越期待的特色创造成果得到了客户的肯定。 </div>	
									<div class="p">公司快速发展， 而我们对卓越品质以及与客户保持长期愉快合作的目标恒久不变。 同时我们将不懈地吸引并培养优秀的员工，为他们创造良好的发展空间，帮助他们在工作和生活中获得平衡与快乐。 </div>
								</div>        	
			        </Col>
			    </Row>				
			</div>

<!--服务领域-->
		<div class="joinUsCont greyBC pdtbRem2">
				<div class="ctt-threeTitle">服务领域</div>	
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
				<div class="ctt-threeTitle">为什么选择我们</div>	
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
				<div class="ctt-threeTitle">客户名录</div>	
				<!--模态框2-->
				<div class="carouseScroll">
					<swiperWork :cscItem="cscItem"></swiperWork>
					<!--<div class="csModel">
						<div class="cs-pre" @click="csNext"><</div>
						<div class="allCont" ref="allCsCont">
						<div class="csCont" >
							<div class="cscItem" v-for="(cscOneItem,index) in cscItem" :key="index">
								<x-img v-lazy="cscOneItem" class="cscItemImg"></x-img>
							</div>		
						</div>
						</div>
						<div class="cs-next" @click="csPre">></div>
					</div>-->
				</div>
				<!--模态框2-->
				
		</div>


<!--联系我们KTC版本-->
		<div class="findUs">
				<div class="findUsCont">
					<div class="abSrcContKTC"></div>
					<div class="fuTrueCont">
						<div class="ftc-left">
							<div class="ftcl-title">
								<span>关于我们</span>
								<span>服务范围</span>
								<span>联系我们</span>
							</div>
							<div class="ftcl-cont">
								<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont1">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>
							<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont2">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>								
							<div class="ftcl-contF">
									<div class="ftclc-item" v-for="(ftclcItem,index) in ftclcCont">
										<div>{{ftclcItem.textCont}}</div>
									</div>
								</div>								
								
							</div>
						</div>
						<div class="ftc-right">
							<span class="ftcrImg">© 2010-2018 The KeepThinking Consulting     沪ICP备11042995号</span>
						</div>						
					</div>
				</div>		
		</div>
<!--联系我们KTC版本-->		


		</div>

	</div>
</template>

<script>
	import VueDB from '../../util/vue-db/vue-db-long'
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import swiperWork from '../../components/swiperWork';
	import _ from 'lodash';	
	var DB = new VueDB();
	var sivTime = null;
	var crouselScrWidth = null;
	var canScrollWidth = null;
	var timeoutflag = null;
	export default {
		name: "home",
		data() {
			return {
				ktcAboutUs:"http://www.itwaibaow.com/statics/images/About-Us.jpg",
				
				banner: ["http://www.keepthinking.com.cn/en/img/home.jpg","http://www.keepthinking.com.cn/en/img/succ.jpg","../../../static/images/home/banner3.jpg"],
				value1: 0,
				aboutCont:"素匠泰茶有别于市面上的传统奶茶，从名字上大家可以知道，我们是主营泰式奶茶的，在市面上港式、台式奶茶层出不穷的时代，我们想让大家喝到不一样的饮品，感受到生活中与众不同的小确幸。",
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
				"../../../static/images/mine/zhongyuan.jpg",
				"../../../static/images/mine/luolai.jpg",
				"../../../static/images/mine/qingsuansuo.jpg",
				"../../../static/images/mine/rrd.png",				
				"../../../static/images/mine/zhongyuan.jpg",
				"../../../static/images/mine/luolai.jpg",
				"../../../static/images/mine/qingsuansuo.jpg",
				"../../../static/images/mine/rrd.png",				
				"../../../static/images/mine/zhongyuan.jpg",
				"../../../static/images/mine/luolai.jpg",
				"../../../static/images/mine/qingsuansuo.jpg",
				"../../../static/images/mine/rrd.png",
				],
				crouselScrWidth:null, //每次滚动距离
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
				//二维码
//				ecode:"../../static/images/mine/ecode.png",
				ecode:"",
				//首页最热的三类的图标
				detailFireSrc: [],
			}
		},
		mounted: function() {
			//初始化轮播图2
//			this.allCsCont2();
			//初始化店铺
			this.initGetStoreId();
		},

		methods: {
			//初始化店铺获取店铺编号
			initGetStoreId() {

			},
			
			//轮播2
//			allCsCont2(){
//				setTimeout(()=>{
//					canScrollWidth = this.$refs.allCsCont.scrollWidth - this.$refs.allCsCont.clientWidth; //可以滚动的宽度
//					crouselScrWidth = this.$refs.allCsCont.scrollWidth / 10;
//				console.dir(this.$refs.allCsCont.scrollWidth)
//				sivTime =  setInterval(()=>{
//					this.$refs.allCsCont.scrollLeft += 1;
////					console.log(this.$refs.allCsCont.scrollLeft)
//					if(this.$refs.allCsCont.scrollLeft >= canScrollWidth -1	){
//						this.$refs.allCsCont.scrollLeft = 0;
//					}
//				},10)
//				},1000)
//				
//			},
//			//右
//			csPre(){
//				clearInterval(sivTime);
////				console.log("csPre")
//				this.$refs.allCsCont.scrollLeft += crouselScrWidth;
//				if(this.$refs.allCsCont.scrollLeft >= canScrollWidth -1){
//					this.$refs.allCsCont.scrollLeft = 0;
//				}
//
//			},
//			//左
//			csNext(){
//				clearInterval(sivTime);
////				console.log("csNext")
//				this.$refs.allCsCont.scrollLeft -= crouselScrWidth;
//				if(this.$refs.allCsCont.scrollLeft <= 0){
//					this.$refs.allCsCont.scrollLeft = this.$refs.allCsCont.clientWidth;
//				}				
//			}
		},
		components: {
			swiperWork,
			XImg,
			Flexbox,
			FlexboxItem,
			Actionsheet
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
					padding: 0 3.5rem;
					padding-bottom: 0.4rem;
					.abSrcCont {
						width: 88%;
						min-height: 5rem;
						padding: 0.1rem;
						margin-right: 0.6rem;
						background-image: url("../../../static/images/home/About-Us2.jpg");
						background-repeat: no-repeat;
						background-size: 100% 100%;
						float: right;
						border-radius: 8px;
					}
					.ctto-aboutCont {
						padding-right: 0;
						color: #333;
						font-size: 0.24rem;
						&>.p {
							text-indent: 0.48rem;
							width: 88%;
							line-height: 0.6rem;
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
					padding: 0.3rem 0;
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
					padding: 0.3rem 0;
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
			
				
/*联系我们*/
			.findUs{
				width: 100%;
				/*margin-top: 0.2rem;*/
				color: #fff;
				.findUsCont{
					position: relative;
					.abSrcContKTC{
						height: 4rem;
						background-color: #333;
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
								font-size: 0.28rem;
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
							font-size: 0.26rem;
							.ftcrImg{
								display: block;
								width: 100%;
								text-align: center;
							}
						}
					}

				}				
							
			}			
				
			
		}
		
	
	}
	
	
</style>
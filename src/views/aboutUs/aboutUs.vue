<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
		</div>
<!--内容模块-->
		<div class="homeContainer">
<!--关于我们-->
			<div class="ct-aboutAss pdtbRem2">
				<div class="ctt-two">
					<div class="abSrcCont"></div>
				</div>
				<div class="ctt-one">
					<div class="ctto-about">公司简介</div>
					<div class="ctto-aboutCont">
						<div class="p">致想咨询总部设在上海，在北京、深圳及广州设有分公司，与多家合作伙伴建立长期战略合作，服务区域可覆盖全国20多个个城市。目前拥有员工35人，其中工程师32人，80%以上拥有劳动局及信息产业部颁发的高级工程师资质认证，思科CCNA、CCNP以及微软MCSE、MCTS等国际认证。截止2016年1月1日，瑞耀网络已成功为500多家企业提供IT服务。</div>
						<div class="p">我们基于对众多中小企业在应用阶段面临问题与挑战的深刻认识，为您提供基于企业IT资产和应用的整合IT管理和技术服务，致力于为客户简化IT资产和应用的管理，提高可用性，体现IT的价值和效益，以满足中小企业对IT服务外包供应商的价值和创新要求。</div>	
					</div>
					
				</div>
			</div>

<!--服务领域-->
		<div class="joinUsCont greyBC pdtbRem2">
				<div class="ctt-threeTitle">企业文化</div>	
				<div class="ctt-fourTitle">
					<div class="cttf-title">公司理念</div>
					<div  class="cttf-cont">
						信息技术最基本的目标是为人们提供一个舒适、安全、方便和高效的生活环境 . 对信息技术产品来说 , 最重要的 。 信息技术控制系统的经营商更要本着消费者至上的理念 ,本着从客户利益出发心态 , 以认真、负责、诚信的态度 。
					</div>
				</div>	
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

<!--员工风采-->
		<div class="whyjoinUsCont">
				<div class="peopleColor"></div>
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
	import headerBanner from '../../components/header-banner';
	import _ from 'lodash';	
	var DB = new VueDB();
	var sivTime = null;
	var crouselScrWidth = null;
	var canScrollWidth = null;
	var timeoutflag = null;
	export default {
		name: "aboutUs",
		data() {
			return {
				bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085631527.jpg",bannerTitle:"关于我们"},
				ktcAboutUs:"http://www.itwaibaow.com/statics/images/About-Us.jpg",
				peopleColorUrl:"http://www.itwaibaow.com/statics/css/img/our_team.jpg",
				aboutCont:"素匠泰茶有别于市面上的传统奶茶，从名字上大家可以知道，我们是主营泰式奶茶的，在市面上港式、台式奶茶层出不穷的时代，我们想让大家喝到不一样的饮品，感受到生活中与众不同的小确幸。",
				//关于我们
				aboutImg:[
					"http://www.keepthinking.com.cn/en/img/home.jpg",
					"http://www.keepthinking.com.cn/en/img/succ.jpg"
				],
				//服务领域
				joinUsCont:[{
					src:"http://bk.image.styleweb.com.cn/2017/2/22/1765_izgmrrt1.png?imageView2/2/w/501/q/100",
					dectOne:"严格技术监督",
					},{
					src:"http://bk.image.styleweb.com.cn/2017/2/22/1765_izgmrru4.png?imageView2/2/w/501/q/100",
					dectOne:"高效操作",
					},
					{
					src:"http://bk.image.styleweb.com.cn/2017/2/22/1765_izgmrrt3.png?imageView2/2/w/501/q/100",
					dectOne:"负担社会责任",
					},
					{
					src:"http://bk.image.styleweb.com.cn/2017/2/22/1765_izgmrrsz.png?imageView2/2/w/501/q/100",
					dectOne:"以客户利益为上",
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
				cscItem:["../../../static/images/home/testImg1.jpg","../../../static/images/home/testImg2.jpg","../../../static/images/home/testImg3.jpg","../../../static/images/home/testImg4.jpg","../../../static/images/home/testImg5.jpg","../../../static/images/home/testImg6.jpg","../../../static/images/home/testImg7.jpg","../../../static/images/home/testImg8.jpg","../../../static/images/home/testImg2.jpg","../../../static/images/home/testImg1.jpg",],
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

			//初始化店铺
			this.initGetStoreId();
		},

		methods: {
			//初始化店铺获取店铺编号
			initGetStoreId() {

			}
		},
		components: {
			headerBanner,
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
		/*内容区域*/
		.homeContainer {

			/*关于我们*/
			.ct-aboutAss{
				display: flex;
				&>div,p{
					width: 50%;
					padding: 0.1rem;
				}
				.ctt-one{
					.ctto-about{
						color:#000000;
						font-size: 0.28rem;
					}
					.ctto-aboutCont{
						padding-right: 0;
						color:#333;
						font-size: 0.2rem;		
						&>.p{
							text-indent: 0.48rem;
							width: 88%;
							line-height: 0.5rem;
						}				
					}
				}
				.ctt-two{
					display: flex;
					justify-content: flex-end;
					.abSrcCont{
						width: 88%;
						max-height: 4.5rem;
						padding:0.1rem;
						background-image: url("http://www.itwaibaow.com/statics/images/About-Us.jpg");
						background-repeat:no-repeat ;
						background-size:100% 100% ;
					}
				}
			}
			
			/*公司文化*/
			.joinUsCont{
				width: 100%;
				/*width: 88%;*/
				/*margin: 0 6%;*/
				.ctt-threeTitle{
					text-align: center;
					width: 100%;
					color: $originColor;
					padding: 0.3rem 0.1rem 0;
				}	
				.ctt-fourTitle{
					font-size: 0.3rem;
					/*padding:0 1rem 0.1rem 1rem;*/
					width: 88%;
					margin: 0 auto;
					margin-bottom: 0.1rem;
					.cttf-title{
						color: #000;
					}
					.cttf-cont{
						color: #333;
						font-size: 0.22rem;
					}
				}	
				.ctt-twoImg{
					width:100%;
					height: 3.8rem;
				}		
				.ctt-two{
					width: 88%;
					margin: 0 auto;					
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
				height: 10rem;
				width: 100%;
				background-color: rgb(60,60,60);
				.peopleColor{
					margin: 0 auto;	
					width: 88%;
					height: 100%;
					background-image: url("http://www.itwaibaow.com/statics/css/img/our_team.jpg");
					background-repeat:no-repeat ;
					background-size:100% 100% ;
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
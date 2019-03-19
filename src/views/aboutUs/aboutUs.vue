<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
		</div>
<!--内容模块-->
		<div class="homeContainer">
<!--关于我们-->
	    <Tabs :animated="false">
	<!--咨询服务-->
	        <TabPane label="公司简介" class="ktcComDetail">
			<div class="ct-aboutAss pdtbRem2 ">
				<div class="ctt-threeTitle">公司简介</div>	
			    <Row>
			        <Col :xs="24" :sm="8" :md="8" :lg="8" ><div class="abSrcCont"></div></Col>
			        <Col :xs="24" :sm="16" :md="16" :lg="16" >
								<div class="ctto-aboutCont">
									<div class="p">致想咨询依据每个客户的特殊需要和业务环境，融入公司对数据的深刻洞察，并与我们的最佳实践和实战经验结合起来，力求为客户提供最佳的解决方案。并与客户长期合作，提供高质量服务、确保我们的客户能够受益于核心业务并获得可持续的竞争优势。</div>
									<br /><div class="p">公司立足于IT服务产业，致力于IT外包的高质量服务与运营。公司由专业技术、市场等专业人才组成，在IT外包领域，拥有严密的专业领域技术及系统架构经验；拥有在IT外包行业多年丰富从业经验的管理者，对IT外包领域的深刻理解，以及对IT外包商务模式不断探索与了解，使我们对所处行业瞬息万变的市场情况和规律有充分的理解与掌握并提出主动式IT外包服务的全新理念。</div>
									<br /><div class="p">在保证服务质量的前提下，我们尤其注重技术创新。在参与的很多大型项目中，都体现了我们的顾问对独特的业务需求背景的缜密思考。为改善经营业绩，优化管理流程，提升产品和服务的效率和效果，我们不懈探索、勇于实践，以引人入胜、超越期待的特色创造成果得到了客户的肯定。 </div>	
								</div>        	
			        </Col>
			    </Row>				
			</div>
			
	        </TabPane>
			
			<TabPane label="企业文化">
			<!--企业文化-->
					<div class="joinUsCont  pdtbRem2 ">
							<div class="ctt-threeTitle">企业文化</div>	
							<div class="ctt-fourTitle">
								<div class="cttf-title">公司简介：</div>
								<div  class="cttf-cont">
									领先的信息技术和解决方案提供商。我们基于客户需求持续创新，在物联网传感器、控制器、移动物联网、云计算和大数据等几大领域都进行了长期探索和不懈积累。凭借在物体感知、学习、控制等领域的综合优势，公司已经成为信息技术产业的主要推动者之一。
								</div>
								<div class="cttf-title">公司荣誉：</div>
								<div  class="cttf-cont">
									2015年3月10日公司以“推动者”身份加入物联网权威国际组织之一ZigBee联盟，参与全球物联网以及智能家居标准的制定和完善。
								</div>
								<div class="cttf-title">公司理念：</div>
								<div  class="cttf-cont">
									信息技术最基本的目标是为人们提供一个舒适、安全、方便和高效的生活环境 . 对信息技术产品来说 , 最重要的 。 信息技术控制系统的经营商更要本着消费者至上的理念 ,本着从客户利益出发心态 , 以认真、负责、诚信的态度 。
								</div>								
							</div>	
							<div class="ctt-two " >
								<Row>
									<div v-for="(abSrcItem,index) in joinUsCont" :key="index" class="abSrcCont" :xs="12" :sm="6" :md="6" :lg="6">
										<div>
											<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
											<div class="dectOne">{{abSrcItem.dectOne}}</div>
											<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
										</div>
									</div>
								</Row>
							</div>				
					</div>					
			</TabPane>
			
			<TabPane label="员工风采">
			<!--员工风采-->
					<div class="whyjoinUsCont">
							<div class="peopleColor"></div>
					</div>				
			</TabPane>			
		</Tabs>

		<!-- 关于我们 -->
		<bottomAboutUs></bottomAboutUs>

		</div>

	</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import headerBanner from '../../components/header-banner';
	import bottomAboutUs from '../../components/bottomAboutUs';
	export default {
		name: "aboutUs",
		data() {
			return {
				// 导航轮播图
				bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085631527.jpg",bannerTitle:"关于我们"},
				//关于我们
				aboutImg:[
					"http://www.keepthinking.com.cn/en/img/home.jpg",
					"http://www.keepthinking.com.cn/en/img/succ.jpg"
				],
				//服务领域
				joinUsCont:[{
					src:"http://www.xintonginfo.com/Skins/Default/static/css/module/about/img/09.png",
					dectOne:"愿景",
					dectTwo:"打造长三角IT服务领先品牌",
					},{
					src:"http://www.xintonginfo.com/Skins/Default/static/css/module/about/img/07.png",
					dectOne:"使命",
					dectTwo:"为客户和社会创造更大的价值",
					},
					{
					src:"http://www.xintonginfo.com/Skins/Default/static/css/module/about/img/05.png",
					dectOne:"服务宗旨",
					dectTwo:"始终勤快，始终热情，始终专业",
					},
					{
					src:"http://www.xintonginfo.com/Skins/Default/static/css/module/about/img/08.png",
					dectOne:"服务理念",
					dectTwo:"服务见于细节，细节决定成败",
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
			}
		},
		mounted: function() {
		},

		methods: {
		},
		components: {
			headerBanner,
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
		/*内容区域*/
		.homeContainer {

/*关于我们*/
			@media screen and (min-width:720px) {
				.ct-aboutAss {
					padding-bottom: 0.4rem;
					 margin: 0 auto;
   					 max-width: 1200px;
   					.ctt-threeTitle{
						text-align: center;
						width: 100%;
						color: $originColor;
						padding: 0.1rem 0 0.2rem;
					}	
					.abSrcCont {
						float: right;
						width: 100%;
						min-height: 5.2rem;
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
					width: 100%;
					margin-top: 0.4rem;
					display: flex;
					justify-content: space-around;	
					.abSrcCont{
						width: 4rem;
						height: 4rem;
						display: inline-block;
						margin:0.2rem 0.5rem ;
						padding: 0.1rem;
						text-align: center;
						background-color:#f6f6f6;
						border:1px solid  #eee;
						&:hover{
							box-shadow: 0 0 0.2rem #BBB;
						}
						div{
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: flex-end;
							align-items: center;
							font-size: 0.22rem;
						.abSrcContImg{
							width:1rem;
							height:1rem;
							margin-top: 0.4rem;
						}
						.dectOne{
							font-size: 0.3rem;
							height: 30%;
						}
						.dectTwo{
							margin-top: 0.4rem;
							height: 20%;
							font-size: 0.22rem;
						}
						}
					}
				}				
			}	
			
/*为什么加入我们*/
			.whyjoinUsCont{
				height: 8rem;
				width: 100%;
				/*background-color: rgb(60,60,60);*/
				.peopleColor{
					margin:  0.5rem;
					width: calc(100% - 1rem);
					height: 100%;
					background-image: url("http://www.itwaibaow.com/statics/css/img/our_team.jpg");
					background-repeat:no-repeat ;
					background-size:100% 100% ;
				}
				@media screen and (min-width:720px) {
					.peopleColor{
						margin: 0.5rem 1.5rem;
						width: calc(100% - 3rem);
					}
				}			
			}				
			
		}
		
	}
	
	
</style>
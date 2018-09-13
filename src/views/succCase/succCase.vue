<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
		</div>
		<div class="homeContainer">
<!--成功案例-->
		<div class="succCaseCont">
				<div class="scc-item" v-for="(sccItem,index) in succCaseCont">
					<x-img v-lazy="sccItem.sccUrl" class="scci-rightImg"></x-img>
					<div class="scci-leftCont">
						<div class="cssil-name">
							{{sccItem.sccName}}
						</div>
						<div class="cssil-sccResult">{{sccItem.sccResult}}</div>
						<div class="cssil-sccBC">{{sccItem.sccBC}}</div>
						<div class="cssil-sccWorks">{{sccItem.sccWorks}}</div>
						
					</div>
				</div>
				
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
				bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085724307.jpg",bannerTitle:"成功案例"},
				//成功案例
				succCaseCont:[{
					sccUrl:"../../../static/images/mine/zhongyuan.jpg",
					sccName:"国内某知名集装箱运输企业 ",
					sccResult:"优化集装箱管理流程、并规划新一代集装箱管理系统  ",
					sccBC:"在集装箱运输行业总成本中，集装箱管理成本占较高比例，主要包括集装箱折旧（或租金）及空箱调运成本。如何配置合适的集装箱量、如何进行合理的空箱调运，在满足货运的需求情况下，使总体集装箱管理达到最低的水品，是一个复杂的系统工程。 ",
					sccWorks:"对客户的管理现状、管理理念进行充分调研分析，参考行业领先企业的管理理念，确定未来集装箱管理的概要方向；结合客户的实际情况，基于对业务数据进行详细分析的基础上，对管理方法进行细化；根据集装箱管理业务规划，为客户设计集装箱管理系统规划及实施线路图。  ",
				},{
					sccUrl:"../../../static/images/mine/luolai.jpg",
					sccName:"国内某服装鞋帽企业  ",
					sccResult:"在整个销售渠道中合理配置库存 ",
					sccBC:"该公司已经具有良好的系统和数据基础，各门店的销售情况、渠道的库存情况，都能够及时录入整合交易系统。但是由于鞋子季节性强、品类繁多，靠人工难以实现合理的库存配置、合理的库存调拨等管理，而库存的周转直接影响这企业的盈利能力，所以需要系统来辅助库存管理。 ",
					sccWorks:"整个优化过程分两步走：第一步是分析业务及数据以找出需要预警的业务规则，并在系统中实现这些规则，以辅助人员进行库存调拨、订货及促销活动；第二步是根据销售预测及订货周期为渠道各节点设定合理的安全库存。整个过程由顾问与公司管理人员长期密切协作，以实现项目目标。   ",
				},{
					sccUrl:"../../../static/images/mine/qingsuansuo.jpg",
					sccName:"上海某知名清算企业 ",
					sccResult:"优化集装箱管理流程、并规划新一代集装箱管理系统  ",
					sccBC:"在集装箱运输行业总成本中，集装箱管理成本占较高比例，主要包括集装箱折旧（或租金）及空箱调运成本。如何配置合适的集装箱量、如何进行合理的空箱调运，在满足货运的需求情况下，使总体集装箱管理达到最低的水品，是一个复杂的系统工程。 ",
					sccWorks:"对客户的管理现状、管理理念进行充分调研分析，参考行业领先企业的管理理念，确定未来集装箱管理的概要方向；结合客户的实际情况，基于对业务数据进行详细分析的基础上，对管理方法进行细化；根据集装箱管理业务规划，为客户设计集装箱管理系统规划及实施线路图。  ",
				},{
					sccUrl:"../../../static/images/mine/rrd.png",
					sccName:"国际某知名印刷企业",
					sccResult:"优化集装箱管理流程、并规划新一代集装箱管理系统  ",
					sccBC:"在集装箱运输行业总成本中，集装箱管理成本占较高比例，主要包括集装箱折旧（或租金）及空箱调运成本。如何配置合适的集装箱量、如何进行合理的空箱调运，在满足货运的需求情况下，使总体集装箱管理达到最低的水品，是一个复杂的系统工程。 ",
					sccWorks:"对客户的管理现状、管理理念进行充分调研分析，参考行业领先企业的管理理念，确定未来集装箱管理的概要方向；结合客户的实际情况，基于对业务数据进行详细分析的基础上，对管理方法进行细化；根据集装箱管理业务规划，为客户设计集装箱管理系统规划及实施线路图。  ",
				}],
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
			
			/*服务领域*/
			.succCaseCont{
				width:80%;
				margin: 0 auto;
				.scc-item{
					margin: .3rem auto;
					height:2.4rem;
					border:1px solid #ccc;
					border-radius:4px;
					padding:0.1rem;
					display:flex;
					overflow:hidden;
				&:hover{
					box-shadow: 0 0 0.2rem #BBB;
				}
				.scci-rightImg{
					width: 25%;
					height:100%;
					
				}
				.scci-leftCont{
					width: 75%;
					font-size: 0.16rem;
					padding-left:0.2rem ;
					.cssil-name{
						color: red;
						font-size: 0.24rem;
					}
					.cssil-sccResult{
						color: #777;
						margin-bottom: 0.06rem;
					}
					.cssil-sccBC{
						font-size: 0.18rem;
						line-height: 0.26rem;
					}
					.cssil-sccWorks{
						font-size: 0.18rem;
						line-height: 0.26rem;
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
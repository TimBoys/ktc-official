<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
		</div>
<!--内容模块-->
		<div class="homeContainer">
<!--服务领域-->
		<div class="joinUsCont  pdtbRem2">
				<div class="ctt-threeTitle">咨询服务</div>	
				<div class="ctt-fourTitle">
					<div class="cttf-title">咨询服务对象：</div>
					<p  class="cttf-cont">
						     公司没有成立IT技术部门，或者公司内部IT工程师对IT环境搭建流程不熟悉。想降低经营成本和转移技术风险的企业。 
					</p>
					<div class="cttf-title">咨询服务特色：</div>
					<p  class="cttf-cont">
						     运用IT33的技术优势以及专业的IT领域渠道，迅速为企业打造和建立起一套完善的企业级IT环境。我们用熟练的技术、专业的运维流程，来为您降低经营成本，您只须装修经营您的公司核心业务！
					</p>					
				<div class="ctt-two">
					<div v-for="(abSrcItem,index) in joinUsCont1" :key="index" class="abSrcCont">
						<div>
							<x-img v-lazy="abSrcItem.src" class="abSrcContImg"></x-img>
							<div class="dectOne">{{abSrcItem.dectOne}}</div>
							<div class="dectTwo">{{abSrcItem.dectTwo}}</div>
						</div>
					</div>
				</div>					
				</div>	
		</div>	
		
		
<!--运维服务-->
		<div class="joinUsCont greyBC pdtbRem2">
				<div class="ctt-threeTitle">运维服务</div>	
				<div class="ctt-fourTitle">
					<div class="cttf-title">运维服务理念：</div>
					<p  class="cttf-cont">
						     致想咨询以“己欲立而立人，己欲达而达人”为服务理念，参考ITSS、ISO20000、ISO27001、ITIL等国内外先进的ITSM标准及实践，结合多年来丰富的电子政务运维服务管理经验，以成熟的运维管理体系为基础，为信息系统提供管理和技术的双重保障。华宇以客户的业务应用为核心，围绕客户的业务战略目标，提供从咨询规划、实施交付、检查监管到评估改进全生命周期的IT运维服务。 <br />
					</p>
					<div class="cttf-title">运维服务内容：</div>
					<p  class="cttf-cont">
						     咨询规划服务，提供信息化咨询规划、运维平台构建、运维项目咨询、运维体系评估四个服务产品，通过华宇科学实践的运维模型和方法论，结合客户业务现状，选择合适的运维模式，规划和构建科学的运维管理体系，建立高效的信息化管理流程。
					</p>
					<p  class="cttf-cont">
						     运维管理服务，提供运维总包管理、运维服务台管理、运维绩效管理、运维资产资源管理四大项服务，通过对运维服务进行科学、全面、全程的管理，规避运维风险，提高运维效率，为客户提供满意的运维服务。
					</p>					
					<p  class="cttf-cont">
						     运行保障服务，提供基础设施服务、业务应用服务和信息安全服务三个类别的多项服务，覆盖从IT基础设施、业务应用系统以及信息安全的各层次、各方面的IT运行维护和保障。
					</p>					
					<p  class="cttf-cont">
						     数据运维服务，提供信息内容发布、数据质量管理、备份容灾管理、数据分析处理四大项服务，对客户信息化中各类系统数据、业务数据进行管理与维护，通过数据运维服务，实现客户信息系统“数据不丢”的工作目标。并进一步开展数据运维，挖掘数据的价值，促进“信息建设”向“信息服务”转型。
					</p>					
				</div>	
		</div>
<!--系统建设-->
		<div class="joinUsCont pdtbRem2">
				<div class="ctt-threeTitle">系统建设</div>	
				<div class="ctt-fourTitle">
					<div class="cttf-title">系统建设过程：</div>
					<p  class="cttf-cont">
						     应用软件产品开发的过程分为：规划、定义、开发、验证、确认和维护六个阶段。公司开发过程的管理采用了渐进式开发模型，遵循CMMI模型的管理要求，参考了“统一过程（Unified Process）”。开发过程中强调了面向市场的验证和反馈，在开发过程中鼓励尽早暴露风险，向用户提交符合需求的产品。
					</p>
					<div class="cttf-title">系统建设开发队伍：</div>
					<p  class="cttf-cont">
						     华宇建立了符合业务需要的组织架构、完备的开发管理制度、开发经费的预算管理和保障机制、开发团队的绩效管理及激励机制等管理措施，并且为开发团队构建了适合创新、鼓励创新的创新环境，还通过与国内知名大学及研究机构建立合作研究实验室等方式，实现产学研相结合，进一步加强开发队伍的研究技术能力和技术素质。
					</p>					
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
<!--解决方案-->
		<div class="joinUsCont greyBC pdtbRem2">
				<div class="ctt-threeTitle">解决方案</div>	
				<div class="ctt-fourTitle">
					<p  class="cttf-cont">
						     致想咨询是一家专业的软件开发服务提供商。拥有杰出的软件开发团队和顶尖的IT 精英，我们始终以满足客户个性化需求、确保软件适用性为原则，提供咨询服务。  <br />
						　　为了使软件项目能够按照预定的成本、进度、质量顺利完成，我们制定了一套科学的管理流程，主要阶段如下 <br />
						　　[销售期:] <br />
						　　　　1、接到您的需求  <br />
						　　　　2、上门进行需求调研 <br />
						　　　　3、调研后按照需求进行评估（费用、开发周期） <br />
						　　　　4、签署合同 <br /> <br />
						
						　　[执行期:] <br />
						　　　　1、需求规格说明书以及系统原型  <br />
						　　　　2、开发计划 <br />
						　　　　3、开发+测试 <br />
						　　　　4、试运行 <br />
						　　　　5、验收 <br /> <br />
						
						　　[售后期:] <br />
						　　　　1、进入系统维护期
					</p>
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
				bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085735580.jpg",bannerTitle:"服务领域"},
				ktcAboutUs:"http://www.itwaibaow.com/statics/images/About-Us.jpg",
				aboutCont:"素匠泰茶有别于市面上的传统奶茶，从名字上大家可以知道，我们是主营泰式奶茶的，在市面上港式、台式奶茶层出不穷的时代，我们想让大家喝到不一样的饮品，感受到生活中与众不同的小确幸。",
				//关于我们
				aboutImg:[
					"http://www.keepthinking.com.cn/en/img/home.jpg",
					"http://www.keepthinking.com.cn/en/img/succ.jpg"
				],
				//服务领域
				joinUsCont1:[{
					src:"http://www.it33.com/upload/20170910/20170910160655_3593.png",
					dectOne:"IT驻场服务",
					dectTwo:"全面的IT管理，不光您能得到现场技术支持，还有后备的团队支持，全天候，随时随地有IT人员在身边",
					},{
					src:"http://www.it33.com/upload/20170910/20170910160701_0937.png",
					dectOne:"紧急叫修服务",
					dectTwo:"如果您企业有突发紧急情况，IT33专业工程师承诺30分钟内响应了解情况、1-2小时内到场处理问题、专业工程师上门为您服务。"
					},
					{
					src:"http://www.it33.com/upload/20170910/20170910160705_8750.png",
					dectOne:"电话远程支持服务",
					dectTwo:"电话远程支持服务适用于电脑数量10台内或地区比较分散，人员多或服务频率低但对响应时间要求高的中高端企业客户。"
					},
					{
					src:"http://www.it33.com/upload/20170910/20170910160710_9687.png",
					dectOne:"微信IT报修服务",
					dectTwo:"“微IT”是IT运维行业的“优步”之选。使用微信报修系统报修，IT33为您企业提供了更简单易懂的在线沟通报修的IT服务"
					}
				],	
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
		},

	}
</script>

<style scoped="scoped" lang="scss">
@import "../../assets/scss/util";
	.initCont {
		font-size:0.38rem;
		margin-top: 1rem;
		/*内容区域*/
		.homeContainer {

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
						margin-bottom: 0.2rem;
						text-indent: 0.44rem;
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
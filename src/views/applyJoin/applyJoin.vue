<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
		</div>		
		
    	<div class="juheadCont">
    		<!--<x-img class="joinUsHeadImg" v-lazy="joinUsHeadImg" /></x-img>-->
    	</div>

<!--提交信息-->
    	<div class="formCont">
				<div class="ctt-oneTitle">联系我们，获取免费资料，进一步了解项目</div>    	
    			<div class="ctt-cont">
    				 <div class="cttc-Item">
    				 		<span>*</span>
    				 		<Input v-model="submitData.name" placeholder="你的名字" :maxlength="50" class="cttcInput"  />
    				 </div>
    				 <div class="cttc-Item">
    				 		<span>*</span>
    				 		<Input v-model="submitData.telephone" :maxlength="30" placeholder="联系电话" class="cttcInput"  />
    				 </div> 
    				 <div class="cttc-Item">
    				 		<span style="visibility: hidden;">#</span>
    				 		<Input v-model="submitData.email" placeholder="联系邮箱" :maxlength="50" class="cttcInput"  />
    				 </div>      				 
    				 <div class="cttc-Item">
	    				  <span>*</span>
	    				  <Input v-model="submitData.context" type="textarea" :maxlength="450" :rows="5" class="cttcInput" placeholder="填写相关信息，如回访时间，资讯问题描述等。"  />
    				  </div>
    				 <div class="cttc-Item cttc-btn">
	    				  <span>*<span>为必填项目</span></span>
	    				  <Button type="warning" class="formSubmit" @click.native="formSubmit">提交</Button>
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
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import headerBanner from '../../components/header-banner';
	import swiperWork from '../../components/swiperWork';
	export default {
		name: "home",
		data() {
			return {
				//轮播
				cscItem:["../../../static/images/home/testImg1.jpg","../../../static/images/home/testImg2.jpg","../../../static/images/home/testImg3.jpg","../../../static/images/home/testImg4.jpg","../../../static/images/home/testImg5.jpg","../../../static/images/home/testImg6.jpg","../../../static/images/home/testImg7.jpg","../../../static/images/home/testImg8.jpg","../../../static/images/home/testImg2.jpg","../../../static/images/home/testImg1.jpg",],
				bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085709729.jpg",bannerTitle:"联系我们"},
				 joinUsHeadImg:"../../../static/images/home/joinUsHeadImg.jpg",
				 aboutImg:"../../../static/images/home/testImg7.jpg",
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
				ecode:"../../static/images/mine/ecode.png",		
				submitData:{
					name:"",
					telephone:"",
					email:"",
					context:""
				}
			}
		},
		methods: {
			formSubmit(){
				if (this.submitData.name && this.submitData.telephone && this.submitData.context) {
					if (!/^[0-9-]+$/.test(this.submitData.telephone)) {
						this.$vux.toast.show({
							text: "请填写正确的手机号码！",
							type: "text",
						})	
						return false;
					}else if(this.submitData.email && !/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.submitData.email)){
						this.$vux.toast.show({
							text: "请填写正确的邮箱！",
							type: "text",
						})	
						return false;						
					}
//					this.$http.post("/userLogin/saveContact", this.submitData
//					).then((res) => {
//						console.log(res);
//						if(res.status == 200 && res.data.rspCode == "00000") {
//							this.$vux.toast.show({
//								text: "信息提交成功,稍后将有工作人员与您联系,请保持电话畅通！",
//								type: "text",
//							})	
//							this.submitData = {
//									name:"",
//									telephone:"",
//									email:"",
//									context:""
//								}
//						}
//					}).catch((err) => {
//						console.log(err);
//					})					
				}else{
					this.$vux.toast.show({
						text: "请填写正确的联系信息！",
						type: "text",
					})					
				}
			},
		},
		components: {
			swiperWork,
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

	.initCont{
		font-size:0.38rem;
		/*padding-top:1rem ;*/
		.swiperCont{
			padding:0 1rem;
		}
		.joinUsHeadImg{
			height: 4.4rem;
			
		}
		
		/*提交用户信息*/
		.formCont{
				.ctt-oneTitle{
					color: #000;
					padding:0.4rem 0 0 0 ;
					text-align: center;
				}
				.ctt-cont{
					
					.cttc-Item{
						padding:0.2rem 0  ;
						display: flex;
						justify-content: center;
						span{
							margin-right: 0.2rem;
							color: red;
							span{
								color: #333;
							}
						}
						.cttcInput{
							width: 80%;
						}
					}
					.cttc-btn{
						flex-direction: column;
						align-items: center;
						font-size: 0.22rem;
						.formSubmit{
							margin-top: 0.1rem;
							font-size: 0.26rem;
							width: 1.8rem;
							height: 0.5rem;
							padding: 0.02rem;
						}
					}
				}
			}

/*联系我们*/
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
</style>
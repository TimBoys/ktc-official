<template>
	<div class="initCont">
		<div class="headerBanner">
			<header-banner :cont="bannerCont"></header-banner>
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
 
 		<!-- 关于我们 -->
		<bottomAboutUs></bottomAboutUs>	
 
	</div>
</template>

<script>
	import { XImg, Flexbox, FlexboxItem, Actionsheet } from 'vux';
	import headerBanner from '../../components/header-banner';
	import bottomAboutUs from '../../components/bottomAboutUs';
	export default {
		name: "applyJoin",
		data() {
			return {
				 bannerCont:{bannerUrl:"http://www.itwaibaow.com/uploadfile/2016/0518/20160518085709729.jpg",bannerTitle:"联系我们"},
				 joinUsHeadImg:"../../../static/images/home/joinUsHeadImg.jpg",
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
				//表单提交 
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

	.initCont{
		font-size:0.38rem;
		margin-top:1rem ;
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


	}
</style>
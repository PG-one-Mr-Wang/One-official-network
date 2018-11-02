<template>
	<div>
		<header-nav :bindImg="bindImg" :id="id"/>
    <!-- 公司介绍部分 -->
		<div class="serve_item bg">
			<div class="credit_product_tit">
				<line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
			</div>
			<div class="flex space-around serve_item_list">
				<div>
					<img src="@/assets/image/img.5.1.png" alt="">
				</div>
				<div class="serve_clause_mar serve_clause">
					<p>	交科信用管理有限公司成立于2017年，注册在浙江杭州，现业务中心在北京，是专门从事交通领域运输、物流、出行、科研等方面信用应用的技术服务商<br><br>

	&emsp;&emsp;公司与交通运输部科学研究院、中国经济信息社（新华信用）、中国物流与采购联合会、国家交通运输物流公共信息平台、中国移动（卓望信息）等机构合作，贯彻国家推进交通信用体系建设有关要求，为政府、企业及行业组织提供交通信用解决方案及运营服务。<br><br>

	&emsp;&emsp;公司依托与交通领域相关政府、行业机构授权的权威数据，结合大数据挖掘、机器学习等技术，自主及联合研发涉及交通信用方面多个服务平台，可提供信用查询、信用报告、背景审查、风险预警、信用监测等多样化服务，同时也可按照信息采集需求，提供物联网设备、通讯传输、信息平台等交通信用数据物联采集技术解决方案。</p>
				</div>
			</div>
		</div>
    <!-- 团队介绍部分 -->
		<div class="serve_item">
			<div class="credit_product_tit">
				<line-tit :newsTit="newsTit2" :smallTit="smallTit2"/>
			</div>
			<div class="serve_item_list">
				<div class="flex design_item justify-center">
					<div class="flex design_item_list space-between">
						<div class="about_design_img">
							<img src="@/assets/image/figure.5.1.jpg" alt="">
						</div>
						<div class="stylist">
							<p class="name">设计师：王女士</p>
							<p class="introduce">产品UI设计师。擅长网站界面的设计，熟知行业属性，体现用户的创意，其作品被称为营销之刃。</p>
						</div>
					</div>

					<div class="flex design_item_list space-between">
						<div class="about_design_img">
							<img src="@/assets/image/figure.5.2.jpg" alt="">
						</div>
						<div class="stylist">
							<p class="name">设计师：陈先生</p>
							<p class="introduce">产品UI设计师。擅长网站界面的设计，熟知行业属性，体现用户的创意，其作品被称为营销之刃。</p>
						</div>
					</div>
				</div>

				<div class="flex justify-center design_item">
					<div class="flex design_item_list space-between">
						<div class="stylist">
							<p class="name">设计师：孙女士</p>
							<p class="introduce">产品UI设计师。擅长网站界面的设计，熟知行业属性，体现用户的创意，其作品被称为营销之刃。</p>
						</div>
						<div class="about_design_img">
							<img src="@/assets/image/figure.5.3.jpg" alt="">
						</div>
					</div>

					<div class="flex design_item_list space-between">
						<div class="stylist">
							<p class="name">设计师：郑女士</p>
							<p class="introduce">产品UI设计师。擅长网站界面的设计，熟知行业属性，体现用户的创意，其作品被称为营销之刃。</p>
						</div>
						<div class="about_design_img">
							<img src="@/assets/image/figure.5.4.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
    <!-- 企业成就部分 -->
		<div class="achievement">
			<div class="achievement_product">
				<p class="achievement_header">企业成就</p>
				<p class="achievement_header_small">COMPANY ACHIEVEMENT</p>
				<p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%。目前，xx集团旗下设有xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
			</div>
			<div>
				<div>
					<img src="@/assets/image/img.5.2.png" alt="">
				</div>
				<div class="flex space-between achievement_time">
					<p>公司成立于杭州萧山区</p>
					<p>6月1日信运查平台正式上线</p>
				</div>
			</div>
		</div>
    <!-- 联系我们部分 -->
		<div class="serve_item bg">
			<div class="credit_product_tit">
				<line-tit :newsTit="newsTit2" :smallTit="smallTit2"/>
			</div>
			<div class="flex justify-center relation">
				<div class="relation_map">
          <map-scaling/>
        </div>
				<div class="relation_list">
					<ul>
						<li class="flex" v-for="item in relationData">
							<div class="relation_list_icon">
								<img :src="item.icon" alt="">
							</div>
							<div>
								<p>{{item.name}}</p>
								<p class="way">{{item.way}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<footer-nav/>
	</div>
</template>
<style scoped>
.credit_product_tit{
	margin: 0 100px;
}
/*团队介绍*/
.serve_item{
  background-color: #f5f5f5;
}
.serve_item_list{
  padding: 40px 100px;
}
.serve_clause{
  margin-right: 30px;
  font-size: 14px;
  color: #4e4e4e;
}
.serve_clause>ul>li{
  margin-top: 20px;
}
.serve_clause_mar{
  text-indent: 28px;
  margin-left: 30px;
}
.bg{
  background-color: #fff;
}
.design_item_list{
  background-color: #fff;
  /*width: 500px;*/
  margin-bottom: 20px;
  height: 310px;
  align-items: center;
  text-align: justify;
}
.design_item_list:nth-child(odd){
  margin-right: 20px;
}
.about_design_img {
  width: 50%;
  height: 310px;
}
.about_design_img img {
  width: 100%;
  height: 100%;
}
.stylist{
  padding: 85px 30px 0;
  width: 50%;
  font-size: 14px;
  color: #666;
  height: 312px;
  border:2px solid #eee;
}
.stylist .name{
  font-size: 16px;
  color: #333;
  font-weight: 600;
  margin-bottom: 20px;
}
/*企业成就*/
.achievement{
	background:url('../assets/image/img.5.3.png') no-repeat center center;
	background-size: 100% 100%;
	padding: 40px 100px 86px 100px;
	color: #fff;
	text-align: center;
}
.achievement_product{
	margin-bottom: 98px;
	font-size: 14px;
	color: #fff;
}
.achievement_header{
	font-weight: 600;
}
.achievement_header_small{
	margin-bottom: 40px;
}
.achievement_time{
	font-size: 18px;
	width: 759px;
	margin: 20px auto;
}
/*联系我们*/
.relation{
	padding: 40px 0;
}
.relation_map{
	margin-right: 10%;
}
.relation_list>ul>li{
	padding: 20px 70px;
	border:1px solid #eee;
	align-items: center;
	margin-bottom: 20px;
	font-size: 14px;
	color: #333;
}
.relation_list_icon{
	margin-right: 30px;
}
.way{
	font-weight: 600;
	margin-top: 10px;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
import mapScaling from '@/map/map';
export default {
  data() {
    return {
      id: 5,
      bindImg: require('@/assets/image/img.5.png'),
      newsTit1: '公司介绍',
      		smallTit1: 'COMPANY INTRODUCTION',
      		newsTit2: '团队介绍',
      		smallTit2: 'TEAM INTRODUCTION',
      		relationData: [
      			{
      				name: '客服电话',
      				way: '400-100-6711 ( 7x24 )',
      				icon: require('@/assets/image/icon.5.1.png')
      			},
      			{
      				name: '销售联系',
      				way: '400-100-6711',
      				icon: require('@/assets/image/icon.5.2.png')
      			},
      			{
      				name: '技术支持',
      				way: 'info@jkcredit.com',
      				icon: require('@/assets/image/icon.5.3.png')
      			},
      			{
      				name: '市场合作',
      				way: 'info@jkcredit.com',
      				icon: require('@/assets/image/icon.5.4.png')
      			}
      		]
    };
  },
  methods: {

  },
  components: {
    headerNav,
    footerNav,
    LineTit,
    mapScaling
  }
};
</script>

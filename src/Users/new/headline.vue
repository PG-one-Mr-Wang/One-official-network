<template>
	<div>
		<header-nav :bindImg="bindImg"/>
		<div class="header_article">
    <my-breadcrumb level1="交科头条" level2="新闻详情"></my-breadcrumb>
			<div class="new_header">
				<div class="flex space-between">
					<div>
						<h3>交通运输行业不断加快信用体系建设 加强市场监管 防范失信风险</h3>
					</div>
					<div class="flex source ">
						<p>来源：交通运输部网站</p>
						<p class="division_line"><span></span></p>
						<p>2018-8-30</p>
					</div>
				</div>
			</div>
			<div class="new_content">
				<div>
					<p>
						日前，记者从交通运输部了解到，交通运输行业加快构建以信用为核心的新型市场监管机制，推动交通运输信用体系建设，信用平台建设、“信用交通”网站运维、联合奖惩以及“信用交通省”创建工作等都取得了较好成效。<br><br>
	&emsp;目前，全国交通运输信用信息共享平台建设各项任务已基本完成，并已通过验收。行业信息得到了有效归集，初步形成行业从业企业和从业人员“一户式”信用档案。系统功能进一步拓展，通过强化数据分析应用，建立了区域交通运输信用指数和行业信用指数，对失信企业和“黑名单”企业实现可视化监测。聚焦企业主体，从“公司基本实力”“工程业绩诚信”“生产经营诚信”“财务健康状况”“安全生产”“社会公信”等维度，建立企业信用画像模型和企业关联图谱，从系统层面加强市场监管，防范失信风险。<br><br>
	&emsp;“信用交通”网站积极发布信息、制作专题、开展访谈，并注重功能开发，提升网站采集发布效率。目前，内蒙古、辽宁、黑龙江、江苏、浙江、福建、江西、河南、湖南、四川、云南、青海等多个省级交通运输部门建成“信用交通”地方子站，有效传播信用体系建设成效。<br><br>
	&emsp;交通运输行业联合奖惩工作取得了新成效，并会同国家发展改革委等部委制定联合惩戒备忘录，同时执行好相应的奖励和惩戒措施。加强联合惩戒信息化建设，在交通运输信用信息共享平台建立奖惩的“发起—响应—反馈”功能，平台获取黑红名单信息后，可发送给各业务司局，在行政许可、行政执法、奖励表彰前进行校验，并将执行结果反馈回平台。做好红黑名单发布工作，在“信用交通”网站发布三批公路超限超载“黑名单”，并将运输物流、民航、安监等领域的“黑名单”一并发布，同时将有关“黑名单”推送至国家信用平台和“信用中国”网站，开展多部门联合惩戒。<br>
	在“信用交通省”创建方面，为进一步落实创建工作，交通运输部组织各地制定创建实施方案。其中，北京市计划出台政务诚信建设指导意见，开展“信用交通·北京”宣传活动；天津市组织市场监管委、中国人民银行天津分行等多家单位联合成立创建领导协调小组，强化创建工作的机构建设、人员和经费保障；黑龙江省将“信用交通省”创建工作逐级落实到市县，并定期组织开展评估；浙江省提出信用记录、共享、规范、文化和保障“5个全覆盖”，制定重点工作责任分解表；贵州省利用国家信用平台（贵州）的数据，建立健全本省交通运输信用数据库等。
					</p>
				</div>
				<div class="new_content_footer">
					<div class="flex source ">
						<p>来源：交通运输部网站</p>
						<p class="division_line"><span></span></p>
						<p>2018-8-30</p>
					</div>
				</div>

			</div>
		</div>
		<footerNav/>
	</div>
</template>
<style scoped>
.header_article{
	padding: 0 80px;
}
.nav_one{
	height: 94px;
	font-size: 14px;
	color: #333;
	display: flex;
	align-items: center;
}
em{
	color: #74cee4;
}
.new_header{
	height: 61px;
	line-height: 61px;
	padding: 0 20px;
	background-color: #e6e6e6;
	margin-bottom: 10px;
}
.new_header h3{
	font-size: 16px;
	color: #333;
}
.source{
	font-size: 14px;
	color: #666
}

.division_line span{
	display: inline-block;
	height: 12px;
	width: 1px;
	background-color: #989898;
	margin: 0 10px;
}
.new_content{
	text-indent: 28px;
	padding: 40px 30px;
	font-size: 14px;
	line-height: 25px;
	color: #333;
	background-color: #fafafa;
	margin-bottom: 40px;
}
.new_content_footer{
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;

}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import MyBreadcrumb from '@//components/MyBreadcrumb';
export default{
  data() {
    return {
      bindImg: require('@/assets/image/img.3.png')
    };
  },
  methods: {

  },
  components: {
    headerNav,
    footerNav,
    MyBreadcrumb
  }
};
</script>

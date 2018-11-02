<template>
	<div>
		<header-nav :bindImg="bindImg" :id="id"/>
		<div class="importance_news">
			<div class="importance_news_tit">
				<line-tit :newsTit="newsTit" :smallTit="smallTit"/>
			</div>
			<div class="importance_news_list">
				<div>
					<ul class="flex wrap space-around">
						<li class="flex" v-for="item in newsList">
							<div class="importance_news_img">
								<img :src="item.imgs" alt="">
							</div>
							<div class="importance_news_article">
								<h3><a :href="item.url">{{item.newsTit}}</a></h3>
								<p><a :href="item.url">{{item.newContent}}</a></p>
							</div>
						</li>
					</ul>
				</div>
				<div class="page_line">
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</div>
		</div>
		<div class="scheme">
      <div class="importance_news_tit">
			<line-tit :newsTit="newsTit1" :smallTit="smallTit"/>
      </div>
			<div class="scheme_list">
				<ul class="flex space-around">
					<li v-for="(list,index) in schemeItem">
						<div class="scheme_center"><div class="scheme_img"></div></div>
						<div class="scheme_tit"><p>{{list.tit}}</p></div>
						<div class="scheme_cont"><p>{{list.content}}</p></div>
					</li>
				</ul>
			</div>
		</div>
		<footer-nav/>
	</div>
</template>
<style scoped>
/*交科要闻*/
.importance_news{
	width: 100%;
	background-color: #fff;
}
.importance_news_tit{
	margin: 0 100px;
}
.importance_news_list{
	padding: 0 80px;
	margin-top: 40px;
}
.importance_news_list div ul li{
	width: 45%;
	margin-bottom: 20px;
}
.importance_news_img{
	width: 165px;
	height: 100px;
	margin-right: 20px;
}
.importance_news_img img{
	width: 100%;

}
.importance_news_article{
	width: 65%;
}
.importance_news_article h3 a{
	font-size: 14px;
	color: #333;
  	overflow: hidden;
  	white-space: nowrap;
  	text-overflow:ellipsis;
}
.importance_news_article p a{
	font-size: 14px;
	color: #808080;
	display: -webkit-box;
  	-webkit-box-orient: vertical;
  	-webkit-line-clamp: 3;
  	overflow: hidden;
}
.page_line{
	text-align: center;
	margin: 40px 0;
}
.page_line>.line{
	display: inline-block;
	background-color: #7cbed4;
	width: 20px;
	height: 2px;
}
/*客户解决方案*/
.scheme{
	background-color: #f5f5f5;
}
.scheme_list{
	text-align: center;
	padding: 40px 80px;
}
.scheme_list>ul>li{
	border:1px solid #ccc;
	margin-right: 20px;
	height: 350px;
	width: 25%;
}

.scheme_list>ul>li:hover {
	border:1px solid #67cae2;
}
.scheme_list>ul>li:nth-child(1) .scheme_center .scheme_img{
	width: 60px;
	height: 60px;
	background: url('../assets/image/icon.2.1.0.png') no-repeat;
}
.scheme_list>ul>li:nth-child(2) .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.2.0.png') no-repeat;
}
.scheme_list>ul>li:nth-child(3) .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.3.0.png') no-repeat;
}
.scheme_list>ul>li:nth-child(4) .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.4.0.png') no-repeat;
}

.scheme_list>ul>li:nth-child(1):hover .scheme_center .scheme_img{
	width: 60px;
	height: 60px;
	background: url('../assets/image/icon.2.1.png') no-repeat;
}
.scheme_list>ul>li:nth-child(2):hover .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.2.png') no-repeat;
}
.scheme_list>ul>li:nth-child(3):hover .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.3.png') no-repeat;
}
.scheme_list>ul>li:nth-child(4):hover .scheme_center .scheme_img{
	width: 70px;
	height: 60px;
	background: url('../assets/image/icon.2.4.png') no-repeat;
}
.scheme_center{
	display: flex;
	justify-content: center;
	margin: 40px 0 36px 0;
}
.scheme_img{

}
.scheme_tit{
	font-size: 14px;
	color: #333;
	margin-bottom: 20px;
	font-weight: 600;
}
.scheme_cont{
	font-size: 12px;
	color: #666;
	padding: 0 20px;
	text-align: left;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
export default{
  data() {
    return {
      id: 2,
      bindImg: require('@/assets/image/img.2.png'),
      newsTit: '交科要闻',
      smallTit: 'IMPORTANCE NEWS',
      newsTit1: '客户解决方案',
      newsList: [
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        },
        {
          imgs: require('@/assets/image/importance_news_img_1.jpg'),
          newsTit: '企业战略调整 外资投资中国信息未改',
          newContent: '法国OC&C战略咨询公司合伙人费萨尔说,卡尼尔撤出中国是正常的商业策略调整。该品牌是法国欧莱雅集团旗下的平价护肤。',
          url: '#'
        }
      ],
      schemeItem: [
        {
          imgs: require('@/assets/image/icon.2.1.0.png'),
          tit: '深海虫技术',
          content: '聚焦爬虫是一个自动下载网页的程序，它根据既定的抓取目标，有选择的访问万维网上的网页与相关的链接，获取所需要的信息。与通用爬虫不同，聚焦爬虫并不追求大的覆盖，而将目标定为抓取与某一特定主题内容相关的网页，为面向主题的用户查询准备数据资源'
        },
        {
          imgs: require('@/assets/image/icon.2.2.0.png'),
          tit: '信息安全技术',
          content: '信息安全可以建立、采取有效的技术和管理手段，保护计算机信息系统和网络内的计算机硬件、软件、数据及应用等不因偶然或恶意的原因而遭到破坏、更改和泄漏，保障信息系统能够连续、正常运行。'
        },
        {
          imgs: require('@/assets/image/icon.2.3.0.png'),
          tit: '区域链技术',
          content: '区块链技术是利用块链式数据结构来验证与存储数据、利用分布式节点共识算法来生成和更新数据、利用密码学的方式保证数据传输和访问的安全、利用由自动化脚本代码组成的智能合约来编程和操作数据的一种全新的分布式基础架构与计算方式。'
        },
        {
          imgs: require('@/assets/image/icon.2.4.0.png'),
          tit: '云服务技术',
          content: '通过使计算分布在大量的分布式计算机上，而非本地计算机或远程服务器中，企业数据中心的运行将与互联网更相似。这使得企业能够将资源切换到需要的应用上，根据需求访问计算机和存储系统。'
        }

      ]
    };
  },
  methods: {

  },
  components: {
    headerNav,
    footerNav,
    LineTit
  }
};
</script>

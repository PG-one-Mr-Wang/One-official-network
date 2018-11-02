<template>
  <div>
    <header-nav :bindImg="bindImg" :id="id"/>
    <!-- 查询平台部分 -->
    <div class="cquery">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
      </div>
      <div class="query_item">
        <div class="flex space-around query_item_list">
          <div class="img_half">
            <img src="@/assets/image/img.4.2.png" alt="">
          </div>
          <div class="query_clause_mar">
            <p>中物联诚信物流平台（简称“诚信物流平台”）是中国物流与采购联合会物流信息平台诚信公约联盟为了推动物流信用信息共享，建立互联网模式下对失信物流从业者的惩戒环境，依据中物联《物流诚信共享信息构成要素及交换要求》团体标准、联盟《诚信名单管理标准》，由联盟秘书处中国物流与采购联合会网络事业部组织建设的物流类信用平台</p>

            <p class="text_top">平台的定位为中国物流行业权威第三方信用查询平台，平台主要是聚合物流行业多维度的诚信数据，通过各类数据处理模型，对数据进行二次加工，结合应用场景，衍生各类数据产品，一方面为政府部门提供建立物流诚信信息的开放、联接、共享机制的依据，同时为物流行业诚信行为提供监管抓手。另外，诚信平台的数据产品通过服务各类行业积累交易数据，为丰富动态诚信监管行为提供有力工具。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 总体架构部分 -->
    <div class="all">
      <h3>总体架构</h3>
      <p>通过数据积累增强平台服务能力，帮助平台汇集更多物流、信用规模化资源积累，形成行业数据引擎，智能化预测，引导跨领域决策。</p>
      <div class="framework">
        <ul>
          <li v-for="item in platformList" :key="item.platform">
            <div class="circular"></div>
            <h4>{{item.introduce}}</h4>
            <h4>{{item.platform}}</h4>
            <div class="strip"></div>
            <p>{{item.platformText}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 平台功能部分 -->
    <div class="platform">
      <div class="title">
        <h3>平台功能</h3>
        <p>平台主要是聚合物流行业多维度的诚信数据，通过各类数据处理模型，对数据进行二次加工，结合应用场景，衍生各类数据产品。</p>
      </div>
      <div class="credit_product_item">
        <ul class="flex space-around wrap">
          <li class="flex" v-for="item in productList">
            <div class="credit_product_img">
              <img src="@/assets/image/icon.4.1.png" alt="">
            </div>
            <div class="credit_product_article">
              <h3>{{item.productTit}}</h3>
              <p>{{item.productText}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 应用场景部分 -->
    <div class="application">
      <div class="scene">
        <h3>应用场景</h3>
        <p>通过各类诚信数据与各类画像建立诚信信用体系，依托此体系与各类应用场景结合实现数字营销的增值服务，打造交通物流垂直行业的安全、开放生疼体系。</p>
      </div>
      <div class="pic">
        <img src="@/assets/image/application.png">
      </div>
    </div>
    <footer-nav/>
  </div>
</template>
<style scoped>
/*查询平台部分*/
.credit_product_tit {
  margin: 0 100px;
}
.query_item {
  padding: 40px 80px;
}
.img_half{
  margin-right: 20px;
}
.query_clause_mar p {
  text-indent:2em;
  font-size: 18px;
}
.text_top {
  padding-top: 40px;
}
/*总体架构部分*/
.all {
  background-color: #fafafa;
  padding: 40px 80px;
  text-align: center;
}
.all h3 {
  font-size: 16px;
}
.all>p {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.all ul {
  display: flex;
}
.all li {
  background-color: #fff;
  margin-right: 12px;
  border: 1px solid #f5f5f5;
}
.all li:hover {
  border: 1px solid #67cae2;
}
.all li:last-child {
  margin: 0;
}
.all li h4 {
  font-size: 16px;
}
.all li p {
  font-size: 16px;
  padding: 0 20px 40px 20px;
  text-align: left;
}
.circular {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #67cae2;
  justify-content:center;
  display: flex;
  margin: 36px auto 30px;
}
.strip {
  height: 4px;
  width: 30px;
  background-color: #67cae2;
  margin: 20px auto;
}
/*平台功能部分*/
.platform {
  padding: 40px 80px;
  background-color: #fff;
}
.title {
  text-align: center;
}
.title h3 {
  font-size: 16px;
}
.title>p {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.credit_product_item>ul>li{
  margin-bottom: 20px;
  align-items: center;
  width: 25%;
  border:1px solid #ccc;
  padding: 30px;
}
.credit_product_img{
  margin-right: 30px;
}
.credit_product_article h3{
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.credit_product_article p {
  font-size: 12px;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
/*应用场景部分*/
.application {
  padding: 40px 80px 60px 80px;
  background-color: #fafafa;
}
.scene {
  text-align: center;
}
.scene h3 {
  font-size: 16px;
}
.scene>p {
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 40px;
}
.pic {
  margin-top: 40px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.pic {
  width: 100%;
  height: 100%;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
export default{
  data() {
    return {
      id: 4,
      bindImg: require('@/assets/image/img.4.png'),
      newsTit1: '查询平台',
      smallTit1: 'QUERY PLATFORM',
      newsTit2: '数据来源',
      smallTit2: 'DATA SOURCES',
      newsTit3: '征信服务',
      smallTit3: 'CREDIT SERVICE',
      newsTit4: '信用服务',
      platformList: [
        {
          introduce: '以诚信体系为支撑的',
          platform: '互动平台',
          platformText: '用户属性及偏好数据、车辆性能数据、地理位置特征数据、企业数据等。'
        },
        {
          introduce: '以产业生态圈为核心的',
          platform: '孵化平台',
          platformText: '构建信用数据产业园，推动政府引导产业资本和金融机构等共同参与。'
        },
        {
          introduce: '以开放能力为基础的',
          platform: '众联平台',
          platformText: '系统对接(TMS/CRM/BI..)推动中小型企业完成信用体系对接。'
        },
        {
          introduce: '以应用场景为引领的',
          platform: '务实平台',
          platformText: '促进信用数据在政府机构、金融信贷、租赁等领域的应用。'
        },
        {
          introduce: '以规范标准引领的',
          platform: '诚信示范平台',
          platformText: '出具各行业信用标准及评估报告，支撑政府进行信用动态监管。'
        }

      ],
      productList: [
        {
          productTit: '综合查询能力.1 ',
          productText: '基本信息&nbsp&nbsp风险信息&nbsp&nbsp知识产权信息&nbsp&nbsp财务信息&nbsp&nbsp舆论分析&nbsp&nbsp公司入驻'
        },
        {
          productTit: '综合查询能力.2',
          productText: '运营车辆查询\t&nbsp;道路许可查询\t\t\t从业许可查询\t\t\t失信上传\t\t\t交通物流类诉讼查询'
        },
        {
          productTit: '信用评分能力',
          productText: '企业信用模型   车辆安全信用模型   司机驾驶信用模型   展示行业地位及排名   权威数据'
        },
        {
          productTit: '资讯发布能力',
          productText: '信运资讯   双公示   红黑榜单'
        },
        {
          productTit: '风险管理能力',
          productText: '企业关注   企业监控   自动提醒   预警查询'
        },
        {
          productTit: '标准化开放能力',
          productText: '丰富多样的API接口   专线支持   快速部署、无缝衔接   在线测试、样例模板'
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

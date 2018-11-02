<template>
  <div>
    <header-nav :bindImg="bindImg" :id="id"/>
    <div class="credit_product">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
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
    <div class="serve_item">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit2" :smallTit="smallTit2"/>
      </div>
      <div class="flex space-around serve_item_list">
        <div class="serve_clause">
          <p>大数据分析的数据来源有很多种，包括公司或者机构的内部来源和外部来源。</p>
          <ul>
            <li v-for="item in serveList">{{item}}</li>
          </ul>
        </div>
        <div>
          <img src="@/assets/image/img.4.1.png" alt="">
        </div>
      </div>
    </div>
    <div class="serve_item bg">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit3" :smallTit="smallTit3"/>
      </div>
      <div class="flex space-around serve_item_list">
        <div>
          <img src="@/assets/image/img.4.2.png" alt="">
        </div>
        <div class="serve_clause_mar serve_clause">
          <p>大数据分析的数据来源有很多种，包括公司或者机构的内部来源和外部来源。</p>
          <ul>
            <li v-for="item in serveList">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="serve_item">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit4" :smallTit="smallTit3"/>
      </div>
      <div class="flex space-around serve_item_list">
        <div class="serve_clause">
          <p>大数据分析的数据来源有很多种，包括公司或者机构的内部来源和外部来源。</p>
          <ul>
            <li v-for="item in serveList">{{item}}</li>
          </ul>
        </div>
        <div>
          <img src="@/assets/image/img.4.3.png" alt="">
        </div>
      </div>
    </div>
    <footer-nav/>
  </div>
</template>
<style scoped>
/*信用产品*/
.credit_product_tit{
  margin: 0 100px;
}
.credit_product_item{
  padding: 40px 80px 20px 80px;
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
/**/
.serve_item{
  background-color: #f5f5f5;
}
.serve_item_list{
  padding: 40px 80px;
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
  margin-left: 30px;
}
.bg{
  background-color: #fff;
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
      newsTit1: '信用产品',
      smallTit1: 'CREDIT PRIDUCTS',
      newsTit2: '数据来源',
      smallTit2: 'DATA SOURCES',
      newsTit3: '征信服务',
      smallTit3: 'CREDIT SERVICE',
      newsTit4: '信用服务',
      productList: [
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里方式拉开的减肥了斯柯达就分手了......'
        },
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里啊啊啊啊啊啊啊啊......'
        },
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里噢噢噢噢哦哦哦哦哦哦......'
        },
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里鹅鹅鹅饿鹅鹅鹅饿......'
        },
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里的的地地道道的的恩的呢......'
        },
        {
          productTit: '运营商数据 ',
          productText: '通过市场营销使客户形成对企业品牌和产品的认知过程，是企业要想不断获得和保持竞争优势，必须构建高品位的营销理念。最高级的营销是利用品牌符号，把无形的营销网络铺建到社会公众心里得得得儿得得得得......'
        }
      ],
      serveList: [
        '1.交易数据。包括POS机数据、信用卡刷卡数据、电子商务数据、互联网点击数据、“企业资源规划”(ERP)系统数据、销售系统数据、客户关系管理(CRM)系统数据、公司的生产数据、库存数据、订单数据、供应链数据等。',
        '2.移动通信数据。能够上网的智能手机等移动设备越来越普遍。移动通信设备记录的数据量和数据的立体完整度，常常优于各家互联网公司掌握的数据。',
        '3.人为数据。人为数据包括电子邮件、文档、图片、音频、视频，以及通过微信、博客、推特、维基、脸书、Linkedin等社交媒体产生的数据流。',
        '4.机器和传感器数据。来自感应器、量表和其他设施的数据、定位/GPS系统数据等。'
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

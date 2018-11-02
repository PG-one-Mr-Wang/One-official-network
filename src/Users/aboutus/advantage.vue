<template>
  <div>
    <header-nav :bindImg="bindImg" :id="id"/>
     <!-- 公司介绍部分 -->
    <div class="serve_item bg">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
      </div>
      <div class="text">服务是为客户提供价值的一种手段,使客户不用承担额外的成本和风险就可获得所期望的结果。</div>
      <div class="product-list">
          <ul>
            <li v-for="item in relationData">
              <img src="@/assets/image/icon.pro.png" alt="交科信用管理有限公司">
              <p class="product-tit">{{item.tit}}</p>
              <p class="product-text">{{item.cont}}</p>
            </li>
          </ul>
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
    <footer-nav/>
  </div>
</template>
<style scoped>
.credit_product_tit{
  margin: 0 100px;
}
.text {
  font-size: 16px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  color: #666666;
}
.product-list ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 100px 46px 100px;
}
.product-list ul li{
  width: 25%;
  text-align: center;
  list-style: none;
}
.product-list img {
  margin-bottom: 16px;
}
.product-tit{
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #4e4e4e;
}
.product-text{
  padding: 0 20px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  font-size: 15px;
  color: #4e4e4e;
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
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';

export default {
  data() {
    return {
      id: 5,
      bindImg: require('@/assets/image/img.5.png'),
      newsTit1: '企业优势',
      smallTit1: 'ENTERPRISE ADVANTAGE',
      newsTit2: '团队介绍',
      smallTit2: 'TEAM INTRODUCTION',
      relationData: [
        {
          tit: '安全数据库',
          cont: '交科信用基于华为云和杭州七灵科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库。',
          icon: require('@/assets/image/icon.pro.png')
        },
        {
          tit: '深海虫技术',
          cont: '交科信用基于华为云和杭州七灵科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库。',
          icon: require('@/assets/image/icon.pro.png')
        },
        {
          tit: '权威数据库',
          cont: '交科信用基于华为云和杭州七灵科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库。',
          icon: require('@/assets/image/icon.pro.png')
        },
        {
          tit: 'API调用',
          cont: '交科信用基于华为云和杭州七灵科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库。',
          icon: require('@/assets/image/icon.pro.png')
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

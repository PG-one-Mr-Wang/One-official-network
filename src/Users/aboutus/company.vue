<template>
  <div>
    <header-nav :bindImg="bindImg" :id="id"/>
    <div class="serve_item bg">
      <!-- <breadcrumb-page/> -->
      <!-- 公司介绍部分 -->
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
      </div>
      <div class="flex space-around serve_item_list">
        <div>
          <img src="@/assets/image/img.5.1.png" alt="">
        </div>
        <div class="serve_clause_mar serve_clause">
          <p> 交科信用管理有限公司成立于2017年，注册在浙江杭州，现业务中心在北京，是专门从事交通领域运输、物流、出行、科研等方面信用应用的技术服务商<br><br>

  &emsp;&emsp;公司与交通运输部科学研究院、中国经济信息社（新华信用）、中国物流与采购联合会、国家交通运输物流公共信息平台、中国移动（卓望信息）等机构合作，贯彻国家推进交通信用体系建设有关要求，为政府、企业及行业组织提供交通信用解决方案及运营服务。<br><br>

  &emsp;&emsp;公司依托与交通领域相关政府、行业机构授权的权威数据，结合大数据挖掘、机器学习等技术，自主及联合研发涉及交通信用方面多个服务平台，可提供信用查询、信用报告、背景审查、风险预警、信用监测等多样化服务，同时也可按照信息采集需求，提供物联网设备、通讯传输、信息平台等交通信用数据物联采集技术解决方案。</p>
        </div>
      </div>
    </div>
    <!-- 团队介绍部分 -->
    <div class="sachievement">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit2" :smallTit="smallTit2"/>
      </div>
      <div class="text">根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%。目前，xx集团旗下设有xx商城、xx金融、拍拍网、xx智能及海外事业部。</div>
      <div class="segmentingline">
        <div class="circle_one"></div>
        <div class="circle_two"></div>
        <div class="pic_one"><img src="@/assets/image/img.ca.2.png"><p class="text_one">6月1日信运查平台正式上线</p></div>
        <div class="pic_two"><img src="@/assets/image/img.ca.1.png"><p class="text_two">公司成立于杭州萧山区</p></div>
      </div>

    </div>
    <!-- 合作伙伴部分 -->
    <div class="win">
      <div class="credit_product_tit">
        <line-tit :newsTit="newsTit3" :smallTit="smallTit3"/>
      </div>
      <div class="cooperation">成为交科信用合作企业，推动交通行业、城市交通物流信用体系建设</div>
      <div class="flex space-around">
        <img src="@/assets/image/1.png" alt="">
        <img src="@/assets/image/2.png" alt="">
        <img src="@/assets/image/3.png" alt="">
        <img src="@/assets/image/4.png" alt="">
      </div>
    </div>
    <footer-nav/>
  </div>
</template>
<style scoped>
.credit_product_tit{
  margin: 0 100px;
}
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
/*企业成就部分*/
.sachievement {
  background-color: #f8f8f8;
  padding-bottom: 34px;
}
.text {
  font-size: 14px;
  color: #4d4d4d;
  text-align: center;
  padding: 30px 200px 0 200px;
}
.segmentingline {
  width: 3px;
  height: 420px;
  background-color: #e5e5e5;
  margin: 42px auto 0;
  position: relative;

}
.segmentingline p {
  font-size: 20px;
  font-weight: 700;
  position: absolute;
}
.circle_one, .circle_two {
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 3px solid #67cae2;
  border-radius: 50%;
  position: absolute;
}
.circle_one {
  top: 110px;
  left: -6px;
}
.circle_two {
  bottom: 110px;
  left: -6px;
}
.pic_one, .pic_two {
  position: absolute;
}
.pic_one {
  top: 82px;
  left: -427px;
}
.pic_two {
  bottom: 76px;
  left: 26px;
}
.text_one {
  top: 25px;
  left: 78px;
}
.text_two {
  top: 25px;
  left: 100px;
}
/*合作伙伴部分*/
.win{
  background-color: #fff;
  padding-bottom: 60px;
}
.win_text{
  text-align: center;
  padding: 60px 0;
  color: #4e4e4e;
}
.win_text .text_big_tit{
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
}
.win_text .text_small_tit{
  font-size: 14px;
}
.cooperation {
  margin-top: 30px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 16px;
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
      newsTit1: '公司介绍',
      smallTit1: 'COMPANY INTRODUCTION',
      newsTit2: '团队介绍',
      smallTit2: 'TEAM INTRODUCTION',
      newsTit3: '合作伙伴',
      smallTit3: 'COOPERATIVE PARTER',
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
    LineTit
  }
};
</script>

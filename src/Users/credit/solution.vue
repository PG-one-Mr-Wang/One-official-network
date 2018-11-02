<template>
    <div>
    <header-nav :bindImg="bindImg" :id="id"/>
    <my-breadcrumb level1="交科信用" level2="客户解决方案"></my-breadcrumb>
      <div class="solution_item bg">
        <div class="flex space-around solution_item_list">
          <div class="img_half">
            <img src="@/assets/image/img.4.2.png" alt="">
          </div>
          <div class="solution_clause_mar solution_clause">
            <h3>深海虫技术</h3>
            <div class="strip"></div>
            <p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
          </div>
        </div>
      </div>

      <div class="solution_item">
        <div class="flex space-around solution_item_list">
          <div class="solution_clause solution_gray">
            <h3>信息安全技术</h3>
            <div class="strip"></div>
            <p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
          </div>
          <div class="img_half">
            <img src="@/assets/image/img.4.3.png" alt="">
          </div>
        </div>
      </div>

      <div class="solution_item bg">
        <div class="flex space-around solution_item_list">
          <div class="img_half">
            <img src="@/assets/image/img.4.2.png" alt="">
          </div>
          <div class="solution_clause_mar solution_clause">
            <h3>区块链技术</h3>
            <div class="strip"></div>
            <p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
          </div>
        </div>
      </div>

      <div class="solution_item">
        <div class="flex space-around solution_item_list">
          <div class="solution_clause solution_gray">
            <h3>云服务技术</h3>
            <div class="strip"></div>
            <p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
          </div>
          <div class="img_half">
            <img src="@/assets/image/img.4.3.png" alt="">
          </div>
        </div>
      </div>

      <div class="solution_item bg">
        <div class="flex space-around solution_item_list">
          <div class="img_half">
            <img src="@/assets/image/img.4.2.png" alt="">
          </div>
          <div class="solution_clause_mar solution_clause">
            <h3>物联网技术</h3>
            <div class="strip"></div>
            <p>根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。</p>
          </div>
        </div>
      </div>
    <footer-nav/>
    </div>
</template>
<style scoped>
/*交科要闻*/
.crumbs {
  margin: 40px 0;
  margin-left: 80px;
  background-color: #fff;
  font-size: 14px;
  color: #000;
}
.solution_item{
  background-color: #fff;
}
.solution_item_list{
  padding: 40px 80px;
}
.solution_clause{
  border: 1px solid #eeeeee;
  padding: 70px 60px;
  color: #4e4e4e;
  width: 50%;
}
.solution_clause>h3{
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}
.solution_clause>p{
  font-size: 16px;
  color: #4e4e4e;
}
.solution_clause_mar{
  border: 1px solid #eeeeee;
  padding: 70px 60px;
  background-color: #fff;
}
.img_half {
  width: 50%;
}
.img_half img {
  width: 100%;
  height: 100%;
}
.strip{
  width: 32px;
  height: 4px;
  background-color: #67cae2;
  margin: 35px 0;
}
.solution_gray {
  background-color: #f5f5f5;
}
.bg{
  background-color: #f5f5f5;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
import MyBreadcrumb from '@/components/MyBreadcrumb';
export default{
  data() {
    return {
      id: 2,
      bindImg: require('@/assets/image/img.2.png'),
      newsList: [
        {
          id: 1,
          imgs: require('@/assets/image/img.4.2.png'),
          technicalType: '深海虫技术',
          newContent: '根据第三方市场研究公司艾瑞咨询的数据，xx是中国最大的自营式电商企业，2014年在中国自营式电商市场的占有率为49%，目前，xx集团旗下设有的xx商城、xx金融、拍拍网、xx智能及海外事业部。',
          url: '#'
        }

      ],
      schemeItem: [
        // {
        //   imgs:require('../assets/image/icon.2.1.0.png'),
        //   tit:"深海虫技术",
        //   content:"聚焦爬虫是一个自动下载网页的程序，它根据既定的抓取目标，有选择的访问万维网上的网页与相关的链接，获取所需要的信息。与通用爬虫不同，聚焦爬虫并不追求大的覆盖，而将目标定为抓取与某一特定主题内容相关的网页，为面向主题的用户查询准备数据资源"
        // },
        // {
        //   imgs:require('../assets/image/icon.2.2.0.png'),
        //   tit:"信息安全技术",
        //   content:"信息安全可以建立、采取有效的技术和管理手段，保护计算机信息系统和网络内的计算机硬件、软件、数据及应用等不因偶然或恶意的原因而遭到破坏、更改和泄漏，保障信息系统能够连续、正常运行。"
        // },
        // {
        //   imgs:require('../assets/image/icon.2.3.0.png'),
        //   tit:"区域链技术",
        //   content:"区块链技术是利用块链式数据结构来验证与存储数据、利用分布式节点共识算法来生成和更新数据、利用密码学的方式保证数据传输和访问的安全、利用由自动化脚本代码组成的智能合约来编程和操作数据的一种全新的分布式基础架构与计算方式。"
        // },
        // {
        //   imgs:require('../assets/image/icon.2.4.0.png'),
        //   tit:"云服务技术",
        //   content:"通过使计算分布在大量的分布式计算机上，而非本地计算机或远程服务器中，企业数据中心的运行将与互联网更相似。这使得企业能够将资源切换到需要的应用上，根据需求访问计算机和存储系统。"
        // }

      ]
    };
  },
  methods: {

  },
  components: {
    headerNav,
    footerNav,
    LineTit,
    MyBreadcrumb
  }
};
</script>

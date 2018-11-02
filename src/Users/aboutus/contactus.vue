<template>
  <div>
    <header-nav :bindImg="bindImg" :id="id"/>

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

/*联系我们*/
.credit_product_tit {
  margin: 0 100px;
}
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
      newsTit2: '联系我们',
      smallTit2: 'CONTACT US',
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

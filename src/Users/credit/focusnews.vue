<template>
  <div class="big">
    <header-nav :bindImg="bindImg" :id="id"/>
    <my-breadcrumb level1="交科信用" level2="交科要闻"></my-breadcrumb>
     <div class="article_list">
      <ul>
        <li v-for="item in articleList">
          <div class="flex focus_news">
            <div class="article_list_img">
              <img :src="item.img" alt="">
            </div>
            <div class="new_article_list grow-1">
              <h3>
                <a :href="item.url">{{item.tit}}</a>
                <img src="@/assets/image/icon.go.png" alt="">
              </h3>
              <p class="new_article_cont article_list_cont">
                <a :href="item.url">{{item.cont}}</a>
              </p>
              <p class="time">{{item.time}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <page-bar class="nav_bar"/>
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

.article_list{
  padding: 0 80px 60px 80px;
}
.article_list>ul>li{
  margin-bottom: 20px;
  min-width: 950px;
  background-color: #fafafa;
  height: 160px;
}
.focus_news {
  height: 160px;
  border: 1px solid #e6e6e6;
}
.new_article_list{
  padding: 20px 22px;
  font-size: 12px;
  background-color: #fafafa;
}
.new_article_list>h3{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.new_article_list>h3>a{
  font-size: 14px;
  color: #333;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.newsdetail {
  border: 1px solid #e6e6e6;
  height: 160px;
}
.article_list_img{
  width: 22%;
  height: 160px;
}
.article_list_img img{
  width: 100%;
  height: 100%;
}
.grow-1 {
  width: 78%;
}
.article_list_cont a{
  font-size: 14px;
  color: #808080;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.time{
  margin-top: 16px;
}
.nav_bar {
  margin-bottom: 62px;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
import MyBreadcrumb from '@/components/MyBreadcrumb';
import PageBar from '@/components/paging';
export default{
  data() {
    return {
      id: 2,
      bindImg: require('@/assets/image/img.2.png'),
      articleList: [
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '信用交通网站公布失信黑名单1326个',
          cont: '诚实守信是社会生活的“通行证”。社会诚信正在逐步形成全社会共识。近日，《法制日报》赴一线采访深切感受到各地在创建“信用交通省”过程中，加强信用信息公开共享、加大信用信息归集力度、推进信用联合奖惩，不断发挥信用在行业治理、加强事中事后监管、维护市场秩序等方面的重要作用，大力健全和完善诚信交通建设体系。',
          url: '#',
          time: '2018-08-28'
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
    MyBreadcrumb,
    PageBar
  }
};
</script>

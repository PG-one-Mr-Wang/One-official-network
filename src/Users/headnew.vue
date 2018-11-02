<template>
  <div class="big">
    <header-nav :bindImg="bindImg" :id="id"/>
    <div class="new_head">
      <div class="flex tit_nav justify-center">
        <p class="nav_text">行业时事</p>
        <p class="nav_text">政策法规</p>
      </div>
      <div class="flex new_article space-between">
        <div class="new_article_item" v-for="item in newTime">
          <div class="new_article_img">
            <img :src="item.img" alt="">
          </div>
          <div class="new_article_list">
            <h3>
              <a :href="item.url">{{item.tit}}</a>
              <img src="@/assets/image/icon.go.png" alt="">
            </h3>
            <p class="new_article_cont"><a :href="item.url">{{item.cont}}</a></p>
            <p class="time">{{item.time}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="article_list">
      <ul>
        <li v-for="item in articleList">
          <div class="flex focus_news">
            <div class="article_list_img">
              <img :src="item.img" alt="">
            </div>
            <div class="new_article_list grow-1">
              <h3><a :href="item.url">{{item.tit}}</a><img src="@/assets/image/icon.go.png" alt=""></h3>
              <p class="new_article_cont article_list_cont"><a :href="item.url">{{item.cont}}</a></p>
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
/*行业模范*/

.new_head{
  margin-bottom: 40px;
}
.tit_nav{
  height: 70px;
  align-items: center;
  padding: 0 70px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  justify-content:center;

}
.nav_text{
  display: flex;
  align-items: center;
  width: 45%;
  min-width: 600px;
  justify-content: center;
  line-height: 70px;
}
.nav_text:hover{
  background-color: #67cae2;
  /*opacity: .8;*/
}
.new_article{
  margin: 40px 80px;
  /*border-bottom: 1px solid #eee;*/
  min-width: 600px;
}
.new_article_item{
  width: 50%;
  min-width: 600px;
  /*max-width: 600px;*/
}
.new_article_item:first-child{
  border: 1px solid #67cae2;
  margin-right: 40px;
}
.new_article_img img{
  width: 100%;
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
.new_article_cont a{
  font-size: 12px;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 20px;
}
.time {
  margin-top: 20px;
}
/*分割线*/
.line {
  border-top: 2px solid #e5e5e5;
  margin: 0 80px;
}
/*文章列表*/
.article_list{
  padding: 40px 80px 60px 80px;
}
.article_list>ul>li{
  margin-bottom: 20px;
  min-width: 950px;
  background-color: #fafafa;
  height: 160px;
}
.focus_news {
  height: 160px;
}
.news_article_list{
  padding: 20px 22px;
  font-size: 12px;
  background-color: #fafafa;
  /*width: 240px;*/
  /*height: 160px;*/
}
.news_article_list>h3{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.news_article_list>h3>a{
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
.nav_bar {
  margin-bottom: 62px;
}
</style>
<script>
import headerNav from '@/components/header';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
import PageBar from '@/components/paging';
export default{
  data() {
    return {
      id: 3,
      bindImg: require('@/assets/image/img.3.png'),
      newTime: [
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '/new/headline',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        }
      ],
      articleList: [
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        },
        {
          img: require('@/assets/image/img.4.1.png'),
          tit: '交通部：推进交通运输信用体系建设',
          cont: '交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库',
          url: '#',
          time: '2018-08-28'
        }
      ]
    };
  },
  beforeMount() {
    // this.getlist();
  },
  methods: {
    getList() {
      // 模拟
      let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`;
      this.$http.get(url)
        .then(({data}) => {
          // 子组件监听到count变化会自动更新DOM
          this.count = body.count;
          this.items = body.list;
        });
    },
    pageChange (page) {
      this.currentPage = page;
      this.getList();
    }
  },
  components: {
    headerNav,
    footerNav,
    LineTit,
    PageBar
  }
};
</script>

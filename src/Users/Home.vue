<template>
  <div>
      <!-- 导航部分 -->
    <header-nav :bindImg="bindImg" :id="id" :slides="slides" :inv="invTime"/>
    <!-- 信用产品部分 -->
    <div class="product">
      <div class="product_details">
        <line-tit :newsTit="newsTit1" :smallTit="smallTit1"/>
        <div class="product-list">
          <ul>
            <li v-for="item in productList">
              <img src="@/assets/image/icon.pro.png" alt="交科信用管理有限公司">
              <p class="product-tit">{{item.tit}}</p>
              <p class="product-text">{{item.cont}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 优势 -->
    <div class="advantage flex space-around">
      <div class="advantage_item">
        <div class="advantage_list list1"></div>
        <div class="content content-front">
          <div><img src="@/assets/image/img.1.1.0.png" alt=""></div>
          <div class="advantage_line"></div>
          <div><p class="advantage_tit">安全数据库</p></div>
          <div><p class="advantage_cont">交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库</p></div>
          <div>
            <span class="bor">优势1</span>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="advantage_item">
        <div class="advantage_list list2"></div>
        <div class="content content-front">
          <div><img src="@/assets/image/img.1.2.0.png" alt=""></div>
          <div><i class="advantage_line"></i></div>
          <div><p class="advantage_tit">安全数据库</p></div>
          <div><p class="advantage_cont">交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库</p></div>
          <div>
            <span class="bor">优势2</span>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="advantage_item">
        <div class="advantage_list list3"></div>
        <div class="content content-front">
          <div><img src="@/assets/image/img.1.3.0.png" alt=""></div>
          <div class="advantage_line"></div>
          <div><p class="advantage_tit">安全数据库</p></div>
          <div><p class="advantage_cont">交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库</p></div>
          <div>
            <span class="bor">优势3</span>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="advantage_item">
        <div class="advantage_list list4"></div>
        <div class="content content-front">
          <div><img src="@/assets/image/img.1.4.0.png" alt=""></div>
          <div class="advantage_line"></div>
          <div><p class="advantage_tit">安全数据库</p></div>
          <div><p class="advantage_cont">交科信用基于华为云和杭州七炅科技的智能加密技术，打造全新的数据库防火墙加密程序，为您提供最安全稳定的数据库</p></div>
          <div>
            <span class="bor">优势4</span>
          </div>
        </div>
        <div class="bg"></div>
      </div>
    </div>
    <!-- 新闻咨询部分 -->
    <div class="news">
      <div class="news_consultation">
        <line-tit :newsTit="newsTit2" :smallTit="smallTit2"/>
        <div class="news_content">
          <ul class="flex space-around">
            <li v-for="item in newsList" :key="item.Id">
              <div class="important_news flex space-between">
                <h4>{{item.Type}}</h4>
                <a href="#">
                  <div class="new_img flex">
                    <span>更多</span>
                    <img src="@/assets/image/icon.more.png" alt="交科信用管理有限公司">
                  </div>
                </a>
              </div>
              <div class="product_img"><img :src="'http://172.31.1.10:8080/'+ item.Photo"></div>
              <div class="content_one">
                <h5><a :href="item.articleurl">{{item.NewName}}</a></h5>
                <p><a :href="item.articleurl">{{item.Describe}}</a></p>
              </div>
              <div class="content_two">
                <ul>
                  <li v-for="list in item.NewLists">
                    <a :href="item.Url" class="flex space-between">
                      <span class="article_list">{{list.NewName}}</span>
                      <span class="time">{{list.Date}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
   <!--  携手共赢 -->
    <div class="win">
      <div class="win_text">
        <p class="text_big_tit">携手共赢，与权威合作伙伴共建交通物流信用体系</p>
        <p class="text_small_tit">成为交科信用合作企业，推动交通行业，城市交通物流体系建设</p>
      </div>
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
<script type="text/javascript">
import headerNav from '@/components/headerlunbo';
import footerNav from '@/components/footer';
import LineTit from '@/components/line';
import $ from 'jquery';
export default {
  data() {
    return {
      id: 1,
      invTime: 3000,
      seen: false,
      newsTit1: '信用产品',
      smallTit1: 'CREDIT PRIDUCTS',
      newsTit2: '新闻资讯',
      smallTit2: 'NEWS INFORMATION',
      bindImg: require('@/assets/image/img.1.png'),
      slides: [
        {
          src: require('@/assets/image/img.1.png'),
          href: 'detail/count'
        },
        {
          src: require('@/assets/image/img.6.png'),
          href: 'detail/forecast'
        }
      ],
      productList: [
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        },
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        },
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        },
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        },
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        },
        {
          tit: '企业认证',
          cont: '通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息通过对企业名称、产品名称、注册地址、股东高管以及行业领域的关键词查询，可以迅速获取企业的异常经营信息、庭审信息'
        }
      ],
      newsList: [
        // {
        //   tit:"交科要闻",
        //   img:require("@/assets/image/img.new.1.png"),
        //   articletit:"广州首届创新驱动发展战略咨询会举行",
        //   articlecont:"在咨询会上为广州实现创新驱动建言献策。加快顶层设计，构建富有活力的科技体质创新机制，尽快出台中国广州",
        //   articleurl:"/Home",
        //   articleList:[
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"}
        //   ]
        // },
        //  {
        //   tit:"行业时事",
        //   img:require("@/assets/image/img.new.2.png"),
        //   articletit:"广州首届创新驱动发展战略咨询会举行",
        //   articlecont:"在咨询会上为广州实现创新驱动建言献策。加快顶层设计，构建富有活力的科技体质创新机制，在咨询会上为广州实现创新驱动建言献策。加快顶层设计，构建富有活力的科技体质创新机制，尽快出台中国广州构建富有活力的科技体质创新机制，尽快出台中国广州",
        //   articleurl:"/Home",
        //   articleList:[
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"}
        //   ]
        // },
        //  {
        //   tit:"政策法规",
        //   img:require("@/assets/image/img.new.3.png"),
        //   articletit:"广州首届创新驱动发展战略咨询会举行",
        //   articlecont:"在咨询会上为广州实现创新驱动建言献策。加快顶层设计，构建富有活力的科技体质创新机制，尽快出台中国广州",
        //   articleurl:"/Home",
        //   articleList:[
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"},
        //     {tit:"企业战略调整外资投资中国信心未改",url:"/Home",time:"2018-7-24"}
        //   ]
        // }
      ]
    };
  },
  components: {
    headerNav,
    footerNav,
    LineTit
  },
  methods: {
    async loadData() {
      const response = await this.$http.get('newinfo');
      console.log(response.data);
      if (response.data.Code === 200) {
        this.newsList = response.data.Message;
      }
    },
    add() {
      var content_arr = [];// 定义一个空数组
      var content = '';
      $('.product-text').each(function() { // 遍历box内容
        content = $.trim($('.product-text').text());// 去掉前后文空格
        content_arr.push(content);// 内容放进数组
      });
      for (var i = 0; i < content_arr.length; i++) { // 遍历循环数组
        if (content_arr[i].length >= 50) { // 如果数组长度（也就是文本长度）大于等于50（数字可自己定义）
          content = content_arr[i].substr(0, 50) + '...';// 添加省略号并放进box文字内容后面
          $('.product-text').text(content);
        } else {
          content = content_arr[i];
          $('.product-text').text(content);
        }
      }
    }
  },
  beforeMount() {
    this.loadData();
  },
  mounted() {
    this.add();
  }
};
</script>

<style scoped>
/*信用产品部分*/
.product_details{
  margin: 0 80px;
}

.product-list ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product-list ul li{
  width: 26%;
  text-align: center;
  list-style: none;
}
.product-list ul li img{
  margin: 40px 0 20px 0;
}
.product-tit{
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #4e4e4e;
}
.product-text{
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 12px;
  color: #4e4e4e;
}
/*优势部分*/
.advantage{
  padding: 0 40px;
  margin-top: 60px;
  background-color: #333;
  height: 500px;
}
.advantage_list{
  color: #fff;
  text-align: center;
  height: 500px;
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
  -ms-filter: blur(2px);
  filter: blur(2px);
}

.list1{
  background: url(../assets/image/img.bg.1.png) no-repeat;
  background-size: 100% 100%;

}
.list2{
  background: url(../assets/image/img.bg.2.png) no-repeat;
  background-size: 100% 100%;
}
.list3{
  background: url(../assets/image/img.bg.3.png) no-repeat;
  background-size: 100% 100%;
}
.list4{
  background: url(../assets/image/img.bg.4.png) no-repeat;
  background-size: 100% 100%;
}
.advantage_item{
  position: relative;
  width: 25%;
}
.bg{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all .5s;
}
.advantage_item:hover .content{
  padding-top:106px;
  transition: all .5s;
  z-index: 10;
}
.advantage_item:hover .advantage_cont{
  opacity: 1;
  transition: all .5s;
}
.advantage_item:hover .bg{
  background-color: #08b6cf;
  transition: all .5s;
  opacity: .8;
  z-index:1;
}
.advantage_item:hover .advantage_line{
  opacity: 0;
  transition: all .5s;
}
.content{
  width: 100%;
  color: #ffffff;
  font-size:14px;
  position: absolute;
  left:0;
  top: 0;
  padding-top: 150px;
  text-align: center;
  overflow: hidden;
  transition: all .5s;
}
.advantage_line{
  display: inline-block;
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 24px 0;
  opacity: 1;
  transition: all .5s;
}
.bor{
  display: inline-block;
  width: 100px;
  height: 34px;
  line-height: 34px;
  border:1px solid #fff;
}
.advantage_tit{
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
}
.advantage_cont{
  padding:0 20px;
  margin-bottom: 40px;
  opacity: 0;
  transition: all .5s;
}
/*新闻咨询部分*/
.news{
  padding: 0 80px;
  background-color: #f5f5f5;
}
.product_img img{
  width: 100%;
  margin-bottom: 20px;
  height: 170px;
}
.new_img span{
  font-size:14px;
  color: #4e4e4e;
  margin-right: 10px;
}
.important_news{
  padding: 18px 20px;
  margin-bottom: 10px;
  background-color: #fff;
  border-top: 4px solid #42cfe7;
}
.important_news>h4{
  font-size: 16px;
  color: #4e4e4e;
  font-weight: 600;
}

.news_content>ul>li {
    margin: 40px 20px 0 0;
    width: 30%;
}
.content_one{
  border-bottom: 1px solid #b9b3b3;
  padding-bottom: 20px;
}
.content_one>h5>a{
  font-size: 14px;
  color: #333;
  margin-bottom: 14px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.content_one>p>a{
  font-size: 12px;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.content_two{
  padding: 20px 0 40px 0;
}
.content_two>ul>li>a{
  font-size: 12px;
  color: #333;
}
.article_list{
  width: 75%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
.gobeyond {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/*携手共赢部分*/
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
</style>

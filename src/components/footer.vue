<template>
  <div class="footer">
    <div class="blogroll">
      <ul class="flex justify-center">
        <li>友情链接</li>
        <li><a href="#">数据平台</a></li>
        <li><a href="#">信易查</a></li>
      </ul>
    </div>
    <div class="footer_nav">
      <ul class="flex justify-center">
        <li v-for="item in footer"><a :href="item.Url">{{item.NavigationName}}</a></li>
      </ul>
    </div>
    <div class="contact">
      <p>邮箱:kf@zhixin.nets&emsp;联系电话:95125125&emsp;地址:北京市朝阳区辉新西街紫光发展大厦B1座</p>
    </div>
    <div class="put_on">
      <p>交科信用管理有限公司 浙ICP备17047972号</p>
    </div>
    <div class="two">
      <img src="../assets/image/WechatIMG137.png" alt="">
      <p>微信公众号</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      footer: [
        {
          nav: '首页',
          url: 'index'
        },
        {
          nav: '交科信用',
          url: 'jiaoke'
        },
        {
          nav: '交科头条',
          url: 'jiaoketoutiao'
        },
        {
          nav: '产品服务',
          url: 'chanpinfuwu'
        },
        {
          nav: '关于我们',
          url: 'guanyuwomen'
        }
      ]
    };
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const response = await this.$http.get('navigation');
      // console.log(response)
      if (response.status === 200) {
        this.footer = response.data.Message;
      }
    }
  }
};
</script>

<style type="text/css" scoped>
.footer{
  position: relative;
  text-align: center;
  background-color: #333;
  padding:44px 0;
}
.footer div{
  margin-bottom: 10px;
}
.blogroll>ul>li{
  color: #ccc;
  padding: 0 20px;
}
.blogroll>ul>li:first-child{
  border-right: 1px solid #ccc;
}
.blogroll>ul>li>a{
  color: #ccc;
}
.blogroll>ul>li>a:hover{
  color: #67cae2;
}
.footer_nav>ul>li>a{
  font-size: 12px;
  color: #ccc;
  padding: 0 20px;
}
.footer_nav>ul>li{
  border-right: 1px solid #ccc;
}
.footer_nav>ul>li:last-child{
  border-right: none;
}
.put_on,.contact{
  font-size: 12px;
  color: #999;
}
.two{
  position: absolute;
  right: 50px;
  top: 45px;
  color: #fff;
}
</style>

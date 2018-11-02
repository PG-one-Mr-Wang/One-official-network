<template>
	<div>
		<div class="header">
			<div class="nav">
	        	<img src="../assets/image/jk.logo.png" alt="交科信用管理有限公司">
				<div class="navigation">
		      <ul>
		        <li v-for="(item, index) in header" @click="chooseSelection(index)">
		          <router-link :to="item.Url">
                <el-dropdown>
								  <span class="el-dropdown-link" :class="[{active:id === item.Index}]">
								    {{item.NavigationName}}
								  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="list in item.TwoNavigation">
                      <router-link :to="list.Url">{{list.NavigationName}}</router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
		          </router-link>
            </li>
		      </ul>
		    </div>
	    </div>
       <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div class="biaoti">信用数据，通行依据</div>
              <div class="miaosu">为交通行业、城市交通信用提供一站式解决方案及运营服务</div>
              <img src="../assets/image/img.1.png" class="lunboone">
          </div>
          <div class="swiper-slide">
              <div class="biaoti">信用信息，风险预警，新闻舆情查询</div>
              <div class="miaosu">依托交通相关政府部委、行业机构、数据运营商，数据源权威可靠</div>
              <img src="../assets/image/img.2.png" class="lunbotwo">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination flex"></div>
      </div>

	    </div>
	</div>
</template>
<style scoped>
.header {
  width: 100%;
  height: 590px;
  background: url(../assets/image/bg.1.png);
  position: relative;
}
.nav{
	display: flex;
	justify-content: space-between;
	height: 60px;
	width: 100%;
	border-bottom: 2px solid #394450;
}
.nav img {
	margin: 10px 146px 10px 100px;
}
.navigation{
	display: flex;
	align-items: center;
}
.navigation ul{
	display: flex;
}
.navigation ul li{
	margin-right: 100px;
}
.navigation ul li a{
	font-size: 16px;
	color: #fff;
}
.navigation ul li:hover a .el-dropdown-link{
	color: #67cae2;
}
.bind-text{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 528px;
}
.bind-text h3{
	font-size: 48px;
	color: #fff;
	margin:0 0 50px 80px;
}
.bind-text p{
	font-size: 24px;
	color: #fff;
	margin-left: 80px;
	white-space: nowrap;
}

.el-dropdown-menu {
	background-color: rgba(0,0,0,0.5);
	border:none;
}
.el-dropdown-menu li a{
	color: #fff;
}
.el-dropdown-menu li:hover{
	background-color: #666;
}
.el-dropdown-menu li:hover a{
	background-color: #666;
	color: #fff;
}
.el-dropdown-link{
	color: #fff;
}
.navigation ul li .active{
	color: #67cae2;
}

</style>
<style type="text/css">
  /*轮播图*/
.swiper-container {
  height: 530px !important;
  position: relative !important;
}
.swiper-slide {
  position: relative !important;
}
.swiper-slide>.biaoti,.miaosu {
  color: #fff !important;
  position: absolute !important;
}
.swiper-slide>.biaoti {
  left: 80px !important;
  top: 190px !important;
  font-size: 46px !important;
  font-weight: 700 !important;
}
.swiper-slide>.miaosu {
  left: 80px !important;
  bottom: 220px !important;
  font-size: 24px !important;
  font-weight: 700 !important;
}
.swiper-slide>img {
  position: absolute !important;
}
.swiper-slide .lunboone{
  bottom: 100px !important;
  right: 60px !important;
  width: 520px !important;
  height: 350px !important;
}
.swiper-slide .lunbotwo{
  bottom: 70px !important;
  right: 80px !important;
  width: 500px !important;
  height: 350px !important;
}
.swiper-container>.swiper-pagination{
  position: absolute !important;
  right: 50% !important;
  top: 505px !important;
}
.swiper-container>.swiper-pagination>span{
  font-size: 0 !important;
}
.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 6px 10px !important;
}
.swiper-pagination-bullet{
  background:#767a7d !important;
  width: 40px !important;
  height: 6px !important;
  border-radius: 0 !important;
}
.swiper-pagination-bullet-active{
  background:#fff !important;
  width: 40px !important;
  height: 6px !important;
  border-radius: 0 !important;
}
</style>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default{
  data() {
	    return {
	    	isShow: true,
	    	nowIndex: 0,
	      header: []
	    };
  },
  methods: {
    async loadData () {
      const response = await this.$http.get('navigation');
      // console.log(response)
      if (response.data.Code === 200) {
        this.header = response.data.Message;
      }
    },
    chooseSelection (index) {
      this.nowIndex = index;
      console.log(index);
    },
    goto (index) {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
      }, 300);
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  props: {
    bindImg: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    },
    slides: {
      type: Array, // 数据类型
      default: [] // 默认值
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  beforeMount() {
    this.loadData();
  },
  mounted () {
    this.runInv();
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true, // 设置自动循环播放
      direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
      }
    });
  }
};
</script>

<template>
	<div>
		<div class="header">
			<div class="nav">
	        	<img src="../assets/image/jk.logo.png" alt="交科信用管理有限公司">
				<div class="navigation">
		          <ul>
		            <li v-for="(item, index) in header" :key="item.id" @click="chooseSelection(index)">
		            	<router-link :to="item.Url">
							<el-dropdown>
								<span class="el-dropdown-link" :class="[{active:id === item.Index}]">
								    {{item.NavigationName}}
								</span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item v-for="list in item.TwoNavigation" :key="list.id">
                    <router-link :to="item.Url + list.Url">{{list.NavigationName}}</router-link>
                  </el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>
		            	</router-link></li>
		          </ul>
		        </div>
	    	</div>
	    	<div class="bind-text">
	    		<div>
	    			<h3>信用数据，通行依据</h3>
      				<p>为交通行业、城市交通信用提供一站式解决方案及运营服务</p>
	    		</div>
	    		<div>
	    			<img :src="bindImg" alt="交科信用管理有限公司">
	    		</div>
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
.bind-text div img{
	margin-right: 60px;
  width: 450px;
  height: 330px;
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
<script>
export default{
  data() {
	    return {
	    	nowIndex: 0,
	      	header: []
	    };
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    async loadData () {
      const response = await this.$http.get('navigation');
      // console.log(response)
      if (response.status === 200) {
        this.header = response.data.Message;
      }
    },
    chooseSelection (index) {
      this.nowIndex = index;
      console.log(index);
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
    }
  }
};
</script>

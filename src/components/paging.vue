<template>
	<div class="page-bar">
		<ul class="flex justify-center">
	        <li v-if="cur>1"><a @click="cur--,pageClick()">上一页</a></li>
	        <li v-if="cur==1"><a class="banclick">上一页</a></li>
	        <li v-for="index in indexs"  v-bind:class="{ 'active': cur == index}">
	            <a v-on:click="btnClick(index)">{{ index }}</a>
	        </li>
	        <li v-if="cur!=all"><a @click="cur++,pageClick()">下一页</a></li>
	        <li v-if="cur == all"><a class="banclick">下一页</a></li>
	        <li><a class="" @click="backpage()">尾页</a></li>
	        <li><a>共<i>{{all}}</i>页</a></li>
	    </ul>
	</div>
</template>
<style>
.page-bar li:first-child>a {
   margin-left: 0px
}
.page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
}
.page-bar a:hover{
    background-color: #eee;
}
.page-bar a.banclick{
    cursor:not-allowed;
}
.page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
}
.page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
</style>
<script>
export default{
  data() {
    return {
      all: 8, // 总共有多少页
      cur: 1	// 当前页面
    };
  },
  props: {
	        // 页面中的可见页码，其他的以...替代, 必须是奇数
	        perPages: {
	            type: Number,
	            default: 5
	        },

	        // 当前页码
	        pageIndex: {
	            type: Number,
	            default: 1
	        },

	        // 每页显示条数
	        pageSize: {
	            type: Number,
	            default: 10
	        },

	        // 总记录数
	        total: {
	            type: Number,
	            default: 1
	        }
	    },
  watch: {
	        cur(oldValue, newValue) {
		            console.log(arguments);
		        }
	    },
	    methods: {
	        btnClick(data) { // 页码点击事件
	            if (data != this.cur) {
	                this.cur = data;
	                // 父组件通过change方法来接受当前的页码
                	this.$emit('change', this.index);
	            }
	        },
	        pageClick() {
	            // console.log('现在在'+this.cur+'页');
	        },
	        backpage() {
	        	this.cur = this.all;
	        }
	    },
	    computed: {
	        indexs() {
	          let left = 1;
	          let right = this.all;
	          let ar = [];
	          if (this.all >= 5) {
	            if (this.cur > 3 && this.cur < this.all - 2) {
	                    left = this.cur - 2;
	                    right = this.cur + 2;
	            } else {
	                if (this.cur <= 3) {
	                    left = 1;
	                    right = 5;
	                } else {
	                    right = this.all;
	                    left = this.all - 4;
	                }
	            }
	         }
	        while (left <= right) {
	            ar.push(left);
	            left++;
	        }
	        return ar;
	       }
	    }
};
</script>

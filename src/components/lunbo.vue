<template>
	<div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
		<div class="slide-img">
			<a :href="slides[nowIndex].href">
				<transition name="slide-trans">
					<img v-if="isShow" :src="slides[nowIndex].src">
				</transition>
				<transition name="slide-trans-old">
					<img v-if="!isShow" :src="slides[nowIndex].src">
				</transition>
			</a>
		</div>
		<ul class="slide-pages">
			<li v-for="(item, index) in slides" @click="goto(index)">
				<a :class="{on: index === nowIndex}"><div class=""></div></a>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.slide-trans-enter-active {transition: all 1s;}
	.slide-trans-enter {transform: translatey(10px);}
	.slide-trans-old-leave-active {transition: all 1s;opacity:0;}
	.slide-img {width: 100%;}
	.slide-img img {width: 100%;position: absolute;top: 0;}
	.slide-show {position: relative;width: 97%;height:500px;margin: 0 auto;overflow: hidden;margin-bottom: 20px;}
	.slide-pages {position: absolute;list-style: none;bottom: 10px;right: 15px;}
	.slide-pages li {display: inline-block;color: #fff;margin: 0 5px;cursor: pointer;}
	.slide-pages li a{display: inline-block;width: 20px;height: 2px;background-color: #666;}
	.slide-show h2 {position: absolute;bottom: 4px;color: #fff;background-color: #000;opacity: .5;height: 30px;width: 100%;padding-left: 15px;display: flex;align-items: center;}
	.slide-pages li .on {background-color: #fff;}
</style>
<script>
export default {
  // 通过props绑定静态数据
  props: {
    slides: {
      type: Array, // 数据类型
      default: [] // 默认值
    },
    inv: {
      type: Number,
      default: 2000
    }
  },

  data() {
    return {
      isShow: true,
      nowIndex: 0
    };
  },
  // 通过computed机算属性
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
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
  mounted () {
    this.runInv();
  }
};
</script>

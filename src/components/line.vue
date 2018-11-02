<template>
	<div>
		<div class="title">
          <div class="product-flex">
            <div class="line"></div>
            <p>{{newsTit}}</p>
            <div class="line"></div>
          </div>
          <div>{{smallTit}}</div>
        </div>
	</div>
</template>
<style scoped>
.title{
  text-align: center;
  padding-top: 60px;
  font-size: 16px;
  color: #4e4e4e
}
.product-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line{
  height: 2px;
  background-color: #e6e6e6;
  width: 45%;
}
</style>
<script>
export default{
  data() {
	    return {};
  },
  props: {
    newsTit: {
      type: String,
      default: ''
    },
    smallTit: {
      type: String,
      default: ''
    }
  }
};
</script>

<template>
  <div class="baidumap" id="allmap">
    </div>
</template>
<script>
import BMap from 'BMap';
import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';
export default{
  mounted () {
    this.baiduMap();
  },
  methods: {
    baiduMap () {
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(116.430168, 39.987091);
      var marker = new BMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point, 18);
      map.enableScrollWheelZoom(true);
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: '交科信用管理有限公司' // 信息窗口标题
      };
      var infoWindow = new BMap.InfoWindow('地址：北京市朝阳区惠新东街11号紫光发展大厦B1座802室', opts); // 创建信息窗口对象
      marker.addEventListener('click', function() {
        map.openInfoWindow(infoWindow, point); // 开启信息窗口
      });
    }
  }
};
</script>
<style type="text/css">
  #allmap {width: 655px;height: 424px;overflow: hidden;margin:0;font-family:"微软雅黑";}
  #l-map{height:100%;width:78%;float:left;border-right:2px solid #bcbcbc;}
  #r-result{height:100%;width:20%;float:left;}
 </style>

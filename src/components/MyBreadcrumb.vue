<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="crumbs">
    <el-breadcrumb-item >您的位置 : </el-breadcrumb-item>
    <el-breadcrumb-item> {{level1}} </el-breadcrumb-item>
    <el-breadcrumb-item> <div style="color: #67cae2">{{level2}}</div> </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script type="text/javascript">
export default{
  name: 'MyBreadcrumb',
  props: ['level1', 'level2']
};
</script>

<style type="text/css">

</style>

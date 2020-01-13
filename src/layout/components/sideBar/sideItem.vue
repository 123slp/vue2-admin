<template>
  <div class="menu-wapper">
      <template v-if="!item.children">
        <el-menu-item :index="item.menuCode">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.menuName}}</span>
        </el-menu-item>
      </template>
      <el-submenu v-else :index='item.menuCode'>
          <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.menuName}}</span>
            </template>
          <sideItem
            v-for="(child,index) in item.children"
            :key="index"
            :item="child"/>
      </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'sideItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.el-submenu__title{
    color:rgb(191, 203, 217)
}
</style>

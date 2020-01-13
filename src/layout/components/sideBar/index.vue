<template>
    <div class="sideBar">
        <el-menu
        default-active="1"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        mode="vertical"
        >
            <sideItem v-for="(item,index) in menuList" :key="index" :item="item"/>
        </el-menu>
    </div>
</template>

<script>
import menuList from './menu'
import sideItem from './sideItem'
export default {
  name: 'sideBar',
  components: {
    sideItem
  },
  data () {
    return {
      menuList,
      isCollapse: true
    }
  },
  methods: {
    handleClose (key, keypath) {
      console.log('close', key, keypath)
    },
    handleOpen (key, keypath) {
      console.log('open', key, keypath)
    }
  }
}
</script>

<style lang="less" scoped>
.sideBar{
    flex-shrink: 0;
    width: 210px;
    background: rgb(48, 65, 86);
    height: 100%;
    overflow-y: auto;
    .el-menu{
        width: 100%;
        background: none;
        border: none;
    }
}
</style>

<template>
  <div class="app-wrapper">
      <sideBar/>
      <div class="main-container">
        <navBar />
        <appMain/>
      </div>
  </div>
</template>
<script>
import { sideBar, navBar, appMain } from './components'
export default {
  name: 'AppWrapper',
  components: {
    appMain, navBar, sideBar
  },
  data () {
    return {
      drawer: false
    }
  }

}
</script>
<style lang="less" scoped>
.app-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  .main-container{
    flex:1;
    overflow-x: scroll;
  }
}
</style>

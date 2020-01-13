<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style lang='less'>
@import '~@/style/index.less';
#app {
  color: @pink;
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div class="navBar">
      <hamburger :is-active="sideStatus" class="hamburger-container" @toggleClick="toggleSideBar"/>
      <breadCrumb id="breadcrumb-container" class="breadcrumb-container" />
  </div>
</template>

<script>
import breadCrumb from '@/components/breadCrumb'
import hamburger from '@/components/hamburger'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'navBar',
  components: {
    breadCrumb, hamburger
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['sideStatus'])
  },
  methods: {
    ...mapActions(['updateSideStatus']),
    toggleSideBar () {
      this.updateSideStatus()
    }
  }
}
</script>

<style lang='less' scoped>
.navBar{
    height: 50px;
    display: flex;
    background: #ccc;
}
</style>

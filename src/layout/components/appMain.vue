.<template>
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
        <!-- include - 字符串或正则表达式。只有名称匹配的组件会被缓存。 -->
            <keep-alive :include='str'>
                <router-view :key="key" />
            </keep-alive>
        </transition>
    </section>
</template>
<script>
export default {
  name: 'app-main',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    str () {
      return 'aaa'
    },
    key () {
      return this.$route.path
    }
  }
}
</script>
<style lang='less' scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  color: @pink;
  background: #000;
}
</style>

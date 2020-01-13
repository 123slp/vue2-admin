<template>
    <div class="userManage">
        视频 {{date}}
    </div>
</template>
<script>
export default {
  name: 'userManage',
  data () {
    return {
      date: this.format(new Date())
    }
  }
}
</script>

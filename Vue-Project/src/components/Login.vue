<template>
  <div class="login">
     <div class="toplinelog">
        <i class="backlog" v-on:click="goback"></i>
        <span class="talktipslog">登录</span>
     </div>
     <div class="contentlog">
        这是一个神奇的登录页面，什么都没有，哈哈哈哈哈！！！
     </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style media="screen">
  #app {
    margin-top: 0!important;
  }
  .toplinelog {
    position: relative;
    height: 4rem;
    width: 100%;
    background-color: #2684F0;
  }
  .backlog {
    position: absolute;
    display: block;
    height: 2rem;
    width: 2rem;
    background: url(../assets/back.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .talktipslog {
    position: absolute;
    top: 35%;
    left: 20%;
    font-size: 2.2rem;
    color: #fff;
  }
</style>

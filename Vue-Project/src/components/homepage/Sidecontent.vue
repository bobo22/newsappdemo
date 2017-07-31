<template>
<div class="sidecontent">
  <div class="leftcontent">
    <div class="login">
      <span class="login-icon"></span>
      <span class="login-text" @click="login()">请登录</span>
    </div>

    <div class="itemchoose">
      <span class="mycollect-icon">

            </span>
      <span class="mycollect-text">
              我的收藏
            </span>
      <span class="download-icon">

          </span>
      <span class="download-text">
            离线下载
          </span>
    </div>

    <div class="typechoose">
        <ul class="typechooselist">
          <li class="choosed">
            <span class="homepageicon"></span>
            <span class="homepagetext">首页</span>
          </li>
          <li class="typelist" v-for='item in childMsg' @click="intype(item.id)">
            <div class="left-text">
              {{item.name}}
            </div>
          </li>
        </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'sidecontent',
  data () {
    return {
      typelist: null
    }
  },
  props: ['childMsg'],
  methods: {
    intype (id) {
      this.$router.push({name: 'newstype', params: {id: id}})
    },
    login () {
      this.$router.push('login')
    }
  }
}
</script>
<style media="screen">
.sidecontent {
  z-index: 20;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}

.leftcontent {
  float: left;
  width: 70%;
  height: 100%;
  background-color: #fff;
}

.login {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #2684F0;
}

.login-icon {
  flex: 0 1 2rem;
}

.login-text {
  font-size: 2.6rem;
  color: #fff;
}

.itemchoose {
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #2684F0;
  margin-top: -1px;
}

.mycollect-icon {
  background: url(../../assets/favorite.png);
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10px;
  height: 12px;
  width: 12px;
}
.mycollect-text {
  flex: 0 1 30%;
  font-size: 2.6rem;
  font-weight: normal;
  color: #fff;
}
.download-icon {
  background: url(../../assets/download.png);
  background-size: 100% 100%;
  margin-left: 10%;
  margin-right: 10px;
  height: 12px;
  width: 12px;
}
.download-text {
  flex: 0 1 30%;
  font-size: 2.6rem;
  font-weight: normal;
  color: #fff;
}

.choosed {
  background-color: #f5f5f5;
}
.homepageicon {
  display: inline-block;
  background: url(../../assets/homepage.png);
  background-size: 100% 100%;
  margin-left: 10%;
  height: 1.4rem;
  width: 1.4rem;
}
.homepagetext{
  font-size: 2.6rem;
  flex: 0 1 30%;
  margin-left: 1rem;
  color: #2684F0;
}
.typechooselist {
  height: calc(100vh - 8rem);
  overflow: scroll;
}
.choosed{
  display: flex;
  height: 3rem;
  align-items: center;
}
.typelist {
  height: 3.2rem;
  line-height: 3.2rem;
  padding: 0 1rem;
  font-size: 2.6rem;
}

</style>

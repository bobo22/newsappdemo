<template>
  <div class="news">
     <div class="topline">
        <i class="back" v-on:click="goback"></i>
        <i class="share myicon" @click="share()"></i>
        <i class="collect myicon" @click="collect()"></i>
        <i class="abouttalk myicon"></i>
        <span class="talktips">{{extrainfo.comments}}</span>
        <i class="aboutgood myicon" @click="good()"></i>
        <span class="goodtips">{{extrainfo.popularity}}</span>
     </div>
     <img v-bind:src="newsinfo.image" alt="" class="topimg">
     <div class="content" v-html="newsinfo.body">

     </div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox, Toast } from 'mint-ui'
export default {
  name: 'news',
  data () {
    return {
      newsinfo: {
        body: ''
      },
      extrainfo: {
        comments: '',
        popularity: ''
      }
    }
  },
  methods: {
    getnewsinfo () {
      axios.get('/api/4/news/' + this.$route.params.id)
        .then(response => {
          console.log(JSON.stringify(response))
          this.newsinfo = response.data
          this.addcss(this.newsinfo.css)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getextrainfo () {
      axios.get('/api/4/story-extra/' + this.$route.params.id)
        .then(response => {
          console.log(JSON.stringify(response))
          this.extrainfo = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    addcss (cssurl) {
      var cssSource = document.createElement('link')
      cssSource.href = cssurl
      cssSource.type = 'text/css'
      document.getElementsByTagName('head')[0].appendChild(cssSource)
      window.location.refresh()
    },
    goback () {
      this.$router.go(-1)
    },
    share () {
      MessageBox.alert('分享功能暂未开放', '温馨提示')
    },
    collect () {
      MessageBox.alert('登录模块还没完成，敬请期待', '温馨提示')
    },
    good () {
      Toast('+1')
    }
  },
  created () {
    this.getnewsinfo()
    this.getextrainfo()
  }
}
</script>
<style media="screen">
  #app {
    margin-top: 0!important;
  }
  .topline {
    position: relative;
    height: 4rem;
    background-color: #2684F0;
  }
  .back {
    position: absolute;
    display: block;
    height: 2rem;
    width: 2rem;
    background: url(../assets/back.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  .myicon {
    position: absolute;
    display: block;
    height: 1.4rem;
    width: 1.4rem;
  }
  .share {
    background: url(../assets/share.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }
  .collect {
    background: url(../assets/favorites.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
  }
  .abouttalk {
    background: url(../assets/edit.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 70%;
    transform: translateY(-50%);
  }
  .talktips {

    position: absolute;
    top: 35%;
    left: 78%;
    font-size: 2.2rem;
    color: #fff;
  }
  .aboutgood {
    background: url(../assets/good.png) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 85%;
    transform: translateY(-50%);
  }
  .goodtips {
    position: absolute;
    top: 35%;
    left: 92%;
    font-size: 2.2rem;
    color: #fff;
  }
  .topimg {
    width: 100%;
  }
</style>

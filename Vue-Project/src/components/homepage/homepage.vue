<template>
<div id="app">
  <toptips father-component="app"></toptips>
  <transition name="slide-fade">
    <sidecontent father-component="app" v-if="show" :child-msg="typelist"></sidecontent>
  </transition>
  <div class="rightmask" v-if="rightshow" v-on:click="change">

  </div>
  <div class="galleryslider">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for='item in toplist'><img v-bind:src="item.image" alt=""></swiper-slide> <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
  <div class="newstips">
    今日新闻
  </div>
  <ul class="newslist">
    <li class="newsoption" v-for='item in items' @click="checkdetail(item.id)">
      <div class="left-text">
        {{item.title}}
      </div>
      <img v-bind:src="item.images[0]" alt="">
    </li>
  </ul>
</div>
</template>

<script>
import Toptips from './Toptips.vue'
import Sidecontent from './Sidecontent.vue'
import axios from 'axios'
import Bus from '../../../correspond/rightside.js'

export default {
  name: 'app',
  components: {
    Toptips, Sidecontent
  },
  data () {
    return {
      items: null,
      toplist: null,
      typelist: null,
      show: false,
      rightshow: false,
      swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        height: 150,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart (swiper) {
          console.log(swiper)
        }
          // more Swiper configs and callbacks...
          // ...
      }
    }
  },
  methods: {
    requestnews () {
      axios.get('/api/4/news/latest')
        .then(response => {
          console.log(JSON.stringify(response))
          this.items = response.data.stories
          this.toplist = response.data.top_stories
        })
        .catch(error => {
          console.log(error)
        })
    },
    checkdetail (id) {
      this.$router.push('newsinfo/' + id)
    },
    change () {
      this.rightshow = false
      this.show = false
    },
    getthemelist () {
      axios.get('/api/4/themes')
        .then(response => {
          console.log(JSON.stringify(response))
          this.typelist = response.data.others
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  created () {
    this.getthemelist()
    this.requestnews()
    Bus.$on('showleftcontent', () => {
      this.show = true
      setTimeout(() => {
        this.rightshow = true
      }, 600)
    })
  }
}
</script>

<style scope>
* {
  margin: 0;
  padding: 0;
}

#app {
  margin-top: 4rem;
}

.galleryslider {
  height: 150px;
}
.galleryslider img {
  width: 100%;
  height: 100%;
}
.swiper-container {
  height: 150px;
}

.newstips {
  background-color: #f5f5f5;
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  font-size: 2.6rem;
}

.newslist {
  padding: 10px;
  background-color: #f5f5f5;
  overflow: scroll;
  height: calc(100vh - 254px);
}

.newsoption {
  margin-bottom: 5px;
  padding: 10px;
  height: 4rem;
  font-size: 2.6rem;
  background-color: #fff;
  overflow: hidden;
}

.left-text {
  width: 80%;
  float: left;
}

.newsoption img {
  float: right;
  width: 18%;
  height: 100%;
}

.slide-fade-enter-active {
  transition: all .5s linear;
}
.slide-fade-leave-active {
  transition: all .5s linear;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-50%);
}
.slide-fade-enter-to {
  transform: translateX(0%);
}
.rightmask {
  z-index: 30;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30%;
  background-color: #000;
  opacity: 0.5;
}
</style>

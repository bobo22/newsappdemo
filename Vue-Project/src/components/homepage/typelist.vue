<template>
<div id="typelist">
  <toptips father-component="app"></toptips>
  <transition name="slide-fade">
    <sidecontent father-component="app" v-if="show" :child-msg="typelist"></sidecontent>
  </transition>
  <div class="rightmask" v-if="rightshow" v-on:click="change">

  </div>
  <div class="imgbg">
      <div class="desc">
          {{description}}
      </div>
      <img v-bind:src="chooseimg" alt="">
  </div>
  <div class="newstips">
    主编
  </div>
  <ul class="newslist">
    <li class="newsoption" v-for='item in items' @click="checkdetail(item.id)">
      <div class="left-text">
        {{item.title}}
      </div>
      <img v-bind:src="item.images" alt="">
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
  name: 'typelist',
  components: {
    Toptips, Sidecontent
  },
  data () {
    return {
      items: null,
      typelist: null,
      chooseimg: null,
      description: null,
      show: false,
      rightshow: false
    }
  },
  methods: {
    requestnews () {
      axios.get('api/4/theme/' + this.$route.params.id)
        .then(response => {
          console.log(JSON.stringify(response))
          this.items = response.data.stories
        })
        .catch(error => {
          console.log(error)
        })
    },
    gettopinfo () {
      axios.get('api/4/theme/' + this.$route.params.id)
        .then(response => {
          console.log(JSON.stringify(response))
          this.items = response.data.stories
        })
        .catch(error => {
          console.log(error)
        })
    },
    checkdetail (id) {
      this.$router.push({name: 'newsinfo', params: {id: id}})
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
          for (let arr of response.data.others) {
            console.log(arr)
            if (arr.id === parseInt(this.$route.params.id)) {
              this.chooseimg = arr.thumbnail
              this.description = arr.description
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  watch: {
    '$route' (to, from) {
      this.getthemelist()
      this.requestnews()
      this.rightshow = false
      this.show = false
    }
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

.imgbg {
  position: relative;
  width: 100%;
  height: 150px;
}
.desc {
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #fff;
  font-size: 2.6rem;
}
.imgbg img {
  width: 100%;
  height: 100%;
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
  height: calc(100vh - 200px);
}

.newsoption {
  margin-bottom: 10px;
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

</style>

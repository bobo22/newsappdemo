<template>
<div class="toptips">
  <div class="topblock">
    <span class="bgcommon funlist" @click="showleft()"></span>
    <span class="homepage">{{msg}}</span>
    <span class="bgcommon person" @click="open()"></span>
    <span class="bgcommon module" @click="baseinfo()"></span>
  </div>
</div>
</template>

<script>
import Bus from '../../../correspond/rightside.js'
import { MessageBox } from 'mint-ui'

export default {
  name: 'toptips',
  data () {
    return {
      msg: '首页'
    }
  },
  methods: {
    showleft () {
      Bus.$emit('showleftcontent')
    },
    open () {
      MessageBox.alert('该功能暂未开放', '温馨提示')
    },
    baseinfo () {
      MessageBox.confirm('bobo学习demo', 'study by libo')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0
}
.toptips {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
}

.topblock {
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 4rem;
  background-color: #2684F0;
}

.homepage {
  font-size: 2.8rem;
  margin-left: 5rem;
  color: #fff;
}

.bgcommon {
  position: absolute;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
}

.funlist {
  left: 2rem;
  top: 50%;
  background: url(../../assets/Category.png) no-repeat;
  background-size: 100% 100%;
  margin-top: -0.8rem;
}

.person {
  top: 50%;
  right: 4rem;
  background: url(../../assets/bussiness-man.png) no-repeat;
  background-size: 100% 100%;
  margin-top: -1rem;
}

.module {
  top: 50%;
  right: 1rem;
  background: url(../../assets/information.png) no-repeat;
  background-size: 100% 100%;
  margin-top: -1rem;
}
</style>

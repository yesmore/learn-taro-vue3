<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    {{ state.msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">点我</nut-button>
    </view>
    <Counter />
    <nut-toast
      :msg="state.msg"
      v-model:visible="state.show"
      :type="state.type"
      :cover="state.cover"
    />

    <nut-button @click="goRequest">跳转接口测试页面</nut-button>
    <nut-button @click="goCss">跳转样式测试页面</nut-button>
    <nut-button @click="goPinia">跳转Pinia测试页面</nut-button>
    <nut-button @click="goNutUi">跳转NutUi测试页面</nut-button>
  </view>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import Taro from '@tarojs/taro'
import Counter from '@/components/Counter.vue'

const state = reactive({
  msg: '欢迎使用 NutUI3.0 开发小程序',
  msg2: '你成功了～',
  type: 'text',
  show: false,
  cover: false,
})

const handleClick = (type, msg, cover = false) => {
  state.show = true
  state.msg2 = msg
  state.type = type
  state.cover = cover
}

const goRequest = () => {
  Taro.navigateTo({ url: '/pages/featureA/request/index' })
}
const goCss = () => {
  Taro.navigateTo({ url: '/pages/featureA/css/index' })
}
const goPinia = () => {
  Taro.navigateTo({ url: '/pages/featureA/index/index' })
}
const goNutUi = () => {
  Taro.navigateTo({ url: '/pages/featureA/nutui/index' })
}

// return {
//   ...toRefs(state),
//   handleClick
// }
</script>

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

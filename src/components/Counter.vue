<template>
  <view>
    <text class="title">{{ counter.number }}</text>
    <view class="button" @tap="onAdd">ADD</view>
  </view>
</template>

<script>
import { useCounter } from '@/stores/count'

export default {
  setup() {
    const counter = useCounter()

    const onAdd = () => {
      counter.number++

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    }

    return {
      counter,
      onAdd,
    }
  },
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>

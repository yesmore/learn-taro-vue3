// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'

export const useCounter = defineStore('counter', {
  id: 'counter',
  /** 状态 */
  state: () => ({
    number: 0,
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.number++
    },
    add(number: number) {
      this.number += number
    },
  },
})

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })

import { defineStore } from 'pinia'

export const countStore = defineStore('count', {
  state: () => {
    return {
      counter: 0
    }
  },
  actions: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  }
})

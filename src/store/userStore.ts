import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state: () => ({ name: 'codexu', age: 18 }),
  getters: {},
  actions: {}
})

export default useUserStore

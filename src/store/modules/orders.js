import {
  setLocalStorage,
  getLocalStorage,
  getLocalStorageInt
} from '@/utils/local_Storage'
  
const state = {
  orderType: getLocalStorage(
    'order_type',
  ),
  orderActiveStep: 0,
  orderSteps: [
    'orderType',
    'orderConfig',
  ],
}
  
const getters = {
  orderType: (state) => state.orderType,
  orderActiveStep: (state) => state.orderSteps[state.orderActiveStep]
}
  
const actions = {
  saveOrderType: ({ commit }, data) => {
    setLocalStorage('order_type', data)
    commit('setOrderType', data)
  },
  orderNextStep: ({commit, state}) => {
    commit('setNextStep', state.orderActiveStep + 1)
  },
  orderPreviousStep: ({commit, state}) => {
    commit('setPreviousStep', state.orderActiveStep - 1)
  }
}
  
const mutations = {
  setOrderType: (state, value) => state.orderType = value,
  setNextStep: (state, value) => (state.orderActiveStep = value),
  setPreviousStep: (state, value) => (state.orderActiveStep = value),
}
  
export default {
  state,
  getters,
  actions,
  mutations,
}
  
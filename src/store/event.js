export const state = {
  event: {
    name: '',
    data: null
  }
}

const mutations = {
  // 更新state的函数一
	// 参数：state，上面的state
	// 参数：event，新的数据
  emit(state, event) {
    state.event = event
  }
}

// 最后统一导出
export default {
  namespaced: true,
  state,
  mutations
}
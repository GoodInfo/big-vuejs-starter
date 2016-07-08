const state = {
  step: 0
}

// mutations
const mutations = {
  'LIVEVIDEO/SET_STEP' (state, number) {
    state.step = number
  }
}

export default {
  state,
  mutations
}

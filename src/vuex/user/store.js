const state = {
  authenticated: true
}

// mutations
const mutations = {
  'USER/SET_AUTHENTICATE' (state, authenticated) {
    state.authenticated = authenticated
  },
  'USER/LOGOUT' (state) {
    state.authenticated = false
  }
}

export default {
  state,
  mutations
}

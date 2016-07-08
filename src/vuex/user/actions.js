import ls from './../../services/ls'
import userServide from './../../services/user'

export const logout = ({dispatch, state}) => {
  ls.remove('jwt-token')
  dispatch('USER/LOGOUT')
}

export const login = ({dispatch, state}) => {
  userServide.getToken().then((response) => {
    if (response.data) {
      ls.set('jwt-token', response.data.token)
      dispatch('USER/SET_AUTHENTICATE', true)
    } else {
      dispatch('USER/SET_AUTHENTICATE', false)
    }
  }, () => {
    dispatch('USER/SET_AUTHENTICATE', false)
  })
}

export const checkAuth = ({dispatch, state}) => {
  const token = ls.get('jwt-token')
  if (token) {
    dispatch('USER/SET_AUTHENTICATE', true)
  } else {
    dispatch('USER/SET_AUTHENTICATE', false)
  }
}

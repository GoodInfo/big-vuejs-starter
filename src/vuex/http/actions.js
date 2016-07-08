import NProgress from 'nprogress'
import ls from './../../services/ls'
import {logout} from './../user/actions'

export const jwtTokenInterceptor = ({dispatch, state}, request, next) => {
  const token = ls.get('jwt-token')
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`
  }
  NProgress.start()
  next((response) => {
    NProgress.done()
    if (response.status === 400 || response.status === 401) {
      if (request.method !== 'POST' && request.url !== 'me/token') {
        logout({dispatch, state})
      }
    }

    if (response.headers && response.headers.Authorization) {
      ls.set('jwt-token', response.headers.Authorization)
    }

    if (response.data && response.data.token && response.data.token.length > 10) {
      ls.set('jwt-token', response.data.token)
    }
  })
}

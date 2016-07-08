import ls from 'local-storage'

export default {
  get (key, defaultVal = null) {
    const val = ls(key)
    if (val) {
      return val
    }
    return defaultVal
  },

  set (key, val) {
    return ls(key, val)
  },

  remove (key) {
    return ls.remove(key)
  }
}

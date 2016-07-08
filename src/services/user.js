import Vue from 'vue'
export default{
  /**
   * Log a user in.
   *
   */
  getToken () {
    return Vue.http.get('me/token')
  },

  /**
   * Log the current user out.
   *
   * @param  {Function} cb The callback.
   */
  logout () {
    return Vue.http.delete('me', {})
  }
}

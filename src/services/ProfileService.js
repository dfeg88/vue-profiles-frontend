import Api from '@/services/Api'

export default {
  post (profile) {
    return Api().post('profile', profile)
  },
  getAll () {
      return Api().get('profiles')
  }
}
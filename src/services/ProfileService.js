import Api from '@/services/Api'

export default {
  post (profile) {
    return Api().post('profile', profile)
  },
  getAll () {
      return Api().get('profiles')
  },
  delete (profileId) {
    return Api().delete(`profile/${profileId}`)
  },
  get (id) {
    return Api().get(`profile/${id}`)
  },
  update (profile) {
    return Api().put('profile', profile)
  }
}
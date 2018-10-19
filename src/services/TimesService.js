import Api from '@/services/Api'

export default {
  getTimes() {
    return Api().get('/current-times')
  }
}
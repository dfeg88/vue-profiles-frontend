import Api from '@/services/Api'

export default {
  get() {
    return Api().get('/actuator/health')
  }
}
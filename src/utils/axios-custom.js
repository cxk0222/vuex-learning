import axios from 'axios'
import config from '../../config'

axios.defaults.baseURL = config.baseUrl
axios.defaults.headers.common['X-LC-Id'] = config.appId
axios.defaults.headers.common['X-LC-Key'] = config.appKey

export default axios

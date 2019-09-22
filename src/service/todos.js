import axios from '@/utils/axios-custom'

export class TodosService {
  static async getTodos() {
    const endPoint = '/todos'
    try {
      const res = await axios.get(endPoint)
      // 根据后端返回的数据进行处理
      const todos = res.data.results[0].data
      return { ok: true, todos }
    } catch (error) {
      return { ok: false, error: 'error' } 
    }
  }
}

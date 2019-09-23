import axios from '@/utils/axios-custom'

export class TodosService {
  static async getTodos() {
    const endPoint = '/checkboxs'
    try {
      const res = await axios.get(endPoint)
      const todos = res.data.results[0].data
      return { ok: true, todos }
    } catch (error) {
      return { ok: false, error: 'error' } 
    }
  }
}

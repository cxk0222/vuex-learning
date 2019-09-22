import axios from '@/utils/axios-custom'

export class TodosService {
  static async getTodos() {
    const endPoint = '/todos'
    try {
      const res = await axios.get(endPoint)
      // console.log('res', res)
      // 根据后端返回的数据进行处理
      const todos = res.data.results[0].data
      return { ok: true, todos }
    } catch (error) {
      return { ok: false, error: 'error' } 
    }
  }
}

// export class XxService {
//   static async getYy() {
//     const endPoints = ''
//     try {
//       const res = await axios.get(endPoint)
      
//       return { ok: true,  }
//     } catch (error) {
//       return { ok: false, error: 'error' }
//     }
//   }
// }

import { AppState } from '../AppState'
import router from '../router'
import { api } from './AxiosService'

class BlogsService {
  async getAll() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
  }

  async create(data) {
    const res = await api.post('api/blogs', data)
    router.push({ name: 'Blog', params: { id: res.data.id } })
  }
}
export const blogsService = new BlogsService()

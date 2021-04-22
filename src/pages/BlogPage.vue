<template>
  <div class="blogs">
    <div class="row">
      <div class="col  py-3">
        <h1>Blog</h1>
        <button title="Open Create Job Form"
                type="button"
                class="btn btn-outline-success"
        >
          <i class="fas fa-plus" aria-hidden="true">
            Add Blog
          </i>
        </button>
      </div>
    </div>
    <div class="row">
      <!-- inject blogs here -->
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import Notification from '../utils/Notification'

export default {
  name: 'BlogsPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await blogsService.getAll(route.params.id)
      } catch (error) {
        Notification.toast('error:' + error, 'error')
      }
    })

    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>

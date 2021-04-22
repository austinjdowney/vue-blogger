<template>
  <div class="account text-center" v-if="state.activeProfile">
    <!-- Render the active profile picture and name -->
    <div class="col-12 project-header">
      <div class="d-flex">
        <img class="rounded-circle" :src="state.account.picture" alt="Creator image">
        <div class="ml-3 d-flex flex-column justify-content-center">
          <h3 class="text-secondary">
            {{ state.account.name }}
          </h3>
          <h3 class="m-0">
            Blogs: PUT ACTIVE NUMBER OF BLOGS
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div class="row m-5">
    <form class="form-group" @submit.prevent="create" v-if="state.user.isAuthenticated && state.activeProfile === state.account.id">
      <label for="blog title">Blog Title</label>
      <input type="text"
             name="title"
             id="title"
             class="form-control"
             placeholder="Blog Title..."
             aria-describedby="helpId"
             v-model="state.newBlog.title"
      >
      <label for="blog body">Blog Body</label>
      <input type="text"
             name="body"
             id="body"
             class="form-control"
             placeholder="Blog Body..."
             aria-describedby="helpId"
             v-model="state.newBlog.body"
      >
      <label for="imgUrl">Image Url</label>
      <input type="text"
             name="imgUrl"
             id="imgUrl"
             class="form-control"
             placeholder="Image Url..."
             aria-describedby="helpId"
             v-model="state.newBlog.imgUrl"
      >
      <button title="Open Create Job Form"
              type="submit"
              class="btn btn-outline-success"
      >
        <i class="fas fa-plus" aria-hidden="true">
          Add Blog
        </i>
      </button>
    </form>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { accountService } from '../services/AccountService'
import { blogsService } from '../services/BlogsService'
import Notification from '../utils/Notification'
export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({
      newBlog: {},
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeProfile: computed(() => AppState.activeProfile)
    })
    onMounted(async() => {
      await accountService.getAccount(route.params.id)
    })
    return {
      state,
      async create() {
        try {
          await blogsService.create(state.newBlog)
          state.newBlog = {}
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

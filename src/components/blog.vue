<template>
  <div class="blog col-md-4 mb-3">
    <router-link :to="{name: 'Blog', params: { id: blog._id }}">
      <div class="card shadow">
        <div class="card-body">
          <div>
            <h1 class="card-title">
              Title:{{ blog.title }} Created By:{{ blog.creator.name }}
            </h1>
          </div>
          <div>
            <h5>
              {{ blog.body }}
            </h5>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div id="app" v-if="post">
    <h1>{{ title }} - Single Post</h1>

    <h2>{{ post.title }}</h2>
    <strong>{{ post.author }} | {{ post.date }}</strong>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    const { postId } = this.$route.params;
    this.getPostById(postId);
  },
  computed: mapState('blog', ['post']),
  methods: mapActions('blog', ['getPostById']),
  data() {
    return {
      title: 'Warsaw JS',
      divStyle: 'color: grey',
    }
  }
}
</script>

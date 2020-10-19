<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <div id="blog-list" v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <strong>{{ post.author }} | {{ post.date }}</strong>
      <p>{{ post.text }}</p>
      <router-link :to="post.link">czytaj więcej...</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getPosts()
  },
  computed: mapState('blog', ['posts']),
  methods: mapActions('blog', ['getPosts']),
  data() {
    return {
      title: 'Warsaw JS',
      divStyle: 'color: grey',
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <div id="blog-list" v-for="post in posts">
    <h2>{{ post.title }}</h2>
    <strong>{{ post.author }} | {{ post.date }}</strong>
    <p>{{ post.text }}</p>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Warsaw JS',
      posts: [
        {
          date: '12/12/2020',
          author: 'Tomek',
          title: 'First Article Title',
          text: 'Hello world!!!',
        },
        {
          date: '12/12/2020',
          author: 'Tomek',
          title: 'Second Article Title',
          text: 'Hello world!!!',
        },
      ]
    }
  }
}
</script>

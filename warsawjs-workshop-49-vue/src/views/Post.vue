<template>
  <div id="app" v-if="post">
    <h1>{{ title }} - Single Post</h1>

    <h2>{{ post.title }}</h2>
    <strong>{{ post.author }} | {{ post.date }}</strong>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
export default {
  created() {
    const { postId } = this.$route.params;
    let post;
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1dczQXlQVP1-Ps96gNMVlB0JjIL7caB9E5nQHB4iWo5Q/values/POSTS!A${ postId }:D${ postId }?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g`)
        .then(res => res.json())
        .then(res => {
          const result = res.values[0];
          post = {
            title: result[0],
            author: result[1],
            date: result[2],
            text: result[3],
          }
          this.post = post;
        })
        .catch(err => console.error(err));
    console.log(postId);
  },
  data() {
    return {
      title: 'Warsaw JS',
      post: {},
      divStyle: 'color: grey',
    }
  }
}
</script>

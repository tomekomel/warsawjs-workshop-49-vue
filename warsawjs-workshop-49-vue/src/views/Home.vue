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
export default {
  created() {
    let posts = [];
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1dczQXlQVP1-Ps96gNMVlB0JjIL7caB9E5nQHB4iWo5Q/values/POSTS?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g')
        .then(res => res.json())
        .then(res => {
          res.values.map((value, index) => {
            if (value[2]) {
              posts.push({
                date: value[0],
                author: value[1],
                title: value[2],
                text: value[3].substring(0 ,100) + '...',
                link: `post/${ index + 1 }`,
              });
            }
          });
          this.posts = posts;
          console.log(this.posts);
        })
        .catch(err => console.error(err));
  },
  data() {
    return {
      title: 'Warsaw JS',
      posts: [],
      divStyle: 'color: grey',
    }
  }
}
</script>

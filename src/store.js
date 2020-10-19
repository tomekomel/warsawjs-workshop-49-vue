import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const blog = {
  namespaced: true,
  state: {
    title: 'WarsawJS 2020',
    post: null,
    posts: [],
  },
  mutations: {
    // this.posts = posts
    setTitle(state, title) {
      console.log('setTitle');
      console.log(state);
      state.title = title
      console.log(state);
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    }
  },
  actions: {
    getTitle({ commit, state }) {
      console.log('getTitle - fire');
      setTimeout(() => {
        console.log('getTitle - commit')
        commit('setTitle', 'Nowy tytuł')
      }, 2000)
    },

    getPosts({ commit }) {
      let posts = [];
      return fetch('https://sheets.googleapis.com/v4/spreadsheets/1dczQXlQVP1-Ps96gNMVlB0JjIL7caB9E5nQHB4iWo5Q/values/POSTS?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g')
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
          commit('setPosts', posts);
        })
        .catch(err => console.error(err));
    },

    getPostById({ commit, state, dispatch }, postId) {
      if (state.posts[postId - 1]) {
        commit('setPost', state.posts[postId - 1]);
      } else {
        dispatch('getPosts').then(
          () => {
            commit('setPost', state.posts[postId - 1]);
          }
        );
      }
    }
  },
}
export default new Vuex.Store({
  modules: {
    blog,
  }
})

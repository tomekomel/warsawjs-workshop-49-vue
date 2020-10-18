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

    getPosts({ commit, state }) {

    }
  },
}
export default new Vuex.Store({
  modules: {
    blog,
  }
})

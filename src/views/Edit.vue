<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.getTitle()
  },
  computed: mapState('blog', ['title']),
  methods: mapActions('blog', ['getTitle']),
}
</script>

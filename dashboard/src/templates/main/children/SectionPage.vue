<template>
  <div class="wrapper">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
/* eslint-disable eol-last */
export default {
  name: 'sectionPage',
  data () {
    return {}
  },
  methods: {
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
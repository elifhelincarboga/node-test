<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
export default {
  name: 'Section',
  components: {
  },
  setup (props, context) {
    const state = reactive({
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
</style>

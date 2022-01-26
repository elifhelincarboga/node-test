<template>
  <div>
    <filter-comp />
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import filterComp from '../children/Filter.vue'
export default {
  name: 'Header',
  components: {
    filterComp
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

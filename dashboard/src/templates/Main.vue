<template>
  <div style="">
    <div class="main-wrapper">
      <header-page/>
      <section-page class="m-3"/>
     </div>
  </div>
</template>

<script>
import { toRefs, reactive } from '@vue/composition-api'
import headerPage from '@/templates/children/HeaderPage.vue'
import sectionPage from '@/templates/children/SectionPage.vue'

export default {
  name: 'Main',
  components: {
    headerPage,
    sectionPage
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

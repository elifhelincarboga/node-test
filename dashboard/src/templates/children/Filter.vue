<template>
  <div class="row site-manager p-3">
    <div>
      <span class="p-2">Site:</span>
      <b-form-select v-model="selected" size="sm" :options="data"></b-form-select>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, computed, onMounted, watch } from '@vue/composition-api'
import EventBus from '../../components/event-bus'
export default {
  name: 'FilterComp',
  components: {
  },
  setup (props, context) {
    const state = reactive({
      data: computed(() => context.root.$store.state.websites),
      selected: null
    })

    function apiRequest () {
      context.root.$store.dispatch('getWebsitesList', [{}]).then((response) => {
        state.selected = response[0]._id
      }).catch(() => {
      })
    }

    onMounted(() => {
      apiRequest()
    })

    watch(() => state.selected, (val) => {
      context.root.$store.commit('SET_PARAMS', { id: val })
      EventBus.$emit('filter_search', val)
    }, {
      immediate: true
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.page-title {
  font-size: 36px;
  margin: 10px;
}
.site-manager {
  border: 1px solid #f27a1a;
}
</style>

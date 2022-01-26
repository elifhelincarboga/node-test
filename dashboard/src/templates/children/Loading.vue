<template>
  <div class="wrapperLoading">
    <div class="row m-0 p-0">
      <div class="col-md-12 m-0 p-0">
        <div v-if="loading" class="loading" :style="{'min-height': height}">
          <div class="loadingContent">
            <div id="circle_square">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div v-else>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
  name: 'loading',
  props: {
    height: {
      default: '400px',
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  setup (props, context) {
    const state = reactive({})
  }
}
</script>


<style lang="scss">
  @import '../../assets/main.scss';
  .wrapperLoading {
    padding: 0;
  }
  .loading {
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    justify-content: center;
    img {
      position: absolute;
      width: 50px;
      height: 50px;
      top: 50%;
      left: 50%;
      margin-left: -25px;
      margin-top: -25px;
    }
  }
</style>

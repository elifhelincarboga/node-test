<template>
  <div class="wrapper m-4">
    <div class="dashboard-box">
      <div v-if="title" class="subpage-items">
        <div v-if="title" class="float-left titleDashboard">
          <h2 class="dashboardTitle">{{ title }}</h2>
          <h6 class="subtitle" v-html="subTitle"></h6>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboardBox',
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    }
  },
  setup (props, context) {
  }
}
</script>

<style lang="scss">
  @import '../../assets/css/main.scss';
  .dashboard-box {
    display:flex;
    flex-direction: column;
    .subpage-items {
      position: relative;
      @include media-query(to-sm) {
        float: left !important;
      }
      @include media-query(handhelds) {
        display: inline-block;
        padding: 10px 10px 10px 10px;
      }
      :after {
        clear: both
      }
      .titleDashboard {
        position: relative;
        .dashboardTitle {
          font-family: 'Avenir-Black';
          font-size:36px;
          color:#444444;
          margin-bottom: 0 !important;
        }
        .subtitle {
          font-family: 'Avenir-Book';
          color: #494444;
          line-height: 18px;
          font-size: 14px;
          margin:0px;
          margin-left:2px;
          @include media-query(to-sm) {
            white-space:normal;
          }
        }
        @include media-query(handhelds) {
          padding: 0 !important;
          .dashboardTitle {
            font-size:25px !important;
            padding: 0 !important;
          }
        }
      }
    }
  }
</style>

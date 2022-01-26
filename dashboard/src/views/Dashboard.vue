<template>
  <div class="container">
    <dashboard-box :title="title">
      <div class="row">
        <div class="col-sm-6 col">
          <line-chart
            id="ttfbChart"
            :height="250"
            :chartdata="data.ttfb"
            :options="chartOptions"
          />
        </div>
        <div class="col-sm-6 col">
          <line-chart
            id="fcpChart"
            :height="250"
            :chartdata="data.fcp"
            :options="chartOptions"
          />
        </div>
        <div class="col-sm-6 col">
          <line-chart
            id="domLoadChart"
            :height="250"
            :chartdata="data.domLoad"
            :options="chartOptions"
          />
        </div>
        <div class="col-sm-6 col">
          <line-chart
            id="winLoadChart"
            :height="250"
            :chartdata="data.windowLoad"
            :options="chartOptions"
          />
        </div>
      </div>
    </dashboard-box>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, computed } from '@vue/composition-api'
import lineChart from '../components/Chart/LineChart.vue'
import EventBus from '../components/event-bus'
import dashboardBox from '../templates/children/DashboardBox.vue'
export default {
  name: 'Dashboard',
  components: {
    lineChart,
    dashboardBox
  },
  setup (props, context) {
    const state = reactive({
      title: 'Performance Analytics Dashboard',
      globalParam: computed(() => context.root.$store.state.globalParams),
      filterParam: {
        startTime: new Date(Date.now() - 30 * 60 * 1000),
        endTime: new Date(Date.now())
      },
      loading: false,
      data: computed(() => context.root.$store.state.measures),
      chartOptions: {
        type: 'line',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        }
      }
    })

    function apiRequest () {
      state.loading = true
      const apiParam = Object.assign({}, state.filterParam, state.globalParam)
      context.root.$store.dispatch('getMeasureList', [apiParam]).then((response) => {
        state.loading = false
      }).catch(() => {
        state.loading = false
      })
    }

    onMounted(() => {
      EventBus.$on('filter_search', () => {
        apiRequest()
      })
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
  .container {
    border: 1px solid #f27a1a;
  }
</style>

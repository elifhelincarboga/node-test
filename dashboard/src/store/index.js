import Vue from 'vue'
import Vuex from 'vuex'
import chart from '../methods/chart'
import Api from '../methods/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    measures: {},
    websites: [],
    globalParams: {},
    colorList: ['#3366CC', '#DC3912', '#FF9900', '#109618']
  },
  mutations: {
    SET_MEASURE_DATA (state, data) {
      state.measures = chart.modifyChartData(data, state.colorList)
    },
    SET_WEBSITES_DATA (state, data) {
      state.websites = data?.map((element) => {
        return {
          value: element._id,
          text: element.url
        }
      })
    },
    SET_PARAMS (state, data) {
      state.globalParams = data
    }
  },
  actions: {
    getMeasureList ({ commit }, [params]) {
      return new Promise((resolve, reject) => {
        Api.fetchMeasureList(params).then((response) => {
          const data = response.measure
          commit('SET_MEASURE_DATA', data)
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    getWebsitesList ({ commit }, [params]) {
      return new Promise((resolve, reject) => {
        Api.fetchWebsitesList(params).then((response) => {
          const data = response.site
          commit('SET_WEBSITES_DATA', data)
          resolve(data)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})

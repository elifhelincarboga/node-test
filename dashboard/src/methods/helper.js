/* eslint-disable eol-last */
const moment = require('moment')
console.log('moment:', moment().format('LLL'))

const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'http://node-test-docker.herokuapp.com/'
  : 'http://localhost:3000/'

// const SERVER_URL = 'http://node-test-docker.herokuapp.com/'

function fetchMeasureList (params) {
  return fetch(`${SERVER_URL}measures?${new URLSearchParams(params)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('fetchMeasureList failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

function fetchWebsitesList (params) {
  return fetch(`${SERVER_URL}sites?${new URLSearchParams(params)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('fetchWebsitesList failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

function modifyChartData (data, colorList) {
  const chartData = {
    ttfb: createChartTemplate('TTFB', colorList[0]),
    fcp: createChartTemplate('FCP', colorList[1]),
    domLoad: createChartTemplate('DOM Load', colorList[2]),
    windowLoad: createChartTemplate('Window Load', colorList[3])
  }
  data.forEach((element) => {
    chartData.ttfb.labels.push(moment(element.date).lang('tr').format('LLL'))
    chartData.ttfb.datasets[0].data.push(element.ttfb)

    chartData.fcp.labels.push(moment(element.date).lang('tr').format('LLL'))
    chartData.fcp.datasets[0].data.push(element.fcp)

    chartData.domLoad.labels.push(moment(element.date).lang('tr').format('LLL'))
    chartData.domLoad.datasets[0].data.push(element.domLoad)

    chartData.windowLoad.labels.push(moment(element.date).lang('tr').format('LLL'))
    chartData.windowLoad.datasets[0].data.push(element.windowLoad)
  })
  return chartData
}

function createChartTemplate (label, color) {
  return {
    labels: [],
    datasets: [
      {
        label,
        backgroundColor: color,
        data: [],
        fill: false,
        borderColor: color,
        tension: 0.3
      }
    ]
  }
}

module.exports = {
  fetchMeasureList,
  fetchWebsitesList,
  modifyChartData
}
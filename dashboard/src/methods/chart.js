/* eslint-disable eol-last */
const moment = require('moment')
console.log('moment:', moment().format('LLL'))

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
  modifyChartData
}
console.log("Hello C World")


// const api = 'http://node-test-docker.herokuapp.com/measures'
// const hostUrl = window.location.href
// const performanceTiming = window.performance.toJSON().timing
// const currentTime = new Date().valueOf()
// var fcp, ttfb, windowLoad, domLoad


// const isPerformanceObserverSupported = () => {
//     return typeof PerformanceObserver === 'function'
// }

// const convertMsToSecond = (ms) => {
//     return (ms / 1000)
// }


// const startObserver = () => {
//     if (!isPerformanceObserverSupported) {
//         console.error("PerfanalyticsJS Error : PerformanceObserver NOT supported!")
//         return
//     }

//     let observer = new PerformanceObserver((entryList) => {
//         fcp = convertMsToSecond(entryList.getEntriesByName('first-contentful-paint')[0].startTime)
//     })

//     observer.observe({type: 'paint', buffered: true})
// }

// const getPerformanceTiming = () => {
//     if (!performanceTiming) {
//         console.error("PerfanalyticsJS Error : Performance NOT supported!")
//         return
//     }

//     ttfb = convertMsToSecond(performanceTiming.responseStart - performanceTiming.navigationStart)
//     domLoad = convertMsToSecond(performanceTiming.domContentLoadedEventEnd - performanceTiming.navigationStart)
//     windowLoad = convertMsToSecond(currentTime - performanceTiming.navigationStart)
// }

// const sendRequest = () => {
//     const request = setInterval(() => {
//         let data = {
//             "url": url,
//             "date": performance.timeOrigin,
//             "ttfb": ttfb, // Time to first byte
//             "fcp": fcp, // First contentful paint
//             "domLoad": domLoad,
//             "windowLoad": windowLoad,
//         }

//         console.log("PerfanalyticsJS Request Object : ", data)

//         const options = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data),
//         }

//         fetch(api, options).then((response) => console.debug(response))

//         clearInterval(request)
//     }, 500)
// }

// window.addEventListener('load', () => {
//     startObserver()
//     getPerformanceTiming()
//     sendRequest()
// })
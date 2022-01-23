const getStartDate = (date) => {
    if(date) {
        return new Date(date).toString()
    } else {
        const date = new Date()
        return date.setMinutes(date.getMinutes() - 30).toString()
    }
    
}
  
const getEndDate = (date) => {
    if(date) {
        return new Date(date).toString()
    }
    return new Date().toString()
}

function getDates (startDate, endDate) {
    return { startDate: getStartDate(startDate), endDate: getEndDate(endDate)} 
}

module.exports = {
    getDates
}
const getStartDate = (date) => {
    if(date) {
        return new Date(date).toISOString()
    } else {
        const date = new Date()
        return date.setMinutes(date.getMinutes() - 30).toString()
    }
    
}
  
const getEndDate = (date) => {
    if(date) {
        return new Date(date).toISOString()
    }
    return new Date().toString()
}

function getDates (startDate, endDate) {
    return { startDate: getStartDate(startDate), endDate: getEndDate(endDate)} 
}

String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};

module.exports = {
    getDates
}
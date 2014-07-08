/**
 * 
 * @param {date|string} time 
 * @param {string} format 
 *
 * @return {string} 
 */
function formatMoment(time, format) {
    var t = moment(time)
    return t.format(format);
};
function fromNow (time) {
    var now = new Date();
    return moment(time).fromNow(now);
};

//Meteor helpers
UI.registerHelper('moment', function (time, format) {
    var t = moment(time)
    return t.format(format);
});
UI.registerHelper('fromNow', function (time) {
    var now = new Date();
    return moment(time).fromNow(now);
});

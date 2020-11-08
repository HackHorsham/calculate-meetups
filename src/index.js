// warning!!! the Date() creates a mutable object
// pass it as a string value or you will get odd results.
var futureEventsQuantity = 12;
var date = new Date("nov 1, 2020  14:00:00 ");
var calculateNextEvent = function (dateAsString) {
    var dateToCheck = new Date(dateAsString);
    if (dateToCheck.getDate() >= 14) {
        var month = dateToCheck.getMonth();
        // reset the day to the first day.
        dateToCheck.setDate(1);
        // we have already had this months event
        //so we need to increment the month.
        // if the month is December it will roll over year
        // and set the month to January.
        dateToCheck.setMonth(month + 1);
    }
    for (var d = dateToCheck.getDate(); d <= 14; d++) {
        dateToCheck.setDate(d);
        if (dateToCheck.getDate() > 7 && dateToCheck.getDay() === 6) {
            dateToCheck.setHours(14);
        }
    }
    return dateToCheck;
};
var getFutureEvents = function (dateAsString, futureEventsQuantity) {
    if (futureEventsQuantity === void 0) { futureEventsQuantity = 1; }
    var events = [];
    date = new Date(dateAsString.trim());
    for (var n = 0; n < futureEventsQuantity; n++) {
        // pass in a date string not a Date()
        var event_1 = calculateNextEvent(date.toDateString());
        events.push(event_1);
        //increment the month.
        date.setMonth(date.getMonth() + 1);
    }
    return events;
};
var events = getFutureEvents("November 1 2020", 10);
events.forEach(function (e) { return console.log(e.toString()); });

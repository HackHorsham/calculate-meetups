"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNextEvent = exports.getFutureEvents = void 0;
function calculateNextEvent(dateAsString) {
    var dateToCheck = new Date(dateAsString);
    if (dateToCheck.getDate() >= 14) {
        var month = dateToCheck.getMonth();
        dateToCheck.setDate(1);
        dateToCheck.setMonth(month + 1);
    }
    for (var d = dateToCheck.getDate(); d <= 14; d++) {
        dateToCheck.setDate(d);
        if (dateToCheck.getDate() > 7 && dateToCheck.getDay() === 6) {
            dateToCheck.setHours(14);
            return dateToCheck;
        }
    }
    return dateToCheck;
}
exports.calculateNextEvent = calculateNextEvent;
var getFutureEvents = function (dateAsString, futureEventsQuantity) {
    if (futureEventsQuantity === void 0) { futureEventsQuantity = 1; }
    var events = [];
    var date = new Date(dateAsString.trim());
    for (var n = 0; n < futureEventsQuantity; n++) {
        var event_1 = calculateNextEvent(date.toDateString());
        events.push(event_1);
        date.setMonth(date.getMonth() + 1);
    }
    return events;
};
exports.getFutureEvents = getFutureEvents;
//# sourceMappingURL=index.js.map
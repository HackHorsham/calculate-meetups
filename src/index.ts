/**
 * calculates the next meetup date after the initial Start Date
 * @param {string} startDateAsString  A valid date as string that can be parsed by the Date function.
 * @returns {Date}
 */
function calculateNextEvent(startDateAsString: string): Date {
  const dateToCheck = new Date(startDateAsString);

  if (dateToCheck.getDate() >= 14) {
    const month = dateToCheck.getMonth();
    /**
     * reset the day to the first day.
     */
    dateToCheck.setDate(1);
    /**
     *  we have already had this months event
     *  so we need to increment the month.
     *  if the month is December it will roll over year
     *  and set the month to January.
     */
    dateToCheck.setMonth(month + 1);
  }
  for (let d = dateToCheck.getDate(); d <= 14; d++) {
    dateToCheck.setDate(d);
    if (dateToCheck.getDate() > 7 && dateToCheck.getDay() === 6) {
      dateToCheck.setHours(14);
      return dateToCheck;
    }
  }
  return dateToCheck;
}
/**
 * Automatically calculate the  dates for the for events after the initial start date.
 * @param {string} startDateAsString - A valid date as string that can be parsed by the Date function.
 * @param {number} futureEventsQuantity - an Integer for the amount of dates that you want to be returned
 * @returns {Date[]}
 */
const getFutureEvents = (startDateAsString: string, futureEventsQuantity = 1):Date[] => {
  const events: Array<Date> = [];
  const date = new Date(startDateAsString.trim());
  for (let n = 0; n < futureEventsQuantity; n++) {
    /**
     * pass in a date string not a Date()
     */
    const event = calculateNextEvent(date.toDateString());
    events.push(event);
    /**
     * Increment the month.
     */
    date.setMonth(date.getMonth() + 1);
  }
  return events;
};

export { getFutureEvents, calculateNextEvent };

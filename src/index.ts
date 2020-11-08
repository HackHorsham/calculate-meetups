// warning!!! the Date() creates a mutable object
// pass it as a string value or you will get odd results.

function calculateNextEvent(dateAsString: string): Date {
  let dateToCheck = new Date(dateAsString);

  if (dateToCheck.getDate() >= 14) {
    const month = dateToCheck.getMonth();
    
    // reset the day to the first day.
    dateToCheck.setDate(1);
    // we have already had this months event
    //so we need to increment the month.
    // if the month is December it will roll over year
    // and set the month to January.
    dateToCheck.setMonth(month + 1);
  }
  //  console.log(dateToCheck.getDate())
  for (let d = dateToCheck.getDate(); d <= 14; d++) {
    dateToCheck.setDate(d);
    if (dateToCheck.getDate() > 7 && dateToCheck.getDay() === 6) {
      dateToCheck.setHours(14);
      return dateToCheck;
    }
  }
  return dateToCheck;
}
// console.log(calculateNextEvent('aug 22 2020'))

const getFutureEvents = (dateAsString: string, futureEventsQuantity = 1) => {
  const events: Array<Date> = [];
  let date = new Date(dateAsString.trim());
  for (let n = 0; n < futureEventsQuantity; n++) {
    // pass in a date string not a Date()
    const event = calculateNextEvent(date.toDateString());
    events.push(event);
    //increment the month.
    date.setMonth(date.getMonth() + 1);
  }
  return events;
};

const events = getFutureEvents("JAn 1 2021", 12);

events.forEach((e) => console.log(e.toString()));

export { getFutureEvents, calculateNextEvent };

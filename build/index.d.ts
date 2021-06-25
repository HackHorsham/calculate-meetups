declare function calculateNextEvent(startDateAsString: string): Date;
declare const getFutureEvents: (startDateAsString: string, futureEventsQuantity?: number) => Date[];
export { getFutureEvents, calculateNextEvent };

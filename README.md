# Calculate Meetups

Calculate the meetups for Hack Horsham.

## Installation

```sh
npm i calculate-meetups

// or

yarn add calculate-meetups
```

Usage:

```javascript
import { getFutureEvents } from "calculate-meetups";

const events = getFutureEvents("Jan 1 2021", 12);

events.forEach((e) => console.log(e.toString()));
```

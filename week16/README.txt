This kata is based on one of the main functionalities when trying to implement a basic calendar, scheduler, etc..
You have to implement the function that will check is a slot is available to add a new event.
For that, the first thing the function does is to retrieve an array of the existing events with the following attributes:

- starting_datetime: Ex. "2016-11-08T10:20:00"
- finishing_datetime: Ex. "2016-11-08T12:20:00"
- repeated: true/false

Both datetimes are in UTC format and you can handle it in the Datetime format you consider in the language you've
chosen to solve the kata.
Repeated attribute mean that this event repeats every same week day at the specified hour, it means, in the example given,
if 2016-11-08 is Tuesday, this event is scheduled every Tuesday of the year from 10:20 am to 12:20 am.

The function isSlotAvailable receives an event with the same structure and should return true if there isn't any other
event ocuppying that slot.

Note: Timezones are not taken into account to simplify the kata.


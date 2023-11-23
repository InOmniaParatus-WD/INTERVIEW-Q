// Return an array with two date strings of the current date with the following specifications:

// - The first string's date order should be the year number, month number, and day number separated by dashes (-).
// - The first string's year should be four digits in length.
// - The first string's month and day should not contain any leading zeros.
// - The second string's weekday and month names should not be abbreviated.
// - The second string's day should not contain any leading zeros.

// Example outputs:
//    ['2007-11-23', 'Friday, November 23, 2007']
//    ['2021-3-2', 'Tuesday, March 2, 2021']

function getDateFormats() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let time = new Date();

  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const year = time.getFullYear();

  const noLeadingZeroDate = `${date}`.startsWith("0")
    ? +`${date}`.slice(1)
    : date;

  const noLeadingZeroMonth = `${month}`.startsWith("0")
    ? +`${month}`.slice(1)
    : month;

  let currentDate = `${year}-${noLeadingZeroMonth+1}-${noLeadingZeroDate}`;
  
  let stringDate = `${days[day]}, ${months[month]} ${noLeadingZeroDate}, ${year}`;

  return [currentDate, stringDate];
}

console.log(getDateFormats());

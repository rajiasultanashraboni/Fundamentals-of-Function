function leapYear(year) {
  if (year % 4 === 0) {
    return "this year is leap year";
  } else {
    return "this year is not leap year";
  }
}

const result = leapYear(2050);
// console.log(result);

function leapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return "this year is leapyear";
  }
  return "this year is not leapyear";
}
// console.log(leapYear2(2024));

function leapYear3(year) {
  if (year % 400 === 0) {
    return "this year is leap year";
  }

  return "this year is not leap year";
}

console.log(leapYear3(2000));

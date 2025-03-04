
export enum DateWeekday {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export enum DateMonth {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
};

export function getWeekOfYearNumber(date) {
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfTheYear.getTime()) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7);
}

export function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export function getMonthsAndYears(startYear: number) {
  const months = [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];
  const years = new Array(15).fill(0).map((_, index) => ({
    label: (startYear + index + 1).toString(),
    value: (startYear + index + 1).toString(),
  }));

  return {
    months,
    years
  }
}

export const parseDateString = (dateString, format = 'MM/DD/YYYY') => {
  if (!dateString) {
    return null;
  }

  const isISOFormat = dateString.match(/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d{1,3})?)?(Z)?)?$/);

  if (isISOFormat) {
    return new Date(dateString);
  }

  const formatTokens = {
    M: 'month',
    D: 'day',
    Y: 'year',
  };

  const dateObj = {
    month: 0,
    day: 1,
    year: 1970,
  };

  let currentToken = '';
  let currentTokenValue = '';

  for (let i = 0; i < format.length; i++) {
    const token = format[i].toUpperCase();

    if (formatTokens[token]) {
      currentToken = formatTokens[token];
      currentTokenValue += dateString[i];
    } else {
      if (currentToken) {
        dateObj[currentToken] = parseInt(currentTokenValue, 10);
        currentToken = '';
        currentTokenValue = '';
      }
    }
  }

  if (currentToken) {
    dateObj[currentToken] = parseInt(currentTokenValue, 10);
  }

  return new Date(dateObj.year, dateObj.month - 1, dateObj.day, 0, 0, 0);
}

export const formatDate = (date: Date, format = 'MM/DD/YYYY') => {
  const zeroPad = (value, length) => {
    return String(value).padStart(length, '0');
  };

  const day = zeroPad(date.getDate(), 2);
  const month = zeroPad(date.getMonth() + 1, 2);
  const year = zeroPad(date.getFullYear(), 4);

  return format
    .replace(/D{1,2}/i, day)
    .replace(/M{1,2}/i, month)
    .replace(/Y{2,4}/i, year);
}


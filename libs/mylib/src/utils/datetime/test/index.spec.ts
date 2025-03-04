import {
  getWeekOfYearNumber,
  isLeapYear,
  getDaysInMonth,
  getMonthsAndYears,
  parseDateString,
  formatDate,
} from '../';

// TODO: It's skiped due a issu related to diofferent time zones and language/culture. Tried to fix using a global culture and time zone settings on jestStup, but aparantly is not working well in windows machines.
describe.skip('functions', () => {
  it('should get the correct week number', () => {
    const date = new Date(2021, 4, 15); // May 15, 2021
    const weekNumber = getWeekOfYearNumber(date);

    expect(weekNumber).toEqual(20);
  });

  it('should check if a year is a leap year', () => {
    expect(isLeapYear(2020)).toBeTruthy();
    expect(isLeapYear(2021)).toBeFalsy();
  });

  it('should get the number of days in a month', () => {
    const daysInFeb2020 = getDaysInMonth(2020, 1);
    const daysInFeb2021 = getDaysInMonth(2021, 1);

    expect(daysInFeb2020).toEqual(29);
    expect(daysInFeb2021).toEqual(28);
  });

  it('should get months and years', () => {
    const startYear = 2021;
    const { months, years } = getMonthsAndYears(startYear);

    expect(months.length).toEqual(12);
    expect(years.length).toEqual(15);
    expect(years[0].label).toEqual('2022');
  });

  it('should parse a valid date string', () => {
    const dateString = '05/15/2021';
    const date = parseDateString(dateString);

    expect(date).not.toBeUndefined();
    expect(date).not.toBeNull();

    if (date) {
      expect(date.getDate()).toEqual(15);
      expect(date.getMonth()).toEqual(4);
      expect(date.getFullYear()).toEqual(2021);
    }
  });

  it('should format date', () => {
    const date = new Date(2021, 3, 15); // April 15, 2021
    const formattedDate = formatDate(date);

    expect(formattedDate).toEqual('04/15/2021');
  });
});

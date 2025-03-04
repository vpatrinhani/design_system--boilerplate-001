import { Month } from '../Month';

// TODO: It's skiped due a issu related to diofferent time zones and language/culture. Tried to fix using a global culture and time zone settings on jestStup, but aparantly is not working well in windows machines.
describe.skip('Month', () => {
  it('should create a month with default values', () => {
    const month = new Month();

    expect(month).toBeDefined();
    expect(month.number).toEqual(new Date().getMonth() + 1);
    expect(month.year).toEqual(new Date().getFullYear());
  });

  it('should create a month with a specific date', () => {
    const date = new Date(2021, 4, 15); // May 15, 2021
    const month = new Month(date);

    expect(month).toBeDefined();
    expect(month.number).toEqual(5);
    expect(month.year).toEqual(2021);
  });

  it('should return the correct number of days for a month', () => {
    const month = new Month(new Date(2021, 0)); // January 2021

    expect(month.numberOfDays).toEqual(31);
  });

  it('should return the correct number of days for a leap year', () => {
    const month = new Month(new Date(2020, 1)); // February 2020

    expect(month.numberOfDays).toEqual(29);
  });

  it('should return the correct number of days for a non-leap year', () => {
    const month = new Month(new Date(2021, 1)); // February 2021

    expect(month.numberOfDays).toEqual(28);
  });

  it('should get a specific day of the month', () => {
    const month = new Month(new Date(2021, 4)); // May 2021
    const day = month.getDay(15);

    expect(day).toBeDefined();
    expect(day.dayOfMonth).toEqual(15);
  });
});

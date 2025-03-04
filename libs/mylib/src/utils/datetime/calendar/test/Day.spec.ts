import { Day } from '../Day';

// TODO: It's skiped due a issu related to diofferent time zones and language/culture. Tried to fix using a global culture and time zone settings on jestStup, but aparantly is not working well in windows machines.
describe.skip('Day', () => {
  it('should create a Day with default values', () => {
    const day = new Day();

    expect(day).toBeDefined();
    expect(day.dayOfMonth).toEqual(new Date().getDate());
    expect(day.year).toEqual(new Date().getFullYear());
    expect(day.monthNumber).toEqual(new Date().getMonth() + 1);
  });

  it('should create a Day with a specific date', () => {
    const date = new Date(2021, 4, 15); // May 15, 2021
    const day = new Day(date);

    expect(day).toBeDefined();
    expect(day.dayOfMonth).toEqual(15);
    expect(day.year).toEqual(2021);
    expect(day.monthNumber).toEqual(5);
  });

  it('should check if a day is today', () => {
    const day = new Day();
    expect(day.isToday).toBeTruthy();
  });

  it('should check if two days are equal', () => {
    const day1 = new Day(new Date(2021, 4, 15));
    const day2 = new Day(new Date(2021, 4, 15));

    expect(day1.isEqualTo(day2)).toBeTruthy();
  });

  it('should format a day using a format string', () => {
    const date = new Date(2021, 4, 15); // May 15, 2021
    const day = new Day(date);

    const formattedDate = day.format('YYYY-MM-DD');
    expect(formattedDate).toEqual('2021-05-15');
  });
});

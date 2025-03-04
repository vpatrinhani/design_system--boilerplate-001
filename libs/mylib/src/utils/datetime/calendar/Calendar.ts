import { DateWeekday, isLeapYear } from "../";

import { Day } from "./Day";
import { Month } from "./Month";

export class Calendar {
  weekDays: string[] = Array.from({length: 7});
  today: Day;
  year: number;
  month: Month;
  lang: string;

  constructor(year: number = null, monthNumber: number = null, lang = 'default') {
    this.today = new Day(undefined, lang);
    this.year = year ?? this.today.year;
    this.month = new Month(new Date(this.year, (monthNumber || this.today.monthNumber) - 1), lang);
    this.lang = lang;

    this[Symbol.iterator] = function* () {
      let number = 1;
      yield this.getMonth(number);
      while (number < 12) {
        ++number;
        yield this.getMonth(number);
      }
    }

    this.weekDays.forEach((_, i) => {
      const day = this.month.getDay(i + 1);
      if (!this.weekDays.includes(day.weekday.name.long)) {
        this.weekDays[day.weekday.number] = day.weekday.name.long
      }
    })
  }

  get isLeapYear() {
    return isLeapYear(this.year);
  }

  getMonth(monthNumber) {
    return new Month(new Date(this.year, monthNumber - 1), this.lang);
  }

  getPreviousMonth() {
    if (this.month.number === 1) {
      return new Month(new Date(this.year - 1, 11), this.lang);
    }

    return new Month(new Date(this.year, this.month.number - 2), this.lang);
  }

  getNextMonth() {
    if (this.month.number === 12) {
      return new Month(new Date(this.year + 1, 0), this.lang);
    }

    return new Month(new Date(this.year, (this.month.number + 1) - 1), this.lang);
  }

  goToDate(monthNumber, year) {
    this.month = new Month(new Date(year, monthNumber - 1), this.lang);
    this.year = year;
  }

  goToNextYear() {
    this.year += 1;
    this.month = new Month(new Date(this.year, 0), this.lang);
  }

  goToPreviousYear() {
    this.year -= 1;
    this.month = new Month(new Date(this.year, 11), this.lang);
  }

  goToNextMonth() {
    if (this.month.number === 12) {
      return this.goToNextYear();
    }

    this.month = new Month(new Date(this.year, (this.month.number + 1) - 1), this.lang);
  }

  goToPreviousMonth() {
    if (this.month.number === 1) {
      return this.goToPreviousYear();
    }

    this.month = new Month(new Date(this.year, (this.month.number - 1) - 1), this.lang);
  }

  /**
   * @method getMonthDaysGrid
   * Generates an array of Day objects to be rendered in the calendar grid.
   * @returns {Day[]} An array of Day objects for the calendar grid.
   */
  getMonthDaysGrid(): Day[] {
    const firstDayOfTheMonth = this.month.getDay(1);
    const lastDayOfTheMonth = this.month.getDay(this.month.numberOfDays);

    const lastMonthEndGridIndex = firstDayOfTheMonth.weekday.number - 1;

    let totalGridDaysNEW = lastMonthEndGridIndex + this.month.numberOfDays;
    const currentMonthStartGridIndex = lastMonthEndGridIndex + 1;
    let currentMonthEndGridIndex = totalGridDaysNEW;

    if (lastDayOfTheMonth.weekday.number < DateWeekday.Saturday) {
      const nextMonth = this.getNextMonth();
      const firstDayOfNextMonth = nextMonth.getDay(1);

      const currentMonthWeekDaysDiff = (7 - firstDayOfNextMonth.weekday.number);

      totalGridDaysNEW = totalGridDaysNEW + currentMonthWeekDaysDiff;
      currentMonthEndGridIndex = totalGridDaysNEW - currentMonthWeekDaysDiff;
    }

    const montGrid = Array.from<Day>({length: totalGridDaysNEW});

    // last month grid days
    for (let i = 0; i < currentMonthStartGridIndex; i++) {
      const gridDay = this.month.getDay(i - lastMonthEndGridIndex);
      montGrid[i] = gridDay;
    }

    // current month grid days
    for (let i = currentMonthStartGridIndex; i <= currentMonthEndGridIndex; i++) {
      const gridDay = this.month.getDay(i - lastMonthEndGridIndex);
      montGrid[i] = gridDay;
    }

    // next month grid days
    for (let i = currentMonthEndGridIndex + 1; i <= totalGridDaysNEW; i++) {
      const gridDay = this.month.getDay(i - lastMonthEndGridIndex);
      montGrid[i] = gridDay;
    }

    return montGrid;
  }
}

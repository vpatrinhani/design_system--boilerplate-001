import { getDaysInMonth } from "../";
import { Day } from "./Day";

export class Month {
  number: number;
  year: number;
  lang: string;
  numberOfDays: number;

  constructor(date: Date | undefined = undefined, lang = 'default') {
    const day = new Day(date, lang);
    this.lang = lang;

    this.number = day.monthNumber;
    this.year = day.year;

    this.numberOfDays = getDaysInMonth(this.year, day.date.getMonth());

    this[Symbol.iterator] = function* () {
      let dayNumber = 1;
      while (dayNumber <= this.numberOfDays) {
        yield this.getDay(dayNumber);
        dayNumber++;
      }
    }
  }

  getDay(dayOfMonth: number): Day {
    return new Day(new Date(this.year, this.number - 1, dayOfMonth), this.lang);
  }
}

import { getWeekOfYearNumber } from "../";

export class Day {
  private readonly dateObject: Date;
  private readonly lang: string;

  constructor(date: Date | undefined = new Date(), lang = 'default') {
    this.dateObject = date;
    this.lang = lang;
  }

  get date() {
    return this.dateObject;
  }

  get dayOfMonth() {
    return this.dateObject.getDate();
  }

  get weekday() {
    return {
      name: {
        short: this.dateObject.toLocaleString(this.lang, { weekday: 'short' }),
        long: this.dateObject.toLocaleString(this.lang, { weekday: 'long' }),
      },
      number: this.dateObject.getDay(),
    };
  }

  get year() {
    return this.dateObject.getFullYear();
  }

  get monthNumber() {
    return this.dateObject.getMonth() + 1;
  }

  get valueString() {
    return this.dateObject.toJSON();
  }

  get isToday() {
    return this.isEqualTo(new Date());
  }

  isEqualTo(day: Date | Day) {
    day = day instanceof Day ? day.dateObject : day;
    return (
      day?.getDate() === this.dayOfMonth &&
      day?.getMonth() === this.monthNumber - 1 &&
      day?.getFullYear() === this.year
    );
  }

  format(formatStr: string) {
    const formatDatePart = (key: string, value: string | number) =>
      formatStr = formatStr.split(key).join(value.toString());

    formatDatePart('YYYY', this.year);
    formatDatePart('YYY', this.dateObject.toLocaleString(this.lang, { year: '2-digit' }));
    formatDatePart('WW', this.weekOfYearNumber.toString().padStart(2, '0'));
    formatDatePart('W', this.weekOfYearNumber);
    formatDatePart('DDDD', this.weekday.name.long);
    formatDatePart('DDD', this.weekday.name.short);
    formatDatePart('DD', this.dayOfMonth.toString().padStart(2, '0'));
    formatDatePart('D', this.dayOfMonth);
    formatDatePart('MMMM', this.dateObject.toLocaleString(this.lang, { month: 'long' }));
    formatDatePart('MMM', this.dateObject.toLocaleString(this.lang, { month: 'short' }));
    formatDatePart('MM', this.monthNumber.toString().padStart(2, '0'));
    formatDatePart('M', this.monthNumber);

    return formatStr;
  }

  private get weekOfYearNumber() {
    return getWeekOfYearNumber(this.dateObject);
  }
}

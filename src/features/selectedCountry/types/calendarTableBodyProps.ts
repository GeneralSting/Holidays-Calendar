import { HolidayMonth } from "./holidayMonth"
import { longWeekendMonth } from "./longWeekendMonth"

export type CalendarTableBodyProps = {
  year: number,
  month: number,
  holidayMonths: HolidayMonth[]
  longWeekendMonths: longWeekendMonth[];
  showLongWeekends: boolean;
  generateMonthDays: (year: number, month: number) => number[][]
  handleHolidayDate: (month: number, day: number) => void
}
import { CountryHoliday } from "../types/countryHoliday";
import { HolidayMonth } from "../types/holidayMonth";

const extractHolidayMonths = (
  countryHolidays: CountryHoliday[]
): HolidayMonth[] => {
  const holidayMonths: {
    month: number;
    holidays: { name: string; day: number }[];
  }[] = [];

  countryHolidays.forEach((holiday) => {
    const date = new Date(holiday.date);
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();

    const foundMonth = holidayMonths.find((entry) => entry.month === month);
    if (!foundMonth) {
      holidayMonths.push({
        month,
        holidays: [{ name: holiday.localName as string, day }],
      });
    } else {
      const foundHoliday = foundMonth.holidays.find(
        (h) => h.name === holiday.localName
      );
      if (!foundHoliday) {
        foundMonth.holidays.push({ name: holiday.localName as string, day });
      }
    }
  });

  return holidayMonths;
};

export default extractHolidayMonths;

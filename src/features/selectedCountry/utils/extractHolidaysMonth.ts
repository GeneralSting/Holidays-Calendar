import { CountryHoliday } from "../types/countryHoliday";
import { HolidayMonth } from "../types/holidayMonth";

const extractHolidayMonths = (
  countryHolidays: CountryHoliday[]
): HolidayMonth[] => {
  const holidayMonths: HolidayMonth[] = [];

  countryHolidays.forEach((holiday) => {
    const date = new Date(holiday.date);
    const month = date.getMonth() + 1; // Month is zero-based
    const day = date.getDate();

    console.log(holiday.localName);
    const foundMonth = holidayMonths.find((entry) => entry.month === month);
    if (!foundMonth) {
      holidayMonths.push({
        month,
        holidays: [{ name: holiday.localName as string, day }],
      });
    } else {
      foundMonth.holidays.push({ name: holiday.localName as string, day });
    }
  });

  return holidayMonths;
};

export default extractHolidayMonths;

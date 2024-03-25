import { CountryHoliday } from "..";

const getHolidaysByDate = (
  holidays: CountryHoliday[],
  date: string
): CountryHoliday[] => {
  const holidaysAtDate = holidays.filter((holiday) => holiday.date === date);

  return holidaysAtDate;
};

export default getHolidaysByDate;

import { CountryLongWeekend } from "../types/countryLongWeekend";
import { longWeekendMonth } from "../types/longWeekendMonth";

const extractLongWeekends = (
  longWeekends: CountryLongWeekend[],
  currentYear: number
): longWeekendMonth[] => {
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  };

  const months: longWeekendMonth[] = [];

  longWeekends.forEach((longWeekend) => {
    const { startDate, endDate } = longWeekend;
    if (startDate && endDate) {
      const startYear = new Date(startDate).getFullYear();
      const endYear = new Date(endDate).getFullYear();

      if (startYear === currentYear && endYear === currentYear) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
          if (date.getFullYear() === currentYear) {
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const isWeekendDay = isWeekend(date);

            if (!months[month]) {
              months[month] = { month, weekends: [] };
            }

            months[month].weekends.push({ day, isWeekend: isWeekendDay });
          }
        }
      }
    }
  });

  return Object.values(months);
};

export default extractLongWeekends;

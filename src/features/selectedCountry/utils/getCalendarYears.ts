import { getCurrentYear } from "../../../utils";

const getCalendarYears = () => {
  const currentYear = getCurrentYear();
  const years = [currentYear - 1];

  for (let counter = 0; counter < 4; counter++) {
    years.push(currentYear + counter);
  }

  return years;
};

export default getCalendarYears;

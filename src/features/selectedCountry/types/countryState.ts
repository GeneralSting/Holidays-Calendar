import { CountryHoliday } from "./countryHoliday";
import { CountryInfo } from "./countryInfo";
import { CountryLongWeekend } from "./countryLongWeekend";

export type CountryState = {
  countryInfo: CountryInfo;
  nextHolidays: CountryHoliday[];
  holidays: CountryHoliday[];
  longWeekend: CountryLongWeekend[];
  infoLoading: boolean;
  infoCustomError: string | undefined;
  holidaysLoading: boolean;
  holidaysCustomError: string | undefined;
  countryCode: string | undefined;
  holidaysYear: number;
};

import { HolidayTypes } from "./holidayTypes"

export type CountryHoliday = {
  date: string,
  localName: string | null,
  name: string | null,
  countryCode: string | null,
  fixed: boolean,
  global: true,
  counties: string[] | null,
  launchYear: number | null,
  types: HolidayTypes[] | null
}
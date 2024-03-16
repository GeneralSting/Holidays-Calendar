import { CountryHoliday } from "./countryHoliday";

export type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
  countryHoliday?: CountryHoliday;
};

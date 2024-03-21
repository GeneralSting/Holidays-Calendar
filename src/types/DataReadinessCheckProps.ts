import { Country } from "../features/countries";
import { CountryHoliday, CountryInfo } from "../features/selectedCountry";

export type DataReadinessCheckProps = {
  loading: boolean;
  loadingMessage: string;
  customError: string | undefined;
  data: CountryInfo | CountryHoliday[] | Country[];
  children: React.ReactNode;
};

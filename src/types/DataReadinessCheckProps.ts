import { CountryInfo } from "../features/selectedCountry/types/countryInfo";
import { CountryHoliday } from "../features/selectedCountry/types/countryHoliday";
import { Country } from "../features/countries/types/country";

export type DataReadinessCheckProps = {
  loading: boolean;
  loadingMessage: string;
  customError: string | undefined;
  data: CountryInfo | CountryHoliday[] | Country[];
  children: React.ReactNode;
};

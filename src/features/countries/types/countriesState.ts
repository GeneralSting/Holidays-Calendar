import { Country } from "../../../types/country";

export type CountriesState = {
  countries: Country[] | null;
  loading: boolean;
  customError: string | null;
};

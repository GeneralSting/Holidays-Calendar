import { Country } from "../../../types/country";

export type CountriesState = {
  countries: Country[];
  loading: boolean;
  customError: string | undefined;
};

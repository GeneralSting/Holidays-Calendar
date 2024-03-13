import { Country } from "..";

export type CountriesState = {
  countries: Country[];
  loading: boolean;
  customError: string | undefined;
};

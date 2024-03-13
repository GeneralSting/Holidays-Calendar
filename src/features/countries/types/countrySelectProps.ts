import { Country } from "..";

export type CountrySelectProps = {
  countries: Country[];
  onCountrySelect?: (selectedCountry: Country | null) => void;
}
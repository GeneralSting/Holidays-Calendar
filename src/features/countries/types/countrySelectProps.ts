import { Country } from "../../../types/country";

export type CountrySelectProps = {
  countries: Country[];
  onCountrySelect?: (selectedCountry: Country | null) => void;
}
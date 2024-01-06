import { Country } from "../types/country";
import ApiService from "./apiService";

class CountryService extends ApiService {
  protected countriesUrl: string;
  protected countryInfoUrl: string;

  constructor() {
    super();
    this.countriesUrl = `${this.apiUrl}AvailableCountries/`;
    this.countryInfoUrl = `${this.apiUrl}CountryInfo/`;
  }

  public async fetchCountries(): Promise<Country[]> {
    return await this.fetchData(this.countriesUrl);
  }
}

export default CountryService;
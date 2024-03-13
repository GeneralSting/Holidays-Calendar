import { Country } from "..";
import ApiService from "../../../service/apiService";

class CountriesService extends ApiService {
  protected countriesUrl: string;

  constructor() {
    super();
    this.countriesUrl = `${this.apiUrl}AvailableCountries/`;
  }

  public async fetchCountries(): Promise<Country[]> {
    return await this.fetchData(this.countriesUrl);
  }
}

export default CountriesService;
import CountryService from "../../../service/countryService";
import { Country } from "../../../types/country";

class AvailableCountries {
  private countryService: CountryService;

  constructor() {
    this.countryService = new CountryService();
  }

  public async getAvailableCountries(): Promise<Country[]> {
    const countriesResponse = await this.countryService.fetchCountries();
    return Object.values(countriesResponse);
  }
}

export default AvailableCountries;

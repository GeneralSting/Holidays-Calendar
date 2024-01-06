import CountryService from "../../../service/countryService";
import { Country } from "../../../types/country";
import handleError from "../../../utils/handleError";

class AvailableCountries {
  private countryService: CountryService;

  constructor() {
    this.countryService = new CountryService();
  }

  public async getAvailableCountries(): Promise<Country[]> {
    try {
      const countriesResponse = await this.countryService.fetchCountries();
      return Object.values(countriesResponse);
    } catch (error) {
      return handleError(error, "Failed to fetch available countries for input");
    }
  }
}

export default AvailableCountries;

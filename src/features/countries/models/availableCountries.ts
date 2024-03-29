import CountryService from "../services/countriesService";
import { Country } from "..";
import { handleError } from "../../../utils";

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

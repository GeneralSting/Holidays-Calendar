import { getCurrentYear } from "../../../utils/getDateInfo";
import handleError from "../../../utils/handleError";
import CountryService from "../services/countryService";
import { CountryHoliday } from "../types/countryHoliday";
import { CountryInfo } from "../types/countryInfo";
import { CountryLongWeekend } from "../types/countryLongWeekend";

class CountryModel {
  private countryService: CountryService;
  private countryCode: string;
  private year: number;

  constructor(countryCode: string, year: number = getCurrentYear()) {
    this.countryService = new CountryService();
    this.countryCode = countryCode;
    this.year = year;
  }

  public async countryInfo() {
    const countryInfo = await this.getCountryInfo();
    const nextHolidays = await this.getNextHolidays();

    return { countryInfo, nextHolidays };
  }

  public async countryHolidays() {
    const holidays = await this.getHolidays();
    const longWeekend = await this.getLongWeekend();

    return { holidays, longWeekend };
  }

  private async getCountryInfo(): Promise<CountryInfo> {
    try {
      const countryInfoResponse = await this.countryService.fetchCountryInfo(
        this.countryCode
      );
      return countryInfoResponse;
    } catch (error) {
      return handleError(
        error,
        "Failed to fetch country informations to display"
      );
    }
  }

  private async getNextHolidays(): Promise<CountryHoliday[]> {
    try {
      const countryNextHolidays = await this.countryService.fetchNextHolidays(
        this.countryCode
      );
      return countryNextHolidays;
    } catch (error) {
      return handleError(
        error,
        "Failed to fetch country next holidays to display"
      );
    }
  }

  private async getHolidays(): Promise<CountryHoliday[]> {
    try {
      const countryHolidays = await this.countryService.fetchHolidays(
        this.year,
        this.countryCode
      );
      return countryHolidays;
    } catch (error) {
      return handleError(error, "Failed to fetch country holidays to display");
    }
  }

  private async getLongWeekend(): Promise<CountryLongWeekend[]> {
    try {
      const countryLongWeekend = await this.countryService.fetchLongWeekend(
        this.year,
        this.countryCode
      );
      return countryLongWeekend;
    } catch (error) {
      return handleError(
        error,
        "Failed to fetch country long weekend to display"
      );
    }
  }
}

export default CountryModel;

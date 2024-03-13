import ApiService from "../../../service/apiService";
import { CountryHoliday } from "../types/countryHoliday";
import { CountryInfo } from "../types/countryInfo";
import { CountryLongWeekend } from "../types/countryLongWeekend";

class CountryService extends ApiService {
  protected countryInfoUrl: string;
  protected nextHolidaysUrl: string;
  protected countryHolidaysUrl: string;
  protected countryLongWeekendUrl: string;

  constructor() {
    super();
    this.countryInfoUrl = `${this.apiUrl}CountryInfo/`;
    this.nextHolidaysUrl = `${this.apiUrl}NextPublicHolidays/`;
    this.countryHolidaysUrl = `${this.apiUrl}PublicHolidays/`;
    this.countryLongWeekendUrl = `${this.apiUrl}LongWeekend/`;
  }

  public async fetchCountryInfo(countryCode: string): Promise<CountryInfo> {
    const finalUrl = `${this.countryInfoUrl}${countryCode}`;
    return await this.fetchData(finalUrl);
  }

  public async fetchNextHolidays(
    countryCode: string
  ): Promise<CountryHoliday[]> {
    const finalUrl = `${this.nextHolidaysUrl}${countryCode}`;
    return await this.fetchData(finalUrl);
  }

  public async fetchHolidays(
    year: number,
    countryCode: string
  ): Promise<CountryHoliday[]> {
    const finalUrl = `${this.countryHolidaysUrl}${year}/${countryCode}`;
    return await this.fetchData(finalUrl);
  }

  public async fetchLongWeekend(
    year: number,
    countryCode: string
  ): Promise<CountryLongWeekend[]> {
    const finalUrl = `${this.countryLongWeekendUrl}${year}/${countryCode}`;
    return await this.fetchData(finalUrl);
  }
}

export default CountryService;

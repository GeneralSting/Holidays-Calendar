abstract class ApiService {
  protected readonly apiUrl: string;

  constructor() {
    this.apiUrl = `https://date.nager.at/api/v3/`;
  }

  private async handleErrors<TData>(response: Response): Promise<TData> {
    if (!response.ok) {
      throw new Error("Not ok")
    }
    const responseData = await response.json();
    if (responseData && responseData.error) {
      throw new Error("error error")
    }

    return responseData as TData;
  }

  protected async fetchData<TData>(url: string): Promise<TData> {
      const response = await fetch(url);
      const responseData = await this.handleErrors(response);
      return responseData as TData;
  }
}

export default ApiService;
class AppError extends Error {
  private appLocation: string;
  private additionalMessage?: string;
  private status?: number;

  constructor(message: string, appLocation: string, status?: number, additionalMessage?: string) {
    super(message);
    this.appLocation = appLocation;
    this.status = status;
    this.additionalMessage = additionalMessage;
  }

  get getMessage() {
    return this.message;
  }
  
  get getAppLocation() {
    return this.appLocation;
  }

  get getStatus() {
    return this.status;
  }

  get getAdditionalMessage() {
    return this.additionalMessage;
  }

  set setAdditionalMessage(message: string) {
    this.additionalMessage = message;
  }
}

export default AppError;

import { ILocalStorage } from "../interfaces/ILocalStorage";

class LanguageStorage implements ILocalStorage {
  private defaultValue: string;
  private storageName: string;

  constructor(defaultValue: string = "en") {
    this.defaultValue = defaultValue;
    this.storageName = "userLanguage";
  }

  getValue(): string {
    return localStorage.getItem(this.storageName) || this.defaultValue;
  }
  
  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default LanguageStorage;
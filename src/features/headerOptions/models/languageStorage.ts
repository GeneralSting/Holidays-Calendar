import i18next from "i18next";
import { defaultLocale } from "../../languages";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class LanguageStorage implements ILocalStorage {
  private defaultValue: string;
  private storageName: string;

  constructor(defaultValue: string = defaultLocale) {
    this.defaultValue = defaultValue;
    this.storageName = "userLanguage";
    this.setI18nLanguage(this.getValue())
  }

  private setI18nLanguage(userLanugage: string): void {
    i18next.changeLanguage(userLanugage)
  }

  getValue(): string {
    return localStorage.getItem(this.storageName) || this.defaultValue;
  }
  
  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default LanguageStorage;
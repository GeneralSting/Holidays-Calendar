import i18next from "i18next";
import { defaultLocale } from "../../languages";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class LanguageStorage implements ILocalStorage {
  private static instance: LanguageStorage;
  private defaultValue: string;
  private storageName: string;

  // private constructor to prevent instantiation from outside
  private constructor(defaultValue: string = defaultLocale) {
    this.defaultValue = defaultValue;
    this.storageName = "userLanguage";
    this.setI18nLanguage(this.getValue());
  }

  // public static method to get the singleton instance
  public static getInstance(): LanguageStorage {
    if (!LanguageStorage.instance) {
      LanguageStorage.instance = new LanguageStorage();
    }
    return LanguageStorage.instance;
  }

  private setI18nLanguage(userLanguage: string): void {
    i18next.changeLanguage(userLanguage);
  }

  getValue(): string {
    return localStorage.getItem(this.storageName) || this.defaultValue;
  }

  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default LanguageStorage;

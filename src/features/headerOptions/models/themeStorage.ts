import { defaultTheme } from "../../themes";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class ThemeStorage implements ILocalStorage {
  private static instance: ThemeStorage;
  private defaultValue: string;
  private storageName: string;

  // private constructor to prevent instantiation from outside
  private constructor(defaultValue: string = defaultTheme) {
    this.defaultValue = defaultValue;
    this.storageName = "userTheme";
  }

  // public static method to get the singleton instance
  public static getInstance(): ThemeStorage {
    if (!ThemeStorage.instance) {
      ThemeStorage.instance = new ThemeStorage();
    }
    return ThemeStorage.instance;
  }

  getValue(): string {
    return localStorage.getItem(this.storageName) || this.defaultValue;
  }

  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default ThemeStorage;

import { lightCode } from "../../themes";
import { ILocalStorage } from "../interfaces/ILocalStorage";

class ThemeStorage implements ILocalStorage {
  private defaultValue: string;
  private storageName: string;

  constructor(defaultValue: string = lightCode) {
    this.defaultValue = defaultValue;
    this.storageName = "userTheme";
  }

  getValue(): string {
    return localStorage.getItem(this.storageName) || this.defaultValue;
  }

  setValue(value: string): void {
    localStorage.setItem(this.storageName, value);
  }
}

export default ThemeStorage;

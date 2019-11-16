import LoginForm from "./loginForm";
import NavMenu from "./navMenu";

export default class App {
  constructor(driver) {
    this.driver = driver;
  }

  get loginForm() {
    return new LoginForm(this.driver);
  }

  get navMenu() {
    return new NavMenu(this.driver);
  }

  load() {
    this.driver.url("/");
  }
}

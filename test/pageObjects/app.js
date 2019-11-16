import LoginForm from "./loginForm";
import NavMenu from "./navMenu";

export default class App {
  constructor(driver) {
    this.driver = driver;
  }

  get loginForm() {
    return new LoginForm(this.driver, () => this.driver.$("#loginForm"));
  }

  get navMenu() {
    return new NavMenu(this.driver, () => this.driver.$("nav"));
  }

  load() {
    this.driver.url("/");
  }
}

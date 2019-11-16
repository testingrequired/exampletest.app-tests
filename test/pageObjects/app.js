import LoginForm from "./loginForm";
import NavMenu from "./navMenu";
import PageObject from "./pageObject";

export default class App extends PageObject {
  constructor(driver) {
    super(driver, () => driver.$("body"));
  }

  get loginForm() {
    return this.$("#loginForm", LoginForm);
  }

  get navMenu() {
    return this.$("nav", NavMenu);
  }

  load() {
    this.driver.url("/");
  }
}

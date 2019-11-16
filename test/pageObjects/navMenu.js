import PageObject from "./pageObject";

export default class NavMenu extends PageObject {
  get userLink() {
    return this.driver.$("#userLink");
  }

  goToLogin() {
    this.userLink.click();
  }
}

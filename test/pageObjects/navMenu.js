import PageObject from "./pageObject";

export default class NavMenu extends PageObject {
  get userLink() {
    return this.root.$("#userLink");
  }

  goToLogin() {
    this.userLink.click();
  }
}

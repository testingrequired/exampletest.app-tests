import PageObject from "./pageObject";

export default class NavMenu extends PageObject {
  get userLink() {
    return this.$("#userLink");
  }

  get userLinkText() {
    return this.userLink.root.getText();
  }

  goToLogin() {
    this.userLink.root.click();
  }
}

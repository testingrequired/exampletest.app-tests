import PageObject from "./pageObject";

export default class NavMenu extends PageObject {
  get userLink() {
    return this.$("#userLink");
  }

  get userLinkText() {
    return this.userLink.root.getText();
  }

  get logoutLink() {
    return this.$("#logoutLink");
  }

  goToLogin() {
    this.userLink.root.click();
  }

  goToLogout() {
    this.logoutLink.root.click();
  }
}

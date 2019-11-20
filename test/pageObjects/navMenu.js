import PageObject from "./pageObject";

export default class NavMenu extends PageObject {
  get userLink() {
    return this.$("#userLink");
  }

  get userLinkText() {
    return this.userLink.tryRoot(root => root.getText());
  }

  get logoutLink() {
    return this.$("#logoutLink");
  }

  goToLogin() {
    this.userLink.tryRoot(root => root.click());
  }

  goToLogout() {
    this.logoutLink.tryRoot(root => root.click());
  }
}

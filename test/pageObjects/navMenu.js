export default class NavMenu {
  constructor(driver) {
    this.driver = driver;
  }

  get userLink() {
    return this.driver.$("#userLink");
  }

  goToLogin() {
    this.userLink.click();
  }
}

export default class PageObject {
  constructor(driver, root) {
    this.driver = driver;

    Object.defineProperty(this, "root", {
      enumerable: true,
      get: root
    });
  }
}

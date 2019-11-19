export default class PageObject {
  constructor(driver, root) {
    this.driver = driver;

    Object.defineProperty(this, "root", {
      enumerable: true,
      get: root
    });
  }

  querySelector(selector, PageObjectClass = PageObject) {
    return new PageObjectClass(this.driver, () => this.root.$(selector));
  }

  $(...args) {
    return this.querySelector(...args);
  }

  querySelectorAll(selector, PageObjectClass = PageObject) {
    const elements = this.root.$$(selector);
    const reducer = (pageObjects, element, i) =>
      new PageObjectClass(this.driver, () => elements[i]);
    return elements.reduce(reducer, []);
  }

  $$(...args) {
    return this.querySelectorAll(...args);
  }
}

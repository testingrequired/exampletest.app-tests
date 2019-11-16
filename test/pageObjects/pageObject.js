export default class PageObject {
  constructor(driver, root) {
    this.driver = driver;

    Object.defineProperty(this, "root", {
      enumerable: true,
      get: root
    });
  }

  $(selector, PageObjectClass = PageObject) {
    return new PageObjectClass(this.driver, () => this.root.$(selector));
  }

  $$(selector, PageObjectClass = PageObject) {
    const elements = this.root.elements(selector);

    return elements.reduce(
      (pageObjects, element, i) =>
        new PageObjectClass(this.driver, () => elements[i]),
      []
    );
  }
}

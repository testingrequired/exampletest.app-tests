export default class PageObject {
  constructor(driver, root) {
    this.driver = driver;
    this.rootCache;

    Object.defineProperty(this, "root", {
      enumerable: true,
      get: root
    });
  }

  tryRoot(fn) {
    if (typeof this.rootCache === "undefined") {
      this.rootCache = this.root;
    }

    try {
      return fn.call(null, this.rootCache);
    } catch (e) {
      if (e.name === "stale element error") {
        this.rootCache = this.root;

        return fn.call(null, this.rootCache);
      }

      throw e;
    }
  }

  querySelector(selector, PageObjectClass = PageObject) {
    return new PageObjectClass(this.driver, () =>
      this.tryRoot(root => root.$(selector))
    );
  }

  $(...args) {
    return this.querySelector(...args);
  }

  querySelectorAll(selector, PageObjectClass = PageObject) {
    const elements = this.tryRoot(root => root.$$(selector));
    const reducer = (pageObjects, element, i) =>
      new PageObjectClass(this.driver, () => elements[i]);
    return elements.reduce(reducer, []);
  }

  $$(...args) {
    return this.querySelectorAll(...args);
  }
}

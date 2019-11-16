import assert from "assert";
import App from "../pageObjects/app";

describe("Landing Page", () => {
  let app;

  beforeEach(() => {
    app = new App(browser);

    app.load();
  });

  it("should have the correct title", () => {
    assert.strictEqual(browser.getTitle(), "Lemon - Home");
  });
});

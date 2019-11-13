import assert from "assert";

describe("Landing Page", () => {
  it("should have the correct title", () => {
    browser.url("/");
    const title = browser.getTitle();
    assert.strictEqual(title, "Lemon - Home");
  });
});

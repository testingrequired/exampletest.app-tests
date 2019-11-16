const assert = require("assert");

describe("Logging In", () => {
  beforeEach(() => {
    browser.url("/");
  });

  it("should work", () => {
    browser.$("#userLink").click();

    browser.$("#username").setValue("testUser");

    browser.$("#password").setValue("password");

    browser.$("#loginButton").click();

    assert.strictEqual(browser.getUrl(), "https://exampletest.app/user");
  });
});

const assert = require("assert");

describe("Logging In", () => {
  beforeEach(() => {
    browser.url("/");
  });

  it("should work", () => {
    assert.strictEqual(browser.$("#userLink").getText(), "Login");

    browser.$("#userLink").click();

    browser.$("#username").setValue("testUser");

    browser.$("#password").setValue("password");

    browser.$("#loginButton").click();

    assert.strictEqual(browser.$("#userLink").getText(), "User");

    assert.strictEqual(browser.getUrl(), "https://exampletest.app/user");
  });
});

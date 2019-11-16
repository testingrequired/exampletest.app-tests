import assert from "assert";
import App from "../pageObjects/app";

describe("Logging In", () => {
  let app;

  beforeEach(() => {
    app = new App(browser);

    app.load();
  });

  it("should work", () => {
    assert.strictEqual(app.navMenu.userLink.getText(), "Login");

    app.navMenu.goToLogin();

    app.loginForm.login("testUser", "password");

    assert.strictEqual(app.navMenu.userLink.getText(), "User");

    assert.strictEqual(browser.getUrl(), "https://exampletest.app/user");
  });
});

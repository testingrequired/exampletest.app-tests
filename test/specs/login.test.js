import assert from "assert";
import App from "../pageObjects/app";

describe("Logging In", () => {
  const username = "testUser";
  const password = "password";

  let app;

  beforeEach(() => {
    app = new App(browser);

    app.load();
  });

  it("should work", () => {
    assert.strictEqual(app.navMenu.userLinkText, "Login");

    app.navMenu.goToLogin();

    app.loginForm.login(username, password);

    assert.strictEqual(app.navMenu.userLinkText, "User");

    assert.strictEqual(browser.getUrl(), "https://exampletest.app/user");
  });
});

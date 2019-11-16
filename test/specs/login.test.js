import assert from "assert";
import LoginForm from "../pageObjects/loginForm";
import NavMenu from "../pageObjects/navMenu";

describe("Logging In", () => {
  let navMenu;
  let loginForm;

  beforeEach(() => {
    navMenu = new NavMenu(browser);
    loginForm = new LoginForm(browser);

    browser.url("/");
  });

  it("should work", () => {
    assert.strictEqual(navMenu.userLink.getText(), "Login");

    navMenu.goToLogin();

    loginForm.login("testUser", "password");

    assert.strictEqual(navMenu.userLink.getText(), "User");

    assert.strictEqual(browser.$("#userLink").getText(), "User");

    assert.strictEqual(browser.getUrl(), "https://exampletest.app/user");
  });
});

import PageObject from "./pageObject";

export default class LoginForm extends PageObject {
  get username() {
    return this.root.$("#username");
  }

  get password() {
    return this.root.$("#password");
  }

  get loginButton() {
    return this.root.$("#loginButton");
  }

  fillLogin(username, password) {
    this.username.setValue(username);
    this.password.setValue(password);
  }

  login(username, password) {
    this.fillLogin(username, password);
    this.loginButton.click();
  }
}

import PageObject from "./pageObject";

export default class LoginForm extends PageObject {
  get username() {
    return this.$("#username");
  }

  get password() {
    return this.$("#password");
  }

  get loginButton() {
    return this.$("#loginButton");
  }

  fillLogin(username, password) {
    this.username.tryRoot(root => root.setValue(username));
    this.password.tryRoot(root => root.setValue(password));
  }

  login(username, password) {
    this.fillLogin(username, password);
    this.loginButton.tryRoot(root => root.click());
  }
}

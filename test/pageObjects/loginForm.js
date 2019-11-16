export default class LoginForm {
  constructor(driver) {
    this.driver = driver;
  }

  get username() {
    return this.driver.$("#username");
  }

  get password() {
    return this.driver.$("#password");
  }

  get loginButton() {
    return this.driver.$("#loginButton");
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

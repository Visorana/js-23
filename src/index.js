export default class Validator {
  constructor() {
    this.usernamePattern = /^[a-zA-Z](?!.*[0-9]{4})[a-zA-Z0-9_-]*[a-zA-Z]$/;
  }

  validateUsername(username) {
    return this.usernamePattern.test(username);
  }
}

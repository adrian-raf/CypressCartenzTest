export default class LoginPage {
  getEmail() {
    return cy.get("input[name='email']");
  }
  getBtnPassword() {
    return cy.contains('Kata sandi');
  }
  getPassword() {
    return cy.get("input[name='password']");
  }
  getInBtn() {
    return cy.get('.pb-2 > .btn');
  }
}

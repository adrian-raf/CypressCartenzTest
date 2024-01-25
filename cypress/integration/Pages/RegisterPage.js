export default class RegisterPage {
  regName() {
    return cy.get("input[name='fullName']");
  }
  regPassword() {
    return cy.get("input[name='password']");
  }
  regEmail() {
    return cy.get('#email');
  }
  regTelp() {
    return cy.get("input[name='telp']");
  }
  regConfirmPass() {
    return cy.get("input[name='confirmPassword']");
  }
  regBtnConfirm() {
    return cy.get('.pb-2 > .btn').click();
  }

  regBtnBack() {
    return cy.contains('Kembali ke login');
  }
  regBtnNext() {
    return cy.get(
      '#success_popup > .modal-dialog > .modal-content > .modal-body > :nth-child(4) > .col-md-12 > .btn'
    );
  }
}

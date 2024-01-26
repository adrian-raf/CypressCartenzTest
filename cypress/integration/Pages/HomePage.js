export default class HomePage {
  getKTP() {
    return cy.get(
      ':nth-child(7) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }

  getNama() {
    return cy.get(
      ':nth-child(9) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }
  getTempLahir() {
    return cy.get(
      ':nth-child(12) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }
  getSpreadsheet() {
    return cy.get(
      ':nth-child(49) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }
  getGithub() {
    return cy.get(
      ':nth-child(50) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }
  getVideo() {
    return cy.get(
      ':nth-child(51) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    );
  }
}

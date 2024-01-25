/// <reference types="cypress" />;
import RegisterPage from './Pages/RegisterPage';
import * as data from './/../fixtures/example.json';

const allData = data;
const register = new RegisterPage();

describe('Test register with existing account', () => {
  before(() => {
    cy.visit(Cypress.env('baseURL'));
  });

  it('test registration ', () => {
    cy.get('.float-right').click();
    register.regName().type(allData.name);
    register.regPassword().type(allData.password);
    register.regEmail().type(allData.email);
    register.regConfirmPass().type(allData.password);
    register.regTelp().type(allData.phone);
    register.regBtnConfirm().click();
    cy.wait(4000);
    cy.get('.modal-content').then((el) => {
      const text = el.text();
      expect(text.includes('Email Anda telah terdaftar')).to.be.true;
    });
    cy.wait(1000);

    register.regBtnNext().click();

    cy.get('.fa').click();
    cy.wait(1000);

    cy.contains('Ya').click();
  });
});

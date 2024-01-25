/// <reference types="cypress" />;
import LoginPage from './Pages/LoginPage';
import * as data from './/../fixtures/example.json';

const login = new LoginPage();
const allData = data;

describe('Test login', () => {
  before(() => {
    cy.visit(Cypress.env('baseURL'));
  });

  it('test login ', () => {
    //login
    login.getEmail().type(allData.email);
    login.getBtnPassword().click();
    login.getPassword().type(allData.password);
    login.getInBtn().click();
    cy.wait(5000);

    // Dashboard
    cy.get(':nth-child(1) > a > .submenu').click();
    cy.get('.citizen-list-layanan-flex').click();
    cy.wait(2000);
    // cy.get('.citizen-list-layanan-flex').click();

    cy.on('window:confirm', (text) => {
      expect(text).contains('internal.citigov.id wants to');
    });

    cy.get('.wizard-select > .css-yk16xz-control').type('pem');
    cy.get('#react-select-2-option-0').click();

    cy.get('#option_6856').check('1', { force: true }).should('be.checked');
    cy.get('#option_6859').check('2', { force: true }).should('be.checked');
    cy.get('#option_6862').check('2', { force: true }).should('be.checked');
    cy.get('#option_6868').check('6', { force: true }).should('be.checked');
    cy.get(
      ':nth-child(7) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('31245270229502');
    cy.get(
      ':nth-child(9) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type(allData.name);
    cy.get(
      ':nth-child(10) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Depok');

    cy.get('.rdt > .form-control');
    cy.get('.rdtPicker').click({ force: true });

    for (let i = 0; i < 3; i++) {
      cy.get('.rdtSwitch').click({ force: true });
    }
    for (let i = 0; i < 3; i++) {
      cy.get('.rdtPrev').click({ force: true });
    }

    // cy.get('.rdtYear')
    cy.get('tr td:nth-child(3)').each((el) => {
      if (el.text() === '1999') {
        cy.wrap(el).click({ force: true });
      }
    });
    cy.get('tr td:nth-child(2)').each((el) => {
      if (el.text() === 'Jun') {
        cy.wrap(el).click({ force: true });
      }
    });
    cy.get('tr td:nth-child(4)').each((el) => {
      if (el.text() === '02') {
        cy.wrap(el).click({ force: true });
      }
    });

    cy.get(
      ':nth-child(12) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Depok, Jabar');

    cy.get(
      ':nth-child(15) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .card-pelayanan-text-style-black > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('Ja');
    // cy.get('.css-4ljt47-MenuList').each((el) => {
    //   if (el.text() === 'Jawa Barat') {
    //     cy.wrap(el).click({ force: true });
    //   }
    // });
    cy.get('#react-select-3-option-3').click();

    cy.get(
      ':nth-child(16) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('Ja');
    cy.get('#react-select-4-option-3').click();

    cy.get(
      ':nth-child(16) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('de');
    cy.get('#react-select-5-option-24').click();

    cy.get(
      ':nth-child(17) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('ja');
    cy.get('#react-select-6-option-3').click();

    cy.get(
      ':nth-child(17) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('de');
    cy.get('#react-select-7-option-24').click();

    cy.get(
      ':nth-child(17) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(8) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('bej');
    cy.get('#react-select-8-option-0').click();

    cy.get(
      ':nth-child(18) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('ja');
    cy.get('#react-select-9-option-3').click();

    cy.get(
      ':nth-child(18) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('de');
    cy.get('#react-select-10-option-24').click();

    cy.get(
      ':nth-child(18) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(8) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('bej');
    cy.get('#react-select-11-option-0').click();

    cy.get(
      ':nth-child(18) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(11) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('bej');
    cy.get('#react-select-12-option-0').click();

    cy.get(
      ':nth-child(19) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type(allData.phone);

    cy.get(
      ':nth-child(30) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Indonesia');

    cy.get(
      ':nth-child(32) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .card-pelayanan-text-style-black > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('jak');
    cy.get('#react-select-13-option-20').click();

    cy.get(
      ':nth-child(33) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('jak');
    cy.get('#react-select-14-option-20').click();

    cy.get(
      ':nth-child(33) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('pu');
    cy.get('#react-select-15-option-2').click();

    cy.get(
      ':nth-child(34) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('jak');
    cy.get('#react-select-16-option-20').click();

    cy.get(
      ':nth-child(34) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('pu');
    cy.get('#react-select-17-option-2').click();

    cy.get(
      ':nth-child(34) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(8) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('men');
    cy.get('#react-select-18-option-4').click();

    cy.get(
      ':nth-child(35) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(2) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('jak');
    cy.get('#react-select-19-option-20').click();

    cy.get(
      ':nth-child(35) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(5) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('pu');
    cy.get('#react-select-20-option-2').click();

    cy.get(
      ':nth-child(35) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(8) > .css-yk16xz-control'
    ).type('men');
    cy.get('#react-select-21-option-4').click();

    cy.get(
      ':nth-child(35) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > :nth-child(11) > .css-yk16xz-control > .css-g1d714-ValueContainer'
    ).type('cik');
    cy.get('#react-select-22-option-0').click();

    cy.get(
      ':nth-child(41) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Capek sekali');

    cy.get(
      ':nth-child(42) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('21');

    cy.get(
      ':nth-child(43) > .col-md-12 > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .fa'
    ).click();

    cy.get(
      ':nth-child(1) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('10');

    cy.get(
      ':nth-child(2) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('20');

    cy.get(
      ':nth-child(3) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('30');

    cy.get('.col-md-12 > .row > .text-right > .btn').click();

    cy.get(
      ':nth-child(46) > .col-md-12 > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .fa'
    ).click();
    cy.get(
      ':nth-child(1) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Jakarta');
    cy.get(
      ':nth-child(2) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Menteng');
    cy.get(
      ':nth-child(3) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Cikini');
    cy.get(
      ':nth-child(4) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type('Jakarta Pusat');

    cy.get('.col-md-12 > .row > .text-right > .btn').click();

    // link spreadshit
    cy.get(
      ':nth-child(49) > .col-md-12 > :nth-child(1) > :nth-child(1) > .form-group > .form-control'
    ).type(
      'https://docs.google.com/spreadsheets/d/1xY53MJl_TMIOt7abR5BNBnp80S2KefbadNVmOiovJ1s/edit?usp=sharing'
    );
  });
});

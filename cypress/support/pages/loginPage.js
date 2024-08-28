//Classe Login que vai ser instanciado no e2e
//Criação da Classe Login para digitar os dados de login válido, inválido e entrar na conta
import { faker } from '@faker-js/faker/locale/pt_BR';
import LoginElements from '../elements/loginElements';

const loginElements = new LoginElements();
const phoneNumber = ('11777777777');
const password = ('Teste@123')
const phoneNumberInvalid = ('11000000000');
const email = faker.internet.email();


class LoginPage {
  fillLoginFields() {
    cy.get(loginElements.userField()).should('be.visible').clear().type(phoneNumber);
    cy.get(loginElements.passField()).should('be.visible').clear().type(password);
  }

  loginInvalid () {
    cy.get(loginElements.userField()).should('be.visible').clear().type(phoneNumberInvalid);
    cy.get(loginElements.passField()).should('be.visible').clear().type(password);
  } 

  loginInvalidCustomer () {
    cy.get(loginElements.userField()).should('be.visible').clear().type(email);
    cy.get(loginElements.passField()).should('be.visible').clear().type(password);
  } 

  submitLogin() {
    cy.get(loginElements.signinButton()).should('be.visible').click();
  }
}
export default LoginPage;

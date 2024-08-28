import HomePage from '../support/pages/homePage';
import HeaderPage from '../support/pages/headerPage';
import LoginPage from '../support/pages/loginPage';

const homePage = new HomePage;
const headerPage = new HeaderPage;
const loginPage = new LoginPage;

//BDD do Login Inválido para a conta do Cliente
describe('Validação de Login Inválido', () => {
    it('Dado que acesso a página do site fm-site-br', () => {
        cy.visit('/')
        homePage.submitBanner();
    })
    
    it('Clicar na opção do header para realizar login como Cliente', () => {
      headerPage.openLoginPageCustomer();
    })
    
    it('E preencher os dados de um cadastro que não foi realizado', () => {
      loginPage.loginInvalidCustomer();
    })
  
    it('A conta do Cliente não terá acesso ao perfil', () => {
      loginPage.submitLogin();
      cy.wait(2000)
    })
})
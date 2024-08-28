import HomePage from '../support/pages/homePage';
import HeaderPage from '../support/pages/headerPage';
import LoginPage from '../support/pages/loginPage';

const homePage = new HomePage;
const headerPage = new HeaderPage;
const loginPage = new LoginPage;

//BDD do Login Válido para a conta do Anunciante
describe('Validação de Login Válido', () => {
    it('Dado que acesso a página do site fm-site-br', () => {
      cy.visit('/')
      homePage.submitBanner();
    })

    it('Quando clicar na opção do header para realizar login como Anunciante', () => {
        headerPage.openLoginPage();
    })

    it('E preencher os dados de um cadastro que já foi realizado', () => {
        loginPage.fillLoginFields();
      })

    it('Então a conta do Anunciante terá acesso ao perfil', () => {
        loginPage.submitLogin();
        cy.wait(2000)
        headerPage.disconnectAccount();
    })

//BDD do Login Inválido para a conta do Anunciante
describe('Validação de Login Inválido', () => {
  it('Dado que acesso a página do site fm-site-br', () => {
    cy.wait(2000)
  })
  
  it('Quando clicar na opção do header para realizar login como Anunciante', () => {
    headerPage.openLoginPage();
  })
  
  it('E preencher os dados de um cadastro que não foi realizado', () => {
    loginPage.loginInvalid();
  })

  it('Então a conta do Anunciante não terá acesso ao perfil', () => {
    loginPage.submitLogin();
    cy.wait(2000)
  })
  
 })

})    

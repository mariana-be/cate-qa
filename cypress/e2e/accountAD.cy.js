import HomePage from '../support/pages/homePage';
import HeaderPage from '../support/pages/headerPage';
import AccountPage from '../support/pages/accountPage';
import LoginPage from '../support/pages/loginPage';

const homePage = new HomePage;
const headerPage = new HeaderPage;
const accountPage = new AccountPage;
const loginPage = new LoginPage;

//BDD do Login Válido para a conta do Anunciante
describe('Validação do preenchimento de cadastro do Anunciante', () => {
    it('Dado que acesso a página do site fm-site-br', () => {
      cy.visit('/')
      homePage.submitBanner();
    })

    it('Quando clicar na opção do header para realizar login em um cadastro de Anunciante que falta ser finalizado', () => {
        headerPage.openLoginPage();
        cy.wait(2000);
        accountPage.accountUser();
        loginPage.submitLogin();
    })

    it('E preencher os dados corretos para terminar a edição do perfil', () => {
        accountPage.pageOneEdition();
        accountPage.continueButton(); 
        accountPage.pageTwoEdition();
        accountPage.continueButton();
        accountPage.pageThreeEdition();
        accountPage.continueButton();
        accountPage.pageFourEdition();
      })   

    it('Então a conta do Anunciante  irá mostrar a mensagem que foi editado com sucesso', () => {
        accountPage.continueButton();
        cy.wait(2000)
    })
  
  })

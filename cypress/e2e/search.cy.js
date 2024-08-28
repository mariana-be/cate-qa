import HomePage from '../support/pages/homePage';
import SearchPage from '../support/pages/searchPage';

const homePage = new HomePage;
const searchPage = new SearchPage;

//BDD do Login Válido para a conta do Anunciante
describe('Validação de busca por anunciante no site', () => {
    it('Dado que acesso a página do site fm-site-br', () => {
      cy.visit('/')
      homePage.submitBanner();
    })

    it('Quando realizar a pesquisa na Home de uma cidade para localizar um Anunciante', () => {
       searchPage.searchAD();
    })

    it('Então deverá ser listado o Anunciante do local em que foi pesquisado', () => {
        cy.wait(2000)
    })

})
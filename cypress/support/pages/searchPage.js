//Classe Search que vai ser instanciado no e2e
//Criação da Classe Search para realizar a busca do Anunciante no Site
import SearchElements from '../elements/searchElements';

const searchElements = new SearchElements();
const searchCity = ('São Paulo')

class SearchPage {
    searchAD() {
        cy.get(searchElements.searchField()).click({ force: true });
        cy.get(searchElements.selectSearchField()).should('be.visible').type(searchCity);
        cy.get(searchElements.listSearchField()).should('be.visible');
        cy.get(searchElements.itemSearchField()).click({ force: true });
        cy.scrollTo('bottom', { duration: 20000 })
    }
}
export default SearchPage; 
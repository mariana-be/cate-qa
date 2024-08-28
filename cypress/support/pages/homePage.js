//Classe Home que vai ser instanciado no e2e
//Criação da Classe Home em que aparece o banner ao entrar no site

import HomeElements from '../elements/homeElements';

const homeElements = new HomeElements();

class HomePage {
    submitBanner() {
        cy.get(homeElements.bannerHome()).click();
    }
}
export default HomePage;  
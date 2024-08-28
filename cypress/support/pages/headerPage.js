//Classe Header que vai ser instanciado no e2e
//Criação da Classe Header para entrar no login e desconectar da conta

import HeaderElements from '../elements/headerElements';

const headerElements = new HeaderElements();

class Header {
    openLoginPage() { 
      cy.get(headerElements.loginButtonOption()).should('be.visible').click();
      cy.get(headerElements.loginButtonAnunciate()).should('be.visible').click();
    }

    openLoginPageCustomer() { 
      cy.get(headerElements.loginButtonOption()).should('be.visible').click();
      cy.get(headerElements.loginButtonCustomer()).should('be.visible').click();
    }

    disconnectAccount() {
      cy.get(headerElements.profileMenu ()).click();
      cy.get(headerElements.disconnectAccount()).click();
    }
}
export default Header;    
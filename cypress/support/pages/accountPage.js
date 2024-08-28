//Classe Account que vai ser instanciado no e2e/cadastro
//Criação da Classe Account para digitar os dados válidos da edição de perfil do Anunciante
//Importação e utilização da classe Faker
import { faker } from '@faker-js/faker/locale/pt_BR';
import AccountElements from '../elements/accountElements';

const accountElements = new AccountElements();
const phoneNumber = ('(11) 92222-2222');
const password = ('Teste@123')
const city = ('São Paulo');
const neighborhood = ('Jardim Japão')
const zone = ('Norte')
const reference = ('Ao lado do Parque Oyeno')
const nearbyCity = ('Rio de Janeiro')
let birthDay = faker.date.between('1990-01-01T00:00:00.000Z', '2000-01-01T00:00:00.000Z');
birthDay = birthDay.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
const email = faker.internet.email();
const weight = ('80');
const height = ('1.62');
const name = faker.name.lastName();
const statusPhrase = ('Eu sou forte e corajosa')
const description = ('Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo')
const price = ('500')


class AccountPage {
    accountUser(){
        cy.get(accountElements.telephone()).should('be.visible').clear().type(phoneNumber);
        cy.get(accountElements.pass()).should('be.visible').clear().type(password);

    }
    //Automação da primeira página de edição do cadastro de Anunciante
    pageOneEdition(){
        cy.get(accountElements.cityField()).should('be.visible').type(city);
        cy.get(accountElements.cityTypeField()).should('be.visible').click({ force:true });

        cy.get(accountElements.neighborhoodField()).should('be.visible').type(neighborhood);
        cy.wait(2000)
        cy.get(accountElements.neighborhoodTypeField()).should('be.visible').click({ force:true });

        cy.get(accountElements.zoneField()).should('be.visible').type(zone);
        cy.get(accountElements.zoneTypeField()).should('be.visible').click({ force: true });

        cy.get(accountElements.referenceField()).should('be.visible').type(reference);

        cy.get(accountElements.zoneField()).should('be.visible').click({ force: true });

        cy.get(accountElements.nearbyClickField()).should('be.visible').click({ force: true });
        cy.get(accountElements.nearbyCityField()).should('be.visible').type(nearbyCity);
        cy.get(accountElements.nearbyTypeField()).should('be.visible').click({ force: true });

    }
   //Automação da segunda página de edição do cadastro de Anunciante
    pageTwoEdition(){
        cy.get(accountElements.birthDateField()).click({ force: true }).type(JSON.stringify(birthDay));
        cy.get(accountElements.emailField()).click().type(email);

        cy.get(accountElements.genderField()).should('be.visible').click();
        cy.get(accountElements.genitaliaField()).should('be.visible').click();
        cy.get(accountElements.sexualOrientationField()).should('be.visible').click();

        cy.get(accountElements.ethnicityField()).select(1);
        cy.get(accountElements.hairField()).select(4);
        cy.get(accountElements.hairSizeField()).select(4);
        cy.get(accountElements.eyesField()).select(2);

        cy.get(accountElements.weightField ()).should('be.visible').type(weight);
        cy.get(accountElements.heightField()).should('be.visible').type(height);

        cy.get(accountElements.footSize()).select(20);

        cy.get(accountElements.siliconeSize()).click();
    }
    
    pageThreeEdition(){
        cy.get(accountElements.firstNameField()).should('be.visible').click().type(name);
        cy.get(accountElements.policyNameField()).should('be.visible').click();

        cy.get(accountElements.statusField()).should('be.visible').type(statusPhrase);
        cy.wait(2000)
        cy.get(accountElements.descriptionField()).should('be.visible').type(description);
        cy.wait(2000)

        cy.get(accountElements.serviceField()).should('be.visible').click();
        cy.get(accountElements.customerQuantityField()).should('be.visible').click();
        cy.get(accountElements.behaviourField()).should('be.visible').click();
        cy.get(accountElements.preferenceField()).should('be.visible').click();
        cy.get(accountElements.localField()).should('be.visible').click();
    }

    pageFourEdition() {
        cy.get(accountElements.priceField()).should('be.visible').type(price);
        cy.get(accountElements.paymentMethodField()).click();
        cy.get(accountElements.optionField()).click();
        cy.get(accountElements.optionField1()).click();
    }

    continueButton(){
        cy.get(accountElements.continueButton()).should('be.visible').click();
    }  
}
export default AccountPage;
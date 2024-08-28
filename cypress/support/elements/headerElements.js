//Elementos do Header

class HeaderElements {

    loginButtonOption = () => '#login > .sign-button__action > .sign-button__title';

    loginButtonAnunciate = () => '.sign-button__tooltip > [href="https://fm-site-br/login"]'

    profileMenu = () => '.btn-menu'
    
    disconnectAccount = () => ':nth-child(10) > .menu-link'

    loginButtonCustomer = () => '.sign-button__tooltip > [href="https://fm-site-br/login?consumer"]'
}
export default HeaderElements;
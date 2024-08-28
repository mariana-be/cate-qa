//Elementos do Account

class AcccountElements {

    //Elementos para logar na conta e os dados da primeira página de edição do cadastro
    telephone = () => '[data-v-29fbe8d3=""][data-v-20c2799e=""] > .mdc-text-field > .mdc-text-field__input';

    pass = () => 'div[data-v-3d704028=""][data-v-20c2799e=""] > .mdc-text-field > .mdc-text-field__input';

    cityField = () => '#vs1__combobox > .vs__selected-options > .vs__search';

    cityTypeField = () => '#vs1__option-0';

    neighborhoodField = () => '#vs2__combobox > .vs__selected-options > .vs__search';

    neighborhoodTypeField = () => '#vs2__option-0';

    zoneField = () => '#vs3__combobox > .vs__selected-options > .vs__search';

    zoneTypeField = () => '#vs3__option-0';

    referenceField = () => '.reference-point > input';

    nearbyClickField = () => '.add-nearby-city > .fm-button > .transparent-primary';

    nearbyCityField = () => '#vs6__combobox > .vs__selected-options > .vs__search';

    nearbyTypeField  = () => '#vs6__option-0';

    continueButton  = () => '.filled';

    birthDateField = () => '.personal-data > :nth-child(2) > .mdc-text-field > .mdc-text-field__input';

    emailField = () => '.personal-data > :nth-child(3) > .mdc-text-field > .mdc-text-field__input';

    //Elementos que constam na segunda página de edição do cadastro
    genderField = () => ':nth-child(5) > :nth-child(2) > .personal-data__radio-select > div > .fm-radio-button';

    genitaliaField = () => ':nth-child(7) > :nth-child(1) > .personal-data__radio-select > div > .fm-radio-button';

    sexualOrientationField = () => '.personal-data__radio.mb-20 > :nth-child(1) > .personal-data__radio-select > div > .fm-radio-button';

    ethnicityField = () => '.mt-20 > .mdc-select__native-control';

    hairField = () => ':nth-child(11) > .mdc-select__native-control';

    hairSizeField = () => ':nth-child(12) > .mdc-select__native-control';

    eyesField = () => ':nth-child(13) > .mdc-select__native-control';

    weightField = () => '.personal-data__two-column > :nth-child(1) > .mdc-text-field > .mdc-text-field__input';

    heightField = () => '.personal-data__two-column > :nth-child(2) > .mdc-text-field > .mdc-text-field__input';

    footSize = () => ':nth-child(15) > .mdc-select__native-control';

    siliconeSize = () => '#switch-silicone';

    //Elementos que constam na terceira página de edição do cadastro
    firstNameField = () => '.professional-data > :nth-child(3) > .mdc-text-field > .mdc-text-field__input';

    policyNameField = () => '.professional-data__name-policies > label';

    statusField = () => ':nth-child(6) > .mdc-text-field > .mdc-text-field__input';

    descriptionField = () => '[data-v-2dc41d30=""][data-v-6bf93c2c=""] > .mdc-text-field > .mdc-text-field__input';

    serviceField = () => ':nth-child(11) > .professional-data__checkbox > div > .checkbox__container';

    customerQuantityField = () => '[data-v-0149aece=""][data-v-6bf93c2c=""] > :nth-child(1)';

    behaviourField = () => ':nth-child(20) > .professional-data__checkbox > div > .checkbox__container > .checkmark';

    preferenceField = () => ':nth-child(22) > .professional-data__checkbox > div > .checkbox__container > .checkmark';

    localField = () => '.attend-locations > :nth-child(2) > label';

    //Elementos que constam na quarta página de edição do cadastro
    priceField = () => '.required > .price-data__duration-value > [data-v-5c073949=""] > .mdc-text-field > .mdc-text-field__input';

    paymentMethodField = () => '#switch-bankTransfer';

    optionField = () => ':nth-child(1) > [data-v-6209035a=""] > .service__checkbox-option > .switch__container > label';

    optionField1 = () => ':nth-child(34) > [data-v-6209035a=""] > .service__checkbox-option > .switch__container > label';
}
export default AcccountElements;